export const SECTION_CONTENT_FILTER_FORM_FIELDS_DEF = [
  {
    key: 'isPublished',
    labelKey: 'SECTION_CONTENT_FILTER_FORM_FIELDS_DEF_FIELD_isPublished',
    label: 'Sólo Publicados',
    controlType: 'checkbox',
    value: true
  },
  {
    key: 'title',
    labelKey: 'SECTION_CONTENT_FILTER_FORM_FIELDS_DEF_FIELD_contentid',
    label: 'Contenido',
    type: 'string',
    controlType: 'textbox'
  },
  {
    key: 'sectionId',
    label: 'sectionID',
    controlType: 'number'
  },
  {
    key: 'parentTitle',
    controlType: 'hidden'
  }
];
