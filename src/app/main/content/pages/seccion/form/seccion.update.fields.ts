import { PREFIX_DOMAIN_API } from "environments/environment";
import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const SECCION_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    id: true,
    controlType: 'hidden',
    labelKey: '',
    label: '',
  },
  {
    key: 'parentId',
    labelKey: '',
    label: '',
    controlType: 'hidden'
  },
  {
    key: 'listIndex',
    labelKey: '',
    label: '',
    controlType: 'hidden'
  },
  {
    key: 'name',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_name',
    label: 'Nombre',
    type: 'string',
    controlType: 'textbox',
    maxLength: 200,
    required: true
  },
  {
    key: 'seName',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_sename',
    label: 'Ruta',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500,
    required: false,
    disabled: true
  },

  {
    key: 'title',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_title',
    label: 'Ruta',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500,
    required: false
  },

  {
    key: 'link',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_url',
    label: 'Link',
    type: 'string',
    controlType: 'import_image',
    required: false,
    icon: 'attach_file',
    showPreview: true
  },
  {
    key: 'linkTarget',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_linktarget',
    label: 'LinkTarget',
    type: 'select',
    required: true,
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 0, nombre: '_self'},
                 {id: 1, nombre: '_blank'},
                 {id: 2, nombre: '_parent'},
                 {id: 3, nombre: '_top'},
                 {id: 4, nombre: '_search'}]
      }
  },
  
  {
    key: 'image',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_imageid',
    controlType: 'autocomplete',
    label: 'Imagen',
    required: false,
    options: {
      transferIdToField: 'imageId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        name: 'image'
      },
      url: PREFIX_DOMAIN_API + 'Image/GetSelectByProp'
    }
  },
  
  {
    key: 'imageId',
    controlType: 'hidden'
  },

  {
    key: 'published',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_published',
    label: 'Publicada',
    type: 'checkbox',
    controlType: 'checkbox'
  },
  {
    key: 'allowAnonymous',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_allowanonymous',
    label: 'Pública',
    type: 'checkbox',
    controlType: 'checkbox'
  },
  {
    key: 'templateId',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_templateid',
    label: 'Template',
    required: true,
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 1, nombre: 'Agenda'},
                 {id: 2, nombre: 'Noticias con Imagen'},
                 {id: 3, nombre: 'Beneficios'},
                 {id: 4, nombre: 'Noticias sin Imagen'},
                 {id: 5, nombre: 'Noticias sin Imagen sin Filtro'}
                ]              
    }
  },
  {
    key: 'orderItemsBy',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_orderitemsby',
    label: 'Ordernar Items por',
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [
          {id: 0, nombre: 'Manual'},
          {id: 1, nombre: 'Fecha Publicación (Nuevo->Viejo)'},
          {id: 2, nombre: 'Fecha Publicación (Viejo->Nuevo)'},
          {id: 3, nombre: 'Título(A->Z)'},
          {id: 4, nombre: 'Título(Z->A)'},
          {id: 5, nombre: 'Fecha Evento (Actuales->Próximos)'},
          {id: 6, nombre: 'Fecha Evento (Próximos->Actuales)'}
        ]
    }
  },

  {
    key: 'contactName',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_ContactName',
    controlType: 'textbox',
    maxLength: 500,
  },
  {
    key: 'contactEmail',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_ContactEmail',
    controlType: 'email',
    maxLength: 500,
  },
  {
    key: 'contactTel',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_ContanctTel',
    controlType: 'textbox',
    maxLength: 500,
  }
];
