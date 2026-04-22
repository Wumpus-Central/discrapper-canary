n.d(t, { Ay: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(189213),
    o = n(311907),
    d = n(990078),
    c = n(192308),
    u = n(834730),
    m = n(939249),
    g = n(285796),
    h = n(177953),
    x = n(349288),
    _ = n(475825),
    p = n(892547),
    A = n(821609),
    E = n(512950),
    f = n(442433),
    j = n(181658),
    N = n(80682),
    I = n(793574),
    C = n(688810),
    b = n(342296),
    v = n(287809),
    S = n(954571),
    T = n(642133),
    y = n(997509),
    R = n(396816),
    L = n(856644),
    D = n(785312),
    O = n(316506),
    G = n(981634),
    M = n(927573),
    k = n(652215),
    U = n(985018),
    w = n(919611),
    P = n(263935);
async function B(e, t, n) {
    let l = e.roles.filter((e) => e !== n);
    try {
        await y.A.updateMemberRoles(t, e.id, l, [], [n]);
    } catch (t) {
        let e = new j.A(t);
        (0, c.openModal)((t) =>
            (0, i.jsx)(a.Modal, {
                ...t,
                title: U.intl.string(U.t.R0RpRX),
                actions: [{ text: U.intl.string(U.t.BddRzS), variant: "primary", onClick: t.onClose }],
                children: (0, i.jsx)(u.E, {
                    color: "text-default",
                    variant: "text-md/normal",
                    children: e.getAnyErrorMessage(),
                }),
            }),
        );
    }
}
function F(e) {
    let { member: t, guildId: s, roleId: o, locked: h } = e,
        x = l.useRef(null),
        _ = l.useMemo(() => ({ [s]: [t.id] }), [s, t.id]);
    function p(e) {
        if ((e.stopPropagation(), !h)) {
            let n;
            if (e.shiftKey) return void B(t, s, o);
            (n = R.A.getRole(o)),
                (0, c.openModal)((e) =>
                    (0, i.jsx)(a.Modal, {
                        ...e,
                        title: U.intl.string(U.t["7sFNfW"]),
                        subtitle: U.intl.format(U.t.scORUv, { username: t.name, roleName: n?.name }),
                        actions: [
                            { text: U.intl.string(U.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                            {
                                text: U.intl.string(U.t.N86XcP),
                                variant: "critical-primary",
                                onClick: () => {
                                    B(t, s, o), e.onClose();
                                },
                            },
                        ],
                        children: (0, i.jsx)(u.E, {
                            className: w.Of,
                            color: "text-muted",
                            variant: "text-md/normal",
                            children: U.intl.string(U.t.jxIxJL),
                        }),
                    }),
                );
        }
    }
    function A(e) {
        let l = v.default.getUser(t.id);
        null != l &&
            (0, f.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("93103"),
                    n.e("53635"),
                    n.e("35313"),
                    n.e("91042"),
                    n.e("92720"),
                ]).then(n.bind(n, 365689));
                return (t) => (0, i.jsx)(e, { ...t, user: l, guildId: s, showChatItems: !1 });
            });
    }
    return (
        (0, N.Eq)(_, "GuildSettingsRolesEditMembers"),
        (0, i.jsx)("div", {
            className: P.Q,
            children: (0, i.jsx)(b.A, {
                targetElementRef: x,
                userId: t.id,
                guildId: s,
                roleId: o,
                position: "left",
                children: (e) =>
                    (0, i.jsxs)(m.D, {
                        ...e,
                        innerRef: x,
                        className: w.TL,
                        onContextMenu: A,
                        children: [
                            (0, i.jsx)(G.A, {
                                className: w.bu,
                                avatarURL: t.avatarURL,
                                name: t.name,
                                bot: t.bot,
                                verifiedBot: t.verifiedBot,
                                userTag: t.userTag,
                            }),
                            (0, i.jsx)("div", {
                                className: w.O6,
                                children: (0, i.jsx)(d.m, {
                                    text: h ? U.intl.string(U.t.wkrQaK) : U.intl.string(U.t["7sFNfW"]),
                                    position: "top",
                                    children: (0, i.jsx)(m.D, {
                                        className: r()(w.DT, { [w.li]: h }),
                                        onClick: p,
                                        children: (0, i.jsx)(g.a, { size: "xs", color: "currentColor" }),
                                    }),
                                }),
                            }),
                        ],
                    }),
            }),
        })
    );
}
function H(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, i.jsx)("div", {
        className: P.Q,
        children: (0, i.jsxs)("div", {
            className: r()(w.TL, w.xs),
            children: [
                (0, i.jsx)(h.n, { size: "md", color: "currentColor" }),
                (0, i.jsx)(u.E, {
                    className: w.Tf,
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: U.intl.format(U.t.P9pZOW, {
                        addMembersHook: function (e, l) {
                            return n ? null : (0, i.jsx)(x.Anchor, { onClick: t, children: e }, l);
                        },
                    }),
                }),
            ],
        }),
    });
}
function V(e) {
    let {
            guildId: t,
            roleId: n,
            query: s,
            headerHeight: r,
            locked: a,
            onScroll: o,
            roleMembers: d,
            handleAddClick: c,
        } = e,
        { analyticsLocations: u } = (0, C.Ay)(I.A.MEMBER_LIST),
        m = l.useMemo(() => s.trim().toLowerCase(), [s]);
    (0, L.cG)(t, m);
    let g = l.useMemo(() => d.filter((e) => (0, L.EF)(m, e)), [d, m]),
        h = l.useMemo(() => g.sort((e, t) => e.name.localeCompare(t.name)), [g]);
    return (0, i.jsx)(C.f5, {
        value: u,
        children: (0, i.jsx)(_.Ei, {
            className: w.p_,
            sections: [Math.max(g.length, 1)],
            sectionHeight: r,
            renderSection: () => (0, i.jsx)("div", { style: { height: r } }, "section"),
            style: { scrollPaddingTop: r },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: l } = e;
                if (0 === h.length) return (0, i.jsx)(H, { handleAddClick: c, locked: a }, "empty");
                let s = h[l];
                return (0, i.jsx)(F, { member: s, guildId: t, roleId: n, locked: a }, s.id);
            },
            onScroll: o,
        }),
    });
}
function z(e) {
    let { query: t, setQuery: n, locked: l, handleAddClick: s } = e;
    return (0, i.jsxs)("div", {
        className: w.MT,
        children: [
            (0, i.jsx)(p.I, {
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: U.intl.string(U.t.pYHobK),
                "aria-label": U.intl.string(U.t.pYHobK),
            }),
            (0, i.jsx)(A.$, {
                onClick: s,
                variant: "primary",
                size: "sm",
                disabled: l,
                text: U.intl.string(U.t.cHszXg),
            }),
        ],
    });
}
function W(e) {
    let { guild: t, role: s, locked: a, setSelectedSection: d } = e,
        [u, m] = l.useState(""),
        { headerHeight: g, headerRef: h } = (0, D.A)(0),
        { scrolledToTop: x, handleScroll: _ } = (0, O.u)(),
        p = s.managed || a,
        A = (0, L.K5)(t.id, s.id),
        f = (0, o.bG)([T.A], () => T.A.getRoleMemberCount(t.id)?.[s.id] ?? 0) > A.length,
        j = () => {
            S.default.track(k.HAw.OPEN_MODAL, {
                type: "Add Role Members",
                location_page: "Role Settings",
                location_section: "Members",
            }),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e("78708").then(n.bind(n, 66655));
                    return (n) => (0, i.jsx)(e, { ...n, roleId: s.id, guildId: t.id });
                });
        };
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)("div", {
                className: w.N1,
                ref: h,
                children: (0, i.jsx)("div", {
                    className: P.Q,
                    children: (0, i.jsxs)("div", {
                        className: r()(P.wx, { [P.l6]: !x }),
                        children: [
                            (0, i.jsx)(O.A, {
                                guild: t,
                                role: s,
                                selectedSection: M.T$.MEMBERS,
                                setSelectedSection: d,
                            }),
                            (0, i.jsx)(z, { query: u, setQuery: m, locked: p, handleAddClick: j }),
                            f
                                ? (0, i.jsx)(E.p, {
                                      className: w.v6,
                                      messageType: E.Y.INFO,
                                      children: U.intl.string(U.t.RQxHZ8),
                                  })
                                : null,
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(V, {
                headerHeight: g + 8,
                query: u,
                guildId: t.id,
                roleId: s.id,
                locked: p,
                onScroll: _,
                roleMembers: A,
                handleAddClick: j,
            }),
        ],
    });
}
