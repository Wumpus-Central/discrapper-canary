"use strict";
n.d(t, { A: () => s });
var r = n(35277),
    i = n(711371);
function s(e) {
    let { apply: t, deleteBackward: n, deleteForward: s, deleteFragment: o, insertText: l } = e;
    return (
        (e.apply = (n) => {
            if (
                "set_selection" === n.type &&
                e.composition?.startedInsideInline &&
                i.ZF.isRange(n.properties) &&
                i.ZF.isRange(n.newProperties) &&
                i.ZF.isCollapsed(n.newProperties)
            ) {
                let t = i.VW.getParentInline(e, n.properties),
                    r = i.VW.getParentInline(e, n.newProperties);
                if (null != t && (null == r || !i.PW.equals(t[1], r[1]))) return;
            }
            t(n);
        }),
        (e.insertText = (t) => {
            null != e.selection && null != i.VW.getCurrentInline(e) ? r.b.insertText(e, t) : l(t);
        }),
        (e.deleteBackward = (t) => {
            a(e, t, !0) || n(t);
        }),
        (e.deleteForward = (t) => {
            a(e, t, !1) || s(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && i.ZF.isExpanded(e.selection)) {
                let n = e.selection.anchor,
                    s = e.selection.focus,
                    a = i.VW.getParentInline(e, n),
                    l = i.VW.getParentInline(e, s);
                if (null != a && null != l && i.PW.equals(a[1], l[1])) return void o(t);
                let u = i.ZF.isForward(e.selection);
                if (null != a) {
                    let [, t] = a,
                        [r, s] = i.VW.edges(e, t);
                    u && i.Kh.equals(n, r)
                        ? (n = i.VW.before(e, r) ?? i.VW.start(e, []))
                        : !u && i.Kh.equals(n, s) && (n = i.VW.after(e, s) ?? i.VW.end(e, []));
                }
                if (null != l) {
                    let [, t] = l,
                        [n, r] = i.VW.edges(e, t);
                    !u && i.Kh.equals(s, n)
                        ? (s = i.VW.before(e, n) ?? i.VW.start(e, []))
                        : u && i.Kh.equals(s, r) && (s = i.VW.after(e, r) ?? i.VW.end(e, []));
                }
                return void r.b.delete(e, { at: { anchor: n, focus: s }, reverse: "backward" === t, select: !0 });
            }
            o(t);
        }),
        e
    );
}
function a(e, t, n) {
    let s = i.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let a = i.VW.getCurrentText(e);
    if (null == a) return !0;
    let [o, l] = a,
        [u, c] = i.VW.edges(e, l),
        d = i.ZF.toPoint(e.selection);
    if (null == d) return !0;
    if (null != s) {
        let [t, n] = s;
        if (i.VW.isEmpty(e, t) || i.VW.isVoid(e, t)) return r.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == s) return !1;
        else {
            let [a, o] = i.VW.edges(e, s[1]);
            return r.b.delete(e, { at: d, unit: t, reverse: n, select: !0, bounds: { anchor: a, focus: o } }), !0;
        }
    let _ = i.VW.getParentBlock(e, d);
    if (null == _) return !0;
    let f = _[1],
        p = s;
    if (i.Kh.equals(d, n ? u : c))
        for (;;) {
            let t = (n ? i.VW.before : i.VW.after)(e, d);
            if (null == t) return !0;
            if (!i.PW.isDescendant(t.path, f)) break;
            if (((d = t), null != (p = i.VW.getParentInline(e, t)))) {
                let [t, n] = p;
                if (i.VW.isEmpty(e, t) || i.VW.isVoid(e, t)) {
                    let t = i.VW.before(e, n);
                    return null != t && r.b.select(e, t), r.b.removeInline(e, n), !0;
                }
            }
            let s = i.VW.node(e, t.path);
            if (null == s || !i.l5.isText(s[0])) return !0;
            if ((([o, l] = s), 0 !== o.text.length)) {
                [u, c] = i.VW.edges(e, l);
                break;
            }
        }
    return r.b.delete(e, { at: d, unit: t, reverse: n, select: !0 }), !0;
}
