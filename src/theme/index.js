// Importa as fundações (cores, fontes, etc.)
import colors from './foundations/colors';
import fonts from './foundations/fonts';

// Importa os componentes (textos, cabeçalhos, containers, etc.)
import Text from './components/text';
import Heading from './components/heading';
import Container from './components/container';

// Cria o tema unificando as fundações e componentes
const theme = {
  colors,   // Adiciona as cores ao tema
  fonts,    // Adiciona as fontes ao tema
  components: {
    Text,   // Adiciona o estilo de texto ao tema
    Heading, // Adiciona o estilo dos títulos ao tema
    Container, // Adiciona o estilo dos containers ao tema
  },
};

// Exporta o tema como padrão
export default theme;
