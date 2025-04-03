n.d(t, { Z: () => B }), n(653041), n(47120);
var r = n(200651),
    l = n(192379),
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
    b = n(676011);
let N = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(i.vwX, {
            className: b.header,
            children: [t, n]
        });
    },
    y = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)('div', {
            className: b.content,
            children: t
                ? (0, r.jsxs)('div', {
                      className: b.resolvingWrapper,
                      children: [
                          (0, r.jsx)('div', {
                              className: b.resolving,
                              children: (0, r.jsx)('div', { className: b.resolvingBackground })
                          }),
                          (0, r.jsx)('div', {
                              className: b.resolvingFakeButton,
                              children: (0, r.jsx)('div', { className: b.resolvingBackground })
                          })
                      ]
                  })
                : n
        });
    },
    O = (e) => {
        var t;
        let { application: n, guild: l, channel: s, onClick: u, expired: d = !1, user: v, className: g } = e,
            j = null != (t = (0, c.ZP)(s)) ? t : '',
            N = f.QK.useSetting();
        if (d) return (0, r.jsx)('div', { className: b.guildIconExpired });
        let y = null == l || null != l.icon,
            O = a()((0, h.l)(b, 'guildIcon', y ? 'Image' : '', null != u ? 'Joined' : ''), g);
        return null != n
            ? (0, r.jsx)(p.Z, {
                  game: n,
                  onClick: u,
                  size: b.applicationIcon,
                  className: O
              })
            : null != l
              ? (0, r.jsx)(m.Z, {
                    onClick: u,
                    active: !0,
                    guild: l,
                    className: O,
                    animate: N
                })
              : null != s
                ? (0, r.jsx)(i.qEK, {
                      onClick: u,
                      src: (0, o.x)(s),
                      size: i.EFr.SIZE_56,
                      className: O,
                      'aria-label': j
                  })
                : null != v
                  ? (0, r.jsx)(i.qEK, {
                        onClick: u,
                        src: v.getAvatarURL(null, 56),
                        size: i.EFr.SIZE_56,
                        className: O,
                        'aria-label': j
                    })
                  : null;
    },
    x = (e) => {
        let { title: t, onClick: n, expired: l, children: s } = e,
            a = (0, r.jsx)(i.X6q, {
                variant: 'heading-md/semibold',
                className: (0, h.l)(b, 'inviteDestination', l ? 'Expired' : null != n ? 'Joined' : ''),
                children: t
            });
        return (0, r.jsxs)(d.Z, {
            className: b.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
                null == n
                    ? a
                    : (0, r.jsx)(i.P3F, {
                          onClick: n,
                          children: a
                      }),
                (0, r.jsx)(i.Text, {
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
            l = [];
        return (
            null != t &&
                t > 0 &&
                l.push(
                    (0, r.jsxs)(
                        'div',
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, r.jsx)('i', { className: b.statusOnline }),
                                (0, r.jsx)('span', {
                                    className: b.count,
                                    children: j.NW.format(j.t['LC+S+v'], { membersOnline: t })
                                })
                            ]
                        },
                        'onlineCount'
                    )
                ),
            null != n &&
                l.push(
                    (0, r.jsxs)(
                        'div',
                        {
                            className: b.statusWrapper,
                            children: [
                                (0, r.jsx)('i', { className: b.statusOffline }),
                                (0, r.jsx)('span', {
                                    className: b.count,
                                    children: j.NW.format(j.t.zRl6XV, { count: n })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, r.jsx)('div', {
                className: b.statusCounts,
                children: l
            })
        );
    },
    I = (e) => {
        let { channel: t, guild: n } = e,
            l = (0, u.KS)(t, n);
        return null == t || null == l
            ? null
            : (0, r.jsxs)('div', {
                  className: b.channel,
                  children: [
                      (0, r.jsx)(l, {
                          className: b.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, r.jsx)('span', {
                          className: b.channelName,
                          children: t.name
                      })
                  ]
              });
    },
    w = (e) => {
        var t,
            n,
            { children: l, onClick: s, className: o, isDisabled: c } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ['children', 'onClick', 'className', 'isDisabled']);
        return (0, r.jsx)(
            i.zxk,
            ((t = (function (e) {
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
            })({}, u)),
            (n = n =
                {
                    disabled: c,
                    onClick: s,
                    size: b.buttonSize,
                    className: a()(b.button, o),
                    children: l
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    };
(w.Colors = i.zxk.Colors),
    (w.Looks = i.zxk.Looks),
    (w.defaultProps = {
        className: null,
        isDisabled: !1
    });
let S = (e) => {
        let { children: t, className: n, containerRef: l } = e;
        return (0, r.jsx)('div', {
            ref: l,
            className: a()(b.wrapper, n),
            children: t
        });
    },
    C = (e) => {
        let { guild: t } = e,
            [n, s] = l.useState(!1),
            i = g.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, v.x_)()
            });
        return null == i
            ? null
            : (0, r.jsx)('div', {
                  className: b.inviteSplash,
                  children: (0, r.jsx)('img', {
                      src: i,
                      alt: '',
                      className: a()(b.inviteSplashImage, { [b.inviteSplashImageLoaded]: n }),
                      onLoad: () => s(!0)
                  })
              });
    },
    P = (e) => {
        let { guild: t } = e;
        return (0, r.jsx)('div', {
            className: b.guildNameWrapper,
            children: (0, r.jsx)('span', {
                className: b.guildName,
                children: t.name
            })
        });
    },
    k = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)('div', {
            className: b.guildNameWrapper,
            children: (0, r.jsx)('span', {
                className: b.guildName,
                children: t.serializedSourceGuild.name
            })
        });
    };
(S.Header = N), (S.Body = y), (S.Icon = O), (S.Info = x), (S.Data = E), (S.Channel = I), (S.Button = w), (S.GuildSplash = C), (S.GuildName = P), (S.GuildTemplateName = k), (N.displayName = 'InviteButton.Header'), (y.displayName = 'InviteButton.Body'), (O.displayName = 'InviteButton.Icon'), (x.displayName = 'InviteButton.Info'), (E.displayName = 'InviteButton.Data'), (I.displayName = 'InviteButton.Channel'), (w.displayName = 'InviteButton.Button'), (C.displayName = 'InviteButton.GuildSplash'), (P.displayName = 'InviteButton.GuildName'), (k.displayName = 'InviteButton.GuildTemplateName');
let B = S;
