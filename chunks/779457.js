n.d(e, { default: () => C }), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(284009),
    c = n.n(s),
    d = n(158954),
    o = n(311907),
    u = n(862482),
    x = n(732955),
    m = n(397927),
    h = n(303612),
    j = n(282125),
    f = n(317525),
    b = n(71393),
    g = n(580630),
    v = n(912702),
    p = n(871109),
    y = n(571654),
    O = n(59375),
    z = n(391442),
    A = n(411342),
    N = n(179499),
    K = n(985018),
    P = n(560381);
function w(t) {
    let { guildProductListing: e, guildId: n, skuPricePreview: l } = t,
        a = (0, y.z)(e),
        i = (0, g.$g)(l.amount, l.currency),
        s = (0, o.bG)([b.A], () => b.A.getGuild(n));
    return (
        c()(null != s, "guild cannot be null"),
        (0, r.jsxs)("div", {
            className: P.Tp,
            children: [
                (0, r.jsx)(h.A, {
                    alt: "",
                    className: P.$E,
                    listing: e,
                    imageSize: 100,
                }),
                (0, r.jsxs)("div", {
                    className: P.Vr,
                    children: [
                        (0, r.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: e.name,
                        }),
                        (0, r.jsx)(m.hKd, { size: 4 }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: a,
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: P.$8,
                    children: [
                        (0, r.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: i,
                        }),
                        (0, r.jsx)(m.hKd, { size: 4 }),
                        (0, r.jsx)(m.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: K.intl.string(K.t["5dWOZX"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
function T(t) {
    var e;
    let { guildProductListing: n, guildId: l } = t,
        a = null != (e = n.attachments) ? e : [],
        s = a.length > 1,
        c = (0, N.A)({
            guildId: l,
            productId: n.id,
        });
    return 0 === a.length
        ? null
        : (0, r.jsx)(z.A, {
              label: K.intl.string(K.t.HOkHPB),
              children: (0, r.jsxs)("div", {
                  className: i()(P.KK, { [P.Oy]: s }),
                  children: [
                      (0, r.jsx)("div", {
                          className: P.yO,
                          children: a.map((t) => (0, r.jsx)(O.A, { attachment: t }, t.id)),
                      }),
                      (0, r.jsx)("div", {
                          children: (0, r.jsx)(
                              x.$nd,
                              (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = null != arguments[e] ? arguments[e] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (e) {
                                              var r;
                                              (r = n[e]),
                                                  e in t
                                                      ? Object.defineProperty(t, e, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (t[e] = r);
                                          });
                                  }
                                  return t;
                              })({}, c),
                          ),
                      }),
                  ],
              }),
          });
}
function _(t) {
    let { role: e } = t;
    return null == e
        ? null
        : (0, r.jsx)(z.A, {
              label: K.intl.string(K.t.gWBNet),
              children: (0, r.jsx)(A.A, { role: e }),
          });
}
function k(t) {
    return (0, r.jsx)(m.Text, {
        tag: "span",
        variant: "text-md/semibold",
        color: "text-default",
        children: t,
    });
}
function C(t) {
    var e;
    let { onClose: n, transitionState: a, guildProductListingId: i, guildId: s, skuPricePreview: x } = t,
        h = (0, o.bG)([p.A], () => p.A.getGuildProduct(i));
    c()(null != h, "guildProductListing cannot be null");
    let [b, g] = l.useState(!1);
    l.useEffect(() => {
        !(async function () {
            try {
                g(!0), await (0, v.py)(s, i), g(!1);
            } catch (t) {
                n(),
                    (0, j.A)({
                        body: K.intl.string(K.t.VQ0lXY),
                        confirmText: K.intl.string(K.t["NX+WJN"]),
                        header: K.intl.string(K.t.OCwKlu),
                        confirmButtonColor: u.$n.Colors.BRAND,
                    });
            }
        })();
    }, [s, i, n]);
    let y = (null != (e = h.attachments) ? e : []).length > 0,
        O = h.role_id,
        z = (0, o.bG)([f.A], () => (null != O ? f.A.getRole(s, O) : void 0));
    return (0, r.jsx)(d.Modal, {
        title: K.intl.string(K.t.dhAgv3),
        subtitle: K.intl.format(K.t.X6yvvo, {
            productName: h.name,
            emphasisHook: k,
        }),
        onClose: n,
        transitionState: a,
        size: "md",
        actions: [],
        children: b
            ? (0, r.jsx)(m.y$y, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(m.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: [
                              y ? K.intl.string(K.t["A/RnkK"]) + " " : "",
                              null != z
                                  ? K.intl.format(K.t.IeJDKs, {
                                        roleName: z.name,
                                        emphasisHook: k,
                                    })
                                  : "",
                          ],
                      }),
                      (0, r.jsx)(m.hKd, { size: 12 }),
                      (0, r.jsx)(m.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: K.intl.string(K.t["9S3QHF"]),
                      }),
                      (0, r.jsx)(m.hKd, { size: 24 }),
                      (0, r.jsx)(w, {
                          guildProductListing: h,
                          guildId: s,
                          skuPricePreview: x,
                      }),
                      (0, r.jsx)(m.hKd, { size: 32 }),
                      (0, r.jsx)("div", { className: P.yF }),
                      (0, r.jsx)(m.hKd, { size: 32 }),
                      (0, r.jsxs)("ul", {
                          className: P.iq,
                          children: [
                              (0, r.jsx)(T, {
                                  guildProductListing: h,
                                  guildId: s,
                              }),
                              (0, r.jsx)(_, { role: z }),
                          ],
                      }),
                  ],
              }),
    });
}
