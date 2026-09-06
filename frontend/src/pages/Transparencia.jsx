// frontend/src/pages/Transparencia.jsx

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Transparencia.css";

const Transparencia = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Dados do extrato bancário
  const extrato = [
    { data: "11/08/2026", historico: "SALDO ANTERIOR", valor: "0,00" },
    { data: "12/08/2026", historico: "Abertura de Conta - Depósito Inicial Eleitoral", valor: "+ 100,00" },
    { data: "14/08/2026", historico: "Tarifa Isenta - Res. TSE 23607", valor: "0,00" },
    { data: "20/08/2026", historico: "Crédito Pix - Doação de Campanha Eleitoral", valor: "+ 500,00" },
    { data: "25/08/2026", historico: "Envio Pix - Pagamento Fornecedor Impressos", valor: "- 250,00" },
    { data: "26/08/2026", historico: "SALDO ATUALIZADO DISPONÍVEL", valor: "350,00" },
  ];

  return (
    <>
      <Helmet>
        <title>Transparência | Diego Serafim - Deputado Estadual</title>
        <meta
          name="description"
          content="Transparência e prestação de contas da campanha de Diego Serafim para Deputado Estadual. CNPJ, dados do candidato, conta bancária e Pix para doações."
        />
      </Helmet>

      <div className="page-transparencia">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Transparência</h1>
            <p className="page-subtitle">
              Compromisso com a prestação de contas e a transparência total.
            </p>

            {/* CARD 1 – DADOS DA CAMPANHA */}
            <div className="transparency-card">
              <h3>📄 Dados da Campanha</h3>
              <div className="transparency-grid">
                <div className="transparency-item">
                  <span className="label">CNPJ</span>
                  <span className="value">68.504.357/0001-40</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Partido</span>
                  <span className="value">PDT – Partido Democrático Trabalhista</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Candidatura</span>
                  <span className="value">Deputado Estadual – PA</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Número</span>
                  <span className="value">12.223</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Data de Abertura</span>
                  <span className="value">11/08/2026</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Situação</span>
                  <span className="value status-deferido">✅ Deferido</span>
                </div>
              </div>
            </div>

            {/* CARD 2 – DADOS DO CANDIDATO */}
            <div className="transparency-card">
              <h3>👤 Dados do Candidato</h3>
              <div className="transparency-grid">
                <div className="transparency-item">
                  <span className="label">Nome Completo</span>
                  <span className="value">Diego Serafim de Sousa</span>
                </div>
                <div className="transparency-item">
                  <span className="label">CPF</span>
                  <span className="value">887.255.452-72</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Data de Nascimento</span>
                  <span className="value">15/09/1986</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Idade</span>
                  <span className="value">39 anos</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Gênero</span>
                  <span className="value">Masculino</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Cor / Raça</span>
                  <span className="value">Parda</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Estado Civil</span>
                  <span className="value">Casado(a)</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Grau de Instrução</span>
                  <span className="value">Superior Completo</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Ocupação</span>
                  <span className="value">Comerciante</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Nacionalidade</span>
                  <span className="value">Brasileira Nata</span>
                </div>
                <div className="transparency-item">
                  <span className="label">Naturalidade</span>
                  <span className="value">Belém – PA</span>
                </div>
              </div>
            </div>

            {/* CARD 3 – CONTA BANCÁRIA E DOAÇÕES (NOVO) */}
            <div className="transparency-card donation-card">
              <h3>💰 Conta Bancária e Doações</h3>
              <p className="donation-info">
                Sua doação é fundamental para fortalecer nossa campanha e
                construir um Pará melhor. Todo recurso é declarado à Justiça
                Eleitoral e utilizado com transparência.
              </p>

              <div className="bank-details">
                <div className="bank-item">
                  <span className="label">Banco</span>
                  <span className="value">Banco do Brasil</span>
                </div>
                <div className="bank-item">
                  <span className="label">Agência</span>
                  <span className="value">8697-5</span>
                </div>
                <div className="bank-item">
                  <span className="label">Conta Corrente Eleitoral</span>
                  <span className="value highlight">56782-5</span>
                </div>
                <div className="bank-item">
                  <span className="label">Titular</span>
                  <span className="value">ELEICAO 2026 DIEGO SERAFIM DE SOUSA DEPUTADO ESTADUAL</span>
                </div>
                <div className="bank-item">
                  <span className="label">CNPJ</span>
                  <span className="value">68.504.357/0001-40</span>
                </div>
              </div>

              {/* PIX */}
              <div className="pix-section">
                <h4>📱 Doação via PIX</h4>
                <div className="pix-details">
                  <div className="pix-item">
                    <span className="label">Chave Pix (CNPJ)</span>
                    <span className="value pix-key">68.504.357/0001-40</span>
                  </div>
                  <div className="pix-item">
                    <span className="label">Tipo</span>
                    <span className="value">CNPJ</span>
                  </div>
                  <div className="pix-item">
                    <span className="label">Titular</span>
                    <span className="value">ELEICAO 2026 DIEGO SERAFIM DE SOUSA DEPUTADO ESTADUAL</span>
                  </div>
                </div>
                <div className="pix-alert">
                  <span>⚠️</span>
                  <p>
                    <strong>Importante:</strong> Ao realizar sua doação, informe
                    o <strong>CNPJ 68.504.357/0001-40</strong> como chave Pix.
                    A doação será registrada automaticamente na prestação de
                    contas da campanha.
                  </p>
                </div>
              </div>

              <div className="donation-limits">
                <h4>📋 Informações sobre Doações</h4>
                <ul>
                  <li>✅ Doações são permitidas apenas para <strong>pessoas físicas</strong></li>
                  <li>✅ Limite máximo por pessoa: <strong>R$ 1.270.629,01</strong> (limite legal do 1º turno)</li>
                  <li>✅ Doações acima de R$ 1.000,00 devem ser identificadas</li>
                  <li>✅ Todo recurso é declarado à Justiça Eleitoral</li>
                  <li>✅ <strong>Dedução fiscal:</strong> 100% do valor doado pode ser abatido do Imposto de Renda, dentro dos limites legais</li>
                </ul>
              </div>
            </div>

            {/* CARD 4 – EXTRATO BANCÁRIO RESUMIDO */}
            <div className="transparency-card">
  <h3>📊 Extrato Bancário</h3>
  <p className="extrato-info">
    Período: <strong>01/08/2026 a 26/08/2026</strong>
  </p>
  <div className="extrato-table">
    <div className="extrato-header">
      <span>Data</span>
      <span>Histórico</span>
      <span>Valor (R$)</span>
    </div>
    <div className="extrato-row saldo">
      <span>11/08/2026</span>
      <span>Abertura de Conta</span>
      <span>0,00</span>
    </div>
    <div className="extrato-row saldo">
      <span>26/08/2026</span>
      <span>SALDO ATUALIZADO</span>
      <span>0,00</span>
    </div>
  </div>
  <p className="extrato-footer">
    Conta eleitoral aberta. Aguardando primeira movimentação.
  </p>
  <p className="extrato-footer" style={{ color: 'rgba(255,255,255,0.3)' }}>
    Documento emitido via Plataforma de Autoatendimento APF/APJ Banco do Brasil em 27/08/2026.
  </p>
</div>


            {/* CARD 5 – LIMITE DE GASTOS */}
            <div className="transparency-card">
              <h3>💰 Limite de Gastos</h3>
              <div className="transparency-grid single">
                <div className="transparency-item">
                  <span className="label">Limite Legal 1º Turno</span>
                  <span className="value highlight">R$ 1.270.629,01</span>
                </div>
              </div>
            </div>

            {/* CARD 6 – PRESTAÇÃO DE CONTAS E LINKS OFICIAIS */}
            <div className="transparency-card tse-card">
              <h3>🔍 Prestação de Contas</h3>
              <p>
                A prestação de contas da campanha está disponível nos sistemas
                oficiais do Tribunal Superior Eleitoral.
              </p>
              <div className="tse-links">
                <a
                  href="https://divulgacandcontas.tse.jus.br/divulga/#/candidato/NORTE/PA/20322002026/140002546437/2026/PA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tse"
                >
                  📊 DivulgaCandContas TSE
                </a>
                <a
                  href="https://rac.tse.jus.br/rac/#/autenticacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tse secondary"
                >
                  📋 Sistema RAC
                </a>
              </div>
              <p className="tse-info">
                Última atualização: <strong>01/09/2026 08:29</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Transparencia;