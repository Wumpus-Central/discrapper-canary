t.d(n, { A: () => h }), t(321073);
var l = t(627968),
    i = t(64700),
    a = t(827734),
    r = t(444550),
    o = t(777666),
    s = t(834730),
    c = t(565645),
    u = t(985018),
    d = t(65242);
function m(e) {
    return null != e && (null != e.id || null != e.name);
}
function h(e) {
    let { options: n, value: t, onChange: h, canBeNew: p, memberCounts: A } = e,
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
                if (null != n && m(n.emoji))
                    return (0, l.jsx)(c.A, {
                        emojiId: n.emoji?.id,
                        emojiName: n.emoji?.name,
                        animated: n.emoji?.animated ?? !1,
                    });
            },
            [g],
        ),
        C = i.useCallback(
            (e, n) => {
                if (null == e || n.inPill) return;
                let t = g.get(e.value);
                if (null == t || !m(t.emoji)) return;
                let i = null == A || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => A[e])),
                    r = null != A && i > 0;
                return (0, l.jsxs)("div", {
                    className: d.ei,
                    children: [
                        p &&
                            t.isUnseen &&
                            (0, l.jsx)(o.Lp, {
                                color: a.A.unsafe_rawColors.BRAND_260.css,
                                text: u.intl.string(u.t.y2b7CA),
                                className: d.Ad,
                            }),
                        r &&
                            (0, l.jsx)("div", {
                                className: d.Kl,
                                "data-hover": !0,
                                children: (0, l.jsx)(s.E, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: u.intl.format(u.t.EgKsZA, { memberCount: i }),
                                }),
                            }),
                    ],
                });
            },
            [p, A, g],
        ),
        j = i.useCallback(
            (e) => {
                let n = [];
                e.forEach((e) => {
                    let t = g.get(e);
                    null != t && n.push(t);
                }),
                    h(n);
            },
            [h, g],
        );
    return (0, l.jsx)(r.p, {
        multi: !0,
        options: x,
        onChange: j,
        value: t,
        closeOnSelect: !1,
        renderOptionSuffix: C,
        renderOptionPrefix: f,
        "data-migration-pending": !0,
    });
}
