r.d(t, { Z: () => j });
var n = r(255367);
r(73800);
var i = r(399606),
    l = r(481060),
    a = r(275759),
    o = r(565138),
    s = r(706454),
    c = r(271383),
    u = r(430824),
    d = r(709054),
    b = r(388032),
    m = r(209643);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function j(e) {
    let { userId: t, guildId: r, textClassName: j, tooltipDelay: v } = e,
        x = (0, i.e7)([s.default], () => s.default.locale),
        O = (0, i.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        y = (0, i.e7)([c.ZP], () => (null != r ? c.ZP.getMember(r, t) : null)),
        h = (0, a.FI)(d.default.extractTimestamp(t), x),
        g = (0, a.FI)(null == y ? void 0 : y.joinedAt, x);
    return null == O || null == y
        ? (0, n.jsx)(l.Text, {
              variant: 'text-sm/normal',
              className: j,
              children: h
          })
        : (0, n.jsxs)('div', {
              className: m.memberSinceWrapper,
              children: [
                  (0, n.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, n.jsx)(l.ua7, {
                              text: b.intl.string(b.t.uvGmCw),
                              delay: v,
                              children: (e) =>
                                  (0, n.jsx)(
                                      l.gw7,
                                      f(
                                          p(
                                              {
                                                  size: 'custom',
                                                  width: 28,
                                                  height: 28,
                                                  color: 'currentColor'
                                              },
                                              e
                                          ),
                                          { className: m.discordIcon }
                                      )
                                  )
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: j,
                              children: h
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: m.divider }),
                  (0, n.jsxs)('div', {
                      className: m.memberSince,
                      children: [
                          (0, n.jsx)(l.ua7, {
                              text: O.name,
                              delay: v,
                              children: (e) =>
                                  (0, n.jsx)(
                                      o.Z,
                                      f(p({}, e), {
                                          guild: O,
                                          size: o.Z.Sizes.SMOL
                                      })
                                  )
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: j,
                              children: g
                          })
                      ]
                  })
              ]
          });
}
