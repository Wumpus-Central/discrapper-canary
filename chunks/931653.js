(i.d(t, { default: () => O }), i(321073));
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
    f = i(319481),
    v = i(382541),
    _ = i(371169),
    g = i(525530),
    C = i(261425),
    m = i(105292);
let w = " (Remix)",
    k = new Map();
p.h.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (e) => {
    let { nonce: t, projectId: i, wsTicket: n } = e;
    k.get(t)?.(i, n);
});
var x = i(625180),
    A = i(457827),
    j = i(373677),
    E = i(754027),
    R = i(939398),
    b = i(165610);
function y(e) {
    let t = e.preview_application_id;
    if (null == t) return () => void 0;
    let i = (0, j.PH)(null, (0, j.hR)(e.preview_supported_surfaces)),
        n = (0, R.h)(null, i, e.remix_preview?.preview_app_channels ?? []),
        l = (0, E.Op)((0, E.jS)(e), i);
    return (
        x.A.launchFrame({
            applicationId: t,
            surface: l,
            launch: null == n ? void 0 : { customId: n },
            showErrorModal: !1,
        }).catch(() => void 0),
        () => (0, A.r)((0, b.VA)(t, l))
    );
}
var I = i(858899),
    S = i(976860),
    M = i(652215),
    G = i(746080);
async function N(e, t) {
    let i = await e.open(t);
    return (
        i.ok
            ? (0, S.pX)(M.BVt.CHANNEL(i.guildId, G.VV.CONJURE, i.projectId))
            : (0, I.P0)({ text: i.message, variant: "critical" }),
        i
    );
}
function O(e) {
    let { project: t, currentGuildId: i, transitionState: p, onClose: x } = e,
        [A, j] = l.useState(i),
        [E, R] = l.useState(!1),
        [b, I] = l.useState(0),
        S = l.useRef(null);
    l.useEffect(() => {
        let e = (function (e, t, i) {
            var n;
            let l,
                a = m.intl.string(C.default.Cn8H0Y),
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
        })(t, i, y);
        return ((S.current = e), () => e.dismiss());
    }, [t, i, b]);
    let M = (0, a.yK)([s.Ay, o.A], () => {
            let e = [];
            for (let t of s.Ay.getFlattenedGuildIds()) {
                let i = o.A.getGuild(t);
                null != i && (0, c.dd)(i, "ConjureRemixModal") && e.push(i);
            }
            return e;
        }),
        G = l.useMemo(
            () =>
                M.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, n.jsx)(u.Ay, { guild: e, size: u.Ay.Sizes.MINI, active: !0 }),
                })),
            [M],
        ),
        O = l.useCallback(async () => {
            if (E || null == S.current) return;
            R(!0);
            let e = await N(S.current, A);
            e.ok ? await x() : (e.kept || I((e) => e + 1), R(!1));
        }, [E, A, x]);
    return (0, n.jsx)(r.a, {
        transitionState: p,
        onClose: x,
        title: m.intl.string(C.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: x, disabled: E },
            { text: m.intl.string(C.default.XWgAfc), variant: "primary", onClick: O, loading: E },
        ],
        children: (0, n.jsx)(d.Z, {
            selectionMode: "single",
            label: m.intl.string(C.default["maL0+X"]),
            options: G,
            value: A,
            onSelectionChange: j,
            disabled: E,
            fullWidth: !0,
        }),
    });
}
