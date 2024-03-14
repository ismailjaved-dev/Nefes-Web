import { collection, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../app/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const dataUploader = async (collectionName, data) => {
    const dataList = []
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        dataList.push(doc.data())
    });
    const unique_id = Math.random().toString(16).slice(2)

    const id = dataList.length > 0 ? dataList.pop().id.split('id')[0] == dataList.length + 1 ? dataList.length + 2 + "id" + unique_id : dataList.length + 1 + "id" + unique_id : 1 + "id" + unique_id;

    console.log({ ...data, id: id })

    try {
        const docRef = await setDoc(doc(db, collectionName, id), {
            ...data,
            id: id
        });
        return await 'Data Uploaded'
    } catch (error) {
        console.log(error)
    }
}

const deleteData = async (collectionName, id) => {
    console.log("func calll")
    try {
        await deleteDoc(doc(db, collectionName, id));
        return await 'Data Delected'
    } catch (error) {
        console.log(error)
    }
}

const updateData = async (collectionName, data) => {
    const updatingData = doc(db, collectionName, data.id);
    await updateDoc(updatingData, data);
}


const imgUploader = async (file) => {

    let url;

    const name = file.name.replaceAll(" ", "-");
    const uniqueName = Math.floor(Math.random() * 100 * 100000) + '-' + name;
    const storageRef = ref(storage, uniqueName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    try {
        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        //   setFileLoader(true)
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log('error');
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);
                    url = await downloadURL
                    var a = await downloadURL
                });
            }
        );
    } catch (error) {
        console.log(error)
    }
    return await url
}

export { dataUploader, imgUploader, deleteData, updateData }