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
    j = n(388032),
    y = n(916340);
function x(e) {
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
function C(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: a, onDeleteRecentAvatar: l, avatarButtonRef: i } = e,
        { id: s, storageHash: u, description: d = j.intl.string(j.t.lqaIxI) } = t,
        { avatarSrc: f, eventHandlers: p } = (0, m.Z)({
            avatarId: s,
            storageHash: u,
        }),
        { onMouseEnter: g, onMouseLeave: h } = p,
        b = null != d ? d : u.substring(0, 6).toUpperCase(),
        A = j.intl.formatToPlainString(j.t.tmJ75y, {
            orderNumber: n + 1,
            description: b,
        }),
        x = j.intl.formatToPlainString(j.t.pBzwhc, {
            orderNumber: n + 1,
            description: b,
        });
    return (0, r.jsxs)("div", {
        className: y.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(c.P3F, {
                onClick: () => a(t),
                onMouseEnter: g,
                onMouseLeave: h,
                className: y.recentAvatarButton,
                "aria-label": A,
                innerRef: i,
                children: (0, r.jsx)("img", {
                    src: f,
                    alt: d,
                    className: y.recentAvatar,
                }),
            }),
            (0, r.jsx)(o.u, {
                text: j.intl.string(j.t.N86XcP),
                children: (0, r.jsx)(c.P3F, {
                    "aria-label": x,
                    onClick: (e) => l(e, n, s, u, x),
                    className: y.deleteButton,
                    children: (0, r.jsx)(c.XHJ, {
                        size: "xs",
                        color: "currentColor",
                        className: y.deleteIcon,
                    }),
                }),
            }),
        ],
    });
}
function v(e) {
    let { onComplete: t } = e,
        l = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: i, loading: o, error: m } = (0, p.S)(),
        v = a.useRef([]),
        E = a.useRef(null),
        O = a.useRef(i.length),
        N = a.useRef(null),
        [S, T] = a.useState(!1),
        [w, P] = a.useState(!1),
        [R, F] = a.useState(null),
        _ = null != R ? R : null == m ? void 0 : m.message,
        Z = i.length,
        I = Math.max(A.iZ - Z, 0),
        k = (0, c.vRw)(),
        D = a.useCallback(
            async (e) => {
                if (null == l || S) return;
                T(!0), F(null);
                let { id: a, storageHash: i, description: s } = e,
                    o = (0, d.fD)({
                        userId: l.id,
                        avatarId: a,
                        storageHash: i,
                        size: h.dGM,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let a = await fetch(o),
                        l = await a.blob(),
                        { filename: u, type: f } = (0, d.mh)(i, s);
                    (0, c.ZDy)(
                        async () => {
                            let { default: a } = await Promise.all([n.e("59732"), n.e("11866")]).then(
                                n.bind(n, 712451),
                            );
                            return (n) =>
                                (0, r.jsx)(
                                    a,
                                    x(
                                        {
                                            imageUri: o,
                                            file: new File([l], u, { type: f }),
                                            originalAsset: e,
                                            onCrop: t,
                                            uploadType: b.pC.AVATAR,
                                            showUpsellHeader: !0,
                                        },
                                        n,
                                    ),
                                );
                        },
                        { contextKey: k },
                    );
                } catch (e) {
                    F(j.intl.string(j.t.fZRH9P));
                } finally {
                    T(!1);
                }
            },
            [k, S, t, l],
        ),
        M = a.useCallback(
            (e, t, a, l, s) => {
                let o = t + 1 < i.length ? t + 1 : t - 1;
                (N.current = o >= 0 ? v.current[o] : E.current),
                    e.shiftKey
                        ? (0, f.B)(a)
                        : (P(!0),
                          (0, c.ZDy)(async () => {
                              let { default: e } = await n.e("70871").then(n.bind(n, 225525));
                              return (t) => {
                                  var { onClose: n } = t,
                                      i = (function (e, t) {
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
                                      x(
                                          {
                                              avatarId: a,
                                              storageHash: l,
                                              avatarDescription: s,
                                              onConfirmDelete: () => (0, f.B)(a),
                                              onClose: async () => {
                                                  await n(),
                                                      requestAnimationFrame(() => {
                                                          P(!1);
                                                      });
                                              },
                                          },
                                          i,
                                      ),
                                  );
                              };
                          }));
            },
            [i],
        );
    return (a.useEffect(() => {
        (0, f.N)();
    }, []),
    a.useEffect(() => {
        w ||
            (i.length < O.current &&
                null != N.current &&
                requestAnimationFrame(() => {
                    var e;
                    null == (e = N.current) || e.focus();
                }),
            (O.current = i.length));
    }, [i.length, w]),
    o)
        ? (0, r.jsx)(c.$jN, { className: y.spinner })
        : (0, r.jsxs)("div", {
              className: y.recentAvatarContainer,
              children: [
                  null != _ &&
                      !o &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          children: _,
                      }),
                  (0, r.jsxs)("div", {
                      className: y.recentAvatarSlots,
                      children: [
                          Z > 0 &&
                              (0, r.jsx)("ul", {
                                  "aria-label": j.intl.string(j.t.lsU63N),
                                  className: y.recentAvatarList,
                                  children: i.map((e, t) =>
                                      (0, r.jsx)(
                                          "li",
                                          {
                                              children: (0, r.jsx)(C, {
                                                  avatar: e,
                                                  index: t,
                                                  onSelectRecentAvatar: D,
                                                  onDeleteRecentAvatar: M,
                                                  avatarButtonRef: (e) => {
                                                      v.current[t] = e;
                                                  },
                                              }),
                                          },
                                          e.id,
                                      ),
                                  ),
                              }),
                          I > 0 &&
                              (0, r.jsxs)("div", {
                                  className: y.emptyAvatarSlots,
                                  tabIndex: -1,
                                  ref: E,
                                  children: [
                                      (0, r.jsxs)(c.nn4, {
                                          children: [
                                              0 === Z &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [j.intl.string(j.t.x0DsRS), " "],
                                                  }),
                                              j.intl.format(j.t["8W2HO3"], { numberOfEmptyAvatarSlots: I }),
                                          ],
                                      }),
                                      [...Array(I)].map((e, t) =>
                                          (0, r.jsx)(g.Z, { className: y.avatarPlaceholder }, t),
                                      ),
                                  ],
                              }),
                      ],
                  }),
              ],
          });
}
function E(e) {
    let { className: t, onComplete: n } = e;
    return (0, r.jsx)("div", {
        className: i()(y.container, t),
        children: (0, r.jsx)(c.gNt, {
            label: j.intl.string(j.t.Bnq9zK),
            description: j.intl.format(j.t["+CyJu3"], { recentAvatarsLimit: A.iZ }),
            children: (0, r.jsx)(v, { onComplete: n }),
        }),
    });
}
