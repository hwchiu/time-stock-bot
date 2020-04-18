import commandsConfig from './commandsConfiguration';
import botCommander from '../botCommander';

const commandsDescription = commandsConfig
.filter(command=>!command.disabled)
.map(command=>{
  const mdParams = command.params&&command.params.map(param=>`_<${param.toUpperCase()}>_`).join(' ');
  const paramsStr = mdParams? ` ${mdParams}`:'';
  return `/${command.name}${paramsStr} - ${command.description}`;
})
.join('\n');

const helpIntro = `Hi, I\'m *TimeStockBot*
This is what I can do:`;

const examples = `*Examples:*
/info fb
/get fb
/graph fb w`;

const helpMessage = [helpIntro, commandsDescription, examples].join('\n');

export default function(msg){
  const fromId = msg.from.id;
  botCommander.sendMessage(fromId, helpMessage, {disable_web_page_preview:false});
}
