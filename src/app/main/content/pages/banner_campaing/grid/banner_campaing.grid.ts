export const BANNER_CAMPAING_GRID_DEF = {
  columnsDef: [
    {
      columnDef: 'id',
      id: true,
      columnNameKey: 'banner_campaing_grid_def_column_id'
    },
    {
      columnDef: 'name',
      columnNameKey: 'banner_campaing_grid_def_column_name'
    },
    {
      columnDef: 'startDateString',
      columnNameKey: 'banner_campaing_grid_def_column_startdate'
    },
    {
      columnDef: 'endDateString',
      columnNameKey: 'banner_campaing_grid_def_column_enddate'
    }
  ],
  sortAllColumns: true,
  deleteAction: true,
  displayedColumns: [
    'name',
    'startDateString',
    'endDateString'
  ],
  actions: [
    {
      actionNameKey: 'banner_campaign_grid_def_button_action_banner',
      icon: 'burst_mode',
      actionType: 'redirect',
      redirect: {
        url: '/banner',
        querystring: {
          campaignId : 'id',
          parentTitle: 'name'
        }
      }
    }
  ]
};
