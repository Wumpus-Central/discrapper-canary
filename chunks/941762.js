t.d(n, { Z: () => v });
var a = t(54381),
    r = t(473749),
    i = t(481060),
    l = t(239091),
    s = t(100527),
    o = t(49012),
    c = t(639777),
    d = t(47695),
    u = t(735276),
    m = t(619733),
    g = t(914820),
    f = t(388032),
    b = t(435261);
let x = {
    steps: {
        [m.EK.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function v(e) {
    let { guildId: n, instance: t } = e,
        m = r.useRef(null),
        v = (0, d.Z)(t.providerType, t.gameServerPanelUrl);
    return (0, c.Z)(n)
        ? (0, a.jsx)(i.yRy, {
              targetElementRef: m,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: r } = e;
                  return (0, a.jsx)(i.v2r, {
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, l.Zy)(), r();
                      },
                      "aria-label": f.intl.string(g.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, a.jsxs)(i.kSQ, {
                          children: [
                              null != v &&
                                  (0, a.jsx)(i.sNh, {
                                      id: "get-support",
                                      icon: i.kBi,
                                      label: f.intl.string(g.default.bBkeMs),
                                      action: () => {
                                          (0, o.q)({ href: v });
                                      },
                                  }),
                              (0, a.jsx)(i.sNh, {
                                  id: "settings",
                                  icon: i.ewm,
                                  label: f.intl.string(g.default["feUiM/"]),
                                  action: () => {
                                      (0, u.Z)({
                                          guildId: n,
                                          stepConfig: x,
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
                  return (0, a.jsx)(
                      i.P3F,
                      ((n = (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {},
                                  a = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (a = a.concat(
                                      Object.getOwnPropertySymbols(t).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                      }),
                                  )),
                                  a.forEach(function (n) {
                                      var a;
                                      (a = t[n]),
                                          n in e
                                              ? Object.defineProperty(e, n, {
                                                    value: a,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[n] = a);
                                  });
                          }
                          return e;
                      })(
                          {
                              "aria-label": f.intl.string(f.t["UKOtz+"]),
                              className: b.clickable,
                          },
                          e,
                      )),
                      (t = t =
                          {
                              innerRef: m,
                              children: (0, a.jsx)(i.xhG, {
                                  color: "currentColor",
                                  size: "sm",
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                          : (function (e, n) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, a);
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
