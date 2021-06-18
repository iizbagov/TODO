const minute = 60000;
const logger = {
  logs: {},
  print() {
    console.clear();
    const keys = Object.keys(this.logs);
    setInterval(() => {
      for (let i = 0; i < keys.length; i++) {
        if (Math.round(+keys[i] * 1000) < Math.round(Date.now() / 1000)) {
          delete this.logs[keys[i]];
        }
      }
    }, minute);
    const deleteAll = () => {
      this.logs = {};
    };
    const deleteAfter = (key) => {
      for (let i = 0; i < keys.length; i++) {
        if (+keys[i] < +key) {
          delete this.logs[keys[i]];
        }
      }
    };
    const deleteBefore = (key) => {
      for (let i = 0; i < keys.length; i++) {
        if (+keys[i] > +key) {
          delete this.logs[keys[i]];
        }
      }
    };

    console.log(this.logs);
  },
};

export function loggerMiddleware(store) {
  return (next) => {
    return (action) => {
      const date = Date.now();
      next(action);
      logger.logs[date] = action;
    };
  };
}

export default logger;
