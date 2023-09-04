import { mouse, up, left, right, Point, straightTo, sleep, Button,getActiveWindow, getWindows } from '@nut-tree/nut-js'

async function main() {
     const windows=await getWindows();
     console.log([...windows.map(e=>e.title)])
} 
async function checkApp(){
    const windowRef = await getActiveWindow();
    const title=await windowRef.title;
    console.log(title);
    if(title!='Oopz'){
        throw Error();
    }
} 
main();