import { PREFIX_INSTITUCIONAL } from "environments/environment";

export const BOLETIN_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'boletin_grid_def_column_id'
    },
    {
      columnDef: 'titulo',
      columnNameKey: 'boletin_grid_def_column_titulo'
    },
    {
      columnDef: 'fechaEnvioString',
      columnNameKey: 'boletin_grid_def_column_fechaenvio'
    },
    {
      columnDef: 'numero',
      columnNameKey: 'boletin_grid_def_column_numero'
    },
    {
      columnDef: 'texto1',
      columnNameKey: 'boletin_grid_def_column_texto1'
    },
    {
      columnDef: 'texto2',
      columnNameKey: 'boletin_grid_def_column_texto2'
    },
    {
      columnDef: 'texto3',
      columnNameKey: 'boletin_grid_def_column_texto3'
    },
    {
      columnDef: 'publicado',
      columnNameKey: 'boletin_grid_def_column_publicado'
    },
    {
      columnDef: 'notasConCopete',
      columnNameKey: 'boletin_grid_def_column_notasconcopete'
    },
    {
      columnDef: 'especial',
      columnNameKey: 'boletin_grid_def_column_especial'
    },
    {
      columnDef: 'urlContenido',
      columnNameKey: 'boletin_grid_def_column_urlcontenido'
    }
  ],
  sortAllColumns: false,
  deleteAction: true,
  displayedColumns: [
    'numero',
    'titulo',
    'fechaEnvioString',
    'especial'
  ],
  actions: [
    {
      actionNameKey: 'boletin_grid_def_button_action_contenido',
      icon: 'library_books',
      actionType: 'redirect',
      redirect: {
        url: '/boletinContenido',
        querystring: {
          boletinId : 'id',
          parentTitle: 'titulo'
        }
      }
    },
    {
      actionNameKey: 'Previsualizar',
      actionType: 'redirect',
      redirect: {
        openTab: true,
        externalUrl: true,
        idUrl: true,
        url: PREFIX_INSTITUCIONAL + '?redirectToPage=/boletin',
        querystring: {
          id : 'id'
        }
      },
      icon: 'filter_none'
    },
    /*{
      actionNameKey: 'Ver URL Contenido',
      actionType: 'redirect',
      redirect: {
        openTab: true,
        externalUrl: true,
        url: '',
        querystring: {
          externalUrl : 'urlContenido'
        }
      },
      icon: 'link'
    },*/
  ]
};
