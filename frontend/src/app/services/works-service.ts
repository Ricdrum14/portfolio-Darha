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
          'kklacm,.SXKL;M,.SXM,.ASXM,.ASCM,SNAMNJNM WA SXN XSAN SXm<JFNFHNRNVNKEKJRFKJNRFKJEDAJKWSJ,MWDASN,MDS',
          'https://picsum.photos/1920/1083',
        ),
        new Work(
          'LUMIÈRE D\'ÉTÉ',
          'Un recueil de poèmes célébrant la beauté et la lumière estivale.',
          'KAEFJA.AEMKRMK,.SECL;WADFOKLWRGV;WAKDEFSRDGJREKLWAESRKTDRKSELA;WDEFLRKTDGJREKWLRKTRELAERKRFELKTEL',
          'https://picsum.photos/1920/1081',
        ),
        new Work(
          'RÊVES D\'AUBE',
          'Un roman d’espoir et de renouveau. Jules rêves rencontrent réalité.',
          'jkfxcjnklmkjrdkfnlmrjenkdflmkrjentkdfmlksrejnkdfmlsdkrejkdfnlskdroedjfklskdmroejdflskdrejdkfdsnwirkjfij',
          'https://picsum.photos/1920/1079',
        
        ),
        new Work(
            'ENTRELACS',
            'Une fresque familiale complexe où s’entrelacent les liens secrets et les non-dits.',
            'ksrldgskalwdksfjldk;dlhjkdfdbhrfsehijrfhersfkjeiwhsdkjfwrhskdjnrisdkjrhdcwirhdkjwrhkdjweirh',
            'https://picsum.photos/1920/1078',
          ),new Work(
            'LE MURMURE DES ÉTOILES',
            'Un recueil de poésie sur le silence de la nuit et la beauté du cosmos.',
            'Chaque poème évoque une constellation, une histoire oubliée, un rêve suspendu entre deux astres.',
            'https://picsum.photos/1920/1077'
          ),
          new Work(
            'SABLES OUBLIÉS',
            'Un roman contemplatif sur les souvenirs enfouis et le passage du temps.',
            'Au fil des pages, le désert devient le miroir de l’âme, mouvant, vaste et imprévisible.',
            'https://picsum.photos/1920/1076'
          ),
          new Work(
            'L’OMBRE DES SAISONS',
            'Une fresque poétique qui explore les cycles de la nature et de l’humain.',
            'Printemps, été, automne, hiver… chaque saison révèle une part de notre lumière et de notre obscurité.',
            'https://picsum.photos/1920/1075'
          ),
          new Work(
            'VOIX INTERDITES',
            'Un roman poignant sur des femmes dont les histoires ont été réduites au silence.',
            'Entre passé colonial et renaissance intime, elles retrouvent leurs voix.',
            'https://picsum.photos/1920/1074'
          ),
          new Work(
            'DERRIÈRE LE MIROIR',
            'Un thriller psychologique entre rêve et réalité.',
            'Un écrivain cherche l’inspiration, mais les personnages qu’il crée prennent vie… et le manipulent.',
            'https://picsum.photos/1920/1073'
          ),
          new Work(
            'L’HORIZON DES POSSIBLES',
            'Une nouvelle utopique sur un monde réconcilié avec la poésie.',
            'Et si chaque matin, les infos étaient remplacées par des vers ? Et si la douceur guidait nos choix ?',
            'https://picsum.photos/1920/1072'
          ),
          new Work(
            'LE JARDIN DES MÉMOIRES',
            'Une plongée intimiste dans le journal d’une vieille dame qui se souvient de ses amours.',
            'Un texte doux, pudique, sincère, comme une caresse sur l’oubli.',
            'https://picsum.photos/1920/1071'
          ),
          new Work(
            'FRAGMENTS DE VÉRITÉ',
            'Une série de textes courts, entre prose poétique et réflexions personnelles.',
            'À lire, relire, souligner… chaque phrase est une étincelle dans la nuit.',
            'https://picsum.photos/1920/1070'
          )

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