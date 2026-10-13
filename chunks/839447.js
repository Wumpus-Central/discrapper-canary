(n.d(t, { A: () => m }), n(321073));
var l = n(477900),
    i = n(582128),
    a = n(444550),
    r = n(62010),
    o = n(834730),
    s = n(565645),
    c = n(660183),
    d = n(438669);
function u(e) {
    return null != e && (null != e.id || null != e.name);
}
function m(e) {
    let { options: t, value: n, onChange: m, canBeNew: h, memberCounts: p } = e,
        g = i.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        x = i.useMemo(() => {
            let e = [];
            return (
                t.forEach((t) => {
                    e.push({ value: t.id, label: t.title, key: t.id });
                }),
                e
            );
        }, [t]),
        f = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = g.get(e.value);
                if (null != t && u(t.emoji))
                    return (0, l.jsx)(s.A, {
                        emojiId: t.emoji?.id,
                        emojiName: t.emoji?.name,
                        animated: t.emoji?.animated ?? !1,
                    });
            },
            [g],
        ),
        A = i.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = g.get(e.value);
                if (null == n || !u(n.emoji)) return;
                let i = null == p || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => p[e])),
                    a = null != p && i > 0;
                return (0, l.jsxs)("div", {
                    className: d.ei,
                    children: [
                        h &&
                            n.isUnseen &&
                            (0, l.jsx)("div", {
                                className: d.Ad,
                                children: (0, l.jsx)(r.E, { type: "new", variant: "brand" }),
                            }),
                        a &&
                            (0, l.jsx)("div", {
                                className: d.Kl,
                                "data-hover": !0,
                                children: (0, l.jsx)(o.E, {
                                    variant: "text-xs/normal",
                                    color: "text-overlay-light",
                                    children: c.intl.format(c.t.EgKsZA, { memberCount: i }),
                                }),
                            }),
                    ],
                });
            },
            [h, p, g],
        ),
        j = i.useCallback(
            (e) => {
                let t = [];
                (e.forEach((e) => {
                    let n = g.get(e);
                    null != n && t.push(n);
                }),
                    m(t));
            },
            [m, g],
        );
    return (0, l.jsx)(a.p, {
        multi: !0,
        options: x,
        onChange: j,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: A,
        renderOptionPrefix: f,
        "data-migration-pending": !0,
    });
}
