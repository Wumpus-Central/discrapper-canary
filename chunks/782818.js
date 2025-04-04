n.d(t, { Z: () => E }), n(266796), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(824385),
    c = n(481060),
    u = n(594174),
    f = n(643879),
    d = n(225516),
    p = n(598989),
    m = n(898331),
    b = n(841183),
    g = n(981631),
    j = n(486324),
    h = n(388032),
    y = n(240639);
function x(e) {
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
function N() {
    (0, c.ZDy)(async () => {
        let { default: e } = await n.e('21907').then(n.bind(n, 53394));
        return (t) =>
            (0, r.jsx)(
                e,
                x(
                    {
                        analyticsSource: g.Sbl.PROFILE_PANEL,
                        analyticsLocation: {
                            section: g.jXE.USER_PROFILE,
                            object: g.qAy.RECENT_AVATARS_UPSELL
                        },
                        onSecondaryClick: c.pTH
                    },
                    t
                )
            );
    });
}
function v(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: a, onDeleteRecentAvatar: l, avatarButtonRef: i } = e,
        { id: s, storageHash: o, description: u = h.NW.string(h.t.lqaIxM) } = t,
        { avatarSrc: f, eventHandlers: d } = (0, b.Z)({
            avatarId: s,
            storageHash: o
        }),
        { onMouseEnter: p, onMouseLeave: m } = d,
        g = null != u ? u : o.substring(0, 6).toUpperCase(),
        j = h.NW.formatToPlainString(h.t['tmJ75+'], {
            orderNumber: n + 1,
            description: g
        }),
        N = h.NW.formatToPlainString(h.t.pBzwhY, {
            orderNumber: n + 1,
            description: g
        }),
        v = {
            look: c.zxk.Looks.BLANK,
            size: c.zxk.Sizes.NONE,
            color: c.zxk.Colors.TRANSPARENT
        };
    return (0, r.jsxs)('div', {
        className: y.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(
                c.zxk,
                O(
                    x(
                        {
                            onClick: () => a(t),
                            onMouseEnter: p,
                            onMouseLeave: m,
                            className: y.recentAvatarButton,
                            'aria-label': j,
                            buttonRef: i
                        },
                        v
                    ),
                    {
                        children: (0, r.jsx)('img', {
                            src: f,
                            alt: u,
                            className: y.recentAvatar
                        })
                    }
                )
            ),
            (0, r.jsx)(c.ua7, {
                text: h.NW.string(h.t.N86XcH),
                delay: 340,
                children: (e) =>
                    (0, r.jsx)(
                        c.zxk,
                        O(
                            x(
                                O(x({}, e), {
                                    'aria-label': N,
                                    onClick: (e) => l(e, n, s, o, N),
                                    className: y.deleteButton,
                                    innerClassName: y.deleteButtonInner
                                }),
                                v
                            ),
                            {
                                children: (0, r.jsx)(c.XHJ, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: y.deleteIcon
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
        className: y.premiumUpsellButton,
        onClick: N,
        'aria-label': h.NW.formatToPlainString(h.t.D4829v, { numberOfLockedAvatarSlots: t }),
        children: [
            (0, r.jsxs)(c.Text, {
                variant: 'text-lg/normal',
                color: 'text-normal',
                'aria-hidden': !0,
                children: ['+', t]
            }),
            (0, r.jsx)(o.m, {
                className: y.premiumUpsellLockIcon,
                size: 'xxs'
            })
        ]
    });
}
function A(e) {
    let { hasIncreasedRecentAvatarsLimit: t, onComplete: l } = e,
        o = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: b, loading: O, error: N } = (0, p.S)(),
        { recentAvatarsLimit: A, numberOfLockedAvatarSlots: E } = (0, f.pC)(t),
        P = a.useRef([]),
        S = a.useRef(null),
        w = a.useRef(b.length),
        R = a.useRef(null),
        [T, k] = a.useState(!1),
        [_, I] = a.useState(!1),
        [L, F] = a.useState(null),
        Z = null != L ? L : null == N ? void 0 : N.message,
        D = b.length > A ? b.slice(0, A) : b,
        W = D.length,
        U = Math.max(A - W, 0),
        M = (0, c.vRw)(),
        B = a.useCallback(
            async (e) => {
                if (null == o || T) return;
                k(!0), F(null);
                let { id: t, storageHash: a, description: i } = e,
                    s = (0, f.fD)({
                        userId: o.id,
                        avatarId: t,
                        storageHash: a,
                        size: g.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let t = await fetch(s),
                        o = await t.blob(),
                        { filename: u, type: d } = (0, f.mh)(a, i);
                    (0, c.ZDy)(
                        async () => {
                            let { default: t } = await Promise.all([n.e('59732'), n.e('58989')]).then(n.bind(n, 712451));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    x(
                                        {
                                            imageUri: s,
                                            file: new File([o], u, { type: d }),
                                            originalAsset: e,
                                            onCrop: l,
                                            uploadType: j.pC.AVATAR,
                                            showUpsellHeader: !0
                                        },
                                        n
                                    )
                                );
                        },
                        { contextKey: M }
                    );
                } catch (e) {
                    F(h.NW.string(h.t.fZRH9P));
                } finally {
                    k(!1);
                }
            },
            [M, T, l, o]
        ),
        z = a.useCallback(
            (e, t, a, l, i) => {
                let s = t + 1 < b.length ? t + 1 : t - 1;
                (R.current = s >= 0 ? P.current[s] : S.current),
                    e.shiftKey
                        ? (0, d.B)(a)
                        : (I(!0),
                          (0, c.ZDy)(async () => {
                              let { default: e } = await n.e('70871').then(n.bind(n, 225525));
                              return (t) => {
                                  var { onClose: n } = t,
                                      s = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              a = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      r,
                                                      a = {},
                                                      l = Object.keys(e);
                                                  for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                                  return a;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                                          }
                                          return a;
                                      })(t, ['onClose']);
                                  return (0, r.jsx)(
                                      e,
                                      x(
                                          {
                                              avatarId: a,
                                              storageHash: l,
                                              avatarDescription: i,
                                              onConfirmDelete: () => (0, d.B)(a),
                                              onClose: async () => {
                                                  await n(),
                                                      requestAnimationFrame(() => {
                                                          I(!1);
                                                      });
                                              }
                                          },
                                          s
                                      )
                                  );
                              };
                          }));
            },
            [b]
        );
    return (a.useEffect(() => {
        (0, d.N)();
    }, []),
    a.useEffect(() => {
        _ ||
            (b.length < w.current &&
                null != R.current &&
                requestAnimationFrame(() => {
                    var e;
                    null == (e = R.current) || e.focus();
                }),
            (w.current = b.length));
    }, [b.length, _]),
    O)
        ? (0, r.jsx)(c.$jN, { className: y.spinner })
        : (0, r.jsxs)('div', {
              className: y.recentAvatarContainer,
              children: [
                  null != Z &&
                      !O &&
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: Z
                      }),
                  (0, r.jsxs)('div', {
                      className: i()(y.recentAvatarSlots, { [y.withPremiumUpsell]: !t }),
                      children: [
                          W > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': h.NW.string(h.t.lsU63N),
                                  className: y.recentAvatarList,
                                  children: D.map((e, t) =>
                                      (0, r.jsx)(
                                          'li',
                                          {
                                              children: (0, r.jsx)(v, {
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
                          U > 0 &&
                              (0, r.jsxs)('div', {
                                  className: y.emptyAvatarSlots,
                                  tabIndex: -1,
                                  ref: S,
                                  children: [
                                      (0, r.jsxs)(c.nn4, {
                                          children: [
                                              0 === D.length &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [h.NW.string(h.t.x0DsRU), ' ']
                                                  }),
                                              h.NW.format(h.t['8W2HOz'], { numberOfEmptyAvatarSlots: U })
                                          ]
                                      }),
                                      [...Array(U)].map((e, t) => (0, r.jsx)(m.Z, { className: y.avatarPlaceholder }, t))
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
        a = (0, p._)(),
        { recentAvatarsLimit: l } = (0, f.pC)(a);
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
                        children: [h.NW.format(h.t['+CyJu7'], { recentAvatarsLimit: l }), ' ', !a && h.NW.format(h.t.Xs2Otb, { onClick: N })]
                    })
                ]
            }),
            (0, r.jsx)(A, {
                hasIncreasedRecentAvatarsLimit: a,
                onComplete: n
            })
        ]
    });
}
