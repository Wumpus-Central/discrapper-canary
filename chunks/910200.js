n.d(t, {
    N3: () => y,
    Z7: () => b,
    ZP: () => O
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(686546),
    l = n(813197),
    c = n(60034),
    u = n(137162),
    d = n(15210),
    f = n(43542),
    _ = n(686369),
    p = n(486324),
    h = n(248217);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    let n = (0, _.qw)(e, t);
    return null != e.brandColorPrimary ? e.brandColorPrimary : n;
}
function b(e) {
    let { profile: t, className: n } = e,
        i = E(t, (0, _.nv)().hex()),
        o = (0, _.dG)(i, t);
    return (0, r.jsx)('div', {
        className: a()(n, h.banner),
        style: { background: o }
    });
}
function y(e) {
    let { profile: t, onIconChange: i } = e;
    if (null == i)
        return (0, r.jsx)('div', {
            className: h.avatarContainer,
            children: (0, r.jsx)(s.ZP, {
                mask: s.QS.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, r.jsx)('div', {
                    className: h.avatarWrapper,
                    children: (0, r.jsx)(c.Ft, {
                        guildId: t.id,
                        guildName: t.name,
                        guildIcon: t.icon,
                        iconSize: 64
                    })
                })
            })
        });
    function u(e, t) {
        null != i &&
            (0, o.ZDy)(async () => {
                let { default: a } = await Promise.all([n.e('91689'), n.e('59732'), n.e('48389')]).then(n.bind(n, 712451));
                return (n) =>
                    (0, r.jsx)(
                        a,
                        g(
                            {
                                uploadType: p.pC.GUILD_ICON,
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return i(t);
                                }
                            },
                            n
                        )
                    );
            }, {});
    }
    return (0, r.jsx)('div', {
        className: h.avatarContainer,
        children: (0, r.jsx)(o.tEY, {
            within: !0,
            children: (0, r.jsx)(s.ZP, {
                mask: s.QS.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, r.jsxs)('div', {
                    className: a()(h.avatarWrapper, h.clickable),
                    children: [
                        (0, r.jsx)(c.Ft, {
                            guildId: t.id,
                            guildName: t.name,
                            guildIcon: t.icon,
                            iconSize: 64
                        }),
                        (0, r.jsx)('div', { className: h.overlay }),
                        (0, r.jsx)(o.vdY, {
                            size: 'custom',
                            className: h.overlayIcon,
                            width: 20,
                            height: 20,
                            color: 'white'
                        }),
                        (0, r.jsx)(l.ZP, {
                            tabIndex: 0,
                            onChange: u
                        })
                    ]
                })
            })
        })
    });
}
function O(e) {
    let { profile: t, onIconChange: n, className: i, disableCTA: o, CTAOverride: s, onClose: l, disableGuildNameClick: c } = e,
        _ = null;
    return (
        null != s
            ? (_ = s)
            : o ||
              (_ = (0, r.jsx)(d.Z, {
                  profile: t,
                  onComplete: l
              })),
        (0, r.jsxs)('div', {
            className: a()(h.container, i),
            children: [
                (0, r.jsx)(b, { profile: t }),
                (0, r.jsx)(y, {
                    onIconChange: n,
                    profile: t
                }),
                (0, r.jsx)(f.Z, {
                    profile: t,
                    disableGuildNameClick: c
                }),
                (0, r.jsx)(u.E, { profile: t }),
                null != _ &&
                    (0, r.jsx)('div', {
                        className: h.buttonContainer,
                        children: _
                    })
            ]
        })
    );
}
