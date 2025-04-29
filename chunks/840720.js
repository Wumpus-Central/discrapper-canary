n.d(t, { Z: () => m }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(60034),
    c = n(172751),
    d = n(131085),
    u = n(919563);
function m(e) {
    let { className: t, guildTag: n, guildBadge: s, onTagClick: m, guildId: p, guildName: g, guildIcon: h, guildIconSize: f } = e,
        b = r.useRef(null),
        [_, x] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = b.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && x(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: l()(u.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: u.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.Ft, {
                            guildId: p,
                            guildName: g,
                            guildIcon: h,
                            iconSize: f,
                            className: u.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsx)('div', {
                            className: u.details,
                            children: (0, i.jsx)(a.ua7, {
                                text: g,
                                color: a.ua7.Colors.PRIMARY,
                                shouldShow: _,
                                children: (e) => {
                                    var t, n;
                                    return (0, i.jsx)(
                                        'span',
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({ ref: b }, e)),
                                        (n = n =
                                            {
                                                className: u.guildName,
                                                children: g
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t)
                                    );
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: u.tagContainer,
                    children: (0, i.jsx)(c.m0, {
                        guildId: p,
                        className: u.tag,
                        guildTag: n,
                        guildBadge: s,
                        onClick: m,
                        badgeSize: d.Gg.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: u.badge
                    })
                })
            ]
        })
    );
}
