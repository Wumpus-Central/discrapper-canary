n.d(t, { Z: () => h }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(700582),
    c = n(330726),
    d = n(51144),
    u = n(268350),
    m = n(419922),
    g = n(388032),
    p = n(493767);
let h = (e) => {
    let { className: t, isDisabled: s, sticker: h, canManageSticker: f } = e,
        [x, b] = i.useState(!1),
        [j, N] = (0, c.Z)(null, 4000),
        _ = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('93626'), n.e('95965')]).then(n.bind(n, 136735));
                return (t) =>
                    (0, r.jsx)(
                        e,
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
                                sticker: h,
                                guildId: h.guild_id
                            },
                            t
                        )
                    );
            });
        },
        v = async () => {
            N(null), b(!0);
            try {
                await (0, u.Um)(h);
            } catch (e) {
                N(e.body.message), b(!1);
            }
        },
        O = d.ZP.useUserTag(h.user);
    return (0, r.jsx)(a.ua7, {
        color: a.ua7.Colors.RED,
        forceOpen: null != j,
        text: j,
        children: () =>
            (0, r.jsxs)('div', {
                className: l()(p.wrapper, t, { [p.wrapperDisabled]: s }),
                children: [
                    (0, r.jsxs)('div', {
                        className: l()(p.content, { [p.contentRemoving]: x }),
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: p.sticker,
                                size: 72,
                                sticker: h
                            }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        color: 'header-primary',
                                        variant: 'text-xs/semibold',
                                        className: p.stickerName,
                                        children: h.name
                                    }),
                                    null != h.user &&
                                        (0, r.jsxs)('div', {
                                            className: p.user,
                                            children: [
                                                (0, r.jsx)(o.Z, {
                                                    className: p.userAvatar,
                                                    size: a.EFr.SIZE_16,
                                                    user: h.user
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: O
                                                })
                                            ]
                                        })
                                ]
                            }),
                            f
                                ? (0, r.jsxs)('div', {
                                      className: p.actions,
                                      children: [
                                          (0, r.jsx)(a.P3F, {
                                              className: p.action,
                                              onClick: _,
                                              'aria-label': g.NW.string(g.t.bt75u7),
                                              children: (0, r.jsx)(a.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: p.icon
                                              })
                                          }),
                                          (0, r.jsx)(a.P3F, {
                                              className: l()(p.action, p.actionRemove),
                                              onClick: v,
                                              'aria-label': g.NW.string(g.t.N86XcH),
                                              children: (0, r.jsx)(a.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: p.icon
                                              })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    x && (0, r.jsx)(a.$jN, { className: p.spinner })
                ]
            })
    });
};
