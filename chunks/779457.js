n.d(e, {
    default: () => k,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    c = n.n(a),
    d = n(158954),
    o = n(311907),
    u = n(139033),
    x = n(732955),
    m = n(397927),
    h = n(303612),
    f = n(317525),
    j = n(71393),
    g = n(580630),
    v = n(912702),
    p = n(871109),
    b = n(571654),
    y = n(59375),
    _ = n(391442),
    N = n(411342),
    z = n(179499),
    A = n(985018),
    K = n(560381);

function O(t) {
    let { guildProductListing: e, guildId: n, skuPricePreview: r } = t,
        i = (0, b.z)(e),
        s = (0, g.$g)(r.amount, r.currency),
        a = (0, o.bG)([j.A], () => j.A.getGuild(n));
    return (
        c()(null != a, "guild cannot be null"),
        (0, l.jsxs)("div", {
            className: K.Tp,
            children: [
                (0, l.jsx)(h.A, {
                    alt: "",
                    className: K.$E,
                    listing: e,
                    imageSize: 100,
                }),
                (0, l.jsxs)("div", {
                    className: K.Vr,
                    children: [
                        (0, l.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: e.name,
                        }),
                        (0, l.jsx)(m.hKd, {
                            size: 4,
                        }),
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: i,
                                }),
                                (0, l.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: a.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: K.$8,
                    children: [
                        (0, l.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "text-strong",
                            children: s,
                        }),
                        (0, l.jsx)(m.hKd, {
                            size: 4,
                        }),
                        (0, l.jsx)(m.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: A.intl.string(A.t["5dWOZX"]),
                        }),
                    ],
                }),
            ],
        })
    );
}

function T(t) {
    var e;
    let { guildProductListing: n, guildId: r } = t,
        i = null != (e = n.attachments) ? e : [],
        a = i.length > 1,
        c = (0, z.A)({
            guildId: r,
            productId: n.id,
        });
    return 0 === i.length
        ? null
        : (0, l.jsx)(_.A, {
              label: A.intl.string(A.t.HOkHPB),
              children: (0, l.jsxs)("div", {
                  className: s()(K.KK, {
                      [K.Oy]: a,
                  }),
                  children: [
                      (0, l.jsx)("div", {
                          className: K.yO,
                          children: i.map((t) =>
                              (0, l.jsx)(
                                  y.A,
                                  {
                                      attachment: t,
                                  },
                                  t.id,
                              ),
                          ),
                      }),
                      (0, l.jsx)("div", {
                          children: (0, l.jsx)(
                              x.$nd,
                              (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = null != arguments[e] ? arguments[e] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (e) {
                                              var l;
                                              (l = n[e]),
                                                  e in t
                                                      ? Object.defineProperty(t, e, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (t[e] = l);
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

function P(t) {
    let { role: e } = t;
    return null == e
        ? null
        : (0, l.jsx)(_.A, {
              label: A.intl.string(A.t.gWBNet),
              children: (0, l.jsx)(N.A, {
                  role: e,
              }),
          });
}

function C(t) {
    return (0, l.jsx)(m.Text, {
        tag: "span",
        variant: "text-md/semibold",
        color: "text-default",
        children: t,
    });
}

function k(t) {
    var e;
    let { onClose: n, transitionState: i, guildProductListingId: s, guildId: a, skuPricePreview: x } = t,
        h = (0, o.bG)([p.A], () => p.A.getGuildProduct(s));
    c()(null != h, "guildProductListing cannot be null");
    let [j, g] = r.useState(!1);
    r.useEffect(() => {
        !(async function () {
            try {
                g(!0), await (0, v.py)(a, s), g(!1);
            } catch (t) {
                n(),
                    (0, u.A)({
                        title: A.intl.string(A.t.OCwKlu),
                        subtitle: A.intl.string(A.t.VQ0lXY),
                        confirmText: A.intl.string(A.t["NX+WJN"]),
                    });
            }
        })();
    }, [a, s, n]);
    let b = (null != (e = h.attachments) ? e : []).length > 0,
        y = h.role_id,
        _ = (0, o.bG)([f.A], () => (null != y ? f.A.getRole(a, y) : void 0));
    return (0, l.jsx)(d.Modal, {
        title: A.intl.string(A.t.dhAgv3),
        subtitle: A.intl.format(A.t.X6yvvo, {
            productName: h.name,
            emphasisHook: C,
        }),
        onClose: n,
        transitionState: i,
        size: "md",
        actions: [],
        children: j
            ? (0, l.jsx)(m.y$y, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)(m.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: [
                              b ? A.intl.string(A.t["A/RnkK"]) + " " : "",
                              null != _
                                  ? A.intl.format(A.t.IeJDKs, {
                                        roleName: _.name,
                                        emphasisHook: C,
                                    })
                                  : "",
                          ],
                      }),
                      (0, l.jsx)(m.hKd, {
                          size: 12,
                      }),
                      (0, l.jsx)(m.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: A.intl.string(A.t["9S3QHF"]),
                      }),
                      (0, l.jsx)(m.hKd, {
                          size: 24,
                      }),
                      (0, l.jsx)(O, {
                          guildProductListing: h,
                          guildId: a,
                          skuPricePreview: x,
                      }),
                      (0, l.jsx)(m.hKd, {
                          size: 32,
                      }),
                      (0, l.jsx)("div", {
                          className: K.yF,
                      }),
                      (0, l.jsx)(m.hKd, {
                          size: 32,
                      }),
                      (0, l.jsxs)("ul", {
                          className: K.iq,
                          children: [
                              (0, l.jsx)(T, {
                                  guildProductListing: h,
                                  guildId: a,
                              }),
                              (0, l.jsx)(P, {
                                  role: _,
                              }),
                          ],
                      }),
                  ],
              }),
    });
}
