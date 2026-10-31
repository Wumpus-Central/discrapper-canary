(n.d(t, { default: () => G }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(17928),
    r = n(189213),
    u = n(890497),
    o = n(548118),
    d = n(71393),
    s = n(711014),
    c = n(246338),
    p = n(73153),
    f = n(195880),
    m = n(322227),
    h = n(642785),
    v = n(371169),
    g = n(525530),
    _ = n(809526),
    k = n(105292);
let w = " (Remix)",
    C = new Map();
p.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: n, wsTicket: i } = e;
    C.get(t)?.(n, i);
});
var x = n(625180),
    b = n(457827),
    y = n(373677),
    A = n(754027),
    j = n(939398),
    E = n(165610);
function R(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let n = (0, y.PH)(null, (0, y.hR)(e.preview_supported_surfaces)),
        i = (0, j.h)(null, n, e.remix_preview?.preview_app_channels ?? []),
        l = (0, A.Op)((0, A.jS)(e), n);
    return (
        x.A.launchFrame({
            applicationId: t,
            surface: l,
            launch: null == i ? void 0 : { customId: i },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, b.r)((0, E.VA)(t, l))
    );
}
var I = n(858899),
    S = n(381991);
async function M(e, t) {
    let n = await e.confirm(t);
    return null == n
        ? null
        : (n.ok ? (0, S.Ay)(n.projectId, "remix") : (0, I.P0)({ text: n.message, variant: "critical" }), n);
}
function G(e) {
    let { project: t, currentGuildId: n, transitionState: p, onClose: x } = e,
        [b, y] = l.useState(n),
        [A, j] = l.useState(!1),
        E = l.useMemo(() => {
            let e, n;
            return (
                (e = null),
                (n = !1),
                {
                    confirm: async function (i) {
                        if (n) return null;
                        n = !0;
                        try {
                            e?.guildId !== i &&
                                (e?.abandon(),
                                (e = (function (e, t, n) {
                                    var i;
                                    let l,
                                        a = k.intl.string(_.default.Cn8H0Y),
                                        r = (0, h.gA)(e.id);
                                    r.catch(() => void 0);
                                    let u = null,
                                        o = null,
                                        d = !1,
                                        s = !1;
                                    function c(e) {
                                        return (
                                            (0, m.ensureConnection)(e), (u ??= (0, g.Io)(r, e).catch(() => "rejected"))
                                        );
                                    }
                                    let p = (0, f.m)();
                                    C.set(p, (e, t) => {
                                        (C.delete(p), (o = e), (0, h.vG)(e, t), c(e));
                                    });
                                    let x = (0, v.iR)({
                                        name: ((i = e.name), `${i.slice(0, 128 - w.length)}${w}`),
                                        guild_id: t,
                                        install_scope: e.install_scope,
                                        remix_source_project_id: e.id,
                                        nonce: p,
                                    }).then(
                                        (e) => (
                                            C.delete(p),
                                            null != e.remix_preview &&
                                                ((0, v.A5)(e.id, e.remix_preview), s || (l = n?.(e))),
                                            c(e.id),
                                            e
                                        ),
                                        () => (C.delete(p), null != o && (0, m.closeConnection)(o), null),
                                    );
                                    async function b() {
                                        d = !0;
                                        let e = await x;
                                        if (null == e) return { ok: !1, message: a, kept: !1 };
                                        let n = await c(e.id);
                                        return "unreachable" === n
                                            ? ((u = null), (d = !1), { ok: !1, message: a, kept: !0 })
                                            : "rejected" === n
                                              ? (l?.(),
                                                (0, m.closeConnection)(e.id),
                                                await (0, v.xx)(e.id).catch(() => void 0),
                                                { ok: !1, message: a, kept: !1 })
                                              : { ok: !0, projectId: e.id, guildId: t };
                                    }
                                    return {
                                        guildId: t,
                                        open: b,
                                        abandon: function () {
                                            d ||
                                                s ||
                                                ((s = !0),
                                                x.then((e) => {
                                                    (l?.(), null != e && (0, m.closeConnection)(e.id));
                                                }));
                                        },
                                    };
                                })(t, i, R)));
                            let n = await e.open();
                            return (n.ok || n.kept || (e = null), n);
                        } finally {
                            n = !1;
                        }
                    },
                    dismiss: () => e?.abandon(),
                }
            );
        }, [t]);
    l.useEffect(() => () => E.dismiss(), [E]);
    let I = (0, a.yK)([s.Ay, d.A], () => {
            let e = [];
            for (let t of s.Ay.getFlattenedGuildIds()) {
                let n = d.A.getGuild(t);
                null != n && (0, c.dd)(n, "ConjureRemixModal") && e.push(n);
            }
            return e;
        }),
        S = l.useMemo(
            () =>
                I.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, i.jsx)(o.Ay, { guild: e, size: o.Ay.Sizes.MINI, active: !0 }),
                })),
            [I],
        ),
        G = l.useCallback(async () => {
            j(!0);
            let e = await M(E, b);
            if (null != e) {
                if (e.ok) return void (await x());
                j(!1);
            }
        }, [E, b, x]);
    return (0, i.jsx)(r.a, {
        transitionState: p,
        onClose: x,
        title: k.intl.string(_.default["9wQTdG"]),
        subtitle: k.intl.string(_.default.mUYiYm),
        size: "md",
        actions: [
            { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: x, disabled: A },
            { text: k.intl.string(_.default.XWgAfc), variant: "primary", onClick: G, loading: A },
        ],
        children: (0, i.jsx)(u.Z, {
            selectionMode: "single",
            label: k.intl.string(_.default["maL0+X"]),
            options: S,
            value: b,
            onSelectionChange: y,
            disabled: A,
            fullWidth: !0,
        }),
    });
}
