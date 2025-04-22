n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var l = n(399606),
    s = n(481060),
    i = n(275759),
    a = n(565138),
    c = n(706454),
    o = n(271383),
    u = n(430824),
    d = n(709054),
    m = n(388032),
    p = n(209643);
function f(e) {
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
function j(e, t) {
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
function b(e) {
    let { userId: t, guildId: n, textClassName: b, tooltipDelay: x } = e,
        v = (0, l.e7)([c.default], () => c.default.locale),
        g = (0, l.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        h = (0, l.e7)([o.ZP], () => (null != n ? o.ZP.getMember(n, t) : null)),
        y = (0, i.FI)(d.default.extractTimestamp(t), v),
        O = (0, i.FI)(null == h ? void 0 : h.joinedAt, v);
    return null == g || null == h
        ? (0, r.jsx)(s.Text, {
              variant: 'text-sm/normal',
              className: b,
              children: y
          })
        : (0, r.jsxs)('div', {
              className: p.memberSinceWrapper,
              children: [
                  (0, r.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, r.jsx)(s.ua7, {
                              text: m.intl.string(m.t.uvGmCw),
                              delay: x,
                              children: (e) =>
                                  (0, r.jsx)(
                                      s.gw7,
                                      j(
                                          f(
                                              {
                                                  size: 'custom',
                                                  width: 28,
                                                  height: 28,
                                                  color: 'currentColor'
                                              },
                                              e
                                          ),
                                          { className: p.discordIcon }
                                      )
                                  )
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              className: b,
                              children: y
                          })
                      ]
                  }),
                  (0, r.jsx)('div', { className: p.divider }),
                  (0, r.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, r.jsx)(s.ua7, {
                              text: g.name,
                              delay: x,
                              children: (e) =>
                                  (0, r.jsx)(
                                      a.Z,
                                      j(f({}, e), {
                                          guild: g,
                                          size: a.Z.Sizes.SMOL
                                      })
                                  )
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              className: b,
                              children: O
                          })
                      ]
                  })
              ]
          });
}
