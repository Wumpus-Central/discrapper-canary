(n.d(t, {
    E: () => O,
    Z: () => y
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    i = n(957537),
    c = n(839008),
    d = n(797967),
    u = n(755641),
    p = n(742409),
    m = n(369509),
    f = n(101017),
    g = n(606318),
    b = n(141006),
    _ = n(981631),
    h = n(131085),
    x = n(388032),
    j = n(606217),
    v = n(183375);
function y() {
    var e;
    let [t, n] = o.useState(() => {
            let e = Math.floor(Math.random() * b.tl.length);
            return {
                primary_color: b.tl[e].start,
                secondary_color: b.tl[e].end,
                tertiary_color: null
            };
        }),
        { gradientStyle: l, gradientClassname: c } = (0, a.Icv)({
            colorStrings: (0, g.DX)(t),
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)('div', {
                className: j.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: i.Z,
                    username: 'Cherry',
                    usernameStyle: l,
                    usernameClassName: s()(c, v.animateGradient),
                    message: x.intl.string(x.t['6OSasb'])
                })
            }),
            (0, r.jsx)(d.default, {
                defaultColor: _.p6O,
                colors: b.tl,
                value: t.primary_color,
                secondaryValue: null != (e = t.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var r, o;
                    return n(
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, t)),
                        (o = o = { primary_color: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        r)
                    );
                },
                onChangeGradientColors: (e) =>
                    n({
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: null
                    }),
                isGradient: !0
            })
        ]
    });
}
function O(e) {
    let { guildId: t } = e,
        [n, l] = o.useState(h.x_.HEART),
        s = (0, f.Z)(),
        a = o.useMemo(
            () => ({
                unlockedBadges: s.unlockedBadges.slice(0, 10),
                lockedBadges: []
            }),
            [s]
        );
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)('div', {
                className: j.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: c.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: x.intl.string(x.t['6OSasb']),
                    decorations: (0, r.jsx)(m.S, {
                        guildId: t,
                        tag: 'GGEZ',
                        badge: n
                    })
                })
            }),
            (0, r.jsx)(u.g, {
                selectedBadge: n,
                onBadgeClicked: l,
                badgeCollection: a
            })
        ]
    });
}
