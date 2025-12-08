r.d(n, { Z: () => h });
var t = r(54381);
r(473749);
var i = r(442837),
    o = r(692547),
    s = r(481060),
    l = r(493683),
    a = r(129861),
    d = r(700582),
    c = r(594174),
    u = r(388032),
    m = r(452438);
function p(e) {
    let { color: n, className: r } = e;
    return (0, t.jsx)("svg", {
        className: r,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
                (0, t.jsx)("path", { d: "m0 0h80v16h-80z" }),
                (0, t.jsxs)("g", {
                    stroke: n,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    children: [
                        (0, t.jsx)("path", { d: "m71 1h4v4.16" }),
                        (0, t.jsx)("path", {
                            d: "m2 1h4v4.16",
                            transform: "matrix(-1 0 0 1 8 0)",
                        }),
                        (0, t.jsx)("path", { d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4" }),
                        (0, t.jsx)("path", { d: "m72.13 10.474 2.869 3.12 2.631-3.12" }),
                    ],
                }),
            ],
        }),
    });
}
function h(e, n) {
    let r = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return null == r || n.ownerId !== r.id || e.id === r.id
        ? null
        : (0, t.jsx)(s.sNh, {
              id: "make-dm-owner",
              color: "danger",
              label: u.intl.string(u.t["6t3CyN"]),
              action: () => {
                  (0, s.h7j)((i) => {
                      var c, h;
                      return (0, t.jsxs)(
                          s.VoidConfirmModal,
                          ((c = (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var r = null != arguments[n] ? arguments[n] : {},
                                      t = Object.keys(r);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (t = t.concat(
                                          Object.getOwnPropertySymbols(r).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                          }),
                                      )),
                                      t.forEach(function (n) {
                                          var t;
                                          (t = r[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: t,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[n] = t);
                                      });
                              }
                              return e;
                          })(
                              {
                                  bodyClassName: m.confirmModal,
                                  header: u.intl.string(u.t.WZoUsm),
                                  confirmText: u.intl.string(u.t["cY+Oob"]),
                                  cancelText: u.intl.string(u.t["ETE/oC"]),
                                  onConfirm: () => l.Z.setDMOwner(n.id, e.id),
                              },
                              i,
                          )),
                          (h = h =
                              {
                                  children: [
                                      (0, t.jsx)(p, { color: o.Z.unsafe_rawColors.PRIMARY_300.css }),
                                      (0, t.jsxs)("div", {
                                          className: m.fromToWrapper,
                                          children: [
                                              (0, t.jsx)("div", {
                                                  className: m.from,
                                                  children: (0, t.jsx)(d.Z, {
                                                      user: r,
                                                      size: s.EFr.SIZE_80,
                                                  }),
                                              }),
                                              (0, t.jsx)("div", {
                                                  className: m.to,
                                                  children: (0, t.jsx)(d.Z, {
                                                      user: e,
                                                      size: s.EFr.SIZE_80,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, t.jsx)(s.Text, {
                                          variant: "text-md/normal",
                                          children: u.intl.format(u.t.gsBb3F, {
                                              usernameHook: (n, r) =>
                                                  (0, t.jsx)(
                                                      a.Z,
                                                      {
                                                          usernameIcon: (0, t.jsx)(s.qEK, {
                                                              className: m.avatarIcon,
                                                              src: e.getAvatarURL(void 0, 16),
                                                              size: s.EFr.SIZE_16,
                                                              "aria-hidden": !0,
                                                          }),
                                                          className: m.discordTag,
                                                          usernameClass: m.username,
                                                          discriminatorClass: m.discriminator,
                                                          user: e,
                                                      },
                                                      r,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(h))
                              : (function (e, n) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var t = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, t);
                                    }
                                    return r;
                                })(Object(h)).forEach(function (e) {
                                    Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(h, e));
                                }),
                          c),
                      );
                  });
              },
          });
}
