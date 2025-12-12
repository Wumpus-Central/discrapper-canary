n.d(t, { Z: () => E }), n(953529), n(388685);
var r = n(54381),
    a = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    u = n(594174),
    d = n(643879),
    f = n(225516),
    p = n(598989),
    g = n(898331),
    m = n(841183),
    h = n(981631),
    b = n(486324),
    A = n(485696),
    y = n(388032),
    j = n(494044);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: l, onDeleteRecentAvatar: i, avatarButtonRef: s } = e,
        { id: u, storageHash: d, description: f = y.intl.string(y.t.lqaIxI) } = t,
        { avatarSrc: p, eventHandlers: g } = (0, m.Z)({
            avatarId: u,
            storageHash: d,
        }),
        { onMouseEnter: h, onMouseLeave: b } = g,
        A = a.useRef(null),
        C = null != f ? f : d.substring(0, 6).toUpperCase(),
        v = y.intl.formatToPlainString(y.t.tmJ75y, {
            orderNumber: n + 1,
            description: C,
        }),
        x = y.intl.formatToPlainString(y.t.pBzwhc, {
            orderNumber: n + 1,
            description: C,
        });
    return (0, r.jsxs)("div", {
        className: j.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(c.P3F, {
                onClick: () => l(t),
                onMouseEnter: h,
                onMouseLeave: b,
                className: j.recentAvatarButton,
                "aria-label": v,
                innerRef: s,
                children: (0, r.jsx)("img", {
                    src: p,
                    alt: f,
                    className: j.recentAvatar,
                }),
            }),
            (0, r.jsx)(o.u, {
                text: y.intl.string(y.t.N86XcP),
                anchorRef: A,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, r.jsx)(c.tEY, {
                    children: (0, r.jsx)("button", {
                        type: "button",
                        ref: A,
                        "aria-label": x,
                        onClick: (e) => i(e, n, u, d, x),
                        className: j.deleteButton,
                        children: (0, r.jsx)(c.XHJ, {
                            size: "xs",
                            color: "currentColor",
                            className: j.deleteIcon,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function x(e) {
    let { avatars: t, onComplete: l, setFetchError: o, className: p } = e,
        m = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        x = a.useRef([]),
        E = a.useRef(null),
        O = a.useRef(t.length),
        S = a.useRef(null),
        [N, T] = a.useState(!1),
        [w, R] = a.useState(!1),
        P = t.length,
        _ = Math.max(A.iZ - P, 0),
        F = (0, c.vRw)(),
        Z = a.useCallback(
            async (e) => {
                if (null == m || N) return;
                T(!0), o(null);
                let { id: t, storageHash: a, description: i } = e,
                    s = (0, d.fD)({
                        userId: m.id,
                        avatarId: t,
                        storageHash: a,
                        size: h.dGM,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(s),
                        o = await t.blob(),
                        { filename: u, type: f } = (0, d.mh)(a, i);
                    (0, c.ZDy)(
                        async () => {
                            let { default: t } = await Promise.all([n.e("59732"), n.e("2624")]).then(n.bind(n, 712451));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    C(
                                        {
                                            imageUri: s,
                                            file: new File([o], u, { type: f }),
                                            originalAsset: e,
                                            onCrop: l,
                                            uploadType: b.pC.AVATAR,
                                            showUpsellHeader: !0,
                                        },
                                        n,
                                    ),
                                );
                        },
                        { contextKey: F },
                    );
                } catch (e) {
                    o(y.intl.string(y.t.fZRH9P));
                } finally {
                    T(!1);
                }
            },
            [F, N, l, o, m],
        ),
        I = a.useCallback(
            (e, a, l, i, s) => {
                let o = a + 1 < t.length ? a + 1 : a - 1;
                (S.current = o >= 0 ? x.current[o] : E.current),
                    e.shiftKey
                        ? (0, f.B)(l)
                        : (R(!0),
                          (0, c.ZDy)(async () => {
                              let { default: e } = await n.e("70871").then(n.bind(n, 225525));
                              return (t) => {
                                  var { onClose: n } = t,
                                      a = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              a = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      r,
                                                      a = {},
                                                      l = Object.keys(e);
                                                  for (r = 0; r < l.length; r++)
                                                      (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                                  return a;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < l.length; r++)
                                                  (n = l[r]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (a[n] = e[n]);
                                          }
                                          return a;
                                      })(t, ["onClose"]);
                                  return (0, r.jsx)(
                                      e,
                                      C(
                                          {
                                              avatarId: l,
                                              storageHash: i,
                                              avatarDescription: s,
                                              onConfirmDelete: () => (0, f.B)(l),
                                              onClose: async () => {
                                                  await n(),
                                                      requestAnimationFrame(() => {
                                                          R(!1);
                                                      });
                                              },
                                          },
                                          a,
                                      ),
                                  );
                              };
                          }));
            },
            [t],
        );
    return (
        a.useEffect(() => {
            w ||
                (t.length < O.current &&
                    null != S.current &&
                    requestAnimationFrame(() => {
                        var e;
                        null == (e = S.current) || e.focus();
                    }),
                (O.current = t.length));
        }, [t.length, w]),
        (0, r.jsx)("div", {
            className: i()(j.recentAvatarContainer, p),
            children: (0, r.jsxs)("div", {
                className: j.recentAvatarSlots,
                children: [
                    P > 0 &&
                        (0, r.jsx)("ul", {
                            "aria-label": y.intl.string(y.t.lsU63N),
                            className: j.recentAvatarList,
                            children: t.map((e, t) =>
                                (0, r.jsx)(
                                    "li",
                                    {
                                        children: (0, r.jsx)(v, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: Z,
                                            onDeleteRecentAvatar: I,
                                            avatarButtonRef: (e) => {
                                                x.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    _ > 0 &&
                        (0, r.jsxs)("div", {
                            className: j.emptyAvatarSlots,
                            tabIndex: -1,
                            ref: E,
                            children: [
                                (0, r.jsxs)(c.nn4, {
                                    children: [
                                        0 === P &&
                                            (0, r.jsxs)(r.Fragment, {
                                                children: [y.intl.string(y.t.x0DsRS), " "],
                                            }),
                                        y.intl.format(y.t["8W2HO3"], { numberOfEmptyAvatarSlots: _ }),
                                    ],
                                }),
                                [...Array(_)].map((e, t) => (0, r.jsx)(g.Z, { className: j.avatarPlaceholder }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function E(e) {
    let { className: t, onComplete: n } = e,
        { avatars: l, loading: s, error: o } = (0, p.S)(),
        [u, d] = a.useState(null),
        g = null != u ? u : null == o ? void 0 : o.message;
    return (
        a.useEffect(() => {
            (0, f.N)();
        }, []),
        (0, r.jsx)("div", {
            className: i()(j.container, t),
            children: (0, r.jsx)(c.gNt, {
                label: y.intl.string(y.t.Bnq9zK),
                description: y.intl.format(y.t["+CyJu3"], { recentAvatarsLimit: A.iZ }),
                errorMessage: g,
                children: s
                    ? (0, r.jsx)(c.$jN, { className: j.spinner })
                    : (0, r.jsx)(x, {
                          avatars: l,
                          onComplete: n,
                          setFetchError: d,
                          className: null != g ? j.hasError : void 0,
                      }),
            }),
        })
    );
}
