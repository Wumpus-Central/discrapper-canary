n.d(e, { FG: () => D, aV: () => G, uD: () => M }), n(323874), n(14289), n(35956);
var l = n(582128),
    i = n(284009),
    a = n.n(i),
    u = n(17928),
    o = n(562465),
    r = n(228366),
    d = n(608299),
    s = n(155718),
    c = n(444927),
    p = n(163126),
    I = n(358579),
    E = n(956518),
    m = n(706727),
    T = n(280450),
    g = n(734057),
    A = n(31717),
    C = n(696451),
    S = n(967198),
    _ = n(522602),
    f = n(486020),
    h = n(927813),
    y = n(935208),
    O = n(292348),
    L = n(298236),
    N = n(814890),
    v = n(750128),
    R = n(138321),
    U = n(652215),
    b = n(375708);
function D(t) {
    let e = (0, L.jc)(),
        n = e?.modal?.components[0];
    return n?.type === s.I5.ACTION_ROW && n.components[0].id === t;
}
function P(t) {
    return l.useMemo(() => {
        let e = S.A.getGuildId(),
            n = null != e && null != t.bot ? C.Ay.getMember(e, t.bot.id) : void 0,
            l = f.Ay.getApplicationIconURL({
                id: t.id,
                icon: t.icon,
                botIconFirst: !0,
                bot: null != n ? t.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: l,
            applicationName: n?.nick != null ? n.nick : null != t.bot ? t.bot.username : t.name,
            applicationBaseUrl: (0, E.Ay)(t.id),
        };
    }, [t.id, t.icon, t.name, t.bot]);
}
function M(t, e) {
    let { application: n, customId: i, components: a } = t,
        o = (0, p.A)(),
        [s, I] = l.useState(null),
        [E, m] = l.useState(null),
        [T, g] = l.useState({}),
        C = (0, u.bG)([v.A], () => v.A.getModalState(E), [E]),
        S = (0, c.A)(() => new Set()),
        _ = l.useCallback(async () => {
            let e;
            if (
                (I(null),
                m(null),
                (e = !0),
                S.forEach((t) => {
                    t() || (e = !1);
                }),
                e)
            ) {
                let e = y.default.fromTimestamp(Date.now());
                m(e), await w(t, o, e);
            }
        }, [o, t, S]);
    l.useEffect(() => {
        C === v.Z.SUCCEEDED &&
            (r.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: i }),
            d.A.removeFiles(
                t.channelId,
                B(t.channelId, i).map((t) => t.id),
                A.C.InteractionModal,
            ),
            e()),
            C === v.Z.ERRORED && I(b.intl.string(b.t.uJgdEu));
    }, [E, C, e, i, t.channelId]);
    let { applicationIconURL: f, applicationName: h } = P(n);
    return {
        components: a,
        applicationIconURL: f,
        applicationName: h,
        submissionState: C,
        error: s,
        validators: S,
        validationErrors: T,
        setValidationErrors: g,
        onSubmit: _,
    };
}
function G(t) {
    let { application: e, customId: n } = t,
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: u } = P(e),
        o = g.A.getChannel(t.channelId);
    a()(null != o, "channel should not be null");
    let r = { instance_id: `${t.channelId}:${e.id}:${n}`, custom_id: n, channel_id: t.channelId };
    null != o.guild_id && "" !== o.guild_id && (r.guild_id = o.guild_id);
    let d = new URL(u ?? "");
    return (
        (d.pathname = t.iframePath),
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: u, queryParams: r, iframeUrl: d.toString() }
    );
}
function B(t, e) {
    return _.A.getUploads(t, A.C.InteractionModal).filter((t) => (0, N.j2)(t.id)?.containerId === e);
}
async function w(t, e, n) {
    let l = t.channelId,
        i = g.A.getChannel(l);
    a()(null != i, "expected channel");
    let u = B(l, t.customId),
        r = u.length > 0 ? (0, I.A)(u) : void 0;
    (0, m.tU)(n, { data: { interactionType: s.G4.MODAL_SUBMIT, applicationId: t.application.id }, preflight: r }),
        await r;
    let d = u.map((t, e) => (0, O.OW)(t, e)),
        c = (function t(e, n, l) {
            return n.map((n) => {
                switch (n.type) {
                    case s.I5.ACTION_ROW:
                        return { type: n.type, components: t(e, n.components, l) };
                    case s.I5.TEXT_INPUT: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type ? t.value : null };
                    }
                    case s.I5.FILE_UPLOAD: {
                        let t = R.A.getInteractionComponentState(e, n.id),
                            i = t?.type === n.type ? t.uploadIds : null;
                        return {
                            type: n.type,
                            custom_id: n.customId,
                            values: i?.map((t) => l.uploads.findIndex((e) => e.id === t)) ?? null,
                        };
                    }
                    case s.I5.STRING_SELECT: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, values: t?.type === n.type ? t.values : null };
                    }
                    case s.I5.USER_SELECT:
                    case s.I5.ROLE_SELECT:
                    case s.I5.MENTIONABLE_SELECT:
                    case s.I5.CHANNEL_SELECT: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return {
                            type: n.type,
                            custom_id: n.customId,
                            values: t?.type === n.type ? t.selectedOptions.map((t) => t.value) : null,
                        };
                    }
                    case s.I5.TEXT_DISPLAY:
                        return { type: n.type };
                    case s.I5.LABEL:
                        return { type: n.type, component: t(e, [n.component], l)[0] };
                    case s.I5.RADIO_GROUP: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type ? t.value : null };
                    }
                    case s.I5.CHECKBOX_GROUP: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, values: t?.type === n.type ? t.values : null };
                    }
                    case s.I5.CHECKBOX: {
                        let t = R.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type && t.value };
                    }
                    default:
                        a()(!1, "unreachable");
                }
            });
        })(t.customId, t.components, { uploads: u });
    !(function l() {
        null == i ||
            e?.aborted ||
            o.Bo.post({
                url: U.Rsh.INTERACTIONS,
                body: {
                    type: s.G4.MODAL_SUBMIT,
                    application_id: t.application.id,
                    channel_id: i.id,
                    guild_id: i.guild_id,
                    data: { id: t.id, custom_id: t.customId, components: c, attachments: d.length > 0 ? d : void 0 },
                    session_id: T.default.getSessionId(),
                    nonce: n,
                },
                signal: e,
                rejectWithError: !1,
            }).catch((t) => {
                429 === t.status ? setTimeout(l, t.body.retry_after * h.A.Millis.SECOND) : (0, m.C1)(n);
            });
    })();
}
