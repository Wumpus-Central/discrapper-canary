n.d(t, { Z: () => E }), n(266796), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(824385),
    c = n(481060),
    u = n(594174),
    d = n(74538),
    p = n(643879),
    f = n(225516),
    m = n(598989),
    g = n(898331),
    j = n(841183),
    b = n(981631),
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
                        analyticsSource: b.Sbl.PROFILE_PANEL,
                        analyticsLocation: {
                            section: b.jXE.USER_PROFILE,
                            object: b.qAy.RECENT_AVATARS_UPSELL
                        },
                        onSecondaryClick: c.pTH
                    },
                    t
                )
            );
    });
}
function N(e) {
    let { avatar: t, orderNumber: n, allowDelete: a, onSelectRecentAvatar: l, onDeleteRecentAvatar: i } = e,
        { id: o, storageHash: s, description: u = h.NW.string(h.t.lqaIxM) } = t,
        { avatarSrc: d, eventHandlers: p } = (0, j.Z)({
            avatarId: o,
            storageHash: s
        }),
        { onMouseEnter: f, onMouseLeave: m } = p,
        g = 'en-US' === h.NW.currentLocale || 'en-GB' === h.NW.currentLocale,
        b = null != u ? u : s.substring(0, 6).toUpperCase(),
        x = h.NW.formatToPlainString(h.t['tmJ75+'], {
            orderNumber: n,
            description: b
        }),
        v = g
            ? h.NW.formatToPlainString(h.t.pBzwhY, {
                  orderNumber: n,
                  description: b
              })
            : h.NW.string(h.t.N86XcH);
    return (0, r.jsxs)('div', {
        className: y.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(c.P3F, {
                onClick: () => l(t),
                onMouseEnter: f,
                onMouseLeave: m,
                className: y.recentAvatarButton,
                'aria-label': x,
                children: (0, r.jsx)('img', {
                    src: d,
                    alt: u,
                    className: y.recentAvatar
                })
            }),
            a &&
                null != i &&
                (0, r.jsx)(c.ua7, {
                    text: h.NW.string(h.t.N86XcH),
                    delay: 340,
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            c.P3F,
                            ((t = O({}, e)),
                            (n = n =
                                {
                                    onClick: (e) => i(e, o, s, b),
                                    className: y.deleteButton,
                                    'aria-label': v,
                                    children: (0, r.jsx)(c.XHJ, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: y.deleteIcon
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
        ]
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
function C(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: l, onClose: s } = e,
        d = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: j, loading: v, error: C } = (0, m.S)(),
        { recentAvatarsLimit: E, numberOfLockedAvatarSlots: P } = (0, p.pC)(t),
        [S, w] = a.useState(null),
        T = null != S ? S : null == C ? void 0 : C.message,
        F = j.length > E ? j.slice(0, E) : j,
        R = F.length,
        _ = Math.max(E - R, 0),
        Z = (0, c.vRw)(),
        L = a.useCallback(
            async (e) => {
                if (null == d) return;
                w(null);
                let { id: t, storageHash: a, description: i } = e,
                    o = (0, p.fD)({
                        userId: d.id,
                        avatarId: t,
                        storageHash: a,
                        size: b.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(o),
                        u = await t.blob(),
                        d = URL.createObjectURL(u),
                        { filename: f, type: m } = (0, p.mh)(a, i);
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
                                                file: new File([u], f, { type: m }),
                                                originalAsset: e,
                                                onCrop: l,
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
            [Z, s, l, d]
        ),
        D = a.useCallback((e, t, a, l) => {
            e.shiftKey
                ? (0, f.B)(t)
                : (0, c.ZDy)(async () => {
                      let { default: e } = await n.e('70871').then(n.bind(n, 225525));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              O(
                                  {
                                      avatarId: t,
                                      storageHash: a,
                                      avatarDescription: l,
                                      onConfirmDelete: () => (0, f.B)(t)
                                  },
                                  n
                              )
                          );
                  });
        }, []);
    return (a.useEffect(() => {
        (0, f.N)();
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
                          R > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': h.NW.string(h.t.lsU63N),
                                  className: y.recentAvatarList,
                                  children: F.map((e, n) =>
                                      (0, r.jsx)(
                                          'li',
                                          {
                                              children: (0, r.jsx)(N, {
                                                  avatar: e,
                                                  orderNumber: n + 1,
                                                  allowDelete: t,
                                                  onSelectRecentAvatar: L,
                                                  onDeleteRecentAvatar: t ? D : void 0
                                              })
                                          },
                                          e.id
                                      )
                                  )
                              }),
                          _ > 0 &&
                              (0, r.jsxs)('div', {
                                  className: y.emptyAvatarSlots,
                                  children: [(0, r.jsx)(c.nn4, { children: h.NW.format(h.t['8W2HOz'], { numberOfEmptyAvatarSlots: _ }) }), [...Array(_)].map((e, t) => (0, r.jsx)(g.Z, { className: y.avatarPlaceholder }, t))]
                              }),
                          !t && (0, r.jsx)(A, { numberOfLockedAvatarSlots: P })
                      ]
                  })
              ]
          });
}
function E(e) {
    let { className: t, onComplete: n, onClose: a } = e,
        l = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        s = d.ZP.canUseIncreasedRecentAvatarsLimit(l),
        { recentAvatarsLimit: f } = (0, p.pC)(s);
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
                        children: [h.NW.format(h.t['+CyJu7'], { recentAvatarsLimit: f }), ' ', !s && h.NW.format(h.t.Xs2Otb, { onClick: v })]
                    })
                ]
            }),
            (0, r.jsx)(C, {
                hasIncreasedRecentAvatarsLimit: s,
                onComplete: n,
                onClose: a
            })
        ]
    });
}
