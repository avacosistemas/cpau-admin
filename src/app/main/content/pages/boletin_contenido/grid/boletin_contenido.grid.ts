import { PREFIX_DOMAIN_API } from "environments/environment";

export const BOLETIN_CONTENIDO_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'boletin_contenido_grid_def_column_id'
    },
    {
      columnDef: 'boletinId',
      columnNameKey: 'boletin_contenido_grid_def_column_boletinid'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'boletin_contenido_grid_def_column_boletinid'
    },
    {
      columnDef: 'pageId',
      columnNameKey: 'boletin_contenido_grid_def_column_pageid'
    },
    {
      columnDef: 'content',
      columnNameKey: 'boletin_contenido_grid_def_column_pageid'
    },
    {
      columnDef: 'orden',
      columnNameKey: 'boletin_contenido_grid_def_column_orden'
    }
  ],
  sortAllColumns: true,
  displayedColumns: [
    'content',
    'orden'
  ],
  deleteAction: true,
  actions: [
    {
      actionNameKey: 'section_content_grid_def_button_action_bajar',
      icon: 'arrow_downward',
      ws: {
        key: 'section_content_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'BoletinContenido/bajar',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    },
    {
      actionNameKey: 'section_content_grid_def_button_action_subir',
      icon: 'arrow_upward',
      ws: {
        key: 'section_content_grid_def_button_action_subir',
        url: PREFIX_DOMAIN_API + 'BoletinContenido/subir',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    }
  ]
};
