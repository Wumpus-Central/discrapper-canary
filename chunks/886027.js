n.d(t, { Z: () => l }), n(47120);
var i = n(53529),
    r = n(436660),
    a = n(887490),
    s = n(515270);
let o = new Set(['line', 'blockQuote']);
function l(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: s, onChange: o } = e;
    (e.deleteBackward = (n) => {
        let i = a.bN.getCurrentBlock(e);
        if ((null == i ? void 0 : i[0].type) === 'blockQuote') {
            let t = a.M8.toPoint(e.selection);
            if (null != t && a.C0.isFirstChild(i[1], t.path) && 0 === t.offset) {
                r.Q.setNodes(e, { type: 'line' }, { at: i[1] });
                return;
            }
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [s, o] = a.M8.edges(e.selection),
                    l = [s.path[0]],
                    u = a.bN.node(e, l),
                    c = [o.path[0]],
                    d = a.C0.equals(l, c) ? null : a.bN.node(e, c);
                i.T.withSingleEntry(e, () => {
                    (null == u ? void 0 : u[0].type) === 'blockQuote' && a.Jz.isAtStart(s, u) && r.Q.setNodes(e, { type: 'line' }, { at: l }), (null == d ? void 0 : d[0].type) === 'blockQuote' && a.Jz.isAtEnd(o, d) && r.Q.setNodes(e, { type: 'line' }, { at: c }), n(t);
                });
                return;
            }
            n(t);
        }),
        (e.insertBreak = () => {
            let t = a.bN.getCurrentBlock(e);
            if ((null == t ? void 0 : t[0].type) === 'blockQuote') {
                let n = a.M8.toPoint(e.selection);
                if (null == n) return;
                c(e, t, n) ||
                    r.Q.splitNodes(e, {
                        at: n,
                        always: !0
                    });
                return;
            }
            s();
        });
    let l = null,
        d = !0;
    return (
        (e.onChange = () => {
            let t = a.bN.richValue(e);
            (t !== l || e.previewMarkdown !== d) &&
                (i.T.withMergedEntry(e, () => {
                    a.bN.withoutNormalizing(e, () => u(e));
                }),
                (l = t),
                (d = e.previewMarkdown)),
                o();
        }),
        e
    );
}
function u(e) {
    let t = !1;
    for (let l of a.bN.blocks(e)) {
        let [u, c] = l;
        if (!o.has(u.type)) continue;
        let d = {
            path: a.C0.child(c, 0),
            offset: 0
        };
        if ((0, s.iF)(e, d)) {
            'blockQuote' === u.type && (r.Q.setNodes(e, { type: 'line' }, { at: c }), r.Q.insertText(e, '> ', { at: d }));
            continue;
        }
        if ('blockQuote' === u.type || a.bN.areStylesDisabled(e)) continue;
        let f = u.children[0];
        if (!a.LC.isText(f)) continue;
        let _ = f.text.match(/^\s*>>> /),
            p = f.text.match(/^\s*> /);
        if ((null != p || null != _ || t) && (r.Q.setNodes(e, { type: 'blockQuote' }, { at: c }), !t)) {
            var n, i;
            let s = null !== (i = null !== (n = null == p ? void 0 : p[0].length) && void 0 !== n ? n : null == _ ? void 0 : _[0].length) && void 0 !== i ? i : 0,
                o = a.C0.child(c, 0);
            r.Q.delete(e, {
                at: {
                    anchor: {
                        path: o,
                        offset: 0
                    },
                    focus: {
                        path: o,
                        offset: s
                    }
                }
            }),
                (t = null != _);
        }
    }
}
function c(e, t, n) {
    if (!a.bN.isEmpty(e, t[0])) return !1;
    let i = a.bN.previous(e, { at: t[1] });
    return !!(null != i && a.aj.isType(i[0], 'blockQuote') && a.bN.isEmpty(e, i[0]) && a.Jz.isAtStart(n, t)) && (r.Q.setNodes(e, { type: 'line' }, { at: t[1] }), r.Q.removeNodes(e, { at: i[1] }), !0);
}
