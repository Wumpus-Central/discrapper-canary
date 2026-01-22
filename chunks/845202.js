n.d(t, { A: () => M }), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    s = n.n(o),
    i = n(837381),
    a = n(421380),
    c = n(397927),
    u = n(709066),
    d = n(915089),
    x = n(263063),
    h = n(495273),
    f = n(63543),
    m = n(737045),
    b = n(985018),
    w = n(181988);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o;
    }
    if (
        ((o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                o = Object.getOwnPropertyNames(e);
            for (r = 0; r < o.length; r++)
                (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o;
}
function g(e) {
    var t = (function (e, t) {
        if ("object" !== j(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== j(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === j(t) ? t : String(t);
}
function j(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let O = (0, d.Ld)(),
    v = (0, d.Ld)();
function S(e) {
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
    E = [];
function T(e) {
    let { roles: t = E, members: n = E, users: r = E, guilds: o = E } = e;
    return l.useMemo(() => [t.length, n.length, r.length, o.length], [t.length, n.length, r.length, o.length]);
}
let C = (e) => {
    let { title: t } = e;
    return (0, r.jsx)(
        c.Heading,
        {
            variant: "heading-sm/semibold",
            className: s()(w.Gf, w.iw),
            children: t,
        },
        t,
    );
};
function P(e) {
    var t, n;
    let { id: o, sectionIndex: u, rowIndex: d, rows: x, children: f, showCheckbox: b, showRowLabel: p } = e,
        g = (0, i.rm)(o),
        {
            selectedSection: j,
            selectedRow: O,
            onSelectionChange: v,
            pendingAdditions: E,
            onRowClick: T,
            isAtMaxPendingRows: C,
        } = l.useContext(R),
        P = x[d],
        k = S(P),
        I = P.disabled || k in E,
        L = P.disabled || (!I && C);
    return (0, l.createElement)(
        c.DUT,
        ((t = y({}, g)),
        (n = n =
            {
                id: o,
                key: k,
                role: "option",
                className: s()(w.d, { [w.A5]: j === u && O === d }),
                onClick: (e) => {
                    L || (e.preventDefault(), P.rowType !== m.T6.EMPTY_STATE && T(P));
                },
                onMouseEnter: () => v(u, d, !1),
                "aria-disabled": L,
                "aria-selected": I,
                "aria-setsize": x.length,
                "aria-posinset": d + 1,
                children: [
                    b
                        ? (0, r.jsx)(a.Kj, {
                              className: w.kv,
                              displayOnly: !0,
                              size: 18,
                              value: I,
                              type: a.Xo.INVERTED,
                              disabled: L,
                              children: (0, r.jsx)("div", {
                                  className: w.fw,
                                  children: f,
                              }),
                          })
                        : (0, r.jsx)("div", {
                              className: w.fw,
                              children: f,
                          }),
                    p
                        ? (0, r.jsx)(c.Text, {
                              color: "text-muted",
                              variant: "text-xs/normal",
                              children: h.vV(P.rowType),
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
let k = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: o } = l.useContext(R),
            i = o[t];
        return null == i
            ? null
            : (0, r.jsxs)(P, {
                  id: "roles-row-".concat(t),
                  sectionIndex: m.oO.ROLES,
                  rowIndex: t,
                  rows: o,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: s()(w.iw, w.Hu),
                          children: (0, r.jsx)(c.iTF, {
                              size: "custom",
                              color: i.colorString,
                              height: 20,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: w.xZ,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: i.rowType === m.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: i.name,
                              }),
                              i.disabled && null != n
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
            { members: n } = l.useContext(R),
            o = n[t];
        return null == o
            ? null
            : (0, r.jsxs)(P, {
                  id: "members-row-".concat(t),
                  sectionIndex: m.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(c.euF, {
                          src: o.avatarURL,
                          size: c._3J.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, r.jsx)(c.Text, {
                          className: w.xZ,
                          variant: "text-sm/normal",
                          children: o.name,
                      }),
                      null != o.nickname
                          ? (0, r.jsx)(c.Text, {
                                color: "text-muted",
                                className: w.Gq,
                                variant: "text-sm/normal",
                                "aria-hidden": !0,
                                children: o.username,
                            })
                          : null,
                      o.bot && (0, r.jsx)(u.A, { verified: o.verifiedBot }),
                  ],
              });
    },
    L = (e) => {
        let { index: t, disabledText: n } = e,
            { users: o } = l.useContext(R),
            s = o[t];
        return null == s
            ? null
            : (0, r.jsxs)(P, {
                  id: "users-row-".concat(t),
                  sectionIndex: m.oO.USERS,
                  rowIndex: t,
                  rows: o,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(c.euF, {
                          src: s.avatarURL,
                          size: c._3J.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, r.jsxs)("div", {
                          className: w.xZ,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: s.name,
                              }),
                              s.disabled && null != n
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
    A = (e) => {
        let { index: t } = e,
            { guilds: n } = l.useContext(R),
            o = n[t];
        return null == o
            ? null
            : (0, r.jsxs)(P, {
                  id: "guilds-row-".concat(t),
                  sectionIndex: m.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(x.A, {
                          guild: o.guild,
                          active: !0,
                          size: x.A.Sizes.SMALLER,
                      }),
                      (0, r.jsx)("div", {
                          className: w.xZ,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: o.name,
                          }),
                      }),
                  ],
              });
    },
    M = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: (e) => {
            let {
                    children: t,
                    listRef: n,
                    query: o,
                    setQuery: s,
                    pendingAdditions: i,
                    setPendingAdditions: a,
                    roles: c = E,
                    members: u = E,
                    users: d = E,
                    guilds: x = E,
                    getRichTag: h,
                    maxPendingRows: f,
                } = e,
                b = l.useRef(null),
                [w, j] = l.useState({
                    section: 0,
                    row: -1,
                });
            function O(e) {
                var t;
                let n = S(e);
                a((t) => {
                    if (n in t) {
                        let { [n]: e } = t;
                        return p(t, [g(n)]);
                    }
                    {
                        let r = h(e);
                        if (null != r) {
                            let l = y({}, t);
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
                    s(""),
                    null == (t = b.current) || t.focus();
            }
            l.useEffect(() => {
                var e;
                null == (e = b.current) || e.focus();
            }, []);
            let v = null != f && Object.keys(i).length >= f;
            return (0, r.jsx)(R.Provider, {
                value: {
                    searchRef: b,
                    selectedSection: w.section,
                    selectedRow: w.row,
                    roles: c,
                    members: u,
                    users: d,
                    guilds: x,
                    pendingAdditions: i,
                    isAtMaxPendingRows: v,
                    onSelectionChange: function (e, t) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (
                            (j((n) =>
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
                    onRowClick: O,
                    query: o,
                    onQueryChange: s,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        s("");
                        let n = [];
                        switch (e) {
                            case m.oO.ROLES:
                                n = c;
                                break;
                            case m.oO.MEMBERS:
                                n = u;
                                break;
                            case m.oO.USERS:
                                n = d;
                                break;
                            case m.oO.GUILDS:
                                n = x;
                        }
                        let r = n[t];
                        null != r && r.rowType !== m.T6.EMPTY_STATE && O(r);
                    },
                    onRemovePendingAddition: function (e) {
                        a((t) => {
                            let { [e]: n } = t;
                            return p(t, [g(e)]);
                        });
                    },
                },
                children: t,
            });
        },
        SearchBox: (e) => {
            let { placeholderText: t, focusSearchAfterReady: n, isReady: o } = e,
                {
                    searchRef: s,
                    selectedSection: i,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: u,
                    onSelectionChange: d,
                    onQueryChange: x,
                    onQueryClick: h,
                    onRemovePendingAddition: m,
                    roles: b,
                    members: w,
                    users: y,
                    guilds: p,
                } = l.useContext(R),
                { keys: g, tags: j } = l.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return {
                        keys: e,
                        tags: t,
                    };
                }, [c]),
                S = T({
                    roles: b,
                    members: w,
                    users: y,
                    guilds: p,
                });
            return (0, r.jsx)(f.A, {
                ref: s,
                query: u,
                onQueryChange: x,
                selectedSection: i,
                selectedRow: a,
                onSelectionChange: d,
                onSelect: h,
                tags: j,
                sections: S,
                onRemoveTag: (e) => m(g[e]),
                placeholder: t,
                focusAfterReady: n,
                isReady: o,
                "aria-labelledby": O,
                "aria-controls": v,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case m.oO.ROLES:
                    return (0, r.jsx)(C, { title: b.intl.string(b.t["LPJmL/"]) });
                case m.oO.MEMBERS:
                    return (0, r.jsx)(C, { title: b.intl.string(b.t["9Oq93m"]) });
                case m.oO.USERS:
                    return (0, r.jsx)(C, { title: b.intl.string(b.t.nqDUBX) });
                case m.oO.GUILDS:
                    return (0, r.jsx)(C, { title: b.intl.string(b.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case m.oO.ROLES:
                    return (0, r.jsx)(k, { index: n });
                case m.oO.MEMBERS:
                    return (0, r.jsx)(I, { index: n });
                case m.oO.USERS:
                    return (0, r.jsx)(L, { index: n });
                case m.oO.GUILDS:
                    return (0, r.jsx)(A, { index: n });
            }
            return null;
        },
        useSections: T,
    };
