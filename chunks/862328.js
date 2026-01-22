n.d(t, { Q: () => y }), n(65821), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(534409),
    c = n(250402);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = 16,
    g = 2,
    E = (e) => {
        switch (e) {
            case 52:
                return "M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H26.4C35.3608 0 39.8413 0 43.2638 1.7439C46.2744 3.27787 48.7221 5.72556 50.2561 8.73615C52 12.1587 52 16.6392 52 25.6V26.4C52 35.3608 52 39.8413 50.2561 43.2638C48.7221 46.2744 46.2744 48.7221 43.2638 50.2561C39.8413 52 35.3608 52 26.4 52H25.6C16.6392 52 12.1587 52 8.73615 50.2561C5.72556 48.7221 3.27787 46.2744 1.7439 43.2638C0 39.8413 0 35.3608 0 26.4V25.6Z";
            case 48:
                return "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z";
            case 44:
                return "M0 19.2C0 12.4794 0 9.11906 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11906 0 12.4794 0 19.2 0H24.8C31.5206 0 34.8809 0 37.4479 1.30792C39.7058 2.4584 41.5416 4.29417 42.6921 6.55211C44 9.11906 44 12.4794 44 19.2V24.8C44 31.5206 44 34.8809 42.6921 37.4479C41.5416 39.7058 39.7058 41.5416 37.4479 42.6921C34.8809 44 31.5206 44 24.8 44H19.2C12.4794 44 9.11906 44 6.55211 42.6921C4.29417 41.5416 2.4584 39.7058 1.30792 37.4479C0 34.8809 0 31.5206 0 24.8V19.2Z";
            case 40:
                return "M0 17.4545C0 11.3449 0 8.29005 1.18902 5.95647C2.23491 3.90379 3.90379 2.23491 5.95647 1.18902C8.29005 0 11.3449 0 17.4545 0H22.5455C28.6551 0 31.71 0 34.0435 1.18902C36.0962 2.23491 37.7651 3.90379 38.811 5.95647C40 8.29005 40 11.3449 40 17.4545V22.5455C40 28.6551 40 31.71 38.811 34.0435C37.7651 36.0962 36.0962 37.7651 34.0435 38.811C31.71 40 28.6551 40 22.5455 40H17.4545C11.3449 40 8.29005 40 5.95647 38.811C3.90379 37.7651 2.23491 36.0962 1.18902 34.0435C0 31.71 0 28.6551 0 22.5455V17.4545Z";
            default:
                throw Error("Unsupported BlobMask squicle size: ".concat(e));
        }
    },
    b = (e) => {
        switch (e) {
            case 48:
                return "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z";
            case 44:
                return "M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z";
            case 40:
                return "M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z";
            default:
                throw Error("Unsupported BlobMask circle size: ".concat(e));
        }
    };
function y(e) {
    let {
            selected: t = !1,
            lowerBadgeSize: n = {
                width: m,
                height: m,
            },
            highlight: i = !1,
            rounded: a = !1,
        } = e,
        s = _(e, ["selected", "lowerBadgeSize", "highlight", "rounded"]),
        c = !!s.isFolder,
        u = (0, l.qK)("BlobMask"),
        f = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE),
        h = (0, o.rdh)(o.LU0.modules.guildbar.FOLDER_SIZE),
        g = !u && c ? h : f,
        E = g / 2;
    return (0, r.jsx)(
        O,
        p(d({}, s), {
            selected: t,
            rounded: a,
            baseViewBoxSize: g,
            viewBoxSize: g,
            style: {
                width: g,
                height: g,
            },
            badgeMaskSize: E,
            badgeMaskStroke: 2,
            lowerBadgeSize: n,
            highlight: i,
        }),
    );
}
function O(e) {
    let {
            children: t,
            viewBoxSize: n,
            className: a,
            style: l,
            innerClassName: u,
            isFolder: d,
            lowerBadgeSize: f,
            highlight: p,
            badgeMaskStroke: _,
            badgeMaskSize: h,
            upperBadge: y,
            lowerBadge: O,
            rounded: A = !1,
            "aria-hidden": v,
        } = e,
        [S, I] = i.useState(!1),
        T = () => {
            I(!0);
        },
        C = () => {
            I(!1);
        },
        N = null != y,
        R = null != O,
        w = i.useId(),
        P = "".concat(w, "-upper_badge_masks"),
        D = "".concat(w, "-lower_badge_masks"),
        x = "".concat(w, "-blob_mask"),
        L = "".concat(w, "-stroke_mask"),
        j = "".concat(w, "-highlight_mask"),
        M = (null == f ? void 0 : f.width) != null ? f.width : m,
        k = (null == f ? void 0 : f.height) != null ? f.height : m,
        U = {
            width: d ? n : n + 8,
            height: d ? n : n + 8,
            x: d ? 0 : -4,
            y: d ? 0 : -4,
        },
        G = d ? 20 : h,
        V = A ? b(n) : E(n);
    return (0, r.jsxs)(
        "div",
        {
            className: s()(a, c.iE),
            style: l,
            onFocus: T,
            onBlur: C,
            "aria-hidden": v,
            children: [
                (0, r.jsxs)(
                    "svg",
                    {
                        width: U.width,
                        height: U.height,
                        viewBox: "".concat(U.x, " ").concat(U.y, " ").concat(U.width, " ").concat(U.height),
                        className: s()(c.JW, {
                            [c.Qq]: p,
                            [c.Pm]: !d,
                        }),
                        overflow: "visible",
                        role: "none",
                        children: [
                            (0, r.jsxs)("defs", {
                                children: [
                                    p &&
                                        (0, r.jsx)("path", {
                                            d: V,
                                            id: j,
                                        }),
                                    (0, r.jsx)("path", {
                                        d: V,
                                        id: x,
                                    }),
                                    null != y
                                        ? (0, r.jsx)("rect", {
                                              id: P,
                                              x: n - G + _,
                                              y: -_,
                                              width: G,
                                              height: G,
                                              rx: G / 2,
                                              ry: G / 2,
                                          })
                                        : null,
                                    null != O
                                        ? (0, r.jsx)("rect", {
                                              id: D,
                                              x: n - (M + 2 * _) + _,
                                              y: n - (k + 2 * _) + _,
                                              width: M + 2 * _,
                                              height: k + 2 * _,
                                              rx: h / 2,
                                              ry: h / 2,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsxs)("mask", {
                                id: w,
                                fill: "black",
                                x: 0,
                                y: 0,
                                width: n,
                                height: n,
                                children: [
                                    p &&
                                        (0, r.jsx)("use", {
                                            href: "#".concat(j),
                                            fill: "black",
                                        }),
                                    (0, r.jsx)("use", {
                                        href: "#".concat(x),
                                        fill: "white",
                                        className: s()({ [c.OV]: p }),
                                    }),
                                    N
                                        ? (0, r.jsx)("use", {
                                              href: "#".concat(P),
                                              fill: "black",
                                          })
                                        : null,
                                    R
                                        ? (0, r.jsx)("use", {
                                              href: "#".concat(D),
                                              fill: "black",
                                          })
                                        : null,
                                ],
                            }),
                            N || R
                                ? (0, r.jsxs)("mask", {
                                      id: L,
                                      children: [
                                          (0, r.jsx)("rect", {
                                              width: "150%",
                                              height: "150%",
                                              x: "-25%",
                                              y: "-25%",
                                              fill: "white",
                                          }),
                                          N
                                              ? (0, r.jsx)("use", {
                                                    href: "#".concat(P),
                                                    fill: "black",
                                                })
                                              : null,
                                          R
                                              ? (0, r.jsx)("use", {
                                                    href: "#".concat(D),
                                                    fill: "black",
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            S
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("g", {
                                              className: c.ZD,
                                              mask: "url(#".concat(L, ")"),
                                              children: (0, r.jsx)("use", { href: "#".concat(x) }),
                                          }),
                                          (0, r.jsxs)("g", {
                                              className: c.e7,
                                              children: [
                                                  null != y ? (0, r.jsx)("use", { href: "#".concat(P) }) : null,
                                                  null != O ? (0, r.jsx)("use", { href: "#".concat(D) }) : null,
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                            p &&
                                (0, r.jsx)("path", {
                                    d: V,
                                    stroke: o.LU0.unsafe_rawColors.BRAND_500.css,
                                    strokeWidth: g,
                                    className: c.Zt,
                                    mask: "url(#".concat(L, ")"),
                                }),
                            (0, r.jsx)(
                                "foreignObject",
                                {
                                    mask: "url(#".concat(w, ")"),
                                    x: 0,
                                    y: 0,
                                    className: u,
                                    width: n,
                                    height: n,
                                    children: t,
                                },
                                "foreign-object",
                            ),
                        ],
                    },
                    "svg",
                ),
                null != O
                    ? (0, r.jsx)("div", {
                          className: c.H7,
                          children: O,
                      })
                    : null,
                null != y
                    ? (0, r.jsx)("div", {
                          className: c.A8,
                          children: y,
                      })
                    : null,
            ],
        },
        "".concat(R, "-").concat(N),
    );
}
