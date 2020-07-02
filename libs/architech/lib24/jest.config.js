module.exports = {
  name: 'architech-lib24',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/lib24',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
