n.d(t, {
    FG: () => T,
    aV: () => D,
    uD: () => L,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(64700),
    l = n(284009),
    a = n.n(l),
    i = n(311907),
    s = n(562465),
    o = n(73153),
    c = n(608299),
    u = n(155718),
    d = n(444927),
    m = n(163126),
    f = n(358579),
    p = n(956518),
    h = n(706727),
    b = n(961350),
    g = n(734057),
    x = n(31717),
    y = n(696451),
    v = n(967198),
    j = n(522602),
    C = n(486020),
    _ = n(927813),
    A = n(661191),
    O = n(292348),
    E = n(207963),
    S = n(814890),
    N = n(750128),
    I = n(322980),
    P = n(652215),
    w = n(985018);

function T(e) {
    var t;
    let n = (0, E.jc)(),
        r = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === u.I5.ACTION_ROW && r.components[0].id === e;
}

function R(e) {
    return r.useMemo(() => {
        let t = v.A.getGuildId(),
            n = null != t && null != e.bot ? y.Ay.getMember(t, e.bot.id) : void 0,
            r = C.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: r,
            applicationName: (null == n ? void 0 : n.nick) != null ? n.nick : null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, p.Ay)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}

function L(e, t) {
    let { application: n, customId: l, components: a } = e,
        s = (0, m.A)(),
        [u, f] = r.useState(null),
        [p, h] = r.useState(null),
        [b, g] = r.useState({}),
        y = (0, i.bG)([N.A], () => N.A.getModalState(p), [p]),
        v = (0, d.A)(() => new Set()),
        j = r.useCallback(async () => {
            let t;
            if (
                (f(null),
                h(null),
                (t = !0),
                v.forEach((e) => {
                    e() || (t = !1);
                }),
                t)
            ) {
                let t = A.default.fromTimestamp(Date.now());
                h(t), await H(e, s, t);
            }
        }, [s, e, v]);
    r.useEffect(() => {
        y === N.Z.SUCCEEDED &&
            (o.h.dispatch({
                type: "CLEAR_INTERACTION_MODAL_STATE",
                customId: l,
            }),
            c.A.removeFiles(
                e.channelId,
                M(e.channelId, l).map((e) => e.id),
                x.C.InteractionModal,
            ),
            t()),
            y === N.Z.ERRORED && f(w.intl.string(w.t.uJgdEu));
    }, [p, y, t, l, e.channelId]);
    let { applicationIconURL: C, applicationName: _ } = R(n);
    return {
        components: a,
        applicationIconURL: C,
        applicationName: _,
        submissionState: y,
        error: u,
        validators: v,
        validationErrors: b,
        setValidationErrors: g,
        onSubmit: j,
    };
}

function D(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: r, applicationName: l, applicationBaseUrl: i } = R(t),
        s = g.A.getChannel(e.channelId);
    a()(null != s, "channel should not be null");
    let o = {
        instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
        custom_id: n,
        channel_id: e.channelId,
    };
    null != s.guild_id && "" !== s.guild_id && (o.guild_id = s.guild_id);
    let c = new URL(null != i ? i : "");
    return (
        (c.pathname = e.iframePath),
        {
            applicationIconURL: r,
            applicationName: l,
            applicationBaseUrl: i,
            queryParams: o,
            iframeUrl: c.toString(),
        }
    );
}
let k = (e, t, n) =>
    t.map((t) => {
        switch (t.type) {
            case u.I5.ACTION_ROW:
                return {
                    type: t.type,
                    components: k(e, t.components, n),
                };
            case u.I5.TEXT_INPUT: {
                let n = I.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case u.I5.FILE_UPLOAD: {
                var r;
                let l = I.A.getInteractionComponentState(e, t.id),
                    a = (null == l ? void 0 : l.type) === t.type ? l.uploadIds : null;
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values:
                        null != (r = null == a ? void 0 : a.map((e) => n.uploads.findIndex((t) => t.id === e)))
                            ? r
                            : null,
                };
            }
            case u.I5.STRING_SELECT: {
                let n = I.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null,
                };
            }
            case u.I5.USER_SELECT:
            case u.I5.ROLE_SELECT:
            case u.I5.MENTIONABLE_SELECT:
            case u.I5.CHANNEL_SELECT: {
                let n = I.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.selectedOptions.map((e) => e.value) : null,
                };
            }
            case u.I5.TEXT_DISPLAY:
                return {
                    type: t.type,
                };
            case u.I5.LABEL:
                return {
                    type: t.type,
                    component: k(e, [t.component], n)[0],
                };
            case u.I5.RADIO_GROUP: {
                let n = I.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case u.I5.CHECKBOX_GROUP: {
                let n = I.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null,
                };
            }
            case u.I5.CHECKBOX: {
                let n = I.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type && n.value,
                };
            }
            default:
                a()(!1, "unreachable");
        }
    });

function M(e, t) {
    return j.A.getUploads(e, x.C.InteractionModal).filter((e) => {
        var n;
        return (null == (n = (0, S.j2)(e.id)) ? void 0 : n.containerId) === t;
    });
}
async function H(e, t, n) {
    let r = e.channelId,
        l = g.A.getChannel(r);
    a()(null != l, "expected channel");
    let i = M(r, e.customId),
        o = i.length > 0 ? (0, f.A)(i) : void 0;
    (0, h.tU)(n, {
        data: {
            interactionType: u.G4.MODAL_SUBMIT,
            applicationId: e.application.id,
        },
        preflight: o,
    }),
        await o;
    let c = i.map((e, t) => (0, O.OW)(e, t)),
        d = k(e.customId, e.components, {
            uploads: i,
        }),
        m = () => {
            (null != t && t.aborted) ||
                s.Bo.post({
                    url: P.Rsh.INTERACTIONS,
                    body: {
                        type: u.G4.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: l.id,
                        guild_id: l.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: d,
                            attachments: c.length > 0 ? c : void 0,
                        },
                        session_id: b.default.getSessionId(),
                        nonce: n,
                    },
                    signal: t,
                    rejectWithError: !1,
                }).catch((e) => {
                    429 === e.status ? setTimeout(m, e.body.retry_after * _.A.Millis.SECOND) : (0, h.C1)(n);
                });
        };
    m();
}
