import { PREFIX_DOMAIN_API } from "environments/environment";

export const BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden'
  },
  {
    key: 'boletinId',
    labelKey: 'BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_boletinid',
    label: 'Boletin ID',
    controlType: 'hidden'
  },
  {
    key: 'page',
    labelKey: 'boletin_contenido_create_form_fields_def_field_pageid',
    controlType: 'autocomplete-desplegable',
    required: true,
    options: {
      transferIdToField: 'pageId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        title: 'page'
      },
      defaultShow: 20,
      url: PREFIX_DOMAIN_API + 'Boletin/contenido'
    }
  },

  {
    key: 'pageId',
    controlType: 'hidden'
  },
  {
    key: 'orden',
    labelKey: 'BOLETIN_CONTENIDO_UPDATE_FORM_FIELDS_DEF_FIELD_orden',
    label: 'Orden',
    type: 'number',
    controlType: 'hidden'
  }
];
