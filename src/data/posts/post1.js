import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContent = styled(Box)(({ theme }) => ({
  '& h2': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  '& h3': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  '& li': {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  '& strong': {
    color: theme.palette.text.primary,
  },
  '& code': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[100],
    color: theme.palette.text.primary,
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.spacing(0.5),
    fontFamily: 'monospace',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows[2],
  },
}));

function PostContent() {
  return (
    <StyledContent>
      <Typography variant="h4" gutterBottom>
        Mi Configuración Actual: Un Setup Híbrido para Productividad y Ocio
      </Typography>

      <Typography variant="body1" paragraph>
        Después de años probando diferentes configuraciones, he llegado a un
        setup que combina lo mejor de ambos mundos: Windows para compatibilidad
        y gaming, y Linux para desarrollo y trabajo serio. Esta es mi
        configuración detallada.
      </Typography>

      <Box
        component="img"
        src="/img/blog/post1/general-setup.jpg"
        alt="Mi setup"
      />

      <Typography variant="h4" gutterBottom>
        Hardware: Base de Operaciones
      </Typography>

      <Typography variant="body1" paragraph>
        Mi equipo principal es un portátil con las siguientes especificaciones:
      </Typography>

      <ul>
        <li>
          <strong>Procesador:</strong> AMD Ryzen 5 3500U (4 núcleos, 8 hilos a
          3.7GHz) - Suficiente para mis necesidades de desarrollo y gaming
          casual.
        </li>
        <li>
          <strong>Almacenamiento:</strong>
          <ul>
            <li>256GB NVMe para sistemas operativos y aplicaciones críticas</li>
            <li>750GB SSD para datos, juegos y proyectos</li>
          </ul>
        </li>
        <li>
          <strong>Memoria RAM:</strong> 20GB DDR4 (4GB soldados + módulo de
          16GB) - para mejorar la experiencia de multitarea.
        </li>
        <li>
          <strong>Gráficos:</strong> Vega 8 integrada - Suficiente para juegos
          casuales y edición básica.
        </li>
      </ul>

      <Typography variant="h4" gutterBottom>
        Dual Boot: Windows 11 y Fedora 42 en Armonía
      </Typography>

      <Typography variant="body1" paragraph>
        Uso GRUB como gestor de arranque para seleccionar entre sistemas según
        necesidades:
      </Typography>

      <Box
        component="img"
        src="/img/blog/post1/grub-menu.jpg"
        alt="Menú GRUB con Windows y Fedora"
      />

      <Typography variant="h3" gutterBottom>
        Windows 11: Mi Estación de Juegos y Plan B
      </Typography>

      <Typography variant="body1" paragraph>
        Mantengo Windows instalado principalmente para:
      </Typography>

      <ul>
        <li>
          <strong>Gaming:</strong> Ciertos títulos simplemente funcionan mejor
          en Windows o no son compatibles con Linux (como los de Xbox Gamepass)
          <ul>
            <li>
              Steam con Proton ayuda, pero no es perfecto para todos los juegos
            </li>
            <li>Epic Games Store para los juegos gratuitos semanales</li>
          </ul>
        </li>
        <li>
          <strong>Compatibilidad:</strong> Cuando necesito software específico
          como:
          <ul>
            <li>Microsoft Office (especialmente para documentos complejos)</li>
            <li>
              Algunas herramientas de trabajo que requieren especificamente
              Windows
            </li>
          </ul>
        </li>
        <li>
          <strong>Herramientas Esenciales:</strong>
          <ul>
            <li>
              <strong>VS Code:</strong> Aunque prefiero Linux, a veces necesito
              editar rápido en Windows
            </li>
            <li>
              <strong>Rufus:</strong> Imprescindible para crear USBs booteables
            </li>
            <li>
              <strong>Discord:</strong> Para comunicación con equipos gaming y
              desarrollo
            </li>
            <li>
              <strong>Navegadores:</strong> Brave como principal y Edge para
              servicios Microsoft
            </li>
          </ul>
        </li>
      </ul>

      <Box
        component="img"
        src="/img/blog/post1/windows-desktop.jpg"
        alt="Escritorio de Windows 11"
      />

      <Typography variant="h3" gutterBottom>
        Fedora 42: Mi Entorno de Trabajo
      </Typography>

      <Typography variant="body1" paragraph>
        Fedora Workstation se ha convertido en mi sistema diario por su
        equilibrio entre estabilidad y actualizaciones recientes:
      </Typography>

      <Box
        component="img"
        src="/img/blog/post1/fedora-desktop.jpg"
        alt="Escritorio de Fedora con XFCE"
      />

      <Typography variant="body1" paragraph>
        <strong>Navegación Web:</strong>
      </Typography>
      <ul>
        <li>
          <strong>Firefox:</strong> Configurado con contenedores para separar
          identidades y Tree Style Tab para gestión vertical de pestañas y tema
          personalizado adaptado a mi estilo..
        </li>
        <li>
          <strong>Google Chrome:</strong> Principalmente para desarrollo web y
          testing de compatibilidad.
        </li>
        <li>
          <strong>Brave:</strong> Para navegación más privada cuando necesario.
        </li>
      </ul>

      <Typography variant="body1" paragraph>
        <strong>Desarrollo:</strong>
      </Typography>
      <ul>
        <li>
          <strong>VS Code:</strong> Con extensiones como Remote - Containers,
          GitLens y Docker.
        </li>
        <li>
          <strong>Cursor:</strong> Un IDE moderno basado en Electron pero
          sorprendentemente bueno para proyectos grandes.
        </li>
        <li>
          <strong>Docker + oxker:</strong> Para gestión de contenedores. Oxker
          es una TUI que hace la gestión más cómoda.
        </li>
        <li>
          <strong>Kitty Terminal:</strong> Con Zsh, Oh My Zsh y plugins para
          autocompletado y sintaxis.
        </li>
        <li>
          <strong>Obsidian:</strong> Para notas y documentación en markdown con
          sincronización via Syncthing.
        </li>
      </ul>

      <Box
        component="img"
        src="/img/blog/post1/dev-setup.jpg"
        alt="Entorno de desarrollo"
      />

      <Typography variant="body1" paragraph>
        <strong>Multimedia y Creatividad:</strong>
      </Typography>
      <ul>
        <li>
          <strong>Spotify (nativo y spotify-player):</strong> La aplicación
          oficial para descubrimiento y spotify-player (TUI) para control
          rápido.
        </li>
        <li>
          <strong>GIMP:</strong> Para edición de imágenes cuando no necesito
          Photoshop.
        </li>
        <li>
          <strong>Flameshot:</strong> La mejor herramienta de captura de
          pantalla con anotaciones.
        </li>
        <li>
          <strong>OBS Studio:</strong> Para grabación de pantalla cuando es
          necesario.
        </li>
      </ul>

      <Typography variant="body1" paragraph>
        <strong>Productividad:</strong>
      </Typography>
      <ul>
        <li>
          <strong>LibreOffice:</strong> Para documentos cuando no necesito
          compatibilidad perfecta con Microsoft Office.
        </li>
        <li>
          <strong>Syncthing:</strong> Mantiene sincronizados mis archivos
          importantes entre dispositivos.
        </li>
        <li>
          <strong>KeepassXC:</strong> Gestor de contraseñas offline y seguro.
        </li>
      </ul>

      <Typography variant="h4" gutterBottom>
        XFCE4: Mi Entorno de Escritorio Perfecto
      </Typography>

      <Typography variant="body1" paragraph>
        Tras probar GNOME, KDE y otros, siempre vuelvo a XFCE por estas razones:
      </Typography>

      <Box
        component="img"
        src="/img/blog/post1/xfce-desktop.jpg"
        alt="XFCE personalizado"
      />

      <ol>
        <li>
          <strong>Compatibilidad Impecable:</strong> Funciona perfectamente con
          controladores propietarios y open source.
        </li>
        <li>
          <strong>Rendimiento Excepcional:</strong> Consume menos de 600MB RAM
          en inicio, dejando recursos para mis aplicaciones.
        </li>
        <li>
          <strong>Personalización Total:</strong> Desde paneles completamente
          configurables hasta atajos de teclado para cada acción.
        </li>
        <li>
          <strong>Estabilidad Legendaria:</strong> Rara vez se cierra
          inesperadamente, incluso con semanas de uptime.
        </li>
        <li>
          <strong>Filosofía UNIX:</strong> Herramientas pequeñas que hacen una
          cosa bien, integradas en un entorno coherente.
        </li>
      </ol>

      <Typography variant="body1" paragraph>
        Mi configuración específica incluye:
      </Typography>
      <ul>
        <li>Picom para composición (con sombras y transparencias sutiles)</li>
        <li>Plank como dock ligero</li>
        <li>
          Tema Orchis Teal modificado con iconos Tela Circle (en esta otra
          publicación detallo mi personalización LINK AQUI
        </li>
        <li>Atajos personalizados para lanzar aplicaciones frecuentes</li>
      </ul>

      <Typography variant="h4" gutterBottom>
        Terminal: Mi Zona de Confort
      </Typography>

      <Typography variant="body1" paragraph>
        Como amante de la terminal, estas son mis herramientas TUI favoritas:
      </Typography>

      <ul>
        <li>
          <strong>nm-tui:</strong> Interfaz intuitiva para gestionar conexiones
          de red sin GUI.
        </li>
        <li>
          <strong>spotify-player:</strong> Controla Spotify desde terminal con
          búsqueda, playlists y más.
        </li>
        <li>
          <strong>oxker:</strong> Monitor de contenedores Docker con interfaz
          amigable.
        </li>
        <li>
          <strong>bpytop:</strong> Monitor de recursos con gráficos atractivos y
          personalizables.
        </li>
        <li>
          <strong>ranger:</strong> Administrador de archivos con previews y
          atajos vim-like.
        </li>
        <li>
          <strong>w3m/lynx:</strong> Navegadores web en terminal para consultas
          rápidas.
        </li>
        <li>
          <strong>neomutt:</strong> Cliente de email para cuando necesito
          concentrarme sin distracciones.
        </li>
      </ul>

      <Typography variant="h4" gutterBottom>
        Remate:
      </Typography>

      <Typography variant="body1" paragraph>
        Con casi 9 años de experiencia con Linux y después de un largo recorrido
        probando entornos, distros y flujos de trabajo, he llegado a una
        conclusión clara: las mejores herramientas no son necesariamente las más
        nuevas o populares, sino aquellas con las que realmente estamos cómodos.
        La productividad nace de la familiaridad, la eficiencia y la confianza
        en nuestro entorno. No se trata de seguir tendencias, sino de construir
        un setup que se adapte a nuestras necesidades reales. Al final, dominar
        tu espacio de trabajo vale más que cualquier novedad tecnológica. La
        comodidad es poder, y ese poder se nota.
      </Typography>
    </StyledContent>
  );
}

const post = {
  slug: 'my-steup',
  title: 'Mi setup: Hardware, Software y herramientas de uso diario',
  excerpt:
    'Un recorrido completo por mi setup híbrido Windows/Fedora, herramientas de desarrollo y entorno XFCE personalizado.',
  content: PostContent,
  featured: true,
  image: '/img/blog/my-setup.jpg',
  date: new Date().toISOString().split('T')[0],
  readTime: '8 min',
  tags: ['Linux', 'Windows', 'Hardware', 'Productividad', 'Fedora', 'XFCE'],
};

export default post;
