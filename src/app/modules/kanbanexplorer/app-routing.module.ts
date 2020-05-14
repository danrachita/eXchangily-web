import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockDetailsComponent } from './components/block-details/block-details.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TxDetailsComponent } from './components/tx-details/tx-details.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"block-detail/:blockNumber",component:BlockDetailsComponent},
  {path:"tx-detail/:txhash",component:TxDetailsComponent},
  {path:"address-detail/:address",component:AddressDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
