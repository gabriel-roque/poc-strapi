const { BlobServiceClient } = require('@azure/storage-blob')
const { v4 } = require('uuid')
const fs = require('fs')
const { Readable } = require('stream')

module.exports = {
  async uploadStorageBase64 (ctx) {
    const blobClient = BlobServiceClient.fromConnectionString(process.env.AZURE_CONNECTION_STRING)
    const blob = blobClient.getContainerClient('poc-strapi');
    const blockBlobClientTemp = blob.getBlockBlobClient(v4());

    const fileBuffer = Buffer.from(ctx.request.body.file, 'base64')

    await blockBlobClientTemp.upload(fileBuffer, fileBuffer.length)

    return {
      message: 'File in Storage!'
    }
  },

  async uploadStorageMultiPart (ctx) {
    const blobClient = BlobServiceClient.fromConnectionString(process.env.AZURE_CONNECTION_STRING)
    const blob = blobClient.getContainerClient('poc-strapi');
    const blockBlobClientTemp = blob.getBlockBlobClient(v4());

    const fileBuffer = fs.readFileSync(ctx.request.files.file.path)

    // const ONE_MEGABYTE = 1024 * 1024;
    // const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };

    await blockBlobClientTemp.upload(fileBuffer, fileBuffer.length)
    // const stream = Readable.from(fileBuffer.toString());
    // await blockBlobClientTemp.uploadStream(stream, uploadOptions.bufferSize, uploadOptions.maxBuffers)

    return {
      message: 'File in Storage!'
    }
  }
}
