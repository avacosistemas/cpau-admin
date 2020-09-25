export const CAMPO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'idFormField',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden'
  },
  {
    key: 'idForm',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_idform',
    label: 'ID Form',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    required: true
  },
  {
    key: 'type',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_type',
    label: 'Tipo',
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
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_required',
    label: 'Requerido',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'value',
    labelKey: 'CAMPO_UPDATE_FORM_FIELDS_DEF_FIELD_value',
    label: 'Valor',
    type: 'string',
    controlType: 'textbox'
  }
];
