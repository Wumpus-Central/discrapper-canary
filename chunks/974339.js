r.d(t, { Z: () => N }), r(388685);
var n = r(951288),
    l = r(647438),
    o = r(120356),
    i = r.n(o),
    s = r(91192),
    a = r(755721),
    c = r(481060),
    u = r(385499),
    d = r(313201),
    m = r(565138),
    x = r(605436),
    h = r(537383),
    b = r(71080),
    w = r(388032),
    f = r(50783);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
            (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
function j(e) {
    var t = (function (e, t) {
        if ("object" !== p(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== p(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === p(t) ? t : String(t);
}
function p(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let S = (0, d.hQ)(),
    v = (0, d.hQ)();
function E(e) {
    return "".concat(e.rowType, ":").concat(e.id);
}
let R = l.createContext({
        searchRef: { current: null },
        selectedSection: 0,
        selectedRow: -1,
        roles: [],
        members: [],
        users: [],
        guilds: [],
        pendingAdditions: {},
        isAtMaxPendingRows: !1,
        onSelectionChange: () => {},
        onRowClick: () => {},
        query: "",
        onQueryChange: () => {},
        onQueryClick: () => {},
        onRemovePendingAddition: () => {},
    }),
    O = () => l.useContext(R),
    T = [];
function k(e) {
    let { roles: t = T, members: r = T, users: n = T, guilds: o = T } = e;
    return l.useMemo(() => [t.length, r.length, n.length, o.length], [t.length, r.length, n.length, o.length]);
}
let C = (e) => {
    let { title: t } = e;
    return (0, n.jsx)(
        c.Heading,
        {
            variant: "heading-sm/semibold",
            className: i()(f.sectionTitle, f.rowHeight),
            children: t,
        },
        t,
    );
};
function P(e) {
    var t, r;
    let { id: o, sectionIndex: u, rowIndex: d, rows: m, children: h, showCheckbox: w, showRowLabel: g } = e,
        j = (0, s.JA)(o),
        {
            selectedSection: p,
            selectedRow: S,
            onSelectionChange: v,
            pendingAdditions: R,
            onRowClick: T,
            isAtMaxPendingRows: k,
        } = O(),
        C = m[d],
        P = E(C),
        L = C.disabled || P in R,
        I = C.disabled || (!L && k);
    return (0, l.createElement)(
        c.P3F,
        ((t = y({}, j)),
        (r = r =
            {
                id: o,
                key: P,
                role: "option",
                className: i()(f.clickableRow, { [f.selectedRow]: p === u && S === d }),
                onClick: (e) => {
                    I || (e.preventDefault(), C.rowType !== b.aC.EMPTY_STATE && T(C));
                },
                onMouseEnter: () => v(u, d, !1),
                "aria-disabled": I,
                "aria-selected": L,
                "aria-setsize": m.length,
                "aria-posinset": d + 1,
                children: [
                    w
                        ? (0, n.jsx)(a.$q, {
                              className: f.checkbox,
                              displayOnly: !0,
                              size: 18,
                              value: L,
                              type: a.M0.INVERTED,
                              disabled: I,
                              children: (0, n.jsx)("div", {
                                  className: f.rowBody,
                                  children: h,
                              }),
                          })
                        : (0, n.jsx)("div", {
                              className: f.rowBody,
                              children: h,
                          }),
                    g
                        ? (0, n.jsx)(c.Text, {
                              color: "text-muted",
                              variant: "text-xs/normal",
                              children: x.zB(C.rowType),
                          })
                        : null,
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
let L = (e) => {
        let { index: t, disabledText: r } = e,
            { roles: l } = O(),
            o = l[t];
        return null == o
            ? null
            : (0, n.jsxs)(P, {
                  id: "roles-row-".concat(t),
                  sectionIndex: b.m$.ROLES,
                  rowIndex: t,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)("div", {
                          className: i()(f.rowHeight, f.alignCenter),
                          children: (0, n.jsx)(c.lZ8, {
                              size: "custom",
                              color: o.colorString,
                              height: 20,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          className: f.rowLabel,
                          children: [
                              (0, n.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: o.rowType === b.aC.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: o.name,
                              }),
                              o.disabled && null != r
                                  ? (0, n.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/normal",
                                        children: r,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    I = (e) => {
        let { index: t } = e,
            { members: r } = O(),
            l = r[t];
        return null == l
            ? null
            : (0, n.jsxs)(P, {
                  id: "members-row-".concat(t),
                  sectionIndex: b.m$.MEMBERS,
                  rowIndex: t,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)(c.qEK, {
                          src: l.avatarURL,
                          size: c.EFr.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, n.jsx)(c.Text, {
                          className: f.rowLabel,
                          variant: "text-sm/normal",
                          children: l.name,
                      }),
                      null != l.nickname
                          ? (0, n.jsx)(c.Text, {
                                color: "text-muted",
                                className: f.rowLabelSubText,
                                variant: "text-sm/normal",
                                "aria-hidden": !0,
                                children: l.username,
                            })
                          : null,
                      l.bot && (0, n.jsx)(u.Z, { verified: l.verifiedBot }),
                  ],
              });
    },
    M = (e) => {
        let { index: t, disabledText: r } = e,
            { users: l } = O(),
            o = l[t];
        return null == o
            ? null
            : (0, n.jsxs)(P, {
                  id: "users-row-".concat(t),
                  sectionIndex: b.m$.USERS,
                  rowIndex: t,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)(c.qEK, {
                          src: o.avatarURL,
                          size: c.EFr.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, n.jsxs)("div", {
                          className: f.rowLabel,
                          children: [
                              (0, n.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: o.name,
                              }),
                              o.disabled && null != r
                                  ? (0, n.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/normal",
                                        children: r,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    $ = (e) => {
        let { index: t } = e,
            { guilds: r } = O(),
            l = r[t];
        return null == l
            ? null
            : (0, n.jsxs)(P, {
                  id: "guilds-row-".concat(t),
                  sectionIndex: b.m$.GUILDS,
                  rowIndex: t,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)(m.Z, {
                          guild: l.guild,
                          active: !0,
                          size: m.Z.Sizes.SMALLER,
                      }),
                      (0, n.jsx)("div", {
                          className: f.rowLabel,
                          children: (0, n.jsx)(c.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: l.name,
                          }),
                      }),
                  ],
              });
    },
    N = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: (e) => {
            let {
                    children: t,
                    listRef: r,
                    query: o,
                    setQuery: i,
                    pendingAdditions: s,
                    setPendingAdditions: a,
                    roles: c = T,
                    members: u = T,
                    users: d = T,
                    guilds: m = T,
                    getRichTag: x,
                    maxPendingRows: h,
                } = e,
                w = l.useRef(null),
                [f, p] = l.useState({
                    section: 0,
                    row: -1,
                });
            function S(e) {
                var t;
                let r = E(e);
                a((t) => {
                    if (r in t) {
                        let { [r]: e } = t;
                        return g(t, [r].map(j));
                    }
                    {
                        let n = x(e);
                        if (null != n) {
                            let l = y({}, t);
                            return (
                                (l[r] = {
                                    display: n,
                                    row: e,
                                }),
                                l
                            );
                        }
                    }
                    return t;
                }),
                    i(""),
                    null == (t = w.current) || t.focus();
            }
            l.useEffect(() => {
                var e;
                null == (e = w.current) || e.focus();
            }, []);
            let v = null != h && Object.keys(s).length >= h;
            return (0, n.jsx)(R.Provider, {
                value: {
                    searchRef: w,
                    selectedSection: f.section,
                    selectedRow: f.row,
                    roles: c,
                    members: u,
                    users: d,
                    guilds: m,
                    pendingAdditions: s,
                    isAtMaxPendingRows: v,
                    onSelectionChange: function (e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (
                            (p((r) =>
                                r.section === e && r.row === t
                                    ? r
                                    : {
                                          section: null != e ? e : 0,
                                          row: null != t ? t : -1,
                                      },
                            ),
                            n)
                        ) {
                            var l;
                            null == r ||
                                null == (l = r.current) ||
                                l.scrollToIndex({
                                    section: null != e ? e : 0,
                                    row: null != t ? t : 0,
                                    padding: 8,
                                });
                        }
                    },
                    onRowClick: S,
                    query: o,
                    onQueryChange: i,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        i("");
                        let r = [];
                        switch (e) {
                            case b.m$.ROLES:
                                r = c;
                                break;
                            case b.m$.MEMBERS:
                                r = u;
                                break;
                            case b.m$.USERS:
                                r = d;
                                break;
                            case b.m$.GUILDS:
                                r = m;
                        }
                        let n = r[t];
                        null != n && n.rowType !== b.aC.EMPTY_STATE && S(n);
                    },
                    onRemovePendingAddition: function (e) {
                        a((t) => {
                            let { [e]: r } = t;
                            return g(t, [e].map(j));
                        });
                    },
                },
                children: t,
            });
        },
        SearchBox: (e) => {
            let { placeholderText: t, focusSearchAfterReady: r, isReady: o } = e,
                {
                    searchRef: i,
                    selectedSection: s,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: u,
                    onSelectionChange: d,
                    onQueryChange: m,
                    onQueryClick: x,
                    onRemovePendingAddition: b,
                    roles: w,
                    members: f,
                    users: y,
                    guilds: g,
                } = O(),
                { keys: j, tags: p } = l.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return {
                        keys: e,
                        tags: t,
                    };
                }, [c]),
                E = k({
                    roles: w,
                    members: f,
                    users: y,
                    guilds: g,
                });
            return (0, n.jsx)(h.Z, {
                ref: i,
                query: u,
                onQueryChange: m,
                selectedSection: s,
                selectedRow: a,
                onSelectionChange: d,
                onSelect: x,
                tags: p,
                sections: E,
                onRemoveTag: (e) => b(j[e]),
                placeholder: t,
                focusAfterReady: r,
                isReady: o,
                "aria-labelledby": S,
                "aria-controls": v,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case b.m$.ROLES:
                    return (0, n.jsx)(C, { title: w.intl.string(w.t["LPJmL/"]) });
                case b.m$.MEMBERS:
                    return (0, n.jsx)(C, { title: w.intl.string(w.t["9Oq93m"]) });
                case b.m$.USERS:
                    return (0, n.jsx)(C, { title: w.intl.string(w.t.nqDUBX) });
                case b.m$.GUILDS:
                    return (0, n.jsx)(C, { title: w.intl.string(w.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: r } = e;
            switch (t) {
                case b.m$.ROLES:
                    return (0, n.jsx)(L, { index: r });
                case b.m$.MEMBERS:
                    return (0, n.jsx)(I, { index: r });
                case b.m$.USERS:
                    return (0, n.jsx)(M, { index: r });
                case b.m$.GUILDS:
                    return (0, n.jsx)($, { index: r });
            }
            return null;
        },
        useSections: k,
    };
