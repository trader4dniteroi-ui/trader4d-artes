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

#daytradeniteroi #niteroi #niteroirj #centrodeniteroi #saogoncalo
#forex #forexbrasil #daytrade #priceaction #smc #wyckoff
#gestaoderisco #educacaofinanceira`
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

#daytradeniteroi #niteroi #niteroirj #centrodeniteroi #saogoncalo
#forex #forexbrasil #daytrade #priceaction #smc #wyckoff
#gestaoderisco #educacaofinanceira`
  },
  'prova-social-01': {
    caption: `Não sou eu quem diz. São 41 pessoas.

5,0 de 5 avaliações no Google — 41 pessoas verificadas.
Sala 318 · Centro de Niterói/RJ

"Fiz o curso com a equipe junto dele uns anos atrás e até hj ele me atende com a mesma atenção e humildade de sempre."

"Eu já fiz muitos cursos, mais esse é diferenciado — é o top do top melhor conteúdo que você vai ver."

"Sou grata não só pelo ensino, mas também pela paciência, dedicação e vontade que tem de ver os alunos alcançarem seus objetivos."

Conta verificada pela Meta.

Vem conhecer a sala.

Na Trader4D você não assiste — a gente te ensina e opera com você nos dois mercados, B3 e Forex.

📍 Centro de Niterói/RJ
👇 Link na bio

#daytradeniteroi #niteroi #reviews #proveesocial #trader4d`
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

async function publish(folder, name, scheduledTime = null) {
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

  console.log(scheduledTime ? '3. Agendando...' : '3. Publicando...');
  const args = {
    ig_user_id: IG_USER_ID,
    creation_id: carousel.id
  };
  if (scheduledTime) {
    const ts = Math.floor(new Date(scheduledTime).getTime() / 1000);
    if (isNaN(ts)) throw new Error(`data inválida: "${scheduledTime}". use formato "YYYY-MM-DD HH:mm"`);
    args.scheduled_publish_time = ts;
    console.log(`   para ${scheduledTime}`);
  }
  const post = await exec('INSTAGRAM_CREATE_POST', args);
  console.log(`   ✅ ${scheduledTime ? 'agendado' : 'publicado'}: ${post.id}`);
  return post.id;
}

// Modo de uso: node ig-publish.mjs <folder> [data-hora]
const arg = process.argv[2];
const dataHora = process.argv[3];
if (!arg || arg === '--help') {
  console.log('Uso: node ig-publish.mjs <folder> [data-hora]\n');
  console.log('Pastas disponíveis:');
  Object.keys(posts).forEach(f => console.log(`  ${f}`));
  console.log('\nExemplo com agendamento:');
  console.log('  node ig-publish.mjs forex-aula-02 "2026-08-20 09:00"');
  process.exit(0);
}

if (!posts[arg]) {
  console.error(`\nPasta "${arg}" não existe.\n`);
  Object.keys(posts).forEach(f => console.log(`  ${f}`));
  process.exit(1);
}

try {
  await publish(arg, posts[arg].caption.split('\n')[0], dataHora);
  console.log('\n✅ ' + (dataHora ? 'agendamento completo' : 'publicação completa') + '!\n');
} catch (e) {
  console.error('\n❌ erro:', e.message, '\n');
  process.exit(1);
}
