(t.d(n, { A: () => m }), t(321073));
var l = t(477900),
    i = t(582128),
    a = t(444550),
    r = t(62010),
    o = t(834730),
    s = t(788026),
    c = t(105292),
    d = t(438669);
function u(e) {
    return null != e && (null != e.id || null != e.name);
}
function m(e) {
    let { options: n, value: t, onChange: m, canBeNew: h, memberCounts: p } = e,
        g = i.useMemo(() => {
            let e = new Map();
            return (
                n.forEach((n) => {
                    e.set(n.id, n);
                }),
                e
            );
        }, [n]),
        x = i.useMemo(() => {
            let e = [];
            return (
                n.forEach((n) => {
                    e.push({ value: n.id, label: n.title, key: n.id });
                }),
                e
            );
        }, [n]),
        f = i.useCallback(
            (e) => {
                if (null == e) return;
                let n = g.get(e.value);
                if (null != n && u(n.emoji))
                    return (0, l.jsx)(s.A, {
                        emojiId: n.emoji?.id,
                        emojiName: n.emoji?.name,
                        animated: n.emoji?.animated ?? !1,
                    });
            },
            [g],
        ),
        A = i.useCallback(
            (e, n) => {
                if (null == e || n.inPill) return;
                let t = g.get(e.value);
                if (null == t || !u(t.emoji)) return;
                let i = null == p || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => p[e])),
                    a = null != p && i > 0;
                return (0, l.jsxs)("div", {
                    className: d.ei,
                    children: [
                        h &&
                            t.isUnseen &&
                            (0, l.jsx)("div", {
                                className: d.Ad,
                                children: (0, l.jsx)(r.E, { type: "new", variant: "primary" }),
                            }),
                        a &&
                            (0, l.jsx)("div", {
                                className: d.Kl,
                                "data-hover": !0,
                                children: (0, l.jsx)(o.E, {
                                    variant: "body-xs/normal",
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
                let n = [];
                (e.forEach((e) => {
                    let t = g.get(e);
                    null != t && n.push(t);
                }),
                    m(n));
            },
            [m, g],
        );
    return (0, l.jsx)(a.p, {
        multi: !0,
        options: x,
        onChange: j,
        value: t,
        closeOnSelect: !1,
        renderOptionSuffix: A,
        renderOptionPrefix: f,
        "data-migration-pending": !0,
    });
}
