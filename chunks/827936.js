n.d(t, {
    A: () => p,
});
var i = n(627968);
n(64700);
var r = n(158954),
    l = n(311907),
    o = n(827734),
    s = n(397927),
    a = n(308528),
    d = n(297413),
    c = n(966327),
    u = n(287809),
    A = n(985018),
    g = n(792595);

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

function p(e, t) {
    let n = (0, l.bG)([u.default], () => u.default.getCurrentUser());
    return null == n || t.ownerId !== n.id || e.id === n.id
        ? null
        : (0, i.jsx)(s.Drp, {
              id: "make-dm-owner",
              color: "danger",
              label: A.intl.string(A.t["6t3CyN"]),
              action: () => {
                  (0, s.qfG)((l) => {
                      var u, p;
                      return (0, i.jsx)(
                          r.ConfirmModal,
                          ((u = (function (e) {
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
                                  title: A.intl.string(A.t.WZoUsm),
                                  confirmText: A.intl.string(A.t["cY+Oob"]),
                                  cancelText: A.intl.string(A.t["ETE/oC"]),
                                  onConfirm: () => a.A.setDMOwner(t.id, e.id),
                              },
                              l,
                          )),
                          (p = p =
                              {
                                  children: (0, i.jsxs)("div", {
                                      className: g.Uh,
                                      children: [
                                          (0, i.jsx)(b, {
                                              color: o.A.unsafe_rawColors.PRIMARY_300.css,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: g.nS,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: g.HT,
                                                      children: (0, i.jsx)(c.A, {
                                                          user: n,
                                                          size: s._3J.SIZE_80,
                                                      }),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: g.to,
                                                      children: (0, i.jsx)(c.A, {
                                                          user: e,
                                                          size: s._3J.SIZE_80,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(s.Text, {
                                              variant: "text-md/normal",
                                              children: A.intl.format(A.t.gsBb3F, {
                                                  usernameHook: (t, n) =>
                                                      (0, i.jsx)(
                                                          d.A,
                                                          {
                                                              usernameIcon: (0, i.jsx)(s.euF, {
                                                                  className: g.jj,
                                                                  src: e.getAvatarURL(void 0, 16),
                                                                  size: s._3J.SIZE_16,
                                                                  "aria-hidden": !0,
                                                              }),
                                                              className: g.xK,
                                                              usernameClass: g.Xh,
                                                              discriminatorClass: g.D2,
                                                              user: e,
                                                          },
                                                          n,
                                                      ),
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(p))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(p)).forEach(function (e) {
                                    Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(p, e));
                                }),
                          u),
                      );
                  });
              },
          });
}
