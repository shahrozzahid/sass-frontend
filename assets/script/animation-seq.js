const ALICE_TUMBLING = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' },
    { transform: 'rotate(0) scale(1)' }
];



const ALICE_TIMING = {
    duration   : 2000,
    iterations : 1,
    fill       : 'forwards'
}

const ALICE_1 = document.querySelector("#alice1");
const ALICE_2 = document.querySelector("#alice2");
const ALICE_3 = document.querySelector("#alice3");



async function animationSequence() {
    try{
        await ALICE_1.animate(ALICE_TUMBLING, ALICE_TIMING).finished.then(() => {
            ALICE_2.animate(ALICE_TUMBLING, ALICE_TIMING).finished.then(() => {
                ALICE_3.animate(ALICE_TUMBLING, ALICE_TIMING);
            });
        });
        // setTimeout(animationSequence, 6000);

    }catch(error)
    {
        console.error(`Error animating Alices: ${error}`);
    }
}

animationSequence();