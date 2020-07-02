module.exports = {
  name: 'architech-lib10',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/lib10',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
