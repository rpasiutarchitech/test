module.exports = {
  name: 'web-icann-test1-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-icann/test1/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
