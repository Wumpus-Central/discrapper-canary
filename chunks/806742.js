n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(28664),
    c = n(481060),
    d = n(734893),
    u = n(150512),
    g = n(314897),
    m = n(8426),
    p = n(969632),
    f = n(535907),
    h = n(388032),
    b = n(197530);
let x = function (e) {
    let { guildId: t } = e,
        l = (0, s.cj)([p.Z], () => {
            var e;
            return null != (e = p.Z.getSettings().welcomeMessage) ? e : f.z;
        }),
        x = i.useCallback(
            () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("36371").then(n.bind(n, 893626));
                    return (n) => {
                        var i, a;
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
                            (a = a =
                                {
                                    guildId: t,
                                    welcomeMessage: l,
                                    onSave: (e) => (0, m._N)(e),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i),
                        );
                    };
                }),
            [t, l],
        ),
        j = (0, s.e7)([g.default], () => g.default.getId());
    return (0, d.pw)(l)
        ? (0, r.jsx)(c.Button, {
              variant: "primary",
              size: "sm",
              text: h.intl.string(h.t["9Z+aEP"]),
              onClick: x,
          })
        : (0, r.jsxs)(c.P3F, {
              className: b.editWelcomeSection,
              onClick: x,
              children: [
                  (0, r.jsx)(u.Z, {
                      guildId: t,
                      welcomeMessage: {
                          authorIds: l.authorIds.length > 0 ? l.authorIds : [j],
                          message: l.message,
                      },
                  }),
                  (0, r.jsx)(o.u, {
                      text: h.intl.string(h.t.bt75uw),
                      children: (0, r.jsxs)("div", {
                          className: a()(b.actionItemEditButton, b.editWelcomeButton),
                          children: [
                              (0, r.jsx)(c.vdY, {
                                  size: "md",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(c.nn4, { children: h.intl.string(h.t.bt75uw) }),
                          ],
                      }),
                  }),
              ],
          });
};
