n.d(t, { Z: () => v }), n(953529), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(594174),
    u = n(643879),
    d = n(225516),
    f = n(598989),
    p = n(898331),
    g = n(841183),
    m = n(981631),
    h = n(486324),
    b = n(485696),
    j = n(388032),
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
function A(e, t) {
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
function C(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: l, onDeleteRecentAvatar: a, avatarButtonRef: i } = e,
        { id: s, storageHash: c, description: u = j.intl.string(j.t.lqaIxM) } = t,
        { avatarSrc: d, eventHandlers: f } = (0, g.Z)({
            avatarId: s,
            storageHash: c
        }),
        { onMouseEnter: p, onMouseLeave: m } = f,
        h = null != u ? u : c.substring(0, 6).toUpperCase(),
        b = j.intl.formatToPlainString(j.t['tmJ75+'], {
            orderNumber: n + 1,
            description: h
        }),
        C = j.intl.formatToPlainString(j.t.pBzwhY, {
            orderNumber: n + 1,
            description: h
        }),
        O = {
            look: o.zxk.Looks.BLANK,
            size: o.zxk.Sizes.NONE,
            color: o.zxk.Colors.TRANSPARENT
        };
    return (0, r.jsxs)('div', {
        className: y.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(
                o.zxk,
                A(
                    x(
                        {
                            onClick: () => l(t),
                            onMouseEnter: p,
                            onMouseLeave: m,
                            className: y.recentAvatarButton,
                            'aria-label': b,
                            buttonRef: i
                        },
                        O
                    ),
                    {
                        children: (0, r.jsx)('img', {
                            src: d,
                            alt: u,
                            className: y.recentAvatar
                        })
                    }
                )
            ),
            (0, r.jsx)(o.ua7, {
                text: j.intl.string(j.t.N86XcH),
                delay: 340,
                children: (e) =>
                    (0, r.jsx)(
                        o.zxk,
                        A(
                            x(
                                A(x({}, e), {
                                    'aria-label': C,
                                    onClick: (e) => a(e, n, s, c, C),
                                    className: y.deleteButton,
                                    innerClassName: y.deleteButtonInner
                                }),
                                O
                            ),
                            {
                                children: (0, r.jsx)(o.XHJ, {
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
function O(e) {
    let { onComplete: t } = e,
        a = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        { avatars: i, loading: g, error: A } = (0, f.S)(),
        O = l.useRef([]),
        v = l.useRef(null),
        E = l.useRef(i.length),
        N = l.useRef(null),
        [S, T] = l.useState(!1),
        [w, P] = l.useState(!1),
        [R, _] = l.useState(null),
        F = null != R ? R : null == A ? void 0 : A.message,
        Z = i.length,
        k = Math.max(b.iZ - Z, 0),
        D = (0, o.vRw)(),
        I = l.useCallback(
            async (e) => {
                if (null == a || S) return;
                T(!0), _(null);
                let { id: l, storageHash: i, description: s } = e,
                    c = (0, u.fD)({
                        userId: a.id,
                        avatarId: l,
                        storageHash: i,
                        size: m.dGM,
                        canAnimate: !0,
                        allowWebp: !1
                    });
                try {
                    let l = await fetch(c),
                        a = await l.blob(),
                        { filename: d, type: f } = (0, u.mh)(i, s);
                    (0, o.ZDy)(
                        async () => {
                            let { default: l } = await Promise.all([n.e('59732'), n.e('58989')]).then(n.bind(n, 712451));
                            return (n) =>
                                (0, r.jsx)(
                                    l,
                                    x(
                                        {
                                            imageUri: c,
                                            file: new File([a], d, { type: f }),
                                            originalAsset: e,
                                            onCrop: t,
                                            uploadType: h.pC.AVATAR,
                                            showUpsellHeader: !0
                                        },
                                        n
                                    )
                                );
                        },
                        { contextKey: D }
                    );
                } catch (e) {
                    _(j.intl.string(j.t.fZRH9P));
                } finally {
                    T(!1);
                }
            },
            [D, S, t, a]
        ),
        L = l.useCallback(
            (e, t, l, a, s) => {
                let c = t + 1 < i.length ? t + 1 : t - 1;
                (N.current = c >= 0 ? O.current[c] : v.current),
                    e.shiftKey
                        ? (0, d.B)(l)
                        : (P(!0),
                          (0, o.ZDy)(async () => {
                              let { default: e } = await n.e('70871').then(n.bind(n, 225525));
                              return (t) => {
                                  var { onClose: n } = t,
                                      i = (function (e, t) {
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
                                      x(
                                          {
                                              avatarId: l,
                                              storageHash: a,
                                              avatarDescription: s,
                                              onConfirmDelete: () => (0, d.B)(l),
                                              onClose: async () => {
                                                  await n(),
                                                      requestAnimationFrame(() => {
                                                          P(!1);
                                                      });
                                              }
                                          },
                                          i
                                      )
                                  );
                              };
                          }));
            },
            [i]
        );
    return (l.useEffect(() => {
        (0, d.N)();
    }, []),
    l.useEffect(() => {
        w ||
            (i.length < E.current &&
                null != N.current &&
                requestAnimationFrame(() => {
                    var e;
                    null == (e = N.current) || e.focus();
                }),
            (E.current = i.length));
    }, [i.length, w]),
    g)
        ? (0, r.jsx)(o.$jN, { className: y.spinner })
        : (0, r.jsxs)('div', {
              className: y.recentAvatarContainer,
              children: [
                  null != F &&
                      !g &&
                      (0, r.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: F
                      }),
                  (0, r.jsxs)('div', {
                      className: y.recentAvatarSlots,
                      children: [
                          Z > 0 &&
                              (0, r.jsx)('ul', {
                                  'aria-label': j.intl.string(j.t.lsU63N),
                                  className: y.recentAvatarList,
                                  children: i.map((e, t) =>
                                      (0, r.jsx)(
                                          'li',
                                          {
                                              children: (0, r.jsx)(C, {
                                                  avatar: e,
                                                  index: t,
                                                  onSelectRecentAvatar: I,
                                                  onDeleteRecentAvatar: L,
                                                  avatarButtonRef: (e) => {
                                                      O.current[t] = e;
                                                  }
                                              })
                                          },
                                          e.id
                                      )
                                  )
                              }),
                          k > 0 &&
                              (0, r.jsxs)('div', {
                                  className: y.emptyAvatarSlots,
                                  tabIndex: -1,
                                  ref: v,
                                  children: [
                                      (0, r.jsxs)(o.nn4, {
                                          children: [
                                              0 === Z &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [j.intl.string(j.t.x0DsRU), ' ']
                                                  }),
                                              j.intl.format(j.t['8W2HOz'], { numberOfEmptyAvatarSlots: k })
                                          ]
                                      }),
                                      [...Array(k)].map((e, t) => (0, r.jsx)(p.Z, { className: y.avatarPlaceholder }, t))
                                  ]
                              })
                      ]
                  })
              ]
          });
}
function v(e) {
    let { className: t, onComplete: n } = e;
    return (0, r.jsxs)('div', {
        className: i()(y.container, t),
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(o.vwX, {
                        className: y.recentAvatarsHeading,
                        children: j.intl.string(j.t.Bnq9zM)
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: j.intl.format(j.t['+CyJu7'], { recentAvatarsLimit: b.iZ })
                    })
                ]
            }),
            (0, r.jsx)(O, { onComplete: n })
        ]
    });
}
