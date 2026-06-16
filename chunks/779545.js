l.d(t, { A: () => B });
var n = l(627968),
    i = l(64700),
    C = l(111956),
    s = l.n(C),
    a = l(33851),
    r = l.n(a),
    d = l(136722),
    o = l(702841),
    c = l(192308),
    u = l(534514),
    m = l(892547),
    H = l(922016),
    x = l(821609),
    h = l(112173),
    g = l(576705),
    f = l(504049),
    j = l(151781),
    p = l(221950),
    V = l(735438),
    v = l.n(V),
    M = l(17928),
    A = l(189213),
    L = l(773812),
    b = l(364522),
    D = l(783878),
    R = l(834730),
    E = l(228366),
    N = l(636537),
    S = l(652215);
let Z = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await N.Bo.get({
                url: S.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await N.Bo.get({
            url: S.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    prune: (e, t, l) =>
        N.Bo.post({
            url: S.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
};
var I = l(34457),
    y = l(317525);
function _(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let w = (0, l(353640).v)((e) => ({
    entries: {},
    setPreview(t, l, n, i, C) {
        let s = _(t, l, n);
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
var U = l(375708),
    T = l(104514);
let k = (e) => {
    var t;
    let l,
        { guild: C, transitionState: s, onClose: a } = e,
        [r, d] = i.useState(7),
        [o, c] = i.useState([]),
        { count: u, isLoading: m } =
            ((t = C.id),
            (l = w((e) => {
                let l = _(t, r, o),
                    n = e.entries[l];
                return null != n && Date.now() - n.cachedAt < 36e5 ? n : null;
            })),
            { count: l?.count, isLoading: l?.isFinished === !1 });
    i.useEffect(() => {
        let e = (e) => {
            var t, l;
            if (e.guildId !== C.id || !e.prune.isPreview) return;
            let n = e.prune.days,
                i = e.prune.includeRoles,
                s = Number(e.prune.pruneCount);
            (t = e.guildId), (l = e.prune.isFinished), w.getState().setPreview(t, n, i, s, l);
        };
        return (
            E.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                E.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [C.id, r, o]),
        i.useEffect(() => {
            null == u && Z.updateEstimateV2(C.id, r, o);
        }, [C.id, r, o, u]);
    let H = i.useCallback(() => {
            Z.prune(C.id, r, o), a(), w.getState().clear();
        }, [C.id, r, o, a]),
        x = (0, M.yK)([g.A, y.A], () => {
            let e = g.A.getHighestRole(C);
            return v()(y.A.getSortedRoles(C.id))
                .filter((t) => !(0, I.Oy)(t) && g.A.isRoleHigher(C, e, t))
                .map((e) => {
                    let { id: t, name: l } = e;
                    return { id: t, label: l, value: t };
                })
                .value();
        }, [C]);
    return (0, n.jsx)(A.Modal, {
        title: `${U.intl.string(U.t.zbyz7p)}\u{2014}${null != C ? C.name : ""}`,
        actions: [
            { text: U.intl.string(U.t["ETE/oC"]), onClick: a, variant: "secondary" },
            { text: U.intl.string(U.t["2mIlKQ"]), onClick: H },
        ],
        onClose: async () => {
            await a();
        },
        transitionState: s,
        children: (0, n.jsxs)("div", {
            className: T.Q,
            children: [
                (0, n.jsx)(L.z, {
                    label: U.intl.string(U.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: U.intl.formatToPlainString(U.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: U.intl.formatToPlainString(U.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: (e) => {
                        d(Number(e));
                    },
                }),
                (0, n.jsx)(b.Ip, {
                    className: T.X,
                    children: (0, n.jsx)(D.Z, {
                        selectionMode: "multiple",
                        label: U.intl.string(U.t.buoe17),
                        maxOptionsVisible: 10,
                        value: o,
                        onSelectionChange: (e) => c(e),
                        options: x,
                    }),
                }),
                (0, n.jsx)(R.E, {
                    variant: "text-sm/normal",
                    children:
                        o.length > 0
                            ? U.intl.format(m ? U.t.xSDcLk : U.t["5WxHHp"], { members: u ?? -1, days: r })
                            : U.intl.format(m ? U.t["98cHOp"] : U.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
};
var O = l(779662),
    F = l(818348),
    G = l(825706);
let B = i.forwardRef(function (e, t) {
    let { guild: l } = e,
        C = i.useRef(null),
        a = (0, o.bG)([j.A], () => j.A.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        V = (0, o.bG)([g.A], () => g.A.can(d.kg(F.xB.MANAGE_GUILD, F.xB.KICK_MEMBERS), l)),
        v = i.useCallback(() => {
            null != l && V && (0, c.openModalLazy)(async () => (e) => (0, n.jsx)(k, { ...e, guild: l }));
        }, [l, V]),
        M = (0, o.bG)([j.A], () => j.A.getSearchStateByGuildId(l.id), [l.id], r()),
        A = (0, f.Ks)(l.id),
        [L, b] = i.useState(M.query),
        D = i.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && A(), (0, p.Ld)(l.id, { query: t });
            },
            [l.id, A],
        ),
        R = i.useMemo(() => s()(D, 300), [D]),
        E = i.useCallback(
            (e) => {
                b(e), R(e);
            },
            [R],
        ),
        N = i.useCallback(() => {
            b(""), D("");
        }, [D]);
    return (
        i.useImperativeHandle(t, () => ({
            resetSearchText() {
                b("");
            },
        })),
        (0, n.jsxs)("div", {
            className: G.db,
            children: [
                (0, n.jsx)("div", {
                    className: G.wL,
                    children: a
                        ? (0, n.jsx)(u.D, { variant: "heading-md/medium", children: U.intl.string(U.t.y12ALM) })
                        : (0, n.jsx)(u.D, { variant: "heading-md/medium", children: U.intl.string(U.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: G.Rt,
                    children: (0, n.jsx)("div", {
                        className: G.wL,
                        children: (0, n.jsx)(m.I, {
                            size: "sm",
                            query: L,
                            placeholder: U.intl.string(U.t["NVoAM+"]),
                            onChange: E,
                            onClear: N,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(H.Y, {
                        targetElementRef: C,
                        animation: H.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () => (0, n.jsx)(O.default, { guildId: l.id, onClose: void 0 }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(x.$, {
                                ...l,
                                buttonRef: C,
                                text: U.intl.string(U.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: h.J,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: G.nw,
                    children:
                        V &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: G.__invalid_pruneButton,
                            children: (0, n.jsx)(x.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: U.intl.string(U.t["2mIlKQ"]),
                                onClick: v,
                                "aria-label": U.intl.string(U.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
