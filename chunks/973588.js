var r = n(621796),
    i = n(172367),
    o = n(169774),
    a = n(596464),
    s = n(352582),
    l = n(358076),
    c = n(467159),
    u = n(843260),
    d = "'",
    f = '/',
    _ = o.isBrowser('Firefox');
function p(e) {
    return _ && (e == d || e == f);
}
function h(e, t, n, o, a) {
    var s = r.replaceText(e.getCurrentContent(), e.getSelection(), t, n, o);
    return i.push(e, s, 'insert-characters', a);
}
e.exports = function (e, t) {
    void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
    var n = e._latestEditorState,
        r = t.data;
    if (r) {
        if (e.props.handleBeforeInput && s(e.props.handleBeforeInput(r, n, t.timeStamp))) return void t.preventDefault();
        var o = n.getSelection(),
            d = o.getStartOffset(),
            f = o.getAnchorKey();
        if (!o.isCollapsed()) {
            (t.preventDefault(), e.update(h(n, r, n.getCurrentInlineStyle(), a(n.getCurrentContent(), n.getSelection()), !0)));
            return;
        }
        var _ = h(n, r, n.getCurrentInlineStyle(), a(n.getCurrentContent(), n.getSelection()), !1),
            m = !1;
        if ((m || (m = l(e._latestCommittedEditorState)), !m)) {
            var g = n.getBlockTree(f),
                E = _.getBlockTree(f);
            m =
                g.size !== E.size ||
                g.zip(E).some(function (e) {
                    var t = e[0],
                        n = e[1],
                        i = t.get('start'),
                        o = i + (i >= d ? r.length : 0),
                        a = t.get('end'),
                        s = a + (a >= d ? r.length : 0),
                        l = n.get('start'),
                        c = n.get('end'),
                        u = n.get('decoratorKey');
                    return t.get('decoratorKey') !== u || t.get('leaves').size !== n.get('leaves').size || o !== l || s !== c || (null != u && c - l != a - i);
                });
        }
        if ((m || (m = p(r)), m || (m = c(_.getDirectionMap()).get(f) !== c(n.getDirectionMap()).get(f)), m)) {
            (t.preventDefault(), (_ = i.set(_, { forceSelection: !0 })), e.update(_));
            return;
        }
        ((_ = i.set(_, { nativelyRenderedContent: _.getCurrentContent() })),
            (e._pendingStateFromBeforeInput = _),
            u(function () {
                void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
            }));
    }
};
