n.d(t, { A: () => U });
var l = n(627968),
    r = n(64700),
    s = n(503698),
    o = n.n(s),
    i = n(837381),
    a = n(27192),
    c = n(534514),
    u = n(939249),
    d = n(834730),
    x = n(179866),
    h = n(97808),
    m = n(778712),
    w = n(709066),
    g = n(915089),
    E = n(263063),
    R = n(495273),
    S = n(63543),
    f = n(737045),
    y = n(985018),
    b = n(98965);
let j = (0, g.Ld)(),
    v = (0, g.Ld)();
function T(e) {
    return `${e.rowType}:${e.id}`;
}
let p = r.createContext({
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
    O = [];
function C(e) {
    let { roles: t = O, members: n = O, users: l = O, guilds: s = O } = e;
    return r.useMemo(() => [t.length, n.length, l.length, s.length], [t.length, n.length, l.length, s.length]);
}
let M = (e) => {
    let { title: t } = e;
    return (0, l.jsx)(c.D, { variant: "heading-sm/semibold", className: o()(b.Gf, b.iw), children: t }, t);
};
function A(e) {
    let { id: t, sectionIndex: n, rowIndex: s, rows: c, children: x, showCheckbox: h, showRowLabel: m } = e,
        w = (0, i.rm)(t),
        {
            selectedSection: g,
            selectedRow: E,
            onSelectionChange: S,
            pendingAdditions: y,
            onRowClick: j,
            isAtMaxPendingRows: v,
        } = r.useContext(p),
        O = c[s],
        C = T(O),
        M = O.disabled || C in y,
        A = O.disabled || (!M && v);
    return (0, r.createElement)(u.D, {
        ...w,
        id: t,
        key: C,
        role: "option",
        className: o()(b.d, { [b.A5]: g === n && E === s }),
        onClick: (e) => {
            A || (e.preventDefault(), O.rowType !== f.T6.EMPTY_STATE && j(O));
        },
        onMouseEnter: () => S(n, s, !1),
        "aria-disabled": A,
        "aria-selected": M,
        "aria-setsize": c.length,
        "aria-posinset": s + 1,
        children: [
            h
                ? (0, l.jsx)(a.Kj, {
                      className: b.kv,
                      displayOnly: !0,
                      size: 18,
                      value: M,
                      type: a.Or.INVERTED,
                      disabled: A,
                      children: (0, l.jsx)("div", { className: b.fw, children: x }),
                  })
                : (0, l.jsx)("div", { className: b.fw, children: x }),
            m ? (0, l.jsx)(d.E, { color: "text-muted", variant: "text-xs/normal", children: R.vV(O.rowType) }) : null,
        ],
    });
}
let L = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: s } = r.useContext(p),
            i = s[t];
        return null == i
            ? null
            : (0, l.jsxs)(A, {
                  id: `roles-row-${t}`,
                  sectionIndex: f.oO.ROLES,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)("div", {
                          className: o()(b.iw, b.Hu),
                          children: (0, l.jsx)(x.i, { size: "custom", color: i.colorString, height: 20 }),
                      }),
                      (0, l.jsxs)("div", {
                          className: b.xZ,
                          children: [
                              (0, l.jsx)(d.E, {
                                  variant: "text-sm/medium",
                                  color: i.rowType === f.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: i.name,
                              }),
                              i.disabled && null != n
                                  ? (0, l.jsx)(d.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    I = (e) => {
        let { index: t } = e,
            { members: n } = r.useContext(p),
            s = n[t];
        return null == s
            ? null
            : (0, l.jsxs)(A, {
                  id: `members-row-${t}`,
                  sectionIndex: f.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(h.eu, { src: s.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, l.jsx)(d.E, { className: b.xZ, variant: "text-sm/normal", children: s.name }),
                      (0, l.jsx)(d.E, {
                          color: "text-muted",
                          className: b.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: s.username,
                      }),
                      s.bot && (0, l.jsx)(w.A, { verified: s.verifiedBot }),
                  ],
              });
    },
    k = (e) => {
        let { index: t, disabledText: n } = e,
            { users: s } = r.useContext(p),
            o = s[t];
        return null == o
            ? null
            : (0, l.jsxs)(A, {
                  id: `users-row-${t}`,
                  sectionIndex: f.oO.USERS,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(h.eu, { src: o.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, l.jsxs)("div", {
                          className: b.xZ,
                          children: [
                              (0, l.jsx)(d.E, { variant: "text-sm/normal", children: o.name }),
                              o.disabled && null != n
                                  ? (0, l.jsx)(d.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    N = (e) => {
        let { index: t } = e,
            { guilds: n } = r.useContext(p),
            s = n[t];
        return null == s
            ? null
            : (0, l.jsxs)(A, {
                  id: `guilds-row-${t}`,
                  sectionIndex: f.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(E.Ay, { guild: s.guild, active: !0, size: E.Ay.Sizes.SMALLER }),
                      (0, l.jsx)("div", {
                          className: b.xZ,
                          children: (0, l.jsx)(d.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: s.name,
                          }),
                      }),
                  ],
              });
    },
    U = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: (e) => {
            let {
                    children: t,
                    listRef: n,
                    query: s,
                    setQuery: o,
                    pendingAdditions: i,
                    setPendingAdditions: a,
                    roles: c = O,
                    members: u = O,
                    users: d = O,
                    guilds: x = O,
                    getRichTag: h,
                    maxPendingRows: m,
                } = e,
                w = r.useRef(null),
                [g, E] = r.useState({ section: 0, row: -1 });
            function R(e) {
                let t = T(e);
                a((n) => {
                    if (t in n) {
                        let { [t]: e, ...l } = n;
                        return l;
                    }
                    {
                        let l = h(e);
                        if (null != l) {
                            let r = { ...n };
                            return (r[t] = { display: l, row: e }), r;
                        }
                    }
                    return n;
                }),
                    o(""),
                    w.current?.focus();
            }
            r.useEffect(() => {
                w.current?.focus();
            }, []);
            let S = null != m && Object.keys(i).length >= m;
            return (0, l.jsx)(p.Provider, {
                value: {
                    searchRef: w,
                    selectedSection: g.section,
                    selectedRow: g.row,
                    roles: c,
                    members: u,
                    users: d,
                    guilds: x,
                    pendingAdditions: i,
                    isAtMaxPendingRows: S,
                    onSelectionChange: function (e, t) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        E((n) => (n.section === e && n.row === t ? n : { section: e ?? 0, row: t ?? -1 })),
                            l && n?.current?.scrollToIndex({ section: e ?? 0, row: t ?? 0, padding: 8 });
                    },
                    onRowClick: R,
                    query: s,
                    onQueryChange: o,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        o("");
                        let n = [];
                        switch (e) {
                            case f.oO.ROLES:
                                n = c;
                                break;
                            case f.oO.MEMBERS:
                                n = u;
                                break;
                            case f.oO.USERS:
                                n = d;
                                break;
                            case f.oO.GUILDS:
                                n = x;
                        }
                        let l = n[t];
                        null != l && l.rowType !== f.T6.EMPTY_STATE && R(l);
                    },
                    onRemovePendingAddition: function (e) {
                        a((t) => {
                            let { [e]: n, ...l } = t;
                            return l;
                        });
                    },
                },
                children: t,
            });
        },
        SearchBox: (e) => {
            let { placeholderText: t, focusSearchAfterReady: n, isReady: s } = e,
                {
                    searchRef: o,
                    selectedSection: i,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: u,
                    onSelectionChange: d,
                    onQueryChange: x,
                    onQueryClick: h,
                    onRemovePendingAddition: m,
                    roles: w,
                    members: g,
                    users: E,
                    guilds: R,
                } = r.useContext(p),
                { keys: f, tags: y } = r.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return { keys: e, tags: t };
                }, [c]),
                b = C({ roles: w, members: g, users: E, guilds: R });
            return (0, l.jsx)(S.A, {
                ref: o,
                query: u,
                onQueryChange: x,
                selectedSection: i,
                selectedRow: a,
                onSelectionChange: d,
                onSelect: h,
                tags: y,
                sections: b,
                onRemoveTag: (e) => m(f[e]),
                placeholder: t,
                focusAfterReady: n,
                isReady: s,
                "aria-labelledby": j,
                "aria-controls": v,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case f.oO.ROLES:
                    return (0, l.jsx)(M, { title: y.intl.string(y.t["LPJmL/"]) });
                case f.oO.MEMBERS:
                    return (0, l.jsx)(M, { title: y.intl.string(y.t["9Oq93m"]) });
                case f.oO.USERS:
                    return (0, l.jsx)(M, { title: y.intl.string(y.t.nqDUBX) });
                case f.oO.GUILDS:
                    return (0, l.jsx)(M, { title: y.intl.string(y.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case f.oO.ROLES:
                    return (0, l.jsx)(L, { index: n });
                case f.oO.MEMBERS:
                    return (0, l.jsx)(I, { index: n });
                case f.oO.USERS:
                    return (0, l.jsx)(k, { index: n });
                case f.oO.GUILDS:
                    return (0, l.jsx)(N, { index: n });
            }
            return null;
        },
        useSections: C,
    };
