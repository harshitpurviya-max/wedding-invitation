export const weddingConfig = {
  couple: {
    bride: 'BRIDE_NAME',
    groom: 'GROOM_NAME',
    familyTitle: 'The families of',
    subtitle: 'invite you to celebrate their union'
  },
  family: {
    bride: 'BRIDE_FAMILY',
    groom: 'GROOM_FAMILY',
    blessing: 'With love and blessings from the family'
  },
  weddingDate: '29 NOVEMBER — 02 DECEMBER',
  countdownTarget: '2026-12-02T00:00:00+05:30',
  music: {
    title: '',
    audioUrl: '/assets/audio/wedding-song.mp3',
    artist: ''
  },
  venues: {
    rituals: {
      name: '',
      address: '',
      mapUrl: ''
    },
    celebrations: {
      name: '',
      address: '',
      mapUrl: ''
    }
  },
  days: [
    {
      id: 'nov-29',
      date: '29 NOVEMBER',
      title: 'शुभ आरंभ',
      subtitle: '',
      atmosphere: 'courtyard',
      venueId: 'rituals',
      events: [
        {
          id: 'matapujan',
          name: 'Matapujan',
          hindiTitle: 'मातापूजन',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: '',
          note: '',
          atmosphere: 'ritual'
        },
        {
          id: 'mandap',
          name: 'Mandap',
          hindiTitle: 'मंडप',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: '',
          note: '',
          atmosphere: 'ritual'
        }
      ]
    },
    {
      id: 'dec-01',
      date: '01 DECEMBER',
      title: 'उत्सव',
      subtitle: '',
      atmosphere: 'garden',
      venueId: 'celebrations',
      events: [
        {
          id: 'haldi',
          name: 'Haldi',
          hindiTitle: 'हल्दी',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: 'Come dressed in cheerful yellow.',
          note: '',
          atmosphere: 'marigold'
        },
        {
          id: 'mehendi',
          name: 'Mehendi',
          hindiTitle: 'मेहंदी',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: 'Dress in shades of green, especially olive.',
          note: '',
          atmosphere: 'botanical'
        },
        {
          id: 'sangeet',
          name: 'Sangeet',
          hindiTitle: 'संगीत',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: 'Indo-western golden party glam.',
          note: '',
          atmosphere: 'lanterns'
        }
      ]
    },
    {
      id: 'dec-02',
      date: '02 DECEMBER',
      title: 'शुभ विवाह',
      subtitle: '',
      atmosphere: 'royal',
      venueId: 'celebrations',
      events: [
        {
          id: 'engagement',
          name: 'Engagement',
          hindiTitle: 'सगाई',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: 'Rajasthani-themed poshak for women and Jodhpuri for men.',
          note: '',
          atmosphere: 'celebration'
        },
        {
          id: 'faldan',
          name: 'Faldan',
          hindiTitle: 'फलदान',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: '',
          note: '',
          atmosphere: 'ritual'
        },
        {
          id: 'varmala',
          name: 'Varmala',
          hindiTitle: 'वरमाला',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: '',
          note: '',
          atmosphere: 'ceremony'
        },
        {
          id: 'phere',
          name: 'Phere',
          hindiTitle: 'फेरे',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: '',
          note: '',
          atmosphere: 'wedding'
        },
        {
          id: 'reception',
          name: 'Reception',
          hindiTitle: 'समारोह',
          time: '',
          address: '',
          mapUrl: '',
          dressCode: '',
          note: '',
          atmosphere: 'celebration'
        }
      ]
    }
  ],
  travel: {
    title: 'Travel & Stay',
    note: ''
  },
  contacts: [],
  closingMessage: 'आपका आना, हमारी खुशियों को पूरा करेगा।'
};

export default weddingConfig;
