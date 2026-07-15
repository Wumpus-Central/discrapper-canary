l.d(t, { A: () => q });
var n = l(627968),
    i = l(64700),
    C = l(649852),
    s = l.n(C),
    a = l(811315),
    r = l.n(a),
    d = l(702841),
    o = l(192308),
    c = l(297264),
    u = l(892547),
    m = l(922016),
    H = l(821609),
    x = l(112173),
    h = l(71393),
    g = l(576705),
    f = l(287809),
    j = l(504049),
    p = l(134413),
    V = l(151781),
    v = l(221950),
    A = l(435558),
    M = l.n(A),
    L = l(17928),
    b = l(189213),
    D = l(144228),
    R = l(364522),
    E = l(783878),
    N = l(834730),
    S = l(228366),
    Z = l(636537),
    I = l(652215);
let y = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await Z.Bo.get({
                url: I.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await Z.Bo.get({
            url: I.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    prune: (e, t, l) =>
        Z.Bo.post({
            url: I.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
};
var _ = l(34457),
    w = l(317525);
function U(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let T = (0, l(353640).v)((e) => ({
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
var k = l(375708),
    O = l(104514);
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
    i.useEffect(() => {
        function e(e) {
            var t, l;
            if (e.guildId !== C.id || !e.prune.isPreview) return;
            let n = e.prune.days,
                i = e.prune.includeRoles,
                s = Number(e.prune.pruneCount);
            (t = e.guildId), (l = e.prune.isFinished), T.getState().setPreview(t, n, i, s, l);
        }
        return (
            S.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                S.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [C.id, r, o]),
        i.useEffect(() => {
            null == u && y.updateEstimateV2(C.id, r, o);
        }, [C.id, r, o, u]);
    let H = i.useCallback(() => {
            y.prune(C.id, r, o), a(), T.getState().clear();
        }, [C.id, r, o, a]),
        x = (0, L.yK)([g.A, w.A], () => {
            let e = g.A.getHighestRole(C);
            return M()(w.A.getSortedRoles(C.id))
                .filter((t) => !(0, _.Oy)(t) && g.A.isRoleHigher(C, e, t))
                .map((e) => {
                    let { id: t, name: l } = e;
                    return { id: t, label: l, value: t };
                })
                .value();
        }, [C]);
    return (0, n.jsx)(b.Modal, {
        title: `${k.intl.string(k.t.zbyz7p)}\u{2014}${null != C ? C.name : ""}`,
        actions: [
            { text: k.intl.string(k.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: k.intl.string(k.t["2mIlKQ"]), onClick: H },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: s,
        children: (0, n.jsxs)("div", {
            className: O.Q,
            children: [
                (0, n.jsx)(D.z, {
                    label: k.intl.string(k.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: k.intl.formatToPlainString(k.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: k.intl.formatToPlainString(k.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: function (e) {
                        d(Number(e));
                    },
                }),
                (0, n.jsx)(R.Ip, {
                    className: O.X,
                    children: (0, n.jsx)(E.Z, {
                        selectionMode: "multiple",
                        label: k.intl.string(k.t.buoe17),
                        maxOptionsVisible: 10,
                        value: o,
                        onSelectionChange: (e) => c(e),
                        options: x,
                    }),
                }),
                (0, n.jsx)(N.E, {
                    variant: "text-sm/normal",
                    children:
                        o.length > 0
                            ? k.intl.format(m ? k.t.xSDcLk : k.t["5WxHHp"], { members: u ?? -1, days: r })
                            : k.intl.format(m ? k.t["98cHOp"] : k.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
}
let G = function (e) {
    return (0, L.bG)(
        [h.A, g.A, f.default],
        () => (0, p.dQ)(h.A.getGuild(e.guild.id) ?? e.guild, f.default.getCurrentUser(), g.A),
        [e.guild],
    )
        ? (0, n.jsx)(F, { ...e })
        : null;
};
var B = l(779662),
    P = l(825706);
let q = i.forwardRef(function (e, t) {
    let { guild: l } = e,
        C = i.useRef(null),
        a = (0, d.bG)([V.A], () => V.A.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        A = (0, d.bG)(
            [h.A, g.A, f.default],
            () => (0, p.dQ)(h.A.getGuild(l.id) ?? l, f.default.getCurrentUser(), g.A),
            [l],
        ),
        M = i.useCallback(() => {
            null != l && A && (0, o.openModalLazy)(async () => (e) => (0, n.jsx)(G, { ...e, guild: l }));
        }, [l, A]),
        L = (0, d.bG)([V.A], () => V.A.getSearchStateByGuildId(l.id), [l.id], r()),
        b = (0, j.Ks)(l.id),
        [D, R] = i.useState(L.query),
        E = i.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && b(), (0, v.Ld)(l.id, { query: t });
            },
            [l.id, b],
        ),
        N = i.useMemo(() => s()(E, 300), [E]),
        S = i.useCallback(
            (e) => {
                R(e), N(e);
            },
            [N],
        ),
        Z = i.useCallback(() => {
            R(""), E("");
        }, [E]);
    return (
        i.useImperativeHandle(t, () => ({
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
                        ? (0, n.jsx)(c.D, { variant: "heading-md/medium", children: k.intl.string(k.t.y12ALM) })
                        : (0, n.jsx)(c.D, { variant: "heading-md/medium", children: k.intl.string(k.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: P.Rt,
                    children: (0, n.jsx)("div", {
                        className: P.wL,
                        children: (0, n.jsx)(u.I, {
                            size: "sm",
                            query: D,
                            placeholder: k.intl.string(k.t["NVoAM+"]),
                            onChange: S,
                            onClear: Z,
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
                        renderPopout: () => (0, n.jsx)(B.default, { guildId: l.id, onClose: void 0 }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(H.$, {
                                ...l,
                                buttonRef: C,
                                text: k.intl.string(k.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: x.J,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: P.nw,
                    children:
                        A &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: P.__invalid_pruneButton,
                            children: (0, n.jsx)(H.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: k.intl.string(k.t["2mIlKQ"]),
                                onClick: M,
                                "aria-label": k.intl.string(k.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
