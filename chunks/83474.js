t.d(n, {
    SK: function () {
        return A;
    },
    ZP: function () {
        return w;
    },
    sK: function () {
        return O;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    c = t(692547),
    o = t(780384),
    u = t(481060),
    d = t(410030),
    h = t(686546),
    m = t(372769),
    f = t(134432),
    x = t(703656),
    g = t(314897),
    j = t(271383),
    v = t(768581),
    N = t(900849),
    _ = t(249842),
    p = t(838367),
    E = t(576306),
    P = t(914620),
    T = t(981631),
    b = t(388032),
    C = t(302602),
    I = t(892561),
    S = t(494536);
function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: C.splashPlaceholder }),
            (0, i.jsxs)('div', {
                className: a()(C.body, C.hasSplash),
                children: [
                    (0, i.jsx)('div', { className: C.iconPlaceholder }),
                    (0, i.jsx)('div', { children: (0, i.jsx)('div', { className: C.namePlaceholder }) }),
                    (0, i.jsxs)('div', {
                        className: C.memberInfo,
                        children: [
                            (0, i.jsx)('div', {
                                className: C.memberCount,
                                children: (0, i.jsx)('div', { className: C.memberInfoPlaceholder })
                            }),
                            (0, i.jsx)('div', {
                                className: C.memberCount,
                                children: (0, i.jsx)('div', { className: C.memberInfoPlaceholder })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: C.viewButtonPlaceholder })
                ]
            })
        ]
    });
}
function A() {
    let e = (0, d.ZP)();
    return (0, i.jsx)(u.Dialog, {
        'aria-label': b.intl.string(b.t['8LKcho']),
        className: C.guildPopout,
        children: (0, i.jsxs)('div', {
            className: C.body,
            children: [
                (0, i.jsx)('img', {
                    src: (0, o.wj)(e) ? I : S,
                    className: C.unavailableIcon,
                    width: 80,
                    height: 80,
                    alt: ''
                }),
                (0, i.jsx)(u.Heading, {
                    className: C.unavailableHeader,
                    variant: 'heading-md/semibold',
                    children: b.intl.string(b.t['+kdPHx'])
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: b.intl.string(b.t['Yn1+xs'])
                })
            ]
        })
    });
}
function O(e) {
    var n, t;
    let { guild: r, channelId: o, messageId: d } = e,
        { name: _, id: p, discoverySplash: E, icon: P, description: I, presenceCount: S, memberCount: y, emojis: A } = r,
        O = (0, s.e7)([g.default], () => g.default.getId()),
        Z = (0, s.e7)([j.ZP], () => j.ZP.isMember(p, O), [p, O]),
        [w, R] = l.useState(!1),
        D = (e) => {
            if ((e.stopPropagation(), Z)) (0, x.XU)(p, o, d);
            else {
                let e = {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.GUILD_POPOUT,
                    object: T.qAy.CARD
                };
                (0, N.Ub)(p, e);
            }
            R(!0);
        },
        U = v.ZP.getGuildDiscoverySplashURL({
            id: p,
            splash: E,
            size: 250 * (0, f.x_)()
        }),
        G =
            null !==
                (n = v.ZP.getGuildIconURL({
                    id: p,
                    icon: P,
                    size: 80
                })) && void 0 !== n
                ? n
                : void 0,
        k = A,
        L = null;
    return (
        null != k && k.length > 6 && null != A && ((k = null !== (t = null == A ? void 0 : A.slice(Math.max((null == A ? void 0 : A.length) - 6, 0))) && void 0 !== t ? t : []), (L = A.length - 6)),
        (0, i.jsxs)(u.Dialog, {
            'aria-label': _,
            className: C.guildPopout,
            children: [
                null != U
                    ? (0, i.jsx)('img', {
                          src: U,
                          alt: '',
                          className: C.splashImage
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: a()(C.body, { [C.hasSplash]: null != U }),
                    children: [
                        (0, i.jsx)('div', {
                            className: a()({ [C.iconWithSplash]: null != U }),
                            children: (0, i.jsx)(u.Clickable, {
                                onClick: D,
                                children: (0, i.jsx)(h.ZP, {
                                    mask: h.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, i.jsx)('div', {
                                        className: C.iconMask,
                                        children: (0, i.jsx)(h.ZP, {
                                            mask: h.ZP.Masks.SQUIRCLE,
                                            width: 80,
                                            height: 80,
                                            children: (0, i.jsx)('img', {
                                                src: G,
                                                alt: '',
                                                className: C.avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        null != _
                            ? (0, i.jsxs)('div', {
                                  className: C.guildNameWrapper,
                                  children: [
                                      (0, i.jsx)(m.Z, {
                                          className: C.badge,
                                          guild: r,
                                          tooltipPosition: 'top',
                                          tooltipColor: u.Tooltip.Colors.PRIMARY,
                                          badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css
                                      }),
                                      (0, i.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: C.guildName,
                                          children: _
                                      })
                                  ]
                              })
                            : null,
                        null != I
                            ? (0, i.jsx)(u.Text, {
                                  color: 'header-secondary',
                                  className: C.description,
                                  variant: 'text-sm/normal',
                                  children: I
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: C.memberInfo,
                            children: [
                                null != S
                                    ? (0, i.jsxs)('div', {
                                          className: C.memberCount,
                                          children: [
                                              (0, i.jsx)('div', { className: C.dotOnline }),
                                              (0, i.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.memberText,
                                                  children: b.intl.format(b.t['LC+S+v'], { membersOnline: S })
                                              })
                                          ]
                                      })
                                    : null,
                                null != y
                                    ? (0, i.jsxs)('div', {
                                          className: C.memberCount,
                                          children: [
                                              (0, i.jsx)('div', { className: C.dotOffline }),
                                              (0, i.jsx)(u.Text, {
                                                  variant: 'text-xs/normal',
                                                  className: C.memberText,
                                                  children: b.intl.format(b.t.zRl6XV, { count: y })
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: C.footer,
                    children: [
                        null != k && k.length > 0
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.Heading, {
                                          variant: 'heading-deprecated-12/semibold',
                                          className: C.emojiHeader,
                                          color: 'header-secondary',
                                          children: b.intl.string(b.t.Q60n1N)
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: a()(C.emojiContainer, { [C.withCounter]: null != L }),
                                          children: [
                                              k.map((e) => {
                                                  let n = v.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: !1,
                                                      size: 24
                                                  });
                                                  return (0, i.jsx)(
                                                      u.Tooltip,
                                                      {
                                                          text: ':'.concat(e.name, ':'),
                                                          children: (e) =>
                                                              (0, i.jsx)('img', {
                                                                  ...e,
                                                                  width: 24,
                                                                  height: 24,
                                                                  src: n,
                                                                  className: a()({ [C.emoji]: null == L }),
                                                                  alt: ''
                                                              })
                                                      },
                                                      e.id
                                                  );
                                              }),
                                              null != L
                                                  ? (0, i.jsx)(u.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: C.emojiCounter,
                                                        color: 'header-secondary',
                                                        children: '+'.concat(L)
                                                    })
                                                  : null
                                          ]
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(u.Button, {
                            look: u.Button.Looks.FILLED,
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            onClick: D,
                            submitting: w,
                            autoFocus: !0,
                            children: b.intl.string(b.t['K+WeR0'])
                        })
                    ]
                })
            ]
        })
    );
}
function Z(e) {
    let { guildId: n, channelId: t, messageId: r } = e,
        {
            loading: a,
            unavailable: c,
            guild: o
        } = (0, s.cj)(
            [p.Z],
            () => ({
                guild: p.Z.getGuild(n),
                loading: p.Z.isFetchingGuild(n),
                unavailable: p.Z.hasFetchFailed(n)
            }),
            [n]
        );
    return (l.useEffect(() => {
        null == o && !a && !c && (0, _.P)(n);
    }, [o, n, a, c]),
    a)
        ? (0, i.jsx)(u.Dialog, {
              'aria-label': b.intl.string(b.t.ZTNur6),
              className: C.guildPopout,
              children: (0, i.jsx)(y, {})
          })
        : null == o || c
          ? (0, i.jsx)(A, {})
          : (0, i.jsx)(O, {
                guild: o,
                channelId: t,
                messageId: r
            });
}
function w(e) {
    return (0, E.h)()
        ? (0, i.jsx)(P.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name
          })
        : (0, i.jsx)(Z, { ...e });
}
