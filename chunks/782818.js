n.d(t, { Z: () => E }), n(266796), n(47120);
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
    b = n(981631),
    j = n(486324),
    x = n(388032),
    h = n(240639);
function y(e) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v() {
    (0, c.ZDy)(async () => {
        let { default: e } = await n.e('21907').then(n.bind(n, 53394));
        return (t) =>
            (0, r.jsx)(
                e,
                y(
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
    let { avatar: t, index: n, onSelectRecentAvatar: l, onDeleteRecentAvatar: a, avatarButtonRef: i } = e,
        { id: o, storageHash: s, description: u = x.NW.string(x.t.lqaIxM) } = t,
        { avatarSrc: d, eventHandlers: p } = (0, g.Z)({
            avatarId: o,
            storageHash: s
        }),
        { onMouseEnter: f, onMouseLeave: m } = p,
        b = null != u ? u : s.substring(0, 6).toUpperCase(),
        j = x.NW.formatToPlainString(x.t['tmJ75+'], {
            orderNumber: n + 1,
            description: b
        }),
        v = x.NW.formatToPlainString(x.t.pBzwhY, {
            orderNumber: n + 1,
            description: b
        }),
        N = {
            look: c.zxk.Looks.BLANK,
            size: c.zxk.Sizes.NONE,
            color: c.zxk.Colors.TRANSPARENT
        };
    return (0, r.jsxs)('div', {
        className: h.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(
                c.zxk,
                O(
                    y(
                        {
                            onClick: () => l(t),
                            onMouseEnter: f,
                            onMouseLeave: m,
                            className: h.recentAvatarButton,
                            'aria-label': j,
                            buttonRef: i
                        },
                        N
                    ),
                    {
                        children: (0, r.jsx)('img', {
                            src: d,
                            alt: u,
                            className: h.recentAvatar
                        })
                    }
                )
            ),
            (0, r.jsx)(c.ua7, {
                text: x.NW.string(x.t.N86XcH),
                delay: 340,
                children: (e) =>
                    (0, r.jsx)(
                        c.zxk,
                        O(
                            y(
                                O(y({}, e), {
                                    'aria-label': v,
                                    onClick: (e) => a(e, n, o, s, v),
                                    className: h.deleteButton,
                                    innerClassName: h.deleteButtonInner
                                }),
                                N
                            ),
                            {
                                children: (0, r.jsx)(c.XHJ, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: h.deleteIcon
                                })
                            }
                        )
                    )
            })
        ]
    });
}
function C(e) {
    let { numberOfLockedAvatarSlots: t } = e;
    return (0, r.jsxs)(c.P3F, {
        className: h.premiumUpsellButton,
        onClick: v,
        'aria-label': x.NW.formatToPlainString(x.t.D4829v, { numberOfLockedAvatarSlots: t }),
        children: [
            (0, r.jsxs)(c.Text, {
                variant: 'text-lg/normal',
                color: 'text-normal',
                'aria-hidden': !0,
                children: ['+', t]
            }),
            (0, r.jsx)(s.m, {
                className: h.premiumUpsellLockIcon,
                size: 'xxs'
            })
        ]
    });
}
function A(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: a } = e,
        s = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: g, loading: O, error: v } = (0, f.S)(),
        { recentAvatarsLimit: A, numberOfLockedAvatarSlots: E } = (0, d.pC)(t),
        P = l.useRef([]),
        S = l.useRef(null),
        w = l.useRef(g.length),
        T = l.useRef(null),
        [R, _] = l.useState(!1),
        [k, F] = l.useState(!1),
        [Z, I] = l.useState(null),
        L = null != Z ? Z : null == v ? void 0 : v.message,
        D = g.length > A ? g.slice(0, A) : g,
        W = D.length,
        M = Math.max(A - W, 0),
        U = (0, c.vRw)(),
        B = l.useCallback(
            async (e) => {
                if (null == s || R) return;
                _(!0), I(null);
                let { id: t, storageHash: l, description: i } = e,
                    o = (0, d.fD)({
                        userId: s.id,
                        avatarId: t,
                        storageHash: l,
                        size: b.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(o),
                        s = await t.blob(),
                        { filename: u, type: p } = (0, d.mh)(l, i);
                    (0, c.ZDy)(
                        async () => {
                            let { default: t } = await Promise.all([n.e('59732'), n.e('58989')]).then(n.bind(n, 712451));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    y(
                                        {
                                            imageUri: o,
                                            file: new File([s], u, { type: p }),
                                            originalAsset: e,
                                            onCrop: a,
                                            uploadType: j.pC.AVATAR,
                                            showUpsellHeader: !0
                                        },
                                        n
                                    )
                                );
                        },
                        { contextKey: U }
                    );
                } catch (e) {
                    I(x.NW.string(x.t.fZRH9P));
                } finally {
                    _(!1);
                }
            },
            [U, R, a, s]
        ),
        z = l.useCallback(
            (e, t, l, a, i) => {
                let o = t + 1 < g.length ? t + 1 : t - 1;
                (T.current = o >= 0 ? P.current[o] : S.current),
                    e.shiftKey
                        ? (0, p.B)(l)
                        : (F(!0),
                          (0, c.ZDy)(async () => {
                              let { default: e } = await n.e('70871').then(n.bind(n, 225525));
                              return (t) => {
                                  var { onClose: n } = t,
                                      o = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              l = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      r,
                                                      l = {},
                                                      a = Object.keys(e);
                                                  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                  return l;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                                          }
                                          return l;
                                      })(t, ['onClose']);
                                  return (0, r.jsx)(
                                      e,
                                      y(
                                          {
                                              avatarId: l,
                                              storageHash: a,
                                              avatarDescription: i,
                                              onConfirmDelete: () => (0, p.B)(l),
                                              onClose: async () => {
                                                  await n(),
                                                      requestAnimationFrame(() => {
                                                          F(!1);
                                                      });
                                              }
                                          },
                                          o
                                      )
                                  );
                              };
                          }));
            },
            [g]
        );
    return (l.useEffect(() => {
        (0, p.N)();
    }, []),
    l.useEffect(() => {
        k ||
            (g.length < w.current &&
                null != T.current &&
                requestAnimationFrame(() => {
                    var e;
                    null == (e = T.current) || e.focus();
                }),
            (w.current = g.length));
    }, [g.length, k]),
    O)
        ? (0, r.jsx)(c.$jN, { className: h.spinner })
        : (0, r.jsxs)('div', {
              className: h.recentAvatarContainer,
              children: [
                  null != L &&
                      !O &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: L
                      }),
                  (0, r.jsxs)('div', {
                      className: i()(h.recentAvatarSlots, { [h.withPremiumUpsell]: !t }),
                      children: [
                          W > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': x.NW.string(x.t.lsU63N),
                                  className: h.recentAvatarList,
                                  children: D.map((e, t) =>
                                      (0, r.jsx)(
                                          'li',
                                          {
                                              children: (0, r.jsx)(N, {
                                                  avatar: e,
                                                  index: t,
                                                  onSelectRecentAvatar: B,
                                                  onDeleteRecentAvatar: z,
                                                  avatarButtonRef: (e) => {
                                                      P.current[t] = e;
                                                  }
                                              })
                                          },
                                          e.id
                                      )
                                  )
                              }),
                          M > 0 &&
                              (0, r.jsxs)('div', {
                                  className: h.emptyAvatarSlots,
                                  tabIndex: -1,
                                  ref: S,
                                  children: [
                                      (0, r.jsxs)(c.nn4, {
                                          children: [
                                              0 === D.length &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [x.NW.string(x.t.x0DsRU), ' ']
                                                  }),
                                              x.NW.format(x.t['8W2HOz'], { numberOfEmptyAvatarSlots: M })
                                          ]
                                      }),
                                      [...Array(M)].map((e, t) => (0, r.jsx)(m.Z, { className: h.avatarPlaceholder }, t))
                                  ]
                              }),
                          !t && (0, r.jsx)(C, { numberOfLockedAvatarSlots: E })
                      ]
                  })
              ]
          });
}
function E(e) {
    let { className: t, onComplete: n } = e,
        l = (0, f._)(),
        { recentAvatarsLimit: a } = (0, d.pC)(l);
    return (0, r.jsxs)('div', {
        className: i()(h.container, t),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.vwX, {
                        className: h.recentAvatarsHeading,
                        children: x.NW.string(x.t.Bnq9zM)
                    }),
                    (0, r.jsxs)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: [x.NW.format(x.t['+CyJu7'], { recentAvatarsLimit: a }), ' ', !l && x.NW.format(x.t.Xs2Otb, { onClick: v })]
                    })
                ]
            }),
            (0, r.jsx)(A, {
                hasIncreasedRecentAvatarsLimit: l,
                onComplete: n
            })
        ]
    });
}
