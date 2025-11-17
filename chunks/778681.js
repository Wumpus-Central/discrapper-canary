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
    _ = n(185546);
function p(e, t, n) {
    var r = o.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
    return l.push(e, r.set("entityMap", n), "insert-fragment");
}
function h(e, t) {
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
        var m = n.getFiles(),
            g = n.getText();
        if (m.length > 0) {
            if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(m))) return;
            d(m, function (t) {
                if ((t = t || g)) {
                    var n = e._latestEditorState,
                        a = _(t),
                        d = i.create({
                            style: n.getCurrentInlineStyle(),
                            entity: u(n.getCurrentContent(), n.getSelection()),
                        }),
                        f = c.getCurrentBlockType(n),
                        p = s.processText(a, d, f),
                        h = r.createFromArray(p),
                        m = o.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h);
                    e.update(l.push(n, m, "insert-fragment"));
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
        if ((b && (E = _(b)), !e.props.stripPastedStyles)) {
            var v = e.getClipboard();
            if (n.isRichText() && v) {
                if (-1 !== y.indexOf(e.getEditorKey()) || (1 === E.length && 1 === v.size && v.first().getText() === b))
                    return void e.update(p(e._latestEditorState, v));
            } else if (v && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && h(E, v))
                return void e.update(p(e._latestEditorState, v));
            if (y) {
                var I = s.processHTML(y, e.props.blockRenderMap);
                if (I) {
                    var T = I.contentBlocks,
                        S = I.entityMap;
                    if (T) {
                        var A = r.createFromArray(T);
                        e.update(p(e._latestEditorState, A, S));
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
                R = s.processText(E, C, N),
                P = r.createFromArray(R);
            e.update(p(e._latestEditorState, P));
        }
    }
};
