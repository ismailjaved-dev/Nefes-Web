"use client";
import React, { useState, useEffect } from "react";
import { dataUploader, imgUploader } from "../../utils/helpers";
import { usePathname } from 'next/navigation';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../app/firebaseConfig";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { ReloadIcon } from '@radix-ui/react-icons';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";

const Uploader = () => {

  const pathName = usePathname().replace("/admin/", "");


  const [galleryData, setGalleryData] = useState([]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState([]);
  const [imgUpload, setImgUpload] = useState(false);

  useEffect(() => {
    const uploadImg = async () => {

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
              setImgUrl(downloadURL)
              setImgUpload(false)
            });
          }
        );
      } catch (error) {
        console.log(error)
      }

    };

    imgUpload && uploadImg();
  }, [file]);

  const collectionDataUploader = async () => {
    let data = pathName == 'gallery' ? { name, address, imgUrl } : { imgUrl };
    const func = await dataUploader(pathName, data);
    await console.log(func == "Data Uploaded" ?
      clearFunc()
      : "failed");
  };

  const clearFunc = () => {
    setAddress("")
    setName('')
    setImgUrl("")
    setFile([])
  }


  return (
    <div className="p-5 flex justify-between">
     
     <h3 className="text-2xl">  {pathName} Table</h3>


      <AlertDialog>
        <AlertDialogTrigger> 
          {/* <Button>Add</Button> */}
          Add
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Gallery Story</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                {
                  pathName == 'gallery' &&
                  <>
                    <Label htmlFor="name" className='text-black-200'>Name</Label>
                    <Input placeholder='Name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <Label htmlFor="address" className='text-black-200'>Address</Label>
                    <Input placeholder='Address' id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <br />
                  </>
                }
                <Label htmlFor="picture">Picture</Label>

                <div className='relative'>
                  {
                    imgUpload && <ReloadIcon className='upload-icon' />
                  }
                  <Input id="picture" type="file" onChange={(e) => { setFile(e.target.files[0]); setImgUpload(true) }} />
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {
              imgUpload ?
                <AlertDialogAction disabled onClick={() => updateData(pathName, editData)}>Save</AlertDialogAction> :
                <AlertDialogAction onClick={() => collectionDataUploader()}>Add</AlertDialogAction>
            }
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}

export default Uploader
