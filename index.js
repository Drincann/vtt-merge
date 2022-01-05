const fs = require('fs');

const args = (() => {
    const program = require('commander');
    program.version('1.0.0');
    program.option('-i, --input <path...>', '输入 vtt 字幕文件名');
    program.option('-o, --output <path>', '输出合成的 vtt 字幕文件名');


    program.parse(process.argv);
    const opts = program.opts();
    // 检验
    if (!opts.input) {
        console.log('请输入 vtt 字幕文件名');
        process.exit(1);
    }

    if (opts.input?.length != 2) {
        console.log('请输入两个 vtt 字幕文件名');
        process.exit(1);
    }

    if (!opts.output) {
        console.log('请输入 vtt 字幕文件名');
        process.exit(1);
    }

    return opts;
})();

const input = args.input;
const output = args.output;

const iterator = (arr) => {
    let index = 0;
    return () => arr.length <= index ? null : arr[index++];
}

function merge(inputVttList, outputVttFilename) {
    const aboveLineSrc = inputVttList.shift();
    const belowLineSrc = inputVttList.shift();

    const belowLineList = belowLineSrc.match(/(\n[0-9]{1,4}\n.*\n)(.*)/g)
        .map((line) => line.match(/(\n[0-9]{1,4}\n.*\n)(.*)/)[2]);


    const firstIt = iterator(belowLineList);

    const replaced =
        `WEBVTT
        ${aboveLineSrc.match(/(\n[0-9]{1,4}\n.*\n)(.*)/g).map((line) => line.replace(/(\n[0-9]{1,4}\n.*\n.*)/, '$1\n' + firstIt())).join('\n')}
    `

    fs.writeFileSync(outputVttFilename, replaced);
}

merge(input.map((file) => fs.readFileSync(file, 'utf8')), output);
