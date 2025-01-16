l(653041), l(47120);
var t = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    r = l(481060),
    o = l(43267),
    u = l(933557),
    c = l(471445),
    d = l(600164),
    m = l(925329),
    v = l(565138),
    p = l(134432),
    C = l(695346),
    N = l(768581),
    h = l(153066),
    g = l(388032),
    x = l(88584);
let I = (e) => {
        let { text: n, extra: l } = e;
        return (0, t.jsxs)(r.FormTitle, {
            className: x.header,
            children: [n, l]
        });
    },
    j = (e) => {
        let { resolving: n, children: l } = e;
        return (0, t.jsx)('div', {
            className: x.content,
            children: n
                ? (0, t.jsxs)('div', {
                      className: x.resolvingWrapper,
                      children: [
                          (0, t.jsx)('div', {
                              className: x.resolving,
                              children: (0, t.jsx)('div', { className: x.resolvingBackground })
                          }),
                          (0, t.jsx)('div', {
                              className: x.resolvingFakeButton,
                              children: (0, t.jsx)('div', { className: x.resolvingBackground })
                          })
                      ]
                  })
                : l
        });
    },
    E = (e) => {
        var n;
        let { application: l, guild: i, channel: s, onClick: c, expired: d = !1, user: p, className: N } = e,
            g = null !== (n = (0, u.ZP)(s)) && void 0 !== n ? n : '',
            I = C.QK.useSetting();
        if (d) return (0, t.jsx)('div', { className: x.guildIconExpired });
        let j = null == i || null != i.icon,
            E = a()((0, h.l)(x, 'guildIcon', j ? 'Image' : '', null != c ? 'Joined' : ''), N);
        if (null != l)
            return (0, t.jsx)(m.Z, {
                game: l,
                onClick: c,
                size: x.applicationIcon,
                className: E
            });
        if (null != i)
            return (0, t.jsx)(v.Z, {
                onClick: c,
                active: !0,
                guild: i,
                className: E,
                animate: I
            });
        if (null != s)
            return (0, t.jsx)(r.Avatar, {
                onClick: c,
                src: (0, o.x)(s),
                size: r.AvatarSizes.SIZE_56,
                className: E,
                'aria-label': g
            });
        else if (null != p)
            return (0, t.jsx)(r.Avatar, {
                onClick: c,
                src: p.getAvatarURL(null, 56),
                size: r.AvatarSizes.SIZE_56,
                className: E,
                'aria-label': g
            });
        return null;
    },
    f = (e) => {
        let { title: n, onClick: l, expired: i, children: s } = e,
            a = (0, t.jsx)(r.Heading, {
                variant: 'heading-md/semibold',
                className: (0, h.l)(x, 'inviteDestination', i ? 'Expired' : null != l ? 'Joined' : ''),
                children: n
            });
        return (0, t.jsxs)(d.Z, {
            className: x.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
                null == l
                    ? a
                    : (0, t.jsx)(r.Clickable, {
                          onClick: l,
                          children: a
                      }),
                (0, t.jsx)(r.Text, {
                    tag: 'strong',
                    className: x.guildDetail,
                    variant: 'text-sm/normal',
                    children: s
                })
            ]
        });
    },
    B = (e) => {
        let { membersOnline: n, members: l } = e,
            i = [];
        return (
            null != n &&
                n > 0 &&
                i.push(
                    (0, t.jsxs)(
                        'div',
                        {
                            className: x.statusWrapper,
                            children: [
                                (0, t.jsx)('i', { className: x.statusOnline }),
                                (0, t.jsx)('span', {
                                    className: x.count,
                                    children: g.intl.format(g.t['LC+S+v'], { membersOnline: n })
                                })
                            ]
                        },
                        'onlineCount'
                    )
                ),
            null != l &&
                i.push(
                    (0, t.jsxs)(
                        'div',
                        {
                            className: x.statusWrapper,
                            children: [
                                (0, t.jsx)('i', { className: x.statusOffline }),
                                (0, t.jsx)('span', {
                                    className: x.count,
                                    children: g.intl.format(g.t.zRl6XV, { count: l })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, t.jsx)('div', {
                className: x.statusCounts,
                children: i
            })
        );
    },
    k = (e) => {
        let { channel: n, guild: l } = e,
            i = (0, c.KS)(n, l);
        return null == n || null == i
            ? null
            : (0, t.jsxs)('div', {
                  className: x.channel,
                  children: [
                      (0, t.jsx)(i, {
                          className: x.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, t.jsx)('span', {
                          className: x.channelName,
                          children: n.name
                      })
                  ]
              });
    },
    L = (e) => {
        let { children: n, onClick: l, className: i, isDisabled: s, ...o } = e;
        return (0, t.jsx)(r.Button, {
            ...o,
            disabled: s,
            onClick: l,
            size: x.buttonSize,
            className: a()(x.button, i),
            children: n
        });
    };
(L.Colors = r.Button.Colors),
    (L.Looks = r.Button.Looks),
    (L.defaultProps = {
        className: null,
        isDisabled: !1
    });
let S = (e) => {
        let { children: n, className: l, containerRef: i } = e;
        return (0, t.jsx)('div', {
            ref: i,
            className: a()(x.wrapper, l),
            children: n
        });
    },
    Z = (e) => {
        let { guild: n } = e,
            [l, s] = i.useState(!1),
            r = N.ZP.getGuildSplashURL({
                id: n.id,
                splash: n.splash,
                size: 400 * (0, p.x_)()
            });
        return null == r
            ? null
            : (0, t.jsx)('div', {
                  className: x.inviteSplash,
                  children: (0, t.jsx)('img', {
                      src: r,
                      alt: '',
                      className: a()(x.inviteSplashImage, { [x.inviteSplashImageLoaded]: l }),
                      onLoad: () => s(!0)
                  })
              });
    },
    b = (e) => {
        let { guild: n } = e;
        return (0, t.jsx)('div', {
            className: x.guildNameWrapper,
            children: (0, t.jsx)('span', {
                className: x.guildName,
                children: n.name
            })
        });
    },
    R = (e) => {
        let { guildTemplate: n } = e;
        return (0, t.jsx)('div', {
            className: x.guildNameWrapper,
            children: (0, t.jsx)('span', {
                className: x.guildName,
                children: n.serializedSourceGuild.name
            })
        });
    };
(S.Header = I), (S.Body = j), (S.Icon = E), (S.Info = f), (S.Data = B), (S.Channel = k), (S.Button = L), (S.GuildSplash = Z), (S.GuildName = b), (S.GuildTemplateName = R), (I.displayName = 'InviteButton.Header'), (j.displayName = 'InviteButton.Body'), (E.displayName = 'InviteButton.Icon'), (f.displayName = 'InviteButton.Info'), (B.displayName = 'InviteButton.Data'), (k.displayName = 'InviteButton.Channel'), (L.displayName = 'InviteButton.Button'), (Z.displayName = 'InviteButton.GuildSplash'), (b.displayName = 'InviteButton.GuildName'), (R.displayName = 'InviteButton.GuildTemplateName'), (n.Z = S);
