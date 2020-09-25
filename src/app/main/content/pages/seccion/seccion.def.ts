import { SECCION_CREATE_FORM_FIELDS_DEF } from './form/seccion.create.fields';
import { SECCION_UPDATE_FORM_FIELDS_DEF } from './form/seccion.update.fields';
import { SECCION_READ_FORM_FIELDS_DEF } from './form/seccion.read.fields';
import { SECCION_FILTER_FORM_FIELDS_DEF } from './form/seccion.filter.fields';
import { SECCION_SECURITY_DEF } from './security/seccion.security';
import { SECCION_GRID_DEF } from './grid/seccion.grid';
import { SECCION_I18N_DEF } from './i18n/seccion.i18n';
import { SECCION_NAV_DEF } from './navigation/seccion.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const SECCION_DEF: CrudDef = { 
    name: 'SECCION',
    i18n: SECCION_I18N_DEF,
    grid: SECCION_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef : {
        create : {
            fields : SECCION_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update : {
            fields : SECCION_UPDATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        } 
    },
    forms: {
        filter: SECCION_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        read:  SECCION_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: SECCION_NAV_DEF,
    security: SECCION_SECURITY_DEF,
    ws: {
        key: 'SECCION_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Section'
    },
    dialogConfig: {
        width: '900px'
    }
};
