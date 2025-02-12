t.d(n, { Z: () => Z }), t(653041), t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    d = t(481060),
    s = t(43267),
    o = t(933557),
    c = t(471445),
    u = t(600164),
    _ = t(925329),
    m = t(565138),
    g = t(134432),
    p = t(695346),
    v = t(768581),
    h = t(153066),
    I = t(388032),
    f = t(172307);
let E = (e) => {
        let { text: n, extra: t } = e;
        return (0, i.jsxs)(d.vwX, {
            className: f.header,
            children: [n, t]
        });
    },
    x = (e) => {
        let { resolving: n, children: t } = e;
        return (0, i.jsx)('div', {
            className: f.content,
            children: n
                ? (0, i.jsxs)('div', {
                      className: f.resolvingWrapper,
                      children: [
                          (0, i.jsx)('div', {
                              className: f.resolving,
                              children: (0, i.jsx)('div', { className: f.resolvingBackground })
                          }),
                          (0, i.jsx)('div', {
                              className: f.resolvingFakeButton,
                              children: (0, i.jsx)('div', { className: f.resolvingBackground })
                          })
                      ]
                  })
                : t
        });
    },
    C = (e) => {
        var n;
        let { application: t, guild: l, channel: a, onClick: c, expired: u = !1, user: g, className: v } = e,
            I = null !== (n = (0, o.ZP)(a)) && void 0 !== n ? n : '',
            E = p.QK.useSetting();
        if (u) return (0, i.jsx)('div', { className: f.guildIconExpired });
        let x = null == l || null != l.icon,
            C = r()((0, h.l)(f, 'guildIcon', x ? 'Image' : '', null != c ? 'Joined' : ''), v);
        return null != t
            ? (0, i.jsx)(_.Z, {
                  game: t,
                  onClick: c,
                  size: f.applicationIcon,
                  className: C
              })
            : null != l
              ? (0, i.jsx)(m.Z, {
                    onClick: c,
                    active: !0,
                    guild: l,
                    className: C,
                    animate: E
                })
              : null != a
                ? (0, i.jsx)(d.qEK, {
                      onClick: c,
                      src: (0, s.x)(a),
                      size: d.EFr.SIZE_56,
                      className: C,
                      'aria-label': I
                  })
                : null != g
                  ? (0, i.jsx)(d.qEK, {
                        onClick: c,
                        src: g.getAvatarURL(null, 56),
                        size: d.EFr.SIZE_56,
                        className: C,
                        'aria-label': I
                    })
                  : null;
    },
    N = (e) => {
        let { title: n, onClick: t, expired: l, children: a } = e,
            r = (0, i.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: (0, h.l)(f, 'inviteDestination', l ? 'Expired' : null != t ? 'Joined' : ''),
                children: n
            });
        return (0, i.jsxs)(u.Z, {
            className: f.guildInfo,
            direction: u.Z.Direction.VERTICAL,
            justify: u.Z.Justify.CENTER,
            children: [
                null == t
                    ? r
                    : (0, i.jsx)(d.P3F, {
                          onClick: t,
                          children: r
                      }),
                (0, i.jsx)(d.Text, {
                    tag: 'strong',
                    className: f.guildDetail,
                    variant: 'text-sm/normal',
                    children: a
                })
            ]
        });
    },
    T = (e) => {
        let { membersOnline: n, members: t } = e,
            l = [];
        return (
            null != n &&
                n > 0 &&
                l.push(
                    (0, i.jsxs)(
                        'div',
                        {
                            className: f.statusWrapper,
                            children: [
                                (0, i.jsx)('i', { className: f.statusOnline }),
                                (0, i.jsx)('span', {
                                    className: f.count,
                                    children: I.intl.format(I.t['LC+S+v'], { membersOnline: n })
                                })
                            ]
                        },
                        'onlineCount'
                    )
                ),
            null != t &&
                l.push(
                    (0, i.jsxs)(
                        'div',
                        {
                            className: f.statusWrapper,
                            children: [
                                (0, i.jsx)('i', { className: f.statusOffline }),
                                (0, i.jsx)('span', {
                                    className: f.count,
                                    children: I.intl.format(I.t.zRl6XV, { count: t })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, i.jsx)('div', {
                className: f.statusCounts,
                children: l
            })
        );
    },
    L = (e) => {
        let { channel: n, guild: t } = e,
            l = (0, c.KS)(n, t);
        return null == n || null == l
            ? null
            : (0, i.jsxs)('div', {
                  className: f.channel,
                  children: [
                      (0, i.jsx)(l, {
                          className: f.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, i.jsx)('span', {
                          className: f.channelName,
                          children: n.name
                      })
                  ]
              });
    },
    b = (e) => {
        let { children: n, onClick: t, className: l, isDisabled: a, ...s } = e;
        return (0, i.jsx)(d.zxk, {
            ...s,
            disabled: a,
            onClick: t,
            size: f.buttonSize,
            className: r()(f.button, l),
            children: n
        });
    };
(b.Colors = d.zxk.Colors),
    (b.Looks = d.zxk.Looks),
    (b.defaultProps = {
        className: null,
        isDisabled: !1
    });
let S = (e) => {
        let { children: n, className: t, containerRef: l } = e;
        return (0, i.jsx)('div', {
            ref: l,
            className: r()(f.wrapper, t),
            children: n
        });
    },
    j = (e) => {
        let { guild: n } = e,
            [t, a] = l.useState(!1),
            d = v.ZP.getGuildSplashURL({
                id: n.id,
                splash: n.splash,
                size: 400 * (0, g.x_)()
            });
        return null == d
            ? null
            : (0, i.jsx)('div', {
                  className: f.inviteSplash,
                  children: (0, i.jsx)('img', {
                      src: d,
                      alt: '',
                      className: r()(f.inviteSplashImage, { [f.inviteSplashImageLoaded]: t }),
                      onLoad: () => a(!0)
                  })
              });
    },
    D = (e) => {
        let { guild: n } = e;
        return (0, i.jsx)('div', {
            className: f.guildNameWrapper,
            children: (0, i.jsx)('span', {
                className: f.guildName,
                children: n.name
            })
        });
    },
    y = (e) => {
        let { guildTemplate: n } = e;
        return (0, i.jsx)('div', {
            className: f.guildNameWrapper,
            children: (0, i.jsx)('span', {
                className: f.guildName,
                children: n.serializedSourceGuild.name
            })
        });
    };
(S.Header = E), (S.Body = x), (S.Icon = C), (S.Info = N), (S.Data = T), (S.Channel = L), (S.Button = b), (S.GuildSplash = j), (S.GuildName = D), (S.GuildTemplateName = y), (E.displayName = 'InviteButton.Header'), (x.displayName = 'InviteButton.Body'), (C.displayName = 'InviteButton.Icon'), (N.displayName = 'InviteButton.Info'), (T.displayName = 'InviteButton.Data'), (L.displayName = 'InviteButton.Channel'), (b.displayName = 'InviteButton.Button'), (j.displayName = 'InviteButton.GuildSplash'), (D.displayName = 'InviteButton.GuildName'), (y.displayName = 'InviteButton.GuildTemplateName');
let Z = S;
