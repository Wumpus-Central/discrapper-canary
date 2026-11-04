var e = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    d = n.n(a),
    c = n(855986),
    o = n(139033),
    u = n(821609),
    x = n(189213),
    m = n(834730),
    h = n(696986),
    j = n(289873),
    g = n(303612),
    v = n(317525),
    b = n(71393),
    y = n(580630),
    f = n(912702),
    p = n(871109),
    A = n(571654),
    N = n(59375),
    E = n(391442),
    z = n(411342),
    k = n(179499),
    C = n(792996),
    P = n(777291);
function w(t) {
    let { guildProductListing: l, guildId: n, invoicePreview: i } = t,
        s = (0, A.z)(l),
        r = (0, y.$g)(i.total, i.currency),
        a = (0, c.bG)([b.A], () => b.A.getGuild(n));
    return (
        d()(null != a, "guild cannot be null"),
        (0, e.jsxs)("div", {
            className: P.Tp,
            children: [
                (0, e.jsx)(g.A, { alt: "", className: P.$E, listing: l, imageSize: 100 }),
                (0, e.jsxs)("div", {
                    className: P.Vr,
                    children: [
                        (0, e.jsx)(m.E, { variant: "body-md/medium", color: "text-strong", children: l.name }),
                        (0, e.jsx)(h.h, { size: 4 }),
                        (0, e.jsxs)("div", {
                            children: [
                                (0, e.jsx)(m.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                (0, e.jsx)(m.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, e.jsxs)("div", {
                    className: P.$8,
                    children: [
                        (0, e.jsx)(m.E, { variant: "body-md/medium", color: "text-strong", children: r }),
                        (0, e.jsx)(h.h, { size: 4 }),
                        (0, e.jsx)(m.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: C.intl.string(C.t["5dWOZX"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
function G(t) {
    let { guildProductListing: l, guildId: n } = t,
        i = l.attachments ?? [],
        s = i.length > 1,
        a = (0, k.A)({ guildId: n, productId: l.id });
    return 0 === i.length
        ? null
        : (0, e.jsx)(E.A, {
              label: C.intl.string(C.t.HOkHPB),
              children: (0, e.jsxs)("div", {
                  className: r()(P.KK, { [P.Oy]: s }),
                  children: [
                      (0, e.jsx)("div", {
                          className: P.yO,
                          children: i.map((t) => (0, e.jsx)(N.A, { attachment: t }, t.id)),
                      }),
                      (0, e.jsx)("div", { children: (0, e.jsx)(u.$, { ...a }) }),
                  ],
              }),
          });
}
function K(t) {
    let { role: l } = t;
    return null == l
        ? null
        : (0, e.jsx)(E.A, { label: C.intl.string(C.t.gWBNet), children: (0, e.jsx)(z.A, { role: l }) });
}
function O(t) {
    return (0, e.jsx)(m.E, { tag: "span", variant: "body-md/semibold", color: "text-default", children: t });
}
n.d(
    l,
    {},
    {
        default: function (t) {
            let { onClose: l, transitionState: n, guildProductListingId: s, guildId: r, invoicePreview: a } = t,
                u = (0, c.bG)([p.A], () => p.A.getGuildProduct(s));
            d()(null != u, "guildProductListing cannot be null");
            let [g, b] = i.useState(!1);
            i.useEffect(() => {
                !(async function () {
                    try {
                        (b(!0), await (0, f.py)(r, s), b(!1));
                    } catch (t) {
                        (l(),
                            (0, o.A)({
                                title: C.intl.string(C.t.OCwKlu),
                                subtitle: C.intl.string(C.t.VQ0lXY),
                                confirmText: C.intl.string(C.t["NX+WJN"]),
                            }));
                    }
                })();
            }, [r, s, l]);
            let y = (u.attachments ?? []).length > 0,
                A = u.role_id,
                N = (0, c.bG)([v.A], () => (null != A ? v.A.getRole(r, A) : void 0));
            return (0, e.jsx)(x.a, {
                title: C.intl.string(C.t.dhAgv3),
                subtitle: C.intl.format(C.t.X6yvvo, { productName: u.name, emphasisHook: O }),
                onClose: l,
                transitionState: n,
                size: "md",
                actions: [],
                children:
                    null == u
                        ? null
                        : g
                          ? (0, e.jsx)(j.y, {})
                          : (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsxs)(m.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        children: [
                                            y ? C.intl.string(C.t["A/RnkK"]) + " " : "",
                                            null != N
                                                ? C.intl.format(C.t.IeJDKs, { roleName: N.name, emphasisHook: O })
                                                : "",
                                        ],
                                    }),
                                    (0, e.jsx)(h.h, { size: 12 }),
                                    (0, e.jsx)(m.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        children: C.intl.string(C.t["9S3QHF"]),
                                    }),
                                    (0, e.jsx)(h.h, { size: 24 }),
                                    (0, e.jsx)(w, { guildProductListing: u, guildId: r, invoicePreview: a }),
                                    (0, e.jsx)(h.h, { size: 32 }),
                                    (0, e.jsx)("div", { className: P.yF }),
                                    (0, e.jsx)(h.h, { size: 32 }),
                                    (0, e.jsxs)("ul", {
                                        className: P.iq,
                                        children: [
                                            (0, e.jsx)(G, { guildProductListing: u, guildId: r }),
                                            (0, e.jsx)(K, { role: N }),
                                        ],
                                    }),
                                ],
                            }),
            });
        },
    },
);
