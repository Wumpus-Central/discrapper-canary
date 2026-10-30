(i.d(t, { default: () => T }), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(189213),
    d = i(331322),
    u = i(834730),
    s = i(890497),
    o = i(548118),
    c = i(71393),
    p = i(711014),
    m = i(246338),
    f = i(73153),
    h = i(195880),
    g = i(322227),
    v = i(642785),
    _ = i(371169),
    x = i(525530),
    C = i(809526),
    k = i(105292);
let w = " (Remix)",
    j = new Map();
f.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: i, wsTicket: n } = e;
    j.get(t)?.(i, n);
});
var A = i(625180),
    b = i(457827),
    y = i(373677),
    E = i(754027),
    R = i(939398),
    I = i(165610);
function S(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let i = (0, y.PH)(null, (0, y.hR)(e.preview_supported_surfaces)),
        n = (0, R.h)(null, i, e.remix_preview?.preview_app_channels ?? []),
        l = (0, E.Op)((0, E.jS)(e), i);
    return (
        A.A.launchFrame({
            applicationId: t,
            surface: l,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, b.r)((0, I.VA)(t, l))
    );
}
var M = i(858899),
    G = i(381991);
async function O(e, t) {
    let i = await e.open(t);
    return (i.ok ? (0, G.Ay)(i.projectId, "remix") : (0, M.P0)({ text: i.message, variant: "critical" }), i);
}
function T(e) {
    let { project: t, currentGuildId: i, transitionState: f, onClose: A } = e,
        [b, y] = l.useState(i),
        [E, R] = l.useState(!1),
        [I, M] = l.useState(0),
        G = l.useRef(null);
    l.useEffect(() => {
        let e = (function (e, t, i) {
            var n;
            let l,
                a = k.intl.string(C.default.Cn8H0Y),
                r = (0, v.gA)(e.id);
            r.catch(() => void 0);
            let d = null,
                u = null,
                s = !1;
            function o(e) {
                return ((0, g.ensureConnection)(e), (d ??= (0, x.Io)(r, e).catch(() => "rejected")));
            }
            let c = (0, h.m)();
            j.set(c, (e, t) => {
                (j.delete(c), (u = e), (0, v.vG)(e, t), o(e));
            });
            let p = (0, _.iR)({
                name: ((n = e.name), `${n.slice(0, 128 - w.length)}${w}`),
                guild_id: t,
                install_scope: e.install_scope,
                remix_source_project_id: e.id,
                nonce: c,
            }).then(
                (e) => (
                    j.delete(c),
                    null != e.remix_preview && ((0, _.A5)(e.id, e.remix_preview), s || (l = i?.(e))),
                    o(e.id),
                    e
                ),
                () => (j.delete(c), null != u && (0, g.closeConnection)(u), null),
            );
            async function m(e) {
                s = !0;
                let i = await p;
                if (null == i) return { ok: !1, message: a, kept: !1 };
                let n = await o(i.id);
                return "unreachable" === n
                    ? ((d = null), (s = !1), { ok: !1, message: a, kept: !0 })
                    : "rejected" === n
                      ? (l?.(),
                        (0, g.closeConnection)(i.id),
                        await (0, _.xx)(i.id).catch(() => void 0),
                        { ok: !1, message: a, kept: !1 })
                      : e !== t &&
                          (await (0, _.CW)(i.id, { guild_id: e, preview_guild_id: e }).then(
                              () => !0,
                              () => !1,
                          ))
                        ? (l?.(),
                          (0, v.$Y)(i.id),
                          (0, g.closeConnection)(i.id),
                          (0, g.ensureConnection)(i.id),
                          { ok: !0, projectId: i.id, guildId: e })
                        : { ok: !0, projectId: i.id, guildId: t };
            }
            return {
                created: p,
                open: m,
                dismiss: function () {
                    s ||
                        ((s = !0),
                        p.then((e) => {
                            (l?.(), null != e && (0, g.closeConnection)(e.id));
                        }));
                },
            };
        })(t, i, S);
        return ((G.current = e), () => e.dismiss());
    }, [t, i, I]);
    let T = (0, a.yK)([p.Ay, c.A], () => {
            let e = [];
            for (let t of p.Ay.getFlattenedGuildIds()) {
                let i = c.A.getGuild(t);
                null != i && (0, m.dd)(i, "ConjureRemixModal") && e.push(i);
            }
            return e;
        }),
        Y = l.useMemo(
            () =>
                T.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(o.Ay, { guild: e, size: o.Ay.Sizes.MINI, active: !0 }),
                })),
            [T],
        ),
        P = l.useCallback(async () => {
            if (E || null == G.current) return;
            R(!0);
            let e = await O(G.current, b);
            e.ok ? await A() : (e.kept || M((e) => e + 1), R(!1));
        }, [E, b, A]);
    return (0, n.jsx)(r.a, {
        transitionState: f,
        onClose: A,
        title: k.intl.string(C.default["9wQTdG"]),
        subtitle: k.intl.string(C.default.mUYiYm),
        size: "md",
        actions: [
            { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: A, disabled: E },
            { text: k.intl.string(C.default.XWgAfc), variant: "primary", onClick: P, loading: E },
        ],
        children: (0, n.jsxs)(d.B, {
            gap: 24,
            children: [
                (0, n.jsxs)(d.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: k.intl.format(C.default.JKN64Y, { name: t.name }),
                        }),
                        (0, n.jsx)(u.E, { variant: "text-md/normal", children: k.intl.string(C.default["fT4+km"]) }),
                    ],
                }),
                (0, n.jsx)(s.Z, {
                    selectionMode: "single",
                    label: k.intl.string(C.default["maL0+X"]),
                    description: k.intl.string(C.default.R2uxWO),
                    options: Y,
                    value: b,
                    onSelectionChange: y,
                    disabled: E,
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
