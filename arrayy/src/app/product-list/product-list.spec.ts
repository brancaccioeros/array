import { ComponentFixture, TestBed } from '@angular/core/testing';
// 1. Correggiamo il nome della classe in ProductListComponent
import { ProductListComponent } from './product-list'; 

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 2. Anche qui, dichiariamo il componente corretto
      imports: [ProductListComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});