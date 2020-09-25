import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECTION_TOPIC_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'sectionId',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_sectionid',
    label: 'Sección',
    type: 'string',
    controlType: 'hidden',
    mappingQuerystring : true
  },
  {
    key: 'type',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_type',
    label: 'Tipo',
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: 'Sitio Relacionado'},
                 {id: 1, nombre: 'Nota Relacionada'}]
      }
  },
  {
    key: 'title',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_title',
    label: 'Título',
    type: 'string',
    controlType: 'textbox',
    minLength: 3,
    maxLength: 200,
    required: true
  },
  {
    key: 'summary',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_summary',
    label: 'Resumen',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500,
  },

  {
    key: 'pageId',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_pageid',
    controlType: 'select',
    options: {
      elementLabel: 'name',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'Boletin/contenido',
      }
    }
  },
  {
    key: 'link',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_link',
    label: 'URL',
    controlType: 'import_image',
    maxLength: 2000
  },
  {
    key: 'openMode',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_openmode',
    label: 'URL Target',
    controlType: 'select',
    required: true,
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: '_self'},
                 {id: 1, nombre: '_blank'},
                 {id: 2, nombre: '__parent'},
                 {id: 3, nombre: '_top'},
                 {id: 4, nombre: '_search'}]
      }
  },
  {
    key: 'expirationDateString',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_expirationdate',
    label: 'Fecha Expiración',
    type: 'datepicker',
    controlType: 'datepicker'
  }
];
