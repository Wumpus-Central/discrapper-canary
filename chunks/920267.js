var r = n(172367);
e.exports = function (e, t, n) {
    var i = r.undo(t);
    if ('spellcheck-change' === t.getLastChangeType()) {
        var o = i.getCurrentContent();
        n(r.set(i, { nativelyRenderedContent: o }));
        return;
    }
    if ((e.preventDefault(), !t.getNativelyRenderedContent())) return void n(i);
    (n(r.set(t, { nativelyRenderedContent: null })),
        setTimeout(function () {
            n(i);
        }, 0));
};
