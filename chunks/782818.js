n.d(t, { Z: () => E }), n(953529), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    i = n.n(a),
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
    j = n(485696),
    y = n(388032),
    A = n(916340);
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
    let { avatar: t, index: n, onSelectRecentAvatar: l, onDeleteRecentAvatar: a, avatarButtonRef: i } = e,
        { id: s, storageHash: u, description: d = y.intl.string(y.t.lqaIxI) } = t,
        { avatarSrc: f, eventHandlers: p } = (0, m.Z)({
            avatarId: s,
            storageHash: u,
        }),
        { onMouseEnter: g, onMouseLeave: h } = p,
        b = null != d ? d : u.substring(0, 6).toUpperCase(),
        j = y.intl.formatToPlainString(y.t.tmJ75y, {
            orderNumber: n + 1,
            description: b,
        }),
        x = y.intl.formatToPlainString(y.t.pBzwhc, {
            orderNumber: n + 1,
            description: b,
        });
    return (0, r.jsxs)("div", {
        className: A.recentAvatarButtonContainer,
        children: [
            (0, r.jsx)(c.P3F, {
                onClick: () => l(t),
                onMouseEnter: g,
                onMouseLeave: h,
                className: A.recentAvatarButton,
                "aria-label": j,
                innerRef: i,
                children: (0, r.jsx)("img", {
                    src: f,
                    alt: d,
                    className: A.recentAvatar,
                }),
            }),
            (0, r.jsx)(o.u, {
                text: y.intl.string(y.t.N86XcP),
                children: (0, r.jsx)(c.P3F, {
                    "aria-label": x,
                    onClick: (e) => a(e, n, s, u, x),
                    className: A.deleteButton,
                    children: (0, r.jsx)(c.XHJ, {
                        size: "xs",
                        color: "currentColor",
                        className: A.deleteIcon,
                    }),
                }),
            }),
        ],
    });
}
function v(e) {
    let { onComplete: t } = e,
        a = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
        { avatars: i, loading: o, error: m } = (0, p.S)(),
        v = l.useRef([]),
        E = l.useRef(null),
        O = l.useRef(i.length),
        N = l.useRef(null),
        [S, T] = l.useState(!1),
        [w, P] = l.useState(!1),
        [R, F] = l.useState(null),
        _ = null != R ? R : null == m ? void 0 : m.message,
        Z = i.length,
        I = Math.max(j.iZ - Z, 0),
        k = (0, c.vRw)(),
        D = l.useCallback(
            async (e) => {
                if (null == a || S) return;
                T(!0), F(null);
                let { id: l, storageHash: i, description: s } = e,
                    o = (0, d.fD)({
                        userId: a.id,
                        avatarId: l,
                        storageHash: i,
                        size: h.dGM,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let l = await fetch(o),
                        a = await l.blob(),
                        { filename: u, type: f } = (0, d.mh)(i, s);
                    (0, c.ZDy)(
                        async () => {
                            let { default: l } = await Promise.all([n.e("59732"), n.e("11866")]).then(
                                n.bind(n, 712451),
                            );
                            return (n) =>
                                (0, r.jsx)(
                                    l,
                                    x(
                                        {
                                            imageUri: o,
                                            file: new File([a], u, { type: f }),
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
                    F(y.intl.string(y.t.fZRH9P));
                } finally {
                    T(!1);
                }
            },
            [k, S, t, a],
        ),
        M = l.useCallback(
            (e, t, l, a, s) => {
                let o = t + 1 < i.length ? t + 1 : t - 1;
                (N.current = o >= 0 ? v.current[o] : E.current),
                    e.shiftKey
                        ? (0, f.B)(l)
                        : (P(!0),
                          (0, c.ZDy)(async () => {
                              let { default: e } = await n.e("70871").then(n.bind(n, 225525));
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
                                                  for (r = 0; r < a.length; r++)
                                                      (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                  return l;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < a.length; r++)
                                                  (n = a[r]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (l[n] = e[n]);
                                          }
                                          return l;
                                      })(t, ["onClose"]);
                                  return (0, r.jsx)(
                                      e,
                                      x(
                                          {
                                              avatarId: l,
                                              storageHash: a,
                                              avatarDescription: s,
                                              onConfirmDelete: () => (0, f.B)(l),
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
    return (l.useEffect(() => {
        (0, f.N)();
    }, []),
    l.useEffect(() => {
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
        ? (0, r.jsx)(c.$jN, { className: A.spinner })
        : (0, r.jsxs)("div", {
              className: A.recentAvatarContainer,
              children: [
                  null != _ &&
                      !o &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          color: "text-danger",
                          children: _,
                      }),
                  (0, r.jsxs)("div", {
                      className: A.recentAvatarSlots,
                      children: [
                          Z > 0 &&
                              (0, r.jsx)("ul", {
                                  "aria-label": y.intl.string(y.t.lsU63N),
                                  className: A.recentAvatarList,
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
                                  className: A.emptyAvatarSlots,
                                  tabIndex: -1,
                                  ref: E,
                                  children: [
                                      (0, r.jsxs)(c.nn4, {
                                          children: [
                                              0 === Z &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [y.intl.string(y.t.x0DsRS), " "],
                                                  }),
                                              y.intl.format(y.t["8W2HO3"], { numberOfEmptyAvatarSlots: I }),
                                          ],
                                      }),
                                      [...Array(I)].map((e, t) =>
                                          (0, r.jsx)(g.Z, { className: A.avatarPlaceholder }, t),
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
        className: i()(A.container, t),
        children: (0, r.jsx)(c.gNt, {
            label: y.intl.string(y.t.Bnq9zK),
            description: y.intl.format(y.t["+CyJu3"], { recentAvatarsLimit: j.iZ }),
            children: (0, r.jsx)(v, { onComplete: n }),
        }),
    });
}
