n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    s = n(503698),
    o = n.n(s),
    i = n(837381),
    a = n(421380),
    c = n(397927),
    u = n(709066),
    d = n(915089),
    x = n(263063),
    h = n(495273),
    m = n(63543),
    w = n(737045),
    g = n(985018),
    R = n(186666);
let S = (0, d.Ld)(),
    T = (0, d.Ld)();
function f(e) {
    return `${e.rowType}:${e.id}`;
}
let E = r.createContext({
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
    y = [];
function b(e) {
    let { roles: t = y, members: n = y, users: l = y, guilds: s = y } = e;
    return r.useMemo(() => [t.length, n.length, l.length, s.length], [t.length, n.length, l.length, s.length]);
}
let j = (e) => {
    let { title: t } = e;
    return (0, l.jsx)(c.Heading, { variant: "heading-sm/semibold", className: o()(R.Gf, R.iw), children: t }, t);
};
function v(e) {
    let { id: t, sectionIndex: n, rowIndex: s, rows: u, children: d, showCheckbox: x, showRowLabel: m } = e,
        g = (0, i.rm)(t),
        {
            selectedSection: S,
            selectedRow: T,
            onSelectionChange: y,
            pendingAdditions: b,
            onRowClick: j,
            isAtMaxPendingRows: v,
        } = r.useContext(E),
        p = u[s],
        O = f(p),
        C = p.disabled || O in b,
        M = p.disabled || (!C && v);
    return (0, r.createElement)(c.DUT, {
        ...g,
        id: t,
        key: O,
        role: "option",
        className: o()(R.d, { [R.A5]: S === n && T === s }),
        onClick: (e) => {
            M || (e.preventDefault(), p.rowType !== w.T6.EMPTY_STATE && j(p));
        },
        onMouseEnter: () => y(n, s, !1),
        "aria-disabled": M,
        "aria-selected": C,
        "aria-setsize": u.length,
        "aria-posinset": s + 1,
        children: [
            x
                ? (0, l.jsx)(a.Kj, {
                      className: R.kv,
                      displayOnly: !0,
                      size: 18,
                      value: C,
                      type: a.Xo.INVERTED,
                      disabled: M,
                      children: (0, l.jsx)("div", { className: R.fw, children: d }),
                  })
                : (0, l.jsx)("div", { className: R.fw, children: d }),
            m
                ? (0, l.jsx)(c.Text, { color: "text-muted", variant: "text-xs/normal", children: h.vV(p.rowType) })
                : null,
        ],
    });
}
let p = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: s } = r.useContext(E),
            i = s[t];
        return null == i
            ? null
            : (0, l.jsxs)(v, {
                  id: `roles-row-${t}`,
                  sectionIndex: w.oO.ROLES,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)("div", {
                          className: o()(R.iw, R.Hu),
                          children: (0, l.jsx)(c.iTF, { size: "custom", color: i.colorString, height: 20 }),
                      }),
                      (0, l.jsxs)("div", {
                          className: R.xZ,
                          children: [
                              (0, l.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: i.rowType === w.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: i.name,
                              }),
                              i.disabled && null != n
                                  ? (0, l.jsx)(c.Text, {
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
    O = (e) => {
        let { index: t } = e,
            { members: n } = r.useContext(E),
            s = n[t];
        return null == s
            ? null
            : (0, l.jsxs)(v, {
                  id: `members-row-${t}`,
                  sectionIndex: w.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(c.euF, { src: s.avatarURL, size: c._3J.SIZE_24, "aria-label": "" }),
                      (0, l.jsx)(c.Text, { className: R.xZ, variant: "text-sm/normal", children: s.name }),
                      (0, l.jsx)(c.Text, {
                          color: "text-muted",
                          className: R.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: s.username,
                      }),
                      s.bot && (0, l.jsx)(u.A, { verified: s.verifiedBot }),
                  ],
              });
    },
    C = (e) => {
        let { index: t, disabledText: n } = e,
            { users: s } = r.useContext(E),
            o = s[t];
        return null == o
            ? null
            : (0, l.jsxs)(v, {
                  id: `users-row-${t}`,
                  sectionIndex: w.oO.USERS,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(c.euF, { src: o.avatarURL, size: c._3J.SIZE_24, "aria-label": "" }),
                      (0, l.jsxs)("div", {
                          className: R.xZ,
                          children: [
                              (0, l.jsx)(c.Text, { variant: "text-sm/normal", children: o.name }),
                              o.disabled && null != n
                                  ? (0, l.jsx)(c.Text, {
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
    M = (e) => {
        let { index: t } = e,
            { guilds: n } = r.useContext(E),
            s = n[t];
        return null == s
            ? null
            : (0, l.jsxs)(v, {
                  id: `guilds-row-${t}`,
                  sectionIndex: w.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(x.Ay, { guild: s.guild, active: !0, size: x.Ay.Sizes.SMALLER }),
                      (0, l.jsx)("div", {
                          className: R.xZ,
                          children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: s.name,
                          }),
                      }),
                  ],
              });
    },
    A = {
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
                    roles: c = y,
                    members: u = y,
                    users: d = y,
                    guilds: x = y,
                    getRichTag: h,
                    maxPendingRows: m,
                } = e,
                g = r.useRef(null),
                [R, S] = r.useState({ section: 0, row: -1 });
            function T(e) {
                let t = f(e);
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
                    g.current?.focus();
            }
            r.useEffect(() => {
                g.current?.focus();
            }, []);
            let b = null != m && Object.keys(i).length >= m;
            return (0, l.jsx)(E.Provider, {
                value: {
                    searchRef: g,
                    selectedSection: R.section,
                    selectedRow: R.row,
                    roles: c,
                    members: u,
                    users: d,
                    guilds: x,
                    pendingAdditions: i,
                    isAtMaxPendingRows: b,
                    onSelectionChange: function (e, t) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        S((n) => (n.section === e && n.row === t ? n : { section: e ?? 0, row: t ?? -1 })),
                            l && n?.current?.scrollToIndex({ section: e ?? 0, row: t ?? 0, padding: 8 });
                    },
                    onRowClick: T,
                    query: s,
                    onQueryChange: o,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        o("");
                        let n = [];
                        switch (e) {
                            case w.oO.ROLES:
                                n = c;
                                break;
                            case w.oO.MEMBERS:
                                n = u;
                                break;
                            case w.oO.USERS:
                                n = d;
                                break;
                            case w.oO.GUILDS:
                                n = x;
                        }
                        let l = n[t];
                        null != l && l.rowType !== w.T6.EMPTY_STATE && T(l);
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
                    onRemovePendingAddition: w,
                    roles: g,
                    members: R,
                    users: f,
                    guilds: y,
                } = r.useContext(E),
                { keys: j, tags: v } = r.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return { keys: e, tags: t };
                }, [c]),
                p = b({ roles: g, members: R, users: f, guilds: y });
            return (0, l.jsx)(m.A, {
                ref: o,
                query: u,
                onQueryChange: x,
                selectedSection: i,
                selectedRow: a,
                onSelectionChange: d,
                onSelect: h,
                tags: v,
                sections: p,
                onRemoveTag: (e) => w(j[e]),
                placeholder: t,
                focusAfterReady: n,
                isReady: s,
                "aria-labelledby": S,
                "aria-controls": T,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case w.oO.ROLES:
                    return (0, l.jsx)(j, { title: g.intl.string(g.t["LPJmL/"]) });
                case w.oO.MEMBERS:
                    return (0, l.jsx)(j, { title: g.intl.string(g.t["9Oq93m"]) });
                case w.oO.USERS:
                    return (0, l.jsx)(j, { title: g.intl.string(g.t.nqDUBX) });
                case w.oO.GUILDS:
                    return (0, l.jsx)(j, { title: g.intl.string(g.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case w.oO.ROLES:
                    return (0, l.jsx)(p, { index: n });
                case w.oO.MEMBERS:
                    return (0, l.jsx)(O, { index: n });
                case w.oO.USERS:
                    return (0, l.jsx)(C, { index: n });
                case w.oO.GUILDS:
                    return (0, l.jsx)(M, { index: n });
            }
            return null;
        },
        useSections: b,
    };
