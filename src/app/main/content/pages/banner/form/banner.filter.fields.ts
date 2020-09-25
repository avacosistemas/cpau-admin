export const BANNER_FILTER_FORM_FIELDS_DEF = [
  {
    key: 'urlImage',
    labelKey: 'BANNER_FILTER_FORM_FIELDS_DEF_FIELD_urlimage',
    label: 'Imagen',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'campaignId',
    labelKey: 'BANNER_FILTER_FORM_FIELDS_DEF_FIELD_campaignId',
    label: 'Boletin',
    type: 'string',
    controlType: 'textbox',
    filterType: 'equals'
  },
  {
    key: 'parentTitle',
    controlType: 'hidden'
  }
];
