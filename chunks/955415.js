(n.d(t, { Z: () => D }), n(539854), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    c = n(43267),
    o = n(933557),
    u = n(471445),
    d = n(600164),
    p = n(925329),
    m = n(565138),
    f = n(134432),
    v = n(695346),
    g = n(768581),
    b = n(153066),
    h = n(388032),
    j = n(676011);
let O = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(s.vwX, {
            className: j.header,
            children: [t, n]
        });
    },
    y = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)('div', {
            className: j.content,
            children: t
                ? (0, r.jsxs)('div', {
                      className: j.resolvingWrapper,
                      children: [
                          (0, r.jsx)('div', {
                              className: j.resolving,
                              children: (0, r.jsx)('div', { className: j.resolvingBackground })
                          }),
                          (0, r.jsx)('div', {
                              className: j.resolvingFakeButton,
                              children: (0, r.jsx)('div', { className: j.resolvingBackground })
                          })
                      ]
                  })
                : n
        });
    },
    x = (e) => {
        var t;
        let { application: n, guild: l, channel: i, onClick: u, expired: d = !1, user: f, className: g } = e,
            h = null != (t = (0, o.ZP)(i)) ? t : '',
            O = v.QK.useSetting();
        if (d) return (0, r.jsx)('div', { className: j.guildIconExpired });
        let y = null == l || null != l.icon,
            x = a()((0, b.l)(j, 'guildIcon', y ? 'Image' : '', null != u ? 'Joined' : ''), g);
        return null != n
            ? (0, r.jsx)(p.Z, {
                  game: n,
                  onClick: u,
                  size: j.applicationIcon,
                  className: x
              })
            : null != l
              ? (0, r.jsx)(m.Z, {
                    onClick: u,
                    active: !0,
                    guild: l,
                    className: x,
                    animate: O
                })
              : null != i
                ? (0, r.jsx)(s.qEK, {
                      onClick: u,
                      src: (0, c.x)(i),
                      size: s.EFr.SIZE_56,
                      className: x,
                      'aria-label': h
                  })
                : null != f
                  ? (0, r.jsx)(s.qEK, {
                        onClick: u,
                        src: f.getAvatarURL(null, 56),
                        size: s.EFr.SIZE_56,
                        className: x,
                        'aria-label': h
                    })
                  : null;
    },
    N = (e) => {
        let { title: t, onClick: n, expired: l, children: i } = e,
            a = (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: (0, b.l)(j, 'inviteDestination', l ? 'Expired' : null != n ? 'Joined' : ''),
                children: t
            });
        return (0, r.jsxs)(d.Z, {
            className: j.guildInfo,
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: [
                null == n
                    ? a
                    : (0, r.jsx)(s.P3F, {
                          onClick: n,
                          children: a
                      }),
                (0, r.jsx)(s.Text, {
                    tag: 'strong',
                    className: j.guildDetail,
                    variant: 'text-sm/normal',
                    children: i
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
                            className: j.statusWrapper,
                            children: [
                                (0, r.jsx)('i', { className: j.statusOnline }),
                                (0, r.jsx)('span', {
                                    className: j.count,
                                    children: h.intl.format(h.t['LC+S+v'], { membersOnline: t })
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
                            className: j.statusWrapper,
                            children: [
                                (0, r.jsx)('i', { className: j.statusOffline }),
                                (0, r.jsx)('span', {
                                    className: j.count,
                                    children: h.intl.format(h.t.zRl6XV, { count: n })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, r.jsx)('div', {
                className: j.statusCounts,
                children: l
            })
        );
    },
    w = (e) => {
        let { channel: t, guild: n } = e,
            l = (0, u.KS)(t, n);
        return null == t || null == l
            ? null
            : (0, r.jsxs)('div', {
                  className: j.channel,
                  children: [
                      (0, r.jsx)(l, {
                          className: j.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, r.jsx)('span', {
                          className: j.channelName,
                          children: t.name
                      })
                  ]
              });
    },
    P = (e) => {
        var t,
            n,
            { children: l, onClick: i, className: c, isDisabled: o } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                }
                return l;
            })(e, ['children', 'onClick', 'className', 'isDisabled']);
        return (0, r.jsx)(
            s.zxk,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, u)),
            (n = n =
                {
                    disabled: o,
                    onClick: i,
                    size: j.buttonSize,
                    className: a()(j.button, c),
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
((P.Colors = s.zxk.Colors),
    (P.Looks = s.zxk.Looks),
    (P.defaultProps = {
        className: null,
        isDisabled: !1
    }));
let S = (e) => {
        let { children: t, className: n, containerRef: l } = e;
        return (0, r.jsx)('div', {
            ref: l,
            className: a()(j.wrapper, n),
            children: t
        });
    },
    I = (e) => {
        let { guild: t } = e,
            [n, i] = l.useState(!1),
            s = g.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, f.x_)()
            });
        return null == s
            ? null
            : (0, r.jsx)('div', {
                  className: j.inviteSplash,
                  children: (0, r.jsx)('img', {
                      src: s,
                      alt: '',
                      className: a()(j.inviteSplashImage, { [j.inviteSplashImageLoaded]: n }),
                      onLoad: () => i(!0)
                  })
              });
    },
    C = (e) => {
        let { guild: t, ref: n } = e;
        return (0, r.jsx)('div', {
            className: j.guildNameWrapper,
            ref: n,
            children: (0, r.jsx)('span', {
                className: j.guildName,
                children: t.name
            })
        });
    },
    T = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)('div', {
            className: j.guildNameWrapper,
            children: (0, r.jsx)('span', {
                className: j.guildName,
                children: t.serializedSourceGuild.name
            })
        });
    };
((S.Header = O), (S.Body = y), (S.Icon = x), (S.Info = N), (S.Data = E), (S.Channel = w), (S.Button = P), (S.GuildSplash = I), (S.GuildName = C), (S.GuildTemplateName = T), (O.displayName = 'InviteButton.Header'), (y.displayName = 'InviteButton.Body'), (x.displayName = 'InviteButton.Icon'), (N.displayName = 'InviteButton.Info'), (E.displayName = 'InviteButton.Data'), (w.displayName = 'InviteButton.Channel'), (P.displayName = 'InviteButton.Button'), (I.displayName = 'InviteButton.GuildSplash'), (C.displayName = 'InviteButton.GuildName'), (T.displayName = 'InviteButton.GuildTemplateName'));
let D = S;
