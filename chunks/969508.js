n.d(t, { FG: () => P, aV: () => k, uD: () => D }), n(323874), n(14289), n(35956);
var a = n(64700),
    l = n(284009),
    r = n.n(l),
    i = n(311907),
    s = n(562465),
    o = n(73153),
    d = n(608299),
    c = n(155718),
    u = n(444927),
    m = n(163126),
    _ = n(358579),
    p = n(956518),
    h = n(706727),
    A = n(961350),
    C = n(734057),
    x = n(31717),
    f = n(696451),
    E = n(967198),
    I = n(522602),
    N = n(486020),
    g = n(927813),
    v = n(661191),
    T = n(292348),
    b = n(207963),
    S = n(814890),
    j = n(750128),
    O = n(322980),
    y = n(652215),
    R = n(985018);
function P(e) {
    let t = (0, b.jc)(),
        n = t?.modal?.components[0];
    return n?.type === c.I5.ACTION_ROW && n.components[0].id === e;
}
function L(e) {
    return a.useMemo(() => {
        let t = E.A.getGuildId(),
            n = null != t && null != e.bot ? f.Ay.getMember(t, e.bot.id) : void 0,
            a = N.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: a,
            applicationName: n?.nick != null ? n.nick : null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, p.Ay)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function D(e, t) {
    let { application: n, customId: l, components: r } = e,
        s = (0, m.A)(),
        [c, _] = a.useState(null),
        [p, h] = a.useState(null),
        [A, C] = a.useState({}),
        f = (0, i.bG)([j.A], () => j.A.getModalState(p), [p]),
        E = (0, u.A)(() => new Set()),
        I = a.useCallback(async () => {
            let t;
            if (
                (_(null),
                h(null),
                (t = !0),
                E.forEach((e) => {
                    e() || (t = !1);
                }),
                t)
            ) {
                let t = v.default.fromTimestamp(Date.now());
                h(t), await U(e, s, t);
            }
        }, [s, e, E]);
    a.useEffect(() => {
        f === j.Z.SUCCEEDED &&
            (o.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: l }),
            d.A.removeFiles(
                e.channelId,
                M(e.channelId, l).map((e) => e.id),
                x.C.InteractionModal,
            ),
            t()),
            f === j.Z.ERRORED && _(R.intl.string(R.t.uJgdEu));
    }, [p, f, t, l, e.channelId]);
    let { applicationIconURL: N, applicationName: g } = L(n);
    return {
        components: r,
        applicationIconURL: N,
        applicationName: g,
        submissionState: f,
        error: c,
        validators: E,
        validationErrors: A,
        setValidationErrors: C,
        onSubmit: I,
    };
}
function k(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: a, applicationName: l, applicationBaseUrl: i } = L(t),
        s = C.A.getChannel(e.channelId);
    r()(null != s, "channel should not be null");
    let o = { instance_id: `${e.channelId}:${t.id}:${n}`, custom_id: n, channel_id: e.channelId };
    null != s.guild_id && "" !== s.guild_id && (o.guild_id = s.guild_id);
    let d = new URL(i ?? "");
    return (
        (d.pathname = e.iframePath),
        { applicationIconURL: a, applicationName: l, applicationBaseUrl: i, queryParams: o, iframeUrl: d.toString() }
    );
}
let w = (e, t, n) =>
    t.map((t) => {
        switch (t.type) {
            case c.I5.ACTION_ROW:
                return { type: t.type, components: w(e, t.components, n) };
            case c.I5.TEXT_INPUT: {
                let n = O.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type ? n.value : null };
            }
            case c.I5.FILE_UPLOAD: {
                let a = O.A.getInteractionComponentState(e, t.id),
                    l = a?.type === t.type ? a.uploadIds : null;
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: l?.map((e) => n.uploads.findIndex((t) => t.id === e)) ?? null,
                };
            }
            case c.I5.STRING_SELECT: {
                let n = O.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, values: n?.type === t.type ? n.values : null };
            }
            case c.I5.USER_SELECT:
            case c.I5.ROLE_SELECT:
            case c.I5.MENTIONABLE_SELECT:
            case c.I5.CHANNEL_SELECT: {
                let n = O.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: n?.type === t.type ? n.selectedOptions.map((e) => e.value) : null,
                };
            }
            case c.I5.TEXT_DISPLAY:
                return { type: t.type };
            case c.I5.LABEL:
                return { type: t.type, component: w(e, [t.component], n)[0] };
            case c.I5.RADIO_GROUP: {
                let n = O.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type ? n.value : null };
            }
            case c.I5.CHECKBOX_GROUP: {
                let n = O.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, values: n?.type === t.type ? n.values : null };
            }
            case c.I5.CHECKBOX: {
                let n = O.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type && n.value };
            }
            default:
                r()(!1, "unreachable");
        }
    });
function M(e, t) {
    return I.A.getUploads(e, x.C.InteractionModal).filter((e) => (0, S.j2)(e.id)?.containerId === t);
}
async function U(e, t, n) {
    let a = e.channelId,
        l = C.A.getChannel(a);
    r()(null != l, "expected channel");
    let i = M(a, e.customId),
        o = i.length > 0 ? (0, _.A)(i) : void 0;
    (0, h.tU)(n, { data: { interactionType: c.G4.MODAL_SUBMIT, applicationId: e.application.id }, preflight: o }),
        await o;
    let d = i.map((e, t) => (0, T.OW)(e, t)),
        u = w(e.customId, e.components, { uploads: i }),
        m = () => {
            t?.aborted ||
                s.Bo.post({
                    url: y.Rsh.INTERACTIONS,
                    body: {
                        type: c.G4.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: l.id,
                        guild_id: l.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: u,
                            attachments: d.length > 0 ? d : void 0,
                        },
                        session_id: A.default.getSessionId(),
                        nonce: n,
                    },
                    signal: t,
                    rejectWithError: !1,
                }).catch((e) => {
                    429 === e.status ? setTimeout(m, e.body.retry_after * g.A.Millis.SECOND) : (0, h.C1)(n);
                });
        };
    m();
}
