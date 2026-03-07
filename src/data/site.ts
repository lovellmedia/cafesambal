export const topic = {
  label: 'Regional Sambal Traditions',
  slug: 'regional-sambal-traditions',
};

export const pillarLinks = [
  { label: 'Overview', href: `/${topic.slug}/` },
  { label: 'History', href: `/${topic.slug}/history/` },
  { label: 'Technical', href: `/${topic.slug}/technical-deep-dive/` },
  { label: 'Ontology', href: `/${topic.slug}/ontology/` },
  { label: 'Trends', href: `/${topic.slug}/trends/` },
  { label: 'Tools', href: `/${topic.slug}/tools/` },
  { label: 'Challenges', href: `/${topic.slug}/challenges/` },
];

export const navItems = [
  { label: 'Home', href: '/' },
  ...pillarLinks,
];

export const footerLinks = [
  { label: 'Overview', href: `/${topic.slug}/` },
  { label: 'Tools', href: `/${topic.slug}/tools/` },
  { label: 'Challenges', href: `/${topic.slug}/challenges/` },
];

export const relatedTopics = pillarLinks.slice(1);
