import { NoImagePipe } from './no-image.pipe';
import { Product } from '../intefaces/product';
import { product_list } from '../mocks/product_list';

describe('NoImagePipe', () => {
  let pipe: NoImagePipe;

  beforeAll(()=>{
     pipe = new NoImagePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  fit('Should get default image', ()=>{
    //arrange
    const item_mock_product: Product = product_list[0];
    
    //act
    const defualt_image_name = pipe.transform( item_mock_product );

    //expect
    expect(defualt_image_name).toContain('assets');
    
  });

  fit('Should get "valid" image', ()=>{
    //arrange
    const item_mock_product: Product = product_list[1];
    
    //act
    const valid_image_name = pipe.transform( item_mock_product );

    //expect
    expect(valid_image_name).not.toContain('assets');
    
  });

});
