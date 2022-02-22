const appConstant = {
  url: 'http://localhost:4000/ats',
  adminUrl: 'https://admin.zimyo.com/apiv2/',
  localStorageSecretKey: '@#Hrms$&^V2&%*',
};

const JOB_ACTION = [
  { menuId: '1', menuName: 'Remove from this job' },
  { menuId: '2', menuName: 'Mark as withdraw' },
  { menuId: '3', menuName: 'Reject' },
  { menuId: '4', menuName: 'Messages' },
  { menuId: '5', menuName: 'Add to another job' },
  { menuId: '6', menuName: 'Hold' },
];

export { appConstant, JOB_ACTION };
