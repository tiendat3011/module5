import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteId: number;
  deleteName: string;

  constructor(private productService: ProductService,
              private modalService: NgbModal) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  saveProduct(product) {
    this.products.push(product);
  }

  openDelete(targetModal, product: Product): void {
    this.deleteId = product.id;
    this.deleteName = product.name;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'md'
    });
  }

  onDelete(): void {
    this.productService.deleteProduct(this.deleteId);
    this.ngOnInit();
    this.modalService.dismissAll();
  }
}
