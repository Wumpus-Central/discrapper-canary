r.d(n, { A: () => _ });
var l = r(477900),
    t = r(582128),
    s = r(503698),
    o = r.n(s),
    i = r(837381),
    a = r(189213),
    c = r(27192),
    d = r(534514),
    u = r(939249),
    h = r(834730),
    x = r(957485),
    w = r(97808),
    m = r(778712),
    S = r(928039),
    b = r(709066),
    g = r(915089),
    E = r(682163),
    R = r(495273),
    j = r(39255);
let v = function (e) {
    let {
        query: n,
        onQueryChange: r,
        onRemoveTag: t,
        onSelect: s,
        onSelectionChange: o,
        selectedSection: i,
        selectedRow: a,
        tags: c,
        sections: d,
        placeholder: u = "",
        focusAfterReady: h,
        isReady: x,
        "aria-labelledby": w,
        "aria-controls": m,
        "aria-activedescendant": S,
        ref: b,
    } = e;
    return (0, l.jsx)(j.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: r,
        onRemoveTag: t,
        selectedSection: i,
        selectedRow: a,
        onSelect: s,
        onSelectionChange: o,
        placeholder: 0 === c.length ? u : "",
        query: n,
        ref: b,
        size: j.A.Sizes.MEDIUM,
        tags: c,
        sections: d,
        focusAfterReady: h,
        isReady: x,
        inputProps: { "aria-labelledby": w, "aria-controls": m, "aria-expanded": !0, "aria-activedescendant": S },
    });
};
var y = r(290261),
    f = r(792996),
    O = r(633846);
let p = (0, g.Ld)(),
    C = (0, g.Ld)();
function k(e) {
    return `${e.rowType}:${e.id}`;
}
let T = t.createContext({
    searchRef: { current: null },
    listRef: { current: null },
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
});
function I() {
    return t.useContext(T);
}
let M = [];
function L(e) {
    let { roles: n = M, members: r = M, users: l = M, guilds: s = M } = e;
    return t.useMemo(() => [n.length, r.length, l.length, s.length], [n.length, r.length, l.length, s.length]);
}
let A = (e) => {
    let { title: n } = e;
    return (0, l.jsx)(d.D, { variant: "heading-xs/semibold", className: o()(O.Gf, O.iw), children: n }, n);
};
function U(e) {
    let { id: n, sectionIndex: r, rowIndex: s, rows: a, children: d, showCheckbox: x, showRowLabel: w } = e,
        m = (0, i.rm)(n),
        {
            selectedSection: S,
            selectedRow: b,
            onSelectionChange: g,
            pendingAdditions: E,
            onRowClick: j,
            isAtMaxPendingRows: v,
        } = I(),
        f = a[s],
        p = k(f),
        C = f.disabled || p in E,
        T = f.disabled || (!C && v);
    return (0, t.createElement)(u.D, {
        ...m,
        id: n,
        key: p,
        role: "option",
        className: o()(O.d, { [O.A5]: S === r && b === s }),
        onClick: (e) => {
            T || (e.preventDefault(), f.rowType !== y.T6.EMPTY_STATE && j(f, 0 !== e.detail));
        },
        onMouseEnter: () => g(r, s, !1),
        "aria-disabled": T,
        "aria-selected": C,
        "aria-setsize": a.length,
        "aria-posinset": s + 1,
        children: [
            x
                ? (0, l.jsx)(c.Kj, {
                      className: O.kv,
                      displayOnly: !0,
                      size: 18,
                      value: C,
                      type: c.Or.INVERTED,
                      disabled: T,
                      children: (0, l.jsx)("div", { className: O.fw, children: d }),
                  })
                : (0, l.jsx)("div", { className: O.fw, children: d }),
            w ? (0, l.jsx)(h.E, { color: "text-muted", variant: "body-xs/normal", children: R.vV(f.rowType) }) : null,
        ],
    });
}
let N = (e) => {
        let { index: n, disabledText: r } = e,
            { roles: t } = I(),
            s = t[n];
        return null == s
            ? null
            : (0, l.jsxs)(U, {
                  id: `roles-row-${n}`,
                  sectionIndex: y.oO.ROLES,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)("div", {
                          className: o()(O.iw, O.Hu),
                          children: (0, l.jsx)(x.ShieldUserIcon, { size: "custom", color: s.colorString, height: 20 }),
                      }),
                      (0, l.jsxs)("div", {
                          className: O.xZ,
                          children: [
                              (0, l.jsx)(h.E, {
                                  variant: "body-sm/medium",
                                  color: s.rowType === y.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: s.name,
                              }),
                              s.disabled && null != r
                                  ? (0, l.jsx)(h.E, { color: "text-default", variant: "body-xs/normal", children: r })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    D = (e) => {
        let { index: n } = e,
            { members: r } = I(),
            t = r[n];
        return null == t
            ? null
            : (0, l.jsxs)(U, {
                  id: `members-row-${n}`,
                  sectionIndex: y.oO.MEMBERS,
                  rowIndex: n,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(w.eu, { src: t.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, l.jsx)(h.E, { className: O.xZ, variant: "body-sm/normal", children: t.name }),
                      (0, l.jsx)(h.E, {
                          color: "text-muted",
                          className: O.Gq,
                          variant: "body-sm/normal",
                          "aria-hidden": !0,
                          children: t.username,
                      }),
                      t.bot && (0, l.jsx)(b.A, { verified: t.verifiedBot }),
                  ],
              });
    },
    P = (e) => {
        let { index: n, disabledText: r } = e,
            { users: t } = I(),
            s = t[n];
        return null == s
            ? null
            : (0, l.jsxs)(U, {
                  id: `users-row-${n}`,
                  sectionIndex: y.oO.USERS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(w.eu, { src: s.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, l.jsxs)("div", {
                          className: O.xZ,
                          children: [
                              (0, l.jsx)(h.E, { variant: "body-sm/normal", children: s.name }),
                              s.disabled && null != r
                                  ? (0, l.jsx)(h.E, { color: "text-default", variant: "body-xs/normal", children: r })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    $ = (e) => {
        let { index: n } = e,
            { guilds: r } = I(),
            t = r[n];
        return null == t
            ? null
            : (0, l.jsxs)(U, {
                  id: `guilds-row-${n}`,
                  sectionIndex: y.oO.GUILDS,
                  rowIndex: n,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(E.Ay, { guild: t.guild, active: !0, size: E.Ay.Sizes.SMALLER }),
                      (0, l.jsx)("div", {
                          className: O.xZ,
                          children: (0, l.jsx)(h.E, {
                              variant: "body-sm/medium",
                              color: "text-default",
                              children: t.name,
                          }),
                      }),
                  ],
              });
    },
    _ = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: function (e) {
            let {
                    children: n,
                    listRef: r,
                    query: s,
                    setQuery: o,
                    pendingAdditions: a,
                    setPendingAdditions: c,
                    roles: d = M,
                    members: u = M,
                    users: h = M,
                    guilds: x = M,
                    getRichTag: w,
                    maxPendingRows: m,
                } = e,
                b = t.useRef(null),
                [g, E] = t.useState({ section: 0, row: -1 }),
                R = (0, S.A)("audience-selector-list", r);
            t.useEffect(() => {
                b.current?.focus();
            }, []);
            let j = t.useCallback(
                    function (e, n) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        (E((r) => (r.section === e && r.row === n ? r : { section: e ?? 0, row: n ?? -1 })),
                            l && r.current?.scrollToIndex({ section: e ?? 0, row: n ?? 0, padding: 8 }));
                    },
                    [r],
                ),
                v = t.useCallback(
                    function (e) {
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = k(e);
                        (c((n) => {
                            if (r in n) {
                                let { [r]: e, ...l } = n;
                                return l;
                            }
                            {
                                let l = w(e);
                                if (null != l) {
                                    let t = { ...n };
                                    return ((t[r] = { display: l, row: e }), t);
                                }
                            }
                            return n;
                        }),
                            n && (o(""), b.current?.focus()));
                    },
                    [w, c, o],
                ),
                f = t.useCallback(
                    (e, n) => {
                        if (null == n) return;
                        o("");
                        let r = [];
                        switch (e) {
                            case y.oO.ROLES:
                                r = d;
                                break;
                            case y.oO.MEMBERS:
                                r = u;
                                break;
                            case y.oO.USERS:
                                r = h;
                                break;
                            case y.oO.GUILDS:
                                r = x;
                        }
                        let l = r[n];
                        null != l && l.rowType !== y.T6.EMPTY_STATE && v(l);
                    },
                    [x, v, u, d, o, h],
                ),
                O = t.useCallback(
                    (e) => {
                        c((n) => {
                            let { [e]: r, ...l } = n;
                            return l;
                        });
                    },
                    [c],
                ),
                p = null != m && Object.keys(a).length >= m,
                C = t.useMemo(
                    () => ({
                        searchRef: b,
                        listRef: r,
                        selectedSection: g.section,
                        selectedRow: g.row,
                        roles: d,
                        members: u,
                        users: h,
                        guilds: x,
                        pendingAdditions: a,
                        isAtMaxPendingRows: p,
                        onSelectionChange: j,
                        onRowClick: v,
                        query: s,
                        onQueryChange: o,
                        onQueryClick: f,
                        onRemovePendingAddition: O,
                    }),
                    [x, f, O, v, j, p, r, u, a, s, d, g.row, g.section, o, h],
                );
            return (0, l.jsx)(T.Provider, { value: C, children: (0, l.jsx)(i.hD, { navigator: R, children: n }) });
        },
        Modal: function (e) {
            let { listProps: n, ...r } = e,
                { listRef: t } = I(),
                { ref: s, role: o, ...c } = (0, i.$y)();
            return (0, l.jsx)(a.a, {
                ...r,
                listProps: {
                    ...n,
                    ...c,
                    ref: (e) => {
                        ((t.current = e), (s.current = e?.getScrollerNode() ?? null));
                    },
                    innerId: C,
                    innerAriaMultiselectable: !0,
                },
            });
        },
        SearchBox: (e) => {
            let { placeholderText: n, focusSearchAfterReady: r, isReady: s } = e,
                {
                    searchRef: o,
                    selectedSection: i,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: d,
                    onSelectionChange: u,
                    onQueryChange: h,
                    onQueryClick: x,
                    onRemovePendingAddition: w,
                    roles: m,
                    members: S,
                    users: b,
                    guilds: g,
                } = I(),
                { keys: E, tags: R } = t.useMemo(() => {
                    let e = Object.keys(c),
                        n = e.map((e) => c[e].display);
                    return { keys: e, tags: n };
                }, [c]),
                j = L({ roles: m, members: S, users: b, guilds: g });
            return (0, l.jsx)(v, {
                ref: o,
                query: d,
                onQueryChange: h,
                selectedSection: i,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: x,
                tags: R,
                sections: j,
                onRemoveTag: (e) => w(E[e]),
                placeholder: n,
                focusAfterReady: r,
                isReady: s,
                "aria-labelledby": p,
                "aria-controls": C,
                "aria-activedescendant":
                    a >= 0 && a < j[i]
                        ? (function (e, n) {
                              switch (e) {
                                  case y.oO.ROLES:
                                      return `roles-row-${n}`;
                                  case y.oO.MEMBERS:
                                      return `members-row-${n}`;
                                  case y.oO.USERS:
                                      return `users-row-${n}`;
                                  case y.oO.GUILDS:
                                      return `guilds-row-${n}`;
                              }
                          })(i, a)
                        : void 0,
            });
        },
        renderSection: (e) => {
            let { section: n } = e;
            switch (n) {
                case y.oO.ROLES:
                    return (0, l.jsx)(A, { title: f.intl.string(f.t["LPJmL/"]) });
                case y.oO.MEMBERS:
                    return (0, l.jsx)(A, { title: f.intl.string(f.t["9Oq93m"]) });
                case y.oO.USERS:
                    return (0, l.jsx)(A, { title: f.intl.string(f.t.nqDUBX) });
                case y.oO.GUILDS:
                    return (0, l.jsx)(A, { title: f.intl.string(f.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: n, row: r } = e;
            switch (n) {
                case y.oO.ROLES:
                    return (0, l.jsx)(N, { index: r });
                case y.oO.MEMBERS:
                    return (0, l.jsx)(D, { index: r });
                case y.oO.USERS:
                    return (0, l.jsx)(P, { index: r });
                case y.oO.GUILDS:
                    return (0, l.jsx)($, { index: r });
            }
            return null;
        },
        useSections: L,
    };
