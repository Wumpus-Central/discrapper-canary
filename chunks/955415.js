n.d(t, { Z: () => B }), n(539854), n(388685);
var l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    o = n(43267),
    c = n(933557),
    u = n(471445),
    d = n(600164),
    p = n(925329),
    m = n(565138),
    v = n(134432),
    f = n(695346),
    g = n(768581),
    h = n(153066),
    j = n(388032),
    b = n(41303);
let y = (e) => {
        let { text: t, extra: n } = e;
        return (0, l.jsxs)(i.vwX, {
            className: b.header,
            children: [t, n]
        });
    },
    N = (e) => {
        let { resolving: t, children: n } = e;
        return (0, l.jsx)('div', {
            className: b.content,
            children: t
                ? (0, l.jsxs)('div', {
                      className: b.resolvingWrapper,
                      children: [
                          (0, l.jsx)('div', {
                              className: b.resolving,
                              children: (0, l.jsx)('div', { className: b.resolvingBackground })
                          }),
                          (0, l.jsx)('div', {
                              className: b.resolvingFakeButton,
                              children: (0, l.jsx)('div', { className: b.resolvingBackground })
                          })
                      ]
                  })
                : n
        });
    },
    O = (e) => {
        var t;
        let { application: n, guild: r, channel: s, onClick: u, expired: d = !1, user: v, className: g } = e,
            j = null != (t = (0, c.ZP)(s)) ? t : '',
            y = f.QK.useSetting();
        if (d) return (0, l.jsx)('div', { className: b.guildIconExpired });
        let N = null == r || null != r.icon,
            O = a()((0, h.l)(b, 'guildIcon', N ? 'Image' : '', null != u ? 'Joined' : ''), g);
        return null != n
            ? (0, l.jsx)(p.Z, {
                  game: n,
                  onClick: u,
                  size: b.applicationIcon,
                  className: O
              })
            : null != r
              ? (0, l.jsx)(m.Z, {
                    onClick: u,
                    active: !0,
                    guild: r,
                    className: O,
                    animate: y
                })
              : null != s
                ? (0, l.jsx)(i.qEK, {
                      onClick: u,
                      src: (0, o.x)(s),
                      size: i.EFr.SIZE_56,
                      className: O,
                      'aria-label': j
                  })
                : null != v
                  ? (0, l.jsx)(i.qEK, {
                        onClick: u,
                        src: v.getAvatarURL(null, 56),
                        size: i.EFr.SIZE_56,
                        className: O,
                        'aria-label': j
                    })
                  : null;
    },
    x = (e) => {
        let { title: t, onClick: n, expired: r, children: s } = e,
            a = (0, l.jsx)(i.X6q, {
                variant: 'heading-md/semibold',
                className: (0, h.l)(b, 'inviteDestination', r ? 'Expired' : null != n ? 'Joined' : ''),
                children: t
            });
        return (0, l.jsxs)(d.Z, {
            className: b.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
                null == n
                    ? a
                    : (0, l.jsx)(i.P3F, {
                          onClick: n,
                          children: a
                      }),
                (0, l.jsx)(i.Text, {
                    tag: 'strong',
                    className: b.guildDetail,
                    variant: 'text-sm/normal',
                    children: s
                })
            ]
        });
    },
    E = (e) => {
        let { membersOnline: t, members: n } = e,
            r = [];
        return (
            null != t &&
                t > 0 &&
                r.push(
                    (0, l.jsxs)(
                        'div',
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, l.jsx)('i', { className: b.statusOnline }),
                                (0, l.jsx)('span', {
                                    className: b.count,
                                    children: j.NW.format(j.t['LC+S+v'], { membersOnline: t })
                                })
                            ]
                        },
                        'onlineCount'
                    )
                ),
            null != n &&
                r.push(
                    (0, l.jsxs)(
                        'div',
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, l.jsx)('i', { className: b.statusOffline }),
                                (0, l.jsx)('span', {
                                    className: b.count,
                                    children: j.NW.format(j.t.zRl6XV, { count: n })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, l.jsx)('div', {
                className: b.statusCounts,
                children: r
            })
        );
    },
    w = (e) => {
        let { channel: t, guild: n } = e,
            r = (0, u.KS)(t, n);
        return null == t || null == r
            ? null
            : (0, l.jsxs)('div', {
                  className: b.channel,
                  children: [
                      (0, l.jsx)(r, {
                          className: b.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, l.jsx)('span', {
                          className: b.channelName,
                          children: t.name
                      })
                  ]
              });
    },
    I = (e) => {
        var t,
            n,
            { children: r, onClick: s, className: o, isDisabled: c } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            r = {},
                            s = Object.keys(e);
                        for (l = 0; l < s.length; l++) (n = s[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < s.length; l++) (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['children', 'onClick', 'className', 'isDisabled']);
        return (0, l.jsx)(
            i.zxk,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({}, u)),
            (n = n =
                {
                    disabled: c,
                    onClick: s,
                    size: b.buttonSize,
                    className: a()(b.button, o),
                    children: r
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    };
(I.Colors = i.zxk.Colors),
    (I.Looks = i.zxk.Looks),
    (I.defaultProps = {
        className: null,
        isDisabled: !1
    });
let S = (e) => {
        let { children: t, className: n, containerRef: r } = e;
        return (0, l.jsx)('div', {
            ref: r,
            className: a()(b.wrapper, n),
            children: t
        });
    },
    C = (e) => {
        let { guild: t } = e,
            [n, s] = r.useState(!1),
            i = g.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, v.x_)()
            });
        return null == i
            ? null
            : (0, l.jsx)('div', {
                  className: b.inviteSplash,
                  children: (0, l.jsx)('img', {
                      src: i,
                      alt: '',
                      className: a()(b.inviteSplashImage, { [b.inviteSplashImageLoaded]: n }),
                      onLoad: () => s(!0)
                  })
              });
    },
    P = (e) => {
        let { guild: t } = e;
        return (0, l.jsx)('div', {
            className: b.guildNameWrapper,
            children: (0, l.jsx)('span', {
                className: b.guildName,
                children: t.name
            })
        });
    },
    k = (e) => {
        let { guildTemplate: t } = e;
        return (0, l.jsx)('div', {
            className: b.guildNameWrapper,
            children: (0, l.jsx)('span', {
                className: b.guildName,
                children: t.serializedSourceGuild.name
            })
        });
    };
(S.Header = y), (S.Body = N), (S.Icon = O), (S.Info = x), (S.Data = E), (S.Channel = w), (S.Button = I), (S.GuildSplash = C), (S.GuildName = P), (S.GuildTemplateName = k), (y.displayName = 'InviteButton.Header'), (N.displayName = 'InviteButton.Body'), (O.displayName = 'InviteButton.Icon'), (x.displayName = 'InviteButton.Info'), (E.displayName = 'InviteButton.Data'), (w.displayName = 'InviteButton.Channel'), (I.displayName = 'InviteButton.Button'), (C.displayName = 'InviteButton.GuildSplash'), (P.displayName = 'InviteButton.GuildName'), (k.displayName = 'InviteButton.GuildTemplateName');
let B = S;
