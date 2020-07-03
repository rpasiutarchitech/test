module.exports = {
  name: 'architech-publishablelib1',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/architech/publishablelib1',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
