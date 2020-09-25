export const CAMPO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'name',
    labelKey: 'campo_create_form_fields_def_field_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'type',
    labelKey: 'campo_create_form_fields_def_field_type',
    label: 'Tipo',
    type: 'select',
    controlType: 'select',
    required: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'label',
      elementValue: 'value',
      fromData: [
                 {value: 'text', label: 'Text'},
                 {value: 'label', label: 'Etiqueta'},
                 {value: 'email', label: 'E-Mail'},
                 {value: 'password', label: 'Password'},
                 {value: 'radio', label: 'Radio Buttons'},
                 {value: 'dropdown', label: 'Desplegable'},
                 {value: 'textarea', label: 'Text Area'},
                 {value: 'checkbox', label: 'Checkbox'},
                 {value: 'hidden', label: 'Oculto'}
                ]              
    }
  },
  {
    key: 'required',
    labelKey: 'campo_create_form_fields_def_field_required',
    label: 'Requerido',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'value',
    labelKey: 'campo_create_form_fields_def_field_value',
    label: 'Valor',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'idForm',
    labelKey: 'campo_create_form_fields_def_field_idform',
    label: 'ID Form',
    type: 'text',
    controlType: 'hidden',
    mappingQuerystring: true
  },

];
