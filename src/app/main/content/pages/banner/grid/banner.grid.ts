export const BANNER_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'banner_grid_def_column_id'
    },
    {
      columnDef: 'campaignId',
      columnNameKey: 'banner_grid_def_column_campaignid'
    },
    {
      columnDef: 'urlImage',
      columnNameKey: 'banner_grid_def_column_urlimage'
    },
    {
      columnDef: 'urlLink',
      columnNameKey: 'banner_grid_def_column_urllink'
    },
    {
      columnDef: 'alternativeText',
      columnNameKey: 'banner_grid_def_column_alternativetext'
    },
    {
      columnDef: 'displayOrder',
      columnNameKey: 'banner_grid_def_column_displayorder'
    },
    {
      columnDef: 'isMainPage',
      columnNameKey: 'banner_grid_def_column_ismainpage'
    },
    {
      columnDef: 'isNewsletter',
      columnNameKey: 'banner_grid_def_column_isnewsletter'
    },
    {
      columnDef: 'isSection',
      columnNameKey: 'banner_grid_def_column_issection'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'urlImage',
    'isMainPage',
    'isNewsletter',
    'isSection'
  ],
  /*actions: [
    {
      labelTitle: 'Preview',
      actionNameKey: 'Preview',
      icon: 'image',
      notShowButton: true,
      form: [
        {
          key: 'urlImage',
          labelKey: 'imagen_prueba',
          label: 'imagen_prueba',
          type: 'image_preview',
          controlType: 'image_preview',
        }
      ]
    }
  ],*/
};
