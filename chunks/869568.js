"use strict";
n.d(t, { Ay: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(442433),
    m = n(181658),
    g = n(80682),
    x = n(793574),
    h = n(688810),
    _ = n(342296),
    A = n(287809),
    p = n(954571),
    f = n(642133),
    j = n(997509),
    N = n(396816),
    E = n(856644),
    C = n(785312),
    T = n(316506),
    I = n(981634),
    b = n(927573),
    v = n(652215),
    S = n(985018),
    y = n(841707),
    R = n(407759);
async function O(e, t, n) {
    let s = e.roles.filter((e) => e !== n);
    try {
        await j.A.updateMemberRoles(t, e.id, s, [], [n]);
    } catch (t) {
        let e = new m.A(t);
        (0, c.qfG)((t) =>
            (0, i.jsx)(a.Modal, {
                ...t,
                title: S.intl.string(S.t.R0RpRX),
                actions: [{ text: S.intl.string(S.t.BddRzS), variant: "primary", onClick: t.onClose }],
                children: (0, i.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-md/normal",
                    children: e.getAnyErrorMessage(),
                }),
            }),
        );
    }
}
function G(e) {
    let { member: t, guildId: l, roleId: o, locked: m } = e,
        x = s.useRef(null),
        h = s.useMemo(() => ({ [l]: [t.id] }), [l, t.id]);
    function p(e) {
        if ((e.stopPropagation(), !m)) {
            let n;
            if (e.shiftKey) return void O(t, l, o);
            (n = N.A.getRole(o)),
                (0, c.qfG)((e) =>
                    (0, i.jsx)(a.Modal, {
                        ...e,
                        title: S.intl.string(S.t["7sFNfW"]),
                        subtitle: S.intl.format(S.t.scORUv, { username: t.name, roleName: n?.name }),
                        actions: [
                            { text: S.intl.string(S.t["ETE/oC"]), variant: "secondary", onClick: e.onClose },
                            {
                                text: S.intl.string(S.t.N86XcP),
                                variant: "critical-primary",
                                onClick: () => {
                                    O(t, l, o), e.onClose();
                                },
                            },
                        ],
                        children: (0, i.jsx)(c.Text, {
                            className: y.Of,
                            color: "text-muted",
                            variant: "text-md/normal",
                            children: S.intl.string(S.t.jxIxJL),
                        }),
                    }),
                );
        }
    }
    function f(e) {
        let s = A.default.getUser(t.id);
        null != s &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("91042"), n.e("2646")]).then(
                    n.bind(n, 365689),
                );
                return (t) => (0, i.jsx)(e, { ...t, user: s, guildId: l, showChatItems: !1 });
            });
    }
    return (
        (0, g.Eq)(h, "GuildSettingsRolesEditMembers"),
        (0, i.jsx)("div", {
            className: R.Q,
            children: (0, i.jsx)(_.A, {
                targetElementRef: x,
                userId: t.id,
                guildId: l,
                roleId: o,
                position: "left",
                children: (e) =>
                    (0, i.jsxs)(c.DUT, {
                        ...e,
                        innerRef: x,
                        className: y.TL,
                        onContextMenu: f,
                        children: [
                            (0, i.jsx)(I.A, {
                                className: y.bu,
                                avatarURL: t.avatarURL,
                                name: t.name,
                                bot: t.bot,
                                verifiedBot: t.verifiedBot,
                                userTag: t.userTag,
                            }),
                            (0, i.jsx)("div", {
                                className: y.O6,
                                children: (0, i.jsx)(d.m, {
                                    text: m ? S.intl.string(S.t.wkrQaK) : S.intl.string(S.t["7sFNfW"]),
                                    position: "top",
                                    children: (0, i.jsx)(c.DUT, {
                                        className: r()(y.DT, { [y.li]: m }),
                                        onClick: p,
                                        children: (0, i.jsx)(c.aXh, { size: "xs", color: "currentColor" }),
                                    }),
                                }),
                            }),
                        ],
                    }),
            }),
        })
    );
}
function L(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, i.jsx)("div", {
        className: R.Q,
        children: (0, i.jsxs)("div", {
            className: r()(y.TL, y.xs),
            children: [
                (0, i.jsx)(c.nFg, { size: "md", color: "currentColor" }),
                (0, i.jsx)(c.Text, {
                    className: y.Tf,
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: S.intl.format(S.t.P9pZOW, {
                        addMembersHook: function (e, s) {
                            return n ? null : (0, i.jsx)(c.MzZ, { onClick: t, children: e }, s);
                        },
                    }),
                }),
            ],
        }),
    });
}
function D(e) {
    let {
            guildId: t,
            roleId: n,
            query: l,
            headerHeight: r,
            locked: a,
            onScroll: o,
            roleMembers: d,
            handleAddClick: u,
        } = e,
        { analyticsLocations: m } = (0, h.Ay)(x.A.MEMBER_LIST),
        g = s.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, E.cG)(t, g);
    let _ = s.useMemo(() => d.filter((e) => (0, E.EF)(g, e)), [d, g]),
        A = s.useMemo(() => _.sort((e, t) => e.name.localeCompare(t.name)), [_]);
    return (0, i.jsx)(h.f5, {
        value: m,
        children: (0, i.jsx)(c.Eie, {
            className: y.p_,
            sections: [Math.max(_.length, 1)],
            sectionHeight: r,
            renderSection: () => (0, i.jsx)("div", { style: { height: r } }, "section"),
            style: { scrollPaddingTop: r },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: s } = e;
                if (0 === A.length) return (0, i.jsx)(L, { handleAddClick: u, locked: a }, "empty");
                let l = A[s];
                return (0, i.jsx)(G, { member: l, guildId: t, roleId: n, locked: a }, l.id);
            },
            onScroll: o,
        }),
    });
}
function M(e) {
    let { query: t, setQuery: n, locked: s, handleAddClick: l } = e;
    return (0, i.jsxs)("div", {
        className: y.MT,
        children: [
            (0, i.jsx)(c.IWV, {
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: S.intl.string(S.t.pYHobK),
                "aria-label": S.intl.string(S.t.pYHobK),
            }),
            (0, i.jsx)(c.Button, {
                onClick: l,
                variant: "primary",
                size: "sm",
                disabled: s,
                text: S.intl.string(S.t.cHszXg),
            }),
        ],
    });
}
function k(e) {
    let { guild: t, role: l, locked: a, setSelectedSection: d } = e,
        [u, m] = s.useState(""),
        { headerHeight: g, headerRef: x } = (0, C.A)(0),
        { scrolledToTop: h, handleScroll: _ } = (0, T.u)(),
        A = l.managed || a,
        j = (0, E.K5)(t.id, l.id),
        N = (0, o.bG)([f.A], () => f.A.getRoleMemberCount(t.id)?.[l.id] ?? 0) > j.length,
        I = () => {
            p.default.track(v.HAw.OPEN_MODAL, {
                type: "Add Role Members",
                location_page: "Role Settings",
                location_section: "Members",
            }),
                (0, c.mMO)(async () => {
                    let { default: e } = await n.e("78708").then(n.bind(n, 66655));
                    return (n) => (0, i.jsx)(e, { ...n, roleId: l.id, guildId: t.id });
                });
        };
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [
            (0, i.jsx)("div", {
                className: y.N1,
                ref: x,
                children: (0, i.jsx)("div", {
                    className: R.Q,
                    children: (0, i.jsxs)("div", {
                        className: r()(R.wx, { [R.l6]: !h }),
                        children: [
                            (0, i.jsx)(T.A, {
                                guild: t,
                                role: l,
                                selectedSection: b.T$.MEMBERS,
                                setSelectedSection: d,
                            }),
                            (0, i.jsx)(M, { query: u, setQuery: m, locked: A, handleAddClick: I }),
                            N
                                ? (0, i.jsx)(c.po8, {
                                      className: y.v6,
                                      messageType: c.YCn.INFO,
                                      children: S.intl.string(S.t.RQxHZ8),
                                  })
                                : null,
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(D, {
                headerHeight: g + 8,
                query: u,
                guildId: t.id,
                roleId: l.id,
                locked: A,
                onScroll: _,
                roleMembers: j,
                handleAddClick: I,
            }),
        ],
    });
}
