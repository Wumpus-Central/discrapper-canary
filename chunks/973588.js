var n = r(621796),
    i = r(172367),
    o = r(169774),
    a = r(596464),
    u = r(352582),
    s = r(358076),
    c = r(467159),
    l = r(843260),
    f = o.isBrowser('Firefox');
function p(t, e, r, o, a) {
    var u = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
    return i.push(t, u, 'insert-characters', a);
}
t.exports = function (t, e) {
    void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0));
    var r = t._latestEditorState,
        n = e.data;
    if (n) {
        if (t.props.handleBeforeInput && u(t.props.handleBeforeInput(n, r, e.timeStamp))) return void e.preventDefault();
        var o = r.getSelection(),
            h = o.getStartOffset(),
            d = o.getAnchorKey();
        if (!o.isCollapsed()) {
            e.preventDefault(), t.update(p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !0));
            return;
        }
        var g = p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !1),
            y = !1;
        if (!(y = s(t._latestCommittedEditorState))) {
            var v = r.getBlockTree(d),
                m = g.getBlockTree(d);
            y =
                v.size !== m.size ||
                v.zip(m).some(function (t) {
                    var e = t[0],
                        r = t[1],
                        i = e.get('start'),
                        o = i + (i >= h ? n.length : 0),
                        a = e.get('end'),
                        u = a + (a >= h ? n.length : 0),
                        s = r.get('start'),
                        c = r.get('end'),
                        l = r.get('decoratorKey');
                    return e.get('decoratorKey') !== l || e.get('leaves').size !== r.get('leaves').size || o !== s || u !== c || (null != l && c - s != a - i);
                });
        }
        if ((y || (y = f && ("'" == n || '/' == n)), y || (y = c(g.getDirectionMap()).get(d) !== c(r.getDirectionMap()).get(d)), y)) {
            e.preventDefault(), (g = i.set(g, { forceSelection: !0 })), t.update(g);
            return;
        }
        (t._pendingStateFromBeforeInput = g = i.set(g, { nativelyRenderedContent: g.getCurrentContent() })),
            l(function () {
                void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), (t._pendingStateFromBeforeInput = void 0));
            });
    }
};
