function r(e) {
    let t = document.body;
    if (null == t) throw Error('[Utils] ClipboardUtils.copy(): assert failed: document.body != null');
    let n = document.createRange(),
        r = window.getSelection(),
        i = document.createElement('textarea');
    (i.value = e), (i.contentEditable = 'true'), (i.style.visibility = 'none'), t.appendChild(i), n.selectNodeContents(i), null == r || r.removeAllRanges(), null == r || r.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
    let o = document.execCommand('copy');
    return t.removeChild(i), o;
}
n.d(t, { J: () => r }), n(411104);
