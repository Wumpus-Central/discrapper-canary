(i.d(t, { default: () => G }), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(189213),
    d = i(890497),
    u = i(548118),
    o = i(71393),
    s = i(711014),
    c = i(246338),
    p = i(73153),
    h = i(195880),
    f = i(889921),
    v = i(642785),
    _ = i(371169),
    g = i(525530),
    m = i(87501),
    C = i(105292);
let w = " (Remix)",
    k = new Map();
p.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: i, wsTicket: n } = e;
    k.get(t)?.(i, n);
});
var x = i(625180),
    A = i(457827),
    j = i(373677),
    b = i(754027),
    y = i(939398),
    R = i(165610);
function E(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let i = (0, j.PH)(null, (0, j.hR)(e.preview_supported_surfaces)),
        n = (0, y.h)(null, i, e.remix_preview?.preview_app_channels ?? []),
        l = (0, b.Op)((0, b.jS)(e), i);
    return (
        x.A.launchFrame({
            applicationId: t,
            surface: l,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, A.r)((0, R.VA)(t, l))
    );
}
var I = i(858899),
    S = i(381991);
async function M(e, t) {
    let i = await e.open(t);
    return (i.ok ? (0, S.A)(i.projectId) : (0, I.P0)({ text: i.message, variant: "critical" }), i);
}
function G(e) {
    let { project: t, currentGuildId: i, transitionState: p, onClose: x } = e,
        [A, j] = l.useState(i),
        [b, y] = l.useState(!1),
        [R, I] = l.useState(0),
        S = l.useRef(null);
    l.useEffect(() => {
        let e = (function (e, t, i) {
            var n;
            let l,
                a = C.intl.string(m.default.Cn8H0Y),
                r = (0, v.gA)(e.id);
            r.catch(() => void 0);
            let d = null,
                u = null,
                o = !1;
            function s(e) {
                return ((0, f.ensureConnection)(e), (d ??= (0, g.Io)(r, e).catch(() => "rejected")));
            }
            let c = (0, h.m)();
            k.set(c, (e, t) => {
                (k.delete(c), (u = e), (0, v.vG)(e, t), s(e));
            });
            let p = (0, _.iR)({
                name: ((n = e.name), `${n.slice(0, 128 - w.length)}${w}`),
                guild_id: t,
                install_scope: e.install_scope,
                remix_source_project_id: e.id,
                nonce: c,
            }).then(
                (e) => (
                    k.delete(c),
                    null != e.remix_preview && ((0, _.A5)(e.id, e.remix_preview), o || (l = i?.(e))),
                    s(e.id),
                    e
                ),
                () => (k.delete(c), null != u && (0, f.closeConnection)(u), null),
            );
            async function x(e) {
                o = !0;
                let i = await p;
                if (null == i) return { ok: !1, message: a, kept: !1 };
                let n = await s(i.id);
                return "unreachable" === n
                    ? ((d = null), (o = !1), { ok: !1, message: a, kept: !0 })
                    : "rejected" === n
                      ? (l?.(),
                        (0, f.closeConnection)(i.id),
                        await (0, _.xx)(i.id).catch(() => void 0),
                        { ok: !1, message: a, kept: !1 })
                      : e !== t &&
                          (await (0, _.CW)(i.id, { guild_id: e, preview_guild_id: e }).then(
                              () => !0,
                              () => !1,
                          ))
                        ? (l?.(),
                          (0, v.$Y)(i.id),
                          (0, f.closeConnection)(i.id),
                          (0, f.ensureConnection)(i.id),
                          { ok: !0, projectId: i.id, guildId: e })
                        : { ok: !0, projectId: i.id, guildId: t };
            }
            return {
                created: p,
                open: x,
                dismiss: function () {
                    o ||
                        ((o = !0),
                        p.then((e) => {
                            (l?.(), null != e && (0, f.closeConnection)(e.id));
                        }));
                },
            };
        })(t, i, E);
        return ((S.current = e), () => e.dismiss());
    }, [t, i, R]);
    let G = (0, a.yK)([s.Ay, o.A], () => {
            let e = [];
            for (let t of s.Ay.getFlattenedGuildIds()) {
                let i = o.A.getGuild(t);
                null != i && (0, c.dd)(i, "ConjureRemixModal") && e.push(i);
            }
            return e;
        }),
        O = l.useMemo(
            () =>
                G.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(u.Ay, { guild: e, size: u.Ay.Sizes.MINI, active: !0 }),
                })),
            [G],
        ),
        P = l.useCallback(async () => {
            if (b || null == S.current) return;
            y(!0);
            let e = await M(S.current, A);
            e.ok ? await x() : (e.kept || I((e) => e + 1), y(!1));
        }, [b, A, x]);
    return (0, n.jsx)(r.a, {
        transitionState: p,
        onClose: x,
        title: C.intl.string(m.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: x, disabled: b },
            { text: C.intl.string(m.default.XWgAfc), variant: "primary", onClick: P, loading: b },
        ],
        children: (0, n.jsx)(d.Z, {
            selectionMode: "single",
            label: C.intl.string(m.default["maL0+X"]),
            options: O,
            value: A,
            onSelectionChange: j,
            disabled: b,
            fullWidth: !0,
        }),
    });
}
