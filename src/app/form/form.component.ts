import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../intefaces/product';
import { DataLayerService } from '../global-services/data-layer.service';
import { map, take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  type: string = 'create';
  general_form: FormGroup;
  item: any;
  visible = false;
  id: string;
  form_data = new FormData();


  constructor(
    private ra: ActivatedRoute,
    private http_client: DataLayerService
  ) { }

  async ngOnInit() {
    this.type = this.ra.snapshot.paramMap.get('type');
    this.id = this.ra.snapshot.paramMap.get('id');

    const url = `${environment.global_url}Products/${this.id}`;

    if (this.type === 'update')
      this.item = await this.http_client.client.get<Product>(`${environment.global_url}Products/${this.id}`).toPromise();

    this.general_form = new FormGroup({
      name: new FormControl(this.item?.name, [Validators.required, Validators.maxLength(100)]),
      price: new FormControl(this.item?.price, [Validators.required, Validators.min(0), Validators.max(1000)]),
      company: new FormControl(this.item?.company, [Validators.required, Validators.maxLength(50)]),
      ageRestriction: new FormControl(this.item?.ageRestriction, [Validators.min(0), Validators.max(100)]),
      description: new FormControl(this.item?.description, [Validators.maxLength(100)]),
      imagen: new FormControl()
    });
    this.visible = true;
  }

  onChange(file){
    console.log('el envio ', file);
    this.form_data.append('imagen', file);
  }

  submit() {

     this.form_data.append('name', this.general_form.get('name').value)
    this.form_data.append('price', this.general_form.get('price').value)
    this.form_data.append('company', this.general_form.get('company').value)
    this.form_data.append('ageRestriction', this.general_form.get('ageRestriction').value)
    this.form_data.append('description', this.general_form.get('description').value)
   // form_data.append('imagen', this.general_form.get('imagen').value) 

    /*
    Object.entries( this.general_form.value ).forEach( ([key,value]:any[])=>{
      this.form_data.set( key, value );
    });*/


    console.log('fomr data ', this.form_data);

    console.log('enviando', this.general_form);
    if( this.type === 'update'){
      this.http_client.client.patch( `${environment.global_url}Products/${this.id}`, this.form_data) 
      .subscribe( {
        next: (data)=>console.log('daa en el siguiente ', data),
        error: (err)=>console.log('data en el error ', err)
      });
    }else{

      this.http_client.client.put( `${environment.global_url}Products`, this.form_data) 
      .subscribe( {
        next: (data)=>console.log('daa en el siguiente ', data),
        error: (err)=>console.log('data en el error ', err)
      });
    }
  }
}
