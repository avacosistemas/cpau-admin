export const BANNER_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'BANNER_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    type: 'string',
    controlType: 'hidden'
  },
  {
    key: 'campaignId',
    labelKey: 'BANNER_UPDATE_FORM_FIELDS_DEF_FIELD_campaignid',
    label: 'ID Publicidad',
    type: 'string',
    controlType: 'hidden'
  },
  {
    key: 'urlImage',
    labelKey: 'banner_create_form_fields_def_field_urlimage',
    label: 'Imagen',
    controlType: 'import_image',
    required: true,
    minLength: 3,
    maxLength: 200,
    options: {
      // => https://ckeditor.com/docs/ckfinder/ckfinder3/#!/api/CKFinder.Config-cfg-resourceType
      resourceType: 'Images'
    },
    showPreview: true
  
  },
  {
    key: 'urlLink',
    labelKey: 'banner_create_form_fields_def_field_urllink',
    label: 'Link',
    controlType: 'import_image',
    required: true,
    minLength: 3,
    maxLength: 200,
    options: {
      // => https://ckeditor.com/docs/ckfinder/ckfinder3/#!/api/CKFinder.Config-cfg-resourceType
      resourceType: 'Images'
    },
    icon: 'link',
    showPreview: true
  },
  {
    key: 'alternativeText',
    labelKey: 'banner_create_form_fields_def_field_alternativetext',
    label: 'Texto Alternativo',
    type: 'string',
    controlType: 'textbox',
    maxLength: 500
  },
  {
    key: 'displayOrder',
    labelKey: 'banner_create_form_fields_def_field_displayorder',
    label: 'Orden',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'isMainPage',
    labelKey: 'banner_create_form_fields_def_field_ismainpage',
    label: 'Mostrar en Home',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'isNewsletter',
    labelKey: 'banner_create_form_fields_def_field_isnewsletter',
    label: 'Mostrar en Newsletter',
    type: 'boolean',
    controlType: 'checkbox'
  },
  {
    key: 'isSection',
    labelKey: 'banner_create_form_fields_def_field_issection',
    label: 'Mostrar en Sección',
    type: 'boolean',
    controlType: 'checkbox'
  }
];
