import { useEffect, useState } from 'react';
import { imgDb, labelDb } from './firebaseConfig';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Button, Input, Stack } from '@mantine/core';

function StoreInFirebase({ onDataStored }) {
    const [label, setLabel] = useState("")
    const [coordinates, setCoordinates] = useState("")
    const [img, setImg] = useState("")
    const [data, setData] = useState([])


    const handleUpload = (e) => {
        console.log(e.target.files[0])
        const imgs = ref(imgDb, `Imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            console.log(data, "Imgs")
            getDownloadURL(data.ref).then(url => {
                console.log(url, "url")
                setImg(url)
            })
        })
    }

    const handleClick = async () => {
        const valRef = collection(labelDb, "labels")
        await addDoc(valRef, { labelVal: label, coordinatesVal: coordinates, imgUrl: img })
        alert("Data Stored")
    }

    const getData = async () => {
        const valRef = collection(labelDb, "labels")
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val => (
            { ...val.data(), id: val.id }))
        setData(allData)
        console.log(dataDb)
        onDataStored(allData);
    }

    useEffect(() => {
        getData()
    })

    return (
        <div>
            <Stack
                h={300}
                bg="var(--mantine-color-body)"

            >
                <Input placeholder='Crop Name' type="text" onChange={(e) => setLabel(e.target.value)} />
                <Input placeholder='Coordinates' type="text" onChange={(e) => setCoordinates(e.target.value)} />
                <Input type="file" onChange={(e) => handleUpload(e)} />
                <Button onClick={handleClick}>Add</Button>
            </Stack>

            {/* {
                data.map(val => (
                    <div>
                        <h1>{val.labelVal}</h1>
                        <h1>{val.coordinatesVal}</h1>
                        <img src={val.imgUrl} alt='' height="200px" width="100px" />
                    </div>
                ))
            } */}
        </div>



    )
}
export default StoreInFirebase;

