module.exports = {
  name: 'architech-lib26',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/lib26',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
