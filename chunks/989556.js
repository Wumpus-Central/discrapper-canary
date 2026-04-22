n.d(t, { A: () => E });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(573725),
    o = n(452027),
    d = n(834730),
    c = n(81461),
    u = n(208039),
    m = n(975571),
    g = n(997509),
    h = n(555337),
    x = n(652215),
    _ = n(116112),
    p = n(985018),
    A = n(15137);
let E = function (e) {
    let { className: t, guildId: n, tag: l, badge: E, primaryColor: f, secondaryColor: j, isDisabled: N = !1 } = e,
        I = (0, r.bG)([h.A], () => h.A.getProps().originalProfile),
        C = null != I && I.tag !== l;
    function b(e) {
        g.A.updateGuildProfile(n, { tag: e });
    }
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(o.D, {
                label: p.intl.string(_.default["tN+8pD"]),
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: A.I8,
                        children: [
                            (0, i.jsx)("div", {
                                className: A.sx,
                                children: (0, i.jsx)(a.p, {
                                    id: e.controlId,
                                    className: A.U3,
                                    inputClassName: s()(A.f1, "heading-sm/semibold"),
                                    maxLength: 4,
                                    autoFocus: !0,
                                    placeholder: "WUMP",
                                    prefixElement: (0, i.jsx)(c.J, {
                                        badge: E,
                                        width: 40,
                                        height: 40,
                                        primaryTintColor: f ?? void 0,
                                        secondaryTintColor: j ?? void 0,
                                    }),
                                    disabled: N,
                                    value: l ?? "",
                                    onChange: b,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: A.e7,
                                children: (0, i.jsx)(d.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: p.intl.string(_.default.CrHXHt),
                                }),
                            }),
                        ],
                    }),
            }),
            C &&
                (0, i.jsx)(u.A, {
                    className: A.O2,
                    children: (0, i.jsx)(d.E, {
                        variant: "text-xs/medium",
                        children: p.intl.format(_.default["4ZKDXq"], {
                            articleUrl: m.A.getArticleURL(x.MVz.SERVER_TAGS),
                        }),
                    }),
                }),
        ],
    });
};
