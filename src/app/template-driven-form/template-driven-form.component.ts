import { ViaCepService } from './../via-cep.service';
import { Model } from './../model';
import { Component } from '@angular/core';



@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  isLoading: boolean = false;
  cep = '';
  endereco: any = {};
  countryData = ['India', 'US', 'UK'];
  showPopup = false;
  model: Model = {
    address: '',
    city: '',
    state: '',
    cep: '',
    country: '',
    aggrement: false,
  };
  erro: string | null = null; // adiciona a propriedade 'erro'
  agreedToTerms = false;

  constructor(private viaCepService: ViaCepService) {}

  onFormSubmit() {}

  private cepTimeout: any; // Declare a class variable to store the timeout ID

  saveCEP(): void {
    // Remove todos os caracteres que não forem números do valor do CEP
    const cepNumeros = this.cep.replace(/\D+/g, '');

    this.isLoading = true;
    this.erro = ''; // Clear the error message immediately

    // Clear the previous timeout (if any) before starting a new one
    if (this.cepTimeout) {
      clearTimeout(this.cepTimeout);
    }

    this.cepTimeout = setTimeout(() => {
      this.viaCepService.buscarPorCep(cepNumeros).subscribe(model => {
        if (model) {
          // Atualiza o objeto model com as informações do endereço
          this.model = model;
          console.log(model);
        }
      }, error => {
        this.erro = 'CEP inválido';
      }).add(() => {
        this.isLoading = false;
      });
    }, 500);
  }

   // Add a class variable to track whether the user has agreed to the terms

  // Add a method to handle changes to the checkbox
  onAgreementChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.agreedToTerms = true;
    } else {
      this.agreedToTerms = false;
    }
  }
}


