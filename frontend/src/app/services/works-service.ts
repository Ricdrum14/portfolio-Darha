import { Injectable } from "@angular/core";
import { Work } from "../models/work";




@Injectable({
    providedIn: 'root'
})

export class WorksService{

    private works:Work[] = [
      new Work(
        'TEMPS PERDU',
        'Un roman introspectif sur la quête du temps et de soi-même.',
        `Jules vivait avec la sensation permanente que chaque seconde lui échappait, comme du sable fin glissant entre ses doigts. Assis près de la fenêtre, il regardait les ombres s’allonger sur les murs de sa chambre, conscient que le temps avançait mais incapable d’en saisir la substance. Il n’avait rien perdu de tangible, mais un sentiment de vide le hantait, une impression sourde d’avoir laissé filer quelque chose d’essentiel sans jamais pouvoir le nommer.
      
        Sa découverte d’un vieux journal d’adolescence bouleversa ce fragile équilibre. Les pages jaunies exhalaient l’odeur des promesses non tenues, des amitiés effacées et des rêves inachevés. Chaque phrase griffonnée à la hâte devenait une piqûre de rappel : autrefois, il avait cru, il avait espéré, il avait voulu. La confrontation avec ce passé endormi le fit vaciller, comme si l’enfant qu’il avait été lui demandait des comptes.
      
        Décidé à comprendre, Jules se lança dans une errance volontaire. Il retourna à l’école primaire où il avait ri, à la bibliothèque où il avait rêvé de mondes lointains, à la plage où ses premiers émois avaient éclaté sous le soleil d’été. Chaque lieu était à la fois familier et étranger, porteur d’un écho lointain. Les rencontres qu’il fit, parfois anodines, parfois bouleversantes, lui révélèrent que le temps ne détruit pas, il transforme, il polit, il recadre nos souvenirs.
      
        'Temps perdu' n’est pas un roman sur la nostalgie ni sur les regrets. C’est une quête de réconciliation avec soi-même. À travers ce voyage intérieur, Jules apprend que le temps n’est jamais réellement perdu : il se cache dans nos gestes, dans nos regards, dans la manière dont nous décidons de vivre le présent. Accepter le passé, c’est retrouver une liberté nouvelle, celle de continuer à avancer sans crainte de ce qui fut.`,
        'https://picsum.photos/1920/1083',
      ),
      
      new Work(
        'LUMIÈRE D\'ÉTÉ',
        'Un recueil de poèmes célébrant la beauté et la lumière estivale.',
        `L’été, c’est la saison des éclats, des ombres légères et des instants suspendus. Ce recueil de poèmes s’ouvre comme une fenêtre ensoleillée, laissant entrer le souffle chaud d’un après-midi languissant. Les mots se posent comme des rayons, tantôt doux, tantôt brûlants, sculptant un univers de lumière et de sensations intenses.
      
        Chaque page évoque un paysage vibrant : la mer qui miroite sous le soleil, un champ de lavande dont le parfum flotte encore au crépuscule, ou un figuier dont l’ombre protectrice abrite des confidences murmurées. L’auteur y mêle amour, souvenirs et contemplation, dessinant une toile où la vie se savoure dans sa plus simple intensité.
      
        Mais la lumière n’éclaire pas seulement les joies. Elle met aussi à nu les douleurs, les absences, les cicatrices. Pourtant, sous cette clarté estivale, même les blessures semblent auréolées d’or, comme si l’été avait le pouvoir de transformer la souffrance en beauté. La poésie devient alors un baume, une façon d’apprendre à regarder autrement.
      
        'Lumière d’été' est une invitation à ralentir et à contempler. Lire ces poèmes, c’est goûter à l’éternité d’un instant, sentir que la chaleur d’un rayon peut suffire à redonner de l’élan. C’est un livre qui rappelle que, même au cœur des tumultes, nous portons en nous une lumière que rien ne peut éteindre.`,
        'https://picsum.photos/1920/1081',
      ),
      
      new Work(
        'RÊVES D\'AUBE',
        'Un roman d’espoir et de renouveau. Jules rêves rencontrent réalité.',
        `Chaque matin, Jules s’éveillait à l’aube, juste avant que le soleil ne brise la ligne d’horizon. Dans ce silence fragile, il se laissait emporter par des visions claires : non pas fuir ailleurs, mais reconstruire autrement. Ses rêves n’étaient pas d’évasion, mais de renaissance, comme une promesse discrète faite à lui-même.
      
        Le jour où il décida de quitter la ville, il emporta seulement quelques livres, des carnets vierges et l’intuition qu’une autre vie était possible. Le vieux moulin où il s’installa devint son refuge, un lieu où le temps semblait reprendre un rythme naturel. Là, entouré par la nature, il apprit à écouter les saisons et à inscrire ses journées dans leur mouvement.
      
        Mais l’aube ne se contentait pas d’illuminer les possibles. Elle révélait aussi les ombres. Les habitants du village, bienveillants mais marqués par leurs propres blessures, lui montrèrent que recommencer n’est jamais simple. Les secrets, les rancunes et les douleurs partagées pesaient dans les regards, obligeant Jules à affronter ses propres fragilités.
      
        'Rêves d’aube' est un roman de renaissance, d’humanité et de lumière. Il rappelle que chaque matin porte en lui une promesse : celle d’un renouveau. Même dans les existences cabossées, il est toujours possible de recommencer, de trouver une aube intérieure qui éclaire les jours à venir.`,
        'https://picsum.photos/1920/1079',
      ),
      
      new Work(
        'ENTRELACS',
        'Une fresque familiale complexe où s’entrelacent les liens secrets et les non-dits.',
        `La maison familiale se dressait sur la colline comme un témoin muet. Chaque pièce, chaque objet, semblait imprégné des silences accumulés au fil des générations. Clara, revenue après dix ans d’absence, franchit le seuil avec l’impression que les murs la regardaient, qu’ils attendaient son retour pour livrer leurs secrets.
      
        Ce qu’elle croyait enfoui ressurgit dès les premiers instants : les rires étouffés derrière une porte close, les disputes à voix basse, les gestes de tendresse vite réprimés. Le passé, loin d’être éteint, s’imposait comme une force vivante, prête à la happer. En parcourant les couloirs, Clara découvrit que chaque portrait accroché au mur n’était pas un simple souvenir, mais une mémoire en suspens.
      
        Le roman se déploie comme un chœur de voix entremêlées. Les récits des ancêtres se superposent à ceux des vivants, révélant une fresque faite d’amours impossibles, de loyautés brisées, mais aussi de moments de grâce. Chaque génération porte le poids de la précédente, et pourtant cherche à s’en libérer, dans un équilibre fragile entre héritage et choix personnel.
      
        'Entrelacs' est un roman dense, subtil, où l’intime devient universel. Il explore avec délicatesse la complexité des liens familiaux, ces fils invisibles qui nous unissent malgré nous, et qui dessinent, dans leur fragilité, la trame de nos vies.`,
        'https://picsum.photos/1920/1078',
      ),
      
      new Work(
        'LE MURMURE DES ÉTOILES',
        'Un recueil de poésie sur le silence de la nuit et la beauté du cosmos.',
        `Quand la nuit tombe, le ciel s’ouvre comme un livre ancien. Chaque étoile y brille comme une note suspendue, un fragment d’histoire oublié. Ce recueil se propose d’écouter ces murmures silencieux, de tendre l’oreille à ce que l’univers chuchote dans l’obscurité. La poésie y devient une passerelle entre l’infini et l’intime.
      
        Les vers explorent la solitude des nuits blanches, mais aussi la paix qui s’en dégage. Ils évoquent des constellations imaginaires, des amours disparues dont la mémoire flotte encore au milieu des astres. Chaque poème est une tentative de capturer une lueur, une étincelle qui relie la terre au ciel.
      
        Loin d’être froid, l’espace se révèle chaleureux, presque familier. Il devient le miroir de nos existences fragiles, rappelant que nous ne sommes qu’une poussière, mais une poussière illuminée. Dans ce silence cosmique, il n’y a ni désespoir ni vide, seulement une respiration immense qui nous enveloppe.
      
        'Le murmure des étoiles' est un recueil à lire à la lueur d’une lampe ou d’une bougie, quand le monde se tait. C’est une invitation à lever les yeux, à ralentir, et à sentir battre le pouls discret de l’univers en nous-mêmes.`,
        'https://picsum.photos/1920/1077',
      ),
      
      new Work(
        'SABLES OUBLIÉS',
        'Un roman contemplatif sur les souvenirs enfouis et le passage du temps.',
        `Le désert semblait vide, mais il regorgeait d’histoires invisibles. Léa, partie sur les traces d’un père silencieux, comprit très vite que son voyage dépasserait la simple quête familiale. Chaque dune devenait un symbole, chaque mirage une illusion arrachée à sa mémoire. Le Sahara n’était pas seulement un paysage : c’était un miroir impitoyable.
      
        Les rencontres jalonnant sa traversée — un guide nomade, un ermite, un enfant — étaient autant de révélations. Ces figures, simples et sages, vivaient dans un rapport au temps radicalement différent du sien. Elles savaient lire le ciel, sentir l’orage, comprendre le silence. À leur contact, Léa apprit que l’oubli n’était pas une perte, mais une transformation.
      
        Peu à peu, les certitudes se fissuraient. Ses souvenirs d’enfance revenaient, parfois déformés, parfois lumineux, et se mêlaient à l’immensité des paysages. Le désert n’offrait aucune échappatoire, seulement une vérité brute : il fallait accepter ses failles pour continuer à avancer.
      
        'Sables oubliés' est un roman de dépouillement et de révélation. Plus qu’un récit de voyage, c’est une méditation sur la mémoire et le temps, une lente marche vers la lumière intérieure que seule l’acceptation permet de trouver.`,
        'https://picsum.photos/1920/1076',
      ),
      
      new Work(
        'L’OMBRE DES SAISONS',
        'Une fresque poétique qui explore les cycles de la nature et de l’humain.',
        `La vie d’Anna s’écoule au rythme des saisons, chacune marquant un chapitre de son existence. Le printemps est celui de l’insouciance et des promesses ; l’été, celui de la passion et de l’intensité ; l’automne, celui des pertes et des désillusions ; l’hiver, enfin, celui du recueillement et de la sérénité. Ce cycle n’est pas linéaire, mais circulaire, comme une musique qui revient sans jamais être tout à fait la même.
      
        L’auteur mêle sans cesse le paysage et l’intime. Une pluie d’automne accompagne une séparation douloureuse, les premières pousses du printemps évoquent une renaissance, une tempête d’hiver reflète un doute intérieur. La nature devient le langage secret des émotions, un miroir discret des mouvements de l’âme.
      
        À travers ce récit, Anna grandit, trébuche, aime et pardonne. Chaque saison est une épreuve, mais aussi une opportunité d’apprendre. En vieillissant, elle découvre que le temps n’efface pas, il transforme. Ses souvenirs, d’abord lourds, se font plus doux, comme la neige qui recouvre le paysage.
      
        'L’ombre des saisons' est une méditation poétique sur la vie humaine. Rien n’est figé, tout se renouvelle. Le roman invite à accepter la beauté fragile de nos existences, tissées de cycles et de recommencements.`,
        'https://picsum.photos/1920/1075',
      ),
      
      new Work(
        'VOIX INTERDITES',
        'Un roman poignant sur des femmes dont les histoires ont été réduites au silence.',
        `Dans ce roman choral, plusieurs femmes prennent la parole que l’histoire leur avait refusée. Aïcha, Rosa, Fatou, Louise… des prénoms simples, mais porteurs de siècles de silence. Leurs voix se lèvent, d’abord timides, puis puissantes, comme un chant qui traverse les frontières et les époques.
      
        Les récits s’entrelacent : le Maghreb rural écrasé par le soleil, les rues sombres d’une capitale coloniale, les îles éloignées où l’exil avait relégué les oubliées. Chacune porte sa blessure, mais aussi une lumière intérieure indestructible. Elles ne se connaissent pas, et pourtant leurs destins s’éclairent mutuellement.
      
        Le livre ne cherche pas la révolte pour elle-même. Il cherche l’écoute. À travers ces trajectoires, il pose une question essentielle : qui décide des histoires qui méritent d’être racontées ? En redonnant une voix à celles qui furent réduites au silence, l’auteur construit une mémoire alternative, fragile et puissante à la fois.
      
        'Voix interdites' n’est pas un manifeste, mais un poème collectif. C’est un chœur de murmures devenu cri, une mélodie ancienne retrouvée. Et en l’écoutant, le lecteur apprend à regarder autrement le monde, avec une attention nouvelle pour toutes ces voix qu’on n’entend pas.`,
        'https://picsum.photos/1920/1074',
      ),
      

      ];

      getWorks():Work[]{
        return [...this.works];
      }

      getWorksById(workId: string):Work{
        const foundWork  = this.works.find(work => work.id === workId);
        if(!foundWork){
            throw new Error('Work not found');
        }
        return foundWork;
      }
}