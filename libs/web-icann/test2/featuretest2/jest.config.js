module.exports = {
  name: 'web-icann-test2-featuretest2',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-icann/test2/featuretest2',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
