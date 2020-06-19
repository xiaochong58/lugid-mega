/**
 *
 * create by ligx
 *
 */

export default param => {
  const { models, events } = param;
  const [event] = events;
  if (event.keyCode === 13) {
    const [self] = models;
    const { mutations } = self;
    mutations.asyncQuery({});
    console.info(param);
  }
};
