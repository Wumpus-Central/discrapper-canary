n.d(t, { J: () => a }), n(415506);
var r = n(231338);
function a(e) {
    let t = !1;
    if ('object' == typeof window.navigator && 'clipboard' in window.navigator)
        try {
            let n = new ClipboardItem({ 'text/plain': e });
            window.navigator.clipboard.write([n]).catch(r.dG), (t = !0);
        } catch (e) {}
    if (t) return t;
    let n = document.body;
    if (null == n) throw Error('[Utils] ClipboardUtils.copy(): assert failed: document.body != null');
    let a = document.createRange(),
        l = window.getSelection(),
        i = document.createElement('textarea');
    return (i.value = e), (i.contentEditable = 'true'), (i.style.visibility = 'none'), n.appendChild(i), a.selectNodeContents(i), null == l || l.removeAllRanges(), null == l || l.addRange(a), i.focus(), i.setSelectionRange(0, e.length), (t = document.execCommand('copy')), n.removeChild(i), t;
}
