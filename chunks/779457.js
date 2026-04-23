l.d(e, { default: () => P });
var s = l(627968),
    i = l(64700),
    n = l(503698),
    a = l.n(n),
    r = l(284009),
    c = l.n(r),
    d = l(189213),
    o = l(17928),
    x = l(139033),
    m = l(821609),
    u = l(834730),
    h = l(696986),
    f = l(289873),
    j = l(303612),
    g = l(317525),
    v = l(71393),
    p = l(580630),
    N = l(912702),
    _ = l(871109),
    A = l(571654),
    z = l(59375),
    y = l(391442),
    E = l(411342),
    b = l(179499),
    C = l(985018),
    w = l(936510);
function I(t) {
    let { guildProductListing: e, guildId: l, skuPricePreview: i } = t,
        n = (0, A.z)(e),
        a = (0, p.$g)(i.amount, i.currency),
        r = (0, o.bG)([v.A], () => v.A.getGuild(l));
    return (
        c()(null != r, "guild cannot be null"),
        (0, s.jsxs)("div", {
            className: w.Tp,
            children: [
                (0, s.jsx)(j.A, { alt: "", className: w.$E, listing: e, imageSize: 100 }),
                (0, s.jsxs)("div", {
                    className: w.Vr,
                    children: [
                        (0, s.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", children: e.name }),
                        (0, s.jsx)(h.h, { size: 4 }),
                        (0, s.jsxs)("div", {
                            children: [
                                (0, s.jsx)(u.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: n,
                                }),
                                (0, s.jsx)(u.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: r.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: w.$8,
                    children: [
                        (0, s.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", children: a }),
                        (0, s.jsx)(h.h, { size: 4 }),
                        (0, s.jsx)(u.E, {
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
function O(t) {
    let { guildProductListing: e, guildId: l } = t,
        i = e.attachments ?? [],
        n = i.length > 1,
        r = (0, b.A)({ guildId: l, productId: e.id });
    return 0 === i.length
        ? null
        : (0, s.jsx)(y.A, {
              label: C.intl.string(C.t.HOkHPB),
              children: (0, s.jsxs)("div", {
                  className: a()(w.KK, { [w.Oy]: n }),
                  children: [
                      (0, s.jsx)("div", {
                          className: w.yO,
                          children: i.map((t) => (0, s.jsx)(z.A, { attachment: t }, t.id)),
                      }),
                      (0, s.jsx)("div", { children: (0, s.jsx)(m.$, { ...r }) }),
                  ],
              }),
          });
}
function k(t) {
    let { role: e } = t;
    return null == e
        ? null
        : (0, s.jsx)(y.A, { label: C.intl.string(C.t.gWBNet), children: (0, s.jsx)(E.A, { role: e }) });
}
function M(t) {
    return (0, s.jsx)(u.E, { tag: "span", variant: "text-md/semibold", color: "text-default", children: t });
}
function P(t) {
    let { onClose: e, transitionState: l, guildProductListingId: n, guildId: a, skuPricePreview: r } = t,
        m = (0, o.bG)([_.A], () => _.A.getGuildProduct(n));
    c()(null != m, "guildProductListing cannot be null");
    let [j, v] = i.useState(!1);
    i.useEffect(() => {
        !(async function () {
            try {
                v(!0), await (0, N.py)(a, n), v(!1);
            } catch (t) {
                e(),
                    (0, x.A)({
                        title: C.intl.string(C.t.OCwKlu),
                        subtitle: C.intl.string(C.t.VQ0lXY),
                        confirmText: C.intl.string(C.t["NX+WJN"]),
                    });
            }
        })();
    }, [a, n, e]);
    let p = (m.attachments ?? []).length > 0,
        A = m.role_id,
        z = (0, o.bG)([g.A], () => (null != A ? g.A.getRole(a, A) : void 0));
    return (0, s.jsx)(d.Modal, {
        title: C.intl.string(C.t.dhAgv3),
        subtitle: C.intl.format(C.t.X6yvvo, { productName: m.name, emphasisHook: M }),
        onClose: e,
        transitionState: l,
        size: "md",
        actions: [],
        children: j
            ? (0, s.jsx)(f.y, {})
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsxs)(u.E, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: [
                              p ? C.intl.string(C.t["A/RnkK"]) + " " : "",
                              null != z ? C.intl.format(C.t.IeJDKs, { roleName: z.name, emphasisHook: M }) : "",
                          ],
                      }),
                      (0, s.jsx)(h.h, { size: 12 }),
                      (0, s.jsx)(u.E, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: C.intl.string(C.t["9S3QHF"]),
                      }),
                      (0, s.jsx)(h.h, { size: 24 }),
                      (0, s.jsx)(I, { guildProductListing: m, guildId: a, skuPricePreview: r }),
                      (0, s.jsx)(h.h, { size: 32 }),
                      (0, s.jsx)("div", { className: w.yF }),
                      (0, s.jsx)(h.h, { size: 32 }),
                      (0, s.jsxs)("ul", {
                          className: w.iq,
                          children: [(0, s.jsx)(O, { guildProductListing: m, guildId: a }), (0, s.jsx)(k, { role: z })],
                      }),
                  ],
              }),
    });
}
