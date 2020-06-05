module.exports = {
  name: 'testicann',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/testicann',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
