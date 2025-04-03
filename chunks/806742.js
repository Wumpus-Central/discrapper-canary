n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(734893),
    d = n(150512),
    u = n(314897),
    m = n(8426),
    g = n(969632),
    p = n(535907),
    h = n(388032),
    f = n(773100);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = function (e) {
    let { guildId: t } = e,
        s = (0, l.cj)([g.Z], () => {
            var e;
            return null != (e = g.Z.getSettings().welcomeMessage) ? e : p.z;
        }),
        j = i.useCallback(
            () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('36371').then(n.bind(n, 893626));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            x(b({}, n), {
                                guildId: t,
                                welcomeMessage: s,
                                onSave: (e) => (0, m._N)(e)
                            })
                        );
                }),
            [t, s]
        ),
        N = (0, l.e7)([u.default], () => u.default.getId());
    return (0, c.pw)(s)
        ? (0, r.jsx)(o.zxk, {
              size: o.zxk.Sizes.SMALL,
              onClick: j,
              children: (0, r.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  children: h.NW.string(h.t['9Z+aEB'])
              })
          })
        : (0, r.jsxs)(o.P3F, {
              className: f.editWelcomeSection,
              onClick: j,
              children: [
                  (0, r.jsx)(d.Z, {
                      guildId: t,
                      welcomeMessage: {
                          authorIds: s.authorIds.length > 0 ? s.authorIds : [N],
                          message: s.message
                      }
                  }),
                  (0, r.jsx)(o.ua7, {
                      text: h.NW.string(h.t.bt75u7),
                      children: (e) =>
                          (0, r.jsxs)(
                              'div',
                              x(b({}, e), {
                                  className: a()(f.actionItemEditButton, f.editWelcomeButton),
                                  children: [
                                      (0, r.jsx)(o.vdY, {
                                          size: 'md',
                                          color: 'currentColor'
                                      }),
                                      (0, r.jsx)(o.nn4, { children: h.NW.string(h.t.bt75u7) })
                                  ]
                              })
                          )
                  })
              ]
          });
};
