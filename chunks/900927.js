r.d(t, { Z: () => x });
var n = r(200651);
r(192379);
var l = r(399606),
    s = r(481060),
    i = r(275759),
    a = r(565138),
    o = r(706454),
    c = r(271383),
    u = r(430824),
    d = r(709054),
    m = r(388032),
    p = r(490605);
function j(e) {
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
function x(e) {
    let { userId: t, guildId: r, textClassName: x, tooltipDelay: b } = e,
        v = (0, l.e7)([o.default], () => o.default.locale),
        y = (0, l.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        h = (0, l.e7)([c.ZP], () => (null != r ? c.ZP.getMember(r, t) : null)),
        g = (0, i.FI)(d.default.extractTimestamp(t), v),
        O = (0, i.FI)(null == h ? void 0 : h.joinedAt, v);
    return null == y || null == h
        ? (0, n.jsx)(s.Text, {
              variant: 'text-sm/normal',
              className: x,
              children: g
          })
        : (0, n.jsxs)('div', {
              className: p.memberSinceWrapper,
              children: [
                  (0, n.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, n.jsx)(s.ua7, {
                              text: m.NW.string(m.t.uvGmCw),
                              delay: b,
                              children: (e) =>
                                  (0, n.jsx)(
                                      s.gw7,
                                      f(
                                          j(
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
                          (0, n.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              className: x,
                              children: g
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: p.divider }),
                  (0, n.jsxs)('div', {
                      className: p.memberSince,
                      children: [
                          (0, n.jsx)(s.ua7, {
                              text: y.name,
                              delay: b,
                              children: (e) =>
                                  (0, n.jsx)(
                                      a.Z,
                                      f(j({}, e), {
                                          guild: y,
                                          size: a.Z.Sizes.SMOL
                                      })
                                  )
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              className: x,
                              children: O
                          })
                      ]
                  })
              ]
          });
}
