export const message = {
  incorrectPassword: `password is incorrect.`,
  404: (msg: string) => `${msg} not found.`,
  update: (msg: string) => `${msg} is updated successfully.`,
  delete: (msg: string) => `${msg} is deleted successfully.`,
  created: (msg: string) => `${msg} is created successfully.`,
  custom: (msg: string) => `${msg}.`,
  signout: `signout successfully.`,
  query:`Query sent successfully.`,
  emailSent: `verification link sent it to your email address.`,
  permission: [
    `You don't have read permissions.`,
    `You don't have create permissions.`,
    `You don't have delete permissions.`,
    `You don't have update permissions.`
  ]
};