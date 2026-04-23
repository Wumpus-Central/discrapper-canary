l.d(t, { A: () => G });
var n = l(627968),
    i = l(64700),
    a = l(111956),
    s = l.n(a),
    C = l(33851),
    r = l.n(C),
    o = l(136722),
    d = l(702841),
    c = l(192308),
    u = l(534514),
    m = l(892547),
    h = l(922016),
    x = l(821609),
    g = l(112173),
    H = l(576705),
    p = l(504049),
    j = l(151781),
    _ = l(221950),
    f = l(735438),
    b = l.n(f),
    v = l(17928),
    A = l(189213),
    V = l(144228),
    L = l(364522),
    D = l(783878),
    R = l(834730),
    M = l(228366),
    E = l(636537),
    N = l(652215);
let I = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await E.Bo.get({
                url: N.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await E.Bo.get({
            url: N.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    prune: (e, t, l) =>
        E.Bo.post({
            url: N.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
};
var S = l(34457),
    y = l(317525);
function Z(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
let w = (0, l(353640).v)((e) => ({
    entries: {},
    setPreview(t, l, n, i, a) {
        let s = Z(t, l, n);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let C = l[s];
            return (
                (null == C || (C.count <= i && !C.isFinished)) &&
                    (l[s] = { count: i, isFinished: a, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
var U = l(985018),
    T = l(104514);
let k = (e) => {
    var t;
    let l,
        { guild: a, transitionState: s, onClose: C } = e,
        [r, o] = i.useState(7),
        [d, c] = i.useState([]),
        { count: u, isLoading: m } =
            ((t = a.id),
            (l = w((e) => {
                let l = Z(t, r, d),
                    n = e.entries[l];
                return null != n && Date.now() - n.cachedAt < 36e5 ? n : null;
            })),
            { count: l?.count, isLoading: l?.isFinished === !1 });
    i.useEffect(() => {
        let e = (e) => {
            var t, l;
            if (e.guildId !== a.id || !e.prune.isPreview) return;
            let n = e.prune.days,
                i = e.prune.includeRoles,
                s = Number(e.prune.pruneCount);
            (t = e.guildId), (l = e.prune.isFinished), w.getState().setPreview(t, n, i, s, l);
        };
        return (
            M.h.subscribe("GUILD_PRUNE_UPDATE", e),
            () => {
                M.h.unsubscribe("GUILD_PRUNE_UPDATE", e);
            }
        );
    }, [a.id, r, d]),
        i.useEffect(() => {
            null == u && I.updateEstimateV2(a.id, r, d);
        }, [a.id, r, d, u]);
    let h = i.useCallback(() => {
            I.prune(a.id, r, d), C(), w.getState().clear();
        }, [a.id, r, d, C]),
        x = (0, v.yK)([H.A, y.A], () => {
            let e = H.A.getHighestRole(a);
            return b()(y.A.getSortedRoles(a.id))
                .filter((t) => !(0, S.Oy)(t) && H.A.isRoleHigher(a, e, t))
                .map((e) => {
                    let { id: t, name: l } = e;
                    return { id: t, label: l, value: t };
                })
                .value();
        }, [a]);
    return (0, n.jsx)(A.Modal, {
        title: `${U.intl.string(U.t.zbyz7p)}—${null != a ? a.name : ""}`,
        actions: [
            { text: U.intl.string(U.t["ETE/oC"]), onClick: C, variant: "secondary" },
            { text: U.intl.string(U.t["2mIlKQ"]), onClick: h },
        ],
        onClose: async () => {
            await C();
        },
        transitionState: s,
        children: (0, n.jsxs)("div", {
            className: T.Q,
            children: [
                (0, n.jsx)(V.z, {
                    label: U.intl.string(U.t.YccTvK),
                    value: String(r),
                    options: [
                        { name: U.intl.formatToPlainString(U.t.FM1dHS, { days: 7 }), value: "7" },
                        { name: U.intl.formatToPlainString(U.t.FM1dHS, { days: 30 }), value: "30" },
                    ],
                    onChange: (e) => {
                        o(Number(e));
                    },
                }),
                (0, n.jsx)(L.Ip, {
                    className: T.X,
                    children: (0, n.jsx)(D.Z, {
                        selectionMode: "multiple",
                        label: U.intl.string(U.t.buoe17),
                        maxOptionsVisible: 10,
                        value: d,
                        onSelectionChange: (e) => c(e),
                        options: x,
                    }),
                }),
                (0, n.jsx)(R.E, {
                    variant: "text-sm/normal",
                    children:
                        d.length > 0
                            ? U.intl.format(m ? U.t.xSDcLk : U.t["5WxHHp"], { members: u ?? -1, days: r })
                            : U.intl.format(m ? U.t["98cHOp"] : U.t.f13az9, { members: u ?? -1, days: r }),
                }),
            ],
        }),
    });
};
var O = l(779662),
    F = l(818348),
    B = l(825706);
let G = i.forwardRef(function (e, t) {
    let { guild: l } = e,
        a = i.useRef(null),
        C = (0, d.bG)([j.A], () => j.A.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        f = (0, d.bG)([H.A], () => H.A.can(o.kg(F.xB.MANAGE_GUILD, F.xB.KICK_MEMBERS), l)),
        b = i.useCallback(() => {
            null != l && f && (0, c.openModalLazy)(async () => (e) => (0, n.jsx)(k, { ...e, guild: l }));
        }, [l, f]),
        v = (0, d.bG)([j.A], () => j.A.getSearchStateByGuildId(l.id), [l.id], r()),
        A = (0, p.Ks)(l.id),
        [V, L] = i.useState(v.query),
        D = i.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && A(), (0, _.Ld)(l.id, { query: t });
            },
            [l.id, A],
        ),
        R = i.useMemo(() => s()(D, 300), [D]),
        M = i.useCallback(
            (e) => {
                L(e), R(e);
            },
            [R],
        ),
        E = i.useCallback(() => {
            L(""), D("");
        }, [D]);
    return (
        i.useImperativeHandle(t, () => ({
            resetSearchText() {
                L("");
            },
        })),
        (0, n.jsxs)("div", {
            className: B.db,
            children: [
                (0, n.jsx)("div", {
                    className: B.wL,
                    children: C
                        ? (0, n.jsx)(u.D, { variant: "heading-md/medium", children: U.intl.string(U.t.y12ALM) })
                        : (0, n.jsx)(u.D, { variant: "heading-md/medium", children: U.intl.string(U.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: B.Rt,
                    children: (0, n.jsx)("div", {
                        className: B.wL,
                        children: (0, n.jsx)(m.I, {
                            size: "sm",
                            query: V,
                            placeholder: U.intl.string(U.t["NVoAM+"]),
                            onChange: M,
                            onClear: E,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(h.Y, {
                        targetElementRef: a,
                        animation: h.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () => (0, n.jsx)(O.default, { guildId: l.id, onClose: void 0 }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(x.$, {
                                ...l,
                                buttonRef: a,
                                text: U.intl.string(U.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: g.J,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: B.nw,
                    children:
                        f &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: B.__invalid_pruneButton,
                            children: (0, n.jsx)(x.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: U.intl.string(U.t["2mIlKQ"]),
                                onClick: b,
                                "aria-label": U.intl.string(U.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
