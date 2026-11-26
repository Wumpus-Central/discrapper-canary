(n(323874), n(14289), n(35956));
var l = n(582128),
    i = n(284009),
    a = n.n(i),
    u = n(127258),
    o = n(855986),
    r = n(620632),
    c = n(73153),
    s = n(608299),
    d = n(155718),
    p = n(444927),
    I = n(163126),
    E = n(358579),
    m = n(956518),
    C = n(706727),
    A = n(46653),
    T = n(734057),
    S = n(31717),
    _ = n(696451),
    g = n(967198),
    f = n(522602),
    h = n(486020),
    y = n(927813),
    O = n(661191),
    L = n(292348),
    N = n(911408),
    v = n(257249),
    R = n(750128),
    U = n(935548),
    b = n(652215),
    G = n(792996);
function P(t) {
    return l.useMemo(() => {
        let e = g.A.getGuildId(),
            n = null != e && null != t.bot ? _.Ay.getMember(e, t.bot.id) : void 0,
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
function D(t, e) {
    return f.A.getUploads(t, S.C.InteractionModal).filter((t) => (0, v.j2)(t.id)?.containerId === e);
}
n.d(
    e,
    {},
    {
        FG: function (t) {
            let e = (0, N.jc)(),
                n = e?.modal?.components[0];
            return (
                (n?.type === d.I5.ACTION_ROW && n.components[0]?.id === t) ||
                (n?.type === d.I5.LABEL && n.component.id === t)
            );
        },
        aV: function (t) {
            let { application: e, customId: n } = t,
                { applicationIconURL: l, applicationName: i, applicationBaseUrl: u } = P(e),
                o = T.A.getChannel(t.channelId);
            a()(null != o, "channel should not be null");
            let r = { instance_id: `${t.channelId}:${e.id}:${n}`, custom_id: n, channel_id: t.channelId };
            null != o.guild_id && "" !== o.guild_id && (r.guild_id = o.guild_id);
            let c = new URL(u ?? "");
            return (
                (c.pathname = t.iframePath),
                {
                    applicationIconURL: l,
                    applicationName: i,
                    applicationBaseUrl: u,
                    queryParams: r,
                    iframeUrl: c.toString(),
                }
            );
        },
        uD: function (t, e) {
            let { application: n, customId: i, components: m } = t,
                _ = (0, I.A)(),
                [g, f] = l.useState(null),
                [h, N] = l.useState(null),
                [v, M] = l.useState({}),
                B = (0, o.bG)([R.A], () => R.A.getModalState(h), [h]),
                w = (0, p.A)(() => new Set()),
                x = l.useCallback(async () => {
                    let e;
                    if (
                        (f(null),
                        N(null),
                        (e = !0),
                        w.forEach((t) => {
                            t() || (e = !1);
                        }),
                        e)
                    ) {
                        let e = O.default.fromTimestamp(Date.now());
                        (N(e),
                            await (async function (t, e, n) {
                                let l = t.channelId,
                                    i = T.A.getChannel(l);
                                a()(null != i, "expected channel");
                                let o = D(l, t.customId),
                                    c = o.length > 0 ? (0, E.A)(o) : void 0;
                                ((0, C.tU)(n, {
                                    data: { interactionType: u.G.MODAL_SUBMIT, applicationId: t.application.id },
                                    preflight: c,
                                }),
                                    await c);
                                let s = o.map((t, e) => (0, L.OW)(t, e)),
                                    p = (function t(e, n, l) {
                                        return n.map((n) => {
                                            switch (n.type) {
                                                case d.I5.ACTION_ROW:
                                                    return { type: n.type, components: t(e, n.components, l) };
                                                case d.I5.TEXT_INPUT: {
                                                    let t = U.A.getInteractionComponentState(e, n.id);
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        value: t?.type === n.type ? t.value : null,
                                                    };
                                                }
                                                case d.I5.FILE_UPLOAD: {
                                                    let t = U.A.getInteractionComponentState(e, n.id),
                                                        i = t?.type === n.type ? t.uploadIds : null;
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        values:
                                                            i?.map((t) => l.uploads.findIndex((e) => e.id === t)) ??
                                                            null,
                                                    };
                                                }
                                                case d.I5.STRING_SELECT: {
                                                    let t = U.A.getInteractionComponentState(e, n.id);
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        values: t?.type === n.type ? t.values : null,
                                                    };
                                                }
                                                case d.I5.USER_SELECT:
                                                case d.I5.ROLE_SELECT:
                                                case d.I5.MENTIONABLE_SELECT:
                                                case d.I5.CHANNEL_SELECT: {
                                                    let t = U.A.getInteractionComponentState(e, n.id);
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        values:
                                                            t?.type === n.type
                                                                ? t.selectedOptions.map((t) => t.value)
                                                                : null,
                                                    };
                                                }
                                                case d.I5.TEXT_DISPLAY:
                                                    return { type: n.type };
                                                case d.I5.LABEL:
                                                    return { type: n.type, component: t(e, [n.component], l)[0] };
                                                case d.I5.RADIO_GROUP: {
                                                    let t = U.A.getInteractionComponentState(e, n.id);
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        value: t?.type === n.type ? t.value : null,
                                                    };
                                                }
                                                case d.I5.CHECKBOX_GROUP: {
                                                    let t = U.A.getInteractionComponentState(e, n.id);
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        values: t?.type === n.type ? t.values : null,
                                                    };
                                                }
                                                case d.I5.CHECKBOX: {
                                                    let t = U.A.getInteractionComponentState(e, n.id);
                                                    return {
                                                        type: n.type,
                                                        custom_id: n.customId,
                                                        value: t?.type === n.type && t.value,
                                                    };
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
                                                data: {
                                                    id: t.id,
                                                    custom_id: t.customId,
                                                    components: p,
                                                    attachments: s.length > 0 ? s : void 0,
                                                },
                                                session_id: A.default.getSessionId(),
                                                nonce: n,
                                            },
                                            signal: e,
                                            rejectWithError: !1,
                                        }).catch((t) => {
                                            429 === t.status
                                                ? setTimeout(l, t.body.retry_after * y.A.Millis.SECOND)
                                                : (0, C.C1)(n);
                                        });
                                })();
                            })(t, _, e));
                    }
                }, [_, t, w]);
            l.useEffect(() => {
                (B === R.Z.SUCCEEDED &&
                    (c.h.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId: i }),
                    s.A.removeFiles(
                        t.channelId,
                        D(t.channelId, i).map((t) => t.id),
                        S.C.InteractionModal,
                    ),
                    e()),
                    B === R.Z.ERRORED && f(G.intl.string(G.t.uJgdEu)));
            }, [h, B, e, i, t.channelId]);
            let { applicationIconURL: k, applicationName: H } = P(n);
            return {
                components: m,
                applicationIconURL: k,
                applicationName: H,
                submissionState: B,
                error: g,
                validators: w,
                validationErrors: v,
                setValidationErrors: M,
                onSubmit: x,
            };
        },
    },
);
