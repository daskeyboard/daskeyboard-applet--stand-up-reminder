//The test.js file is not finished.

const assert = require('assert');
const minuteAfterTheHour = '10';
const t = require('../index');

const {
  StandReminder
} = require('../index');

describe('StandReminder', () => {
  describe('#constructor()', function () {
    it('should construct', function () {
      let app = new StandReminder();
      assert.ok(app);
    });
  });


  describe('#run()', () => {
    it('sends a reminder ', async function () {
     let app = await buildApp();
      assert.equal(reminder, app.config.reminder);
      return buildApp().then(app =>{
        return app.run().then((signal) => {
          assert.ok(signal);
          assert(signal.name.includes(minuteAfterTheHour));
          assert(signal.message.includes(minuteAfterTheHour));
        }).catch((error) => {
          assert.fail(error)
        });
      })
    });
  });  
})

const defaultConfig = {
  applet: {
    user: {
      minuteAfterTheHour: minuteAfterTheHour
    }
  },
  geometry: {
    width: 1,
    height: 1,
  }
};


async function buildApp(config) {
  let app = new t.StandReminder();
  await app.processConfig(config || defaultConfig);
  return app;
}
