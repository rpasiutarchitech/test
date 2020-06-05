module.exports = {
  name: 'web-icann-test4-featuretest4',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-icann/test4/featuretest4',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
