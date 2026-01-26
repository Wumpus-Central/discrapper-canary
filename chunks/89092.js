n.d(t, {
    A: () => N,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(33851),
    s = n.n(a),
    c = n(417597),
    u = n(990078),
    d = n(397927),
    C = n(71393),
    m = n(576705),
    p = n(70738),
    f = n(134413),
    b = n(266047),
    j = n(225671),
    g = n(100172),
    h = n(401695),
    x = n(925282),
    y = n(441358),
    O = n(386404),
    v = n(652215),
    _ = n(985018),
    H = n(236671),
    w = n(918372);

function A(e) {
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

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
let D = l.forwardRef(function (e, t) {
    var n, l;
    let [i, ...a] = [e, t],
        { label: s, onFilter: c, isFiltered: u, isSorted: C, className: m } = i,
        p = S(i, ["label", "onFilter", "isFiltered", "isSorted", "className"]),
        [f] = a,
        b = u ? "text-strong" : "text-default";
    return (
        C && (b = "text-brand"),
        (0, r.jsx)("th", {
            className: o()(H.P1, m),
            children: (0, r.jsxs)(
                d.DUT,
                ((n = A({}, p)),
                (l = l =
                    {
                        innerRef: f,
                        onClick: c,
                        className: o()(H.WV, {
                            [H.o1]: null != c,
                        }),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: b,
                                children: s,
                            }),
                            null != c &&
                                (0, r.jsx)("div", {
                                    className: H.IO,
                                    children: (0, r.jsx)(d.RgP, {
                                        size: "custom",
                                        className: H.Sj,
                                        color: u
                                            ? d.LU0.colors.CONTROL_BRAND_FOREGROUND.css
                                            : d.LU0.colors.TEXT_MUTED.css,
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n),
            ),
        })
    );
});

function N(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        i = l.useRef(null),
        a = l.useRef(null),
        N = l.useRef(null),
        L = l.useRef(null),
        P = l.useRef(null),
        R = (0, c.bG)([b.A], () => b.A.getSearchStateByGuildId(t), [t], s()),
        V = (0, c.bG)([m.A, C.A], () => m.A.can(v.xBc.MANAGE_GUILD, C.A.getGuild(t)), [t]),
        { selectedUserIds: E, addUsers: M, clearSelection: I } = (0, j.A)(t),
        T =
            R.requireUnusualDmActivity ||
            R.requireCommunicationDisabled ||
            R.requireUnusualAccountActivity ||
            R.requireUsernameQuarantined,
        Z = R.selectedRoleIds.size > 0,
        k = null != R.selectedJoinDateOption.afterDate,
        U = R.selectedSort === p.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
        F = null != R.selectedAccountAgeOption.afterDate,
        B = R.selectedSort === p.mF.ORDER_BY_USER_ID_ASC || R.selectedSort === p.mF.ORDER_BY_USER_ID_DESC,
        G = null != R.selectedSourceInviteCode && "" !== R.selectedSourceInviteCode,
        q = null != R.selectedJoinSourceType,
        z = G || q,
        Y = (0, f.vA)(t),
        K = l.useMemo(() => n.filter((e) => (0, f.Ph)(t, Y, e)), [Y, n, t]),
        Q = K.length > 0,
        X = 0 === K.filter((e) => !E.has(e)).length,
        W = l.useCallback(() => {
            Q && (X ? I() : M(K));
        }, [Q, X, I, M, K]);
    return (0, r.jsx)("thead", {
        children: (0, r.jsxs)("tr", {
            className: H.Yk,
            children: [
                Y &&
                    (0, r.jsx)("th", {
                        className: o()(H.P1, w.y2),
                        children: (0, r.jsx)(u.m, {
                            shouldShow: !Q,
                            text: _.intl.string(_.t.tJEY0G),
                            children: (0, r.jsx)(d.DUT, {
                                onClick: W,
                                className: H.WV,
                                children: (0, r.jsx)(d.P7L, {
                                    checked: X,
                                    disabled: !Q,
                                }),
                            }),
                        }),
                    }),
                (0, r.jsx)(D, {
                    label: _.intl.string(_.t.Es7n9c),
                }),
                V
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.YNO, {
                                  targetElementRef: i,
                                  animation: d.YNO.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(x.A, {
                                          guildId: t,
                                          onClose: v.tEg,
                                      }),
                                  children: (e) => {
                                      let { onClick: t } = e,
                                          n = S(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          D,
                                          A(
                                              {
                                                  ref: i,
                                                  label: _.intl.string(_.t.xcKP1P),
                                                  onFilter: t,
                                                  isFiltered: k,
                                                  isSorted: U,
                                                  className: w.qp,
                                              },
                                              n,
                                          ),
                                      );
                                  },
                              }),
                              (0, r.jsx)(d.YNO, {
                                  targetElementRef: a,
                                  animation: d.YNO.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(g.A, {
                                          guildId: t,
                                          onClose: v.tEg,
                                      }),
                                  children: (e) => {
                                      let { onClick: t } = e,
                                          n = S(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          D,
                                          A(
                                              {
                                                  ref: a,
                                                  label: _.intl.string(_.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: F,
                                                  isSorted: B,
                                                  className: w.qp,
                                              },
                                              n,
                                          ),
                                      );
                                  },
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(D, {
                                  label: _.intl.string(_.t.xcKP1P),
                                  className: w.qp,
                              }),
                              (0, r.jsx)(D, {
                                  label: _.intl.string(_.t.sPph4O),
                                  className: w.qp,
                              }),
                          ],
                      }),
                V
                    ? (0, r.jsx)(d.YNO, {
                          targetElementRef: N,
                          animation: d.YNO.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () =>
                              (0, r.jsx)(y.default, {
                                  guildId: t,
                                  onClose: v.tEg,
                              }),
                          children: (e) => {
                              let { onClick: t } = e,
                                  n = S(e, ["onClick"]);
                              return (0, r.jsx)(
                                  D,
                                  A(
                                      {
                                          ref: N,
                                          label: _.intl.string(_.t["yn0w1+"]),
                                          onFilter: t,
                                          isFiltered: z,
                                          className: w.qp,
                                      },
                                      n,
                                  ),
                              );
                          },
                      })
                    : V &&
                      (0, r.jsx)(D, {
                          label: _.intl.string(_.t["yn0w1+"]),
                          className: w.qp,
                      }),
                (0, r.jsx)(d.YNO, {
                    targetElementRef: L,
                    animation: d.YNO.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: () =>
                        (0, r.jsx)(O.A, {
                            guildId: t,
                        }),
                    children: (e) => {
                        let { onClick: t } = e,
                            n = S(e, ["onClick"]);
                        return (0, r.jsx)(
                            D,
                            A(
                                {
                                    ref: L,
                                    label: _.intl.string(_.t["2SZsWX"]),
                                    onFilter: t,
                                    isFiltered: Z,
                                    className: w.QB,
                                },
                                n,
                            ),
                        );
                    },
                }),
                (0, r.jsx)(u.m, {
                    text: _.intl.string(_.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: P,
                        animation: d.YNO.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, r.jsx)(h.A, {
                                guildId: t,
                                onClose: n,
                            });
                        },
                        children: (e) =>
                            (0, r.jsx)(D, {
                                ref: P,
                                label: _.intl.string(_.t["7V3759"]),
                                "aria-label": _.intl.string(_.t["2cRO3R"]),
                                onFilter: (t) => {
                                    var n;
                                    null == (n = e.onClick) || n.call(e, t);
                                },
                                isFiltered: T,
                                className: w.qp,
                                onMouseEnter: () => {
                                    var t;
                                    null == (t = e.onMouseEnter) || t.call(e);
                                },
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown,
                                "aria-controls": e["aria-controls"],
                                "aria-expanded": e["aria-expanded"],
                            }),
                    }),
                }),
                (0, r.jsx)(D, {
                    label: _.intl.string(_.t["5Q9xGr"]),
                    className: w.qp,
                }),
            ],
        }),
    });
}
