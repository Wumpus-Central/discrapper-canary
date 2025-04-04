n.d(t, {
    SK: () => G,
    ZP: () => V,
    sK: () => B
}),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(410030),
    f = n(686546),
    _ = n(372769),
    p = n(134432),
    h = n(703656),
    m = n(314897),
    g = n(271383),
    E = n(768581),
    b = n(900849),
    y = n(249842),
    v = n(838367),
    O = n(576306),
    I = n(914620),
    S = n(981631),
    T = n(388032),
    N = n(13647),
    A = n(892561),
    C = n(494536);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = 80,
    x = 4,
    M = 250,
    k = 6,
    j = 24;
function U() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', { className: N.splashPlaceholder }),
            (0, r.jsxs)('div', {
                className: a()(N.body, N.hasSplash),
                children: [
                    (0, r.jsx)('div', { className: N.iconPlaceholder }),
                    (0, r.jsx)('div', { children: (0, r.jsx)('div', { className: N.namePlaceholder }) }),
                    (0, r.jsxs)('div', {
                        className: N.memberInfo,
                        children: [
                            (0, r.jsx)('div', {
                                className: N.memberCount,
                                children: (0, r.jsx)('div', { className: N.memberInfoPlaceholder })
                            }),
                            (0, r.jsx)('div', {
                                className: N.memberCount,
                                children: (0, r.jsx)('div', { className: N.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: N.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function G() {
    let e = (0, d.ZP)();
    return (0, r.jsx)(u.VqE, {
        'aria-label': T.NW.string(T.t['8LKcho']),
        className: N.guildPopout,
        children: (0, r.jsxs)('div', {
            className: N.body,
            children: [
                (0, r.jsx)('img', {
                    src: (0, c.wj)(e) ? A : C,
                    className: N.unavailableIcon,
                    width: L,
                    height: L,
                    alt: ''
                }),
                (0, r.jsx)(u.X6q, {
                    className: N.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: T.NW.string(T.t['+kdPHx'])
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: T.NW.string(T.t['Yn1+xs'])
                })
            ]
        })
    });
}
function B(e) {
    var t, n;
    let { guild: o, channelId: c, messageId: d } = e,
        { name: y, id: v, discoverySplash: O, icon: I, description: A, presenceCount: C, memberCount: R, emojis: w } = o,
        U = v,
        G = (0, s.e7)([m.default], () => m.default.getId()),
        B = (0, s.e7)([g.ZP], () => g.ZP.isMember(U, G), [U, G]),
        [F, V] = i.useState(!1),
        Z = (e) => {
            if ((e.stopPropagation(), B)) (0, h.XU)(U, c, d);
            else {
                let e = {
                    page: S.ZY5.GUILD_CHANNEL,
                    section: S.jXE.GUILD_POPOUT,
                    object: S.qAy.CARD
                };
                (0, b.Ub)(U, e);
            }
            V(!0);
        },
        H = E.ZP.getGuildDiscoverySplashURL({
            id: v,
            splash: O,
            size: M * (0, p.x_)()
        }),
        W =
            null !=
            (t = E.ZP.getGuildIconURL({
                id: v,
                icon: I,
                size: L
            }))
                ? t
                : void 0,
        Y = w,
        K = null;
    return (
        null != Y && Y.length > k && null != w && ((Y = null != (n = null == w ? void 0 : w.slice(Math.max((null == w ? void 0 : w.length) - k, 0))) ? n : []), (K = w.length - k)),
        (0, r.jsxs)(u.VqE, {
            'aria-label': y,
            className: N.guildPopout,
            children: [
                null != H
                    ? (0, r.jsx)('img', {
                          src: H,
                          alt: '',
                          className: N.splashImage
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: a()(N.body, { [N.hasSplash]: null != H }),
                    children: [
                        (0, r.jsx)('div', {
                            className: a()({ [N.iconWithSplash]: null != H }),
                            children: (0, r.jsx)(u.P3F, {
                                onClick: Z,
                                children: (0, r.jsx)(f.ZP, {
                                    mask: f.ZP.Masks.SQUIRCLE,
                                    width: L + 2 * x,
                                    height: L + 2 * x,
                                    children: (0, r.jsx)('div', {
                                        className: N.iconMask,
                                        children: (0, r.jsx)(f.ZP, {
                                            mask: f.ZP.Masks.SQUIRCLE,
                                            width: L,
                                            height: L,
                                            children: (0, r.jsx)('img', {
                                                src: W,
                                                alt: '',
                                                className: N.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != y
                            ? (0, r.jsxs)('div', {
                                  className: N.guildNameWrapper,
                                  children: [
                                      (0, r.jsx)(_.Z, {
                                          className: N.badge,
                                          guild: o,
                                          tooltipPosition: 'top',
                                          tooltipColor: u.ua7.Colors.PRIMARY,
                                          badgeColor: l.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: N.guildName,
                                          children: y
                                      })
                                  ]
                              })
                            : null,
                        null != A
                            ? (0, r.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  className: N.description,
                                  variant: 'text-sm/normal',
                                  children: A
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: N.memberInfo,
                            children: [
                                null != C
                                    ? (0, r.jsxs)('div', {
                                          className: N.memberCount,
                                          children: [
                                              (0, r.jsx)('div', { className: N.dotOnline }),
                                              (0, r.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: N.memberText,
                                                  children: T.NW.format(T.t['LC+S+v'], { membersOnline: C })
                                              })
                                          ]
                                      })
                                    : null,
                                null != R
                                    ? (0, r.jsxs)('div', {
                                          className: N.memberCount,
                                          children: [
                                              (0, r.jsx)('div', { className: N.dotOffline }),
                                              (0, r.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: N.memberText,
                                                  children: T.NW.format(T.t.zRl6XV, { count: R })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: N.footer,
                    children: [
                        null != Y && Y.length > 0
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(u.X6q, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: N.emojiHeader,
                                          color: 'header-secondary',
                                          children: T.NW.string(T.t.Q60n1N)
                                      }),
                                      (0, r.jsxs)('div', {
                                          className: a()(N.emojiContainer, { [N.withCounter]: null != K }),
                                          children: [
                                              Y.map((e) => {
                                                  let t = E.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: j
                                                  });
                                                  return (0, r.jsx)(
                                                      u.ua7,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, r.jsx)(
                                                                  'img',
                                                                  D(P({}, e), {
                                                                      width: j,
                                                                      height: j,
                                                                      src: t,
                                                                      className: a()({ [N.emoji]: null == K }),
                                                                      alt: ''
                                                                  })
                                                              )
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != K
                                                  ? (0, r.jsx)(u.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: N.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(K)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(u.zxk, {
                            look: u.zxk.Looks.FILLED,
                            color: u.zxk.Colors.BRAND,
                            size: u.zxk.Sizes.SMALL,
                            onClick: Z,
                            submitting: F,
                            autoFocus: !0,
                            children: T.NW.string(T.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function F(e) {
    let { guildId: t, channelId: n, messageId: o } = e,
        {
            loading: a,
            unavailable: l,
            guild: c
        } = (0, s.cj)(
            [v.Z],
            () => ({
                guild: v.Z.getGuild(t),
                loading: v.Z.isFetchingGuild(t),
                unavailable: v.Z.hasFetchFailed(t)
            }),
            [t]
        );
    return (i.useEffect(() => {
        null != c || a || l || (0, y.P)(t);
    }, [c, t, a, l]),
    a)
        ? (0, r.jsx)(u.VqE, {
              'aria-label': T.NW.string(T.t.ZTNur6),
              className: N.guildPopout,
              children: (0, r.jsx)(U, {})
          })
        : null == c || l
          ? (0, r.jsx)(G, {})
          : (0, r.jsx)(B, {
                guild: c,
                channelId: n,
                messageId: o
            });
}
function V(e) {
    return (0, O.h)()
        ? (0, r.jsx)(I.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name
          })
        : (0, r.jsx)(F, P({}, e));
}
