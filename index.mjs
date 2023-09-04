import { mouse, up, left, right, Point, straightTo, sleep, Button,getActiveWindow } from '@nut-tree/nut-js'
let successCount=0;
async function main() {
    updateConfig();
    const count = 100000;
    for (let index = 0; index < count; index++) {
        await loop();
        console.log(`count success:${successCount} current:${index}  all:${count}`);
    }
}

function updateConfig(){
    mouse.config.mouseSpeed=100000;
}
async function loop() {
    await startApp();
    await sleep(10000);
    await checkApp();
    await exitApp();
}
async function startApp() {
    const target = new Point(213, 645);
    await mouse.move(straightTo(target));
    await mouse.doubleClick(Button.LEFT);
}
async function checkApp(){
    const windowRef = await getActiveWindow();
    const title=await windowRef.title;
    console.log(title);
    if(title!='Oopz'){
        // throw Error();
    }else{
        successCount++;
    }
}
async function exitApp() {
    const targetIconOnMissionBar = new Point(1680, 1055);
    await mouse.move(straightTo(targetIconOnMissionBar));
    await mouse.rightClick();
    await sleep(400);
    await mouse.move(up(10));
    await mouse.move(right(10));
    await mouse.leftClick();
}
main();