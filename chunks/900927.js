r.d(t, { Z: () => b });
var n = r(200651);
r(192379);
var i = r(399606),
    s = r(481060),
    l = r(275759),
    a = r(565138),
    c = r(706454),
    o = r(271383),
    u = r(430824),
    d = r(709054),
    p = r(388032),
    f = r(209643);
function m(e) {
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
function b(e) {
    let { userId: t, guildId: r, textClassName: b, tooltipDelay: g } = e,
        v = (0, i.e7)([c.default], () => c.default.locale),
        x = (0, i.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        y = (0, i.e7)([o.ZP], () => (null != r ? o.ZP.getMember(r, t) : null)),
        O = (0, l.FI)(d.default.extractTimestamp(t), v),
        h = (0, l.FI)(null == y ? void 0 : y.joinedAt, v);
    return null == x || null == y
        ? (0, n.jsx)(s.Text, {
              variant: 'text-sm/normal',
              className: b,
              children: O
          })
        : (0, n.jsxs)('div', {
              className: f.memberSinceWrapper,
              children: [
                  (0, n.jsxs)('div', {
                      className: f.memberSince,
                      children: [
                          (0, n.jsx)(s.ua7, {
                              text: p.intl.string(p.t.uvGmCw),
                              delay: g,
                              children: (e) =>
                                  (0, n.jsx)(
                                      s.gw7,
                                      j(
                                          m(
                                              {
                                                  size: 'custom',
                                                  width: 28,
                                                  height: 28,
                                                  color: 'currentColor'
                                              },
                                              e
                                          ),
                                          { className: f.discordIcon }
                                      )
                                  )
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              className: b,
                              children: O
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: f.divider }),
                  (0, n.jsxs)('div', {
                      className: f.memberSince,
                      children: [
                          (0, n.jsx)(s.ua7, {
                              text: x.name,
                              delay: g,
                              children: (e) =>
                                  (0, n.jsx)(
                                      a.Z,
                                      j(m({}, e), {
                                          guild: x,
                                          size: a.Z.Sizes.SMOL
                                      })
                                  )
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              className: b,
                              children: h
                          })
                      ]
                  })
              ]
          });
}
