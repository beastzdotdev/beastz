export const rootState = {
  data: [
    {
      title: 'Vault',
      subHeader: 'React, TS, Blueprint, Zod, Formik',
      description:
        'The secure file storage, go to solution inspired by the user-friendliness of Google Drive, enhanced with robust features like encryption and public file sharing',
      link: 'https://vault.beastz.dev',
      githubLink: 'https://github.com/beastzdotdev/beastz-vault',

      isSoonCompleted: false,
      mainClassList: ['shadow-cyan-500/20', 'dark:shadow-cyan-500/30', 'text-cyan-500'],
      soonClassList: [],
    },
    {
      title: 'Doc',
      subHeader: 'React, TS, Blueprint, Socket.io',
      description:
        'Minimalist collaborative editing tool, built with react and powered by socket.io',
      link: 'https://doc.beastz.dev',
      githubLink: 'https://github.com/beastzdotdev/beastz-doc',

      isSoonCompleted: false,
      mainClassList: ['shadow-emerald-500/20', 'dark:shadow-emerald-500/30', 'text-emerald-500'],
      soonClassList: [],
    },
    {
      title: 'Util',
      subHeader: '...',
      description: 'Util helper tools',
      link: 'https://utils.beastz.dev',
      githubLink: 'https://github.com/beastzdotdev/beastz-utils',

      isSoonCompleted: true,
      mainClassList: ['shadow-red-500/20', 'dark:shadow-red-500/30', 'text-red-500'],
      soonClassList: ['bg-red-500'],
    },
  ],
};

// shadow-${e.color}-500/20
// dark:shadow-${e.color}-500/30
// text-${e.color}-500
