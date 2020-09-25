import { PREFIX_DOMAIN_API } from "environments/environment";
import { RADIO_BUTTON, IMPORT_IMAGE } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";

export const MAILING_CREATE_FORM_FIELDS_DEF = [
  {
    key: 'accountId',
    labelKey: 'mailing_create_form_fields_def_field_cuenta',
    label: 'Cuenta',
    controlType: 'select',
    options: {
      elementLabel: 'friendlyName',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'EmailAccount',
      }
    }
  },
  
  {
    key: 'subject',
    labelKey: 'mailing_create_form_fields_def_field_asunto',
    label: 'Asunto',
    type: 'string',
    controlType: 'textbox'
  },

  {
    key: 'agenda_title',
    labelKey: 'Destinatarios',
    title: 'Destinatarios',
    controlType: 'checkbox'
  },

  {
    key: 'to',
    label: 'Destinatarios',
    required: true,
    requiredMessage: 'Debe seleccionar un destinatario',
    controlType: RADIO_BUTTON,
    value: 'ContactList',
    options: {
      options: [
        {value: 'ContactList', label: 'Lista de Contactos' },
        {value: 'MatriculadoEstados', label: 'Matrículados por Estado' },
        {value: 'MatriculadoActividades', label: 'Matrículados por Actividades' }
      ]
    }
  },

  {
    key: 'contactListId',
    labelKey: 'Lista de Contactos',
    controlType: 'select',
    options: {
      elementLabel: 'name',
      elementValue: 'id',
        fromWs: {
            url: PREFIX_DOMAIN_API + 'ContactList', // REVISAR
        }
    }
  },
  {
    key: 'matriculadoEstadosIds',
    labelKey: 'Matriculados Por Estado y Actividades',
    controlType: 'pick-list',
    options: {
        compositeKey: ['id'],
        elementLabel: 'nombre',
        titleFrom: 'Matriculados por Estado',
        titleTo: 'Matriculados Seleccionados',
        fromWs: {
            key: 'matriculados_estado_ws',
            url: PREFIX_DOMAIN_API + 'MatriculadoEstado/GetAllWithGroupNumber' // REVISAR
        }
    }
  },
  {
    key: 'matriculadoActividadesIds',
    labelKey: 'Matriculados Por Actividades',
    controlType: 'pick-list',
    options: {
        compositeKey: ['id'],
        elementLabel: 'nombre',
        titleFrom: 'Matriculados por Actividades',
        titleTo: 'Matriculados Seleccionados',
        fromWs: {
            key: 'matriculados_actividades_ws',
            url: PREFIX_DOMAIN_API + 'MatriculadoActividad/GetAllByGroupName' // REVISAR
        }
    }
  },

  {
    key: 'info_title',
    labelKey: 'Contenido',
    title: 'Contenido',
    controlType: 'checkbox'
  },

  {
    key: 'content',
    label: 'Contenido',
    required: true,
    requiredMessage: 'Debe seleccionar un contenido',
    controlType: RADIO_BUTTON,
    value: 'Boletin',
    options: {
      options: [
        {value: 'Boletin', label: 'Boletín' },
        {value: 'Page', label: 'Página del Sitio' },
        {value: 'URL', label: 'Url' }
      ]
    }
  },

  

  {
    key: 'boletinId',
    label: 'Boletin',
    labelKey: 'mailing_create_form_fields_def_field_boletin',
    controlType: 'select',
    options: {
      elementLabel: 'titulo',
      elementValue: 'id',
      fromWs: {
        url: PREFIX_DOMAIN_API + 'Boletin', // REVISAR
      }
    }
  },

  {
    key: 'pageId',
    labelKey: 'mailing_create_form_fields_def_field_paginasitio',
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
    key: 'url',
    labelKey: 'mailing_create_form_fields_def_field_url',
    label: 'URL',
    controlType: 'import_image',
    icon: 'attach_file',
    showPreview: true
  },

  {
    key: 'hasParameters',
    labelKey: 'Incluye parámetros',
    type: 'boolean',
    controlType: 'checkbox'
  },

];
