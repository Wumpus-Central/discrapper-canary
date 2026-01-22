n.d(t, { Ay: () => M }), n(733351), n(638769), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    c = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(442433),
    f = n(181658),
    g = n(80682),
    b = n(793574),
    m = n(688810),
    p = n(342296),
    x = n(287809),
    h = n(954571),
    j = n(642133),
    O = n(997509),
    y = n(396816),
    v = n(856644),
    A = n(785312),
    E = n(316506),
    N = n(981634),
    _ = n(927573),
    S = n(652215),
    T = n(985018),
    I = n(727938),
    C = n(261223);
function P(e) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function R(e, t, n) {
    let i = e.roles.filter((e) => e !== n);
    try {
        await O.A.updateMemberRoles(t, e.id, i, [], [n]);
    } catch (t) {
        let e = new f.A(t);
        (0, d.qfG)((t) =>
            (0, r.jsx)(
                a.Modal,
                w(P({}, t), {
                    title: T.intl.string(T.t.R0RpRX),
                    actions: [
                        {
                            text: T.intl.string(T.t.BddRzS),
                            variant: "primary",
                            onClick: t.onClose,
                        },
                    ],
                    children: (0, r.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        children: e.getAnyErrorMessage(),
                    }),
                }),
            ),
        );
    }
}
function D(e) {
    let { member: t, guildId: l, roleId: c, locked: f } = e,
        b = i.useRef(null),
        m = i.useMemo(() => ({ [l]: [t.id] }), [l, t.id]);
    function h(e) {
        if ((e.stopPropagation(), !f)) {
            let n;
            if (e.shiftKey) return void R(t, l, c);
            (n = y.A.getRole(c)),
                (0, d.qfG)((e) =>
                    (0, r.jsx)(
                        a.Modal,
                        w(P({}, e), {
                            title: T.intl.string(T.t["7sFNfW"]),
                            subtitle: T.intl.format(T.t.scORUv, {
                                username: t.name,
                                roleName: null == n ? void 0 : n.name,
                            }),
                            actions: [
                                {
                                    text: T.intl.string(T.t["ETE/oC"]),
                                    variant: "secondary",
                                    onClick: e.onClose,
                                },
                                {
                                    text: T.intl.string(T.t.N86XcP),
                                    variant: "critical-primary",
                                    onClick: () => {
                                        R(t, l, c), e.onClose();
                                    },
                                },
                            ],
                            children: (0, r.jsx)(d.Text, {
                                className: I.Of,
                                color: "text-muted",
                                variant: "text-md/normal",
                                children: T.intl.string(T.t.jxIxJL),
                            }),
                        }),
                    ),
                );
        }
    }
    function j(e) {
        let i = x.default.getUser(t.id);
        null != i &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("91042"), n.e("23215")]).then(
                    n.bind(n, 365689),
                );
                return (t) =>
                    (0, r.jsx)(
                        e,
                        w(P({}, t), {
                            user: i,
                            guildId: l,
                            showChatItems: !1,
                        }),
                    );
            });
    }
    return (
        (0, g.E)(m, "GuildSettingsRolesEditMembers"),
        (0, r.jsx)("div", {
            className: C.Q,
            children: (0, r.jsx)(p.A, {
                targetElementRef: b,
                userId: t.id,
                guildId: l,
                roleId: c,
                position: "left",
                children: (e) =>
                    (0, r.jsxs)(
                        d.DUT,
                        w(P({}, e), {
                            innerRef: b,
                            className: I.TL,
                            onContextMenu: j,
                            children: [
                                (0, r.jsx)(N.A, {
                                    className: I.bu,
                                    avatarURL: t.avatarURL,
                                    name: t.name,
                                    bot: t.bot,
                                    verifiedBot: t.verifiedBot,
                                    userTag: t.userTag,
                                }),
                                (0, r.jsx)("div", {
                                    className: I.O6,
                                    children: (0, r.jsx)(o.m, {
                                        text: f ? T.intl.string(T.t.wkrQaK) : T.intl.string(T.t["7sFNfW"]),
                                        position: "top",
                                        children: (0, r.jsx)(d.DUT, {
                                            className: s()(I.DT, { [I.li]: f }),
                                            onClick: h,
                                            children: (0, r.jsx)(d.aXh, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ),
            }),
        })
    );
}
function G(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, r.jsx)("div", {
        className: C.Q,
        children: (0, r.jsxs)("div", {
            className: s()(I.TL, I.xs),
            children: [
                (0, r.jsx)(d.nFg, {
                    size: "md",
                    color: "currentColor",
                }),
                (0, r.jsx)(d.Text, {
                    className: I.Tf,
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: T.intl.format(T.t.P9pZOW, {
                        addMembersHook: function (e, i) {
                            return n
                                ? null
                                : (0, r.jsx)(
                                      d.MzZ,
                                      {
                                          onClick: t,
                                          children: e,
                                      },
                                      i,
                                  );
                        },
                    }),
                }),
            ],
        }),
    });
}
function L(e) {
    let {
            guildId: t,
            roleId: n,
            query: l,
            headerHeight: s,
            locked: a,
            onScroll: c,
            roleMembers: o,
            handleAddClick: u,
        } = e,
        { analyticsLocations: f } = (0, m.Ay)(b.A.MEMBER_LIST),
        g = i.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, v.cG)(t, g);
    let p = i.useMemo(() => o.filter((e) => (0, v.EF)(g, e)), [o, g]),
        x = i.useMemo(() => p.sort((e, t) => e.name.localeCompare(t.name)), [p]);
    return (0, r.jsx)(m.f5, {
        value: f,
        children: (0, r.jsx)(d.Eie, {
            className: I.p_,
            sections: [Math.max(p.length, 1)],
            sectionHeight: s,
            renderSection: () => (0, r.jsx)("div", { style: { height: s } }, "section"),
            style: { scrollPaddingTop: s },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: i } = e;
                if (0 === x.length)
                    return (0, r.jsx)(
                        G,
                        {
                            handleAddClick: u,
                            locked: a,
                        },
                        "empty",
                    );
                let l = x[i];
                return (0, r.jsx)(
                    D,
                    {
                        member: l,
                        guildId: t,
                        roleId: n,
                        locked: a,
                    },
                    l.id,
                );
            },
            onScroll: c,
        }),
    });
}
function k(e) {
    let { query: t, setQuery: n, locked: i, handleAddClick: l } = e;
    return (0, r.jsxs)("div", {
        className: I.MT,
        children: [
            (0, r.jsx)(d.IWV, {
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: T.intl.string(T.t.pYHobK),
                "aria-label": T.intl.string(T.t.pYHobK),
            }),
            (0, r.jsx)(d.Button, {
                onClick: l,
                variant: "primary",
                size: "sm",
                disabled: i,
                text: T.intl.string(T.t.cHszXg),
            }),
        ],
    });
}
function M(e) {
    let { guild: t, role: l, locked: a, setSelectedSection: o } = e,
        [u, f] = i.useState(""),
        { headerHeight: g, headerRef: b } = (0, A.A)(0),
        { scrolledToTop: m, handleScroll: p } = (0, E.u)(),
        x = l.managed || a,
        O = (0, v.K5)(t.id, l.id),
        y =
            (0, c.bG)([j.A], () => {
                var e, n;
                return null != (e = null == (n = j.A.getRoleMemberCount(t.id)) ? void 0 : n[l.id]) ? e : 0;
            }) > O.length,
        N = () => {
            h.default.track(S.HAw.OPEN_MODAL, {
                type: "Add Role Members",
                location_page: "Role Settings",
                location_section: "Members",
            }),
                (0, d.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("72271"), n.e("51711")]).then(n.bind(n, 66655));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            w(P({}, n), {
                                roleId: l.id,
                                guildId: t.id,
                            }),
                        );
                });
        };
    return (0, r.jsxs)("div", {
        className: I.kL,
        children: [
            (0, r.jsx)("div", {
                className: I.N1,
                ref: b,
                children: (0, r.jsx)("div", {
                    className: C.Q,
                    children: (0, r.jsxs)("div", {
                        className: s()(C.wx, { [C.l6]: !m }),
                        children: [
                            (0, r.jsx)(E.A, {
                                guild: t,
                                role: l,
                                selectedSection: _.T$.MEMBERS,
                                setSelectedSection: o,
                            }),
                            (0, r.jsx)(k, {
                                query: u,
                                setQuery: f,
                                locked: x,
                                handleAddClick: N,
                            }),
                            y
                                ? (0, r.jsx)(d.po8, {
                                      className: I.v6,
                                      messageType: d.YCn.INFO,
                                      children: T.intl.string(T.t.RQxHZ8),
                                  })
                                : null,
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(L, {
                headerHeight: g + 8,
                query: u,
                guildId: t.id,
                roleId: l.id,
                locked: x,
                onScroll: p,
                roleMembers: O,
                handleAddClick: N,
            }),
        ],
    });
}
