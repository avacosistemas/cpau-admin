// import { PREFIX_DOMAIN_API } from "environments/environment";

export const MODAL_READ_FORM_FIELDS_DEF = [
    {
        key: 'title',
        labelKey: 'modal_read_form_fields_def_field_title',
        label: 'titulo',
        type: 'string',
        controlType: 'textbox',
        maxLength: 200,
        disabled: true,
        required: true
    },
    {
        key: 'content',
        labelKey: 'modal_read_form_fields_def_field_content',
        label: 'Contenido',
        type: 'string',
        disabled: true,
        controlType: 'textbox',
        required: true
    },
    {
        key: 'content',
        labelKey: '',
        label: 'Contenido',
        type: 'string',
        disabled: true,
        controlType: 'textbox',
        required: true
    },
    {
        key: 'dateStart',
        labelKey: 'modal_read_form_fields_def_field_startdate',
        label: 'Fecha Inicio',
        controlType: 'datetimepicker',
        required: true
    },
    {
        key: 'dateEnd',
        labelKey: 'modal_read_form_fields_def_field_enddate',
        label: 'Fecha Fin',
        controlType: 'datetimepicker',
        required: true
    }

];
