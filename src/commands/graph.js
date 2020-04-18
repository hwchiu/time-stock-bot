import botCommander from '../botCommander';

export function sectorGraphs(msg){
  const fromId = msg.chat.id;
  const links = [
    '[Daily](http://finviz.com/grp_image.ashx?bar_sector_t.png)',
    '[Weekly](http://finviz.com/grp_image.ashx?bar_sector_w.png)',
    '[Monthly](http://finviz.com/grp_image.ashx?bar_sector_m.png)',
    '[Quartarly](http://finviz.com/grp_image.ashx?bar_sector_q.png)',
    '[6 Months](http://finviz.com/grp_image.ashx?bar_sector_h.png)',
    '[Yearly](http://finviz.com/grp_image.ashx?bar_sector_y.png)',
    '[Year to Date](http://finviz.com/grp_image.ashx?bar_sector_ytd.png)',
  ];

  return Promise.all(links.map(link=>botCommander.sendMessage(fromId,link,{disable_web_page_preview:false})));
}
export function stock3dGraph(msg, match){
  const fromId = msg.chat.id;
  const stockSign = match[1];

  return botCommander.sendMessage(
    fromId,
    `http://finviz.com/chart.ashx?t=${stockSign}&ty=c&p=d&ta=1`,
    {disable_web_page_preview:false}
  );
}
export function stockGraph(msg, match){
  const fromId = msg.chat.id;
  const stockSign = match[1];
  let amountPeriod = match[2];
  amountPeriod = amountPeriod===''?3:parseInt(amountPeriod);
  const timePeriod = match[3]||'d';

  return botCommander.sendMessage(
    fromId,
    `https://finviz.com/chart.ashx?t=${stockSign}&ty=c&ta=0&p=${timePeriod}`,
    {disable_web_page_preview:false}
  );
}

export default {
  sectorGraphs,
  stock3dGraph,
  stockGraph,
};
