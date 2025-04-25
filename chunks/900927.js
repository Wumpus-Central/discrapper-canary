r.d(t, { Z: () => m });
var n = r(200651);
r(192379);
var s = r(399606),
    i = r(481060),
    l = r(275759),
    c = r(565138),
    a = r(706454),
    o = r(271383),
    u = r(430824),
    d = r(709054),
    p = r(388032),
    f = r(209643);
function b(e) {
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
function m(e) {
    let { userId: t, guildId: r, textClassName: m, tooltipDelay: y } = e,
        O = (0, s.e7)([a.default], () => a.default.locale),
        g = (0, s.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        v = (0, s.e7)([o.ZP], () => (null != r ? o.ZP.getMember(r, t) : null)),
        x = (0, l.FI)(d.default.extractTimestamp(t), O),
        h = (0, l.FI)(null == v ? void 0 : v.joinedAt, O);
    return null == g || null == v
        ? (0, n.jsx)(i.Text, {
              variant: 'text-sm/normal',
              className: m,
              children: x
          })
        : (0, n.jsxs)('div', {
              className: f.memberSinceWrapper,
              children: [
                  (0, n.jsxs)('div', {
                      className: f.memberSince,
                      children: [
                          (0, n.jsx)(i.ua7, {
                              text: p.intl.string(p.t.uvGmCw),
                              delay: y,
                              children: (e) =>
                                  (0, n.jsx)(
                                      i.gw7,
                                      j(
                                          b(
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
                          (0, n.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: x
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: f.divider }),
                  (0, n.jsxs)('div', {
                      className: f.memberSince,
                      children: [
                          (0, n.jsx)(i.ua7, {
                              text: g.name,
                              delay: y,
                              children: (e) =>
                                  (0, n.jsx)(
                                      c.Z,
                                      j(b({}, e), {
                                          guild: g,
                                          size: c.Z.Sizes.SMOL
                                      })
                                  )
                          }),
                          (0, n.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              className: m,
                              children: h
                          })
                      ]
                  })
              ]
          });
}
