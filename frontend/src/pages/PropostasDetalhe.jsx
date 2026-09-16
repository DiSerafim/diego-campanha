// frontend/src/pages/PropostasDetalhe.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./PropostasDetalhe.css";

// Conteúdo completo de cada eixo
const eixosData = {
  saude: {
    title: "SAÚDE",
    icon: "🏥",
    description:
      "Fim das filas invisíveis e mapeamento de leitos em todo o Pará",
    googleDocsLink:
      "https://docs.google.com/document/d/1CsUBVLb4cFMyrGUIoD7hgZ2BKztEH2sl7HkMPcQ8b_U/edit?usp=sharing",
    content: {
      discurso: [
        "Muito obrigado pela presença. Eu sou Diego Serafim, candidato a Deputado Estadual pelo PDT, número 12.223.",
        "Eu quero falar com você sobre uma das maiores dores que o povo do Pará enfrenta todos os dias: a saúde que não funciona.",
        "Todo paraense conhece essa história ou já viveu na pele: viajar horas de estrada ou de barco entre as cidades do nosso estado para tentar uma consulta e, quando chega lá, a vaga foi cancelada e ninguém avisou. Dinheiro da passagem perdido e o paciente de volta para o fim da fila.",
        "Isso não é falta de médico. É falta de organização! E desorganização custa caro, custa tempo e custa vidas.",
        "Minha proposta é colocar ordem na casa e acabar com essa farra com três ações:",
        "O Pará não se resume à capital. A força do nosso estado está em cada um dos nossos 144 municípios, e todos merecem o mesmo respeito e atenção.",
        "Como seu Deputado Estadual, eu tenho metas claras e reais:",
        "🎯 Vou fiscalizar os hospitais estaduais e cobrar eficiência da SESPA. Chega de ver o dinheiro público sumir enquanto falta o básico nas nossas cidades.",
        "📜 Vou propor a lei que obriga o envio de exames por WhatsApp, acabando com o deslocamento à toa.",
        "📊 Vou criar o painel público de filas da saúde para que você saiba quem está na fila, onde está e quanto tempo espera.",
        "💰 Vou aprovar recursos no orçamento para equipar os municípios com tecnologia que acaba com a enrolação e tira o controle das mãos de quem manipula as listas de espera.",
        "Mas eu não posso fazer isso sozinho. Quero construir a solução do Pará junto com quem vive o problema de perto todo santo dia.",
        "Quero a sua parceria.",
        "Diego Serafim, 12 223.",
        "Saúde inteligente, saúde que funciona!",
      ],
      atribuicoes: [
        {
          titulo: "Propor leis",
          descricao:
            "Propor leis que obriguem a transparência (ex: painel público de filas). Legislar para que o governo publique a listagem de pacientes (preservando a LGPD) é plenamente constitucional.",
        },
        {
          titulo: "Fiscalizar",
          descricao:
            "Visitas fiscalizatórias surpresas a hospitais estaduais (Regionais e UPAs), checar almoxarifados de remédios e cobrar explicações formais da SESPA.",
        },
        {
          titulo: "Aprovar recursos",
          descricao:
            "Destinar recursos no orçamento estadual (emendas parlamentares) para equipamentos, tecnologia, capacitação e informatização de postos de saúde nos 144 municípios.",
        },
        {
          titulo: "Garantir direitos",
          descricao:
            "Propor leis que garantam direitos ao cidadão (ex: resultado de exame por WhatsApp, prazo máximo para atendimento).",
        },
        {
          titulo: "Criar CPIs",
          descricao:
            "Recolher assinaturas para abrir Comissão Parlamentar de Inquérito (CPI) para investigar contratos da saúde, OSS e desvio de dinheiro público.",
        },
      ],
      objetivos: [
        "CHEGA DE VIAGEM PERDIDA E FILA INVISÍVEL! — O descaso com a sua saúde tem que acabar!",
        "VOU FISCALIZAR OS HOSPITAIS REGIONAIS E OS CONTRATOS DO ESTADO!",
        "PROPOR A LEI QUE OBRIGA O ENVIO DE EXAMES PELO WHATSAPP!",
        "DEVEMOS CUIDAR DOS 144 MUNICÍPIOS! — Vou propor um sistema digital integrado para que o cidadão seja atendido na sua própria região.",
        "VOU PROPOR A LEI QUE CRIA O PAINEL PÚBLICO DE FILAS DA SAÚDE! — Você vai saber quem está na fila, onde está e quanto tempo espera.",
      ],
      cards: [
        "📋 Fiscalizar os hospitais estaduais e cobrar eficiência da SESPA.",
        "📜 Criar a lei que obriga o envio de exames por WhatsApp, acabando com o deslocamento à toa.",
        "💰 Aprovar recursos no orçamento para equipar e modernizar a regulação de saúde em todas as regiões.",
        "📊 Criar a lei que cria o painel público de filas da saúde.",
        "🏥 Mapear leitos nos hospitais para salvar vidas com informação.",
      ],
    },
  },
  obras: {
    title: "TECNOLOGIA, EDUCAÇÃO E INFRAESTRUTURA",
    icon: "🏗️",
    description:
      "3 obras por empresa | educação tecnológica | meritocracia no serviço público",
    googleDocsLink:
      "https://docs.google.com/document/d/1mzJ-YLIlq03fdm-kWlV2voF68KCPJSaXcHOCBu1g-bs/edit?usp=sharing",
    content: {
      discurso: [
        "Muito obrigado pela presença. Eu sou Diego Serafim, candidato a Deputado Estadual pelo PDT, número 12 223.",
        "Eu quero falar com você sobre algo que todo mundo no Pará já viu e que revolta qualquer trabalhador: a 'obra eterna'.",
        "Aquela estrada que começou há 5 anos e até hoje não terminou. Aquele posto de saúde que inauguraram só a pedra fundamental, mas nunca abriram as portas. Aquele ginásio de esportes que ficou no meio do mato, abandonado. Aquele hospital que prometem entregar 'no próximo ano' há uma década.",
        "Sabe por que isso acontece? Porque as mesmas empreiteiras ganham 10, 15, 20 obras ao mesmo tempo. Elas pegam o dinheiro do povo, mas não têm gente suficiente, não têm máquina, não têm compromisso para entregar tudo. Aí uma obra anda devagar, outra para no meio, outra vira ruína antes mesmo de ser entregue. E o dinheiro do povo? Vai embora, e a gente fica sem nada.",
        "Isso é um absurdo. E eu quero acabar com isso.",
        "Minha proposta é uma lei simples, mas que vai economizar milhões e transformar a vida do povo: Nenhuma empresa pode ter mais de 3 obras do Estado ao mesmo tempo.",
        "Funciona assim: se a empresa já tem 3 obras em andamento, ela NÃO PODE pegar mais nenhuma. Tem que entregar o que prometeu primeiro. Quem não dá conta de 3, não merece pegar 10. É a lógica mais básica de respeito com o trabalho e com o dinheiro público.",
        "E tem mais duas propostas fundamentais nesse eixo:",
        "Primeiro: Educação tecnológica de verdade nas escolas estaduais. Todo aluno do ensino médio vai ter acesso a noções de programação, informática, inteligência artificial, marketing digital. Porque o futuro do trabalho é digital, e o jovem do Pará não pode ficar para trás. Seja em Belém, em Santarém, em Marabá ou em qualquer outro município do Pará, o jovem paraense tem que ter a mesma oportunidade de aprender tecnologia.",
        "Segundo: Meritocracia justa no serviço público. A maioria dos servidores trabalha muito e merece nosso respeito. Mas quem estuda, quem se dedica, quem produz resultado, tem que ser reconhecido e premiado. E quem não cumpre o papel, quem enrola o cidadão, tem que ser cobrado. Isso é justo para quem trabalha de verdade.",
        "Vou fazer do Pará um dos primeiros estados a blindar o dinheiro do povo com essa regra das 3 obras. Isso significa mais hospitais prontos, mais estradas asfaltadas, mais escolas funcionando, mais postos de saúde atendendo. Significa respeito para quem mora aqui e confiança para quem visita o nosso estado.",
        "Chega de farra das obras eternas. Chega de dinheiro público jogado fora.",
        "Diego Serafim, 12 223. Tecnologia, eficiência e respeito pelo seu dinheiro.",
      ],
      atribuicoes: [
        {
          titulo: "Propor leis (Obras)",
          descricao:
            "Propor lei que estabeleça o limite de obras simultâneas por empresa. Legislar sobre contratação pública e fiscalização de obras estaduais.",
        },
        {
          titulo: "Propor leis (Educação)",
          descricao:
            "Propor lei que insira programação, robótica e pensamento computacional na grade curricular da rede estadual.",
        },
        {
          titulo: "Propor leis (Serviço Público)",
          descricao:
            "Propor lei instituindo avaliação de desempenho e plano de carreira por mérito para servidores públicos.",
        },
        {
          titulo: "Fiscalizar",
          descricao:
            "Fiscalizar canteiros de obras, contratos públicos e execução orçamentária. Deputados têm livre acesso a repartições públicas para fiscalização.",
        },
        {
          titulo: "Aprovar recursos",
          descricao:
            "Destinar recursos no orçamento estadual para equipar laboratórios de informática, comprar computadores e capacitar professores.",
        },
        {
          titulo: "Criar CPIs",
          descricao:
            "Recolher assinaturas para abrir Comissão Parlamentar de Inquérito para investigar contratos de obras e desvio de dinheiro público.",
        },
      ],
      objetivos: [
        "CHEGA DE OBRA ETERNA E CANTEIRO ABANDONADO! — Se a empreiteira começou, tem que entregar por bem ou por mal.",
        "NO MÁXIMO 3 OBRAS POR EMPRESA! — Se a empresa já tem 3 obras do Estado travadas, fica proibida de pegar novos contratos até entregar o que prometeu.",
        "TECNOLOGIA NAS ESCOLAS DE TODOS OS 144 MUNICÍPIOS! — Informática, programação e IA para preparar nossos jovens para o futuro.",
        "MERITOCRACIA NO SERVIÇO PÚBLICO — VALORIZAR QUEM TRABALHA E COBRAR QUEM ENROLA! Quem serve ao povo deve fazer com excelência.",
        "CHEGA DE DINHEIRO PÚBLICO JOGADO FORA EM OBRAS PARADAS! — Chega de contrato assinado e obra esquecida. Vou fiscalizar de perto.",
      ],
      cards: [
        "📜 Criar a lei que obriga o limite de no máximo 3 obras por empresa. Se não entregar o que prometeu, não pega novo contrato do Estado.",
        "🎯 Fiscalizar de perto os canteiros de obras e os contratos públicos por todo o estado.",
        "💰 Aprovar recursos no orçamento para levar educação tecnológica (programação, informática e inteligência artificial) para as escolas estaduais de todas as cidades.",
        "⚖️ Valorizar e premiar o servidor que se dedica e faz um trabalho de excelência, e cobrar quem enrola o cidadão.",
        "📊 Criar a lei que insere programação, robótica e pensamento computacional na grade curricular da rede estadual.",
      ],
    },
  },
  trabalho: {
    title: "TRABALHO",
    icon: "💼",
    description: "1 Escola Técnica em cada um dos 144 municípios",
    googleDocsLink:
      "https://docs.google.com/document/d/1P4CZWG3hoNjh_egqv8q4INre6GoGECr2HCKMPlQg7ME/edit?usp=sharing",
    content: {
      discurso: [
        "Muito obrigado pela presença. Eu sou Diego Serafim, candidato a Deputado Estadual pelo PDT, número 12 223.",
        "Eu quero falar com você sobre uma dor silenciosa que acontece todos os dias no nosso Pará. Uma dor que não sai no jornal, mas que a gente vê na pele, dentro das nossas casas.",
        "Imagina o seu filho, a sua filha, com 17, 18 anos. Terminou o ensino médio. Quer trabalhar, quer construir a vida, quer ajudar em casa. Mas na sua cidade não tem curso técnico. Não tem escola profissionalizante. Não tem onde aprender uma profissão de verdade.",
        "O que acontece então? Ou o jovem fica parado, sem oportunidade, andando sem rumo pela cidade, ou ele é obrigado a fazer as malas e ir embora. Vai para Belém, vai para Santarém, vai para Marabá. E muitas vezes, nunca mais volta. A cidade perde o jovem, a família perde o filho, e o Pará perde gente boa, gente que poderia estar fazendo a diferença aqui.",
        "Isso é uma tragédia silenciosa. E eu quero acabar com isso.",
        "Minha proposta é clara, ousada e necessária: uma escola técnica ou polo de qualificação profissional em cada um dos 144 municípios do Pará.",
        "Não precisa ser uma universidade gigante. Pode ser um polo, uma escola profissionalizante, com cursos práticos que geram emprego rápido. Cursos como:",
        "• Informática e programação",
        "• Administração e contabilidade",
        "• Enfermagem e cuidados com a saúde",
        "• Mecânica e manutenção",
        "Cursos que dão emprego rápido, que preparam o jovem para a realidade da região dele. E tem um detalhe muito importante: esses cursos vão ser pensados para a realidade de cada cidade. Cada cidade com a sua vocação. Cada jovem com a sua oportunidade. Sem precisar ir embora.",
        "E olha que coisa importante: isso não é só bom para o município. É bom para o Pará inteiro. Porque quando o jovem fica na cidade dele, ele trabalha, ele consome, ele paga imposto, ele faz a economia local girar. A cidade cresce, o município se desenvolve, e o estado inteiro fica mais forte.",
        "Isso é desenvolvimento de verdade. Não é obra de concreto. Não é promessa de palanque. É obra de gente. É dar oportunidade para quem sempre foi esquecido.",
        "O futuro do Pará não está só em Belém. O futuro do Pará está em cada cidade, em cada jovem que merece uma chance.",
        "Diego Serafim, 12 223. O futuro do Pará começa em cada município!",
      ],
      atribuicoes: [
        {
          titulo: "Propor leis",
          descricao:
            "Propor lei que crie o programa estadual de escolas técnicas ou polos de qualificação profissional nos 144 municípios.",
        },
        {
          titulo: "Aprovar recursos",
          descricao:
            "Destinar recursos no orçamento estadual para estruturar laboratórios, comprar computadores e equipar salas de aula profissionalizantes.",
        },
        {
          titulo: "Fiscalizar",
          descricao:
            "Fiscalizar os programas estaduais de geração de emprego e os recursos da SECTET (Secretaria de Ciência, Tecnologia e Educação Profissional) para garantir que cheguem a todos os municípios.",
        },
        {
          titulo: "Articular parcerias",
          descricao:
            "Firmar convênios com prefeituras, SENAI, SENAC, IFPA e UFPA para viabilizar os cursos.",
        },
        {
          titulo: "Criar CPIs",
          descricao:
            "Recolher assinaturas para abrir Comissão Parlamentar de Inquérito para investigar se os recursos para qualificação profissional estão sendo bem aplicados.",
        },
      ],
      objetivos: [
        "A FALTA DE QUALIFICAÇÃO É UMA TRAGÉDIA SILENCIOSA. O Pará precisa reter a sua força de trabalho!",
        "PARA CONSEGUIR APRENDER UMA PROFISSÃO TÉCNICA DE VERDADE, O JOVEM É OBRIGADO A IR PARA OUTRA CIDADE. Isso é um absurdo!",
        "UMA ESCOLA TÉCNICA EM CADA UM DOS 144 MUNICÍPIOS! — Cada cidade do Pará merece um polo de qualificação profissional focado na riqueza da sua região.",
        "CURSOS PRÁTICOS E PENSADOS PARA A VOCAÇÃO ECONÔMICA DE CADA CIDADE.",
        "O JOVEM QUALIFICADO ONDE ELE MORA! — Cursos pensados para fazer a economia local girar, fortalecendo o comércio e gerando renda em cada região do Pará.",
      ],
      cards: [
        "📜 Criar o projeto que indica e cobra a implantação de um polo de qualificação profissional ou escola técnica em cada um dos 144 municípios do Pará.",
        "💰 Aprovar recursos no orçamento para estruturar laboratórios, comprar computadores e equipar essas salas de aula profissionalizantes diretamente nas regiões que mais precisam.",
        "🎯 Fiscalizar os programas estaduais de geração de emprego e os recursos da SECTET para garantir que a qualificação chegue a todos os paraenses.",
        "🏫 Qualificar nossos jovens em informática, programação, enfermagem, agro e mecânica perto de suas casas.",
        "🗳️ QUAL CURSO TÉCNICO OU PROFISSIONALIZANTE MAIS FALTA NA SUA CIDADE HOJE? Clique no botão e vamos desenhar juntos a proposta que vai garantir o futuro dos nossos jovens!",
      ],
    },
  },
  seguranca: {
    title: "SEGURANÇA E JUSTIÇA",
    icon: "🛡️",
    description: "Fundo Estadual de Reparação à Vítima",
    googleDocsLink:
      "https://docs.google.com/document/d/152kerKZLSYVQ72R7_b1xTb3ZqpglWuRAqG3KZfkOg7U/edit?usp=sharing",
    content: {
      discurso: [
        "Muito obrigado pela presença. Eu sou Diego Serafim, candidato a Deputado Estadual pelo PDT, número 12 223.",
        "Eu quero falar com vocês sobre uma injustiça que acontece todo dia no Pará.",
        "Imagina a seguinte cena: o Seu João trabalha 10 anos, junta dinheiro e compra uma moto pra ir trabalhar. Uma noite, dois assaltantes apontaram uma arma, levaram a moto, o celular e o dinheiro do mês. O Seu João faz o boletim de ocorrência, a polícia até prende os ladrões... mas a moto? O celular? O dinheiro? Nunca mais.",
        "Sabe por quê? Porque no Pará, a vítima paga a conta do crime DUAS VEZES: primeiro perde o bem, depois paga imposto pra manter o sistema que não devolve nada.",
        "Isso é INJUSTO. E eu quero mudar isso.",
        "Minha proposta é criar o projeto do Fundo Estadual de Reparação Antecipada à Vítima de Crimes Violentos. Funciona assim:",
        "O policial faz o trabalho dele: investiga, coleta provas, vai atrás e prende o criminoso. Ele passa pela audiência de custódia e vai responder ao processo perante o juiz. Isso é o rito da lei funcionando.",
        "Mas e a vítima? A vítima tem que largar o trabalho, perder um dia inteiro, ir na delegacia fazer a denúncia, acompanhar o caso, provar que perdeu a moto, o celular, o dinheiro. Perde mais tempo, perde mais dinheiro, perde mais dias de trabalho. E no final? Quase nunca recebe de volta o que perdeu.",
        "É por isso que a minha proposta é inovadora: por meio de indicação ao Executivo, o Estado adianta até 80% do valor do prejuízo comprovado, usando recursos do próprio Fundo, que será abastecido com multas estaduais e com o trabalho do condenado. A vítima não precisa ficar esperando anos pelo fim do processo. Ela recebe o amparo rápido, reconstrói a vida e volta a trabalhar.",
        "E agora vem a parte mais importante da gestão: o Estado vai cobrar cada centavo de volta do criminoso. Minha proposta é criar a lei estadual que autoriza o Estado a firmar convênios com o sistema prisional para utilizar mão de obra carcerária nas frentes de trabalho público, com o salário revertido para o Fundo de Reparação. O criminoso vai trabalhar nas frentes de serviços públicos das nossas cidades e o salário dele será retido pelo Estado para ressarcir o Fundo.",
        "Quem cometeu o crime vai ter que trabalhar duro para pagar o que tirou de quem não fez nada de errado. É a vítima no centro do sistema, protegida, e o bandido pagando a conta no final através do próprio suor.",
        "Segurança de verdade não é só prender. É proteger quem trabalha, quem constrói, quem paga imposto nos nossos 144 municípios. É fazer justiça pra vítima também.",
        "Diego Serafim, 12 223. Segurança com justiça de verdade!",
      ],
      atribuicoes: [
        {
          titulo: "Projeto de Indicação",
          descricao:
            "Criar um projeto oficial da Assembleia Legislativa 'indicando' e desenhando todo o funcionamento do Fundo para o Governador. O Governador avalia e, vendo o apelo popular, pode enviar o projeto para a Assembleia aprovar.",
        },
        {
          titulo: "Lei de Diretrizes e Parcerias",
          descricao:
            "Criar lei estadual determinando que empresas terceirizadas do Estado reservem cota de vagas para presos e condenados, com o salário retido para indenizar as vítimas.",
        },
        {
          titulo: "Fiscalizar",
          descricao:
            "Fiscalizar o sistema prisional e os contratos de terceirização para garantir que a mão de obra carcerária esteja sendo usada conforme a lei.",
        },
        {
          titulo: "Aprovar recursos",
          descricao:
            "Destinar recursos no orçamento estadual para modernizar delegacias e digitalizar o atendimento à vítima.",
        },
        {
          titulo: "Criar CPIs",
          descricao:
            "Recolher assinaturas para abrir Comissão Parlamentar de Inquérito para investigar desvios na segurança pública e no sistema prisional.",
        },
      ],
      defesaTecnica: [
        "Eu sei muito bem o papel de um deputado. Eu não vou assinar o cheque.",
        "Eu vou propor o Projeto de Indicação e usar a força dos meus votos na Assembleia para aprovar as diretrizes do Fundo de Amparo à Vítima.",
        "Eu vou propor a Lei Estadual que obriga o criminoso a trabalhar nas terceirizadas do Estado para pagar o que roubou.",
        "Quem não tem proposta para defender o trabalhador tenta travar quem tem coragem de fazer!",
      ],
      objetivos: [
        "CHEGA DO TRABALHADOR PAGAR A CONTA DO CRIME DUAS VEZES! — Perde o bem, perde tempo, perde dinheiro. Isso tem que acabar.",
        "O CIDADÃO PERDE O BEM, PERDE DIAS DE TRABALHO NA DELEGACIA E FICA NO PREJUÍZO. Isso tem que acabar!",
        "FUNDO ESTADUAL DE REPARAÇÃO À VÍTIMA! — Vou propor a lei do Fundo de Reparação Antecipada à Vítima!",
        "O CRIMINOSO VAI TRABALHAR PARA PAGAR O QUE TIROU DE VOCÊ! — Vou propor a lei para que as empresas terceirizadas do Estado usem a mão de obra carcerária, revertendo o salário do condenado para o Fundo.",
        "NAS URNAS, VOCÊ NÃO ESCOLHE SÓ UM NOME! — Você manifesta o seu apoio para buscar o fim da impunidade contra quem trabalha honestamente nos nossos 144 municípios.",
        "O SEU VOTO É O MAIOR APELO QUE O GOVERNO NÃO PODE IGNORAR! — Vamos transformar o seu voto em justiça de verdade? Toque no botão abaixo, junte-se a este projeto e vamos construir juntos essa corrente de apoio! Vem Comigo! | Diego Serafim - 12 223",
      ],
      cards: [
        "📜 Criar o projeto de instituição do Fundo Estadual de Reparação à Vítima. O Estado vai amparar o cidadão de bem, adiantando o prejuízo após a comprovação do crime para que ele possa reconstruir a vida rápido.",
        "🎯 Fiscalizar e cobrar para que o criminoso trabalhe na manutenção e limpeza pública das nossas cidades, revertendo esse suor para ressarcir o Fundo de Reparação. Quem tirou do trabalhador, vai trabalhar para pagar!",
        "💰 Aprovar recursos no orçamento para modernizar as delegacias e digitalizar o atendimento à vítima nas nossas regiões, evitando que você perca dias de trabalho em filas burocráticas.",
        "⚖️ Segurança de verdade não é só prender. É proteger quem produz, quem constrói e quem paga imposto.",
        "📊 Criar o Projeto de Indicação e usar a força dos meus votos na Assembleia para aprovar as diretrizes do Fundo de Amparo à Vítima.",
        "Quero o seu voto, na cobrança por paz e justiça. Clique no botão, traga o seu relato e vamos desenhar juntos as propostas de fiscalização que vão devolver o sossego para a nossa região!",
      ],
    },
  },
};

const PropostasDetalhe = () => {
  const { eixo } = useParams();
  const data = eixosData[eixo];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!data) {
    return (
      <div className="page-detalhe container" style={{ padding: "120px 0" }}>
        <h2>Eixo não encontrado</h2>
        <Link to="/propostas" className="btn-back">
          ← Voltar para propostas
        </Link>
      </div>
    );
  }

  const content = data.content;

  return (
    <>
      <Helmet>
        <title>{data.title} | Diego Serafim - Deputado Estadual</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <div className="page-detalhe">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link to="/propostas" className="btn-back">
              ← Voltar para propostas
            </Link>

            {/* Header do eixo */}
            <div className="detalhe-header">
              <span className="detalhe-icon">{data.icon}</span>
              <h1 className="detalhe-title">{data.title}</h1>
              <p className="detalhe-description">{data.description}</p>
            </div>

            {/* ÁREA DE LEITURA – FUNDO BRANCO E TEXTO PRETO */}
            <div className="detalhe-leitura">
              <div className="leitura-header">
                <span className="leitura-badge">📄 Conteúdo Completo</span>
                <a
                  href={data.googleDocsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leitura-link"
                >
                  📎 Ver no Google Docs
                </a>
              </div>

              <div className="leitura-content">
                {/* 1. DISCURSO */}
                <h2 className="leitura-title">1. Discurso</h2>
                {content.discurso &&
                  content.discurso.map((p, i) => (
                    <p key={i} className="leitura-paragraph">
                      {p}
                    </p>
                  ))}

                {/* 2. ATRIBUIÇÕES DO DEPUTADO */}
                {content.atribuicoes && (
                  <>
                    <h2 className="leitura-title">
                      2. Atribuições do Deputado Estadual
                    </h2>
                    <p className="leitura-sub">
                      Base legal e técnica para você saber exatamente o que
                      posso fazer:
                    </p>
                    <div className="atribuicoes-grid">
                      {content.atribuicoes.map((item, i) => (
                        <div key={i} className="atribuicao-item">
                          <span className="atribuicao-titulo">
                            {item.titulo}
                          </span>
                          <p className="atribuicao-descricao">
                            {item.descricao}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* 3. MEUS OBJETIVOS (Bordão) */}
                {content.objetivos && (
                  <>
                    <h2 className="leitura-title">3. Meus Objetivos</h2>
                    {content.objetivos.map((p, i) => (
                      <p key={i} className="leitura-paragraph objetivo">
                        {p}
                      </p>
                    ))}
                  </>
                )}

                {/* Link para o documento completo */}
                <div className="leitura-footer">
                  <a
                    href={data.googleDocsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leitura-docs-link"
                  >
                    📄 Veja também o documento no Google Docs →
                  </a>
                </div>
              </div>
            </div>

            {/* Cards de compromissos */}
            <div className="detalhe-cards">
              <h3>📌 Meu Compromisso</h3>
              <div className="cards-list">
                {content.cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="cards-list-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <span className="card-badge">#{index + 1}</span>
                    <span className="card-text">{card}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="detalhe-cta">
              <p className="cta-text">
                🗳️ Mas eu não posso fazer isso sozinho.
              </p>
              <p className="cta-text">
                Quero construir a solução junto com quem vive o problema de
                perto.
              </p>
              <Link to="/participe" className="btn-primary">
                Quero fazer parte dessa mudança
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PropostasDetalhe;
