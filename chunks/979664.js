n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(755721),
    a = n(481060),
    o = n(813197),
    c = n(999382),
    d = n(486324),
    u = n(388032),
    m = n(137991),
    g = n(381109);
function p(e) {
    let { profile: t, handleIconChange: l, canManageGuild: c } = e,
        g = i.useCallback(() => {
            l(null);
        }, [l]),
        p = i.useCallback(
            (e, t) => {
                (0, a.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('77942')]).then(n.bind(n, 712451));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            (function (e) {
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
                            })(
                                {
                                    uploadType: d.pC.GUILD_ICON,
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
        f = i.useMemo(() => ({ within: !0 }), []);
    return (0, r.jsxs)('div', {
        className: m.buttons,
        children: [
            (0, r.jsxs)(s.zx, {
                focusProps: f,
                tabIndex: -1,
                size: s.zx.Sizes.SMALL,
                color: s.zx.Colors.BRAND,
                disabled: !c,
                children: [
                    u.intl.string(u.t.r3Jdsb),
                    (0, r.jsx)(o.ZP, {
                        tabIndex: 0,
                        onChange: p
                    })
                ]
            }),
            null != t.icon
                ? (0, r.jsx)(a.zxk, {
                      variant: 'critical-secondary',
                      size: 'sm',
                      text: u.intl.string(u.t.x8AlTk),
                      onClick: g,
                      disabled: !c
                  })
                : null
        ]
    });
}
function f(e) {
    let { profile: t, canManageGuild: n, onIconChange: i } = e,
        s = (0, l.e7)([c.Z], () => c.Z.getError('icon'));
    return (0, r.jsxs)('section', {
        className: m.container,
        children: [
            (0, r.jsxs)(a.hjN, {
                className: g.section,
                children: [
                    (0, r.jsxs)('div', {
                        className: g.sectionHeader,
                        children: [
                            (0, r.jsx)(a.vwX, { children: u.intl.string(u.t.FkQnxM) }),
                            (0, r.jsx)(a.R94, {
                                type: 'description',
                                children: u.intl.string(u.t.KjkA0d)
                            })
                        ]
                    }),
                    (0, r.jsx)(p, {
                        profile: t,
                        canManageGuild: n,
                        handleIconChange: i
                    })
                ]
            }),
            null != s
                ? (0, r.jsx)('div', {
                      className: m.iconError,
                      children: s
                  })
                : null
        ]
    });
}
