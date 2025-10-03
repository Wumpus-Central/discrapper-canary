n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(28664),
    c = n(481060),
    d = n(734893),
    u = n(150512),
    m = n(314897),
    g = n(8426),
    p = n(969632),
    f = n(535907),
    h = n(388032),
    x = n(197530);
let b = function (e) {
    let { guildId: t } = e,
        l = (0, a.cj)([p.Z], () => {
            var e;
            return null != (e = p.Z.getSettings().welcomeMessage) ? e : f.z;
        }),
        b = i.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("36371").then(n.bind(n, 893626));
                    return (n) => {
                        var i, s;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (s = s =
                                {
                                    guildId: t,
                                    welcomeMessage: l,
                                    onSave: (e) => (0, g._N)(e),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            i),
                        );
                    };
                }),
            [t, l],
        ),
        j = (0, a.e7)([m.default], () => m.default.getId());
    return (0, d.pw)(l)
        ? (0, r.jsx)(c.zxk, {
              variant: "primary",
              size: "sm",
              text: h.intl.string(h.t["9Z+aEB"]),
              onClick: b,
          })
        : (0, r.jsxs)(c.P3F, {
              className: x.editWelcomeSection,
              onClick: b,
              children: [
                  (0, r.jsx)(u.Z, {
                      guildId: t,
                      welcomeMessage: {
                          authorIds: l.authorIds.length > 0 ? l.authorIds : [j],
                          message: l.message,
                      },
                  }),
                  (0, r.jsx)(o.u, {
                      text: h.intl.string(h.t.bt75u7),
                      children: (0, r.jsxs)("div", {
                          className: s()(x.actionItemEditButton, x.editWelcomeButton),
                          children: [
                              (0, r.jsx)(c.vdY, {
                                  size: "md",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(c.nn4, { children: h.intl.string(h.t.bt75u7) }),
                          ],
                      }),
                  }),
              ],
          });
};
