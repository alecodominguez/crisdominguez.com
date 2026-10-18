/* ==========================================================================
   WORKS DATA: every artwork on the Works page comes from this file.
   --------------------------------------------------------------------------
   To ADD a piece:
     1. Put a large JPG in images/works/ and a small one in images/works/thumbs/
        (same file name, e.g. "my-new-piece.jpg"; see README for sizes).
     2. Copy one { … } block below into the right section and edit it.
   Fields:
     section   which group/filter it appears under (see SECTIONS)
     title     { en, es }
     medium    { en, es }                     (shown under the title)
     year      "2025"  (leave "" if unknown and it simply won't show)
     size      { en: "24 × 30 in", es: "61 × 76 cm" }  (optional)
     statement { en, es }  (optional; shown only when the piece is opened)
     images    [ ["file-name-without-.jpg", "alt text EN", "texto alt ES", w, h], … ]
               More than one image = a set; the viewer steps through them.
   Notes for Aleco/Cris are in // comments. Search for "CHECK".
   ========================================================================== */

window.SECTIONS = [
  // key            label EN                       label ES
  ["collections",  "Collections",                 "Colecciones"],
  ["oils",         "Oils",                        "Óleos"],
  ["graphite",     "Graphite Drawings",           "Dibujos en grafito"],
  ["ink",          "Ink",                         "Tinta"],
  ["color",        "Color & Pattern",             "Color y patrón"],
  ["collage",      "Collage",                     "Collage"],
  ["sculpture",    "Sculpture & Installation",    "Escultura e instalación"],
  ["photography",  "Photography",                 "Fotografía"],
  ["progress",     "In Progress",                 "En proceso"]
];

window.WORKS = [

  /* ───────────── COLLECTIONS ───────────── */
  {
    id: "fountain-of-love", section: "collections",
    title: { en: "Fountain of Love", es: "Fuente del amor" },
    medium: { en: "Photographic series · 4 photographs", es: "Serie fotográfica · 4 fotografías" },
    year: "2025",
    // CHECK: No photography statement was provided. This is a DRAFT based on the images; have Cris rewrite it.
    statement: {
      en: "Shot at night in Chicago's Millennium Park, this series follows two figures standing apart at the edge of a fountain, lit by a curved stone wall. From frame to frame the distance between them shifts, and the falling water becomes what both separates and connects them.",
      es: "Tomada de noche en Millennium Park, Chicago, esta serie sigue a dos figuras que se miran a distancia al borde de una fuente, iluminadas por un muro curvo de piedra. De una imagen a otra la distancia entre ellas cambia, y el agua que cae se vuelve aquello que las separa y, a la vez, las une."
    },
    images: [
      ["fountain-of-love-1", "Night photograph: a lone silhouetted figure stands at a glowing curved wall behind a fountain's dark rippling pool, a lamppost and jet of water in the foreground.", "Fotografía nocturna: una silueta solitaria frente a un muro curvo iluminado, detrás del estanque oscuro de una fuente, con un farol y un chorro de agua en primer plano.", 2000, 1333],
      ["fountain-of-love-2", "Two silhouetted figures stand far apart along the lit wall of the fountain, the dark water between them catching the light.", "Dos siluetas, muy separadas, de pie junto al muro iluminado de la fuente; el agua oscura entre ellas refleja la luz.", 2000, 1333],
      ["fountain-of-love-3", "Closer view: two silhouettes face the illuminated wall a few steps apart, the fountain's lamppost rising between them.", "Vista más cercana: dos siluetas miran el muro iluminado a unos pasos de distancia, con el farol de la fuente entre ellas.", 2000, 1333],
      ["fountain-of-love-4", "Wide view of the two figures at the fountain's edge, the word PARK carved into the glowing wall above them.", "Vista amplia de las dos figuras al borde de la fuente, con la palabra PARK grabada en el muro iluminado.", 2000, 1333]
    ]
  },
  {
    id: "vision-collection", section: "collections",
    title: { en: "The Vision Collection", es: "La colección Visión" },
    medium: { en: "Installation · ink drawings, wood, clay and found materials", es: "Instalación · dibujos en tinta, madera, barro y materiales encontrados" },
    year: "2025",
    statement: {
      en: "This collection represents my personal vision of the world and how I choose to perceive it. Through each piece, I explore the concepts of unity and interconnectedness, reflecting how everything around us is connected.",
      es: "Esta colección representa mi visión personal del mundo y cómo elijo percibirlo. En cada pieza exploro los conceptos de unidad e interconexión, reflejando cómo todo lo que nos rodea está conectado."
    },
    images: [
      ["vision-1", "Gallery installation: five radiating starburst drawings in red, orange and violet ink hang along a table of small white sculptures, with a carved wooden piece on a white cloth below.", "Instalación en galería: cinco dibujos radiales en tinta roja, naranja y violeta cuelgan frente a una mesa con pequeñas esculturas blancas; abajo, una pieza de madera tallada sobre tela blanca.", 2000, 1333],
      ["vision-2", "Floor installation on a white cloth: a tall stack of wooden blocks, a soft white clay form and a fan of wooden sticks, with paintings on the gallery walls behind.", "Instalación en el piso sobre tela blanca: una torre de bloques de madera, una forma blanda de barro blanco y un abanico de palitos de madera; al fondo, pinturas en los muros.", 2000, 1333],
      ["vision-3", "Close-up of a sculpture made of overlapping wooden craft sticks, fanned into a wave-like arc on a concrete floor.", "Detalle de una escultura de palitos de madera superpuestos, abiertos en forma de ola sobre el piso de concreto.", 2000, 1333],
      ["vision-4", "Top-down view: a carved wooden eye with a red center rests on white cloth, ringed by grey stones, beneath the row of starburst drawings.", "Vista cenital: un ojo de madera tallada con centro rojo descansa sobre tela blanca, rodeado de piedras grises, bajo la fila de dibujos radiales.", 2000, 1333]
    ]
  },

  /* ───────────── OILS ───────────── */
  {
    id: "parallel", section: "oils",
    title: { en: "Parallel", es: "Paralelo" },
    medium: { en: "Oil on canvas", es: "Óleo sobre lienzo" }, year: "2025",
    statement: {
      en: "In this oil painting, I explore parallel movement through repetitive forms and patterns, drawing inspiration from ancient Egyptian art and its distinctive visual style.",
      es: "En esta pintura al óleo exploro el movimiento paralelo a través de formas y patrones repetitivos, inspirándome en el arte del antiguo Egipto y su estilo visual tan característico."
    },
    images: [["parallel", "Vertical oil painting: a pale face emerges from streaks of red, orange and yellow that run down the canvas, framed by textured violet bands.", "Óleo vertical: un rostro pálido surge de franjas rojas, naranjas y amarillas que corren por el lienzo, enmarcado por bandas violetas texturizadas.", 1333, 2000]]
  },
  {
    id: "immersion", section: "oils",
    title: { en: "Immersion", es: "Inmersión" },
    medium: { en: "Oil on canvas", es: "Óleo sobre lienzo" }, year: "",
    statement: {
      en: "In this piece, I explore the feeling of being completely absorbed in a space, emotion, or moment. Through oil paint, I experiment with color, texture, and movement to create a sense of depth.",
      es: "En esta pieza exploro la sensación de estar completamente absorta en un espacio, una emoción o un momento. Con el óleo experimento con el color, la textura y el movimiento para crear profundidad."
    },
    images: [["immersion", "Oil painting: rippling bands of brown, ochre and cream flow down into a field of cool grey, like layers of earth melting into water.", "Óleo: bandas onduladas de café, ocre y crema descienden hacia un campo gris frío, como capas de tierra que se funden en agua.", 1204, 1600]]
  },
  {
    id: "holes", section: "oils",
    title: { en: "Holes", es: "Huecos" },
    medium: { en: "Oil on canvas", es: "Óleo sobre lienzo" }, year: "2025",
    // CHECK: this photo shows a studio wall with FOUR paintings. Send a photo of just "Holes" and replace images/works/holes.jpg.
    statement: {
      en: "In this piece, I experiment with oil painting, exploring circular shapes and the relationship between cool and light colors to create depth and visual contrast.",
      es: "En esta pieza experimento con la pintura al óleo, explorando formas circulares y la relación entre colores fríos y claros para crear profundidad y contraste visual."
    },
    images: [["holes", "Studio wall with four oil paintings: two figure scenes in warm pinks and ochres, a dark canvas with glowing orange organic shapes, and a crowded colorful interior.", "Muro de estudio con cuatro óleos: dos escenas de figuras en rosas y ocres cálidos, un lienzo oscuro con formas orgánicas naranjas luminosas y un interior colorido y abigarrado.", 1333, 2000]]
  },

  /* ───────────── GRAPHITE DRAWINGS ───────────── */
  {
    id: "look-of-love", section: "graphite",
    title: { en: "Look of Love", es: "Mirada de amor" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "",
    statement: {
      en: "In this pencil drawing, I capture the connection between two people through their gaze, exploring how love and emotion can be expressed without words.",
      es: "En este dibujo a lápiz capto la conexión entre dos personas a través de su mirada, explorando cómo el amor y la emoción pueden expresarse sin palabras."
    },
    images: [["look-of-love", "Graphite drawing of two faces in profile whose noses form the outline of a dark goblet between them, their eyes meeting.", "Dibujo en grafito de dos rostros de perfil cuyas narices forman la silueta de una copa oscura entre ellos; sus miradas se encuentran.", 1600, 1204]]
  },
  {
    id: "unique-origins", section: "graphite",
    title: { en: "Unique Origins", es: "Orígenes únicos" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "",
    statement: {
      en: "In this pencil drawing, I explore individuality through a collection of seeds, each with its own unique personality. Together, they reflect how every individual is different while still being part of a larger whole.",
      es: "En este dibujo a lápiz exploro la individualidad a través de un conjunto de semillas, cada una con su propia personalidad. Juntas reflejan cómo cada individuo es distinto y, aun así, forma parte de un todo mayor."
    },
    images: [["unique-origins", "Detailed graphite drawing of tightly packed round seeds, each with a small sprouting stem and its own shading.", "Dibujo detallado en grafito de semillas redondas muy juntas, cada una con un pequeño brote y su propio sombreado.", 1192, 1772]]
  },
  {
    id: "crippled-reality", section: "graphite",
    title: { en: "Crippled Reality", es: "Realidad lisiada" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "2025",
    statement: {
      en: "Through this pencil drawing, I explore the nature of reality and how it can become distorted. A crippled leaf symbolizes fragility, imperfection, and the darker aspects of perception.",
      es: "Con este dibujo a lápiz exploro la naturaleza de la realidad y cómo puede distorsionarse. Una hoja maltrecha simboliza la fragilidad, la imperfección y los aspectos más oscuros de la percepción."
    },
    images: [["crippled-reality", "Graphite drawing of a large curled, torn leaf with detailed veins, set against a smudged dark background.", "Dibujo en grafito de una gran hoja rizada y rasgada con venas detalladas, sobre un fondo oscuro difuminado.", 1333, 2000]]
  },
  {
    id: "a-universe", section: "graphite",
    title: { en: "A Universe", es: "Un universo" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "",
    statement: {
      en: "Through the creation of mandalas, I explore the vastness and infinity of the universe, using patterns and repetition to reflect its endless complexity and interconnectedness.",
      es: "A través de la creación de mandalas exploro la inmensidad y el infinito del universo, usando patrones y repetición para reflejar su complejidad e interconexión sin fin."
    },
    images: [["a-universe", "Graphite mandala of concentric rings of petals, swirls and dots, drawn over faint construction circles.", "Mandala en grafito de anillos concéntricos de pétalos, espirales y puntos, trazado sobre círculos guía tenues.", 1600, 1204]]
  },
  {
    id: "gifted-child", section: "graphite",
    title: { en: "Gifted Child", es: "Niña dotada" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "",
    statement: {
      en: "In this pencil drawing, I portray a girl with a star on her face, symbolizing uniqueness, potential, and the special qualities that make each child shine.",
      es: "En este dibujo a lápiz retrato a una niña con una estrella en la frente, símbolo de lo único, del potencial y de las cualidades especiales que hacen brillar a cada niño."
    },
    images: [["gifted-child", "Graphite drawing of a laughing little girl with pigtails, eyes squeezed shut and a small star on her forehead.", "Dibujo en grafito de una niña pequeña con coletas, riendo con los ojos cerrados y una pequeña estrella en la frente.", 1204, 1600]]
  },
  {
    id: "hot-cocoa", section: "graphite",
    title: { en: "Hot Cocoa", es: "Chocolate caliente" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "",
    statement: {
      en: "In this pencil drawing, I capture a quiet moment of comfort and warmth as a girl enjoys a cup of hot cocoa, highlighting the beauty of simple, everyday moments.",
      es: "En este dibujo a lápiz capto un momento tranquilo de calidez mientras una niña disfruta una taza de chocolate caliente, resaltando la belleza de los momentos sencillos de cada día."
    },
    images: [["hot-cocoa", "Loose graphite sketch of a young child holding a mug to her lips with both hands, looking out over the rim.", "Boceto suelto en grafito de una niña que sostiene una taza con ambas manos y mira por encima del borde.", 1204, 1600]]
  },
  {
    id: "boredom", section: "graphite",
    title: { en: "Boredom", es: "Aburrimiento" },
    medium: { en: "Graphite on paper", es: "Grafito sobre papel" }, year: "",
    statement: {
      en: "Through this pencil drawing, I explore childhood boredom, capturing the quiet moments and expressions of a child lost in thought.",
      es: "Con este dibujo a lápiz exploro el aburrimiento infantil, capturando los momentos de quietud y la expresión de una niña perdida en sus pensamientos."
    },
    images: [["boredom", "Light graphite sketch of a curly-haired child resting her chin in both hands, gazing off with a pout.", "Boceto ligero en grafito de una niña de pelo rizado que apoya la barbilla en ambas manos y mira a lo lejos con un puchero.", 1204, 1600]]
  },
  {
    id: "sketchbook-collage", section: "graphite",
    title: { en: "Sketchbook Collage", es: "Collage de bocetos" },
    medium: { en: "Graphite on paper · eleven sketches", es: "Grafito sobre papel · once bocetos" }, year: "",
    statement: {
      en: "In this collage, I bring together separate pencil drawings, displaying each piece individually while creating a collection of sketches that reflects my artistic process and exploration of different ideas.",
      es: "En este collage reúno dibujos a lápiz independientes; cada pieza se muestra por separado y, juntas, forman una colección de bocetos que refleja mi proceso artístico y mi exploración de distintas ideas."
    },
    images: [["sketchbook-collage", "A corkboard pinned with eleven graphite sketches: portraits of women, a detailed eye, two dogs, a caricature and a page of small cartoon figures.", "Un tablero de corcho con once bocetos en grafito: retratos de mujeres, un ojo detallado, dos perros, una caricatura y una hoja de pequeños personajes.", 1392, 938]]
  },

  /* ───────────── INK ───────────── */
  {
    id: "the-mother-seed", section: "ink",
    title: { en: "The Mother Seed", es: "La semilla madre" },
    medium: { en: "Ink on paper", es: "Tinta sobre papel" }, year: "",
    statement: {
      en: "In this ink painting, I explore how love and knowledge are passed from one generation to the next, symbolizing the role of motherhood in nurturing and guiding future generations.",
      es: "En esta pintura en tinta exploro cómo el amor y el conocimiento pasan de una generación a la siguiente, simbolizando el papel de la maternidad al nutrir y guiar a las generaciones futuras."
    },
    images: [["the-mother-seed", "Black ink painting of a large dark seed whose roots branch outward across the page toward a smaller seed and a spiral.", "Pintura en tinta negra de una gran semilla oscura cuyas raíces se ramifican por la hoja hacia una semilla más pequeña y una espiral.", 1600, 1204]]
  },
  {
    id: "oneness", section: "ink",
    title: { en: "Oneness", es: "Unidad" },
    medium: { en: "Ink on paper", es: "Tinta sobre papel" }, year: "",
    statement: {
      en: "In this ink painting, I explore unity through a circle and lines extending outward, symbolizing people connected by a shared origin.",
      es: "En esta pintura en tinta exploro la unidad a través de un círculo y líneas que se extienden hacia afuera, símbolo de personas conectadas por un origen común."
    },
    images: [["oneness", "Black ink drawing of a solid central circle with dozens of fluid lines radiating outward, each ending in a teardrop shape.", "Dibujo en tinta negra de un círculo central sólido del que irradian decenas de líneas fluidas, cada una rematada en forma de gota.", 1600, 1204]]
  },

  /* ───────────── COLOR & PATTERN ───────────── */
  {
    id: "infinity", section: "color",
    title: { en: "Infinity", es: "Infinito" },
    medium: { en: "Colored pencil on paper", es: "Lápices de color sobre papel" }, year: "",
    // CHECK medium (colored pencil vs. oil pastel)
    statement: {
      en: "In this piece, I explore the concept of infinity and its connection to spirals, using their continuous movement and recurring forms to represent endless growth, cycles, and the idea of something without a beginning or end.",
      es: "En esta pieza exploro el concepto de infinito y su relación con las espirales, usando su movimiento continuo y sus formas recurrentes para representar el crecimiento sin fin, los ciclos y la idea de algo sin principio ni final."
    },
    images: [["infinity", "A circular spiral built from tightly layered rings of blue, violet, red and green color, edged in black.", "Una espiral circular formada por anillos muy densos de azul, violeta, rojo y verde, con un borde negro.", 1600, 1204]]
  },
  {
    id: "another-dimension", section: "color",
    title: { en: "Another Dimension", es: "Otra dimensión" },
    medium: { en: "Ballpoint pen on graph paper · two pieces", es: "Bolígrafo sobre papel cuadriculado · dos piezas" }, year: "",
    statement: {
      en: "In these two pieces, I wanted to show the inner beauty of a square, and how its diagonal introduces us to irrational numbers: in other words, infinite numbers.",
      es: "En estas dos piezas quise mostrar la belleza interior de un cuadrado y cómo su diagonal nos introduce a los números irracionales; en otras palabras, a los números infinitos."
    },
    images: [
      ["another-dimension-1", "Symmetrical pattern drawn on graph paper in red and blue ballpoint: squares filled with diagonal hatching form a large star-like shape.", "Patrón simétrico dibujado con bolígrafo rojo y azul sobre papel cuadriculado: cuadros con achurado diagonal forman una gran figura en estrella.", 1600, 1204],
      ["another-dimension-2", "Tall symmetrical totem of blue-hatched squares on graph paper, each square divided along its diagonals.", "Tótem vertical y simétrico de cuadros achurados en azul sobre papel cuadriculado, cada uno dividido por sus diagonales.", 1204, 1600]
    ]
  },
  {
    id: "doodles", section: "color",
    title: { en: "Doodles", es: "Garabatos" },
    medium: { en: "Colored pencil on paper · two pieces", es: "Lápices de color sobre papel · dos piezas" }, year: "",
    statement: {
      en: "These pieces are playful experiments with color and shape, exploring the different forms and expressions that can emerge through the creative process.",
      es: "Estas piezas son experimentos lúdicos con el color y la forma, que exploran las distintas formas y expresiones que pueden surgir durante el proceso creativo."
    },
    images: [
      ["doodles-1", "Sheet of colorful organic doodles: wavy outlined blobs, flowers and loops in pink, orange, blue and green.", "Hoja de garabatos orgánicos de colores: manchas onduladas, flores y lazos en rosa, naranja, azul y verde.", 1600, 1204],
      ["doodles-2", "Second sheet of doodles: rounded, symmetrical shapes outlined in many bright colors, like cells or flowers.", "Segunda hoja de garabatos: formas redondeadas y simétricas delineadas en muchos colores brillantes, como células o flores.", 1600, 1204]
    ]
  },

  /* ───────────── COLLAGE ───────────── */
  {
    id: "e-mc2", section: "collage",
    title: { en: "E=mc²", es: "E=mc²" },
    medium: { en: "Photographic collage", es: "Collage fotográfico" }, year: "2025",
    statement: {
      en: "This piece explores Einstein's famous equation of relativity, using a car to visually represent the relationship between speed and energy. Through photographic manipulation, I aim to transform a complex scientific concept into a simple and visual art form.",
      es: "Esta pieza explora la famosa ecuación de la relatividad de Einstein, usando un auto para representar visualmente la relación entre la velocidad y la energía. Mediante la manipulación fotográfica busco transformar un concepto científico complejo en una forma de arte sencilla y visual."
    },
    images: [["e-mc2", "Photo collage on brown paper: strips of blurred car-light photographs cross in a bright X shape, with more prints scattered on the studio floor.", "Collage fotográfico sobre papel café: tiras de fotos de luces de autos en movimiento se cruzan en forma de X, con más impresiones esparcidas en el piso del taller.", 1204, 1600]]
  },
  {
    id: "interconnectedness", section: "collage",
    title: { en: "Interconnectedness", es: "Interconexión" },
    medium: { en: "Photographic manipulation and collage · two views", es: "Manipulación fotográfica y collage · dos vistas" }, year: "2025",
    statement: {
      en: "Through photographic manipulation and collage, I explore how different images connect to create new meanings and a sense of unity.",
      es: "Mediante la manipulación fotográfica y el collage exploro cómo distintas imágenes se conectan para crear nuevos significados y una sensación de unidad."
    },
    images: [
      ["interconnectedness-1", "Collage of mirrored city-at-night photographs in purple and blue, arranged in zigzag strips around a central print on brown paper.", "Collage de fotos nocturnas de la ciudad, en espejo, en morados y azules, dispuestas en tiras en zigzag alrededor de una impresión central sobre papel café.", 2000, 1333],
      ["interconnectedness-2", "Wider view of the same collage laid out on the studio floor, the mirrored strips linking across the brown paper.", "Vista más amplia del mismo collage en el piso del taller; las tiras en espejo se enlazan sobre el papel café.", 2000, 1333]
    ]
  },

  /* ───────────── SCULPTURE & INSTALLATION ───────────── */
  {
    id: "defying-physics", section: "sculpture",
    // CHECK title: the statement calls this "Defying Gravity"; the file is "Defying Physics".
    title: { en: "Defying Physics", es: "Desafiando la física" },
    medium: { en: "Ceramic studies · clay", es: "Estudios en cerámica · barro" }, year: "2025",
    statement: {
      en: "In this collection of ceramic pieces, I experiment with different shapes and forms, exploring the relationship between physical laws, quantum physics, and the material world.",
      es: "En este conjunto de piezas de cerámica experimento con distintas formas y volúmenes, explorando la relación entre las leyes físicas, la física cuántica y el mundo material."
    },
    images: [["defying-physics", "A studio table covered with small unfired clay sculptures: balanced spheres, folded slabs, a ridged block and twisting organic forms.", "Una mesa de taller cubierta de pequeñas esculturas de barro sin cocer: esferas en equilibrio, placas dobladas, un bloque estriado y formas orgánicas retorcidas.", 1600, 1204]]
  },
  {
    id: "a-childs-thought", section: "sculpture",
    title: { en: "A Child's Thought", es: "El pensamiento de un niño" },
    medium: { en: "Cereal, wood and thread", es: "Cereal, madera e hilo" }, year: "",
    statement: {
      en: "I was inspired by the mind of a child when creating this piece. I wanted to express how children can use imagination and creativity to do extraordinary things.",
      es: "Al crear esta pieza me inspiré en la mente de un niño. Quise expresar cómo los niños pueden usar la imaginación y la creatividad para hacer cosas extraordinarias."
    },
    images: [["a-childs-thought", "A wooden tray where rings of cereal spiral inward and rise into a curving tower, held by fine thread, beside a tipped cereal container.", "Una bandeja de madera donde aros de cereal forman una espiral que se eleva en una torre curva, sostenida por hilo fino, junto a un envase de cereal volcado.", 1600, 1204]]
  },

  /* ───────────── PHOTOGRAPHY ───────────── */
  // CHECK: the untitled photos below have WORKING titles. Have Cris rename them.
  {
    id: "energy", section: "photography",
    title: { en: "Energy", es: "Energía" },
    medium: { en: "Long-exposure photograph", es: "Fotografía de larga exposición" }, year: "2025",
    // CHECK: draft statement
    statement: {
      en: "A long exposure turns traffic on a Chicago street into streaks of light, recording movement and energy instead of the cars themselves.",
      es: "Una larga exposición convierte el tráfico de una calle de Chicago en estelas de luz, registrando el movimiento y la energía en lugar de los autos mismos."
    },
    images: [["energy", "Long-exposure photograph of a city street at night: red, white and gold light trails streak horizontally across the frame.", "Fotografía de larga exposición de una calle de noche: estelas de luz roja, blanca y dorada cruzan la imagen en horizontal.", 2000, 1333]]
  },
  {
    id: "nature-grid", section: "photography",
    title: { en: "Close to Home", es: "Cerca de casa" },
    medium: { en: "Photographic collage", es: "Collage fotográfico" }, year: "",
    // CHECK: working title + draft statement
    statement: {
      en: "A grid of close-ups gathered near the coast where I live: leaves, seeds, bark, a spider, a hibiscus. Placed side by side, small details start to read as one living system.",
      es: "Una cuadrícula de acercamientos reunidos cerca de la costa donde vivo: hojas, semillas, corteza, una araña, un hibisco. Puestos lado a lado, los pequeños detalles empiezan a leerse como un solo sistema vivo."
    },
    images: [["photo-collage", "Grid of nature close-ups: pink flowers, palm fronds, a dog on the beach, a spider in its web, spiky seed pods, lichen and an orange hibiscus.", "Cuadrícula de acercamientos de la naturaleza: flores rosas, hojas de palma, un perro en la playa, una araña en su tela, vainas espinosas, líquenes y un hibisco naranja.", 1333, 2000]]
  },
  {
    id: "photo-4504", section: "photography",
    title: { en: "Kickflip", es: "Kickflip" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-4504", "A skateboarder in a red top leaps mid-trick above a red board on a tree-lined Chicago sidewalk.", "Una patinadora de blusa roja salta en pleno truco sobre una tabla roja en una banqueta arbolada de Chicago.", 1333, 2000]]
  },
  {
    id: "photo-4200", section: "photography",
    title: { en: "Cloud Gate at Night", es: "Cloud Gate de noche" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-4200", "Chicago skyline at dusk rising behind the curved mirrored surface of Cloud Gate, lit windows reflected in the steel.", "El horizonte de Chicago al anochecer detrás de la superficie curva y espejada de Cloud Gate, con ventanas iluminadas reflejadas en el acero.", 2000, 1333]]
  },
  {
    id: "photo-4279", section: "photography",
    title: { en: "State Street I", es: "State Street I" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-4279", "A downtown street at night: headlights, glowing street lamps and pedestrians crossing between tall buildings.", "Una calle del centro de noche: faros, farolas encendidas y peatones cruzando entre edificios altos.", 2000, 1333]]
  },
  {
    id: "photo-4294", section: "photography",
    title: { en: "State Street II", es: "State Street II" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-4294", "Low view of a wide crosswalk at night, a crowd of silhouettes passing in front of car headlights.", "Vista baja de un amplio cruce peatonal de noche; una multitud de siluetas pasa frente a los faros de los autos.", 2000, 1333]]
  },
  {
    id: "photo-4301", section: "photography",
    title: { en: "Night Facade", es: "Fachada nocturna" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-4301", "An ornate Gothic-style building facade lit warm gold at night between darker brick towers.", "Una fachada ornamentada de estilo gótico iluminada en tono dorado por la noche, entre torres de ladrillo más oscuras.", 2000, 1333]]
  },
  {
    id: "photo-5110", section: "photography",
    title: { en: "Sunbather", es: "Al sol" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-5110", "Close-up of a spiny lizard resting on a pale granite boulder, a blurred riverbed of stones behind it.", "Acercamiento de una lagartija espinosa sobre una roca de granito claro, con un lecho de piedras desenfocado al fondo.", 2000, 1333]]
  },
  {
    id: "photo-5248", section: "photography",
    title: { en: "Hermit", es: "Ermitaño" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-5248", "Macro photograph of a tiny hermit crab peeking out of its dark spiral shell on soft sand.", "Macrofotografía de un pequeño cangrejo ermitaño que se asoma de su concha en espiral sobre la arena.", 2000, 1333]]
  },
  {
    id: "photo-5315", section: "photography",
    title: { en: "Beach Play", es: "Juego en la playa" },
    medium: { en: "Digital photograph", es: "Fotografía digital" }, year: "2025",
    images: [["photo-5315", "Two dogs, one russet and one white, face off playfully on a sunny beach lined with palm trees.", "Dos perros, uno rojizo y uno blanco, juegan frente a frente en una playa soleada bordeada de palmeras.", 2000, 1333]]
  },

  /* ───────────── IN PROGRESS ───────────── */
  {
    id: "girl-on-flames", section: "progress",
    title: { en: "The Girl on Flames", es: "La niña en llamas" },
    medium: { en: "Paint on canvas · in progress", es: "Pintura sobre lienzo · en proceso" }, year: "2026",
    statement: {
      en: "This piece expresses the intensity of an idea and how, like fire, it can consume you entirely.",
      es: "Esta pieza expresa la intensidad de una idea y cómo, como el fuego, puede consumirte por completo."
    },
    images: [["girl-on-flames", "Work in progress: on a white canvas, a slender orange figure with raised arms rises from a match flame wrapped in sweeping blue strokes.", "Obra en proceso: sobre un lienzo blanco, una figura naranja de brazos alzados surge de la llama de un cerillo envuelta en trazos azules.", 1204, 1600]]
  },
  {
    id: "the-stranger", section: "progress",
    title: { en: "The Stranger", es: "El desconocido" },
    medium: { en: "Clay · in progress", es: "Barro · en proceso" }, year: "2026",
    statement: {
      en: "In this piece, I focus on the human aspects of the face, exploring the emotions and expressions that make each person unique.",
      es: "En esta pieza me centro en los rasgos humanos del rostro, explorando las emociones y expresiones que hacen única a cada persona."
    },
    images: [["the-stranger", "Work in progress: a clay face, eyes closed, emerging from a rough block on a paint-splattered board.", "Obra en proceso: un rostro de barro con los ojos cerrados que surge de un bloque sin pulir sobre una tabla salpicada de pintura.", 1600, 1204]]
  }
];
