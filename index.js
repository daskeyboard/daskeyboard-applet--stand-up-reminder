const q = require('daskeyboard-applet');
const logger = q.logger; // to access to the logger


class StandReminder extends q.DesktopApp {

  constructor() {
    super();
    this.pollingInterval = 1000;
    logger.info("Stand Up Reminder ready to go!");
  }

  async run() {
    var now = new Date();
    var n = now.getMinutes();
    var sec = now.getSeconds();

    const minuteAfterTheHour = this.config.minuteAfterTheHour;
    var integer = parseInt(minuteAfterTheHour, 10);

        if ( n == integer && sec == 0){
          
          logger.info("Running.");
          const color = '#FF0000';
          console.log("send a signal");

          return new q.Signal({
            points: [
              [new q.Point(color, q. Effects.BLINK)]
            ],
            name: 'Stand Up Reminder',
            message: `It's time to stand up!` 
          });
    }
      else{   
        // not time to blink
        return null;   
       }   
  }
}


module.exports = {
  StandReminder: StandReminder
}

const applet = new StandReminder();
