n.d(t, { Z: () => A }), n(266796), n(47120);
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
    x = n(898331),
    h = n(841183),
    b = n(981631),
    j = n(486324),
    v = n(388032),
    y = n(671254);
function O(e) {
    let { avatar: t, orderNumber: n, onSelectRecentAvatar: l } = e,
        { id: a, storageHash: i, description: o } = t,
        { avatarSrc: s, eventHandlers: u } = (0, h.Z)({
            avatarId: a,
            storageHash: i
        }),
        { onMouseEnter: d, onMouseLeave: f } = u;
    return (0, r.jsx)(c.P3F, {
        onClick: () => l(t),
        onMouseEnter: d,
        onMouseLeave: f,
        className: y.recentAvatarButton,
        'aria-label': v.NW.formatToPlainString(v.t['tmJ75+'], {
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
function C(e) {
    let { numberOfLockedAvatarSlots: t } = e;
    return (0, r.jsxs)(c.P3F, {
        className: y.premiumUpsellButton,
        onClick: b.dG4,
        'aria-label': v.NW.formatToPlainString(v.t.D4829v, { numberOfLockedAvatarSlots: t }),
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
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: a, onClose: i } = e,
        s = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        { avatars: u, loading: f, error: h } = (0, g.S)(),
        { recentAvatarsLimit: N, numberOfLockedAvatarSlots: A } = (0, p.pC)(t),
        [E, w] = l.useState(null),
        P = null != E ? E : null == h ? void 0 : h.message,
        S = u.length > N ? u.slice(0, N) : u,
        T = S.length,
        F = Math.max(N - T, 0),
        _ = (0, c.vRw)(),
        R = l.useCallback(
            async (e) => {
                let { id: t, storageHash: l, description: o } = e;
                if (null == s) return;
                w(null);
                let u = (0, p.fD)({
                    userId: s.id,
                    avatarId: t,
                    storageHash: l,
                    size: b.dGM,
                    canAnimate: !0,
                    allowWebp: !1
                });
                try {
                    let e = await fetch(u),
                        t = await e.blob(),
                        { filename: s, type: d } = (0, p.mh)(l, o);
                    i(),
                        (0, c.ZDy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e('59732'), n.e('64642')]).then(n.bind(n, 712451));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        (function (e) {
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
                                        })(
                                            {
                                                imgURI: u,
                                                file: new File([t], s, { type: d }),
                                                onCrop: a,
                                                uploadType: j.pC.AVATAR,
                                                showUpsellHeader: !0
                                            },
                                            n
                                        )
                                    );
                            },
                            { contextKey: _ }
                        );
                } catch (e) {
                    w(v.NW.string(v.t.fZRH9P));
                }
            },
            [_, i, a, s]
        );
    return (l.useEffect(() => {
        (0, m.N)();
    }, []),
    f)
        ? (0, r.jsx)(c.$jN, { className: y.spinner })
        : (0, r.jsxs)('div', {
              className: y.recentAvatarContainer,
              children: [
                  null != P &&
                      !f &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          className: y.errorMessage,
                          children: P
                      }),
                  T > 0 &&
                      (0, r.jsx)('ul', {
                          'aria-label': v.NW.string(v.t.lsU63N),
                          className: y.recentAvatarList,
                          children: S.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(O, {
                                          avatar: e,
                                          orderNumber: t + 1,
                                          onSelectRecentAvatar: R
                                      })
                                  },
                                  e.id
                              )
                          )
                      }),
                  F > 0 &&
                      (0, r.jsxs)('div', {
                          className: y.emptyAvatarSlots,
                          children: [(0, r.jsx)(c.nn4, { children: v.NW.format(v.t['8W2HOz'], { numberOfEmptyAvatarSlots: F }) }), [...Array(F)].map((e) => (0, r.jsx)(x.Z, { className: y.avatarPlaceholder }, e))]
                      }),
                  !t && (0, r.jsx)(C, { numberOfLockedAvatarSlots: A })
              ]
          });
}
function A(e) {
    let { className: t, onComplete: n, onClose: a } = e,
        s = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        m = f.ZP.canUseIncreasedRecentAvatarsLimit(s),
        { recentAvatarsLimit: g } = (0, p.pC)(m),
        x = l.useCallback(() => {
            (0, u.$)(a);
        }, [a]);
    return (0, r.jsxs)('div', {
        className: i()(y.container, t),
        children: [
            (0, r.jsxs)('div', {
                className: y.text,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: v.NW.string(v.t.Bnq9zM)
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [v.NW.format(v.t['+CyJu7'], { recentAvatarsLimit: g }), ' ', !m && v.NW.format(v.t.Xs2Otb, { onClick: x })]
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
