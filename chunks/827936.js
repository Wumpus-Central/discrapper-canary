n.d(t, {
    A: () => g,
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(827734),
    s = n(397927),
    o = n(308528),
    a = n(297413),
    d = n(966327),
    c = n(287809),
    u = n(985018),
    A = n(792595);

function b(e) {
    let { color: t, className: n } = e;
    return (0, i.jsx)("svg", {
        className: n,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
                (0, i.jsx)("path", {
                    d: "m0 0h80v16h-80z",
                }),
                (0, i.jsxs)("g", {
                    stroke: t,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    children: [
                        (0, i.jsx)("path", {
                            d: "m71 1h4v4.16",
                        }),
                        (0, i.jsx)("path", {
                            d: "m2 1h4v4.16",
                            transform: "matrix(-1 0 0 1 8 0)",
                        }),
                        (0, i.jsx)("path", {
                            d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                        }),
                        (0, i.jsx)("path", {
                            d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                        }),
                    ],
                }),
            ],
        }),
    });
}

function g(e, t) {
    let n = (0, r.bG)([c.default], () => c.default.getCurrentUser());
    return null == n || t.ownerId !== n.id || e.id === n.id
        ? null
        : (0, i.jsx)(s.Drp, {
              id: "make-dm-owner",
              color: "danger",
              label: u.intl.string(u.t["6t3CyN"]),
              action: () => {
                  (0, s.qfG)((r) => {
                      var c, g;
                      return (0, i.jsxs)(
                          s.VoidConfirmModal,
                          ((c = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })(
                              {
                                  bodyClassName: A.Uh,
                                  header: u.intl.string(u.t.WZoUsm),
                                  confirmText: u.intl.string(u.t["cY+Oob"]),
                                  cancelText: u.intl.string(u.t["ETE/oC"]),
                                  onConfirm: () => o.A.setDMOwner(t.id, e.id),
                              },
                              r,
                          )),
                          (g = g =
                              {
                                  children: [
                                      (0, i.jsx)(b, {
                                          color: l.A.unsafe_rawColors.PRIMARY_300.css,
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: A.nS,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: A.HT,
                                                  children: (0, i.jsx)(d.A, {
                                                      user: n,
                                                      size: s._3J.SIZE_80,
                                                  }),
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: A.to,
                                                  children: (0, i.jsx)(d.A, {
                                                      user: e,
                                                      size: s._3J.SIZE_80,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: "text-md/normal",
                                          children: u.intl.format(u.t.gsBb3F, {
                                              usernameHook: (t, n) =>
                                                  (0, i.jsx)(
                                                      a.A,
                                                      {
                                                          usernameIcon: (0, i.jsx)(s.euF, {
                                                              className: A.jj,
                                                              src: e.getAvatarURL(void 0, 16),
                                                              size: s._3J.SIZE_16,
                                                              "aria-hidden": !0,
                                                          }),
                                                          className: A.xK,
                                                          usernameClass: A.Xh,
                                                          discriminatorClass: A.D2,
                                                          user: e,
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(g))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(g)).forEach(function (e) {
                                    Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(g, e));
                                }),
                          c),
                      );
                  });
              },
          });
}
