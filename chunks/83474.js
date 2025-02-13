a.d(l, {
    SK: () => y,
    ZP: () => k,
    sK: () => R
}),
    a(47120);
var s = a(200651),
    n = a(192379),
    i = a(120356),
    t = a.n(i),
    r = a(442837),
    d = a(692547),
    c = a(780384),
    o = a(481060),
    u = a(410030),
    m = a(686546),
    h = a(372769),
    x = a(134432),
    j = a(703656),
    g = a(314897),
    v = a(271383),
    N = a(768581),
    f = a(900849),
    p = a(249842),
    P = a(838367),
    b = a(576306),
    C = a(914620),
    Z = a(981631),
    I = a(388032),
    E = a(485612),
    T = a(892561),
    _ = a(494536);
function S() {
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', { className: E.splashPlaceholder }),
            (0, s.jsxs)('div', {
                className: t()(E.body, E.hasSplash),
                children: [
                    (0, s.jsx)('div', { className: E.iconPlaceholder }),
                    (0, s.jsx)('div', { children: (0, s.jsx)('div', { className: E.namePlaceholder }) }),
                    (0, s.jsxs)('div', {
                        className: E.memberInfo,
                        children: [
                            (0, s.jsx)('div', {
                                className: E.memberCount,
                                children: (0, s.jsx)('div', { className: E.memberInfoPlaceholder })
                            }),
                            (0, s.jsx)('div', {
                                className: E.memberCount,
                                children: (0, s.jsx)('div', { className: E.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', { className: E.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function y() {
    let e = (0, u.ZP)();
    return (0, s.jsx)(o.VqE, {
        'aria-label': I.intl.string(I.t['8LKcho']),
        className: E.guildPopout,
        children: (0, s.jsxs)('div', {
            className: E.body,
            children: [
                (0, s.jsx)('img', {
                    src: (0, c.wj)(e) ? T : _,
                    className: E.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, s.jsx)(o.X6q, {
                    className: E.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: I.intl.string(I.t['+kdPHx'])
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: I.intl.string(I.t['Yn1+xs'])
                })
            ]
        })
    });
}
function R(e) {
    var l, a;
    let { guild: i, channelId: c, messageId: u } = e,
        { name: p, id: P, discoverySplash: b, icon: C, description: T, presenceCount: _, memberCount: S, emojis: y } = i,
        R = (0, r.e7)([g.default], () => g.default.getId()),
        U = (0, r.e7)([v.ZP], () => v.ZP.isMember(P, R), [P, R]),
        [k, L] = n.useState(!1),
        F = (e) => {
            if ((e.stopPropagation(), U)) (0, j.XU)(P, c, u);
            else {
                let e = {
                    page: Z.ZY5.GUILD_CHANNEL,
                    section: Z.jXE.GUILD_POPOUT,
                    object: Z.qAy.CARD
                };
                (0, f.Ub)(P, e);
            }
            L(!0);
        },
        G = N.ZP.getGuildDiscoverySplashURL({
            id: P,
            splash: b,
            size: 250 * (0, x.x_)()
        }),
        O =
            null !==
                (l = N.ZP.getGuildIconURL({
                    id: P,
                    icon: C,
                    size: 80
                })) && void 0 !== l
                ? l
                : void 0,
        w = y,
        A = null;
    return (
        null != w && w.length > 6 && null != y && ((w = null !== (a = null == y ? void 0 : y.slice(Math.max((null == y ? void 0 : y.length) - 6, 0))) && void 0 !== a ? a : []), (A = y.length - 6)),
        (0, s.jsxs)(o.VqE, {
            'aria-label': p,
            className: E.guildPopout,
            children: [
                null != G
                    ? (0, s.jsx)('img', {
                          src: G,
                          alt: '',
                          className: E.splashImage
                      })
                    : null,
                (0, s.jsxs)('div', {
                    className: t()(E.body, { [E.hasSplash]: null != G }),
                    children: [
                        (0, s.jsx)('div', {
                            className: t()({ [E.iconWithSplash]: null != G }),
                            children: (0, s.jsx)(o.P3F, {
                                onClick: F,
                                children: (0, s.jsx)(m.ZP, {
                                    mask: m.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, s.jsx)('div', {
                                        className: E.iconMask,
                                        children: (0, s.jsx)(m.ZP, {
                                            mask: m.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, s.jsx)('img', {
                                                src: O,
                                                alt: '',
                                                className: E.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != p
                            ? (0, s.jsxs)('div', {
                                  className: E.guildNameWrapper,
                                  children: [
                                      (0, s.jsx)(h.Z, {
                                          className: E.badge,
                                          guild: i,
                                          tooltipPosition: 'top',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          badgeColor: d.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, s.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          className: E.guildName,
                                          children: p
                                      })
                                  ]
                              })
                            : null,
                        null != T
                            ? (0, s.jsx)(o.Text, {
                                  color: 'header-secondary',
                                  className: E.description,
                                  variant: 'text-sm/normal',
                                  children: T
                              })
                            : null,
                        (0, s.jsxs)('div', {
                            className: E.memberInfo,
                            children: [
                                null != _
                                    ? (0, s.jsxs)('div', {
                                          className: E.memberCount,
                                          children: [
                                              (0, s.jsx)('div', { className: E.dotOnline }),
                                              (0, s.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: E.memberText,
                                                  children: I.intl.format(I.t['LC+S+v'], { membersOnline: _ })
                                              })
                                          ]
                                      })
                                    : null,
                                null != S
                                    ? (0, s.jsxs)('div', {
                                          className: E.memberCount,
                                          children: [
                                              (0, s.jsx)('div', { className: E.dotOffline }),
                                              (0, s.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: E.memberText,
                                                  children: I.intl.format(I.t.zRl6XV, { count: S })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: E.footer,
                    children: [
                        null != w && w.length > 0
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(o.X6q, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: E.emojiHeader,
                                          color: 'header-secondary',
                                          children: I.intl.string(I.t.Q60n1N)
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: t()(E.emojiContainer, { [E.withCounter]: null != A }),
                                          children: [
                                              w.map((e) => {
                                                  let l = N.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, s.jsx)(
                                                      o.ua7,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, s.jsx)('img', {
                                                                  ...e,
                                                                  width: 24,
                                                                  height: 24,
                                                                  src: l,
                                                                  className: t()({ [E.emoji]: null == A }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != A
                                                  ? (0, s.jsx)(o.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: E.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(A)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, s.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.SMALL,
                            onClick: F,
                            submitting: k,
                            autoFocus: !0,
                            children: I.intl.string(I.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function U(e) {
    let { guildId: l, channelId: a, messageId: i } = e,
        {
            loading: t,
            unavailable: d,
            guild: c
        } = (0, r.cj)(
            [P.Z],
            () => ({
                guild: P.Z.getGuild(l),
                loading: P.Z.isFetchingGuild(l),
                unavailable: P.Z.hasFetchFailed(l)
            }),
            [l]
        );
    return (n.useEffect(() => {
        null != c || t || d || (0, p.P)(l);
    }, [c, l, t, d]),
    t)
        ? (0, s.jsx)(o.VqE, {
              'aria-label': I.intl.string(I.t.ZTNur6),
              className: E.guildPopout,
              children: (0, s.jsx)(S, {})
          })
        : null == c || d
          ? (0, s.jsx)(y, {})
          : (0, s.jsx)(R, {
                guild: c,
                channelId: a,
                messageId: i
            });
}
function k(e) {
    return (0, b.h)()
        ? (0, s.jsx)(C.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name
          })
        : (0, s.jsx)(U, { ...e });
}
