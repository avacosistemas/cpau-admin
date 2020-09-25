import { BOLETIN_CREATE_FORM_FIELDS_DEF } from './form/boletin.create.fields';
import { BOLETIN_UPDATE_FORM_FIELDS_DEF } from './form/boletin.update.fields';
import { BOLETIN_READ_FORM_FIELDS_DEF } from './form/boletin.read.fields';
import { BOLETIN_FILTER_FORM_FIELDS_DEF } from './form/boletin.filter.fields';
import { BOLETIN_SECURITY_DEF } from './security/boletin.security';
import { BOLETIN_GRID_DEF } from './grid/boletin.grid';
import { BOLETIN_I18N_DEF } from './i18n/boletin.i18n';
import { BOLETIN_NAV_DEF } from './navigation/boletin.nav';
import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';

// Definicion de un template crud(Create,Read,Update and Delete)
export const BOLETIN_DEF: CrudDef = { 
    name: 'BOLETIN',
    i18n: BOLETIN_I18N_DEF,
    grid: BOLETIN_GRID_DEF, // Si el crud tiene grilla, entonces se agrega su definicion.
    formsDef: {
        create: {
            initWs: {
                key: 'BOLETIN_CREATE_INIT_WS',
                url: PREFIX_DOMAIN_API + 'Boletin/InitCreateForm'
            },
            fields: BOLETIN_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update : {
            showSubmitContinue: true,
            fields: BOLETIN_UPDATE_FORM_FIELDS_DEF
        }
    },
    forms: {
        filter: BOLETIN_FILTER_FORM_FIELDS_DEF, // Si el crud tiene campos de busqueda, entonces se agrega su definicion.
        read:  BOLETIN_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: BOLETIN_NAV_DEF,
    security: BOLETIN_SECURITY_DEF,
    ws: {
        key: 'BOLETIN_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'Boletin'
    },
    dialogConfig: {
        width: '800px'
    }   
};
