(n.d(e, { FG: () => P, aV: () => G, uD: () => B }), n(323874), n(14289), n(35956));
var l = n(582128),
    i = n(284009),
    a = n.n(i),
    u = n(127258),
    o = n(17928),
    r = n(636537),
    d = n(73153),
    s = n(608299),
    c = n(155718),
    p = n(444927),
    I = n(163126),
    E = n(358579),
    m = n(956518),
    T = n(706727),
    g = n(280450),
    A = n(734057),
    C = n(31717),
    S = n(696451),
    _ = n(967198),
    f = n(522602),
    h = n(486020),
    y = n(927813),
    L = n(935208),
    O = n(292348),
    N = n(298236),
    v = n(437517),
    R = n(750128),
    U = n(138321),
    b = n(652215),
    D = n(660183);
function P(t) {
    let e = (0, N.jc)(),
        n = e?.modal?.components[0];
    return (
        (n?.type === c.I5.ACTION_ROW && n.components[0].id === t) || (n?.type === c.I5.LABEL && n.component.id === t)
    );
}
function M(t) {
    return l.useMemo(() => {
        let e = _.A.getGuildId(),
            n = null != e && null != t.bot ? S.Ay.getMember(e, t.bot.id) : void 0,
            l = h.Ay.getApplicationIconURL({
                id: t.id,
                icon: t.icon,
                botIconFirst: !0,
                bot: null != n ? t.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: l,
            applicationName: n?.nick != null ? n.nick : null != t.bot ? t.bot.username : t.name,
            applicationBaseUrl: (0, m.Ay)(t.id),
        };
    }, [t.id, t.icon, t.name, t.bot]);
}
function B(t, e) {
    let { application: n, customId: i, components: a } = t,
        u = (0, I.A)(),
        [r, c] = l.useState(null),
        [E, m] = l.useState(null),
        [T, g] = l.useState({}),
        A = (0, o.bG)([R.A], () => R.A.getModalState(E), [E]),
        S = (0, p.A)(() => new Set()),
        _ = l.useCallback(async () => {
            let e;
            if (
                (c(null),
                m(null),
                (e = !0),
                S.forEach((t) => {
                    t() || (e = !1);
                }),
                e)
            ) {
                let e = L.default.fromTimestamp(Date.now());
                (m(e), await x(t, u, e));
            }
        }, [u, t, S]);
    l.useEffect(() => {
        (A === R.Z.SUCCEEDED &&
            (d.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: i }),
            s.A.removeFiles(
                t.channelId,
                w(t.channelId, i).map((t) => t.id),
                C.C.InteractionModal,
            ),
            e()),
            A === R.Z.ERRORED && c(D.intl.string(D.t.uJgdEu)));
    }, [E, A, e, i, t.channelId]);
    let { applicationIconURL: f, applicationName: h } = M(n);
    return {
        components: a,
        applicationIconURL: f,
        applicationName: h,
        submissionState: A,
        error: r,
        validators: S,
        validationErrors: T,
        setValidationErrors: g,
        onSubmit: _,
    };
}
function G(t) {
    let { application: e, customId: n } = t,
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: u } = M(e),
        o = A.A.getChannel(t.channelId);
    a()(null != o, "channel should not be null");
    let r = { instance_id: `${t.channelId}:${e.id}:${n}`, custom_id: n, channel_id: t.channelId };
    null != o.guild_id && "" !== o.guild_id && (r.guild_id = o.guild_id);
    let d = new URL(u ?? "");
    return (
        (d.pathname = t.iframePath),
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: u, queryParams: r, iframeUrl: d.toString() }
    );
}
function w(t, e) {
    return f.A.getUploads(t, C.C.InteractionModal).filter((t) => (0, v.j2)(t.id)?.containerId === e);
}
async function x(t, e, n) {
    let l = t.channelId,
        i = A.A.getChannel(l);
    a()(null != i, "expected channel");
    let o = w(l, t.customId),
        d = o.length > 0 ? (0, E.A)(o) : void 0;
    ((0, T.tU)(n, { data: { interactionType: u.G.MODAL_SUBMIT, applicationId: t.application.id }, preflight: d }),
        await d);
    let s = o.map((t, e) => (0, O.OW)(t, e)),
        p = (function t(e, n, l) {
            return n.map((n) => {
                switch (n.type) {
                    case c.I5.ACTION_ROW:
                        return { type: n.type, components: t(e, n.components, l) };
                    case c.I5.TEXT_INPUT: {
                        let t = U.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type ? t.value : null };
                    }
                    case c.I5.FILE_UPLOAD: {
                        let t = U.A.getInteractionComponentState(e, n.id),
                            i = t?.type === n.type ? t.uploadIds : null;
                        return {
                            type: n.type,
                            custom_id: n.customId,
                            values: i?.map((t) => l.uploads.findIndex((e) => e.id === t)) ?? null,
                        };
                    }
                    case c.I5.STRING_SELECT: {
                        let t = U.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, values: t?.type === n.type ? t.values : null };
                    }
                    case c.I5.USER_SELECT:
                    case c.I5.ROLE_SELECT:
                    case c.I5.MENTIONABLE_SELECT:
                    case c.I5.CHANNEL_SELECT: {
                        let t = U.A.getInteractionComponentState(e, n.id);
                        return {
                            type: n.type,
                            custom_id: n.customId,
                            values: t?.type === n.type ? t.selectedOptions.map((t) => t.value) : null,
                        };
                    }
                    case c.I5.TEXT_DISPLAY:
                        return { type: n.type };
                    case c.I5.LABEL:
                        return { type: n.type, component: t(e, [n.component], l)[0] };
                    case c.I5.RADIO_GROUP: {
                        let t = U.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type ? t.value : null };
                    }
                    case c.I5.CHECKBOX_GROUP: {
                        let t = U.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, values: t?.type === n.type ? t.values : null };
                    }
                    case c.I5.CHECKBOX: {
                        let t = U.A.getInteractionComponentState(e, n.id);
                        return { type: n.type, custom_id: n.customId, value: t?.type === n.type && t.value };
                    }
                    default:
                        a()(!1, "unreachable");
                }
            });
        })(t.customId, t.components, { uploads: o });
    !(function l() {
        null == i ||
            e?.aborted ||
            r.Bo.post({
                url: b.Rsh.INTERACTIONS,
                body: {
                    type: u.G.MODAL_SUBMIT,
                    application_id: t.application.id,
                    channel_id: i.id,
                    guild_id: i.guild_id,
                    data: { id: t.id, custom_id: t.customId, components: p, attachments: s.length > 0 ? s : void 0 },
                    session_id: g.default.getSessionId(),
                    nonce: n,
                },
                signal: e,
                rejectWithError: !1,
            }).catch((t) => {
                429 === t.status ? setTimeout(l, t.body.retry_after * y.A.Millis.SECOND) : (0, T.C1)(n);
            });
    })();
}
