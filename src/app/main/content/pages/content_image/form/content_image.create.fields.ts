import { PREFIX_DOMAIN_API } from "environments/environment";

export const CONTENT_IMAGE_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'contentId',
    labelKey: 'content_image_create_form_fields_def_field_contentid',
    label: 'ContentID',
    controlType: 'hidden',
    mappingQuerystring: true
  },

  {
    key: 'image',
    labelKey: 'SECCION_UPDATE_FORM_FIELDS_DEF_FIELD_imageid',
    controlType: 'autocomplete',
    label: 'Imagen',
    required: true,
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
    key: 'typeId',
    labelKey: 'content_image_create_form_fields_def_field_typeid',
    label: 'Tipo',
    controlType: 'select',
    options: {
      handlerSourceData: false,
      elementLabel: 'nombre',
      elementValue: 'id',
      fromData: [{id: 1, nombre: 'Sección'},
                 {id: 2, nombre: 'Boletin'},
                 //{id: 3, nombre: 'RSS'},
                 {id: 4, nombre: 'Nota'},
                ]
      }
  }
];
