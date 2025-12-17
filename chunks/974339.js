n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    l = n(473749),
    o = n(120356),
    i = n.n(o),
    s = n(91192),
    a = n(755721),
    c = n(481060),
    u = n(385499),
    d = n(313201),
    m = n(565138),
    x = n(605436),
    h = n(537383),
    b = n(71080),
    w = n(388032),
    f = n(431232);
function g(e) {
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
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function j(e) {
    var t = (function (e, t) {
        if ("object" !== p(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
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
    let { roles: t = T, members: n = T, users: r = T, guilds: o = T } = e;
    return l.useMemo(() => [t.length, n.length, r.length, o.length], [t.length, n.length, r.length, o.length]);
}
let C = (e) => {
    let { title: t } = e;
    return (0, r.jsx)(
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
    var t, n;
    let { id: o, sectionIndex: u, rowIndex: d, rows: m, children: h, showCheckbox: w, showRowLabel: y } = e,
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
        ((t = g({}, j)),
        (n = n =
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
                        ? (0, r.jsx)(a.$q, {
                              className: f.checkbox,
                              displayOnly: !0,
                              size: 18,
                              value: L,
                              type: a.M0.INVERTED,
                              disabled: I,
                              children: (0, r.jsx)("div", {
                                  className: f.rowBody,
                                  children: h,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: f.rowBody,
                              children: h,
                          }),
                    y
                        ? (0, r.jsx)(c.Text, {
                              color: "text-muted",
                              variant: "text-xs/normal",
                              children: x.zB(C.rowType),
                          })
                        : null,
                ],
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
let L = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: l } = O(),
            o = l[t];
        return null == o
            ? null
            : (0, r.jsxs)(P, {
                  id: "roles-row-".concat(t),
                  sectionIndex: b.m$.ROLES,
                  rowIndex: t,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(f.rowHeight, f.alignCenter),
                          children: (0, r.jsx)(c.lZ8, {
                              size: "custom",
                              color: o.colorString,
                              height: 20,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: f.rowLabel,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: o.rowType === b.aC.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: o.name,
                              }),
                              o.disabled && null != n
                                  ? (0, r.jsx)(c.Text, {
                                        color: "text-default",
                                        variant: "text-xs/normal",
                                        children: n,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    I = (e) => {
        let { index: t } = e,
            { members: n } = O(),
            l = n[t];
        return null == l
            ? null
            : (0, r.jsxs)(P, {
                  id: "members-row-".concat(t),
                  sectionIndex: b.m$.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(c.qEK, {
                          src: l.avatarURL,
                          size: c.EFr.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, r.jsx)(c.Text, {
                          className: f.rowLabel,
                          variant: "text-sm/normal",
                          children: l.name,
                      }),
                      null != l.nickname
                          ? (0, r.jsx)(c.Text, {
                                color: "text-muted",
                                className: f.rowLabelSubText,
                                variant: "text-sm/normal",
                                "aria-hidden": !0,
                                children: l.username,
                            })
                          : null,
                      l.bot && (0, r.jsx)(u.Z, { verified: l.verifiedBot }),
                  ],
              });
    },
    M = (e) => {
        let { index: t, disabledText: n } = e,
            { users: l } = O(),
            o = l[t];
        return null == o
            ? null
            : (0, r.jsxs)(P, {
                  id: "users-row-".concat(t),
                  sectionIndex: b.m$.USERS,
                  rowIndex: t,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(c.qEK, {
                          src: o.avatarURL,
                          size: c.EFr.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, r.jsxs)("div", {
                          className: f.rowLabel,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: o.name,
                              }),
                              o.disabled && null != n
                                  ? (0, r.jsx)(c.Text, {
                                        color: "text-default",
                                        variant: "text-xs/normal",
                                        children: n,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    $ = (e) => {
        let { index: t } = e,
            { guilds: n } = O(),
            l = n[t];
        return null == l
            ? null
            : (0, r.jsxs)(P, {
                  id: "guilds-row-".concat(t),
                  sectionIndex: b.m$.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(m.Z, {
                          guild: l.guild,
                          active: !0,
                          size: m.Z.Sizes.SMALLER,
                      }),
                      (0, r.jsx)("div", {
                          className: f.rowLabel,
                          children: (0, r.jsx)(c.Text, {
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
                    listRef: n,
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
                let n = E(e);
                a((t) => {
                    if (n in t) {
                        let { [n]: e } = t;
                        return y(t, [n].map(j));
                    }
                    {
                        let r = x(e);
                        if (null != r) {
                            let l = g({}, t);
                            return (
                                (l[n] = {
                                    display: r,
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
            return (0, r.jsx)(R.Provider, {
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
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (
                            (p((n) =>
                                n.section === e && n.row === t
                                    ? n
                                    : {
                                          section: null != e ? e : 0,
                                          row: null != t ? t : -1,
                                      },
                            ),
                            r)
                        ) {
                            var l;
                            null == n ||
                                null == (l = n.current) ||
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
                        let n = [];
                        switch (e) {
                            case b.m$.ROLES:
                                n = c;
                                break;
                            case b.m$.MEMBERS:
                                n = u;
                                break;
                            case b.m$.USERS:
                                n = d;
                                break;
                            case b.m$.GUILDS:
                                n = m;
                        }
                        let r = n[t];
                        null != r && r.rowType !== b.aC.EMPTY_STATE && S(r);
                    },
                    onRemovePendingAddition: function (e) {
                        a((t) => {
                            let { [e]: n } = t;
                            return y(t, [e].map(j));
                        });
                    },
                },
                children: t,
            });
        },
        SearchBox: (e) => {
            let { placeholderText: t, focusSearchAfterReady: n, isReady: o } = e,
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
                    users: g,
                    guilds: y,
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
                    users: g,
                    guilds: y,
                });
            return (0, r.jsx)(h.Z, {
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
                focusAfterReady: n,
                isReady: o,
                "aria-labelledby": S,
                "aria-controls": v,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case b.m$.ROLES:
                    return (0, r.jsx)(C, { title: w.intl.string(w.t["LPJmL/"]) });
                case b.m$.MEMBERS:
                    return (0, r.jsx)(C, { title: w.intl.string(w.t["9Oq93m"]) });
                case b.m$.USERS:
                    return (0, r.jsx)(C, { title: w.intl.string(w.t.nqDUBX) });
                case b.m$.GUILDS:
                    return (0, r.jsx)(C, { title: w.intl.string(w.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case b.m$.ROLES:
                    return (0, r.jsx)(L, { index: n });
                case b.m$.MEMBERS:
                    return (0, r.jsx)(I, { index: n });
                case b.m$.USERS:
                    return (0, r.jsx)(M, { index: n });
                case b.m$.GUILDS:
                    return (0, r.jsx)($, { index: n });
            }
            return null;
        },
        useSections: k,
    };
