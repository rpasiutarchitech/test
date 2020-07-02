module.exports = {
  name: 'architech-lib25',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/lib25',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
