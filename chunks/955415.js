n.d(t, { Z: () => R }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(43267),
    c = n(933557),
    d = n(471445),
    u = n(600164),
    m = n(925329),
    _ = n(565138),
    h = n(134432),
    p = n(695346),
    g = n(768581),
    f = n(153066),
    x = n(388032),
    C = n(210302);
let v = (e) => {
        let { text: t, extra: n } = e;
        return (0, i.jsxs)(s.vwX, {
            className: C.header,
            children: [t, n]
        });
    },
    E = (e) => {
        let { resolving: t, children: n } = e;
        return (0, i.jsx)('div', {
            className: C.content,
            children: t
                ? (0, i.jsxs)('div', {
                      className: C.resolvingWrapper,
                      children: [
                          (0, i.jsx)('div', {
                              className: C.resolving,
                              children: (0, i.jsx)('div', { className: C.resolvingBackground })
                          }),
                          (0, i.jsx)('div', {
                              className: C.resolvingFakeButton,
                              children: (0, i.jsx)('div', { className: C.resolvingBackground })
                          })
                      ]
                  })
                : n
        });
    },
    I = (e) => {
        var t;
        let { application: n, guild: l, channel: a, onClick: d, expired: u = !1, user: h, className: g } = e,
            x = null !== (t = (0, c.ZP)(a)) && void 0 !== t ? t : '',
            v = p.QK.useSetting();
        if (u) return (0, i.jsx)('div', { className: C.guildIconExpired });
        let E = null == l || null != l.icon,
            I = r()((0, f.l)(C, 'guildIcon', E ? 'Image' : '', null != d ? 'Joined' : ''), g);
        return null != n
            ? (0, i.jsx)(m.Z, {
                  game: n,
                  onClick: d,
                  size: C.applicationIcon,
                  className: I
              })
            : null != l
              ? (0, i.jsx)(_.Z, {
                    onClick: d,
                    active: !0,
                    guild: l,
                    className: I,
                    animate: v
                })
              : null != a
                ? (0, i.jsx)(s.qEK, {
                      onClick: d,
                      src: (0, o.x)(a),
                      size: s.EFr.SIZE_56,
                      className: I,
                      'aria-label': x
                  })
                : null != h
                  ? (0, i.jsx)(s.qEK, {
                        onClick: d,
                        src: h.getAvatarURL(null, 56),
                        size: s.EFr.SIZE_56,
                        className: I,
                        'aria-label': x
                    })
                  : null;
    },
    N = (e) => {
        let { title: t, onClick: n, expired: l, children: a } = e,
            r = (0, i.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: (0, f.l)(C, 'inviteDestination', l ? 'Expired' : null != n ? 'Joined' : ''),
                children: t
            });
        return (0, i.jsxs)(u.Z, {
            className: C.guildInfo,
            direction: u.Z.Direction.VERTICAL,
            justify: u.Z.Justify.CENTER,
            children: [
                null == n
                    ? r
                    : (0, i.jsx)(s.P3F, {
                          onClick: n,
                          children: r
                      }),
                (0, i.jsx)(s.Text, {
                    tag: 'strong',
                    className: C.guildDetail,
                    variant: 'text-sm/normal',
                    children: a
                })
            ]
        });
    },
    S = (e) => {
        let { membersOnline: t, members: n } = e,
            l = [];
        return (
            null != t &&
                t > 0 &&
                l.push(
                    (0, i.jsxs)(
                        'div',
                        {
                            className: C.statusWrapper,
                            children: [
                                (0, i.jsx)('i', { className: C.statusOnline }),
                                (0, i.jsx)('span', {
                                    className: C.count,
                                    children: x.intl.format(x.t['LC+S+v'], { membersOnline: t })
                                })
                            ]
                        },
                        'onlineCount'
                    )
                ),
            null != n &&
                l.push(
                    (0, i.jsxs)(
                        'div',
                        {
                            className: C.statusWrapper,
                            children: [
                                (0, i.jsx)('i', { className: C.statusOffline }),
                                (0, i.jsx)('span', {
                                    className: C.count,
                                    children: x.intl.format(x.t.zRl6XV, { count: n })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, i.jsx)('div', {
                className: C.statusCounts,
                children: l
            })
        );
    },
    T = (e) => {
        let { channel: t, guild: n } = e,
            l = (0, d.KS)(t, n);
        return null == t || null == l
            ? null
            : (0, i.jsxs)('div', {
                  className: C.channel,
                  children: [
                      (0, i.jsx)(l, {
                          className: C.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, i.jsx)('span', {
                          className: C.channelName,
                          children: t.name
                      })
                  ]
              });
    },
    b = (e) => {
        let { children: t, onClick: n, className: l, isDisabled: a, ...o } = e;
        return (0, i.jsx)(s.zxk, {
            ...o,
            disabled: a,
            onClick: n,
            size: C.buttonSize,
            className: r()(C.button, l),
            children: t
        });
    };
(b.Colors = s.zxk.Colors),
    (b.Looks = s.zxk.Looks),
    (b.defaultProps = {
        className: null,
        isDisabled: !1
    });
let A = (e) => {
        let { children: t, className: n, containerRef: l } = e;
        return (0, i.jsx)('div', {
            ref: l,
            className: r()(C.wrapper, n),
            children: t
        });
    },
    j = (e) => {
        let { guild: t } = e,
            [n, a] = l.useState(!1),
            s = g.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, h.x_)()
            });
        return null == s
            ? null
            : (0, i.jsx)('div', {
                  className: C.inviteSplash,
                  children: (0, i.jsx)('img', {
                      src: s,
                      alt: '',
                      className: r()(C.inviteSplashImage, { [C.inviteSplashImageLoaded]: n }),
                      onLoad: () => a(!0)
                  })
              });
    },
    y = (e) => {
        let { guild: t } = e;
        return (0, i.jsx)('div', {
            className: C.guildNameWrapper,
            children: (0, i.jsx)('span', {
                className: C.guildName,
                children: t.name
            })
        });
    },
    Z = (e) => {
        let { guildTemplate: t } = e;
        return (0, i.jsx)('div', {
            className: C.guildNameWrapper,
            children: (0, i.jsx)('span', {
                className: C.guildName,
                children: t.serializedSourceGuild.name
            })
        });
    };
(A.Header = v), (A.Body = E), (A.Icon = I), (A.Info = N), (A.Data = S), (A.Channel = T), (A.Button = b), (A.GuildSplash = j), (A.GuildName = y), (A.GuildTemplateName = Z), (v.displayName = 'InviteButton.Header'), (E.displayName = 'InviteButton.Body'), (I.displayName = 'InviteButton.Icon'), (N.displayName = 'InviteButton.Info'), (S.displayName = 'InviteButton.Data'), (T.displayName = 'InviteButton.Channel'), (b.displayName = 'InviteButton.Button'), (j.displayName = 'InviteButton.GuildSplash'), (y.displayName = 'InviteButton.GuildName'), (Z.displayName = 'InviteButton.GuildTemplateName');
let R = A;
