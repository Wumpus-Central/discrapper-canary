l.d(e, { default: () => I });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(284009),
    d = l.n(a),
    c = l(189213),
    o = l(17928),
    x = l(139033),
    u = l(821609),
    m = l(834730),
    h = l(696986),
    j = l(289873),
    g = l(303612),
    v = l(317525),
    f = l(71393),
    p = l(580630),
    A = l(912702),
    N = l(871109),
    b = l(571654),
    E = l(59375),
    y = l(391442),
    z = l(411342),
    k = l(179499),
    C = l(375708),
    P = l(936510);
function w(t) {
    let { guildProductListing: e, guildId: l, invoicePreview: i } = t,
        s = (0, b.z)(e),
        r = (0, p.$g)(i.total, i.currency),
        a = (0, o.bG)([f.A], () => f.A.getGuild(l));
    return (
        d()(null != a, "guild cannot be null"),
        (0, n.jsxs)("div", {
            className: P.Tp,
            children: [
                (0, n.jsx)(g.A, { alt: "", className: P.$E, listing: e, imageSize: 100 }),
                (0, n.jsxs)("div", {
                    className: P.Vr,
                    children: [
                        (0, n.jsx)(m.E, { variant: "text-md/medium", color: "text-strong", children: e.name }),
                        (0, n.jsx)(h.h, { size: 4 }),
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(m.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: s,
                                }),
                                (0, n.jsx)(m.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: P.$8,
                    children: [
                        (0, n.jsx)(m.E, { variant: "text-md/medium", color: "text-strong", children: r }),
                        (0, n.jsx)(h.h, { size: 4 }),
                        (0, n.jsx)(m.E, {
                            variant: "text-xs/normal",
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
    let { guildProductListing: e, guildId: l } = t,
        i = e.attachments ?? [],
        s = i.length > 1,
        a = (0, k.A)({ guildId: l, productId: e.id });
    return 0 === i.length
        ? null
        : (0, n.jsx)(y.A, {
              label: C.intl.string(C.t.HOkHPB),
              children: (0, n.jsxs)("div", {
                  className: r()(P.KK, { [P.Oy]: s }),
                  children: [
                      (0, n.jsx)("div", {
                          className: P.yO,
                          children: i.map((t) => (0, n.jsx)(E.A, { attachment: t }, t.id)),
                      }),
                      (0, n.jsx)("div", { children: (0, n.jsx)(u.$, { ...a }) }),
                  ],
              }),
          });
}
function K(t) {
    let { role: e } = t;
    return null == e
        ? null
        : (0, n.jsx)(y.A, { label: C.intl.string(C.t.gWBNet), children: (0, n.jsx)(z.A, { role: e }) });
}
function O(t) {
    return (0, n.jsx)(m.E, { tag: "span", variant: "text-md/semibold", color: "text-default", children: t });
}
function I(t) {
    let { onClose: e, transitionState: l, guildProductListingId: s, guildId: r, invoicePreview: a } = t,
        u = (0, o.bG)([N.A], () => N.A.getGuildProduct(s));
    d()(null != u, "guildProductListing cannot be null");
    let [g, f] = i.useState(!1);
    i.useEffect(() => {
        !(async function () {
            try {
                f(!0), await (0, A.py)(r, s), f(!1);
            } catch (t) {
                e(),
                    (0, x.A)({
                        title: C.intl.string(C.t.OCwKlu),
                        subtitle: C.intl.string(C.t.VQ0lXY),
                        confirmText: C.intl.string(C.t["NX+WJN"]),
                    });
            }
        })();
    }, [r, s, e]);
    let p = (u.attachments ?? []).length > 0,
        b = u.role_id,
        E = (0, o.bG)([v.A], () => (null != b ? v.A.getRole(r, b) : void 0));
    return (0, n.jsx)(c.Modal, {
        title: C.intl.string(C.t.dhAgv3),
        subtitle: C.intl.format(C.t.X6yvvo, { productName: u.name, emphasisHook: O }),
        onClose: e,
        transitionState: l,
        size: "md",
        actions: [],
        children: g
            ? (0, n.jsx)(j.y, {})
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(m.E, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: [
                              p ? C.intl.string(C.t["A/RnkK"]) + " " : "",
                              null != E ? C.intl.format(C.t.IeJDKs, { roleName: E.name, emphasisHook: O }) : "",
                          ],
                      }),
                      (0, n.jsx)(h.h, { size: 12 }),
                      (0, n.jsx)(m.E, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: C.intl.string(C.t["9S3QHF"]),
                      }),
                      (0, n.jsx)(h.h, { size: 24 }),
                      (0, n.jsx)(w, { guildProductListing: u, guildId: r, invoicePreview: a }),
                      (0, n.jsx)(h.h, { size: 32 }),
                      (0, n.jsx)("div", { className: P.yF }),
                      (0, n.jsx)(h.h, { size: 32 }),
                      (0, n.jsxs)("ul", {
                          className: P.iq,
                          children: [(0, n.jsx)(G, { guildProductListing: u, guildId: r }), (0, n.jsx)(K, { role: E })],
                      }),
                  ],
              }),
    });
}
