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
    controlType: 'autocomplete-desplegable',
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
      defaultShow: 20,
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
    key: 'displayOrder',
    labelKey: 'section_content_update_form_fields_def_field_displayorder',
    label: 'Orden',
    type: 'number',
    controlType: 'number',
    required: true
  },
  {
    key: 'tag',
    labelKey: 'section_content_create_form_fields_def_field_tags',
    label: 'Tags',
    controlType: 'tags'
  }
];
