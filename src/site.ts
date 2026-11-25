// Edit these to change the name and links shown across the site.
export const SITE = {
  title: 'Catlyn',
  description: 'Notes on building software, agents, and companies.',
  links: [
    { label: 'GitHub', href: 'https://github.com/jackthehuman123' },
    { label: 'RSS', href: '/rss.xml' },
  ],
};

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
