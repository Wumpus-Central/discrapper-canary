(n.d(t, { Z: () => Z }), n(539854), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(755721),
    c = n(481060),
    o = n(43267),
    u = n(933557),
    d = n(471445),
    p = n(600164),
    m = n(925329),
    f = n(565138),
    v = n(134432),
    g = n(695346),
    b = n(768581),
    h = n(153066),
    j = n(388032),
    O = n(676011);
let y = (e) => {
        let { text: t, extra: n } = e;
        return (0, r.jsxs)(c.vwX, {
            className: O.header,
            children: [t, n]
        });
    },
    x = (e) => {
        let { resolving: t, children: n } = e;
        return (0, r.jsx)('div', {
            className: O.content,
            children: t
                ? (0, r.jsxs)('div', {
                      className: O.resolvingWrapper,
                      children: [
                          (0, r.jsx)('div', {
                              className: O.resolving,
                              children: (0, r.jsx)('div', { className: O.resolvingBackground })
                          }),
                          (0, r.jsx)('div', {
                              className: O.resolvingFakeButton,
                              children: (0, r.jsx)('div', { className: O.resolvingBackground })
                          })
                      ]
                  })
                : n
        });
    },
    N = (e) => {
        var t;
        let { application: n, guild: l, channel: i, onClick: s, expired: d = !1, user: p, className: v } = e,
            b = null != (t = (0, u.ZP)(i)) ? t : '',
            j = g.QK.useSetting();
        if (d) return (0, r.jsx)('div', { className: O.guildIconExpired });
        let y = null == l || null != l.icon,
            x = a()((0, h.l)(O, 'guildIcon', y ? 'Image' : '', null != s ? 'Joined' : ''), v);
        return null != n
            ? (0, r.jsx)(m.Z, {
                  game: n,
                  onClick: s,
                  size: O.applicationIcon,
                  className: x
              })
            : null != l
              ? (0, r.jsx)(f.Z, {
                    onClick: s,
                    active: !0,
                    guild: l,
                    className: x,
                    animate: j
                })
              : null != i
                ? (0, r.jsx)(c.qEK, {
                      onClick: s,
                      src: (0, o.x)(i),
                      size: c.EFr.SIZE_56,
                      className: x,
                      'aria-label': b
                  })
                : null != p
                  ? (0, r.jsx)(c.qEK, {
                        onClick: s,
                        src: p.getAvatarURL(null, 56),
                        size: c.EFr.SIZE_56,
                        className: x,
                        'aria-label': b
                    })
                  : null;
    },
    E = (e) => {
        let { title: t, onClick: n, expired: l, children: i } = e,
            a = (0, r.jsx)(c.X6q, {
                variant: 'heading-md/semibold',
                className: (0, h.l)(O, 'inviteDestination', l ? 'Expired' : null != n ? 'Joined' : ''),
                children: t
            });
        return (0, r.jsxs)(p.Z, {
            className: O.guildInfo,
            direction: p.Z.Direction.VERTICAL,
            justify: p.Z.Justify.CENTER,
            children: [
                null == n
                    ? a
                    : (0, r.jsx)(c.P3F, {
                          onClick: n,
                          children: a
                      }),
                (0, r.jsx)(c.Text, {
                    tag: 'strong',
                    className: O.guildDetail,
                    variant: 'text-sm/normal',
                    children: i
                })
            ]
        });
    },
    w = (e) => {
        let { membersOnline: t, members: n } = e,
            l = [];
        return (
            null != t &&
                t > 0 &&
                l.push(
                    (0, r.jsxs)(
                        'div',
                        {
                            className: O.statusWrapper,
                            children: [
                                (0, r.jsx)('i', { className: O.statusOnline }),
                                (0, r.jsx)('span', {
                                    className: O.count,
                                    children: j.intl.format(j.t['LC+S+v'], { membersOnline: t })
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
                            className: O.statusWrapper,
                            children: [
                                (0, r.jsx)('i', { className: O.statusOffline }),
                                (0, r.jsx)('span', {
                                    className: O.count,
                                    children: j.intl.format(j.t.zRl6XV, { count: n })
                                })
                            ]
                        },
                        'memberCount'
                    )
                ),
            (0, r.jsx)('div', {
                className: O.statusCounts,
                children: l
            })
        );
    },
    P = (e) => {
        let { channel: t, guild: n } = e,
            l = (0, d.KS)(t, n);
        return null == t || null == l
            ? null
            : (0, r.jsxs)('div', {
                  className: O.channel,
                  children: [
                      (0, r.jsx)(l, {
                          className: O.channelIcon,
                          color: 'currentColor',
                          size: 'custom',
                          width: 20,
                          height: 20
                      }),
                      (0, r.jsx)('span', {
                          className: O.channelName,
                          children: t.name
                      })
                  ]
              });
    },
    S = (e) => {
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
            s.zx,
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
                    size: O.buttonSize,
                    className: a()(O.button, c),
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
((S.Colors = s.zx.Colors),
    (S.Looks = s.zx.Looks),
    (S.defaultProps = {
        className: null,
        isDisabled: !1
    }));
let I = (e) => {
        let { children: t, className: n, containerRef: l } = e;
        return (0, r.jsx)('div', {
            ref: l,
            className: a()(O.wrapper, n),
            children: t
        });
    },
    C = (e) => {
        let { guild: t } = e,
            [n, i] = l.useState(!1),
            s = b.ZP.getGuildSplashURL({
                id: t.id,
                splash: t.splash,
                size: 400 * (0, v.x_)()
            });
        return null == s
            ? null
            : (0, r.jsx)('div', {
                  className: O.inviteSplash,
                  children: (0, r.jsx)('img', {
                      src: s,
                      alt: '',
                      className: a()(O.inviteSplashImage, { [O.inviteSplashImageLoaded]: n }),
                      onLoad: () => i(!0)
                  })
              });
    },
    T = (e) => {
        let { guild: t, ref: n } = e;
        return (0, r.jsx)('div', {
            className: O.guildNameWrapper,
            ref: n,
            children: (0, r.jsx)('span', {
                className: O.guildName,
                children: t.name
            })
        });
    },
    D = (e) => {
        let { guildTemplate: t } = e;
        return (0, r.jsx)('div', {
            className: O.guildNameWrapper,
            children: (0, r.jsx)('span', {
                className: O.guildName,
                children: t.serializedSourceGuild.name
            })
        });
    };
((I.Header = y), (I.Body = x), (I.Icon = N), (I.Info = E), (I.Data = w), (I.Channel = P), (I.Button = S), (I.GuildSplash = C), (I.GuildName = T), (I.GuildTemplateName = D), (y.displayName = 'InviteButton.Header'), (x.displayName = 'InviteButton.Body'), (N.displayName = 'InviteButton.Icon'), (E.displayName = 'InviteButton.Info'), (w.displayName = 'InviteButton.Data'), (P.displayName = 'InviteButton.Channel'), (S.displayName = 'InviteButton.Button'), (C.displayName = 'InviteButton.GuildSplash'), (T.displayName = 'InviteButton.GuildName'), (D.displayName = 'InviteButton.GuildTemplateName'));
let Z = I;
