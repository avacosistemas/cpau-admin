import { PREFIX_DOMAIN_API } from "environments/environment";

export const BOLETIN_CONTENIDO_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'boletinId',
    labelKey: 'boletin_contenido_create_form_fields_def_field_boletinid',
    label: 'Boletin ID',
    type: 'hidden',
    controlType: 'hidden',
    mappingQuerystring: true
  },

  {
    key: 'page',
    labelKey: 'boletin_contenido_create_form_fields_def_field_pageid',
    controlType: 'autocomplete',
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
      url: PREFIX_DOMAIN_API + 'Boletin/contenido'
    }
  },

  {
    key: 'pageId',
    controlType: 'hidden'
  },

];
