import { Routes } from '@angular/router';
import { AuthGuardService } from '../../../modules/fwk/core/service/security/auth-guard.service';
import { environment } from 'environments/environment';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IMAGEN_DEF } from '../pages/imagen/imagen.def';
import { SECCION_DEF } from './seccion/seccion.def';
import { SECTION_CONTENT_DEF } from './section_content/section_content.def';
import { SECTION_TOPIC_DEF } from './section_topic/section_topic.def';
import { BANNER_CAMPAING_DEF } from './banner_campaing/banner_campaing.def';
import { BANNER_DEF } from './banner/banner.def';
import { BOLETIN_DEF } from './boletin/boletin.def';
import { FORMULARIO_DEF } from './formulario/formulario.def';
import { CAMPO_DEF } from './campo/campo.def';
import { OPCION_DEF } from './opcion/opcion.def';
import { BOLETIN_CONTENIDO_DEF } from './boletin_contenido/boletin_contenido.def';
import { INDICE_DEF } from './indice/indice.def';
import { CONTENIDO_DEF } from './contenido/contenido.def';
import { PRODUCTO_EXTERNO_DEF } from './producto_externo/producto_externo.def';
import { CONTENT_IMAGE_DEF } from './content_image/content_image.def';
import { TAG_SELECTION_DEF } from './tag_selection/tag_selection.def';
import { MAILING_DEF } from './mailing/mailing.def';
import { FORM_RESPONSE_DEF } from './form_response/form_response.def';
import { IntegrationComponent } from '../integration/integration.component';

export const ROUTES: Routes = [  
    { 
      path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [AuthGuardService]
    },
    {
      path: IMAGEN_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: SECCION_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: SECTION_CONTENT_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: SECTION_TOPIC_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: BANNER_CAMPAING_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: BANNER_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: BOLETIN_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: FORMULARIO_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: CAMPO_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: OPCION_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: BOLETIN_CONTENIDO_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: INDICE_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: PRODUCTO_EXTERNO_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: CONTENIDO_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: CONTENT_IMAGE_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: TAG_SELECTION_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: MAILING_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: FORM_RESPONSE_DEF.navigation.url.split('/')[1],
      component: IntegrationComponent,
      canActivate: [AuthGuardService]
    }
];


