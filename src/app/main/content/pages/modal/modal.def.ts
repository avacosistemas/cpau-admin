import { CrudDef } from 'app/modules/fwk/core/model/component-def/crud-def';
import { PREFIX_DOMAIN_API } from 'environments/environment';
import { MODAL_CREATE_FORM_FIELDS_DEF } from './form/modal.create.field';
import { MODAL_FILTER_FORM_FIELDS_DEF } from './form/modal.filter.field';
import { MODAL_READ_FORM_FIELDS_DEF } from './form/modal.read.field';
import { MODAL_UPDATE_FORM_FIELDS_DEF } from './form/modal.update.field';
import { MODAL_GRID_DEF } from './grid/modal.grid';
import { MODAL_I18N_DEF } from './i18n/modal.i18n';
import { MODAL_NAV_DEF } from './navigation/modal.nav';
import { MODAL_SECURITY_DEF } from './security/modal.security';

export const MODAL_DEF = {
    name: 'MODAL',
    i18n: MODAL_I18N_DEF,
    grid: MODAL_GRID_DEF,
    formsDef: {
        create: {
            fields: MODAL_CREATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        },
        update: {
            fields: MODAL_UPDATE_FORM_FIELDS_DEF,
            showSubmitContinue: true
        }
    },
    forms: {
        read: MODAL_READ_FORM_FIELDS_DEF // Si existe un formulario de edicion no exite uno de solo lectura
    },
    navigation: MODAL_NAV_DEF,
    security: MODAL_SECURITY_DEF,
    ws: {
        key: 'MODAL_CRUD_URL',
        url: PREFIX_DOMAIN_API + 'modalHome'
    },
    dialogConfig: {
        width: '900px'
    }
} as CrudDef;
