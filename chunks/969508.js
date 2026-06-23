n.d(e, { FG: () => M, aV: () => B, uD: () => w }), n(323874), n(14289), n(35956);
var a = n(64700),
    l = n(284009),
    i = n.n(l),
    o = n(17928),
    u = n(636537),
    c = n(228366),
    d = n(608299),
    p = n(155718),
    s = n(444927),
    r = n(163126),
    I = n(358579),
    m = n(956518),
    y = n(706727),
    _ = n(495544),
    A = n(734057),
    E = n(31717),
    C = n(696451),
    h = n(967198),
    S = n(522602),
    g = n(486020),
    T = n(927813),
    O = n(935208),
    f = n(292348),
    b = n(298236),
    v = n(814890),
    L = n(750128),
    R = n(138321),
    N = n(652215),
    U = n(375708);
function M(t) {
    let e = (0, b.jc)(),
        n = e?.modal?.components[0];
    return n?.type === p.I5.ACTION_ROW && n.components[0].id === t;
}
function D(t) {
    return a.useMemo(() => {
        let e = h.A.getGuildId(),
            n = null != e && null != t.bot ? C.Ay.getMember(e, t.bot.id) : void 0,
            a = g.Ay.getApplicationIconURL({
                id: t.id,
                icon: t.icon,
                botIconFirst: !0,
                bot: null != n ? t.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: a,
            applicationName: n?.nick != null ? n.nick : null != t.bot ? t.bot.username : t.name,
            applicationBaseUrl: (0, m.Ay)(t.id),
        };
    }, [t.id, t.icon, t.name, t.bot]);
}
function w(t, e) {
    let { application: n, customId: l, components: i } = t,
        u = (0, r.A)(),
        [p, I] = a.useState(null),
        [m, y] = a.useState(null),
        [_, A] = a.useState({}),
        C = (0, o.bG)([L.A], () => L.A.getModalState(m), [m]),
        h = (0, s.A)(() => new Set()),
        S = a.useCallback(async () => {
            let e;
            if (
                (I(null),
                y(null),
                (e = !0),
                h.forEach((t) => {
                    t() || (e = !1);
                }),
                e)
            ) {
                let e = O.default.fromTimestamp(Date.now());
                y(e), await k(t, u, e);
            }
        }, [u, t, h]);
    a.useEffect(() => {
        C === L.Z.SUCCEEDED &&
            (c.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: l }),
            d.A.removeFiles(
                t.channelId,
                G(t.channelId, l).map((t) => t.id),
                E.C.InteractionModal,
            ),
            e()),
            C === L.Z.ERRORED && I(U.intl.string(U.t.uJgdEu));
    }, [m, C, e, l, t.channelId]);
    let { applicationIconURL: g, applicationName: T } = D(n);
    return {
        components: i,
        applicationIconURL: g,
        applicationName: T,
        submissionState: C,
        error: p,
        validators: h,
        validationErrors: _,
        setValidationErrors: A,
        onSubmit: S,
    };
}
function B(t) {
    let { application: e, customId: n } = t,
        { applicationIconURL: a, applicationName: l, applicationBaseUrl: o } = D(e),
        u = A.A.getChannel(t.channelId);
    i()(null != u, "channel should not be null");
    let c = { instance_id: `${t.channelId}:${e.id}:${n}`, custom_id: n, channel_id: t.channelId };
    null != u.guild_id && "" !== u.guild_id && (c.guild_id = u.guild_id);
    let d = new URL(o ?? "");
    return (
        (d.pathname = t.iframePath),
        { applicationIconURL: a, applicationName: l, applicationBaseUrl: o, queryParams: c, iframeUrl: d.toString() }
    );
}
function G(t, e) {
    return S.A.getUploads(t, E.C.InteractionModal).filter((t) => (0, v.j2)(t.id)?.containerId === e);
}
async function k(t, e, n) {
    let a = t.channelId,
        l = A.A.getChannel(a);
    i()(null != l, "expected channel");
    let o = G(a, t.customId),
        c = o.length > 0 ? (0, I.A)(o) : void 0;
    (0, y.tU)(n, { data: { interactionType: p.G4.MODAL_SUBMIT, applicationId: t.application.id }, preflight: c }),
        await c;
    let d = o.map((t, e) => (0, f.OW)(t, e)),
        s = (function t(e, n, a) {
            return n.map((n) => {
                switch (n.type) {
                    case p.I5.ACTION_ROW:
                        return { type: n.type, components: t(e, n.components, a) };
                    case p.I5.TEXT_INPUT: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type ? t.value : null };
                    }
                    case p.I5.FILE_UPLOAD: {
                        let t = R.A.getInteractionComponentState(e, n.id),
                            l = t?.type === n.type ? t.uploadIds : null;
                        return {
                            type: n.type,
                            custom_id: n.customId,
                            values: l?.map((t) => a.uploads.findIndex((e) => e.id === t)) ?? null,
                        };
                    }
                    case p.I5.STRING_SELECT: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, values: t?.type === n.type ? t.values : null };
                    }
                    case p.I5.USER_SELECT:
                    case p.I5.ROLE_SELECT:
                    case p.I5.MENTIONABLE_SELECT:
                    case p.I5.CHANNEL_SELECT: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return {
                            type: n.type,
                            custom_id: n.customId,
                            values: t?.type === n.type ? t.selectedOptions.map((t) => t.value) : null,
                        };
                    }
                    case p.I5.TEXT_DISPLAY:
                        return { type: n.type };
                    case p.I5.LABEL:
                        return { type: n.type, component: t(e, [n.component], a)[0] };
                    case p.I5.RADIO_GROUP: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type ? t.value : null };
                    }
                    case p.I5.CHECKBOX_GROUP: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, values: t?.type === n.type ? t.values : null };
                    }
                    case p.I5.CHECKBOX: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type && t.value };
                    }
                    default:
                        i()(!1, "unreachable");
                }
            });
        })(t.customId, t.components, { uploads: o }),
        r = () => {
            e?.aborted ||
                u.Bo.post({
                    url: N.Rsh.INTERACTIONS,
                    body: {
                        type: p.G4.MODAL_SUBMIT,
                        application_id: t.application.id,
                        channel_id: l.id,
                        guild_id: l.guild_id,
                        data: {
                            id: t.id,
                            custom_id: t.customId,
                            components: s,
                            attachments: d.length > 0 ? d : void 0,
                        },
                        session_id: _.default.getSessionId(),
                        nonce: n,
                    },
                    signal: e,
                    rejectWithError: !1,
                }).catch((t) => {
                    429 === t.status ? setTimeout(r, t.body.retry_after * T.A.Millis.SECOND) : (0, y.C1)(n);
                });
        };
    r();
}
