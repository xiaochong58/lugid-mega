/**
 *
 * create by ligx
 *
 */

export default param => {
  const { models, pageData: {formType}, events} = param;
  const [self] = models;
  const { mutations } = self;
  switch (formType) {
    case 'add':
      mutations.asyncAddRecord({ events });
      break;
    case 'edit':
      mutations.asyncEditRecord({ events });
      break;
    default:
      break;
  }
};
