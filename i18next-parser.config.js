module.exports = {
  locales: ['sk'],
  input: '(app|components|modules)/**/*.{tsx,ts}',
  output: './translations/$LOCALE.json',
  // if set to true preserves old values in a separate json file
  createOldCatalogs: false,
  sort: true,
  // makes the translation json file flat
  keySeparator: false, 
}
