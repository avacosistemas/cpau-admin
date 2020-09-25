function todaynow() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = String(today.getFullYear());
  return  dd + "/" + mm + "/" + yyyy;
}

export const BANNER_CAMPAING_CREATE_FORM_FIELDS_DEF = [
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
    required: true,
  },
  {
    key: 'endDateString',
    labelKey: 'banner_campaing_create_form_fields_def_field_enddate',
    label: 'Fecha Fin',
    controlType: 'datepicker',
    required: true,
  }
];
