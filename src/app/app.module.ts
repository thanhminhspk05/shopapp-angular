import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OrderConfirmComponent } from "./order-confirm/order-confirm.component";
import { OrderComponent } from "./order/order.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailProductComponent,
    OrderComponent,
    OrderConfirmComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [
    // HomeComponent,
    // DetailProductComponent,
    // OrderComponent,
    // OrderConfirmComponent,
    LoginComponent,
    // RegisterComponent,
  ],
})
export class AppModule {}
