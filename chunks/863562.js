n(47120);
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
    g = n(646942);
t.Z = (e) => {
    let { className: t, isDisabled: l, sticker: x, canManageSticker: p } = e,
        [f, C] = r.useState(!1),
        [v, I] = (0, c.Z)(null, 4000),
        N = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('93626'), n.e('75267')]).then(n.bind(n, 136735));
                return (t) =>
                    (0, i.jsx)(e, {
                        sticker: x,
                        guildId: x.guild_id,
                        ...t
                    });
            });
        },
        _ = async () => {
            I(null), C(!0);
            try {
                await (0, u.Um)(x);
            } catch (e) {
                I(e.body.message), C(!1);
            }
        },
        T = d.ZP.useUserTag(x.user);
    return (0, i.jsx)(a.Tooltip, {
        color: a.Tooltip.Colors.RED,
        forceOpen: null != v,
        text: v,
        children: () =>
            (0, i.jsxs)('div', {
                className: s()(g.wrapper, t, { [g.wrapperDisabled]: l }),
                children: [
                    (0, i.jsxs)('div', {
                        className: s()(g.content, { [g.contentRemoving]: f }),
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
                                                    size: a.AvatarSizes.SIZE_16,
                                                    user: x.user
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    color: 'header-secondary',
                                                    variant: 'text-xs/normal',
                                                    children: T
                                                })
                                            ]
                                        })
                                ]
                            }),
                            p
                                ? (0, i.jsxs)('div', {
                                      className: g.actions,
                                      children: [
                                          (0, i.jsx)(a.Clickable, {
                                              className: g.action,
                                              onClick: N,
                                              'aria-label': h.intl.string(h.t.bt75u7),
                                              children: (0, i.jsx)(a.PencilIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: g.icon
                                              })
                                          }),
                                          (0, i.jsx)(a.Clickable, {
                                              className: s()(g.action, g.actionRemove),
                                              onClick: _,
                                              'aria-label': h.intl.string(h.t.N86XcH),
                                              children: (0, i.jsx)(a.XSmallIcon, {
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
                    f && (0, i.jsx)(a.Spinner, { className: g.spinner })
                ]
            })
    });
};
