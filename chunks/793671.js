var r = n(954055),
    i = n(869639),
    a = n(573750),
    s = n(197576),
    o = n(4323),
    l = n(621064),
    c = n(670200),
    u = n(314069),
    d = "'",
    f = "/",
    p = a.isBrowser("Firefox");

function _(e) {
    return p && (e == d || e == f);
}

function h(e, t, n, a, s) {
    var o = r.replaceText(e.getCurrentContent(), e.getSelection(), t, n, a);
    return i.push(e, o, "insert-characters", s);
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput &&
        (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n = e._latestEditorState,
        r = t.data;
    if (r) {
        if (e.props.handleBeforeInput && o(e.props.handleBeforeInput(r, n, t.timeStamp)))
            return void t.preventDefault();
        var a = n.getSelection(),
            d = a.getStartOffset(),
            f = a.getAnchorKey();
        if (!a.isCollapsed()) {
            t.preventDefault(),
                e.update(h(n, r, n.getCurrentInlineStyle(), s(n.getCurrentContent(), n.getSelection()), !0));
            return;
        }
        var p = h(n, r, n.getCurrentInlineStyle(), s(n.getCurrentContent(), n.getSelection()), !1),
            m = !1;
        if ((m || (m = l(e._latestCommittedEditorState)), !m)) {
            var g = n.getBlockTree(f),
                E = p.getBlockTree(f);
            m =
                g.size !== E.size ||
                g.zip(E).some(function (e) {
                    var t = e[0],
                        n = e[1],
                        i = t.get("start"),
                        a = i + (i >= d ? r.length : 0),
                        s = t.get("end"),
                        o = s + (s >= d ? r.length : 0),
                        l = n.get("start"),
                        c = n.get("end"),
                        u = n.get("decoratorKey");
                    return (
                        t.get("decoratorKey") !== u ||
                        t.get("leaves").size !== n.get("leaves").size ||
                        a !== l ||
                        o !== c ||
                        (null != u && c - l != s - i)
                    );
                });
        }
        if ((m || (m = _(r)), m || (m = c(p.getDirectionMap()).get(f) !== c(n.getDirectionMap()).get(f)), m)) {
            t.preventDefault(),
                (p = i.set(p, {
                    forceSelection: !0,
                })),
                e.update(p);
            return;
        }
        (p = i.set(p, {
            nativelyRenderedContent: p.getCurrentContent(),
        })),
            (e._pendingStateFromBeforeInput = p),
            u(function () {
                void 0 !== e._pendingStateFromBeforeInput &&
                    (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
            });
    }
};
