module.exports = {
  name: 'architech-lib20',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/lib20',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
