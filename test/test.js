const assert = require('assert');
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


  describe('#processConfig', function () {
    let reminder = 1;
    const config = {
      applet: {
        defaults: {
          reminder: reminder
        }
      },
      geometry: {
        width: 1,
        height: 1,
      }
    };

    let app = new StandReminder();
    app.processConfig(config);

    assert.equal(reminder, app.config.reminder);
  })

  describe('#run()', () => {
    it('sends a reminder ', async function () {
      let app = new StandReminder();
      let reminder = 1;
      app.config.reminder = reminder;

      return app.run().then((signal) => {
        console.log(signal);
        assert.ok(signal);
        console.log(signal.message);
        assert(signal.message.includes(reminder));
        assert(signal.name.includes('Stand Reminder'));
      }).catch((error) => {
        assert.fail(error)
      });
    })
  });  
})
