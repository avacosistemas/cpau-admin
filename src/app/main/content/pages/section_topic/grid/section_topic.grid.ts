import { PREFIX_DOMAIN_API } from "environments/environment";

export const SECTION_TOPIC_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'section_topic_grid_def_column_id'
    },
    {
      columnDef: 'title',
      columnNameKey: 'section_topic_grid_def_column_title'
    },
    {
      columnDef: 'summary',
      columnNameKey: 'section_topic_grid_def_column_summary'
    },
    {
      columnDef: 'sectionId',
      columnNameKey: 'section_topic_grid_def_column_sectionid'
    },
    {
      columnDef: 'pageId',
      columnNameKey: 'section_topic_grid_def_column_pageid'
    },
    {
      columnDef: 'link',
      columnNameKey: 'section_topic_grid_def_column_link'
    },
    {
      columnDef: 'type',
      columnNameKey: 'section_topic_grid_def_column_type'
    },
    {
      columnDef: 'openMode',
      columnNameKey: 'section_topic_grid_def_column_openmode'
    },
    {
      columnDef: 'expirationDateString',
      columnNameKey: 'section_topic_grid_def_column_expirationdate'
    },
    {
      columnDef: 'displayOrder',
      columnNameKey: 'displayOrder'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    //'sectionId',
    'title',
    'type'
  ],
  actions: [
    {
      actionNameKey: 'section_topic_grid_def_button_action_bajar',
      icon: 'arrow_downward',
      ws: {
        key: 'section_topic_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'SectionTopic/bajar',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    },
    {
      actionNameKey: 'section_topic_grid_def_button_action_subir',
      icon: 'arrow_upward',
      ws: {
        key: 'section_topic_grid_def_button_action_subir',
        url: PREFIX_DOMAIN_API + 'SectionTopic/subir',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    }
  ]
  
};
