n.d(t, { Z: () => l }), n(388685), n(35282);
var r = n(53529),
    i = n(436660),
    a = n(887490),
    o = n(515270);
let s = new Set(['line', 'blockQuote']);
function l(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: o, onChange: s } = e;
    (e.deleteBackward = (n) => {
        let r = a.bN.getCurrentBlock(e);
        if ((null == r ? void 0 : r[0].type) === 'blockQuote') {
            let t = a.M8.toPoint(e.selection);
            if (null != t && a.C0.isFirstChild(r[1], t.path) && 0 === t.offset) return void i.Q.setNodes(e, { type: 'line' }, { at: r[1] });
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [o, s] = a.M8.edges(e.selection),
                    l = [o.path[0]],
                    c = a.bN.node(e, l),
                    u = [s.path[0]],
                    d = a.C0.equals(l, u) ? null : a.bN.node(e, u);
                r.T.withSingleEntry(e, () => {
                    (null == c ? void 0 : c[0].type) === 'blockQuote' && a.Jz.isAtStart(o, c) && i.Q.setNodes(e, { type: 'line' }, { at: l }), (null == d ? void 0 : d[0].type) === 'blockQuote' && a.Jz.isAtEnd(s, d) && i.Q.setNodes(e, { type: 'line' }, { at: u }), n(t);
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
                u(e, t, n) ||
                    i.Q.splitNodes(e, {
                        at: n,
                        always: !0
                    });
                return;
            }
            o();
        });
    let l = null,
        d = !0;
    return (
        (e.onChange = () => {
            let t = a.bN.richValue(e);
            (t !== l || e.previewMarkdown !== d) &&
                (r.T.withMergedEntry(e, () => {
                    a.bN.withoutNormalizing(e, () => c(e));
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
    for (let l of a.bN.blocks(e)) {
        let [c, u] = l;
        if (!s.has(c.type)) continue;
        let d = {
            path: a.C0.child(u, 0),
            offset: 0
        };
        if ((0, o.iF)(e, d)) {
            'blockQuote' === c.type && (i.Q.setNodes(e, { type: 'line' }, { at: u }), i.Q.insertText(e, '> ', { at: d }));
            continue;
        }
        if ('blockQuote' === c.type || a.bN.areStylesDisabled(e)) continue;
        let f = c.children[0];
        if (!a.LC.isText(f)) continue;
        let _ = f.text.match(/^\s*>>> /),
            p = f.text.match(/^\s*> /);
        if ((null != p || null != _ || t) && (i.Q.setNodes(e, { type: 'blockQuote' }, { at: u }), !t)) {
            var n, r;
            let o = null != (r = null != (n = null == p ? void 0 : p[0].length) ? n : null == _ ? void 0 : _[0].length) ? r : 0,
                s = a.C0.child(u, 0);
            i.Q.delete(e, {
                at: {
                    anchor: {
                        path: s,
                        offset: 0
                    },
                    focus: {
                        path: s,
                        offset: o
                    }
                }
            }),
                (t = null != _);
        }
    }
}
function u(e, t, n) {
    if (!a.bN.isEmpty(e, t[0])) return !1;
    let r = a.bN.previous(e, { at: t[1] });
    return null != r && !!a.aj.isType(r[0], 'blockQuote') && !!a.bN.isEmpty(e, r[0]) && !!a.Jz.isAtStart(n, t) && (i.Q.setNodes(e, { type: 'line' }, { at: t[1] }), i.Q.removeNodes(e, { at: r[1] }), !0);
}
