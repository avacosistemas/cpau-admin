import { GridDef } from "app/modules/fwk/core/model/component-def/grid-def";

export const MODAL_GRID_DEF = {
    columnsDef: [
        {
            columnDef: 'id',
            id: true,
            columnNameKey: 'modal_grid_def_column_id'
        },
        {
            columnDef: 'title',
            columnNameKey: 'modal_grid_def_column_title'
        },
        {
            columnDef: 'content',
            columnNameKey: 'modal_grid_def_column_content'
        },
        {
            columnDef: 'dateStart',
            columnNameKey: 'modal_grid_def_column_startdate'
        },
        {
            columnDef: 'dateEnd',
            columnNameKey: 'modal_grid_def_column_enddate'
        }
    ],
    sortAllColumns: true,
    deleteAction: true,
    displayedColumns: [
        'title',
        'dateStart',
        'dateEnd'
    ]
} as GridDef;
