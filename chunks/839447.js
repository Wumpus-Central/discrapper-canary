n.d(t, { A: () => m }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(827734),
    r = n(444550),
    o = n(397927),
    s = n(565645),
    c = n(985018),
    d = n(65242);
function u(e) {
    return null != e && (null != e.id || null != e.name);
}
function m(e) {
    let { options: t, value: n, onChange: m, canBeNew: h, memberCounts: p } = e,
        x = i.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        A = i.useMemo(() => {
            let e = [];
            return (
                t.forEach((t) => {
                    e.push({ value: t.id, label: t.title, key: t.id });
                }),
                e
            );
        }, [t]),
        g = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = x.get(e.value);
                if (null != t && u(t.emoji))
                    return (0, l.jsx)(s.A, {
                        emojiId: t.emoji?.id,
                        emojiName: t.emoji?.name,
                        animated: t.emoji?.animated ?? !1,
                    });
            },
            [x],
        ),
        f = i.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = x.get(e.value);
                if (null == n || !u(n.emoji)) return;
                let i = null == p || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => p[e])),
                    r = null != p && i > 0;
                return (0, l.jsxs)("div", {
                    className: d.ei,
                    children: [
                        h &&
                            n.isUnseen &&
                            (0, l.jsx)(o.LpS, {
                                color: a.A.unsafe_rawColors.BRAND_260.css,
                                text: c.intl.string(c.t.y2b7CA),
                                className: d.Ad,
                            }),
                        r &&
                            (0, l.jsx)("div", {
                                className: d.Kl,
                                "data-hover": !0,
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: c.intl.format(c.t.EgKsZA, { memberCount: i }),
                                }),
                            }),
                    ],
                });
            },
            [h, p, x],
        ),
        C = i.useCallback(
            (e) => {
                let t = [];
                e.forEach((e) => {
                    let n = x.get(e);
                    null != n && t.push(n);
                }),
                    m(t);
            },
            [m, x],
        );
    return (0, l.jsx)(r.p, {
        multi: !0,
        options: A,
        onChange: C,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: f,
        renderOptionPrefix: g,
        "data-migration-pending": !0,
    });
}
