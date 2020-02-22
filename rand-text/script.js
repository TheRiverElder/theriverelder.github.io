const iptPattern = document.getElementById('iptPattern');
const iptKey = document.getElementById('iptKey');
const spanOutput = document.getElementById('spanOutput');
const ovlResult = document.getElementById('ovlResult');

spanOutput.addEventListener('click', event => {
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
});

let patternManager = new PatternManager();

let patternChanged = true;

function generate() {
    let data = iptPattern.value;
    let key = iptKey.value;
    if (!key) {
        return;
    }

    spanOutput.innerText = '生成中……';

    if (patternChanged) {
        patternManager.clear();
        patternManager.compile(data);
        patternManager.prepare();
        patternChanged = false;
    }

    spanOutput.innerText = patternManager.generate(key, {});
    setResult(true);
}

function setResult(visible) {
    ovlResult.style.display = visible ? 'block' : 'none';
}


function copyPattern() {
    if (window.navigator.clipboard.writeText) {
        window.navigator.clipboard.writeText(iptPattern.value);
    } else {
        iptPattern.select();
        window.document.execCommand('Copy');
    }
}

function pastePattern() {
    if (confirm('这将会覆盖当前所有模板！')) {
        window.navigator.clipboard.readText().then(clipText => {
            iptPattern.value = clipText;
        });
    }
}

function clearPattern() {
    if (iptPattern && confirm('确定清空？请对重要数据做好备份，数据会永久消失！')) {
        iptPattern.value = '';
    }
}