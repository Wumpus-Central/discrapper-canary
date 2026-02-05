n.d(e, { default: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    c = n.n(a),
    d = n(158954),
    o = n(311907),
    x = n(139033),
    u = n(732955),
    m = n(397927),
    h = n(303612),
    f = n(317525),
    j = n(71393),
    g = n(580630),
    v = n(912702),
    p = n(871109),
    _ = n(571654),
    N = n(59375),
    z = n(391442),
    A = n(411342),
    K = n(179499),
    b = n(985018),
    y = n(560381);
function T(t) {
    let { guildProductListing: e, guildId: n, skuPricePreview: s } = t,
        l = (0, _.z)(e),
        r = (0, g.$g)(s.amount, s.currency),
        a = (0, o.bG)([j.A], () => j.A.getGuild(n));
    return (
        c()(null != a, "guild cannot be null"),
        (0, i.jsxs)("div", {
            className: y.Tp,
            children: [
                (0, i.jsx)(h.A, { alt: "", className: y.$E, listing: e, imageSize: 100 }),
                (0, i.jsxs)("div", {
                    className: y.Vr,
                    children: [
                        (0, i.jsx)(m.Text, { variant: "text-md/medium", color: "text-strong", children: e.name }),
                        (0, i.jsx)(m.hKd, { size: 4 }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: l,
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: y.$8,
                    children: [
                        (0, i.jsx)(m.Text, { variant: "text-md/medium", color: "text-strong", children: r }),
                        (0, i.jsx)(m.hKd, { size: 4 }),
                        (0, i.jsx)(m.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: b.intl.string(b.t["5dWOZX"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
function C(t) {
    let { guildProductListing: e, guildId: n } = t,
        s = e.attachments ?? [],
        l = s.length > 1,
        a = (0, K.A)({ guildId: n, productId: e.id });
    return 0 === s.length
        ? null
        : (0, i.jsx)(z.A, {
              label: b.intl.string(b.t.HOkHPB),
              children: (0, i.jsxs)("div", {
                  className: r()(y.KK, { [y.Oy]: l }),
                  children: [
                      (0, i.jsx)("div", {
                          className: y.yO,
                          children: s.map((t) => (0, i.jsx)(N.A, { attachment: t }, t.id)),
                      }),
                      (0, i.jsx)("div", { children: (0, i.jsx)(u.$nd, { ...a }) }),
                  ],
              }),
          });
}
function k(t) {
    let { role: e } = t;
    return null == e
        ? null
        : (0, i.jsx)(z.A, { label: b.intl.string(b.t.gWBNet), children: (0, i.jsx)(A.A, { role: e }) });
}
function O(t) {
    return (0, i.jsx)(m.Text, { tag: "span", variant: "text-md/semibold", color: "text-default", children: t });
}
function P(t) {
    let { onClose: e, transitionState: n, guildProductListingId: l, guildId: r, skuPricePreview: a } = t,
        u = (0, o.bG)([p.A], () => p.A.getGuildProduct(l));
    c()(null != u, "guildProductListing cannot be null");
    let [h, j] = s.useState(!1);
    s.useEffect(() => {
        !(async function () {
            try {
                j(!0), await (0, v.py)(r, l), j(!1);
            } catch (t) {
                e(),
                    (0, x.A)({
                        title: b.intl.string(b.t.OCwKlu),
                        subtitle: b.intl.string(b.t.VQ0lXY),
                        confirmText: b.intl.string(b.t["NX+WJN"]),
                    });
            }
        })();
    }, [r, l, e]);
    let g = (u.attachments ?? []).length > 0,
        _ = u.role_id,
        N = (0, o.bG)([f.A], () => (null != _ ? f.A.getRole(r, _) : void 0));
    return (0, i.jsx)(d.Modal, {
        title: b.intl.string(b.t.dhAgv3),
        subtitle: b.intl.format(b.t.X6yvvo, { productName: u.name, emphasisHook: O }),
        onClose: e,
        transitionState: n,
        size: "md",
        actions: [],
        children: h
            ? (0, i.jsx)(m.y$y, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(m.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: [
                              g ? b.intl.string(b.t["A/RnkK"]) + " " : "",
                              null != N ? b.intl.format(b.t.IeJDKs, { roleName: N.name, emphasisHook: O }) : "",
                          ],
                      }),
                      (0, i.jsx)(m.hKd, { size: 12 }),
                      (0, i.jsx)(m.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: b.intl.string(b.t["9S3QHF"]),
                      }),
                      (0, i.jsx)(m.hKd, { size: 24 }),
                      (0, i.jsx)(T, { guildProductListing: u, guildId: r, skuPricePreview: a }),
                      (0, i.jsx)(m.hKd, { size: 32 }),
                      (0, i.jsx)("div", { className: y.yF }),
                      (0, i.jsx)(m.hKd, { size: 32 }),
                      (0, i.jsxs)("ul", {
                          className: y.iq,
                          children: [(0, i.jsx)(C, { guildProductListing: u, guildId: r }), (0, i.jsx)(k, { role: N })],
                      }),
                  ],
              }),
    });
}
