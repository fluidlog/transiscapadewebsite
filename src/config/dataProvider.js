import dataProvider from '../dataProvider/dataProvider';
import ontologies from './ontologies.json';

export default dataProvider({
  dataServers: {
    av: {
      name: 'Assemblée Virtuelle',
      baseUrl: 'https://data.virtual-assembly.org/',
      default: true,
    },
  },
  resources: {
    Project: {
      types: ['pair:Project'],
    },
    Organization: {
      types: ['pair:Organization'],
      list: {
        filter: {
          'pair:partnerOf': 'https://data.virtual-assembly.org/organizations/assemblee_virtuelle',
        },
      },
    },
    Person: {
      types: ['pair:Person'],
    },
    MembershipAssociation: {
      types: ['pair:MembershipAssociation'],
    },
    BlogPost: {
      types: ['pair:Document'],
      list: {
        filter: {
          'pair:hasType': 'https://data.virtual-assembly.org/types/blogarticle',
        },
      },
    },
    Document: {
      types: ['pair:Document'],
    },
    Theme: {
      types: ['pair:Theme'],
    },
  },
  ontologies,
  jsonContext: [
    'https://www.w3.org/ns/activitystreams',
    'https://data.virtual-assembly.org/.well-known/context.jsonld',
  ],
});
