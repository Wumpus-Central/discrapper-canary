n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(700582),
    c = n(330726),
    d = n(51144),
    u = n(268350),
    m = n(419922),
    g = n(388032),
    p = n(646084);
let h = (e) => {
    let { className: t, isDisabled: s, sticker: h, canManageSticker: f } = e,
        [b, x] = i.useState(!1),
        [j, N] = (0, c.Z)(null, 4000),
        _ = () => {
            (0, l.ZDy)(async () => {
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
                                sticker: h,
                                guildId: h.guild_id
                            },
                            t
                        )
                    );
            });
        },
        v = async () => {
            N(null), x(!0);
            try {
                await (0, u.Um)(h);
            } catch (e) {
                N(e.body.message), x(!1);
            }
        },
        C = d.ZP.useUserTag(h.user);
    return (0, r.jsx)(l.ua7, {
        color: l.ua7.Colors.RED,
        forceOpen: null != j,
        text: j,
        children: () =>
            (0, r.jsxs)('div', {
                className: a()(p.wrapper, t, { [p.wrapperDisabled]: s }),
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(p.content, { [p.contentRemoving]: b }),
                        children: [
                            (0, r.jsx)(m.Z, {
                                className: p.sticker,
                                size: 72,
                                sticker: h
                            }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(l.Text, {
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
                                                    size: l.EFr.SIZE_16,
                                                    user: h.user
                                                }),
                                                (0, r.jsx)(l.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: C
                                                })
                                            ]
                                        })
                                ]
                            }),
                            f
                                ? (0, r.jsxs)('div', {
                                      className: p.actions,
                                      children: [
                                          (0, r.jsx)(l.P3F, {
                                              className: p.action,
                                              onClick: _,
                                              'aria-label': g.NW.string(g.t.bt75u7),
                                              children: (0, r.jsx)(l.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: p.icon
                                              })
                                          }),
                                          (0, r.jsx)(l.P3F, {
                                              className: a()(p.action, p.actionRemove),
                                              onClick: v,
                                              'aria-label': g.NW.string(g.t.N86XcH),
                                              children: (0, r.jsx)(l.Dio, {
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
                    b && (0, r.jsx)(l.$jN, { className: p.spinner })
                ]
            })
    });
};
