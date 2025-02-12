s.d(l, {
    SK: () => k,
    ZP: () => y,
    sK: () => R
}),
    s(47120);
var a = s(200651),
    n = s(192379),
    i = s(120356),
    t = s.n(i),
    r = s(442837),
    c = s(692547),
    d = s(780384),
    o = s(481060),
    u = s(410030),
    m = s(686546),
    h = s(372769),
    x = s(134432),
    j = s(703656),
    g = s(314897),
    v = s(271383),
    f = s(768581),
    N = s(900849),
    P = s(249842),
    p = s(838367),
    b = s(576306),
    C = s(914620),
    Z = s(981631),
    I = s(388032),
    E = s(485612),
    _ = s(892561),
    T = s(494536);
function S() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', { className: E.splashPlaceholder }),
            (0, a.jsxs)('div', {
                className: t()(E.body, E.hasSplash),
                children: [
                    (0, a.jsx)('div', { className: E.iconPlaceholder }),
                    (0, a.jsx)('div', { children: (0, a.jsx)('div', { className: E.namePlaceholder }) }),
                    (0, a.jsxs)('div', {
                        className: E.memberInfo,
                        children: [
                            (0, a.jsx)('div', {
                                className: E.memberCount,
                                children: (0, a.jsx)('div', { className: E.memberInfoPlaceholder })
                            }),
                            (0, a.jsx)('div', {
                                className: E.memberCount,
                                children: (0, a.jsx)('div', { className: E.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: E.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function k() {
    let e = (0, u.ZP)();
    return (0, a.jsx)(o.VqE, {
        'aria-label': I.intl.string(I.t['8LKcho']),
        className: E.guildPopout,
        children: (0, a.jsxs)('div', {
            className: E.body,
            children: [
                (0, a.jsx)('img', {
                    src: (0, d.wj)(e) ? _ : T,
                    className: E.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, a.jsx)(o.X6q, {
                    className: E.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: I.intl.string(I.t['+kdPHx'])
                }),
                (0, a.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: I.intl.string(I.t['Yn1+xs'])
                })
            ]
        })
    });
}
function R(e) {
    var l, s;
    let { guild: i, channelId: d, messageId: u } = e,
        { name: P, id: p, discoverySplash: b, icon: C, description: _, presenceCount: T, memberCount: S, emojis: k } = i,
        R = (0, r.e7)([g.default], () => g.default.getId()),
        U = (0, r.e7)([v.ZP], () => v.ZP.isMember(p, R), [p, R]),
        [y, L] = n.useState(!1),
        F = (e) => {
            if ((e.stopPropagation(), U)) (0, j.XU)(p, d, u);
            else {
                let e = {
                    page: Z.ZY5.GUILD_CHANNEL,
                    section: Z.jXE.GUILD_POPOUT,
                    object: Z.qAy.CARD
                };
                (0, N.Ub)(p, e);
            }
            L(!0);
        },
        G = f.ZP.getGuildDiscoverySplashURL({
            id: p,
            splash: b,
            size: 250 * (0, x.x_)()
        }),
        O =
            null !==
                (l = f.ZP.getGuildIconURL({
                    id: p,
                    icon: C,
                    size: 80
                })) && void 0 !== l
                ? l
                : void 0,
        w = k,
        A = null;
    return (
        null != w && w.length > 6 && null != k && ((w = null !== (s = null == k ? void 0 : k.slice(Math.max((null == k ? void 0 : k.length) - 6, 0))) && void 0 !== s ? s : []), (A = k.length - 6)),
        (0, a.jsxs)(o.VqE, {
            'aria-label': P,
            className: E.guildPopout,
            children: [
                null != G
                    ? (0, a.jsx)('img', {
                          src: G,
                          alt: '',
                          className: E.splashImage
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: t()(E.body, { [E.hasSplash]: null != G }),
                    children: [
                        (0, a.jsx)('div', {
                            className: t()({ [E.iconWithSplash]: null != G }),
                            children: (0, a.jsx)(o.P3F, {
                                onClick: F,
                                children: (0, a.jsx)(m.ZP, {
                                    mask: m.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, a.jsx)('div', {
                                        className: E.iconMask,
                                        children: (0, a.jsx)(m.ZP, {
                                            mask: m.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, a.jsx)('img', {
                                                src: O,
                                                alt: '',
                                                className: E.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != P
                            ? (0, a.jsxs)('div', {
                                  className: E.guildNameWrapper,
                                  children: [
                                      (0, a.jsx)(h.Z, {
                                          className: E.badge,
                                          guild: i,
                                          tooltipPosition: 'top',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, a.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          className: E.guildName,
                                          children: P
                                      })
                                  ]
                              })
                            : null,
                        null != _
                            ? (0, a.jsx)(o.Text, {
                                  color: 'header-secondary',
                                  className: E.description,
                                  variant: 'text-sm/normal',
                                  children: _
                              })
                            : null,
                        (0, a.jsxs)('div', {
                            className: E.memberInfo,
                            children: [
                                null != T
                                    ? (0, a.jsxs)('div', {
                                          className: E.memberCount,
                                          children: [
                                              (0, a.jsx)('div', { className: E.dotOnline }),
                                              (0, a.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: E.memberText,
                                                  children: I.intl.format(I.t['LC+S+v'], { membersOnline: T })
                                              })
                                          ]
                                      })
                                    : null,
                                null != S
                                    ? (0, a.jsxs)('div', {
                                          className: E.memberCount,
                                          children: [
                                              (0, a.jsx)('div', { className: E.dotOffline }),
                                              (0, a.jsx)(o.Text, {
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
                (0, a.jsxs)('div', {
                    className: E.footer,
                    children: [
                        null != w && w.length > 0
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(o.X6q, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: E.emojiHeader,
                                          color: 'header-secondary',
                                          children: I.intl.string(I.t.Q60n1N)
                                      }),
                                      (0, a.jsxs)('div', {
                                          className: t()(E.emojiContainer, { [E.withCounter]: null != A }),
                                          children: [
                                              w.map((e) => {
                                                  let l = f.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, a.jsx)(
                                                      o.ua7,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, a.jsx)('img', {
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
                                                  ? (0, a.jsx)(o.X6q, {
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
                        (0, a.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.SMALL,
                            onClick: F,
                            submitting: y,
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
    let { guildId: l, channelId: s, messageId: i } = e,
        {
            loading: t,
            unavailable: c,
            guild: d
        } = (0, r.cj)(
            [p.Z],
            () => ({
                guild: p.Z.getGuild(l),
                loading: p.Z.isFetchingGuild(l),
                unavailable: p.Z.hasFetchFailed(l)
            }),
            [l]
        );
    return (n.useEffect(() => {
        null != d || t || c || (0, P.P)(l);
    }, [d, l, t, c]),
    t)
        ? (0, a.jsx)(o.VqE, {
              'aria-label': I.intl.string(I.t.ZTNur6),
              className: E.guildPopout,
              children: (0, a.jsx)(S, {})
          })
        : null == d || c
          ? (0, a.jsx)(k, {})
          : (0, a.jsx)(R, {
                guild: d,
                channelId: s,
                messageId: i
            });
}
function y(e) {
    return (0, b.h)()
        ? (0, a.jsx)(C.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name
          })
        : (0, a.jsx)(U, { ...e });
}
