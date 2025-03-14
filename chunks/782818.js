n.d(t, { Z: () => A }), n(266796), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(824385),
    c = n(481060),
    u = n(594174),
    d = n(643879),
    p = n(225516),
    f = n(598989),
    m = n(898331),
    g = n(841183),
    j = n(981631),
    b = n(486324),
    x = n(388032),
    y = n(170286);
function h(e) {
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
function O() {
    (0, c.ZDy)(async () => {
        let { default: e } = await n.e('21907').then(n.bind(n, 53394));
        return (t) =>
            (0, r.jsx)(
                e,
                h(
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
function v(e) {
    let { avatar: t, orderNumber: n, allowDelete: l, onSelectRecentAvatar: a, onDeleteRecentAvatar: i } = e,
        { id: o, storageHash: s, description: u = x.NW.string(x.t.lqaIxM) } = t,
        { avatarSrc: d, eventHandlers: p } = (0, g.Z)({
            avatarId: o,
            storageHash: s
        }),
        { onMouseEnter: f, onMouseLeave: m } = p,
        j = 'en-US' === x.NW.currentLocale || 'en-GB' === x.NW.currentLocale,
        b = null != u ? u : s.substring(0, 6).toUpperCase(),
        O = x.NW.formatToPlainString(x.t['tmJ75+'], {
            orderNumber: n,
            description: b
        }),
        v = j
            ? x.NW.formatToPlainString(x.t.pBzwhY, {
                  orderNumber: n,
                  description: b
              })
            : x.NW.string(x.t.N86XcH);
    return (0, r.jsxs)('div', {
        className: y.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(c.P3F, {
                onClick: () => a(t),
                onMouseEnter: f,
                onMouseLeave: m,
                className: y.recentAvatarButton,
                'aria-label': O,
                children: (0, r.jsx)('img', {
                    src: d,
                    alt: u,
                    className: y.recentAvatar
                })
            }),
            l &&
                null != i &&
                (0, r.jsx)(c.ua7, {
                    text: x.NW.string(x.t.N86XcH),
                    delay: 340,
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            c.P3F,
                            ((t = h({}, e)),
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
function N(e) {
    let { numberOfLockedAvatarSlots: t } = e;
    return (0, r.jsxs)(c.P3F, {
        className: y.premiumUpsellButton,
        onClick: O,
        'aria-label': x.NW.formatToPlainString(x.t.D4829v, { numberOfLockedAvatarSlots: t }),
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
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: a } = e,
        s = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: g, loading: O, error: C } = (0, f.S)(),
        { recentAvatarsLimit: A, numberOfLockedAvatarSlots: E } = (0, d.pC)(t),
        [P, w] = l.useState(!1),
        [S, T] = l.useState(null),
        R = null != S ? S : null == C ? void 0 : C.message,
        _ = g.length > A ? g.slice(0, A) : g,
        F = _.length,
        L = Math.max(A - F, 0),
        Z = (0, c.vRw)(),
        D = l.useCallback(
            async (e) => {
                if (null == s || P) return;
                w(!0), T(null);
                let { id: t, storageHash: l, description: i } = e,
                    o = (0, d.fD)({
                        userId: s.id,
                        avatarId: t,
                        storageHash: l,
                        size: j.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(o),
                        s = await t.blob(),
                        u = URL.createObjectURL(s),
                        { filename: p, type: f } = (0, d.mh)(l, i);
                    (0, c.ZDy)(
                        async () => {
                            let { default: t } = await Promise.all([n.e('59732'), n.e('71741')]).then(n.bind(n, 712451));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    h(
                                        {
                                            imageUri: u,
                                            file: new File([s], p, { type: f }),
                                            originalAsset: e,
                                            onCrop: a,
                                            uploadType: b.pC.AVATAR,
                                            showUpsellHeader: !0
                                        },
                                        n
                                    )
                                );
                        },
                        { contextKey: Z }
                    );
                } catch (e) {
                    T(x.NW.string(x.t.fZRH9P));
                } finally {
                    w(!1);
                }
            },
            [Z, P, a, s]
        ),
        k = l.useCallback((e, t, l, a) => {
            e.shiftKey
                ? (0, p.B)(t)
                : (0, c.ZDy)(async () => {
                      let { default: e } = await n.e('70871').then(n.bind(n, 225525));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              h(
                                  {
                                      avatarId: t,
                                      storageHash: l,
                                      avatarDescription: a,
                                      onConfirmDelete: () => (0, p.B)(t)
                                  },
                                  n
                              )
                          );
                  });
        }, []);
    return (l.useEffect(() => {
        (0, p.N)();
    }, []),
    O)
        ? (0, r.jsx)(c.$jN, { className: y.spinner })
        : (0, r.jsxs)('div', {
              className: y.recentAvatarContainer,
              children: [
                  null != R &&
                      !O &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: R
                      }),
                  (0, r.jsxs)('div', {
                      className: i()(y.recentAvatarSlots, { [y.withPremiumUpsell]: !t }),
                      children: [
                          F > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': x.NW.string(x.t.lsU63N),
                                  className: y.recentAvatarList,
                                  children: _.map((e, n) =>
                                      (0, r.jsx)(
                                          'li',
                                          {
                                              children: (0, r.jsx)(v, {
                                                  avatar: e,
                                                  orderNumber: n + 1,
                                                  allowDelete: t,
                                                  onSelectRecentAvatar: D,
                                                  onDeleteRecentAvatar: t ? k : void 0
                                              })
                                          },
                                          e.id
                                      )
                                  )
                              }),
                          L > 0 &&
                              (0, r.jsxs)('div', {
                                  className: y.emptyAvatarSlots,
                                  children: [(0, r.jsx)(c.nn4, { children: x.NW.format(x.t['8W2HOz'], { numberOfEmptyAvatarSlots: L }) }), [...Array(L)].map((e, t) => (0, r.jsx)(m.Z, { className: y.avatarPlaceholder }, t))]
                              }),
                          !t && (0, r.jsx)(N, { numberOfLockedAvatarSlots: E })
                      ]
                  })
              ]
          });
}
function A(e) {
    let { className: t, onComplete: n } = e,
        l = (0, f._)(),
        { recentAvatarsLimit: a } = (0, d.pC)(l);
    return (0, r.jsxs)('div', {
        className: i()(y.container, t),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.vwX, {
                        className: y.recentAvatarsHeading,
                        children: x.NW.string(x.t.Bnq9zM)
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [x.NW.format(x.t['+CyJu7'], { recentAvatarsLimit: a }), ' ', !l && x.NW.format(x.t.Xs2Otb, { onClick: O })]
                    })
                ]
            }),
            (0, r.jsx)(C, {
                hasIncreasedRecentAvatarsLimit: l,
                onComplete: n
            })
        ]
    });
}
