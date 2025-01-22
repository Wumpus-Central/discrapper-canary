r.d(n, {
    J: function () {
        return a;
    }
});
var i = r(411104);
function a(e) {
    let n = document.body;
    if (null == n) throw Error('[Utils] ClipboardUtils.copy(): assert failed: document.body != null');
    let r = document.createRange(),
        i = window.getSelection(),
        a = document.createElement('textarea');
    (a.value = e), (a.contentEditable = 'true'), (a.style.visibility = 'none'), n.appendChild(a), r.selectNodeContents(a), null == i || i.removeAllRanges(), null == i || i.addRange(r), a.focus(), a.setSelectionRange(0, e.length);
    let o = document.execCommand('copy');
    return n.removeChild(a), o;
}
