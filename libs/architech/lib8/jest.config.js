module.exports = {
  name: 'architech-lib8',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/lib8',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
