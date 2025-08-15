n.d(t, {
    G: () => v,
    Z: () => w,
}),
    n(388685),
    n(781311);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(91192),
    o = n(481060),
    c = n(385499),
    d = n(600164),
    u = n(313201),
    m = n(565138),
    x = n(631969),
    h = n(605436),
    b = n(537383),
    y = n(71080),
    f = n(388032),
    p = n(663961);
let g = (0, u.hQ)(),
    j = (0, u.hQ)();
function v(e) {
    return "".concat(e.rowType, ":").concat(e.id);
}
function S(e) {
    return (0, r.jsx)(
        o.vwX,
        {
            tag: "h5",
            className: a()(p.sectionTitle, p.rowHeight),
            children: e,
        },
        e,
    );
}
function E(e) {
    var t, n;
    let {
            id: l,
            children: i,
            rowLabel: c,
            checked: u,
            onSelect: m,
            disabled: x,
            showCheckbox: h,
            selected: b,
            onMouseEnter: y,
            "aria-posinset": f,
            "aria-setsize": g,
        } = e,
        j = (0, s.JA)(l);
    return (0, r.jsx)(
        o.P3F,
        ((t = (function (e) {
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
        })({}, j)),
        (n = n =
            {
                id: l,
                className: a()(p.addMemberRow, { [p.selectedRow]: b }),
                onClick: (e) => {
                    x || (e.preventDefault(), m());
                },
                onMouseEnter: y,
                role: "option",
                "aria-disabled": x,
                "aria-selected": u,
                "aria-setsize": g,
                "aria-posinset": f,
                children: (0, r.jsxs)(d.Z, {
                    justify: d.Z.Justify.BETWEEN,
                    align: d.Z.Align.CENTER,
                    children: [
                        h
                            ? (0, r.jsx)(o.XZJ, {
                                  displayOnly: !0,
                                  size: 18,
                                  value: u,
                                  type: o.XZJ.Types.INVERTED,
                                  disabled: x,
                                  children: (0, r.jsx)("div", {
                                      className: p.checkboxLabel,
                                      children: i,
                                  }),
                              })
                            : i,
                        null != c
                            ? (0, r.jsx)(o.Text, {
                                  color: "text-muted",
                                  variant: "text-xs/normal",
                                  children: c,
                              })
                            : null,
                    ],
                }),
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
        t),
    );
}
function w(e) {
    let {
            listClassName: t,
            pendingAdditions: n,
            query: i,
            onQueryChange: s,
            onClickRow: d,
            onRemovePendingAddition: u,
            roles: w = [],
            members: T = [],
            users: O = [],
            guilds: R = [],
            placeholderText: C,
            disabledText: N,
            hintText: M,
            searchTitleText: k,
            renderEmptyText: L,
            focusSearchAfterReady: P,
            isReady: Z,
            maxCount: A,
            hideRowLabel: z = !1,
        } = e,
        I = l.useRef(null),
        B = l.useRef(null),
        D = [w.length, T.length, O.length, R.length],
        [$, U] = l.useState(!1),
        [_, q] = l.useState(0),
        [G, F] = l.useState(-1);
    l.useEffect(() => {
        var e;
        null == (e = I.current) || e.focus();
    }, []);
    let Q = l.useCallback(function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if ((q(e), F(t), n)) {
                var r;
                null == (r = B.current) ||
                    r.scrollToIndex({
                        section: null != e ? e : 0,
                        row: null != t ? t : 0,
                        padding: 8,
                    });
            }
        }, []),
        V = l.useCallback(
            (e, t) => {
                if (null == t) return;
                s("");
                let n = (e === y.m$.ROLES ? w : [])[t];
                n.rowType !== y.aC.EMPTY_STATE && d(n);
            },
            [w, d, s],
        ),
        X = l.useCallback(
            (e) => {
                var t;
                null != e && e.rowType !== y.aC.EMPTY_STATE && (d(e), s(""), null == (t = I.current) || t.focus());
            },
            [d, s],
        ),
        Y = l.useMemo(() => Object.keys(n), [n]),
        H =
            l.useMemo(
                () =>
                    T.some((e) => !e.disabled) ||
                    w.some((e) => !e.disabled) ||
                    O.some((e) => !e.disabled) ||
                    R.some((e) => !e.disabled),
                [T, w, O, R],
            ) || "" === i.trim();
    function J() {
        var e;
        U(!(null == (e = B.current) ? void 0 : e.isScrolledToTop()) && H);
    }
    return (
        l.useEffect(() => {
            J();
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(p.searchBox, { [p.scrollSeparator]: $ }),
                    children: [
                        null != k &&
                            (0, r.jsx)(o.vwX, {
                                tag: o.RB0.H5,
                                children: k,
                            }),
                        (0, r.jsx)(b.Z, {
                            ref: I,
                            query: i,
                            onQueryChange: s,
                            selectedSection: _,
                            selectedRow: G,
                            onSelectionChange: Q,
                            onSelect: V,
                            tags: Y.map((e) => n[e].display),
                            sections: D,
                            onRemoveTag: function (e) {
                                u(Y[e]);
                            },
                            placeholder: C,
                            focusAfterReady: P,
                            isReady: Z,
                            "aria-labelledby": g,
                            "aria-controls": j,
                        }),
                        null != M
                            ? (0, r.jsx)(o.Text, {
                                  className: p.hintText,
                                  variant: "text-xs/normal",
                                  children: M,
                              })
                            : null,
                    ],
                }),
                H
                    ? (0, r.jsx)(o.aVo, {
                          ref: B,
                          className: a()(p.roleMemberList, t),
                          sections: D,
                          renderRow: (e) => {
                              let t,
                                  l,
                                  { section: i, row: s } = e,
                                  d = null,
                                  u = !1,
                                  x = !1,
                                  b = !1,
                                  f = null != A && Object.keys(n).length >= A;
                              switch (i) {
                                  case y.m$.ROLES:
                                      (u = (l = v((d = w[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.ROLES && G === s),
                                          (t = (0, r.jsxs)("div", {
                                              className: p.rowBody,
                                              children: [
                                                  (0, r.jsx)("div", {
                                                      className: a()(p.rowHeight, p.alignCenter),
                                                      children: (0, r.jsx)(o.lZ8, {
                                                          size: "custom",
                                                          color: d.colorString,
                                                          height: 20,
                                                      }),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: p.rowLabel,
                                                      children: [
                                                          (0, r.jsx)(o.Text, {
                                                              variant: "text-sm/medium",
                                                              className: p.__invalid_rowTitle,
                                                              color:
                                                                  d.rowType === y.aC.EMPTY_STATE
                                                                      ? "text-muted"
                                                                      : "text-default",
                                                              children: d.name,
                                                          }),
                                                          d.disabled && null != N
                                                              ? (0, r.jsx)(o.Text, {
                                                                    color: "header-secondary",
                                                                    variant: "text-xs/normal",
                                                                    children: N,
                                                                })
                                                              : null,
                                                      ],
                                                  }),
                                              ],
                                          }));
                                      break;
                                  case y.m$.MEMBERS:
                                      (u = (l = v((d = T[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.MEMBERS && G === s),
                                          (t = (0, r.jsxs)("div", {
                                              className: p.rowBody,
                                              children: [
                                                  (0, r.jsx)(o.qEK, {
                                                      src: d.avatarURL,
                                                      size: o.EFr.SIZE_24,
                                                      "aria-label": "",
                                                  }),
                                                  (0, r.jsx)(o.Text, {
                                                      className: p.rowLabel,
                                                      variant: "text-sm/normal",
                                                      children: d.name,
                                                  }),
                                                  null != d.nickname
                                                      ? (0, r.jsx)(o.Text, {
                                                            color: "text-muted",
                                                            className: p.rowLabelSubText,
                                                            variant: "text-sm/normal",
                                                            "aria-hidden": !0,
                                                            children: d.username,
                                                        })
                                                      : null,
                                                  d.bot && (0, r.jsx)(c.Z, { verified: d.verifiedBot }),
                                              ],
                                          }));
                                      break;
                                  case y.m$.USERS:
                                      (u = (l = v((d = O[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.USERS && G === s),
                                          (t = (0, r.jsxs)("div", {
                                              className: p.rowBody,
                                              children: [
                                                  (0, r.jsx)(o.qEK, {
                                                      src: d.avatarURL,
                                                      size: o.EFr.SIZE_24,
                                                      "aria-label": "",
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: p.rowLabel,
                                                      children: [
                                                          (0, r.jsx)(o.Text, {
                                                              variant: "text-sm/normal",
                                                              children: d.name,
                                                          }),
                                                          d.disabled && null != N
                                                              ? (0, r.jsx)(o.Text, {
                                                                    color: "header-secondary",
                                                                    variant: "text-xs/normal",
                                                                    children: N,
                                                                })
                                                              : null,
                                                      ],
                                                  }),
                                              ],
                                          }));
                                      break;
                                  case y.m$.GUILDS:
                                      (u = (l = v((d = R[s]))) in n || d.disabled),
                                          (x = d.disabled || (!u && f)),
                                          (b = _ === y.m$.GUILDS && G === s),
                                          (t = (0, r.jsxs)("div", {
                                              className: p.rowBody,
                                              children: [
                                                  (0, r.jsx)(m.Z, {
                                                      guild: d.guild,
                                                      active: !0,
                                                      size: m.Z.Sizes.SMALLER,
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: p.rowLabel,
                                                      children: (0, r.jsx)(o.Text, {
                                                          variant: "text-sm/medium",
                                                          color: "text-default",
                                                          children: d.name,
                                                      }),
                                                  }),
                                              ],
                                          }));
                              }
                              return null == d
                                  ? null
                                  : (0, r.jsx)(
                                        E,
                                        {
                                            id: "user-row-".concat(s),
                                            rowLabel: z ? null : h.zB(d.rowType),
                                            checked: u,
                                            disabled: x,
                                            onSelect: () => X(d),
                                            showCheckbox: d.rowType !== y.aC.EMPTY_STATE,
                                            onMouseEnter: () => Q(i, s, !1),
                                            selected: b,
                                            "aria-posinset": s + 1,
                                            "aria-setsize": D.reduce((e, t) => e + t, 0),
                                            children: t,
                                        },
                                        l,
                                    );
                          },
                          rowHeight: 40,
                          renderSection: (e) => {
                              let { section: t } = e;
                              switch (t) {
                                  case y.m$.ROLES:
                                      return S(f.intl.string(f.t.LPJmLy));
                                  case y.m$.MEMBERS:
                                      return S(f.intl.string(f.t["9Oq93t"]));
                                  case y.m$.USERS:
                                      return S(f.intl.string(f.t.nqDUBQ));
                                  case y.m$.GUILDS:
                                      return S(f.intl.string(f.t["7hB4kp"]));
                              }
                          },
                          sectionHeight: 32,
                          onScroll: J,
                          role: void 0,
                          innerRole: "listbox",
                          innerId: j,
                          innerAriaMultiselectable: !0,
                          innerAriaOrientation: "vertical",
                      })
                    : (0, r.jsxs)("div", {
                          className: a()(p.noResults, t),
                          children: [
                              (0, r.jsx)(x.Z, { className: p.noResultIcon }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  children: L(i),
                              }),
                          ],
                      }),
            ],
        })
    );
}
