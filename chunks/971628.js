n.d(t, {
    G: () => N,
    Z: () => P,
}),
    n(388685),
    n(781311);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(481060),
    c = n(385499),
    u = n(600164),
    d = n(313201),
    f = n(565138),
    _ = n(631969),
    p = n(605436),
    h = n(537383),
    m = n(71080),
    g = n(388032),
    E = n(569842);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 40,
    T = 32,
    S = (0, d.hQ)(),
    A = (0, d.hQ)();
function N(e) {
    return "".concat(e.rowType, ":").concat(e.id);
}
function C(e) {
    return (0, r.jsx)(
        l.vwX,
        {
            tag: "h5",
            className: a()(E.sectionTitle, E.rowHeight),
            children: e,
        },
        e,
    );
}
function R(e) {
    let {
            id: t,
            children: n,
            rowLabel: i,
            checked: o,
            onSelect: c,
            disabled: d,
            showCheckbox: f,
            selected: _,
            onMouseEnter: p,
            "aria-posinset": h,
            "aria-setsize": m,
        } = e,
        g = (0, s.JA)(t);
    return (0, r.jsx)(
        l.P3F,
        v(y({}, g), {
            id: t,
            className: a()(E.addMemberRow, { [E.selectedRow]: _ }),
            onClick: (e) => {
                d || (e.preventDefault(), c());
            },
            onMouseEnter: p,
            role: "option",
            "aria-disabled": d,
            "aria-selected": o,
            "aria-setsize": m,
            "aria-posinset": h,
            children: (0, r.jsxs)(u.Z, {
                justify: u.Z.Justify.BETWEEN,
                align: u.Z.Align.CENTER,
                children: [
                    f
                        ? (0, r.jsx)(l.XZJ, {
                              displayOnly: !0,
                              size: 18,
                              value: o,
                              type: l.XZJ.Types.INVERTED,
                              disabled: d,
                              children: (0, r.jsx)("div", {
                                  className: E.checkboxLabel,
                                  children: n,
                              }),
                          })
                        : n,
                    null != i
                        ? (0, r.jsx)(l.Text, {
                              color: "text-muted",
                              variant: "text-xs/normal",
                              children: i,
                          })
                        : null,
                ],
            }),
        }),
    );
}
function P(e) {
    let {
            listClassName: t,
            pendingAdditions: n,
            query: o,
            onQueryChange: s,
            onClickRow: d,
            onRemovePendingAddition: b,
            roles: y = [],
            members: O = [],
            users: v = [],
            guilds: P = [],
            placeholderText: w,
            disabledText: D,
            hintText: L,
            searchTitleText: x,
            renderEmptyText: M,
            focusSearchAfterReady: j,
            isReady: k,
            maxCount: U,
            hideRowLabel: G = !1,
        } = e,
        B = i.useRef(null),
        Z = i.useRef(null),
        F = [y.length, O.length, v.length, P.length],
        [V, H] = i.useState(!1),
        [Y, W] = i.useState(0),
        [K, z] = i.useState(-1);
    i.useEffect(() => {
        var e;
        null == (e = B.current) || e.focus();
    }, []);
    let q = i.useCallback(function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if ((W(e), z(t), n)) {
                var r;
                null == (r = Z.current) ||
                    r.scrollToIndex({
                        section: null != e ? e : 0,
                        row: null != t ? t : 0,
                        padding: 8,
                    });
            }
        }, []),
        X = i.useCallback(
            (e, t) => {
                if (null == t) return;
                s("");
                let n = (e === m.m$.ROLES ? y : [])[t];
                n.rowType !== m.aC.EMPTY_STATE && d(n);
            },
            [y, d, s],
        ),
        Q = i.useCallback(
            (e) => {
                var t;
                null != e && e.rowType !== m.aC.EMPTY_STATE && (d(e), s(""), null == (t = B.current) || t.focus());
            },
            [d, s],
        ),
        J = i.useMemo(() => Object.keys(n), [n]);
    function $(e) {
        b(J[e]);
    }
    let ee =
        i.useMemo(
            () =>
                O.some((e) => !e.disabled) ||
                y.some((e) => !e.disabled) ||
                v.some((e) => !e.disabled) ||
                P.some((e) => !e.disabled),
            [O, y, v, P],
        ) || "" === o.trim();
    function et() {
        var e;
        H(!(null == (e = Z.current) ? void 0 : e.isScrolledToTop()) && ee);
    }
    i.useEffect(() => {
        et();
    });
    let en = (e) => {
            let t,
                i,
                { section: o, row: s } = e,
                u = null,
                d = !1,
                _ = !1,
                h = !1,
                g = null != U && Object.keys(n).length >= U;
            switch (o) {
                case m.m$.ROLES:
                    (d = (i = N((u = y[s]))) in n || u.disabled),
                        (_ = u.disabled || (!d && g)),
                        (h = Y === m.m$.ROLES && K === s),
                        (t = (0, r.jsxs)("div", {
                            className: E.rowBody,
                            children: [
                                (0, r.jsx)("div", {
                                    className: a()(E.rowHeight, E.alignCenter),
                                    children: (0, r.jsx)(l.lZ8, {
                                        size: "custom",
                                        color: u.colorString,
                                        height: 20,
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: E.rowLabel,
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/medium",
                                            className: E.__invalid_rowTitle,
                                            color: u.rowType === m.aC.EMPTY_STATE ? "text-muted" : "text-default",
                                            children: u.name,
                                        }),
                                        u.disabled && null != D
                                            ? (0, r.jsx)(l.Text, {
                                                  color: "header-secondary",
                                                  variant: "text-xs/normal",
                                                  children: D,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }));
                    break;
                case m.m$.MEMBERS:
                    (d = (i = N((u = O[s]))) in n || u.disabled),
                        (_ = u.disabled || (!d && g)),
                        (h = Y === m.m$.MEMBERS && K === s),
                        (t = (0, r.jsxs)("div", {
                            className: E.rowBody,
                            children: [
                                (0, r.jsx)(l.qEK, {
                                    src: u.avatarURL,
                                    size: l.EFr.SIZE_24,
                                    "aria-label": "",
                                }),
                                (0, r.jsx)(l.Text, {
                                    className: E.rowLabel,
                                    variant: "text-sm/normal",
                                    children: u.name,
                                }),
                                null != u.nickname
                                    ? (0, r.jsx)(l.Text, {
                                          color: "text-muted",
                                          className: E.rowLabelSubText,
                                          variant: "text-sm/normal",
                                          "aria-hidden": !0,
                                          children: u.username,
                                      })
                                    : null,
                                u.bot && (0, r.jsx)(c.Z, { verified: u.verifiedBot }),
                            ],
                        }));
                    break;
                case m.m$.USERS:
                    (d = (i = N((u = v[s]))) in n || u.disabled),
                        (_ = u.disabled || (!d && g)),
                        (h = Y === m.m$.USERS && K === s),
                        (t = (0, r.jsxs)("div", {
                            className: E.rowBody,
                            children: [
                                (0, r.jsx)(l.qEK, {
                                    src: u.avatarURL,
                                    size: l.EFr.SIZE_24,
                                    "aria-label": "",
                                }),
                                (0, r.jsxs)("div", {
                                    className: E.rowLabel,
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: u.name,
                                        }),
                                        u.disabled && null != D
                                            ? (0, r.jsx)(l.Text, {
                                                  color: "header-secondary",
                                                  variant: "text-xs/normal",
                                                  children: D,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }));
                    break;
                case m.m$.GUILDS:
                    (d = (i = N((u = P[s]))) in n || u.disabled),
                        (_ = u.disabled || (!d && g)),
                        (h = Y === m.m$.GUILDS && K === s),
                        (t = (0, r.jsxs)("div", {
                            className: E.rowBody,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    guild: u.guild,
                                    active: !0,
                                    size: f.Z.Sizes.SMALLER,
                                }),
                                (0, r.jsx)("div", {
                                    className: E.rowLabel,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: u.name,
                                    }),
                                }),
                            ],
                        }));
            }
            return null == u
                ? null
                : (0, r.jsx)(
                      R,
                      {
                          id: "user-row-".concat(s),
                          rowLabel: G ? null : p.zB(u.rowType),
                          checked: d,
                          disabled: _,
                          onSelect: () => Q(u),
                          showCheckbox: u.rowType !== m.aC.EMPTY_STATE,
                          onMouseEnter: () => q(o, s, !1),
                          selected: h,
                          "aria-posinset": s + 1,
                          "aria-setsize": F.reduce((e, t) => e + t, 0),
                          children: t,
                      },
                      i,
                  );
        },
        er = (e) => {
            let { section: t } = e;
            switch (t) {
                case m.m$.ROLES:
                    return C(g.intl.string(g.t.LPJmLy));
                case m.m$.MEMBERS:
                    return C(g.intl.string(g.t["9Oq93t"]));
                case m.m$.USERS:
                    return C(g.intl.string(g.t.nqDUBQ));
                case m.m$.GUILDS:
                    return C(g.intl.string(g.t["7hB4kp"]));
            }
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(E.searchBox, { [E.scrollSeparator]: V }),
                children: [
                    null != x &&
                        (0, r.jsx)(l.vwX, {
                            tag: l.RB0.H5,
                            children: x,
                        }),
                    (0, r.jsx)(h.Z, {
                        ref: B,
                        query: o,
                        onQueryChange: s,
                        selectedSection: Y,
                        selectedRow: K,
                        onSelectionChange: q,
                        onSelect: X,
                        tags: J.map((e) => n[e].display),
                        sections: F,
                        onRemoveTag: $,
                        placeholder: w,
                        focusAfterReady: j,
                        isReady: k,
                        "aria-labelledby": S,
                        "aria-controls": A,
                    }),
                    null != L
                        ? (0, r.jsx)(l.Text, {
                              variant: "text-xs/normal",
                              children: L,
                          })
                        : null,
                ],
            }),
            ee
                ? (0, r.jsx)(l.aVo, {
                      ref: Z,
                      className: a()(E.roleMemberList, t),
                      sections: F,
                      renderRow: en,
                      rowHeight: I,
                      renderSection: er,
                      sectionHeight: T,
                      onScroll: et,
                      role: void 0,
                      innerRole: "listbox",
                      innerId: A,
                      innerAriaMultiselectable: !0,
                      innerAriaOrientation: "vertical",
                  })
                : (0, r.jsxs)(u.Z, {
                      className: t,
                      align: u.Z.Align.CENTER,
                      justify: u.Z.Justify.CENTER,
                      direction: u.Z.Direction.VERTICAL,
                      children: [
                          (0, r.jsx)(_.Z, { className: E.noResultIcon }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              children: M(o),
                          }),
                      ],
                  }),
        ],
    });
}
