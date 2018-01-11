// Import a logger for easier debugging.

import debug from 'debug';
import $ from 'jquery';

alert("ddd");
const log = debug('app:log');

log("pera");

// The logger should only be enabled if we’re not in production.
if (ENV !== 'production') {

  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');

} else {
  debug.disable();
}


$("body").css("background-color", "red");