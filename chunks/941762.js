t.d(n, { Z: () => _ });
var r = t(951288),
    a = t(647438),
    i = t(481060),
    s = t(239091),
    o = t(100527),
    l = t(49012),
    c = t(639777),
    d = t(735276),
    u = t(619733),
    m = t(470658),
    g = t(388032),
    f = t(799070);
let x = {
    steps: {
        [u.EK.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function _(e) {
    let { guildId: n, instance: t } = e,
        _ = a.useRef(null);
    return (0, c.Z)(n)
        ? (0, r.jsx)(i.yRy, {
              targetElementRef: _,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, r.jsx)(i.v2r, {
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, s.Zy)(), a();
                      },
                      "aria-label": g.intl.string(m.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, r.jsxs)(i.kSQ, {
                          children: [
                              null != t.providerType &&
                                  (0, r.jsx)(i.sNh, {
                                      id: "get-support",
                                      icon: i.kBi,
                                      label: g.intl.string(m.default.bBkeMs),
                                      action: () => {
                                          (0, l.q)({ href: u.uz[t.providerType] });
                                      },
                                  }),
                              (0, r.jsx)(i.sNh, {
                                  id: "settings",
                                  icon: i.ewm,
                                  label: g.intl.string(m.default["feUiM/"]),
                                  action: () => {
                                      (0, d.Z)({
                                          guildId: n,
                                          stepConfig: x,
                                          initialGameServerInstance: t,
                                          analyticsLocation: o.Z.GAME_SERVER_OVERVIEW,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) => {
                  var n, t;
                  return (0, r.jsx)(
                      i.P3F,
                      ((n = (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {},
                                  r = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(t).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (n) {
                                      var r;
                                      (r = t[n]),
                                          n in e
                                              ? Object.defineProperty(e, n, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[n] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              "aria-label": g.intl.string(g.t["UKOtz+"]),
                              className: f.clickable,
                          },
                          e,
                      )),
                      (t = t =
                          {
                              innerRef: _,
                              children: (0, r.jsx)(i.xhG, {
                                  color: "currentColor",
                                  size: "sm",
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                          : (function (e, n) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, r);
                                }
                                return t;
                            })(Object(t)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                            }),
                      n),
                  );
              },
          })
        : null;
}
