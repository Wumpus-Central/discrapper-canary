n.d(t, {
    SK: () => k,
    ZP: () => R,
    sK: () => T
}),
    n(266796),
    n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    c = n(692547),
    o = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(686546),
    h = n(372769),
    j = n(134432),
    f = n(703656),
    x = n(314897),
    g = n(271383),
    p = n(768581),
    b = n(900849),
    v = n(249842),
    P = n(838367),
    O = n(576306),
    y = n(914620),
    N = n(981631),
    w = n(388032),
    I = n(548758),
    C = n(892561),
    S = n(494536);
function Z(e) {
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
}
function E() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', { className: I.splashPlaceholder }),
            (0, r.jsxs)('div', {
                className: s()(I.body, I.hasSplash),
                children: [
                    (0, r.jsx)('div', { className: I.iconPlaceholder }),
                    (0, r.jsx)('div', { children: (0, r.jsx)('div', { className: I.namePlaceholder }) }),
                    (0, r.jsxs)('div', {
                        className: I.memberInfo,
                        children: [
                            (0, r.jsx)('div', {
                                className: I.memberCount,
                                children: (0, r.jsx)('div', { className: I.memberInfoPlaceholder })
                            }),
                            (0, r.jsx)('div', {
                                className: I.memberCount,
                                children: (0, r.jsx)('div', { className: I.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: I.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function k() {
    let e = (0, u.ZP)();
    return (0, r.jsx)(d.VqE, {
        'aria-label': w.NW.string(w.t['8LKcho']),
        className: I.guildPopout,
        children: (0, r.jsxs)('div', {
            className: I.body,
            children: [
                (0, r.jsx)('img', {
                    src: (0, o.wj)(e) ? C : S,
                    className: I.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, r.jsx)(d.X6q, {
                    className: I.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: w.NW.string(w.t['+kdPHx'])
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: w.NW.string(w.t['Yn1+xs'])
                })
            ]
        })
    });
}
function T(e) {
    var t, n;
    let { guild: a, channelId: o, messageId: u } = e,
        { name: v, id: P, discoverySplash: O, icon: y, description: C, presenceCount: S, memberCount: E, emojis: k } = a,
        T = (0, i.e7)([x.default], () => x.default.getId()),
        _ = (0, i.e7)([g.ZP], () => g.ZP.isMember(P, T), [P, T]),
        [R, U] = l.useState(!1),
        D = (e) => {
            if ((e.stopPropagation(), _)) (0, f.XU)(P, o, u);
            else {
                let e = {
                    page: N.ZY5.GUILD_CHANNEL,
                    section: N.jXE.GUILD_POPOUT,
                    object: N.qAy.CARD
                };
                (0, b.Ub)(P, e);
            }
            U(!0);
        },
        L = p.ZP.getGuildDiscoverySplashURL({
            id: P,
            splash: O,
            size: 250 * (0, j.x_)()
        }),
        F =
            null !==
                (t = p.ZP.getGuildIconURL({
                    id: P,
                    icon: y,
                    size: 80
                })) && void 0 !== t
                ? t
                : void 0,
        G = k,
        W = null;
    return (
        null != G && G.length > 6 && null != k && ((G = null !== (n = null == k ? void 0 : k.slice(Math.max((null == k ? void 0 : k.length) - 6, 0))) && void 0 !== n ? n : []), (W = k.length - 6)),
        (0, r.jsxs)(d.VqE, {
            'aria-label': v,
            className: I.guildPopout,
            children: [
                null != L
                    ? (0, r.jsx)('img', {
                          src: L,
                          alt: '',
                          className: I.splashImage
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: s()(I.body, { [I.hasSplash]: null != L }),
                    children: [
                        (0, r.jsx)('div', {
                            className: s()({ [I.iconWithSplash]: null != L }),
                            children: (0, r.jsx)(d.P3F, {
                                onClick: D,
                                children: (0, r.jsx)(m.ZP, {
                                    mask: m.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, r.jsx)('div', {
                                        className: I.iconMask,
                                        children: (0, r.jsx)(m.ZP, {
                                            mask: m.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, r.jsx)('img', {
                                                src: F,
                                                alt: '',
                                                className: I.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != v
                            ? (0, r.jsxs)('div', {
                                  className: I.guildNameWrapper,
                                  children: [
                                      (0, r.jsx)(h.Z, {
                                          className: I.badge,
                                          guild: a,
                                          tooltipPosition: 'top',
                                          tooltipColor: d.ua7.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: 'text-md/semibold',
                                          className: I.guildName,
                                          children: v
                                      })
                                  ]
                              })
                            : null,
                        null != C
                            ? (0, r.jsx)(d.Text, {
                                  color: 'header-secondary',
                                  className: I.description,
                                  variant: 'text-sm/normal',
                                  children: C
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: I.memberInfo,
                            children: [
                                null != S
                                    ? (0, r.jsxs)('div', {
                                          className: I.memberCount,
                                          children: [
                                              (0, r.jsx)('div', { className: I.dotOnline }),
                                              (0, r.jsx)(d.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: I.memberText,
                                                  children: w.NW.format(w.t['LC+S+v'], { membersOnline: S })
                                              })
                                          ]
                                      })
                                    : null,
                                null != E
                                    ? (0, r.jsxs)('div', {
                                          className: I.memberCount,
                                          children: [
                                              (0, r.jsx)('div', { className: I.dotOffline }),
                                              (0, r.jsx)(d.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: I.memberText,
                                                  children: w.NW.format(w.t.zRl6XV, { count: E })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: I.footer,
                    children: [
                        null != G && G.length > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(d.X6q, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: I.emojiHeader,
                                          color: 'header-secondary',
                                          children: w.NW.string(w.t.Q60n1N)
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: s()(I.emojiContainer, { [I.withCounter]: null != W }),
                                          children: [
                                              G.map((e) => {
                                                  let t = p.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, r.jsx)(
                                                      d.ua7,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) => {
                                                              var n, l;
                                                              return (0, r.jsx)(
                                                                  'img',
                                                                  ((n = Z({}, e)),
                                                                  (l = l =
                                                                      {
                                                                          width: 24,
                                                                          height: 24,
                                                                          src: t,
                                                                          className: s()({ [I.emoji]: null == W }),
                                                                          alt: ''
                                                                      }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                                                      : (function (e, t) {
                                                                            var n = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var r = Object.getOwnPropertySymbols(e);
                                                                                n.push.apply(n, r);
                                                                            }
                                                                            return n;
                                                                        })(Object(l)).forEach(function (e) {
                                                                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                                                        }),
                                                                  n)
                                                              );
                                                          }
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != W
                                                  ? (0, r.jsx)(d.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: I.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(W)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(d.zxk, {
                            look: d.zxk.Looks.FILLED,
                            color: d.zxk.Colors.BRAND,
                            size: d.zxk.Sizes.SMALL,
                            onClick: D,
                            submitting: R,
                            autoFocus: !0,
                            children: w.NW.string(w.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function _(e) {
    let { guildId: t, channelId: n, messageId: a } = e,
        {
            loading: s,
            unavailable: c,
            guild: o
        } = (0, i.cj)(
            [P.Z],
            () => ({
                guild: P.Z.getGuild(t),
                loading: P.Z.isFetchingGuild(t),
                unavailable: P.Z.hasFetchFailed(t)
            }),
            [t]
        );
    return (l.useEffect(() => {
        null != o || s || c || (0, v.P)(t);
    }, [o, t, s, c]),
    s)
        ? (0, r.jsx)(d.VqE, {
              'aria-label': w.NW.string(w.t.ZTNur6),
              className: I.guildPopout,
              children: (0, r.jsx)(E, {})
          })
        : null == o || c
          ? (0, r.jsx)(k, {})
          : (0, r.jsx)(T, {
                guild: o,
                channelId: n,
                messageId: a
            });
}
function R(e) {
    return (0, O.h)()
        ? (0, r.jsx)(y.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name
          })
        : (0, r.jsx)(_, Z({}, e));
}
