n.d(t, { A: () => a }), n(896048);
var r = n(35277),
    i = n(711371);
function a(e) {
    let { apply: t, deleteBackward: n, deleteForward: a, deleteFragment: o, insertText: l } = e;
    return (
        (e.apply = (n) => {
            var r;
            if (
                "set_selection" === n.type &&
                (null == (r = e.composition) ? void 0 : r.startedInsideInline) &&
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
            s(e, t, !0) || n(t);
        }),
        (e.deleteForward = (t) => {
            s(e, t, !1) || a(t);
        }),
        (e.deleteFragment = (t) => {
            if (null != e.selection && i.ZF.isExpanded(e.selection)) {
                var n, a, s, l;
                let c = e.selection.anchor,
                    u = e.selection.focus,
                    d = i.VW.getParentInline(e, c),
                    f = i.VW.getParentInline(e, u);
                if (null != d && null != f && i.PW.equals(d[1], f[1])) return void o(t);
                let p = i.ZF.isForward(e.selection);
                if (null != d) {
                    let [, t] = d,
                        [r, s] = i.VW.edges(e, t);
                    p && i.Kh.equals(c, r)
                        ? (c = null != (n = i.VW.before(e, r)) ? n : i.VW.start(e, []))
                        : !p && i.Kh.equals(c, s) && (c = null != (a = i.VW.after(e, s)) ? a : i.VW.end(e, []));
                }
                if (null != f) {
                    let [, t] = f,
                        [n, r] = i.VW.edges(e, t);
                    !p && i.Kh.equals(u, n)
                        ? (u = null != (s = i.VW.before(e, n)) ? s : i.VW.start(e, []))
                        : p && i.Kh.equals(u, r) && (u = null != (l = i.VW.after(e, r)) ? l : i.VW.end(e, []));
                }
                return void r.b.delete(e, {
                    at: {
                        anchor: c,
                        focus: u,
                    },
                    reverse: "backward" === t,
                    select: !0,
                });
            }
            o(t);
        }),
        e
    );
}
function s(e, t, n) {
    let a = i.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let s = i.VW.getCurrentText(e);
    if (null == s) return !0;
    let [o, l] = s,
        [c, u] = i.VW.edges(e, l),
        d = i.ZF.toPoint(e.selection);
    if (null == d) return !0;
    if (null != a) {
        let [t, n] = a;
        if (i.VW.isEmpty(e, t) || i.VW.isVoid(e, t)) return r.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == a) return !1;
        else {
            let [s, o] = i.VW.edges(e, a[1]);
            return (
                r.b.delete(e, {
                    at: d,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: s,
                        focus: o,
                    },
                }),
                !0
            );
        }
    let f = i.VW.getParentBlock(e, d);
    if (null == f) return !0;
    let p = f[1],
        _ = a;
    if (i.Kh.equals(d, n ? c : u))
        for (;;) {
            let t = (n ? i.VW.before : i.VW.after)(e, d);
            if (null == t) return !0;
            if (!i.PW.isDescendant(t.path, p)) break;
            if (((d = t), null != (_ = i.VW.getParentInline(e, t)))) {
                let [t, n] = _;
                if (i.VW.isEmpty(e, t) || i.VW.isVoid(e, t)) {
                    let t = i.VW.before(e, n);
                    return null != t && r.b.select(e, t), r.b.removeInline(e, n), !0;
                }
            }
            let a = i.VW.node(e, t.path);
            if (null == a || !i.l5.isText(a[0])) return !0;
            if ((([o, l] = a), 0 !== o.text.length)) {
                [c, u] = i.VW.edges(e, l);
                break;
            }
        }
    return (
        r.b.delete(e, {
            at: d,
            unit: t,
            reverse: n,
            select: !0,
        }),
        !0
    );
}
