t.d(n, { Z: () => v });
var r = t(951288),
    a = t(647438),
    i = t(481060),
    l = t(239091),
    s = t(100527),
    o = t(49012),
    c = t(639777),
    d = t(47695),
    u = t(735276),
    m = t(619733),
    g = t(732031),
    f = t(388032),
    x = t(799070);
let _ = {
    steps: {
        [m.EK.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function v(e) {
    let { guildId: n, instance: t } = e,
        m = a.useRef(null),
        v = (0, d.Z)(t.providerType, t.gameServerPanelUrl);
    return (0, c.Z)(n)
        ? (0, r.jsx)(i.yRy, {
              targetElementRef: m,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, r.jsx)(i.v2r, {
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, l.Zy)(), a();
                      },
                      "aria-label": f.intl.string(g.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, r.jsxs)(i.kSQ, {
                          children: [
                              null != v &&
                                  (0, r.jsx)(i.sNh, {
                                      id: "get-support",
                                      icon: i.kBi,
                                      label: f.intl.string(g.default.bBkeMs),
                                      action: () => {
                                          (0, o.q)({ href: v });
                                      },
                                  }),
                              (0, r.jsx)(i.sNh, {
                                  id: "settings",
                                  icon: i.ewm,
                                  label: f.intl.string(g.default["feUiM/"]),
                                  action: () => {
                                      (0, u.Z)({
                                          guildId: n,
                                          stepConfig: _,
                                          initialGameServerInstance: t,
                                          analyticsLocation: s.Z.GAME_SERVER_PAGE,
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
                              "aria-label": f.intl.string(f.t["UKOtz+"]),
                              className: x.clickable,
                          },
                          e,
                      )),
                      (t = t =
                          {
                              innerRef: m,
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
