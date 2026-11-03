l.d(t, { A: () => q });
var n = l(477900),
    i = l(582128),
    C = l(649852),
    s = l.n(C),
    a = l(811315),
    r = l.n(a),
    d = l(702841),
    o = l(192308),
    c = l(534514),
    u = l(683438),
    m = l(265872),
    H = l(821609),
    h = l(112173),
    x = l(71393),
    g = l(576705),
    f = l(287809),
    j = l(504049),
    p = l(134413),
    v = l(151781),
    V = l(221950),
    b = l(435558),
    A = l.n(b),
    M = l(17928),
    L = l(189213),
    D = l(144228),
    R = l(364522),
    E = l(890497),
    S = l(834730),
    N = l(73153),
    y = l(636537),
    Z = l(652215);
let I = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await y.Bo.get({
                url: Z.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: (0, y.fT)(),
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await y.Bo.get({
            url: Z.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, y.fT)(),
        });
    },
    prune: (e, t, l) =>
        y.Bo.post({
            url: Z.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: (0, y.fT)(),
        }),
};
var _ = l(34457),
    w = l(317525);
function U(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let T = (0, l(196765).v)((e) => ({
    entries: {},
    setPreview(t, l, n, i, C) {
        let s = U(t, l, n);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let a = l[s];
            return (
                (null == a || (a.count <= i && !a.isFinished)) &&
                    (l[s] = { count: i, isFinished: C, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
var O = l(105292),
    k = l(208005);
function F(e) {
    var t;
    let l,
        { guild: C, transitionState: s, onClose: a } = e,
        [r, d] = i.useState(7),
        [o, c] = i.useState([]),
        { count: u, isLoading: m } =
            ((t = C.id),
            (l = T((e) => {
                let l = U(t, r, o),
                    n = e.entries[l];
                return null != n && Date.now() - n.cachedAt < 36e5 ? n : null;
            })),
            { count: l?.count, isLoading: l?.isFinished === !1 });
    (i.useEffect(() => {
        function e(e) {
            var t, l;
            if (e.guildId !== C.id || !e.prune.isPreview) return;
            let n = e.prune.days,
                i = e.prune.includeRoles,
                s = Number(e.prune.pruneCount);
            ((t = e.guildId), (l = e.prune.isFinished), T.getState().setPreview(t, n, i, s, l));
        }
        return (
            N.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                N.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [C.id, r, o]),
        i.useEffect(() => {
            null == u && I.updateEstimateV2(C.id, r, o);
        }, [C.id, r, o, u]));
    let H = i.useCallback(() => {
            (I.prune(C.id, r, o), a(), T.getState().clear());
        }, [C.id, r, o, a]),
        h = (0, M.yK)(
            [g.A, w.A],
            () => {
                let e = g.A.getHighestRole(C);
                return A()(w.A.getSortedRoles(C.id))
                    .filter((t) => !(0, _.Oy)(t) && g.A.isRoleHigher(C, e, t))
                    .map((e) => {
                        let { id: t, name: l } = e;
                        return { id: t, label: l, value: t };
                    })
                    .value();
            },
            [C],
        );
    return (0, n.jsx)(L.a, {
        title: `${O.intl.string(O.t.zbyz7p)}\u{2014}${null != C ? C.name : ""}`,
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: O.intl.string(O.t["2mIlKQ"]), onClick: H },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: s,
        children: (0, n.jsxs)("div", {
            className: k.Q,
            children: [
                (0, n.jsx)(D.z, {
                    label: O.intl.string(O.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: O.intl.formatToPlainString(O.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: O.intl.formatToPlainString(O.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: function (e) {
                        d(Number(e));
                    },
                }),
                (0, n.jsx)(R.Ip, {
                    className: k.X,
                    children: (0, n.jsx)(E.Z, {
                        selectionMode: "multiple",
                        label: O.intl.string(O.t.buoe17),
                        maxOptionsVisible: 10,
                        value: o,
                        onSelectionChange: (e) => c(e),
                        options: h,
                    }),
                }),
                (0, n.jsx)(S.E, {
                    variant: "body-sm/normal",
                    children:
                        o.length > 0
                            ? O.intl.format(m ? O.t.xSDcLk : O.t["5WxHHp"], { members: u ?? -1, days: r })
                            : O.intl.format(m ? O.t["98cHOp"] : O.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
}
let G = function (e) {
    return (0, M.bG)(
        [x.A, g.A, f.default],
        () => (0, p.dQ)(x.A.getGuild(e.guild.id) ?? e.guild, f.default.getCurrentUser(), g.A),
        [e.guild],
    )
        ? (0, n.jsx)(F, { ...e })
        : null;
};
var B = l(779662),
    P = l(60433);
let q = function (e) {
    let { guild: t, ref: l } = e,
        C = i.useRef(null),
        a = (0, d.bG)([v.A], () => v.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        b = (0, d.bG)(
            [x.A, g.A, f.default],
            () => (0, p.dQ)(x.A.getGuild(t.id) ?? t, f.default.getCurrentUser(), g.A),
            [t],
        ),
        A = i.useCallback(() => {
            null != t && b && (0, o.openModalLazy)(async () => (e) => (0, n.jsx)(G, { ...e, guild: t }));
        }, [t, b]),
        M = (0, d.bG)([v.A], () => v.A.getSearchStateByGuildId(t.id), [t.id], r()),
        L = (0, j.Ks)(t.id),
        [D, R] = i.useState(M.query),
        E = i.useCallback(
            (e) => {
                let l = e.trim();
                (l.length > 0 && L(), (0, V.Ld)(t.id, { query: l }));
            },
            [t.id, L],
        ),
        S = i.useMemo(() => s()(E, 300), [E]),
        N = i.useCallback(
            (e) => {
                (R(e), S(e));
            },
            [S],
        ),
        y = i.useCallback(() => {
            (R(""), E(""));
        }, [E]);
    return (
        i.useImperativeHandle(l, () => ({
            resetSearchText() {
                R("");
            },
        })),
        (0, n.jsxs)("div", {
            className: P.db,
            children: [
                (0, n.jsx)("div", {
                    className: P.wL,
                    children: a
                        ? (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: O.intl.string(O.t.y12ALM) })
                        : (0, n.jsx)(c.D, { variant: "heading-sm/medium", children: O.intl.string(O.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: P.Rt,
                    children: (0, n.jsx)("div", {
                        className: P.wL,
                        children: (0, n.jsx)(u.I, {
                            size: "sm",
                            query: D,
                            placeholder: O.intl.string(O.t["NVoAM+"]),
                            onChange: N,
                            onClear: y,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(m.Y, {
                        targetElementRef: C,
                        animation: m.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: l } = e;
                            return (0, n.jsx)(B.default, { guildId: t.id, onClose: l });
                        },
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(H.$, {
                                ...l,
                                buttonRef: C,
                                text: O.intl.string(O.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: h.J,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: P.nw,
                    children:
                        b &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: P.__invalid_pruneButton,
                            children: (0, n.jsx)(H.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: O.intl.string(O.t["2mIlKQ"]),
                                onClick: A,
                                "aria-label": O.intl.string(O.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
};
