const db = {
    uf1: [
        { q: "¿Qué fase define la estructura ósea sin diseño visual?", a: ["Mockup", "Wireframe", "Prototipo"], c: 1 },
        { q: "¿Qué significa IPO?", a: ["Interfaz de Procesos", "Interacción Persona-Ordenador", "Input/Output"], c: 1 },
        { q: "¿Técnica para agrupar temas y definir menús?", a: ["Card Sorting", "A/B Test", "Focus Group"], c: 0 },
        { q: "¿Qué metadato controla la escala en móviles?", a: ["Charset", "Viewport", "Description"], c: 1 },
        { q: "El diseño centrado en el usuario es un proceso...", a: ["Lineal", "Iterativo", "Único"], c: 1 },
        { q: "¿Qué es un Mockup?", a: ["Baja fidelidad", "Diseño artístico estático", "Código"], c: 1 },
        { q: "La usabilidad mide...", a: ["Belleza", "Facilidad y eficiencia de uso", "Velocidad"], c: 1 },
        { q: "¿Tecla para herramientas de desarrollador?", a: ["F1", "F5", "F12"], c: 2 },
        { q: "¿Qué es el DEF?", a: ["Diseño Estético", "Doc. Especificaciones Funcionales", "Dato Externo"], c: 1 },
        { q: "Etiqueta HTML5 para navegación:", a: ["<header>", "<nav>", "<section>"], c: 1 },
        { q: "W3C es el organismo que...", a: ["Vende dominios", "Dicta estándares web", "Navegadores"], c: 1 },
        { q: "La jerarquía visual sirve para...", a: ["Colorear", "Guiar la mirada del usuario", "SEO"], c: 1 },
        { q: "Etiqueta para contenido principal:", a: ["<section>", "<main>", "<article>"], c: 1 },
        { q: "¿Qué es la accesibilidad web?", a: ["Rapidez", "Web para todos", "Seguridad"], c: 1 },
        { q: "Un prototipo funcional está...", a: ["Dibujado", "Programado", "Impreso"], c: 1 },
        { q: "¿Para qué sirve un mapa web?", a: ["GPS", "Estructura jerárquica", "Estilo"], c: 1 },
        { q: "¿Qué es un 'persona' en UX?", a: ["Actor", "Perfil ficticio de usuario", "Programador"], c: 1 },
        { q: "Accesibilidad AAA es...", a: ["Básica", "Máximo rigor", "Inexistente"], c: 1 },
        { q: "Etiqueta para contenido independiente:", a: ["<aside>", "<section>", "<article>"], c: 2 },
        { q: "Etiqueta para imagen y pie de foto:", a: ["<figure>", "<img>", "<div>"], c: 0 },
        { q: "Etiqueta para barra lateral:", a: ["<aside>", "<nav>", "<sidebar>"], c: 0 },
        { q: "Atributo de img para invidentes:", a: ["title", "alt", "desc"], c: 1 },
        { q: "HTML5 introdujo etiquetas...", a: ["Artísticas", "Semánticas", "Binarias"], c: 1 },
        { q: "Diseño líquido usa...", a: ["Píxeles", "Porcentajes", "Centímetros"], c: 1 },
        { q: "Título de la pestaña:", a: ["<head>", "<title>", "<h1>"], c: 1 },
        { q: "El 'fold' es...", a: ["El pie", "Lo que se ve sin scroll", "El menú"], c: 1 },
        { q: "UX significa...", a: ["User Experience", "User Example", "Unit X"], c: 0 },
        { q: "UI significa...", a: ["User Interface", "User Internal", "Unit Image"], c: 0 },
        { q: "Test de guerrilla es...", a: ["Virus", "Pruebas rápidas con personas", "Ataque"], c: 1 },
        { q: "Semántica HTML sirve para...", a: ["Colores", "Significado y accesibilidad", "Velocidad"], c: 1 }
    ],
    uf2: [
        { q: "Selector de ID:", a: [".id", "#id", "id:"], c: 1 },
        { q: "Selector de clase:", a: [".clase", "#clase", "clase:"], c: 0 },
        { q: "Espacio interno caja:", a: ["Margin", "Padding", "Border"], c: 1 },
        { q: "Espacio externo caja:", a: ["Margin", "Padding", "Border"], c: 0 },
        { q: "box-sizing: border-box incluye en width:", a: ["Solo contenido", "Contenido+Padding+Borde", "Margen"], c: 1 },
        { q: "Display para cajas flexibles:", a: ["block", "flex", "grid"], c: 1 },
        { q: "Display para rejillas 2D:", a: ["flex", "inline-block", "grid"], c: 2 },
        { q: "Position respecto a la ventana:", a: ["absolute", "relative", "fixed"], c: 2 },
        { q: "Eje principal Flexbox por defecto:", a: ["Vertical", "Horizontal", "Diagonal"], c: 1 },
        { q: "Alinear eje principal Flexbox:", a: ["align-items", "justify-content", "gap"], c: 1 },
        { q: "Alinear eje secundario Flexbox:", a: ["justify-content", "align-items", "align-content"], c: 1 },
        { q: "Unidad relativa a fuente raíz (html):", a: ["rem", "em", "px"], c: 0 },
        { q: "Unidad relativa a fuente padre:", a: ["rem", "em", "px"], c: 1 },
        { q: "Ancho ventana completo:", a: ["100vw", "100vh", "100%"], c: 0 },
        { q: "Selector hijo directo:", a: ["espacio", ">", "+"], c: 1 },
        { q: "Selector hermano adyacente:", a: ["~", "+", ">"], c: 1 },
        { q: "Z-index controla:", a: ["Ancho", "Capas/Profundidad", "Opacidad"], c: 1 },
        { q: "Esquinas redondeadas:", a: ["border-circle", "border-radius", "round"], c: 1 },
        { q: "1fr en Grid es:", a: ["1px", "Fracción espacio disponible", "Frame"], c: 1 },
        { q: "Especificidad ID vs Clase:", a: ["ID gana", "Clase gana", "Iguales"], c: 0 },
        { q: "Color blanco hex:", a: ["#000", "#FFF", "#CCC"], c: 1 },
        { q: "Alpha en RGBA es:", a: ["Grosor", "Transparencia", "Brillo"], c: 1 },
        { q: "Position sticky:", a: ["Pega al scroll", "Oculta", "Centra"], c: 0 },
        { q: "Hueco en Grid:", a: ["gap", "space", "padding"], c: 0 },
        { q: "Texto en negrita:", a: ["font-weight", "text-bold", "font-style"], c: 0 },
        { q: "Selector universal:", a: ["*", "all", "body"], c: 0 },
        { q: "Font-style: italic es:", a: ["Negrita", "Cursiva", "Subrayado"], c: 1 },
        { q: "Quitar subrayado enlaces:", a: ["text-decoration: none", "no-border", "text-style: normal"], c: 0 },
        { q: "List-style: none:", a: ["Quita puntos lista", "Quita bordes", "Quita color"], c: 0 },
        { q: "Overflow: hidden:", a: ["Esconde sobrante", "Scroll", "Agranda"], c: 0 }
    ],
    uf3: [
        { q: "Variables SASS:", a: ["@", "$", "#"], c: 1 },
        { q: "Variables LESS:", a: ["@", "$", "&"], c: 0 },
        { q: "Mixins sirven para:", a: ["Operar", "Reutilizar código", "Variables"], c: 1 },
        { q: "Ampersand (&) es:", a: ["Ref. Padre", "Ref. Variable", "Mixin"], c: 0 },
        { q: "Incluir mixin SASS:", a: ["@extend", "@include", "@mixin"], c: 1 },
        { q: "Heredar estilos SASS:", a: ["@extend", "@include", "@use"], c: 0 },
        { q: "Media Query sirve para:", a: ["JS", "Adaptar dispositivo", "Comando"], c: 1 },
        { q: "Sombra caja:", a: ["text-shadow", "box-shadow", "shadow"], c: 1 },
        { q: "Girar elemento:", a: ["rotate()", "scale()", "skew()"], c: 0 },
        { q: "Transición suave:", a: ["animation", "transition", "transform"], c: 1 },
        { q: "Gradiente lineal:", a: ["linear-gradient", "radial-gradient", "conic"], c: 0 },
        { q: "SASS Parciales:", a: ["#", "_ (guion bajo)", "$"], c: 1 },
        { q: "@import une archivos:", a: ["Variables", "Archivos SASS/CSS", "Animación"], c: 1 },
        { q: "Media print:", a: ["Pantalla", "Impresión", "Todo"], c: 1 },
        { q: "Opacity va de:", a: ["0 a 100", "0 a 1", "1 a 10"], c: 1 },
        { q: "Nesting es:", a: ["Anidación", "Limpieza", "Framework"], c: 0 },
        { q: "Diseño elástico:", a: ["px", "em / rem", "%"], c: 1 },
        { q: "Filtro desenfoque:", a: ["blur()", "sepia()", "gray()"], c: 0 },
        { q: "Bucle SASS:", a: ["@while", "@for", "Ambas"], c: 2 },
        { q: "Condicional SASS:", a: ["@if", "@case", "@switch"], c: 0 },
        { q: "calc() permite:", a: ["Mezclar unidades", "Solo px", "Solo %"], c: 0 },
        { q: "Preprocesadores necesitan:", a: ["Navegador", "Compilar a CSS", "JS"], c: 1 },
        { q: "Breakpoint:", a: ["Error", "Punto cambio diseño", "Link"], c: 1 },
        { q: "Mobile First:", a: ["Móvil primero", "Solo móvil", "Apps"], c: 0 },
        { q: "Extensión SASS:", a: [".css", ".scss", ".js"], c: 1 },
        { q: "Transform scale(2):", a: ["Doble", "Mitad", "Gira"], c: 0 },
        { q: "Transition duration:", a: ["Retraso", "Tiempo ejecución", "Curva"], c: 1 },
        { q: "Color semitransparente:", a: ["hex", "rgba", "rgb"], c: 1 },
        { q: "vh es relativo a:", a: ["Ancho ventana", "Alto ventana", "Fuente"], c: 1 },
        { q: "Compilar SASS significa:", a: ["Pasar a JS", "Pasar a CSS", "Pasar a HTML"], c: 1 }
    ],
    uf4: [
        { q: "Columnas Bootstrap:", a: ["10", "12", "16"], c: 1 },
        { q: "Contenedor fijo centrado:", a: [".container", ".container-fluid", ".row"], c: 0 },
        { q: "Contenedor 100%:", a: [".container", ".container-fluid", ".box"], c: 1 },
        { q: "Clase fila:", a: [".col", ".row", ".line"], c: 1 },
        { q: "Columna mitad:", a: [".col-6", ".col-half", ".row-6"], c: 0 },
        { q: "Breakpoint md:", a: [">=576px", ">=768px", ">=992px"], c: 1 },
        { q: "Breakpoint lg:", a: [">=768px", ">=992px", ">=1200px"], c: 1 },
        { q: "Botón azul primario:", a: [".btn-blue", ".btn-primary", ".btn-main"], c: 1 },
        { q: "Alerta roja:", a: [".alert-danger", ".alert-error", ".red"], c: 0 },
        { q: "Margen superior 3:", a: [".p-3", ".mt-3", ".ms-3"], c: 1 },
        { q: "Padding interno 2:", a: [".m-2", ".p-2", ".pad-2"], c: 1 },
        { q: "Centrar texto:", a: [".text-center", ".align-center", ".justify"], c: 0 },
        { q: "Imagen responsiva:", a: [".img-fluid", ".img-responsive", ".fit"], c: 0 },
        { q: "Ocultar en XS:", a: [".d-none", ".d-sm-none", ".hidden"], c: 0 },
        { q: "Activar Flexbox:", a: [".flex", ".d-flex", ".display-flex"], c: 1 },
        { q: "CDN:", a: ["Descarga", "Link externo", "Código"], c: 1 },
        { q: "Ventana emergente:", a: ["Carousel", "Modal", "Navbar"], c: 1 },
        { q: "Carrusel imágenes:", a: ["Carousel", "Modal", "Slide"], c: 0 },
        { q: "Navbar:", a: ["Navegación", "Tablas", "Tarjetas"], c: 0 },
        { q: "Tabla cebra:", a: [".table-striped", ".table-zebra", ".dark"], c: 0 },
        { q: "Offset md 2:", a: ["1 pos.", "2 posiciones", "3 pos."], c: 1 },
        { q: "g-0 quita:", a: ["Borde", "Gutters (espacio)", "Fondo"], c: 1 },
        { q: "Badge:", a: ["Botón", "Insignia", "Fondo"], c: 1 },
        { q: "Spinner carga:", a: [".loading", ".spinner-border", ".circle"], c: 1 },
        { q: "Formularios:", a: [".input", ".form-control", ".form-input"], c: 1 },
        { q: "Bootstrap 5 no usa:", a: ["CSS", "jQuery", "HTML"], c: 1 },
        { q: "text-white:", a: ["Gris", "Blanco", "Negro"], c: 1 },
        { q: "bg-dark:", a: ["Azul", "Oscuro", "Gris"], c: 1 },
        { q: "Alinear flex centro:", a: [".justify-content-center", ".center", ".align"], c: 0 },
        { q: "Tarjetas:", a: [".card", ".box", ".panel"], c: 0 }
    ],
    uf5: [
        { q: "Imagen vectorial:", a: ["JPG", "PNG", "SVG"], c: 2 },
        { q: "Imagen píxeles:", a: ["JPG", "SVG", "AI"], c: 0 },
        { q: "HTML5 vídeo:", a: ["<movie>", "<video>", "<media>"], c: 1 },
        { q: "HTML5 audio:", a: ["<sound>", "<audio>", "<mp3>"], c: 1 },
        { q: "Controles play/pausa:", a: ["buttons", "controls", "play"], c: 1 },
        { q: "Vídeo sin sonido:", a: ["silent", "no-audio", "muted"], c: 2 },
        { q: "Vídeo infinito:", a: ["repeat", "loop", "infinite"], c: 1 },
        { q: "Autoplay:", a: ["Empezar solo", "Pausar", "Bajar volumen"], c: 0 },
        { q: "Derechos autor:", a: ["Creative Commons", "Copyright", "Copyleft"], c: 1 },
        { q: "Licencia citar:", a: ["Copyright", "Creative Commons", "Patente"], c: 1 },
        { q: "PNG tiene:", a: ["Animación", "Transparencia", "Vectores"], c: 1 },
        { q: "JPG compresión:", a: ["Sin pérdida", "Con pérdida", "No"], c: 1 },
        { q: "Software vectorial:", a: ["Photoshop", "Illustrator", "Word"], c: 1 },
        { q: "Optimizar:", a: ["Agrandar", "Bajar peso sin perder calidad", "Color"], c: 1 },
        { q: "PPI resolución:", a: ["Velocidad", "Resolución", "Transparencia"], c: 1 },
        { q: "Fotogramas animación:", a: ["@animation", "@keyframes", "@frames"], c: 1 },
        { q: "Repetición animación:", a: ["repeat", "iteration-count", "loop"], c: 1 },
        { q: "Formato vídeo eficiente:", a: ["AVI", "WebM", "WMV"], c: 1 },
        { q: "Poster vídeo:", a: ["Publicidad", "Imagen previa", "Título"], c: 1 },
        { q: "Software píxeles:", a: ["Photoshop", "Illustrator", "Excel"], c: 0 },
        { q: "SVG es código:", a: ["Binario", "XML", "JSON"], c: 1 },
        { q: "GIF para:", a: ["Fotos", "Animaciones simples", "Vectores"], c: 1 },
        { q: "Resolución web antigua:", a: ["72 ppi", "300 ppi", "1200"], c: 0 },
        { q: "Bitrate audio/video:", a: ["Transparencia", "Calidad", "Resolución"], c: 1 },
        { q: "Type MIME:", a: ["Nombre", "Tipo formato", "Tamaño"], c: 1 },
        { q: "Canvas sirve para:", a: ["Dibujar por JS", "Vectores", "Audio"], c: 1 },
        { q: "Alternate:", a: ["Vaya y vuelva", "Siempre igual", "Para"], c: 0 },
        { q: "Forwards:", a: ["Vuelve inicio", "Se queda final", "Borra"], c: 1 },
        { q: "WebP es de:", a: ["Google", "Apple", "Microsoft"], c: 0 },
        { q: "Relación aspecto:", a: ["Ancho/Alto", "Peso/Calidad", "Color"], c: 0 }
    ],
    uf6: [
        { q: "Evento clic:", a: ["onhover", "onclick", "onpress"], c: 1 },
        { q: "Evento pasar ratón:", a: ["onclick", "onmouseover", "onkeydown"], c: 1 },
        { q: "Evento soltar tecla:", a: ["onkeydown", "onkeyup", "onkeypress"], c: 1 },
        { q: "Evento submit:", a: ["onclick", "onsubmit", "onchange"], c: 1 },
        { q: "Select por ID:", a: ["getElementById", "querySelector", "Ambas"], c: 2 },
        { q: "Select primero CSS:", a: ["querySelector", "getElement", "select"], c: 0 },
        { q: "Añadir clase JS:", a: ["classList.add()", "addClass()", "style"], c: 0 },
        { q: "Color texto JS:", a: ["color", "style.color", "css"], c: 1 },
        { q: "HTML interno:", a: ["innerText", "innerHTML", "content"], c: 1 },
        { q: "addEventListener:", a: ["Escuchador eventos", "Borra eventos", "Estilo"], c: 0 },
        { q: "DOM es:", a: ["Servidor", "Árbol documento", "Estilo"], c: 1 },
        { q: "setTimeout:", a: ["Repetir", "Retraso 1 vez", "Parar"], c: 1 },
        { q: "setInterval:", a: ["Retraso 1 vez", "Repetir cada X", "Loop"], c: 1 },
        { q: "onchange:", a: ["Cambio valor input", "Clic", "Foco"], c: 0 },
        { q: "onfocus:", a: ["Pierde foco", "Gana foco", "Activa"], c: 1 },
        { q: "preventDefault():", a: ["Sigue acción", "Evita acción por defecto", "Para"], c: 1 },
        { q: "textContent:", a: ["HTML", "Solo texto", "Valor"], c: 1 },
        { q: "event.target:", a: ["Quién disparó", "Id evento", "Fuente"], c: 0 },
        { q: "onload:", a: ["Carga página", "Ready", "Start"], c: 0 },
        { q: "createElement():", a: ["Nuevo elemento", "Busca elemento", "Borra"], c: 0 },
        { q: "appendChild():", a: ["Inserta al final", "Borra hijo", "Busca"], c: 0 },
        { q: "removeEventListener:", a: ["Quita escuchador", "Borra", "Off"], c: 0 },
        { q: "classList.contains():", a: ["Sabe si tiene clase", "Borra clase", "Añade"], c: 0 },
        { q: "remove():", a: ["Elimina del DOM", "Borra estilo", "Pausa"], c: 0 },
        { q: "animation-play-state:", a: ["Pausa/Reanuda", "Velocidad", "Nombre"], c: 0 },
        { q: "onresize:", a: ["Scroll", "Redimensionar ventana", "Cargar"], c: 1 },
        { q: "transform-origin:", a: ["Punto anclaje", "Tamaño", "Color"], c: 0 },
        { q: "Pseudoclases:", a: [":hover, :focus", "p, div", "id"], c: 0 },
        { q: "onblur:", a: ["Gana foco", "Pierde foco", "Fuera"], c: 1 },
        { q: "dataset:", a: ["Atributos data-", "Datos SQL", "Variables"], c: 0 }
    ],
    uf7: [
        { q: "WCAG:", a: ["Guías accesibilidad", "Centro web", "Mundo"], c: 0 },
        { q: "Nivel A:", a: ["Obligatorio/Básico", "Opcional", "Máximo"], c: 0 },
        { q: "Nivel AA:", a: ["Deseable", "Estándar legal", "Imposible"], c: 1 },
        { q: "Nivel AAA:", a: ["Básico", "Muy estricto", "Normal"], c: 1 },
        { q: "Perceptible:", a: ["Ver/Oír", "Tocar", "Cargar"], c: 0 },
        { q: "Operable:", a: ["Navegar teclado", "Entender", "Diseñar"], c: 0 },
        { q: "Comprensible:", a: ["Fácil entender", "Color", "Código"], c: 0 },
        { q: "Robusto:", a: ["Compatible futuro", "Fuerte", "Bonito"], c: 0 },
        { q: "ARIA mejora:", a: ["Velocidad", "Accesibilidad lectores", "Color"], c: 1 },
        { q: "Test A/B:", a: ["Errores", "Comparar 2 versiones", "Limpiar"], c: 1 },
        { q: "PageSpeed Insights:", a: ["Rendimiento", "SEO", "Color"], c: 0 },
        { q: "Lighthouse:", a: ["Auditoría calidad", "Código", "Diseño"], c: 0 },
        { q: "Mapa calor:", a: ["Zonas clic/mirada", "Clima", "Link"], c: 0 },
        { q: "Heurística Nielsen:", a: ["Jobs", "Nielsen", "Gates"], c: 1 },
        { q: "Google Analytics:", a: ["Tráfico/Comportamiento", "Código", "Accesibilidad"], c: 0 },
        { q: "Core Web Vitals:", a: ["Estabilidad/Carga", "Belleza", "SEO"], c: 0 },
        { q: "aria-label:", a: ["Etiqueta lectores", "Estilo", "SEO"], c: 0 },
        { q: "aria-hidden:", a: ["Oculta lectores", "Borra", "Muestra"], c: 0 },
        { q: "Contraste AA:", a: ["2:1", "4.5:1", "10:1"], c: 1 },
        { q: "Lector pantalla:", a: ["Software ciegos", "Monitor", "Lupa"], c: 0 },
        { q: "Google Optimize:", a: ["Test A/B", "SEO", "Mail"], c: 0 },
        { q: "Conversión:", a: ["Cumplir objetivo", "Dinero", "Visita"], c: 0 },
        { q: "Punto verificación:", a: ["Check accesibilidad", "Error", "Link"], c: 0 },
        { q: "WCAG 2.1:", a: ["Actual recomendada", "Antigua", "Beta"], c: 0 },
        { q: "ARIA roles:", a: ["Semántica lectores", "Colores", "Links"], c: 0 },
        { q: "Tabulador sirve:", a: ["Navegar teclado", "Borrar", "Salir"], c: 0 },
        { q: "Parpadeo excesivo:", a: ["Peligroso epilepsia", "Accesible", "Bonito"], c: 0 },
        { q: "Conformidad:", a: ["Auditoría final", "Inicio", "Idea"], c: 0 },
        { q: "WAI-ARIA:", a: ["Web Accessibility", "Web Art", "World"], c: 0 },
        { q: "Usabilidad:", a: ["Eficiencia usuario", "Servidor", "Código"], c: 0 }
    ]
};

let preguntasActuales = [];
let aciertos = 0;

const menuPrincipal = document.getElementById('menu-principal');
const zonaTest = document.getElementById('zona-test');
const lista = document.getElementById('preguntas-lista');
const titulo = document.getElementById('titulo-test');
const divResultado = document.getElementById('resultado');

/**
 * Inicia el modo de test seleccionado.
 */
function iniciarTest(modo) {
    menuPrincipal.style.display = 'none';
    zonaTest.style.display = 'block';
    lista.innerHTML = '';
    divResultado.innerText = '';
    aciertos = 0;

    if (modo === 'mix') {
        titulo.innerText = "Examen Mix (UF1 - UF7)";
        preguntasActuales = generarExamenMix();
    } else {
        titulo.innerText = "Entrenamiento: " + modo.toUpperCase();
        preguntasActuales = [...db[modo]].sort(() => 0.5 - Math.random());
    }

    renderizarPreguntas();
    window.scrollTo(0, 0);
}

/**
 * Genera el mix de preguntas para el examen final.
 */
function generarExamenMix() {
    let mix = [];
    const sacar = (uf, n) => [...db[uf]].sort(() => 0.5 - Math.random()).slice(0, n);
    mix.push(...sacar('uf1', 5), ...sacar('uf2', 5), ...sacar('uf3', 5), ...sacar('uf4', 5), ...sacar('uf6', 5), ...sacar('uf5', 2), ...sacar('uf7', 3));
    return mix;
}

/**
 * Baraja aleatoriamente los elementos de un array (Algoritmo Fisher-Yates).
 */
function barajar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Pinta las preguntas en el HTML con opciones en posiciones aleatorias.
 */
function renderizarPreguntas() {
    preguntasActuales.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = 'pregunta';
        div.innerHTML = `
            <p>${i + 1}. ${p.q}</p>
            <div class="opciones" id="opts-${i}"></div>
            <span id="feedback-${i}" class="feedback-pequeno"></span>
        `;
        lista.appendChild(div);

        const containerOpts = document.getElementById(`opts-${i}`);
        
        // Creamos una estructura para rastrear cuál es la correcta después de mezclar
        let opcionesMezcladas = p.a.map((texto, index) => ({
            texto: texto,
            esCorrecta: index === p.c
        }));

        // Mezclamos las opciones (A, B, C rotan)
        barajar(opcionesMezcladas);

        opcionesMezcladas.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'opcion';
            btn.innerText = opt.texto;
            btn.onclick = () => validar(btn, i, opt.esCorrecta, containerOpts);
            containerOpts.appendChild(btn);
        });
    });
}



/**
 * Valida la respuesta seleccionada y da feedback visual pequeño.
 */
function validar(btn, pIdx, esCorrecta, container) {
    const opciones = container.children;
    const feedback = document.getElementById(`feedback-${pIdx}`);
    
    // Si ya se ha respondido a esta pregunta, no hacer nada
    if (opciones[0].disabled) return;
    
    // Deshabilitar todos los botones de esta pregunta
    for (let b of opciones) b.disabled = true;

    if (esCorrecta) {
        btn.classList.add('correcta');
        feedback.innerText = "✓ Correcto";
        feedback.style.color = "#28a745";
        aciertos++;
    } else {
        btn.classList.add('incorrecta');
        feedback.innerText = "✗ Incorrecto";
        feedback.style.color = "#dc3545";
        
        // Buscar y marcar la correcta entre los botones para que el usuario aprenda
        const preguntaOriginal = preguntasActuales[pIdx];
        const textoCorrecto = preguntaOriginal.a[preguntaOriginal.c];
        
        Array.from(opciones).forEach(b => {
            if (b.innerText === textoCorrecto) b.classList.add('correcta');
        });
    }
}

/**
 * Calcula la nota final sobre 10 y muestra el resultado.
 */
document.getElementById('btn-nota').onclick = () => {
    const notaFinal = (aciertos / preguntasActuales.length) * 10;
    let frase = "";
    let clase = "";

    // Lógica de frases según nota
    if (notaFinal < 5) { frase = "WATTAFAK?"; clase = "nota-critica"; }
    else if (notaFinal < 7) { frase = "ESBIEN"; clase = "nota-aprobada"; }
    else if (notaFinal < 9) { frase = "BOMBOCLAT"; clase = "nota-notable"; }
    else { frase = "PUTACRANCKPELUT!!!"; clase = "nota-crack"; }

    divResultado.innerHTML = `
        <div class="nota-numero ${clase}">Nota: ${notaFinal.toFixed(2)} / 10</div>
        <div class="frase-test ${clase}">${frase}</div>
    `;
    
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

/**
 * Regresa al panel principal.
 */
function volverAlMenu() {
    zonaTest.style.display = 'none';
    menuPrincipal.style.display = 'grid';
    titulo.innerText = "Panel de Control DIW";
    window.scrollTo(0, 0);
}

/**
 * Cambia el fondo de pantalla (Cárceles).
 */
document.getElementById('btn-carceles').addEventListener('click', function() {
    const body = document.body;
    if (!body.classList.contains('carceles-v1') && !body.classList.contains('carceles-v2')) {
        body.classList.add('carceles-v1');
    } else if (body.classList.contains('carceles-v1')) {
        body.classList.remove('carceles-v1');
        body.classList.add('carceles-v2');
    } else {
        body.classList.remove('carceles-v2');
    }
});