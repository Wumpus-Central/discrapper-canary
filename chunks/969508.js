n.d(t, { FG: () => b, aV: () => w, uD: () => U }), n(323874), n(14289), n(35956);
var a = n(64700),
    l = n(284009),
    i = n.n(l),
    o = n(17928),
    u = n(636537),
    c = n(228366),
    r = n(608299),
    s = n(155718),
    d = n(444927),
    I = n(163126),
    p = n(358579),
    A = n(956518),
    m = n(706727),
    _ = n(495544),
    E = n(734057),
    h = n(31717),
    C = n(696451),
    y = n(967198),
    T = n(522602),
    N = n(486020),
    O = n(927813),
    M = n(935208),
    g = n(292348),
    f = n(298236),
    R = n(814890),
    v = n(750128),
    S = n(138321),
    L = n(652215),
    D = n(985018);
function b(e) {
    let t = (0, f.jc)(),
        n = t?.modal?.components[0];
    return n?.type === s.I5.ACTION_ROW && n.components[0].id === e;
}
function x(e) {
    return a.useMemo(() => {
        let t = y.A.getGuildId(),
            n = null != t && null != e.bot ? C.Ay.getMember(t, e.bot.id) : void 0,
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
            applicationBaseUrl: (0, A.Ay)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function U(e, t) {
    let { application: n, customId: l, components: i } = e,
        u = (0, I.A)(),
        [s, p] = a.useState(null),
        [A, m] = a.useState(null),
        [_, E] = a.useState({}),
        C = (0, o.bG)([v.A], () => v.A.getModalState(A), [A]),
        y = (0, d.A)(() => new Set()),
        T = a.useCallback(async () => {
            let t;
            if (
                (p(null),
                m(null),
                (t = !0),
                y.forEach((e) => {
                    e() || (t = !1);
                }),
                t)
            ) {
                let t = M.default.fromTimestamp(Date.now());
                m(t), await H(e, u, t);
            }
        }, [u, e, y]);
    a.useEffect(() => {
        C === v.Z.SUCCEEDED &&
            (c.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: l }),
            r.A.removeFiles(
                e.channelId,
                j(e.channelId, l).map((e) => e.id),
                h.C.InteractionModal,
            ),
            t()),
            C === v.Z.ERRORED && p(D.intl.string(D.t.uJgdEu));
    }, [A, C, t, l, e.channelId]);
    let { applicationIconURL: N, applicationName: O } = x(n);
    return {
        components: i,
        applicationIconURL: N,
        applicationName: O,
        submissionState: C,
        error: s,
        validators: y,
        validationErrors: _,
        setValidationErrors: E,
        onSubmit: T,
    };
}
function w(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: a, applicationName: l, applicationBaseUrl: o } = x(t),
        u = E.A.getChannel(e.channelId);
    i()(null != u, "channel should not be null");
    let c = { instance_id: `${e.channelId}:${t.id}:${n}`, custom_id: n, channel_id: e.channelId };
    null != u.guild_id && "" !== u.guild_id && (c.guild_id = u.guild_id);
    let r = new URL(o ?? "");
    return (
        (r.pathname = e.iframePath),
        { applicationIconURL: a, applicationName: l, applicationBaseUrl: o, queryParams: c, iframeUrl: r.toString() }
    );
}
let G = (e, t, n) =>
    t.map((t) => {
        switch (t.type) {
            case s.I5.ACTION_ROW:
                return { type: t.type, components: G(e, t.components, n) };
            case s.I5.TEXT_INPUT: {
                let n = S.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type ? n.value : null };
            }
            case s.I5.FILE_UPLOAD: {
                let a = S.A.getInteractionComponentState(e, t.id),
                    l = a?.type === t.type ? a.uploadIds : null;
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: l?.map((e) => n.uploads.findIndex((t) => t.id === e)) ?? null,
                };
            }
            case s.I5.STRING_SELECT: {
                let n = S.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, values: n?.type === t.type ? n.values : null };
            }
            case s.I5.USER_SELECT:
            case s.I5.ROLE_SELECT:
            case s.I5.MENTIONABLE_SELECT:
            case s.I5.CHANNEL_SELECT: {
                let n = S.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: n?.type === t.type ? n.selectedOptions.map((e) => e.value) : null,
                };
            }
            case s.I5.TEXT_DISPLAY:
                return { type: t.type };
            case s.I5.LABEL:
                return { type: t.type, component: G(e, [t.component], n)[0] };
            case s.I5.RADIO_GROUP: {
                let n = S.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type ? n.value : null };
            }
            case s.I5.CHECKBOX_GROUP: {
                let n = S.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, values: n?.type === t.type ? n.values : null };
            }
            case s.I5.CHECKBOX: {
                let n = S.A.getInteractionComponentState(e, t.id);
                return { type: t.type, custom_id: t.customId, value: n?.type === t.type && n.value };
            }
            default:
                i()(!1, "unreachable");
        }
    });
function j(e, t) {
    return T.A.getUploads(e, h.C.InteractionModal).filter((e) => (0, R.j2)(e.id)?.containerId === t);
}
async function H(e, t, n) {
    let a = e.channelId,
        l = E.A.getChannel(a);
    i()(null != l, "expected channel");
    let o = j(a, e.customId),
        c = o.length > 0 ? (0, p.A)(o) : void 0;
    (0, m.tU)(n, { data: { interactionType: s.G4.MODAL_SUBMIT, applicationId: e.application.id }, preflight: c }),
        await c;
    let r = o.map((e, t) => (0, g.OW)(e, t)),
        d = G(e.customId, e.components, { uploads: o }),
        I = () => {
            t?.aborted ||
                u.Bo.post({
                    url: L.Rsh.INTERACTIONS,
                    body: {
                        type: s.G4.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: l.id,
                        guild_id: l.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: d,
                            attachments: r.length > 0 ? r : void 0,
                        },
                        session_id: _.default.getSessionId(),
                        nonce: n,
                    },
                    signal: t,
                    rejectWithError: !1,
                }).catch((e) => {
                    429 === e.status ? setTimeout(I, e.body.retry_after * O.A.Millis.SECOND) : (0, m.C1)(n);
                });
        };
    I();
}
