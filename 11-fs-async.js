const { readFile, writeFile } = require('fs')
readFile('./check/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./check/sec.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const sec = result;
        writeFile('./check/third.txt',
            `hello this is third of:  ${first},${sec}`,
            (err, result) => {
                if (err) {
                    return;
                }
                else {
                    consolr.log(result);
                }
            })
    })
}
)