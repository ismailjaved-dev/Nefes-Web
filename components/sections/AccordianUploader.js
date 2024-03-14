"use client";
import React, { useState } from "react";
import { dataUploader } from "../../utils/helpers";
import { usePathname } from 'next/navigation';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AccordianUploader = () => {

    const pathName = usePathname().replace("/admin/", "");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [accordian, setAccordian] = useState("selling");


    const collectionDataUploader = async () => {
        let data = { name, description, accordian };
        const func = await dataUploader(pathName, data);
        await console.log(func == "Data Uploaded" ? "Data Uploaded" : "failed");
    };

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
                                <>
                                    <Label className='text-black-200'>Select Page</Label>
                                    <select value={accordian} onChange={(e) => setAccordian(e.target.value)} className="w-full mb-4 p-2 border border-grayDark rounded-md">
                                        <option value="Selling" className="p-2">Selling</option>
                                        <option value="Outsourcing" className="p-2">Outsourcing</option>
                                    </select>
                                    <br />
                                    <Label htmlFor="name" className='text-black-200'>Name</Label>
                                    <Input placeholder='Name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                                    <br />
                                    <Label htmlFor="description" className='text-black-200'>Description</Label>
                                    <Input placeholder='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                                    <br />
                                </>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => collectionDataUploader()}>Add</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}

export default AccordianUploader
