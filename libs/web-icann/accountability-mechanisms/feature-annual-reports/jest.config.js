module.exports = {
  name: 'web-icann-accountability-mechanisms-feature-annual-reports',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/web-icann/accountability-mechanisms/feature-annual-reports',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
