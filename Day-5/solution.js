// Challenge 5:
// Write a JavaScript exercise to get the filename extension.

function getFileExtension(fileName) {
    const dotIndex = fileName.lastIndexOf('.')
    if (dotIndex === 0 || dotIndex === -1) 
        return ''
    return fileName.slice(dotIndex + 1)
}

console.log(getFileExtension("mojo.🔥"))