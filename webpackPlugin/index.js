const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')

let watching = false
const cache = {
  importRedux: null,
  combineRedux: null,
  importSaga: null,
  combineSaga: null,
}

function reduxSagaPlguin(folder, connectFile) {
  this.folder = folder
  this.connectFile = connectFile
  console.log('folder', folder)
}

reduxSagaPlguin.prototype.apply = function (compiler) {
  const hooks = compiler.hooks
  // 指定一个挂载到 webpack 自身的事件钩子。
  if(hooks) {
    hooks.compile.tap('reduxSagaPlguin', () => {
      console.log('plugin stack')
      addWatcher(this.folder, this.connectFile)
    })  
  } else {
    compiler.plugin('emit', function (
      compilation, /* 处理 webpack 内部实例的特定数据。*/
      callback,
    ) {
      addWatcher(this.folder, this.connectFile)
      // 功能完成后调用 webpack 提供的回调。
      callback()
    })
  }
}

reduxSagaPlguin.prototype.convert = convertingFiles

function addWatcher(folder, connectFile) {
  console.log('add Watcher')
  convertingFiles(folder, connectFile)
  if (!watching) {
    chokidar
      .watch(folder, {
        ignored: /\.(jsx|scss|css)$/,
      })
      .on('all', (event, path) => {
        convertingFiles(folder, connectFile)
      })
    watching = true
  }
}

function readDir(folder) {
  const receivedFiles = []
  const files = fs.readdirSync(folder)
  files.forEach(function (filename) {
    const filePath = path.join(folder, filename)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      const f = readDir(filePath)
      receivedFiles.push(...f)
    } else {
      receivedFiles.push(filePath)
    }
  })
  return receivedFiles
}

function convertingFiles(folder, connectFile) {
  const files = readDir(folder)
  const reduxFiles = files.filter((file) => /redux\.ts$/.test(file))
  console.log('folder')
  console.log(folder, reduxFiles, end)
  convertRedux(reduxFiles, connectFile)
}

function convertRedux(files, connectFile) {
  console.log('redux files', files)
  let importRedux = ''

  // handle redux files
  files.forEach((file) => {
    const p = file.replace(folder, 'pages').replace('.js', '')

    importRedux += `import '${p}'\n`
  })

  if (cache.importRedux !== importRedux) {
    const replaceTo =
      '// {{__IMPORT_REDUX_START__}}\r\n' +
      importRedux +
      '\r\n // {{__IMPORT_REDUX_END}}'
    const reg = /\/\/ {{__IMPORT_REDUX_START__}}([\w\W]*)?\/\/ {{__IMPORT_REDUX_END__}}/gi

    let string = fs.readFileSync(connectFile, 'utf-8')
    string = string.replace(reg, replaceTo)
    fs.writeFileSync(connectFile, string, 'utf8')
    console.log('combine redux files...'.rainbow)
    cache.importRedux = importRedux
  }
}

module.exports = reduxSagaPlguin
