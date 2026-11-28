t.d(l, { default: () => E });
var n = t(477900),
    a = t(582128),
    i = t(189213),
    u = t(950305),
    s = t(858899),
    r = t(890497),
    o = t(95264),
    d = t(782545),
    c = t(855986),
    f = t(233470),
    g = t(260498),
    p = t(624048),
    m = t(418811),
    v = t(947275),
    h = t(125372),
    S = t(258576),
    k = t(792996);
let C = "personal",
    b = new Map(),
    y = new Map(),
    w = new Map(),
    x = new Set();
function M(e, l) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    for (let n of (null == l ? b.delete(e) : b.set(e, l), t && y.set(e, (y.get(e) ?? 0) + 1), [...x])) n();
}
function A(e) {
    return (x.add(e), () => x.delete(e));
}
function E(e) {
    let { projectId: l, currentGuildId: t, transitionState: x, onClose: E } = e,
        T = (function (e) {
            let l = (0, c.bG)([g.Ay], () => g.Ay.getProject(e), [e]) ?? null,
                t = (0, h.Y3)(e),
                n = a.useSyncExternalStore(A, () => b.get(e) ?? null),
                [i, u] = a.useState(null),
                s = a.useSyncExternalStore(A, () => y.get(e) ?? 0),
                [r] = a.useState(s),
                o = a.useMemo(() => ({ fromServer: l?.install_scope === "guild", guilds: t }), [l?.install_scope, t]),
                { fromServer: d, guilds: x } = n ?? i ?? o,
                [E, T] = a.useState(null),
                _ = a.useSyncExternalStore(A, () => w.get(e) ?? null),
                [j, I] = a.useState(_),
                Y = _ !== j ? (_?.message ?? null) : null,
                L = (E === C ? d : x.some((e) => e.id === E)) ? E : null,
                U = a.useCallback(
                    (l) => {
                        (T(l), I(w.get(e) ?? null));
                    },
                    [e],
                ),
                X = a.useCallback(async () => {
                    let t = L === C,
                        n = x.find((e) => e.id === L);
                    if (null == l || (null == n && !t) || b.has(e)) return null;
                    let a = { fromServer: d, guilds: x };
                    (M(e, a), u(a), I(w.get(e) ?? null), (0, p.u6)(e));
                    try {
                        null == n ? await (0, f.kY)(e) : await (0, f.xo)(e, n.id);
                    } catch (t) {
                        var i;
                        let l;
                        return (
                            (0, p.MX)(e),
                            u(null),
                            (l = null != n && t?.status === 403),
                            (i = k.intl.string(l ? S.default["5SqC1n"] : S.default.A8U0kI)),
                            w.set(e, { message: i }),
                            M(e, null),
                            null
                        );
                    }
                    M(e, null, !0);
                    let s = () => (n?.id, void (0, m.A)(l));
                    if (null == n) {
                        (0, v.Lj)(l, "removed");
                        let t = g.Ay.getIntegrationStatus(e)?.owner_authorization_revoked === !0;
                        return { message: k.intl.string(t ? S.default.BNILnT : S.default.fMcCGp), open: s };
                    }
                    return (
                        (0, v.Lj)(l, d ? "moved" : "added"),
                        { message: k.intl.formatToPlainString(S.default["J/WRVu"], { server: n.name }), open: s }
                    );
                }, [L, d, x, l, e]);
            return {
                project: l,
                fromServer: d,
                guilds: x,
                destination: L,
                pickDestination: U,
                hint: d && null == L ? null : k.intl.string(d && L !== C ? S.default["+4A5Lz"] : S.default["IO+at5"]),
                pending: null != n,
                error: Y,
                movedElsewhere: null == i && s !== r,
                submit: X,
            };
        })(l),
        { project: _, fromServer: j, guilds: I, destination: Y, hint: L, pending: U, error: X, movedElsewhere: z } = T;
    a.useEffect(() => {
        z && E();
    }, [z, E]);
    let G = a.useMemo(
            () => (0, d.A)(j ? { value: C, label: k.intl.string(S.default["4GZfkV"]), leading: u.UserIcon } : null, I),
            [j, I],
        ),
        J = j || I.length > 0;
    return (0, n.jsx)(i.a, {
        transitionState: x,
        onClose: E,
        dismissable: !U,
        size: "md",
        title: k.intl.string(S.default.J9OF2X),
        subtitle: k.intl.format(j ? S.default.CYYB01 : S.default.Tm08Vx, {
            onMakeCopy: function () {
                null == _ || U || (E(), (0, o.A)(_, t));
            },
        }),
        notice: null != X ? { type: "critical", message: X, role: "alert" } : void 0,
        actions: [
            { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: E, disabled: U },
            {
                text: k.intl.string(S.default.J9OF2X),
                variant: "primary",
                onClick: async function () {
                    let e = await T.submit();
                    null != e && (e.open(), (0, s.P0)({ text: e.message, variant: "success" }), E());
                },
                loading: U,
                disabled: null == Y || U,
            },
        ],
        children: (0, n.jsx)(r.Z, {
            selectionMode: "single",
            label: k.intl.string(S.default.wcTYHC),
            placeholder: k.intl.string(S.default["UMvU+1"]),
            options: G,
            value: Y ?? void 0,
            onSelectionChange: T.pickDestination,
            helperText: J ? (L ?? void 0) : k.intl.string(S.default.NXvmoQ),
            disabled: U || !J,
            fullWidth: !0,
        }),
    });
}
