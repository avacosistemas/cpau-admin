import { PREFIX_DOMAIN_API } from "environments/environment";
import { GridDef } from "app/modules/fwk/core/model/component-def/grid-def";

export const SECTION_CONTENT_GRID_DEF: GridDef = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'section_content_grid_def_column_id'
    },
    {
      columnDef: 'sectionId', // este parametro deberá pasarse al create para saber el contenido padre
      columnNameKey: 'section_content_grid_def_column_sectionid'
    },
    {
      columnDef: 'contentId',
      columnNameKey: 'section_content_grid_def_column_contentid'
    },
    {
      columnDef: 'contentTitle',
      columnNameKey: 'section_content_grid_def_column_contentid'
    },
    {
      columnDef: 'highlighted',
      columnNameKey: 'section_content_grid_def_column_highlighted'
    },
    {
      columnDef: 'isPublished',
      columnNameKey: 'section_content_grid_def_column_isPublished'
    }
    ,
    {
      columnDef: 'displayOrder',
      columnNameKey: 'displayOrder'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'contentTitle',
    'highlighted',
    'displayOrder'
  ],
  actions: [
    {
      actionNameKey: 'section_content_grid_def_button_action_bajar',
      icon: 'arrow_downward',
      ws: {
        key: 'section_content_grid_def_button_action_bajar',
        url: PREFIX_DOMAIN_API + 'SectionContent/bajar',
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
        url: PREFIX_DOMAIN_API + 'SectionContent/subir',
        method: 'GET',
        querystring: {
          id : 'id'
        }
      }
    },
    {
      actionNameKey: 'section_content_grid_def_button_action_marcar_destacado',
      icon: 'blur_on',
      confirm: false,
      ws: {
        key: 'section_content_grid_def_button_action_marcar_destacado',
        url: PREFIX_DOMAIN_API + 'SectionContent/marcardestacado',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'section_content_grid_def_button_action_desmarcar_destacado',
      icon: 'blur_off',
      confirm: false,
      ws: {
        key: 'section_content_grid_def_button_action_desmarcar_destacado',
        url: PREFIX_DOMAIN_API + 'SectionContent/quitardestacado/',
        method: 'PUT'
      }
    },
    {
      actionNameKey: 'Editar Contenido',
      actionType: 'redirect',
      redirect: {
        openTab: true,
        url: '/Content/admin/contenido',
        querystring: {
          id : 'contentId'
        }
      },
      icon: 'library_books'
    },
  ],
  displayedActionsCondition: [
    {
      key: 'section_content_grid_def_button_action_marcar_destacado',
      expression: {
                    key: 'notHighlighted',
                    value: true
                  }
    },
    {
      key: 'section_content_grid_def_button_action_desmarcar_destacado',
      expression: {
                    key: 'highlighted',
                    value: true
                  }
    }
 ]
  
};
