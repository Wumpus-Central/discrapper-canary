n.d(t, { A: () => N });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    o = n(837381),
    a = n(27192),
    c = n(534514),
    d = n(939249),
    u = n(834730),
    x = n(179866),
    h = n(97808),
    m = n(778712),
    w = n(709066),
    g = n(915089),
    f = n(263063),
    S = n(495273),
    b = n(63543),
    E = n(737045),
    R = n(985018),
    v = n(98965);
let j = (0, g.Ld)(),
    y = (0, g.Ld)();
function p(e) {
    return `${e.rowType}:${e.id}`;
}
let T = l.createContext({
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
    k = [];
function C(e) {
    let { roles: t = k, members: n = k, users: r = k, guilds: s = k } = e;
    return l.useMemo(() => [t.length, n.length, r.length, s.length], [t.length, n.length, r.length, s.length]);
}
let A = (e) => {
    let { title: t } = e;
    return (0, r.jsx)(c.D, { variant: "heading-sm/semibold", className: i()(v.Gf, v.iw), children: t }, t);
};
function O(e) {
    let { id: t, sectionIndex: n, rowIndex: s, rows: c, children: x, showCheckbox: h, showRowLabel: m } = e,
        w = (0, o.rm)(t),
        {
            selectedSection: g,
            selectedRow: f,
            onSelectionChange: b,
            pendingAdditions: R,
            onRowClick: j,
            isAtMaxPendingRows: y,
        } = l.useContext(T),
        k = c[s],
        C = p(k),
        A = k.disabled || C in R,
        O = k.disabled || (!A && y);
    return (0, l.createElement)(d.D, {
        ...w,
        id: t,
        key: C,
        role: "option",
        className: i()(v.d, { [v.A5]: g === n && f === s }),
        onClick: (e) => {
            O || (e.preventDefault(), k.rowType !== E.T6.EMPTY_STATE && j(k));
        },
        onMouseEnter: () => b(n, s, !1),
        "aria-disabled": O,
        "aria-selected": A,
        "aria-setsize": c.length,
        "aria-posinset": s + 1,
        children: [
            h
                ? (0, r.jsx)(a.Kj, {
                      className: v.kv,
                      displayOnly: !0,
                      size: 18,
                      value: A,
                      type: a.Or.INVERTED,
                      disabled: O,
                      children: (0, r.jsx)("div", { className: v.fw, children: x }),
                  })
                : (0, r.jsx)("div", { className: v.fw, children: x }),
            m ? (0, r.jsx)(u.E, { color: "text-muted", variant: "text-xs/normal", children: S.vV(k.rowType) }) : null,
        ],
    });
}
let M = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: s } = l.useContext(T),
            o = s[t];
        return null == o
            ? null
            : (0, r.jsxs)(O, {
                  id: `roles-row-${t}`,
                  sectionIndex: E.oO.ROLES,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(v.iw, v.Hu),
                          children: (0, r.jsx)(x.i, { size: "custom", color: o.colorString, height: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                          className: v.xZ,
                          children: [
                              (0, r.jsx)(u.E, {
                                  variant: "text-sm/medium",
                                  color: o.rowType === E.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: o.name,
                              }),
                              o.disabled && null != n
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    _ = (e) => {
        let { index: t } = e,
            { members: n } = l.useContext(T),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(O, {
                  id: `members-row-${t}`,
                  sectionIndex: E.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: s.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsx)(u.E, { className: v.xZ, variant: "text-sm/normal", children: s.name }),
                      (0, r.jsx)(u.E, {
                          color: "text-muted",
                          className: v.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: s.username,
                      }),
                      s.bot && (0, r.jsx)(w.A, { verified: s.verifiedBot }),
                  ],
              });
    },
    L = (e) => {
        let { index: t, disabledText: n } = e,
            { users: s } = l.useContext(T),
            i = s[t];
        return null == i
            ? null
            : (0, r.jsxs)(O, {
                  id: `users-row-${t}`,
                  sectionIndex: E.oO.USERS,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: i.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsxs)("div", {
                          className: v.xZ,
                          children: [
                              (0, r.jsx)(u.E, { variant: "text-sm/normal", children: i.name }),
                              i.disabled && null != n
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    I = (e) => {
        let { index: t } = e,
            { guilds: n } = l.useContext(T),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(O, {
                  id: `guilds-row-${t}`,
                  sectionIndex: E.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(f.Ay, { guild: s.guild, active: !0, size: f.Ay.Sizes.SMALLER }),
                      (0, r.jsx)("div", {
                          className: v.xZ,
                          children: (0, r.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: s.name,
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
                    query: s,
                    setQuery: i,
                    pendingAdditions: o,
                    setPendingAdditions: a,
                    roles: c = k,
                    members: d = k,
                    users: u = k,
                    guilds: x = k,
                    getRichTag: h,
                    maxPendingRows: m,
                } = e,
                w = l.useRef(null),
                [g, f] = l.useState({ section: 0, row: -1 });
            function S(e) {
                let t = p(e);
                a((n) => {
                    if (t in n) {
                        let { [t]: e, ...r } = n;
                        return r;
                    }
                    {
                        let r = h(e);
                        if (null != r) {
                            let l = { ...n };
                            return (l[t] = { display: r, row: e }), l;
                        }
                    }
                    return n;
                }),
                    i(""),
                    w.current?.focus();
            }
            l.useEffect(() => {
                w.current?.focus();
            }, []);
            let b = null != m && Object.keys(o).length >= m;
            return (0, r.jsx)(T.Provider, {
                value: {
                    searchRef: w,
                    selectedSection: g.section,
                    selectedRow: g.row,
                    roles: c,
                    members: d,
                    users: u,
                    guilds: x,
                    pendingAdditions: o,
                    isAtMaxPendingRows: b,
                    onSelectionChange: function (e, t) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        f((n) => (n.section === e && n.row === t ? n : { section: e ?? 0, row: t ?? -1 })),
                            r && n?.current?.scrollToIndex({ section: e ?? 0, row: t ?? 0, padding: 8 });
                    },
                    onRowClick: S,
                    query: s,
                    onQueryChange: i,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        i("");
                        let n = [];
                        switch (e) {
                            case E.oO.ROLES:
                                n = c;
                                break;
                            case E.oO.MEMBERS:
                                n = d;
                                break;
                            case E.oO.USERS:
                                n = u;
                                break;
                            case E.oO.GUILDS:
                                n = x;
                        }
                        let r = n[t];
                        null != r && r.rowType !== E.T6.EMPTY_STATE && S(r);
                    },
                    onRemovePendingAddition: function (e) {
                        a((t) => {
                            let { [e]: n, ...r } = t;
                            return r;
                        });
                    },
                },
                children: t,
            });
        },
        SearchBox: (e) => {
            let { placeholderText: t, focusSearchAfterReady: n, isReady: s } = e,
                {
                    searchRef: i,
                    selectedSection: o,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: d,
                    onSelectionChange: u,
                    onQueryChange: x,
                    onQueryClick: h,
                    onRemovePendingAddition: m,
                    roles: w,
                    members: g,
                    users: f,
                    guilds: S,
                } = l.useContext(T),
                { keys: E, tags: R } = l.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return { keys: e, tags: t };
                }, [c]),
                v = C({ roles: w, members: g, users: f, guilds: S });
            return (0, r.jsx)(b.A, {
                ref: i,
                query: d,
                onQueryChange: x,
                selectedSection: o,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: h,
                tags: R,
                sections: v,
                onRemoveTag: (e) => m(E[e]),
                placeholder: t,
                focusAfterReady: n,
                isReady: s,
                "aria-labelledby": j,
                "aria-controls": y,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case E.oO.ROLES:
                    return (0, r.jsx)(A, { title: R.intl.string(R.t["LPJmL/"]) });
                case E.oO.MEMBERS:
                    return (0, r.jsx)(A, { title: R.intl.string(R.t["9Oq93m"]) });
                case E.oO.USERS:
                    return (0, r.jsx)(A, { title: R.intl.string(R.t.nqDUBX) });
                case E.oO.GUILDS:
                    return (0, r.jsx)(A, { title: R.intl.string(R.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case E.oO.ROLES:
                    return (0, r.jsx)(M, { index: n });
                case E.oO.MEMBERS:
                    return (0, r.jsx)(_, { index: n });
                case E.oO.USERS:
                    return (0, r.jsx)(L, { index: n });
                case E.oO.GUILDS:
                    return (0, r.jsx)(I, { index: n });
            }
            return null;
        },
        useSections: C,
    };
