import fs from 'fs';
const env = fs.readFileSync('C:/Users/fbrun/Documents/KPA-WINDOWS/KPA-WINDOWS/v31/.env.local', 'utf8');
const apiKey = (env.match(/^COMPOSIO_API_KEY=(.*)$/m) || [])[1].trim();
const IG_USER_ID = '17841450152321296';
const USER_ID = 'local_owner_eb009dff323c974b';
const BASE_URL = 'https://trader4dniteroi-ui.github.io/trader4d-artes';

const posts = {
  'forex-aula-01': {
    caption: `Você nunca teve tempo de operar. O mercado é que estava fechado.

A B3 abre às 9h e fecha às 18h.
Seu expediente abre às 9h e fecha às 18h.

Não é falta de disciplina. É sobreposição de horário.

O mercado de moedas não tem leilão de abertura nem pregão que encerra: abre domingo à noite e só fecha na sexta à noite.
Existe gráfico se movendo às 20h de uma terça-feira.

O que NÃO muda: estrutura, liquidez, gestão de risco, plano escrito antes de abrir. O método é o mesmo — Wyckoff, SMC e ICT.

O que MUDA: par no lugar de contrato, lote no lugar de quantidade, spread no lugar de leilão, sessão no lugar de pregão.

Salva esse: o slide 4 tem os horários das três sessões.

Essa é a AULA 01 da nossa trilha de Forex aqui no perfil.
São 6 aulas, do zero ao técnico.

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex, na sala ao vivo todos os dias.
Depois você escolhe qual cabe na sua rotina.

📍 Escola presencial no Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets

👇 Que horas do dia você teria pra operar de verdade?

Conteúdo educacional. Não é recomendação de investimento.

#daytradeniteroi #niteroi #niteroirj #centrodeniteroi #saogoncalo`
  },
  'forex-aula-02': {
    caption: `Você nunca comprou euro. Você comprou uma comparação.

EUR/USD = quanto de dólar custa 1 euro.
Não é um ativo. É a relação entre duas moedas.

BASE (esquerda): o que você compra ou vende.
COTADA (direita): com o que você paga.

Por que o preço sobe? Duas causas diferentes, o mesmo movimento na tela:
— A base fortalece
— ou A cotada enfraquece

Saber qual das duas muda a leitura inteira.

Os mais negociados:
EUR/USD · GBP/USD · USD/JPY

São os de maior volume — e por isso os de spread mais baixo.

Antes de abrir qualquer par, pergunte:
1) Qual é a base e qual é a cotada?
2) O movimento vem da força de uma ou da fraqueza da outra?
3) Que sessão está aberta para esse par agora?

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex, na sala ao vivo todos os dias.
Depois você escolhe qual cabe na sua rotina.

📍 Escola presencial no Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets

Conteúdo educacional. Não é recomendação de investimento.

#daytradeniteroi #niteroi #niteroirj #centrodeniteroi #saogoncalo`
  },
  'forex-aula-03': {
    caption: `Não saber o tamanho do lote pode destruir seu patrimônio.

Lote é o volume que você está operando — padrão, mini ou micro.
Ele não muda sua análise. Muda sua conta.

Pip é a menor variação padrão do preço.
No EUR/USD, 1 pip = 0,0001.
No lote padrão isso equivale a cerca de US$ 10 por pip.

Spread é a diferença entre o preço de compra e de venda.
Toda operação nasce com esse custo já pago.

Alavancagem não aumenta sua chance.
Aumenta o tamanho das duas pontas — do acerto e do erro.
Não é bônus. É multiplicador de exposição.

A pergunta certa não é "quantos lotes eu abro?"
A pergunta certa é: "quantos % da minha conta eu aceito perder nessa operação?"

Antes de definir o tamanho:
1) Onde está o meu stop, em pips?
2) Quanto isso representa em % do meu patrimônio?
3) Esse número me deixa confortável para deixar a operação andar?

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex, na sala ao vivo todos os dias.
Depois você escolhe qual cabe na sua rotina.

📍 Escola presencial no Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets

Conteúdo educacional. Não é recomendação de investimento.

#forex #priceaction #gestaoderisco #daytrade #niteroi`
  },
  'forex-aula-04': {
    caption: `Seu stop não foi azar. Ele estava junto com o de milhares.

Onde todo mundo põe stop?
Comprado? Stop abaixo do fundo.
Vendido? Stop acima do topo.

Esses são os níveis óbvios. E quando todos colocam no óbvio, o preço sabe onde vai buscar liquidity.

Liquidez é o volume — é gente vendendo ou comprando.

Quando o preço está no extremo de uma faixa, todo trader aciona o stop.
Aquele aglomerado de ordens é o que cria a liquidez.

Wyckoff chama isso de Spring (pra cima) ou Upthrust (pra baixo).
ICT chama de Liquidity Sweep.

É o padrão observado com frequência — não é regra, não acontece sempre.

Mas quando você sabe onde está a concentração de stops, você deixa de ser surpreso.

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex, na sala ao vivo todos os dias.
Depois você escolhe qual cabe na sua rotina.

📍 Escola presencial no Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets

Conteúdo educacional. Não é recomendação de investimento.

#forex #priceaction #wyckoff #smc #niteroi`
  },
  'prop-trading-intro': {
    caption: `Duas formas de operar Forex. Qual é a sua?

CONTA REAL (Seu Capital)
Você deposita. Você opera. Você lucra 100%.

✓ Liberdade total: opere como quiser
✓ Seu capital cresce inteiro
✓ Sem contrato ou exclusividade

✗ Risco é 100% seu
✗ Precisa de capital inicial (US$ 100+)
✗ Alavancagem custa financing fee

---

MESA PROPRIETÁRIA (Capital da Hantec)
Você paga o plano. Hantec cede capital. Lucro dividido.

✓ Risco controlado (Max Loss 8%)
✓ Começa com US$ 18,85/mês
✓ Sem financing fee cara
✓ Capital escalável (prova lucro, sobe limite)

✗ Lucro dividido
✗ Regras de operação mais rígidas
✗ Contrato exclusivo

---

A METODOLOGIA É A MESMA
Wyckoff. SMC. ICT.

Você opera Forex da mesma forma nos dois modelos.
A diferença é o capital que você tem à disposição
e o risco que você carrega.

Na Trader4D você aprende OS DOIS.
Você testa OS DOIS.
Depois você escolhe qual faz sentido pro seu patrimônio.

📍 Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets
🎯 Aula experimental GRÁTIS

Conteúdo educacional. Não é recomendação de investimento.

#forex #forexbrasil #mesaproprietaria #contapropria #priceaction #trader4d`
  },
  'mesa-proprietaria': {
    caption: `Existe uma forma de operar um capital que não é seu. Chama-se mesa proprietária.

Mesa proprietária é uma empresa que coloca o próprio capital na mão de traders. Ela não vive de mensalidade de curso: ela ganha quando o trader opera bem, porque divide o resultado com ele. O interesse dos dois lados é o mesmo.

COMO SE ENTRA
Você escolhe o tamanho da conta que quer operar — de 5K a 200K — e passa por uma avaliação. Nela a mesa quer ver duas coisas: que você alcança a meta de lucro de 6% e que faz isso sem estourar a perda máxima de 8%. E não existe prazo. Você pode levar uma semana ou três meses. O que está sendo medido é consistência, não velocidade.

O QUE MUDA DEPOIS DA APROVAÇÃO
Você passa a operar o capital da mesa e fica com a maior parte do resultado: a remuneração do trader começa em 80% e pode chegar a 95%. O capital exposto é da mesa. O seu compromisso é com o processo.

POR QUE A MAIORIA NÃO PASSA
Não é falta de técnica. É abandonar o plano que o próprio trader escreveu — aumenta o lote fora da hora, tira o stop, tenta recuperar tudo no mesmo dia. A avaliação não testa se você sabe analisar o gráfico. Testa se você consegue seguir a sua própria regra com dinheiro na frente.

É por isso que a preparação vem antes da conta.

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex, na sala ao vivo todos os dias.

O plano de mesa sai com o cupom exclusivo da Trader4D. Chama no WhatsApp que eu te explico qual tamanho de conta faz sentido pro seu momento.

📍 Escola presencial no Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets

👇 Você já tentou uma avaliação de mesa, ou ainda está montando seu plano?

Conteúdo educacional. Não é recomendação de investimento.

#mesaproprietaria #proptrading #forex #daytradeniteroi #niteroi #centrodeniteroi #saogoncalo`
  },
  'forex-aula-05-sessoes': {
    caption: `Você não chegou atrasado. Você chegou na fase errada.

O mercado de moedas não tem um expediente único — tem três:

ÁSIA (Tóquio, 20h de segunda até 9h de terça, horário de Brasília)
A abertura. O mercado aquecendo.

LONDRES (Londres, 2h até 12h, horário de Brasília)
A sobreposição. Londres cruza com Ásia em queda, depois encontra Nova York em abertura.
O maior volume acontece aqui — é quando dois mercados gigantes estão abertos simultaneamente.

NOVA YORK (Nova York, 9h em diante, horário de Brasília)
O encerramento. O dia fechando força.

Em Wyckoff, toda estrutura tem fases:
Accumulation (os grandes acumulando)
Markup (disparada)
Distribution (distribuindo força)
Markdown (queda)

Você não escolhe qual fase vai ver. A hora do dia escolhe pra você.

Saber qual sessão está aberta significa entender qual fase do ciclo o preço está vivendo.

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex, na sala ao vivo todos os dias.
Depois você escolhe qual cabe na sua rotina.

📍 Escola presencial no Centro de Niterói/RJ
🤝 Parceria oficial Hantec Markets

Conteúdo educacional. Não é recomendação de investimento.

#forex #priceaction #wyckoff #smc #niteroi`
  }
};

async function exec(slug, args) {
  const r = await fetch(`https://backend.composio.dev/api/v3/tools/execute/${slug}`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'content-type': 'application/json' },
    body: JSON.stringify({ user_id: USER_ID, arguments: args })
  });
  const d = await r.json();
  if (!d.successful) throw new Error(`${slug}: ${JSON.stringify(d)}`);
  return d.data;
}

async function publish(folder, name) {
  console.log(`\n=== ${name} ===`);
  const slides = Array.from({length: 8}, (_, i) => `${BASE_URL}/${folder}/slide-${String(i+1).padStart(2, '0')}.png`);

  console.log('1. Uploadando imagens...');
  const children = [];
  for (let i = 0; i < slides.length; i++) {
    const r = await exec('INSTAGRAM_CREATE_MEDIA_CONTAINER', {
      ig_user_id: IG_USER_ID,
      image_url: slides[i],
      content_type: 'carousel_item'
    });
    children.push(r.id);
    console.log(`   slide ${i+1}/8 ✓`);
  }

  console.log('2. Montando carrossel...');
  const carousel = await exec('INSTAGRAM_CREATE_CAROUSEL_CONTAINER', {
    ig_user_id: IG_USER_ID,
    children: children,
    caption: posts[folder].caption
  });
  console.log(`   draft id: ${carousel.id}`);

  console.log('3. Publicando...');
  const post = await exec('INSTAGRAM_CREATE_POST', {
    ig_user_id: IG_USER_ID,
    creation_id: carousel.id
  });
  console.log(`   ✅ publicado: ${post.id}`);
  return post.id;
}

const arg = process.argv[2];
if (!arg || arg === '--help') {
  console.log('Uso: node ig-publish.mjs <folder>\n');
  console.log('Pastas disponíveis:');
  Object.keys(posts).forEach(f => console.log(`  ${f}`));
  process.exit(0);
}

if (!posts[arg]) {
  console.error(`\nPasta "${arg}" não existe.\n`);
  Object.keys(posts).forEach(f => console.log(`  ${f}`));
  process.exit(1);
}

try {
  await publish(arg, posts[arg].caption.split('\n')[0]);
  console.log('\n✅ publicacao completa!\n');
} catch (e) {
  console.error('\n❌ erro:', e.message, '\n');
  process.exit(1);
}
