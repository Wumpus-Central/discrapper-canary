var r = n(126182),
    i = n(50153),
    a = n(198392),
    o = n(720218),
    s = n(155959),
    l = n(384404),
    c = n(705586),
    u = n(520480),
    d = n(527479),
    f = n(262279),
    p = n(185546);
function _(e, t, n) {
    var r = o.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
    return l.push(e, r.set("entityMap", n), "insert-fragment");
}
function m(e, t) {
    return (
        e.length === t.size &&
        t.valueSeq().every(function (t, n) {
            return t.getText() === e[n];
        })
    );
}
e.exports = function (e, t) {
    t.preventDefault();
    var n = new a(t.clipboardData);
    if (!n.isRichText()) {
        var h = n.getFiles(),
            g = n.getText();
        if (h.length > 0) {
            if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(h))) return;
            d(h, function (t) {
                if ((t = t || g)) {
                    var n = e._latestEditorState,
                        a = p(t),
                        d = i.create({
                            style: n.getCurrentInlineStyle(),
                            entity: u(n.getCurrentContent(), n.getSelection()),
                        }),
                        f = c.getCurrentBlockType(n),
                        _ = s.processText(a, d, f),
                        m = r.createFromArray(_),
                        h = o.replaceWithFragment(n.getCurrentContent(), n.getSelection(), m);
                    e.update(l.push(n, h, "insert-fragment"));
                }
            });
            return;
        }
    }
    var E = [],
        b = n.getText(),
        y = n.getHTML(),
        O = e._latestEditorState;
    if (!(e.props.handlePastedText && f(e.props.handlePastedText(b, y, O)))) {
        if ((b && (E = p(b)), !e.props.stripPastedStyles)) {
            var v = e.getClipboard();
            if (n.isRichText() && v) {
                if (-1 !== y.indexOf(e.getEditorKey()) || (1 === E.length && 1 === v.size && v.first().getText() === b))
                    return void e.update(_(e._latestEditorState, v));
            } else if (v && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && m(E, v))
                return void e.update(_(e._latestEditorState, v));
            if (y) {
                var S = s.processHTML(y, e.props.blockRenderMap);
                if (S) {
                    var I = S.contentBlocks,
                        T = S.entityMap;
                    if (I) {
                        var A = r.createFromArray(I);
                        e.update(_(e._latestEditorState, A, T));
                        return;
                    }
                }
            }
            e.setClipboard(null);
        }
        if (E.length) {
            var C = i.create({
                    style: O.getCurrentInlineStyle(),
                    entity: u(O.getCurrentContent(), O.getSelection()),
                }),
                N = c.getCurrentBlockType(O),
                P = s.processText(E, C, N),
                R = r.createFromArray(P);
            e.update(_(e._latestEditorState, R));
        }
    }
};
