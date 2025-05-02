n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(700582),
    c = n(330726),
    u = n(51144),
    d = n(268350),
    m = n(419922),
    g = n(388032),
    p = n(646084);
let f = (e) => {
    let { className: t, isDisabled: l, sticker: f, canManageSticker: h } = e,
        [x, b] = i.useState(!1),
        [j, _] = (0, c.Z)(null, 4000),
        v = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('93626'), n.e('64386')]).then(n.bind(n, 136735));
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
                                sticker: f,
                                guildId: f.guild_id
                            },
                            t
                        )
                    );
            });
        },
        O = async () => {
            _(null), b(!0);
            try {
                await (0, d.Um)(f);
            } catch (e) {
                _(e.body.message), b(!1);
            }
        },
        C = u.ZP.useUserTag(f.user);
    return (0, r.jsx)(a.ua7, {
        color: a.ua7.Colors.RED,
        forceOpen: null != j,
        text: j,
        children: () =>
            (0, r.jsxs)('div', {
                className: s()(p.wrapper, t, { [p.wrapperDisabled]: l }),
                children: [
                    (0, r.jsxs)('div', {
                        className: s()(p.content, { [p.contentRemoving]: x }),
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: p.sticker,
                                size: 72,
                                sticker: f
                            }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        color: 'header-primary',
                                        variant: 'text-xs/semibold',
                                        className: p.stickerName,
                                        children: f.name
                                    }),
                                    null != f.user &&
                                        (0, r.jsxs)('div', {
                                            className: p.user,
                                            children: [
                                                (0, r.jsx)(o.Z, {
                                                    className: p.userAvatar,
                                                    size: a.EFr.SIZE_16,
                                                    user: f.user
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: C
                                                })
                                            ]
                                        })
                                ]
                            }),
                            h
                                ? (0, r.jsxs)('div', {
                                      className: p.actions,
                                      children: [
                                          (0, r.jsx)(a.P3F, {
                                              className: p.action,
                                              onClick: v,
                                              'aria-label': g.intl.string(g.t.bt75u7),
                                              children: (0, r.jsx)(a.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: p.icon
                                              })
                                          }),
                                          (0, r.jsx)(a.P3F, {
                                              className: s()(p.action, p.actionRemove),
                                              onClick: O,
                                              'aria-label': g.intl.string(g.t.N86XcH),
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
