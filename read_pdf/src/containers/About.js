import React from 'react';
import Menu from '../components/Menu.js';
import { Button, Paper, Typography, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { paperStyle } from '../utils/utils';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GroupIcon from '@mui/icons-material/Group';
import leo from '../images/Leo.jpg';
import carlos from '../images/Carlos.jpeg';


function About() {
  return (
    <React.Fragment>
      <Menu />
      <Grid container sx={{height: '100%'}}>
        <Grid item xs={12}  justifyContent="start" display="flex">
          <Grid container justifyContent="center" alignItems="center">
            <Paper sx={{...paperStyle, width: "300px", height: "100%", position: "fixed", top: "7%", left: 0, maxHeight: "810px"}}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>
                    <OpenInNewIcon/>
                      Links
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="subtitle" gutterBottom>
                      Documentação Geral
                  </Typography>
                </Grid>
                <Grid container  justifyContent="center" alignItems="center">
                  <Grid item xs={12} rowSpacing={5}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button 
                        variant="outlined"
                        href="https://mui.com/material-ui/react-toggle-button/"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        Material-UI
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button 
                        variant="outlined"
                        href="https://reactjs.org/"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        React.js
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button 
                        variant="outlined"
                        href="https://www.djangoproject.com/"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        Django
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button
                        variant="outlined"
                        href="https://docs.github.com/pt"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        GitHub
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Typography variant="subtitle" gutterBottom>
                        Documentação do Projeto
                      </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button
                        variant="outlined"
                        href="https://github.com/API-Computabiliae"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        Código fonte
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button
                        variant="outlined"
                        href="https://docs.google.com/document/d/1Lyqq_MGiupqxcfHHTx_P5r0d4xHIVpHFVI9I2UD7mYE/edit"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        Documentação Word
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button
                        variant="outlined"
                        href="figma.com/file/urz2C7umqHr8YfX5obnyEY/Trabalho-de-CG?type=design&node-id=0-1&mode=design&t=9DoE4zoYpY72Tcf1-0"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        Figma
                      </Button>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button
                        variant="outlined"
                        href="https://trello.com/b/gMczIFYF/wolfia"
                        sx={{width: "100%", margin: "10px"}}
                      >
                        Trello
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper  sx={{...paperStyle, marginTop: "87px"}}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>
                      Introdução
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="body1" gutterBottom>
                    Bem-vindo ao nosso projeto inovador que une a potência do React no front-end e o robusto framework Django no back-end para criar uma plataforma única de interação com documentos PDF. Com o objetivo de simplificar a análise e edição de arquivos PDF, nossa aplicação permite o envio de documentos, os quais são processados pelo Django para abrir caixas de texto sobre o conteúdo original. Inspirados na versatilidade da API do ChatGPT, integramos a capacidade de sugerir texto, enriquecendo a experiência do usuário.

                    Este projeto nasceu da necessidade de tornar a manipulação de documentos PDF mais intuitiva e eficiente, eliminando a necessidade de softwares complexos e caros. Ao unir tecnologias modernas e poderosas, oferecemos uma solução acessível e fácil de usar, promovendo uma nova abordagem na interação com arquivos PDF.

                    Convidamos você a explorar cada funcionalidade e a experimentar a fluidez e a praticidade que nosso projeto proporciona. Através desta plataforma, vislumbramos um futuro onde a manipulação de documentos PDF se torna uma tarefa descomplicada e acessível a todos.
                  </Typography>
                </Grid>
                <br/><br/><br/><br/>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>
                      React.js e Material-UI
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="body1" gutterBottom>
                      A construção deste projeto foi conduzida com um foco aguçado na excelência técnica e na oferta de uma experiência de usuário excepcional. Para alcançar esse objetivo, elegemos o renomado framework Material-UI, uma biblioteca de componentes React que se destaca por sua robustez e estética moderna, em total harmonia com os princípios de design do Material.

                      Além do Material-UI, o React desempenhou um papel fundamental na arquitetura do nosso projeto. Com sua abordagem componentizada e reativa, o React proporcionou uma base sólida para a construção de uma interface dinâmica e interativa. Através da composição de componentes reutilizáveis, conseguimos manter um código organizado e fácil de dar manutenção, o que é essencial em um projeto de grande escala como este.

                      A escolha do React também se mostrou vital para a integração fluida entre o front-end e o back-end, permitindo a comunicação eficaz e em tempo real com a API Django. A renderização eficiente e a capacidade de atualizar apenas os componentes relevantes foram fatores cruciais para garantir uma experiência de usuário ágil e responsiva.

                      A documentação oficial do React foi uma fonte inestimável de orientação durante todo o ciclo de desenvolvimento. Seja para compreender os conceitos fundamentais ou para resolver desafios mais complexos, a documentação do React oferece um guia detalhado e acessível para desenvolvedores de todos os níveis de experiência.

                      O Material-UI e o React não são apenas ferramentas; são os pilares que sustentam nossa visão de simplificar a interação com documentos PDF. Eles encapsulam não apenas a expertise técnica, mas também um compromisso com a excelência na experiência do usuário. Com sua ajuda, estamos elevando o padrão para o futuro da manipulação de PDF, tornando-a acessível, intuitiva e altamente eficaz.
                  </Typography>
                </Grid>
                <br/><br/><br/><br/>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>
                      Django
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="body1" gutterBottom>
                    No âmbito do back-end, adotamos o poderoso framework Django, construído com a linguagem de programação Python. Essa escolha foi essencial para criar uma base sólida e escalável que pudesse lidar com a complexidade do processamento de documentos PDF.

                    O Django oferece uma estrutura robusta que facilita a criação e organização de aplicativos, fornecendo funcionalidades essenciais como gerenciamento de rotas, controle de acesso e manipulação de banco de dados. Além disso, sua arquitetura seguindo o padrão Model-View-Controller (MVC) facilita a separação de preocupações e a manutenção do código.

                    O uso de Python como linguagem principal do back-end foi uma decisão estratégica. A simplicidade, legibilidade e vasta coleção de bibliotecas disponíveis para Python tornaram a implementação de funcionalidades complexas, como a leitura e processamento de arquivos PDF, uma tarefa mais eficiente e intuitiva.

                    A integração entre o front-end e o back-end foi perfeitamente orquestrada pelo Django, que oferece uma API RESTful para comunicação eficaz entre os sistemas. As requisições HTTP são tratadas de maneira eficiente, garantindo uma interação suave entre o cliente e o servidor.

                    A documentação oficial do Django foi uma fonte inestimável de orientação, fornecendo guias detalhados sobre todos os aspectos do desenvolvimento com Django, desde configuração inicial até tópicos mais avançados, como otimização de desempenho e segurança.

                    O Django não é apenas um framework; é a espinha dorsal do nosso back-end, fornecendo as ferramentas necessárias para processar arquivos PDF de forma eficaz e confiável. Com ele, estamos construindo uma plataforma que redefine a interação com documentos PDF, oferecendo uma experiência intuitiva e poderosa.
                  </Typography>
                </Grid>
                <br/><br/><br/><br/>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>
                      GitHub
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="body1" gutterBottom>
                    Para assegurar a eficiência e colaboração no desenvolvimento deste projeto, integramos o GitHub como uma parte fundamental de nossa infraestrutura. O GitHub é uma plataforma de hospedagem de código que oferece uma gama completa de ferramentas para versionamento, colaboração e gerenciamento de projetos de software.

                    O uso de um sistema de controle de versão, como o Git, e sua integração com o GitHub, nos permite manter um histórico detalhado de todas as alterações no código. Isso facilita a identificação de alterações específicas, o rastreamento de problemas e a reversão de modificações, se necessário.

                    Além disso, o GitHub oferece recursos poderosos para colaboração em equipe. Por meio de solicitações de pull (pull requests), os desenvolvedores podem propor e discutir alterações de código de maneira estruturada e transparente. Comentários, revisões e testes automatizados ajudam a garantir a qualidade e a consistência do código antes da integração.

                    A organização de nosso repositório no GitHub segue boas práticas de desenvolvimento, com uma estrutura clara e intuitiva para facilitar a navegação e localização de arquivos e componentes específicos. Branches são utilizados para desenvolvimento paralelo e a criação de ambientes de testes antes da fusão no branch principal.

                    Além de servir como uma ferramenta vital para versionamento e colaboração, o GitHub também oferece funcionalidades de hospedagem para o front-end de nossa aplicação. Isso nos permite disponibilizar a plataforma de forma acessível e confiável.

                    Para maiores detalhes sobre as funcionalidades e boas práticas do GitHub, a documentação oficial é uma valiosa fonte de informações.

                    O GitHub não é apenas uma plataforma de hospedagem de código; é o centro nervoso de nossa operação de desenvolvimento, permitindo-nos manter o código sincronizado, organizado e acessível. Com sua ajuda, estamos construindo uma solução de ponta para a interação com documentos PDF.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper sx={{...paperStyle, width: "300px", height: "100%", position: "fixed", top: "487px", left: "89%", transform: "translate(-50%, -50%)",  maxHeight: "810px"}}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="h4" gutterBottom>
                    <GroupIcon/>
                      Developers
                  </Typography>
                </Grid>
                <Grid container justifyContent="start" alignItems="center">
                  <Avatar alt="Remy Sharp" src={leo} sx={{marginRight: 5}}/>
                  <Typography variant="subtitle" gutterBottom>
                      Leonardo de Alcantara
                  </Typography>
                </Grid>
                <Grid container justifyContent="start" alignItems="center" sx={{marginTop: "10px"}}>
                  <Avatar alt="Remy Sharp" src={leo} sx={{marginRight: 5}}/>
                  <Typography variant="subtitle" gutterBottom>
                      Athos Willian
                  </Typography>
                </Grid>
                <Grid container justifyContent="start" alignItems="center" sx={{marginTop: "10px"}}>
                  <Avatar alt="Remy Sharp" src={carlos} sx={{marginRight: 5}}/>
                  <Typography variant="subtitle" gutterBottom>
                      Carlos Lessa
                  </Typography>
                </Grid>
                <Grid container justifyContent="start" alignItems="center" sx={{marginTop: "10px"}}>
                  <Avatar alt="Remy Sharp" src={leo} sx={{marginRight: 5}}/>
                  <Typography variant="subtitle" gutterBottom>
                      Rayssa Paiva
                  </Typography>
                </Grid>
                <Grid container justifyContent="start" alignItems="center" sx={{marginTop: "10px"}}>
                  <Avatar alt="Remy Sharp" src={leo} sx={{marginRight: 5}}/>
                  <Typography variant="subtitle" gutterBottom>
                      Victor Emanuel
                  </Typography>
                </Grid>
                <Grid container justifyContent="start" alignItems="center" sx={{marginTop: "10px"}}>
                  <Avatar alt="Remy Sharp" src={leo} sx={{marginRight: 5}}/>
                  <Typography variant="subtitle" gutterBottom>
                      Thallys Xavier
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
        </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
