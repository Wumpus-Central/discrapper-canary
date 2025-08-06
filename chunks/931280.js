var r = n(621796),
    i = n(172367),
    o = n(292489),
    a = n(458545),
    s = n(685536),
    l = n(302354);
function c(e) {
    var t = r.removeRange(e.getCurrentContent(), e.getSelection(), 'forward');
    return i.push(e, t, 'remove-range');
}
e.exports = function (e, t) {
    var n,
        r = e._latestEditorState,
        i = r.getSelection(),
        u = t.target;
    if (i.isCollapsed()) return void t.preventDefault();
    if (l(u)) {
        var d = u;
        n = s(o.getScrollParent(d));
    }
    var f = a(r);
    (e.setClipboard(f),
        e.setMode('cut'),
        setTimeout(function () {
            (e.restoreEditorDOM(n), e.exitCurrentMode(), e.update(c(r)));
        }, 0));
};
