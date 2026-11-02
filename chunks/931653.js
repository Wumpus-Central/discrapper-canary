(l.d(t, { default: () => O }), l(321073));
var n = l(477900),
    i = l(582128),
    a = l(17928),
    r = l(189213),
    u = l(331322),
    o = l(103557),
    d = l(95477),
    s = l(890497),
    c = l(548118),
    p = l(71393),
    f = l(711014),
    h = l(951178),
    m = l(246338),
    g = l(73153),
    v = l(195880),
    C = l(322227),
    k = l(642785),
    _ = l(371169),
    b = l(525530),
    x = l(809526),
    w = l(105292);
let j = " (Copy)",
    y = new Map();
g.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: l, wsTicket: n } = e;
    y.get(t)?.(l, n);
});
var A = l(625180),
    S = l(457827),
    E = l(373677),
    I = l(754027),
    M = l(939398),
    R = l(165610);
function P(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let l = (0, E.PH)(null, (0, E.hR)(e.preview_supported_surfaces)),
        n = (0, M.h)(null, l, e.remix_preview?.preview_app_channels ?? []),
        i = (0, I.Op)((0, I.jS)(e), l);
    return (
        A.A.launchFrame({
            applicationId: t,
            surface: i,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, S.r)((0, R.VA)(t, i))
    );
}
var T = l(858899),
    G = l(381991);
async function N(e, t, l) {
    let n = await e.confirm(t, l);
    return null == n
        ? null
        : (n.ok ? (0, G.A)(n.projectId, "remix") : (0, T.P0)({ text: n.message, variant: "critical" }), n);
}
function O(e) {
    let { project: t, currentGuildId: l, transitionState: g, onClose: A } = e,
        [S, E] = i.useState(l),
        [I, M] = i.useState(""),
        [R, T] = i.useState(() => {
            var e;
            return ((e = t.name), `${e.slice(0, h.eq - j.length)}${j}`);
        }),
        [G, O] = i.useState(!1),
        W = i.useMemo(() => {
            let e, l;
            return (
                (e = null),
                (l = !1),
                {
                    confirm: async function (n, i) {
                        let { name: a, prompt: r } = i;
                        if (l) return null;
                        l = !0;
                        let u = a.trim();
                        try {
                            (e?.guildId !== n || e.name !== u) &&
                                (e?.abandon(),
                                (e = (function (e, t, l, n) {
                                    let i,
                                        a = w.intl.string(x.default.Cn8H0Y),
                                        r = (0, k.gA)(e.id);
                                    r.catch(() => void 0);
                                    let u = null,
                                        o = null,
                                        d = !1,
                                        s = !1;
                                    function c(e) {
                                        return (
                                            (0, C.ensureConnection)(e), (u ??= (0, b.Io)(r, e).catch(() => "rejected"))
                                        );
                                    }
                                    let p = (0, v.m)();
                                    y.set(p, (e, t) => {
                                        (y.delete(p), (o = e), (0, k.vG)(e, t), c(e));
                                    });
                                    let f = (0, _.iR)({
                                        name: l,
                                        guild_id: t,
                                        install_scope: e.install_scope,
                                        remix_source_project_id: e.id,
                                        nonce: p,
                                    }).then(
                                        (e) => (
                                            y.delete(p),
                                            null != e.remix_preview &&
                                                ((0, _.A5)(e.id, e.remix_preview), s || (i = n?.(e))),
                                            c(e.id),
                                            e
                                        ),
                                        () => (y.delete(p), null != o && (0, C.closeConnection)(o), null),
                                    );
                                    async function h() {
                                        d = !0;
                                        let e = await f;
                                        if (null == e) return { ok: !1, message: a, kept: !1 };
                                        let l = await c(e.id);
                                        return "unreachable" === l
                                            ? ((u = null), (d = !1), { ok: !1, message: a, kept: !0 })
                                            : "rejected" === l
                                              ? (i?.(),
                                                (0, C.closeConnection)(e.id),
                                                await (0, _.xx)(e.id).catch(() => void 0),
                                                { ok: !1, message: a, kept: !1 })
                                              : { ok: !0, projectId: e.id, guildId: t };
                                    }
                                    return {
                                        guildId: t,
                                        name: l,
                                        open: h,
                                        abandon: function () {
                                            d ||
                                                s ||
                                                ((s = !0),
                                                f.then((e) => {
                                                    (i?.(), null != e && (0, C.closeConnection)(e.id));
                                                }));
                                        },
                                    };
                                })(t, n, u, P)));
                            let l = await e.open();
                            return (
                                l.ok
                                    ? (0, C.sendUserMessage)(l.projectId, r, void 0, { remix: !0 })
                                    : l.kept || (e = null),
                                l
                            );
                        } finally {
                            l = !1;
                        }
                    },
                    dismiss: () => e?.abandon(),
                }
            );
        }, [t]);
    i.useEffect(() => () => W.dismiss(), [W]);
    let z = (0, a.yK)([f.Ay, p.A], () => {
            let e = [];
            for (let t of f.Ay.getFlattenedGuildIds()) {
                let l = p.A.getGuild(t);
                null != l && (0, m.dd)(l, "ConjureRemixModal") && e.push(l);
            }
            return e;
        }),
        F = i.useMemo(
            () =>
                z.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(c.Ay, { guild: e, size: c.Ay.Sizes.MINI, active: !0 }),
                })),
            [z],
        ),
        q = R.trim().length >= h.c6,
        H = i.useCallback(async () => {
            if (!q) return;
            O(!0);
            let e = await N(W, S, { name: R, prompt: I });
            if (null != e) {
                if (e.ok) return void (await A());
                O(!1);
            }
        }, [W, S, R, q, I, A]);
    return (0, n.jsx)(r.a, {
        transitionState: g,
        onClose: A,
        title: w.intl.string(x.default["276ll6"]),
        subtitle: w.intl.formatToPlainString(x.default["QN8T+C"], { projectName: t.name }),
        size: "md",
        actions: [
            { text: w.intl.string(w.t["ETE/oC"]), variant: "secondary", onClick: A, disabled: G },
            { text: w.intl.string(x.default["276ll6"]), variant: "primary", onClick: H, loading: G, disabled: !q },
        ],
        children: (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, n.jsx)(o.f, {
                    label: w.intl.string(x.default.cvvDlE),
                    placeholder: w.intl.string(x.default.u3W0k0),
                    value: I,
                    onChange: M,
                    autoFocus: !0,
                    disabled: G,
                }),
                (0, n.jsx)(d.k, {
                    label: w.intl.string(x.default.PuVQeX),
                    value: R,
                    onChange: T,
                    maxLength: h.eq,
                    disabled: G,
                    fullWidth: !0,
                }),
                (0, n.jsx)(s.Z, {
                    selectionMode: "single",
                    label: w.intl.string(x.default.cIWtCk),
                    options: F,
                    value: S,
                    onSelectionChange: E,
                    disabled: G,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
