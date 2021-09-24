import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-ecommerce-checkout-item',
  templateUrl: './ecommerce-checkout-item.component.html',
  styleUrls: ['./ecommerce-checkout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EcommerceCheckoutItemComponent implements OnInit {
  // Input Decorator
  @Input() product;

  /**
   * Constructor
   *
   * @param {EcommerceService} _ecommerceService
   */
  constructor() {}

  /**
   * Remove From Cart
   *
   * @param product
   */
  removeFromCart(product) {
    // if (product.isInCart === true) {
    // }
  }

  /**
   * Toggle Wishlist
   *
   * @param product
   */
  toggleWishlist(product) {
    // if (product.isInWishlist === true) {
    // } else {
    // }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {}
}
