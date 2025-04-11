n.d(t, {
    J: () => o,
    a: () => i
}),
    n(415506);
var r = n(231338);
function i() {
    return 'object' == typeof window.navigator && 'clipboard' in window.navigator;
}
function o(e) {
    let t = !1;
    if (i())
        try {
            let n = new ClipboardItem({ 'text/plain': e });
            window.navigator.clipboard.write([n]).catch(r.dG), (t = !0);
        } catch (e) {}
    if (t) return t;
    let n = document.body;
    if (null == n) throw Error('[Utils] ClipboardUtils.copy(): assert failed: document.body != null');
    let o = document.createRange(),
        a = window.getSelection(),
        s = document.createElement('textarea');
    return (s.value = e), (s.contentEditable = 'true'), (s.style.visibility = 'none'), n.appendChild(s), o.selectNodeContents(s), null == a || a.removeAllRanges(), null == a || a.addRange(o), s.focus(), s.setSelectionRange(0, e.length), (t = document.execCommand('copy')), n.removeChild(s), t;
}
