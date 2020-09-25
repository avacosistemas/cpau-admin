export const BANNER_CAMPAING_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'BANNER_CAMPAING_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'banner_campaing_create_form_fields_def_field_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    minLength: 3,
    maxLength: 200,
    required: true
  },
  {
    key: 'startDateString',
    labelKey: 'banner_campaing_create_form_fields_def_field_startdate',
    label: 'Fecha Inicio',
    controlType: 'datepicker',
    required: true
  },
  {
    key: 'endDateString',
    labelKey: 'banner_campaing_create_form_fields_def_field_enddate',
    label: 'Fecha Fin',
    controlType: 'datepicker',
    required: true
  }
];
