import { mouse, left, right, Point, sleep,straightTo } from '@nut-tree/nut-js'

async function main() { 
    while (true) {
        const position=await mouse.getPosition();
        await sleep(300);
        console.log(position); 
    }
}

main();