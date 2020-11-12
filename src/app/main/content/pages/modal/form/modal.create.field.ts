// import { PREFIX_DOMAIN_API } from "environments/environment";

import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MODAL_CREATE_FORM_FIELDS_DEF = [
    {
        key: 'title',
        labelKey: 'modal_create_form_fields_def_field_title',
        label: 'titulo',
        type: 'string',
        controlType: 'textbox',
        maxLength: 200,
        required: true
    },
    {
        key: 'content',
        labelKey: 'modal_create_form_fields_def_field_content',
        label: 'Contenido',
        type: 'string',
        controlType: HTML_EDITOR,
        required: true
    },
    {
        key: 'dateStart',
        labelKey: 'modal_create_form_fields_def_field_startdate',
        label: 'Fecha Inicio',
        controlType: 'datetimepicker',
        required: true
    },
    {
        key: 'dateEnd',
        labelKey: 'modal_create_form_fields_def_field_enddate',
        label: 'Fecha Fin',
        controlType: 'datetimepicker',
        required: true
    }

];
