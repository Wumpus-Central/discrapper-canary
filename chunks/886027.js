n.d(t, { Z: () => l }), n(47120), n(301563);
var r = n(53529),
    i = n(436660),
    o = n(887490),
    a = n(515270);
let s = new Set(['line', 'blockQuote']);
function l(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: a, onChange: s } = e;
    (e.deleteBackward = (n) => {
        let r = o.bN.getCurrentBlock(e);
        if ((null == r ? void 0 : r[0].type) === 'blockQuote') {
            let t = o.M8.toPoint(e.selection);
            if (null != t && o.C0.isFirstChild(r[1], t.path) && 0 === t.offset) return void i.Q.setNodes(e, { type: 'line' }, { at: r[1] });
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [a, s] = o.M8.edges(e.selection),
                    l = [a.path[0]],
                    c = o.bN.node(e, l),
                    u = [s.path[0]],
                    d = o.C0.equals(l, u) ? null : o.bN.node(e, u);
                r.T.withSingleEntry(e, () => {
                    (null == c ? void 0 : c[0].type) === 'blockQuote' && o.Jz.isAtStart(a, c) && i.Q.setNodes(e, { type: 'line' }, { at: l }), (null == d ? void 0 : d[0].type) === 'blockQuote' && o.Jz.isAtEnd(s, d) && i.Q.setNodes(e, { type: 'line' }, { at: u }), n(t);
                });
                return;
            }
            n(t);
        }),
        (e.insertBreak = () => {
            let t = o.bN.getCurrentBlock(e);
            if ((null == t ? void 0 : t[0].type) === 'blockQuote') {
                let n = o.M8.toPoint(e.selection);
                if (null == n) return;
                u(e, t, n) ||
                    i.Q.splitNodes(e, {
                        at: n,
                        always: !0
                    });
                return;
            }
            a();
        });
    let l = null,
        d = !0;
    return (
        (e.onChange = () => {
            let t = o.bN.richValue(e);
            (t !== l || e.previewMarkdown !== d) &&
                (r.T.withMergedEntry(e, () => {
                    o.bN.withoutNormalizing(e, () => c(e));
                }),
                (l = t),
                (d = e.previewMarkdown)),
                s();
        }),
        e
    );
}
function c(e) {
    let t = !1;
    for (let l of o.bN.blocks(e)) {
        let [c, u] = l;
        if (!s.has(c.type)) continue;
        let d = {
            path: o.C0.child(u, 0),
            offset: 0
        };
        if ((0, a.iF)(e, d)) {
            'blockQuote' === c.type && (i.Q.setNodes(e, { type: 'line' }, { at: u }), i.Q.insertText(e, '> ', { at: d }));
            continue;
        }
        if ('blockQuote' === c.type || o.bN.areStylesDisabled(e)) continue;
        let f = c.children[0];
        if (!o.LC.isText(f)) continue;
        let _ = f.text.match(/^\s*>>> /),
            p = f.text.match(/^\s*> /);
        if ((null != p || null != _ || t) && (i.Q.setNodes(e, { type: 'blockQuote' }, { at: u }), !t)) {
            var n, r;
            let a = null != (r = null != (n = null == p ? void 0 : p[0].length) ? n : null == _ ? void 0 : _[0].length) ? r : 0,
                s = o.C0.child(u, 0);
            i.Q.delete(e, {
                at: {
                    anchor: {
                        path: s,
                        offset: 0
                    },
                    focus: {
                        path: s,
                        offset: a
                    }
                }
            }),
                (t = null != _);
        }
    }
}
function u(e, t, n) {
    if (!o.bN.isEmpty(e, t[0])) return !1;
    let r = o.bN.previous(e, { at: t[1] });
    return null != r && !!o.aj.isType(r[0], 'blockQuote') && !!o.bN.isEmpty(e, r[0]) && !!o.Jz.isAtStart(n, t) && (i.Q.setNodes(e, { type: 'line' }, { at: t[1] }), i.Q.removeNodes(e, { at: r[1] }), !0);
}
