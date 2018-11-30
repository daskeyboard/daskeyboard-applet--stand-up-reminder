//this document allow me to test step by step 
//I had to test each function step by step


const assert = require('assert');
const {
  StandReminder
} = require('../index');

//on test si nous rentrons bien dans la class StandReminder
describe('StandReminder', () => {
  describe('#constructor()', function () {
    it('should construct', function () {
      let app = new StandReminder();
      assert.ok(app);
    });
  });

  //on test si la config est bien codee
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
        console.log(signal);//ecrit signal sur le terminal si on est passe jusque la
        assert.ok(signal); //verifie si le signal est bien envoye
        console.log(signal.message);
        assert(signal.message.includes(reminder));
        assert(signal.name.includes('Stand Reminder'));
      }).catch((error) => {
        assert.fail(error)
      });
    })
  });  
})


//the problem I need to solve is > the message doesn 't work 