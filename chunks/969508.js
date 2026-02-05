n.d(t, { FG: () => P, aV: () => U, uD: () => D }), n(323874), n(14289), n(35956);
var l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(311907),
    i = n(562465),
    o = n(73153),
    d = n(608299),
    c = n(155718),
    u = n(444927),
    m = n(163126),
    p = n(358579),
    A = n(956518),
    h = n(706727),
    C = n(961350),
    E = n(734057),
    x = n(31717),
    N = n(696451),
    I = n(967198),
    _ = n(522602),
    f = n(486020),
    g = n(927813),
    T = n(661191),
    v = n(292348),
    j = n(207963),
    S = n(814890),
    O = n(750128),
    R = n(322980),
    y = n(652215),
    b = n(985018);
function P(e) {
    let t = (0, j.jc)(),
        n = t?.modal?.components[0];
    return n?.type === c.I5.ACTION_ROW && n.components[0].id === e;
}
function L(e) {
    return l.useMemo(() => {
        let t = I.A.getGuildId(),
            n = null != t && null != e.bot ? N.Ay.getMember(t, e.bot.id) : void 0,
            l = f.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: l,
            applicationName: n?.nick != null ? n.nick : null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, A.Ay)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function D(e, t) {
    let { application: n, customId: a, components: r } = e,
        i = (0, m.A)(),
        [c, p] = l.useState(null),
        [A, h] = l.useState(null),
        [C, E] = l.useState({}),
        N = (0, s.bG)([O.A], () => O.A.getModalState(A), [A]),
        I = (0, u.A)(() => new Set()),
        _ = l.useCallback(async () => {
            let t;
            if (
                (p(null),
                h(null),
                (t = !0),
                I.forEach((e) => {
                    e() || (t = !1);
                }),
                t)
            ) {
                let t = T.default.fromTimestamp(Date.now());
                h(t), await M(e, i, t);
            }
        }, [i, e, I]);
    l.useEffect(() => {
        N === O.Z.SUCCEEDED &&
            (o.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: a }),
            d.A.removeFiles(
                e.channelId,
                w(e.channelId, a).map((e) => e.id),
                x.C.InteractionModal,
            ),
            t()),
            N === O.Z.ERRORED && p(b.intl.string(b.t.uJgdEu));
    }, [A, N, t, a, e.channelId]);
    let { applicationIconURL: f, applicationName: g } = L(n);
    return {
        components: r,
        applicationIconURL: f,
        applicationName: g,
        submissionState: N,
        error: c,
        validators: I,
        validationErrors: C,
        setValidationErrors: E,
        onSubmit: _,
    };
}
function U(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: l, applicationName: a, applicationBaseUrl: s } = L(t),
        i = E.A.getChannel(e.channelId);
    r()(null != i, "channel should not be null");
    let o = { instance_id: `${e.channelId}:${t.id}:${n}`, custom_id: n, channel_id: e.channelId };
    null != i.guild_id && "" !== i.guild_id && (o.guild_id = i.guild_id);
    let d = new URL(s ?? "");
    return (
        (d.pathname = e.iframePath),
        { applicationIconURL: l, applicationName: a, applicationBaseUrl: s, queryParams: o, iframeUrl: d.toString() }
    );
}
let k = (e, t, n) =>
    t.map((t) => {
        switch (t.type) {
            case c.I5.ACTION_ROW:
                return { type: t.type, components: k(e, t.components, n) };
            case c.I5.TEXT_INPUT: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type ? n.value : null };
            }
            case c.I5.FILE_UPLOAD: {
                let l = R.A.getInteractionComponentState(e, t.id),
                    a = l?.type === t.type ? l.uploadIds : null;
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: a?.map((e) => n.uploads.findIndex((t) => t.id === e)) ?? null,
                };
            }
            case c.I5.STRING_SELECT: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, values: n?.type === t.type ? n.values : null };
            }
            case c.I5.USER_SELECT:
            case c.I5.ROLE_SELECT:
            case c.I5.MENTIONABLE_SELECT:
            case c.I5.CHANNEL_SELECT: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: n?.type === t.type ? n.selectedOptions.map((e) => e.value) : null,
                };
            }
            case c.I5.TEXT_DISPLAY:
                return { type: t.type };
            case c.I5.LABEL:
                return { type: t.type, component: k(e, [t.component], n)[0] };
            case c.I5.RADIO_GROUP: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type ? n.value : null };
            }
            case c.I5.CHECKBOX_GROUP: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, values: n?.type === t.type ? n.values : null };
            }
            case c.I5.CHECKBOX: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type && n.value };
            }
            default:
                r()(!1, "unreachable");
        }
    });
function w(e, t) {
    return _.A.getUploads(e, x.C.InteractionModal).filter((e) => (0, S.j2)(e.id)?.containerId === t);
}
async function M(e, t, n) {
    let l = e.channelId,
        a = E.A.getChannel(l);
    r()(null != a, "expected channel");
    let s = w(l, e.customId),
        o = s.length > 0 ? (0, p.A)(s) : void 0;
    (0, h.tU)(n, { data: { interactionType: c.G4.MODAL_SUBMIT, applicationId: e.application.id }, preflight: o }),
        await o;
    let d = s.map((e, t) => (0, v.OW)(e, t)),
        u = k(e.customId, e.components, { uploads: s }),
        m = () => {
            t?.aborted ||
                i.Bo.post({
                    url: y.Rsh.INTERACTIONS,
                    body: {
                        type: c.G4.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: a.id,
                        guild_id: a.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: u,
                            attachments: d.length > 0 ? d : void 0,
                        },
                        session_id: C.default.getSessionId(),
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
