n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(421380),
    c = n(397927),
    o = n(81461),
    d = n(801264),
    u = n(975571),
    f = n(997509),
    g = n(555337),
    b = n(652215),
    m = n(583970),
    p = n(985018),
    x = n(175820);
let h = function (e) {
    let { className: t, guildId: n, tag: i, badge: h, primaryColor: j, secondaryColor: O, isDisabled: y = !1 } = e,
        v = (0, s.bG)([g.A], () => g.A.getProps().originalProfile),
        A = null != v && v.tag !== i;

    function E(e) {
        f.A.updateGuildProfile(n, {
            tag: e,
        });
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(c.D0$, {
                label: p.intl.string(m.default["tN+8pD"]),
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: x.I8,
                        children: [
                            (0, r.jsx)("div", {
                                className: x.sx,
                                children: (0, r.jsx)(a.ob, {
                                    id: e.controlId,
                                    className: x.U3,
                                    inputClassName: l()(x.f1, "heading-sm/semibold"),
                                    maxLength: 4,
                                    autoFocus: !0,
                                    placeholder: "WUMP",
                                    prefixElement: (0, r.jsx)(o.J, {
                                        badge: h,
                                        width: 40,
                                        height: 40,
                                        primaryTintColor: j,
                                        secondaryTintColor: O,
                                    }),
                                    disabled: y,
                                    value: null != i ? i : "",
                                    onChange: E,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: x.e7,
                                children: (0, r.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: p.intl.string(m.default.CrHXHt),
                                }),
                            }),
                        ],
                    }),
            }),
            A &&
                (0, r.jsx)(d.A, {
                    className: x.O2,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: p.intl.format(m.default["4ZKDXq"], {
                            articleUrl: u.A.getArticleURL(b.MVz.SERVER_TAGS),
                        }),
                    }),
                }),
        ],
    });
};
