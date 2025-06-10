n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(813197),
    o = n(999382),
    c = n(486324),
    d = n(388032),
    u = n(137991),
    m = n(381109);
function g(e) {
    let { profile: t, handleIconChange: l, canManageGuild: o } = e,
        m = i.useCallback(() => {
            l(null);
        }, [l]),
        g = i.useCallback(
            (e, t) => {
                (0, s.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('77942')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            (function (e) {
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
                            })(
                                {
                                    uploadType: c.pC.GUILD_ICON,
                                    imageUri: e,
                                    file: t,
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return l(t);
                                    }
                                },
                                n
                            )
                        );
                }, {});
            },
            [l]
        ),
        p = i.useMemo(() => ({ within: !0 }), []);
    return (0, r.jsxs)('div', {
        className: u.buttons,
        children: [
            (0, r.jsxs)(s.zxk, {
                focusProps: p,
                tabIndex: -1,
                size: s.zxk.Sizes.SMALL,
                color: s.zxk.Colors.BRAND,
                disabled: !o,
                children: [
                    d.intl.string(d.t.r3Jdsb),
                    (0, r.jsx)(a.ZP, {
                        tabIndex: 0,
                        onChange: g
                    })
                ]
            }),
            null != t.icon
                ? (0, r.jsx)(s.zxk, {
                      size: s.zxk.Sizes.SMALL,
                      color: s.zxk.Colors.RED,
                      look: s.zxk.Looks.LINK,
                      onClick: m,
                      disabled: !o,
                      children: d.intl.string(d.t.x8AlTk)
                  })
                : null
        ]
    });
}
function p(e) {
    let { profile: t, canManageGuild: n, onIconChange: i } = e,
        a = (0, l.e7)([o.Z], () => o.Z.getError('icon'));
    return (0, r.jsxs)('section', {
        className: u.container,
        children: [
            (0, r.jsxs)(s.hjN, {
                className: m.section,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.sectionHeader,
                        children: [
                            (0, r.jsx)(s.vwX, { children: d.intl.string(d.t.FkQnxM) }),
                            (0, r.jsx)(s.R94, {
                                type: 'description',
                                children: d.intl.string(d.t.KjkA0d)
                            })
                        ]
                    }),
                    (0, r.jsx)(g, {
                        profile: t,
                        canManageGuild: n,
                        handleIconChange: i
                    })
                ]
            }),
            null != a
                ? (0, r.jsx)('div', {
                      className: u.iconError,
                      children: a
                  })
                : null
        ]
    });
}
