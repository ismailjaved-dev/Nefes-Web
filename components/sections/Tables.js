"use client"
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { collection, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../app/firebaseConfig";
import { db } from "../../app/firebaseConfig";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrashIcon, Pencil2Icon, ReloadIcon } from '@radix-ui/react-icons';
import { deleteData, updateData } from '../../utils/helpers'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image';

const Tables = () => {


  const [data, setData] = useState([]);
  const [file, setFile] = useState([]);
  const [imgUpload, setImgUpload] = useState(false);
  const [editData, setEditData] = useState({ name: '', address: '', imgUrl: "" })
    const [loading, setLoading] = useState(true) 

  const pathName = usePathname().replace("/admin/", "");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let DataList = []
      try {
        const dataSnapshot = await getDocs(collection(db, pathName));
        dataSnapshot.forEach((doc) => {
          DataList.push(doc.data());
        });

        setData(DataList)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    fetchData()
  }, []);


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
              setEditData({ ...editData, imgUrl: downloadURL })
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




  return (
    <>
      <section className="flex justify-center px-5 overflow-scroll">  
        <div className='flex justify-center w-full'>
              
        {
        loading ?
        
          <Image 
          src={'/spinner.svg'}
          alt='spinner'
          width={80}
          height={100}
          priority
          className='spinner'
          />
        : 
         data.length == 0 ? 
         <p>{pathName} table is empty</p>
         :
         <Table className='table justify-center'>
         <TableCaption>A list of {pathName} Data.</TableCaption>
         <TableHeader>
           <TableRow>
             <TableHead className="w-[100px]">#</TableHead>
             <TableHead >id</TableHead>
             {pathName !== 'accordian' && <TableHead>Img</TableHead>}
             {pathName !== 'carousel' && <TableHead>Name</TableHead>}
             {pathName == 'gallery' && <TableHead>Address</TableHead>}
             {pathName == 'accordian' && <TableHead>Description</TableHead>}
             {pathName == 'accordian' && <TableHead>Page</TableHead>}
 
             <TableHead>Actions</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           {data.map((response, index) => (
             <TableRow key={index + 1}>
               <TableCell className="font-medium">{index + 1}</TableCell>
               <TableCell className="font-medium">{response.id}</TableCell>
               {pathName !== 'accordian' && <TableCell>
                 {
                   response.imgUrl == "" ?
                     <img src='https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg' width={200} height={150} className='rounded-md' />
                     :
                     <img src={response.imgUrl} className='rounded-md object-cover table-img' />}
 
               </TableCell>}
               {
                 pathName !== 'carousel' &&
                 <TableCell className="font-medium">{response.name}</TableCell>
               }
               {pathName == 'gallery' && <TableCell>{response.address}</TableCell>}
               {pathName == 'accordian' && <TableCell>{response.description}</TableCell>}
               {pathName == 'accordian' && <TableHead>{response.accordian}</TableHead>}
               <TableCell className={`flex items-center gap-2 ${response.imgUrl && 'flex h-[200px] items-center justify-center'}`}>
                 <AlertDialog>
                   <AlertDialogTrigger> <TrashIcon /></AlertDialogTrigger>
                   <AlertDialogContent>
                     <AlertDialogHeader>
                       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                       <AlertDialogDescription>
                         This action cannot be undone. This will permanently delete your data
                         and remove it from our servers.
                       </AlertDialogDescription>
                     </AlertDialogHeader>
                     <AlertDialogFooter>
                       <AlertDialogCancel>Cancel</AlertDialogCancel>
                       <AlertDialogAction onClick={() => deleteData(pathName, response.id)}>Continue</AlertDialogAction>
                     </AlertDialogFooter>
                   </AlertDialogContent>
                 </AlertDialog>
                 <AlertDialog>
                   <AlertDialogTrigger onClick={() => setEditData(response)}><Pencil2Icon /></AlertDialogTrigger>
                   <AlertDialogContent>
                     <AlertDialogHeader>
                       <AlertDialogTitle>Edit {pathName}</AlertDialogTitle>
                       <AlertDialogDescription>
                         {
                           pathName == 'accordian' &&
                           <>
                             <Label className='text-black-200'>Select Page</Label>
                             <select value={editData.accordian} onChange={(e) => setEditData({ ...editData, accordian: e.target.value })} className="w-full mb-4 p-2 border border-grayDark rounded-md">
                               <option value="Selling" className="p-2">Selling</option>
                               <option value="Outsourcing" className="p-2">Outsourcing</option>
                             </select>
                             <br />
                           </>
                         }
                         {
                           pathName !== 'carousel' &&
                           <>
                             <Label htmlFor="name" className='text-black-200'>Name</Label>
                             <Input placeholder='Name' id='name' value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
                             <br />
                           </>
                         }
                         {
                           pathName == 'gallery' &&
                           <>
                             <Label htmlFor="address" className='text-black-200'>Address</Label>
                             <Input placeholder='Address' id='address' value={editData.address} onChange={(e) => setEditData({ ...editData, address: e.target.value })} />
                             <br />
                           </>
                         }
                         {
                           pathName !== 'accordian' &&
                           <>
                             <Label htmlFor="picture">Picture</Label>
 
                             <div className='relative'>
                               {
                                 imgUpload && <ReloadIcon className='upload-icon' />
                               }
                               <Input id="picture" type="file" onChange={(e) => { setFile(e.target.files[0]); setImgUpload(true) }} />
                             </div>
                           </>
                         }
 
                         {
                           pathName == 'accordian' &&
                           <>
                             <Label htmlFor="description" className='text-black-200'>Description</Label>
                             <Input placeholder='description' id='description' value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} />
                             <br />
                           </>
                         }
 
                       </AlertDialogDescription>
                     </AlertDialogHeader>
                     <AlertDialogFooter>
                       <AlertDialogCancel >Cancel</AlertDialogCancel>
                       {
                         imgUpload ?
                           <AlertDialogAction disabled onClick={() => updateData(pathName, editData)}>Save</AlertDialogAction> :
                           <AlertDialogAction onClick={() => updateData(pathName, editData)}>Save</AlertDialogAction>
                       }
                     </AlertDialogFooter>
                   </AlertDialogContent>
                 </AlertDialog>
 
               </TableCell>
 
             </TableRow>
           ))}
         </TableBody>
       </Table>
       }
        </div>
      </section>
    </>
  )

}

export default Tables
