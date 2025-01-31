n.d(l, {
    SK: () => S,
    ZP: () => w,
    sK: () => R
}),
    n(47120);
var i = n(200651),
    t = n(192379),
    a = n(120356),
    s = n.n(a),
    r = n(442837),
    c = n(692547),
    d = n(780384),
    o = n(481060),
    u = n(410030),
    m = n(686546),
    h = n(372769),
    x = n(134432),
    j = n(703656),
    f = n(314897),
    v = n(271383),
    g = n(768581),
    N = n(900849),
    P = n(249842),
    p = n(838367),
    b = n(576306),
    C = n(914620),
    Z = n(981631),
    I = n(388032),
    y = n(302602),
    _ = n(892561),
    T = n(494536);
function E() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: y.splashPlaceholder }),
            (0, i.jsxs)('div', {
                className: s()(y.body, y.hasSplash),
                children: [
                    (0, i.jsx)('div', { className: y.iconPlaceholder }),
                    (0, i.jsx)('div', { children: (0, i.jsx)('div', { className: y.namePlaceholder }) }),
                    (0, i.jsxs)('div', {
                        className: y.memberInfo,
                        children: [
                            (0, i.jsx)('div', {
                                className: y.memberCount,
                                children: (0, i.jsx)('div', { className: y.memberInfoPlaceholder })
                            }),
                            (0, i.jsx)('div', {
                                className: y.memberCount,
                                children: (0, i.jsx)('div', { className: y.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: y.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function S() {
    let e = (0, u.ZP)();
    return (0, i.jsx)(o.VqE, {
        'aria-label': I.intl.string(I.t['8LKcho']),
        className: y.guildPopout,
        children: (0, i.jsxs)('div', {
            className: y.body,
            children: [
                (0, i.jsx)('img', {
                    src: (0, d.wj)(e) ? _ : T,
                    className: y.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, i.jsx)(o.X6q, {
                    className: y.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: I.intl.string(I.t['+kdPHx'])
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: I.intl.string(I.t['Yn1+xs'])
                })
            ]
        })
    });
}
function R(e) {
    var l, n;
    let { guild: a, channelId: d, messageId: u } = e,
        { name: P, id: p, discoverySplash: b, icon: C, description: _, presenceCount: T, memberCount: E, emojis: S } = a,
        R = (0, r.e7)([f.default], () => f.default.getId()),
        L = (0, r.e7)([v.ZP], () => v.ZP.isMember(p, R), [p, R]),
        [w, k] = t.useState(!1),
        U = (e) => {
            if ((e.stopPropagation(), L)) (0, j.XU)(p, d, u);
            else {
                let e = {
                    page: Z.ZY5.GUILD_CHANNEL,
                    section: Z.jXE.GUILD_POPOUT,
                    object: Z.qAy.CARD
                };
                (0, N.Ub)(p, e);
            }
            k(!0);
        },
        F = g.ZP.getGuildDiscoverySplashURL({
            id: p,
            splash: b,
            size: 250 * (0, x.x_)()
        }),
        G =
            null !==
                (l = g.ZP.getGuildIconURL({
                    id: p,
                    icon: C,
                    size: 80
                })) && void 0 !== l
                ? l
                : void 0,
        O = S,
        D = null;
    return (
        null != O && O.length > 6 && null != S && ((O = null !== (n = null == S ? void 0 : S.slice(Math.max((null == S ? void 0 : S.length) - 6, 0))) && void 0 !== n ? n : []), (D = S.length - 6)),
        (0, i.jsxs)(o.VqE, {
            'aria-label': P,
            className: y.guildPopout,
            children: [
                null != F
                    ? (0, i.jsx)('img', {
                          src: F,
                          alt: '',
                          className: y.splashImage
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: s()(y.body, { [y.hasSplash]: null != F }),
                    children: [
                        (0, i.jsx)('div', {
                            className: s()({ [y.iconWithSplash]: null != F }),
                            children: (0, i.jsx)(o.P3F, {
                                onClick: U,
                                children: (0, i.jsx)(m.ZP, {
                                    mask: m.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, i.jsx)('div', {
                                        className: y.iconMask,
                                        children: (0, i.jsx)(m.ZP, {
                                            mask: m.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, i.jsx)('img', {
                                                src: G,
                                                alt: '',
                                                className: y.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != P
                            ? (0, i.jsxs)('div', {
                                  className: y.guildNameWrapper,
                                  children: [
                                      (0, i.jsx)(h.Z, {
                                          className: y.badge,
                                          guild: a,
                                          tooltipPosition: 'top',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          className: y.guildName,
                                          children: P
                                      })
                                  ]
                              })
                            : null,
                        null != _
                            ? (0, i.jsx)(o.Text, {
                                  color: 'header-secondary',
                                  className: y.description,
                                  variant: 'text-sm/normal',
                                  children: _
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: y.memberInfo,
                            children: [
                                null != T
                                    ? (0, i.jsxs)('div', {
                                          className: y.memberCount,
                                          children: [
                                              (0, i.jsx)('div', { className: y.dotOnline }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: y.memberText,
                                                  children: I.intl.format(I.t['LC+S+v'], { membersOnline: T })
                                              })
                                          ]
                                      })
                                    : null,
                                null != E
                                    ? (0, i.jsxs)('div', {
                                          className: y.memberCount,
                                          children: [
                                              (0, i.jsx)('div', { className: y.dotOffline }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: y.memberText,
                                                  children: I.intl.format(I.t.zRl6XV, { count: E })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: y.footer,
                    children: [
                        null != O && O.length > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(o.X6q, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: y.emojiHeader,
                                          color: 'header-secondary',
                                          children: I.intl.string(I.t.Q60n1N)
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: s()(y.emojiContainer, { [y.withCounter]: null != D }),
                                          children: [
                                              O.map((e) => {
                                                  let l = g.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, i.jsx)(
                                                      o.ua7,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, i.jsx)('img', {
                                                                  ...e,
                                                                  width: 24,
                                                                  height: 24,
                                                                  src: l,
                                                                  className: s()({ [y.emoji]: null == D }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != D
                                                  ? (0, i.jsx)(o.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: y.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(D)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.SMALL,
                            onClick: U,
                            submitting: w,
                            autoFocus: !0,
                            children: I.intl.string(I.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function L(e) {
    let { guildId: l, channelId: n, messageId: a } = e,
        {
            loading: s,
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
    return (t.useEffect(() => {
        null != d || s || c || (0, P.P)(l);
    }, [d, l, s, c]),
    s)
        ? (0, i.jsx)(o.VqE, {
              'aria-label': I.intl.string(I.t.ZTNur6),
              className: y.guildPopout,
              children: (0, i.jsx)(E, {})
          })
        : null == d || c
          ? (0, i.jsx)(S, {})
          : (0, i.jsx)(R, {
                guild: d,
                channelId: n,
                messageId: a
            });
}
function w(e) {
    return (0, b.h)()
        ? (0, i.jsx)(C.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name
          })
        : (0, i.jsx)(L, { ...e });
}
