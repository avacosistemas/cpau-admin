import { PREFIX_DOMAIN_API, PREFIX_INSTITUCIONAL } from "environments/environment";
import { HTML_EDITOR } from "app/modules/fwk/core/model/dynamic-form/dynamic-field";
import { GridDef } from "app/modules/fwk/core/model/component-def/grid-def";

export const CONTENIDO_GRID_DEF: GridDef = {
  columnsDef: [
    {
      columnDef: 'title',
      columnNameKey: 'contenido_grid_def_column_title'
    },
    {
      columnDef: 'showTitle',
      columnNameKey: 'contenido_grid_def_column_showtitle'
    },
    {
      columnDef: 'subTitle',
      columnNameKey: 'contenido_grid_def_column_subtitle'
    },
    {
      columnDef: 'source',
      columnNameKey: 'contenido_grid_def_column_source'
    },
    {
      columnDef: 'summary',
      columnNameKey: 'contenido_grid_def_column_summary'
    },
    {
      columnDef: 'text',
      columnNameKey: 'contenido_grid_def_column_text'
    },
    {
      columnDef: 'link',
      columnNameKey: 'contenido_grid_def_column_link'
    },
    {
      columnDef: 'linkTarget',
      columnNameKey: 'contenido_grid_def_column_linktarget'
    },
    {
      columnDef: 'publishDate',
      columnNameKey: 'contenido_grid_def_column_publishdate'
    },
    {
      columnDef: 'expirationDate',
      columnNameKey: 'contenido_grid_def_column_expirationdate'
    },
    {
      columnDef: 'showPublishDate',
      columnNameKey: 'contenido_grid_def_column_showpublishdate'
    },
    {
      columnDef: 'eventCategoryId',
      columnNameKey: 'contenido_grid_def_column_eventcategoryid'
    },
    {
      columnDef: 'eventStartDate',
      columnNameKey: 'contenido_grid_def_column_eventstartdate'
    },
    {
      columnDef: 'eventEndDate',
      columnNameKey: 'contenido_grid_def_column_eventenddate'
    },
    {
      columnDef: 'eventPlace',
      columnNameKey: 'contenido_grid_def_column_eventplace'
    },
    {
      columnDef: 'createDateString',
      columnNameKey: 'contenido_grid_def_column_createdate'
    },
    {
      columnDef: 'lastEditDate',
      columnNameKey: 'contenido_grid_def_column_lasteditdate'
    },
    {
      columnDef: 'allowAnonymous',
      columnNameKey: 'contenido_grid_def_column_allowanonymous'
    },
    {
      columnDef: 'id',
      key: true,
      columnNameKey: 'contenido_grid_def_column_id'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'title',
    'createDateString'
  ],
  actions: [
    {
      actionNameKey: 'contenido_grid_def_button_action_resumen',
      icon: 'notes',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'summary',
            labelKey: 'contenido_create_form_fields_def_field_summary',
            label: 'Resumen',
            controlType: HTML_EDITOR,
            maxLength: 8000
          }
        ]
      },
      ws: {
        key: 'contenido_grid_def_button_action_resumen',
        url: PREFIX_DOMAIN_API + 'Content/UpdateByProps',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'contenido_grid_def_button_action_texto',
      icon: 'menu_book',
      formDef: {
        showSubmitContinue: true,
        fields:[
          {
            key: 'text',
            labelKey: 'contenido_create_form_fields_def_field_text',
            label: 'Texto',
            controlType: HTML_EDITOR
          }
        ]
      },
      
      ws: {
        key: 'contenido_grid_def_button_action_texto',
        url: PREFIX_DOMAIN_API + 'Content/UpdateByProps',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'contenido_grid_def_button_action_imagenes',
      icon: 'photo_album',
      actionType: 'redirect',
      redirect: {
        url: '/contentImage',
        querystring: {
          contentId : 'id',
          parentTitle: 'title'
        }
      }
    },
    {
      actionNameKey: 'Previsualizar',
      actionType: 'redirect',
      redirect: {
        externalUrl: true,
        openTab: true,
        idUrl: true,
        url: PREFIX_INSTITUCIONAL + '?redirectToPage=/notaPreview',
        querystring: {
          id : 'id'
        }
      },
      icon: 'filter_none'
    }
  ]
};
