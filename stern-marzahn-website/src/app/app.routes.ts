import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "datenschutzerklaerung", component: PrivacyPolicyComponent},
    {path: "impressum", component: ImprintComponent},
    {path: "kontakt", component: ContactComponent},
    {path: "nutzungsbedingungen", component: TermsOfUseComponent}
];
