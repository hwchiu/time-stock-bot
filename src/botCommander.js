import config from 'config';
import TelegramBot from 'node-telegram-bot-api';

const options = {
  polling: true,
  // webHook: {
  //   host: config.WEBHOOK_HOST,
  //   port: config.WEBHOOK_PORT,
  //   key: `${__dirname}/key.pem`,
  //   cert: `${__dirname}/crt.pem`,
  // },
};
const bot = new TelegramBot(config.BOT_TOKEN, options);

bot.on('polling_error', (error) => {
  console.error(error.code);
  console.error(error);
});
bot.on('webhook_error', (error) => {
  console.error(error.code);
  console.error(error);
});
bot.on('error', (error) => {
  console.error(error.code);
  console.error(error);
});

let commands = {};
export function addCommand(command, fn){
  commands[`${command.name}.${command.fn}`] = fn;
  bot.onText(command.regex, fn);
}

export function runCommand(command, msg, match, fnName='default'){
  return commands[`${command}.${fnName}`].call(this, msg, match);
}

export function sendMessage(id, message, extraOps){
  return bot.sendMessage(id, message);
}

export default {
  sendMessage,
  addCommand,
  runCommand,
};
