n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(299619),
    l = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(750506),
    c = n(854987),
    u = n(222713),
    d = n(146104),
    p = n(612082),
    f = n(532294),
    h = n(49999),
    A = n(622865),
    g = n(985018),
    m = n(123406),
    b = n(844636),
    _ = n(966508);

function E(e) {
    var t, n;
    let { markAsDismissed: E } = e,
        O = u.g[f.P7.WELCOME],
        y = (0, a.rdh)(O.primaryColor).hex(),
        I = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return (0, r.jsx)(c.P.Provider, {
        value:
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, O)),
            (n = n =
                {
                    backgroundOverlayColor: O.primaryColor,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        children: (0, r.jsx)(o.Ay, {
            children: (0, r.jsxs)("div", {
                className: m.kL,
                style: {
                    backgroundImage: "url(".concat(_.A, "), linear-gradient(").concat(y, "80, black)"),
                    borderColor: y,
                    boxShadow: "0 0 15px 5px ".concat(y, "50"),
                },
                children: [
                    (0, r.jsx)(i.A, {
                        autoPlay: !I,
                        muted: !0,
                        playsInline: !0,
                        loop: !0,
                        className: m.wm,
                        children: (0, r.jsx)("source", {
                            src: b.A,
                            type: "video/webm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: m.FS,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "display-sm",
                                style: {
                                    color: y,
                                },
                                className: m.Vy,
                                children: g.intl.string(A.default["CdU/PF"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                style: {
                                    color: y,
                                },
                                children: g.intl.string(A.default["M/LvW0"]),
                            }),
                            (0, r.jsx)(a.DUT, {
                                className: m.r,
                                onClick: () => E(h.i.DISMISS),
                                style: {
                                    color: y,
                                },
                                children: (0, r.jsx)(a.Text, {
                                    variant: "text-xxs/normal",
                                    style: {
                                        color: y,
                                    },
                                    children: g.intl.string(g.t.WAI6xu),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.A, {
                        className: m.vk,
                        contentClassName: m.x6,
                        onClick: () => {
                            (0, d.A)("coachmark"), E(h.i.TAKE_ACTION);
                        },
                        children: (0, r.jsx)(a.KS6, {
                            color: y,
                            size: "sm",
                        }),
                    }),
                ],
            }),
        }),
    });
}
