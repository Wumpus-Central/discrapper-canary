n.d(t, { Z: () => E }), n(266796), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(824385),
    c = n(481060),
    u = n(594174),
    d = n(74538),
    f = n(643879),
    p = n(225516),
    m = n(598989),
    g = n(898331),
    b = n(841183),
    j = n(981631),
    x = n(486324),
    h = n(388032),
    y = n(170286);
function O(e) {
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
function v() {
    (0, c.ZDy)(async () => {
        let { default: e } = await n.e('21907').then(n.bind(n, 53394));
        return (t) =>
            (0, r.jsx)(
                e,
                O(
                    {
                        analyticsSource: j.Sbl.PROFILE_PANEL,
                        analyticsLocation: {
                            section: j.jXE.USER_PROFILE,
                            object: j.qAy.RECENT_AVATARS_UPSELL
                        },
                        onSecondaryClick: c.pTH
                    },
                    t
                )
            );
    });
}
function C(e) {
    let { avatar: t, orderNumber: n, onSelectRecentAvatar: l } = e,
        { id: a, storageHash: i, description: o } = t,
        { avatarSrc: s, eventHandlers: u } = (0, b.Z)({
            avatarId: a,
            storageHash: i
        }),
        { onMouseEnter: d, onMouseLeave: f } = u;
    return (0, r.jsx)(c.P3F, {
        onClick: () => l(t),
        onMouseEnter: d,
        onMouseLeave: f,
        className: y.recentAvatarButton,
        'aria-label': h.NW.formatToPlainString(h.t['tmJ75+'], {
            orderNumber: n,
            description: o
        }),
        children: (0, r.jsx)('img', {
            src: s,
            alt: o,
            className: y.recentAvatar
        })
    });
}
function A(e) {
    let { numberOfLockedAvatarSlots: t } = e;
    return (0, r.jsxs)(c.P3F, {
        className: y.premiumUpsellButton,
        onClick: v,
        'aria-label': h.NW.formatToPlainString(h.t.D4829v, { numberOfLockedAvatarSlots: t }),
        children: [
            (0, r.jsxs)(c.Text, {
                variant: 'text-lg/normal',
                color: 'text-normal',
                'aria-hidden': !0,
                children: ['+', t]
            }),
            (0, r.jsx)(s.m, {
                className: y.premiumUpsellLockIcon,
                size: 'xxs'
            })
        ]
    });
}
function N(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: a, onClose: s } = e,
        d = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: b, loading: v, error: N } = (0, m.S)(),
        { recentAvatarsLimit: E, numberOfLockedAvatarSlots: S } = (0, f.pC)(t),
        [P, w] = l.useState(null),
        T = null != P ? P : null == N ? void 0 : N.message,
        F = b.length > E ? b.slice(0, E) : b,
        _ = F.length,
        R = Math.max(E - _, 0),
        Z = (0, c.vRw)(),
        L = l.useCallback(
            async (e) => {
                if (null == d) return;
                w(null);
                let { id: t, storageHash: l, description: i } = e,
                    o = (0, f.fD)({
                        userId: d.id,
                        avatarId: t,
                        storageHash: l,
                        size: j.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(o),
                        u = await t.blob(),
                        d = URL.createObjectURL(u),
                        { filename: p, type: m } = (0, f.mh)(l, i);
                    s(),
                        (0, c.ZDy)(
                            async () => {
                                let { default: t } = await Promise.all([n.e('59732'), n.e('71741')]).then(n.bind(n, 712451));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        O(
                                            {
                                                imageUri: d,
                                                file: new File([u], p, { type: m }),
                                                originalAsset: e,
                                                onCrop: a,
                                                uploadType: x.pC.AVATAR,
                                                showUpsellHeader: !0
                                            },
                                            n
                                        )
                                    );
                            },
                            { contextKey: Z }
                        );
                } catch (e) {
                    w(h.NW.string(h.t.fZRH9P));
                }
            },
            [Z, s, a, d]
        );
    return (l.useEffect(() => {
        (0, p.N)();
    }, []),
    v)
        ? (0, r.jsx)(c.$jN, { className: y.spinner })
        : (0, r.jsxs)('div', {
              className: y.recentAvatarContainer,
              children: [
                  null != T &&
                      !v &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: T
                      }),
                  (0, r.jsxs)('div', {
                      className: i()(y.recentAvatarSlots, { [y.withPremiumUpsell]: !t }),
                      children: [
                          _ > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': h.NW.string(h.t.lsU63N),
                                  className: y.recentAvatarList,
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
                                  className: y.emptyAvatarSlots,
                                  children: [(0, r.jsx)(c.nn4, { children: h.NW.format(h.t['8W2HOz'], { numberOfEmptyAvatarSlots: R }) }), [...Array(R)].map((e, t) => (0, r.jsx)(g.Z, { className: y.avatarPlaceholder }, t))]
                              }),
                          !t && (0, r.jsx)(A, { numberOfLockedAvatarSlots: S })
                      ]
                  })
              ]
          });
}
function E(e) {
    let { className: t, onComplete: n, onClose: l } = e,
        a = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        s = d.ZP.canUseIncreasedRecentAvatarsLimit(a),
        { recentAvatarsLimit: p } = (0, f.pC)(s);
    return (0, r.jsxs)('div', {
        className: i()(y.container, t),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.vwX, {
                        className: y.recentAvatarsHeading,
                        children: h.NW.string(h.t.Bnq9zM)
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [h.NW.format(h.t['+CyJu7'], { recentAvatarsLimit: p }), ' ', !s && h.NW.format(h.t.Xs2Otb, { onClick: v })]
                    })
                ]
            }),
            (0, r.jsx)(N, {
                hasIncreasedRecentAvatarsLimit: s,
                onComplete: n,
                onClose: l
            })
        ]
    });
}
