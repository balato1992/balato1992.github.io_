import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { TflNgxChartsLineChartDirective } from './directives/tfl-ngx-charts-line-chart.directive';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { InvestmentVersusPageComponent } from './pages/investment-versus-page/investment-versus-page.component';
import { PageProjectsAndExamplesComponent } from './pages/page-projects-and-examples/page-projects-and-examples.component';



@NgModule({
  declarations: [
    AppComponent,
    InvestmentPageComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    InvestmentResultComponent,
    TflNgxChartsLineChartDirective,
    SidenavComponent,
    InvestmentVersusPageComponent,
    SidenavComponent,
    PageProjectsAndExamplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
