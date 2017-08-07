// Import the wsnotifier
const notifier = require('./notifier');
const KK = require('./krispyKreme');
// Import the krispykreme

function main() {
    notifier.init();
    KK.addHotListener(()=>{
        notifier.broadcast('HOT HOT HOT ');
    })
    KK.addNoneListener(()=>{
        notifier.broadcast('NONE NONE NONE ');
    });

}
main();