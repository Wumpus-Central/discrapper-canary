n.d(t, { A: () => M });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    o = n(837381),
    a = n(421380),
    c = n(397927),
    d = n(709066),
    u = n(915089),
    x = n(263063),
    h = n(495273),
    m = n(63543),
    w = n(737045),
    g = n(985018),
    f = n(98965);
let S = (0, u.Ld)(),
    b = (0, u.Ld)();
function R(e) {
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
    v = [];
function E(e) {
    let { roles: t = v, members: n = v, users: r = v, guilds: s = v } = e;
    return l.useMemo(() => [t.length, n.length, r.length, s.length], [t.length, n.length, r.length, s.length]);
}
let j = (e) => {
    let { title: t } = e;
    return (0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", className: i()(f.Gf, f.iw), children: t }, t);
};
function y(e) {
    let { id: t, sectionIndex: n, rowIndex: s, rows: d, children: u, showCheckbox: x, showRowLabel: m } = e,
        g = (0, o.rm)(t),
        {
            selectedSection: S,
            selectedRow: b,
            onSelectionChange: v,
            pendingAdditions: E,
            onRowClick: j,
            isAtMaxPendingRows: y,
        } = l.useContext(T),
        p = d[s],
        k = R(p),
        C = p.disabled || k in E,
        A = p.disabled || (!C && y);
    return (0, l.createElement)(c.DUT, {
        ...g,
        id: t,
        key: k,
        role: "option",
        className: i()(f.d, { [f.A5]: S === n && b === s }),
        onClick: (e) => {
            A || (e.preventDefault(), p.rowType !== w.T6.EMPTY_STATE && j(p));
        },
        onMouseEnter: () => v(n, s, !1),
        "aria-disabled": A,
        "aria-selected": C,
        "aria-setsize": d.length,
        "aria-posinset": s + 1,
        children: [
            x
                ? (0, r.jsx)(a.Kj, {
                      className: f.kv,
                      displayOnly: !0,
                      size: 18,
                      value: C,
                      type: a.Xo.INVERTED,
                      disabled: A,
                      children: (0, r.jsx)("div", { className: f.fw, children: u }),
                  })
                : (0, r.jsx)("div", { className: f.fw, children: u }),
            m
                ? (0, r.jsx)(c.Text, { color: "text-muted", variant: "text-xs/normal", children: h.vV(p.rowType) })
                : null,
        ],
    });
}
let p = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: s } = l.useContext(T),
            o = s[t];
        return null == o
            ? null
            : (0, r.jsxs)(y, {
                  id: `roles-row-${t}`,
                  sectionIndex: w.oO.ROLES,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(f.iw, f.Hu),
                          children: (0, r.jsx)(c.iTF, { size: "custom", color: o.colorString, height: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                          className: f.xZ,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: o.rowType === w.T6.EMPTY_STATE ? "text-muted" : "text-default",
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
    k = (e) => {
        let { index: t } = e,
            { members: n } = l.useContext(T),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(y, {
                  id: `members-row-${t}`,
                  sectionIndex: w.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(c.euF, { src: s.avatarURL, size: c._3J.SIZE_24, "aria-label": "" }),
                      (0, r.jsx)(c.Text, { className: f.xZ, variant: "text-sm/normal", children: s.name }),
                      (0, r.jsx)(c.Text, {
                          color: "text-muted",
                          className: f.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: s.username,
                      }),
                      s.bot && (0, r.jsx)(d.A, { verified: s.verifiedBot }),
                  ],
              });
    },
    C = (e) => {
        let { index: t, disabledText: n } = e,
            { users: s } = l.useContext(T),
            i = s[t];
        return null == i
            ? null
            : (0, r.jsxs)(y, {
                  id: `users-row-${t}`,
                  sectionIndex: w.oO.USERS,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(c.euF, { src: i.avatarURL, size: c._3J.SIZE_24, "aria-label": "" }),
                      (0, r.jsxs)("div", {
                          className: f.xZ,
                          children: [
                              (0, r.jsx)(c.Text, { variant: "text-sm/normal", children: i.name }),
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
    A = (e) => {
        let { index: t } = e,
            { guilds: n } = l.useContext(T),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(y, {
                  id: `guilds-row-${t}`,
                  sectionIndex: w.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(x.Ay, { guild: s.guild, active: !0, size: x.Ay.Sizes.SMALLER }),
                      (0, r.jsx)("div", {
                          className: f.xZ,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: s.name,
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
                    query: s,
                    setQuery: i,
                    pendingAdditions: o,
                    setPendingAdditions: a,
                    roles: c = v,
                    members: d = v,
                    users: u = v,
                    guilds: x = v,
                    getRichTag: h,
                    maxPendingRows: m,
                } = e,
                g = l.useRef(null),
                [f, S] = l.useState({ section: 0, row: -1 });
            function b(e) {
                let t = R(e);
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
                    g.current?.focus();
            }
            l.useEffect(() => {
                g.current?.focus();
            }, []);
            let E = null != m && Object.keys(o).length >= m;
            return (0, r.jsx)(T.Provider, {
                value: {
                    searchRef: g,
                    selectedSection: f.section,
                    selectedRow: f.row,
                    roles: c,
                    members: d,
                    users: u,
                    guilds: x,
                    pendingAdditions: o,
                    isAtMaxPendingRows: E,
                    onSelectionChange: function (e, t) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        S((n) => (n.section === e && n.row === t ? n : { section: e ?? 0, row: t ?? -1 })),
                            r && n?.current?.scrollToIndex({ section: e ?? 0, row: t ?? 0, padding: 8 });
                    },
                    onRowClick: b,
                    query: s,
                    onQueryChange: i,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        i("");
                        let n = [];
                        switch (e) {
                            case w.oO.ROLES:
                                n = c;
                                break;
                            case w.oO.MEMBERS:
                                n = d;
                                break;
                            case w.oO.USERS:
                                n = u;
                                break;
                            case w.oO.GUILDS:
                                n = x;
                        }
                        let r = n[t];
                        null != r && r.rowType !== w.T6.EMPTY_STATE && b(r);
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
                    onRemovePendingAddition: w,
                    roles: g,
                    members: f,
                    users: R,
                    guilds: v,
                } = l.useContext(T),
                { keys: j, tags: y } = l.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return { keys: e, tags: t };
                }, [c]),
                p = E({ roles: g, members: f, users: R, guilds: v });
            return (0, r.jsx)(m.A, {
                ref: i,
                query: d,
                onQueryChange: x,
                selectedSection: o,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: h,
                tags: y,
                sections: p,
                onRemoveTag: (e) => w(j[e]),
                placeholder: t,
                focusAfterReady: n,
                isReady: s,
                "aria-labelledby": S,
                "aria-controls": b,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case w.oO.ROLES:
                    return (0, r.jsx)(j, { title: g.intl.string(g.t["LPJmL/"]) });
                case w.oO.MEMBERS:
                    return (0, r.jsx)(j, { title: g.intl.string(g.t["9Oq93m"]) });
                case w.oO.USERS:
                    return (0, r.jsx)(j, { title: g.intl.string(g.t.nqDUBX) });
                case w.oO.GUILDS:
                    return (0, r.jsx)(j, { title: g.intl.string(g.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case w.oO.ROLES:
                    return (0, r.jsx)(p, { index: n });
                case w.oO.MEMBERS:
                    return (0, r.jsx)(k, { index: n });
                case w.oO.USERS:
                    return (0, r.jsx)(C, { index: n });
                case w.oO.GUILDS:
                    return (0, r.jsx)(A, { index: n });
            }
            return null;
        },
        useSections: E,
    };
