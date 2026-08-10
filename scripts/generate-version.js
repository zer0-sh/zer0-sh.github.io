#!/usr/bin/env node

const { execSync } = require('child_process');

const git = (cmd) => {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
};

const commit = git('git rev-parse --short HEAD');
const tag = git('git describe --tags --exact-match 2>/dev/null') || git('git describe --tags --abbrev=0 2>/dev/null');
const date = git('git log -1 --format=%cs') || new Date().toISOString().slice(0, 10);

const info = {
  tag: tag || commit || 'dev',
  commit: commit || 'local',
  date,
};

const args = process.argv.slice(2);
if (args.includes('--tag')) {
  console.log(info.tag);
} else if (args.includes('--commit')) {
  console.log(info.commit);
} else if (args.includes('--date')) {
  console.log(info.date);
} else {
  console.log(JSON.stringify(info, null, 2));
}
