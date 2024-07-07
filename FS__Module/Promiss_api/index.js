import fs from 'fs/promises'

// try {
//   await fs.mkdir('D:\\Dev\\nodejs')
//   console.log('folder created........')
// } catch (err) {
//   console.log(err)
// }

// try {
//   await fs.mkdir('D:\\Dev\\nodejs\\courses')
//   console.log('folder created........')
// } catch (err) {
//   console.log(err)
// }

// try {
//   await fs.mkdir('D:\\Dev\\nodejs\\courses\\Fs_module\\promise_api', {
//     recursive: true,
//   })
//   console.log('folder created........')
// } catch (err) {
//   console.log(err)
// }

//read file
// try {
//   const files = await fs.readdir('D:\\Dev\\nodejs')
//   for (const file of files) {
//     console.log(file)
//   }
//   console.log('folder read........')
// } catch (err) {
//   console.log(err)
// }

//remove file

// try {
//   await fs.rmdir('D:\\Dev\\nodejs\\new folder')
//   console.log('folder remove........')
// } catch (err) {
//   console.log(err)
// }

// create and write file
try {
  await fs.writeFile('ReadME.md', 'hello will replace')
} catch (err) {
  console.log(err)
}

// reading file

try {
  const readData = await fs.readFile('ReadME.md', 'utf-8')
  console.log(readData)
} catch (err) {
  console.log(err)
}

// append file

try {
  const appendData = await fs.appendFile(
    'ReadME.md',
    'hellllllllllllllllllllllllllllllll'
  )
} catch (err) {
  console.log(err)
}

//copy file
try {
  await fs.copyFile('ReadME.md', 'readme1.md')
} catch (err) {
  console.log(err)
}
//get file information

try {
  const info = await fs.stat('readme1.md')
  console.log(info)
  console.log(info.isDirectory())
  console.log(info.isFile())
} catch (err) {
  console.log(err)
}
