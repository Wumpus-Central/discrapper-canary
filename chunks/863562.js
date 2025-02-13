n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(700582),
    c = n(330726),
    d = n(51144),
    u = n(268350),
    m = n(419922),
    h = n(388032),
    g = n(475880);
let x = (e) => {
    let { className: t, isDisabled: l, sticker: x, canManageSticker: p } = e,
        [_, C] = r.useState(!1),
        [f, v] = (0, c.Z)(null, 4000),
        N = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('93626'), n.e('3136')]).then(n.bind(n, 136735));
                return (t) =>
                    (0, i.jsx)(e, {
                        sticker: x,
                        guildId: x.guild_id,
                        ...t
                    });
            });
        },
        j = async () => {
            v(null), C(!0);
            try {
                await (0, u.Um)(x);
            } catch (e) {
                v(e.body.message), C(!1);
            }
        },
        I = d.ZP.useUserTag(x.user);
    return (0, i.jsx)(a.ua7, {
        color: a.ua7.Colors.RED,
        forceOpen: null != f,
        text: f,
        children: () =>
            (0, i.jsxs)('div', {
                className: s()(g.wrapper, t, { [g.wrapperDisabled]: l }),
                children: [
                    (0, i.jsxs)('div', {
                        className: s()(g.content, { [g.contentRemoving]: _ }),
                        children: [
                            (0, i.jsx)(m.ZP, {
                                className: g.sticker,
                                size: 72,
                                sticker: x
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        color: 'header-primary',
                                        variant: 'text-xs/semibold',
                                        className: g.stickerName,
                                        children: x.name
                                    }),
                                    null != x.user &&
                                        (0, i.jsxs)('div', {
                                            className: g.user,
                                            children: [
                                                (0, i.jsx)(o.Z, {
                                                    className: g.userAvatar,
                                                    size: a.EFr.SIZE_16,
                                                    user: x.user
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: I
                                                })
                                            ]
                                        })
                                ]
                            }),
                            p
                                ? (0, i.jsxs)('div', {
                                      className: g.actions,
                                      children: [
                                          (0, i.jsx)(a.P3F, {
                                              className: g.action,
                                              onClick: N,
                                              'aria-label': h.intl.string(h.t.bt75u7),
                                              children: (0, i.jsx)(a.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: g.icon
                                              })
                                          }),
                                          (0, i.jsx)(a.P3F, {
                                              className: s()(g.action, g.actionRemove),
                                              onClick: j,
                                              'aria-label': h.intl.string(h.t.N86XcH),
                                              children: (0, i.jsx)(a.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: g.icon
                                              })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    _ && (0, i.jsx)(a.$jN, { className: g.spinner })
                ]
            })
    });
};
