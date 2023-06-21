import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Sobre',
}

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center bg-palet-two-pri min-h-screen">
      <div className="bg-palet-two-sec p-2 xl:p-4 rounded-3xl mt-24 max-w-[1240px] mx-auto">
        <h2 className="text-xl xl:text-3xl font-bold mb-0 xl:mb-4 text-palet-two-qua text-center">Sobre Mim</h2>
        <div className="bg-palet-two-ter p-2 xl:p-4 rounded-2xl my-2 xl:my-4">
          <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4 ml-4 xl:ml-0">Resumo</h3>
          <div className="flex gap-8 justify-center">
            <div className="bg-palet-two-qua p-2 xl:p-4 text-justify flex flex-col justify-center rounded-xl">
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Sou uma pessoa bastante comunicativa, apaixonado por música e tecnologia, com uma personalidade inquieta,
                sempre em busca de soluções profissionais rápidas que mantenham uma qualidade satisfatória.
              </p>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Iniciei na Licenciatura em Química, onde pude desenvolver minha criatividade e habilidades sociais,
                esta experiência foi fundamental para minha organização pessoal e me ensinou a trabalhar junto a
                profissionais de outras áreas na construção de oficinas e atividades.
              </p>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Durante a graduação em Engenharia Química, aproveitei diversas oportunidades que a universidade me
                proporcionava, participando de pesquisas, aprendendo sobre diferentes linguagens de programação, estudando
                uma língua estrangeira, recebendo certificados de qualificação, onde o foco está em controlar e colaborar
                para garantir uma melhoria contínua.
              </p>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                No estágio, vivenciei o dia-a-dia em uma indústria, atuei tanto como ponte entre os clientes e a equipe
                de produção, quanto com a parte mais técnica.
              </p>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Durante o trabalho de conclusão de curso, utilizei minhas habilidades com programação junto dos
                conhecimentos específicos e desenvolvi um equipamento autônomo que permite o cultivo e a determinação da
                biomassa de microalgas, este trabalho recebeu elogios da banca e obteve nota máxima.
              </p>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Como Analista participei de um programa de pesquisa para entender melhor o mercado e captar novos
                clientes para uma empresa de polímeros. Esta experiência foi fundamental para desenvolver minha habilidade
                de comunicação e criatividade estratégica na hora de capturar informações relevantes para a pesquisa.
              </p>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Em minha experiência mais recente construímos um protótipo de aplicativo que utilizando APIs verifica os
                segurados da companhia, monta um Banco de Dados, permite notificações (push) e envia dados por NFC.
                Utilizamos as tecnologias mais atuais como React-Native, Firebase Next JS e algumas características de
                Metodologias Ágeis.
              </p>
            </div>
          </div>
        </div>
        <div id='work' className="bg-palet-two-ter p-2 xl:p-4 rounded-2xl my-2 xl:my-4">
          <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4 ml-4 xl:ml-0">Experiência Profissional</h3>
          <div className="flex gap-8 justify-center">
            <div className="bg-palet-two-qua p-2 xl:p-4 text-justify flex flex-col justify-center rounded-xl">
              <h4 className="text-base xl:text-xl font-bold px-4 py-1 text-palet-two-pri">
                Estagiário - IPE Saúde - nov 2022 - atual
              </h4>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Construimos um protótipo de aplicativo, que utilizando APIs verifica os segurados do IPE, monta um BD, permite notificações (push) e envia dados por NFC. Utilizamos as tecnologias mais atuais, como React-Native, Firebase, Next JS e características de Metodologias Ágeis.
              </p>
              <h4 className="text-base xl:text-xl font-bold px-4 py-1 text-palet-two-pri">
                Analista - MAXIQUIM - fev 2022 - jun 2022
              </h4>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Realizamos uma pesquisa de mercado no segmento de polímeros, conversando com mais de 150 empresas, sobre o processo de produção, seus fornecedores, matéria prima entre outros. Esta experiência aprimorou minha habilidade de comunicação e criatividade estratégica.              </p>
              <h4 className="text-base xl:text-xl font-bold px-4 py-1 text-palet-two-pri">
                Estagiário - LUFTECH SOLUÇÕES AMBIENTAIS - jan 2019 - dez 2019
              </h4>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                A partir de novas referências de resíduos sólidos e de saúde, atualizei as estimativas da geração de gases, poder calorífico dos resíduos, temperaturas de combustão e consumo de combustível. Fui responsável no projeto de uma estação compacta de efluentes domésticos para uma rede de hotéis e acompanhei a instalação de uma estação semelhante.
              </p>
              <h4 className="text-base xl:text-xl font-bold px-4 py-1 text-palet-two-pri">
                Bolsista de Iniciação Cientifica - UFRGS - jul 2014 - dez 2015
              </h4>
              <p className="text-sm sm:text-xl xl:text-xl p-4 text-palet-two-pri first-line-indent">
                Pesquisa sobre uma técnica alternativa para determinar o índice de acidez no biodiesel. O trabalho obteve o prêmio de destaque no XVII SIC da UFRGS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
