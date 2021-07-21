const { BlobServiceClient } = require('@azure/storage-blob')
const { uuid: v4 } = require('uuidv4')
const multer = require('@koa/multer');
const fs = require('fs')

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

    await blockBlobClientTemp.upload(fileBuffer, fileBuffer.length)

    return {
      message: 'File in Storage!'
    }
  }
}
