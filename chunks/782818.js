n.d(t, { Z: () => E }), n(266796), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(824385),
    c = n(481060),
    u = n(98278),
    d = n(594174),
    f = n(74538),
    p = n(643879),
    m = n(225516),
    g = n(598989),
    b = n(898331),
    j = n(841183),
    x = n(981631),
    h = n(486324),
    y = n(388032),
    O = n(170286);
function v(e) {
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
function C(e) {
    let { avatar: t, orderNumber: n, onSelectRecentAvatar: l } = e,
        { id: a, storageHash: i, description: o } = t,
        { avatarSrc: s, eventHandlers: u } = (0, j.Z)({
            avatarId: a,
            storageHash: i
        }),
        { onMouseEnter: d, onMouseLeave: f } = u;
    return (0, r.jsx)(c.P3F, {
        onClick: () => l(t),
        onMouseEnter: d,
        onMouseLeave: f,
        className: O.recentAvatarButton,
        'aria-label': y.NW.formatToPlainString(y.t['tmJ75+'], {
            orderNumber: n,
            description: o
        }),
        children: (0, r.jsx)('img', {
            src: s,
            alt: o,
            className: O.recentAvatar
        })
    });
}
function A(e) {
    let { numberOfLockedAvatarSlots: t } = e,
        a = l.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e('21907').then(n.bind(n, 53394));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        v(
                            {
                                analyticsSource: x.Sbl.PROFILE_PANEL,
                                analyticsLocation: {
                                    section: x.jXE.USER_PROFILE,
                                    object: x.qAy.RECENT_AVATARS_UPSELL
                                },
                                onSecondaryClick: c.pTH
                            },
                            t
                        )
                    );
            });
        }, []);
    return (0, r.jsxs)(c.P3F, {
        className: O.premiumUpsellButton,
        onClick: a,
        'aria-label': y.NW.formatToPlainString(y.t.D4829v, { numberOfLockedAvatarSlots: t }),
        children: [
            (0, r.jsxs)(c.Text, {
                variant: 'text-lg/normal',
                color: 'text-normal',
                'aria-hidden': !0,
                children: ['+', t]
            }),
            (0, r.jsx)(s.m, {
                className: O.premiumUpsellLockIcon,
                size: 'xxs'
            })
        ]
    });
}
function N(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: a, onClose: s } = e,
        u = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        { avatars: f, loading: j, error: N } = (0, g.S)(),
        { recentAvatarsLimit: E, numberOfLockedAvatarSlots: S } = (0, p.pC)(t),
        [P, w] = l.useState(null),
        T = null != P ? P : null == N ? void 0 : N.message,
        F = f.length > E ? f.slice(0, E) : f,
        _ = F.length,
        R = Math.max(E - _, 0),
        Z = (0, c.vRw)(),
        L = l.useCallback(
            async (e) => {
                if (null == u) return;
                w(null);
                let { id: t, storageHash: l, description: i } = e,
                    o = (0, p.fD)({
                        userId: u.id,
                        avatarId: t,
                        storageHash: l,
                        size: x.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(o),
                        u = await t.blob(),
                        d = URL.createObjectURL(u),
                        { filename: f, type: m } = (0, p.mh)(l, i);
                    s(),
                        (0, c.ZDy)(
                            async () => {
                                let { default: t } = await Promise.all([n.e('59732'), n.e('71741')]).then(n.bind(n, 712451));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        v(
                                            {
                                                imageUri: d,
                                                file: new File([u], f, { type: m }),
                                                originalAsset: e,
                                                onCrop: a,
                                                uploadType: h.pC.AVATAR,
                                                showUpsellHeader: !0
                                            },
                                            n
                                        )
                                    );
                            },
                            { contextKey: Z }
                        );
                } catch (e) {
                    w(y.NW.string(y.t.fZRH9P));
                }
            },
            [Z, s, a, u]
        );
    return (l.useEffect(() => {
        (0, m.N)();
    }, []),
    j)
        ? (0, r.jsx)(c.$jN, { className: O.spinner })
        : (0, r.jsxs)('div', {
              className: O.recentAvatarContainer,
              children: [
                  null != T &&
                      !j &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: T
                      }),
                  (0, r.jsxs)('div', {
                      className: i()(O.recentAvatarSlots, { [O.withPremiumUpsell]: !t }),
                      children: [
                          _ > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': y.NW.string(y.t.lsU63N),
                                  className: O.recentAvatarList,
                                  children: F.map((e, t) =>
                                      (0, r.jsx)(
                                          'li',
                                          {
                                              children: (0, r.jsx)(C, {
                                                  avatar: e,
                                                  orderNumber: t + 1,
                                                  onSelectRecentAvatar: L
                                              })
                                          },
                                          e.id
                                      )
                                  )
                              }),
                          R > 0 &&
                              (0, r.jsxs)('div', {
                                  className: O.emptyAvatarSlots,
                                  children: [(0, r.jsx)(c.nn4, { children: y.NW.format(y.t['8W2HOz'], { numberOfEmptyAvatarSlots: R }) }), [...Array(R)].map((e, t) => (0, r.jsx)(b.Z, { className: O.avatarPlaceholder }, t))]
                              }),
                          !t && (0, r.jsx)(A, { numberOfLockedAvatarSlots: S })
                      ]
                  })
              ]
          });
}
function E(e) {
    let { className: t, onComplete: n, onClose: a } = e,
        s = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        m = f.ZP.canUseIncreasedRecentAvatarsLimit(s),
        { recentAvatarsLimit: g } = (0, p.pC)(m),
        b = l.useCallback(() => {
            (0, u.$)(a);
        }, [a]);
    return (0, r.jsxs)('div', {
        className: i()(O.container, t),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.vwX, {
                        className: O.recentAvatarsHeading,
                        children: y.NW.string(y.t.Bnq9zM)
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [y.NW.format(y.t['+CyJu7'], { recentAvatarsLimit: g }), ' ', !m && y.NW.format(y.t.Xs2Otb, { onClick: b })]
                    })
                ]
            }),
            (0, r.jsx)(N, {
                hasIncreasedRecentAvatarsLimit: m,
                onComplete: n,
                onClose: a
            })
        ]
    });
}
