n.d(t, { A: () => h }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(661531),
    r = n(444550),
    o = n(812993),
    s = n(834730),
    c = n(565645),
    d = n(375708),
    u = n(65242);
function m(e) {
    return null != e && (null != e.id || null != e.name);
}
function h(e) {
    let { options: t, value: n, onChange: h, canBeNew: p, memberCounts: x } = e,
        g = i.useMemo(() => {
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
        f = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = g.get(e.value);
                if (null != t && m(t.emoji))
                    return (0, l.jsx)(c.A, {
                        emojiId: t.emoji?.id,
                        emojiName: t.emoji?.name,
                        animated: t.emoji?.animated ?? !1,
                    });
            },
            [g],
        ),
        C = i.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = g.get(e.value);
                if (null == n || !m(n.emoji)) return;
                let i = null == x || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => x[e])),
                    r = null != x && i > 0;
                return (0, l.jsxs)("div", {
                    className: u.ei,
                    children: [
                        p &&
                            n.isUnseen &&
                            (0, l.jsx)(o.Lp, {
                                color: a.A.unsafe_rawColors.BRAND_260.css,
                                text: d.intl.string(d.t.y2b7CA),
                                className: u.Ad,
                            }),
                        r &&
                            (0, l.jsx)("div", {
                                className: u.Kl,
                                "data-hover": !0,
                                children: (0, l.jsx)(s.E, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: d.intl.format(d.t.EgKsZA, { memberCount: i }),
                                }),
                            }),
                    ],
                });
            },
            [p, x, g],
        ),
        j = i.useCallback(
            (e) => {
                let t = [];
                e.forEach((e) => {
                    let n = g.get(e);
                    null != n && t.push(n);
                }),
                    h(t);
            },
            [h, g],
        );
    return (0, l.jsx)(r.p, {
        multi: !0,
        options: A,
        onChange: j,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: C,
        renderOptionPrefix: f,
        "data-migration-pending": !0,
    });
}
