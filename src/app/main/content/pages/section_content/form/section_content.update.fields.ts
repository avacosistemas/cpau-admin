import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECTION_CONTENT_UPDATE_FORM_FIELDS_DEF = [
  {
    key: 'id',
    labelKey: 'SECTION_TOPIC_UPDATE_FORM_FIELDS_DEF_FIELD_id',
    label: 'ID',
    controlType: 'hidden'
  },
  {
    key: 'sectionId',
    labelKey: 'section_content_update_form_fields_def_field_sectionid',
    label: 'Sección',
    controlType: 'hidden',
    mappingQuerystring: true
  },
  
  {
    key: 'content',
    labelKey: 'section_content_create_form_fields_def_field_contentid',
    controlType: 'autocomplete',
    required: true,
    options: {
      transferIdToField: 'contentId',
      elementLabel: 'name',
      elementValue: 'id',
      useNativeFilter: false,
      selectElementOrCleanField: 'Debe seleccionar un elemento o limpiar el campo'
    },
    apiOptions: {
      queryString: {
        title: 'content'
      },
      url: PREFIX_DOMAIN_API + 'Content/GetSelectByProp'
    }
  },

  {
    key: 'contentId',
    controlType: 'hidden'
  },
  {
    key: 'highlighted',
    labelKey: 'section_content_update_form_fields_def_field_highlighted',
    label: 'Destacado',
    controlType: 'checkbox'
  },
  {
    key: 'tag',
    labelKey: 'section_content_create_form_fields_def_field_tags',
    label: 'Tags',
    controlType: 'tags'
  },
  {
    key: 'displayOrder',
    controlType: 'hidden'
  }
];
