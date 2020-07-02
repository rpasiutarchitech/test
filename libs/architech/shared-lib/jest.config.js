module.exports = {
  name: 'architech-shared-lib',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/shared-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
