module.exports = {
  name: 'web-icann-accountability-mechanisms-feature-accountability-index',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/web-icann/accountability-mechanisms/feature-accountability-index',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
