import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pkgPath = process.cwd();
const pkg = require(`${pkgPath}/package.json`);

axios.post(
  'https://slack.com/api/chat.postMessage',
  {
    channel: 'rocketform',
    text: `The public package ${pkg.name} v${pkg.version} has been released :)`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `The public package *${pkg.name} v${pkg.version}* has been released :)`,
        },
      },
    ],
    username: 'Airtec - Notifier [NPM]',
    icon_url: 'https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
    },
  }
);
