n.d(t, { Z: () => N }), n(266796), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
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
    b = n(841183),
    h = n(981631),
    j = n(486324),
    v = n(388032),
    y = n(671254);
function O(e) {
    let { avatar: t, orderNumber: n, onSelectRecentAvatar: a } = e,
        { id: l, storageHash: i, description: o } = t,
        { avatarSrc: s, eventHandlers: u } = (0, b.Z)({
            avatarId: l,
            storageHash: i
        }),
        { onMouseEnter: d, onMouseLeave: f } = u;
    return (0, r.jsx)(c.P3F, {
        onClick: () => a(t),
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
        onClick: h.dG4,
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
function A(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: l, onClose: i } = e,
        s = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        { avatars: u, loading: f, error: b } = (0, g.S)(),
        { recentAvatarsLimit: A, numberOfLockedAvatarSlots: N } = (0, p.pC)(t),
        [E, S] = a.useState(null),
        w = null != E ? E : null == b ? void 0 : b.message,
        P = u.length > A ? u.slice(0, A) : u,
        T = P.length,
        _ = Math.max(A - T, 0),
        F = (0, c.vRw)(),
        R = a.useCallback(
            async (e) => {
                if (null == s) return;
                S(null);
                let { id: t, storageHash: a, description: o } = e,
                    u = (0, p.fD)({
                        userId: s.id,
                        avatarId: t,
                        storageHash: a,
                        size: h.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(u),
                        s = await t.blob(),
                        d = URL.createObjectURL(s),
                        { filename: f, type: m } = (0, p.mh)(a, o);
                    i(),
                        (0, c.ZDy)(
                            async () => {
                                let { default: t } = await Promise.all([n.e('59732'), n.e('64642')]).then(n.bind(n, 712451));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
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
                                                imageUri: d,
                                                file: new File([s], f, { type: m }),
                                                originalAsset: e,
                                                onCrop: l,
                                                uploadType: j.pC.AVATAR,
                                                showUpsellHeader: !0
                                            },
                                            n
                                        )
                                    );
                            },
                            { contextKey: F }
                        );
                } catch (e) {
                    S(v.NW.string(v.t.fZRH9P));
                }
            },
            [F, i, l, s]
        );
    return (a.useEffect(() => {
        (0, m.N)();
    }, []),
    f)
        ? (0, r.jsx)(c.$jN, { className: y.spinner })
        : (0, r.jsxs)('div', {
              className: y.recentAvatarContainer,
              children: [
                  null != w &&
                      !f &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          className: y.errorMessage,
                          children: w
                      }),
                  T > 0 &&
                      (0, r.jsx)('ul', {
                          'aria-label': v.NW.string(v.t.lsU63N),
                          className: y.recentAvatarList,
                          children: P.map((e, t) =>
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
                  _ > 0 &&
                      (0, r.jsxs)('div', {
                          className: y.emptyAvatarSlots,
                          children: [(0, r.jsx)(c.nn4, { children: v.NW.format(v.t['8W2HOz'], { numberOfEmptyAvatarSlots: _ }) }), [...Array(_)].map((e, t) => (0, r.jsx)(x.Z, { className: y.avatarPlaceholder }, t))]
                      }),
                  !t && (0, r.jsx)(C, { numberOfLockedAvatarSlots: N })
              ]
          });
}
function N(e) {
    let { className: t, onComplete: n, onClose: l } = e,
        s = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        m = f.ZP.canUseIncreasedRecentAvatarsLimit(s),
        { recentAvatarsLimit: g } = (0, p.pC)(m),
        x = a.useCallback(() => {
            (0, u.$)(l);
        }, [l]);
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
            (0, r.jsx)(A, {
                hasIncreasedRecentAvatarsLimit: m,
                onComplete: n,
                onClose: l
            })
        ]
    });
}
