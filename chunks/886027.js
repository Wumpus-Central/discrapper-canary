r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(53529),
    o = r(436660),
    s = r(887490),
    l = r(515270);
let u = new Set(['line', 'blockQuote']);
function c(e) {
    let { deleteBackward: n, deleteFragment: r, insertBreak: i, onChange: l } = e;
    (e.deleteBackward = (r) => {
        let i = s.bN.getCurrentBlock(e);
        if ((null == i ? void 0 : i[0].type) === 'blockQuote') {
            let n = s.M8.toPoint(e.selection);
            if (null != n && s.C0.isFirstChild(i[1], n.path) && 0 === n.offset) {
                o.Q.setNodes(e, { type: 'line' }, { at: i[1] });
                return;
            }
        }
        n(r);
    }),
        (e.deleteFragment = (n) => {
            if (null != e.selection) {
                let [i, l] = s.M8.edges(e.selection),
                    u = [i.path[0]],
                    c = s.bN.node(e, u),
                    d = [l.path[0]],
                    f = s.C0.equals(u, d) ? null : s.bN.node(e, d);
                a.T.withSingleEntry(e, () => {
                    (null == c ? void 0 : c[0].type) === 'blockQuote' && s.Jz.isAtStart(i, c) && o.Q.setNodes(e, { type: 'line' }, { at: u }), (null == f ? void 0 : f[0].type) === 'blockQuote' && s.Jz.isAtEnd(l, f) && o.Q.setNodes(e, { type: 'line' }, { at: d }), r(n);
                });
                return;
            }
            r(n);
        }),
        (e.insertBreak = () => {
            let n = s.bN.getCurrentBlock(e);
            if ((null == n ? void 0 : n[0].type) === 'blockQuote') {
                let r = s.M8.toPoint(e.selection);
                if (null == r) return;
                !f(e, n, r) &&
                    o.Q.splitNodes(e, {
                        at: r,
                        always: !0
                    });
                return;
            }
            i();
        });
    let u = null,
        c = !0;
    return (
        (e.onChange = () => {
            let n = s.bN.richValue(e);
            (n !== u || e.previewMarkdown !== c) &&
                (a.T.withMergedEntry(e, () => {
                    s.bN.withoutNormalizing(e, () => d(e));
                }),
                (u = n),
                (c = e.previewMarkdown)),
                l();
        }),
        e
    );
}
function d(e) {
    let n = !1;
    for (let a of s.bN.blocks(e)) {
        let [c, d] = a;
        if (!u.has(c.type)) continue;
        let f = {
            path: s.C0.child(d, 0),
            offset: 0
        };
        if ((0, l.iF)(e, f)) {
            'blockQuote' === c.type && (o.Q.setNodes(e, { type: 'line' }, { at: d }), o.Q.insertText(e, '> ', { at: f }));
            continue;
        }
        if ('blockQuote' === c.type || s.bN.areStylesDisabled(e)) continue;
        let p = c.children[0];
        if (!s.LC.isText(p)) continue;
        let h = p.text.match(/^\s*>>> /),
            _ = p.text.match(/^\s*> /);
        if ((null != _ || null != h || n) && (o.Q.setNodes(e, { type: 'blockQuote' }, { at: d }), !n)) {
            var r, i;
            let a = null !== (i = null !== (r = null == _ ? void 0 : _[0].length) && void 0 !== r ? r : null == h ? void 0 : h[0].length) && void 0 !== i ? i : 0,
                l = s.C0.child(d, 0);
            o.Q.delete(e, {
                at: {
                    anchor: {
                        path: l,
                        offset: 0
                    },
                    focus: {
                        path: l,
                        offset: a
                    }
                }
            }),
                (n = null != h);
        }
    }
}
function f(e, n, r) {
    if (!s.bN.isEmpty(e, n[0])) return !1;
    let i = s.bN.previous(e, { at: n[1] });
    return !!(null != i && s.aj.isType(i[0], 'blockQuote') && s.bN.isEmpty(e, i[0]) && s.Jz.isAtStart(r, n)) && (o.Q.setNodes(e, { type: 'line' }, { at: n[1] }), o.Q.removeNodes(e, { at: i[1] }), !0);
}
