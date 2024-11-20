import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    {path: "datenschutzerklaerung", component: PrivacyPolicyComponent},
    {path: "impressum", component: ImprintComponent}
];
