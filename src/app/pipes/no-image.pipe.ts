import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {



  transform(item: any ): string {
    if( item?.ruta_imagen )
      return `${environment.global_url}Images/${item.ruta_imagen}`;
    else return 'assets/no-image.jpg'
  }

}
