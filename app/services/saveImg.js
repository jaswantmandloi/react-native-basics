import RNFetchBlob from 'rn-fetch-blob'

const imgPath = 'https://bhajandiary.com:9443/wp-content/uploads/2020/01/कदम-कदम-पर-तूने-मुझ-पर-इतने-किए-उपकार-भजन-लिरिक्स-min-324x235.jpg'

//const imgPath = 'https://facebook.github.io/react/logo-og.png'



// import {saveImage} from './app/services/saveImg'

// const [imagePath, setImage]  = useState(false)

//   useEffect(() => {
//     saveImage(setImage)
//   }, [])

//   {imagePath && <View style={styles.sectionContainer}>
//             <Image
//               style={{width: 50, height: 50}}
//               source={{uri:`file://${imagePath}`}}
//             />
//           </View>} 



const getExtention = (filename) => {
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
    undefined;
}

const fileNameToBeSaved = `${new Date().getTime()}.txt`


export const saveImage = (setImage) => {

  // console.log('fs', fs)

  // console.log('ext', getExtention(imgPath))

  let dirs = RNFetchBlob.fs.dirs

  //console.log('dirs', dirs)

  const { CacheDir, PictureDir, DocumentDir, MusicDir, DownloadDir } = dirs

  const dirPath = DocumentDir

  const ext = getExtention(imgPath)

  const { fs } = RNFetchBlob


  
  RNFetchBlob
    .config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      trusty: true,


      //path : CacheDir + `/${new Date().getTime()}.${ext[0]}`,


      // addAndroidDownloads : {
      //   // Show notification when response data transmitted
      //   notification : true,
      //   // Title of download notification
      //   title : 'Great ! Download Success ! :O ',
      //   // File description (not notification description)
      //   description : 'An image file.',
      //   mime : `image/${ext}`
      //   // Make the file scannable  by media scanner
      //   //mediaScannable : true,
      // },

      appendExt: ext[0]


    })
    .fetch('GET', imgPath, {
      //some headers ..
    })
    .then((res) => {
      console.log('res', res)
      // the temp file path
      console.log('The file saved to ', res.path())

      setImage(res.path())

      // console.log('Exists', RNFetchBlob.fs.exists(res.path()).then((exist) => {

      //   console.log(`file ${exist ? '' : 'not'} exists`)

      // }))

      // fs.ls(dirPath)
      // // files will an array contains filenames
      // .then((files) => {
      //   console.log('files list', files)
      // })

      console.log('filename', RNFetchBlob.android.filename)

    }).catch((Error) => {
      console.log('error', Error)
    })


}





const extraCode = () => {

  // fs.stat(dirPath)
  //   .then((stats) => {
  //     console.log('stats', stats)
  //   })
  //   .catch((err) => {

  //     console.log('stats error',err)

  //   })


  RNFetchBlob.fs.mkdir(dirPath + '/jm')
    .then((res) => {

      console.log('mkdir', res)

    })
    .catch((err) => {

      console.log('mkdir error', err)

    })


  const filePath = dirPath + `/jm/${fileNameToBeSaved}`


  fs.createFile(filePath, 'foo', 'utf8').then((res) => {

    console.log('The file saved to 1', res)


    fs.exists(filePath)
      .then((exist) => {
        console.log(`file ${exist ? '' : 'not'} exists`)
      })
      .catch((error) => {
        console.log('exists error', error)
      })

    fs.ls(dirPath+'/jm')
      // files will an array contains filenames
      .then((files) => {
        console.log('files list', files)
      })


  }).catch((error) => {
    console.log('Error creating file', error)
  })





  // fs.writeFile(filePath, 
  // 'foo', 'utf8')
  //             .then((res)=>{ 

  //               console.log('The file saved to ', res)

  //              })

  return


}

