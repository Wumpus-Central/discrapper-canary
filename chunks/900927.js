r.d(t, { Z: () => p });
var n = r(255367);
r(73800);
var i = r(399606),
    l = r(481060),
    a = r(275759),
    s = r(565138),
    o = r(706454),
    c = r(271383),
    u = r(430824),
    d = r(709054),
    m = r(388032),
    b = r(209643);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function j(e, t) {
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
function p(e) {
    let { userId: t, guildId: r, textClassName: p, tooltipDelay: f } = e,
        v = (0, i.e7)([o.default], () => o.default.locale),
        h = (0, i.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        y = (0, i.e7)([c.ZP], () => (null != r ? c.ZP.getMember(r, t) : null)),
        O = (0, a.FI)(d.default.extractTimestamp(t), v),
        g = (0, a.FI)(null == y ? void 0 : y.joinedAt, v);
    return null == h || null == y
        ? (0, n.jsx)(l.Text, {
              variant: 'text-sm/normal',
              className: p,
              children: O
          })
        : (0, n.jsxs)('div', {
              className: b.memberSinceWrapper,
              children: [
                  (0, n.jsxs)('div', {
                      className: b.memberSince,
                      children: [
                          (0, n.jsx)(l.ua7, {
                              text: m.intl.string(m.t.uvGmCw),
                              delay: f,
                              children: (e) =>
                                  (0, n.jsx)(
                                      l.gw7,
                                      j(
                                          x(
                                              {
                                                  size: 'custom',
                                                  width: 28,
                                                  height: 28,
                                                  color: 'currentColor'
                                              },
                                              e
                                          ),
                                          { className: b.discordIcon }
                                      )
                                  )
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: p,
                              children: O
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: b.divider }),
                  (0, n.jsxs)('div', {
                      className: b.memberSince,
                      children: [
                          (0, n.jsx)(l.ua7, {
                              text: h.name,
                              delay: f,
                              children: (e) =>
                                  (0, n.jsx)(
                                      s.Z,
                                      j(x({}, e), {
                                          guild: h,
                                          size: s.Z.Sizes.SMOL,
                                          className: b.guildIcon
                                      })
                                  )
                          }),
                          (0, n.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              className: p,
                              children: g
                          })
                      ]
                  })
              ]
          });
}
