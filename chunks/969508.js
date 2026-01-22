n.d(t, {
    FG: () => x,
    aV: () => M,
    uD: () => j,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(562465),
    l = n(73153),
    c = n(608299),
    u = n(155718),
    d = n(444927),
    f = n(163126),
    p = n(358579),
    _ = n(956518),
    h = n(706727),
    m = n(961350),
    g = n(734057),
    E = n(31717),
    b = n(696451),
    y = n(967198),
    O = n(522602),
    A = n(486020),
    v = n(927813),
    S = n(661191),
    I = n(292348),
    T = n(207963),
    C = n(814890),
    N = n(750128),
    R = n(322980),
    w = n(652215),
    P = n(985018);
let D = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            e() || (t = !1);
        }),
        t
    );
};
function x(e) {
    var t;
    let n = (0, T.jc)(),
        r = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === u.I5.ACTION_ROW && r.components[0].id === e;
}
function L(e) {
    return r.useMemo(() => {
        let t = y.A.getGuildId(),
            n = null != t && null != e.bot ? b.Ay.getMember(t, e.bot.id) : void 0,
            r = A.Ay.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
                guildMember: n,
            });
        return {
            applicationIconURL: r,
            applicationName: (null == n ? void 0 : n.nick) != null ? n.nick : null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, _.Ay)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function j(e, t) {
    let { application: n, customId: i, components: a } = e,
        o = (0, f.A)(),
        [u, p] = r.useState(null),
        [_, h] = r.useState(null),
        [m, g] = r.useState({}),
        b = (0, s.bG)([N.A], () => N.A.getModalState(_), [_]),
        y = (0, d.A)(() => new Set()),
        O = r.useCallback(async () => {
            if ((p(null), h(null), D(y))) {
                let t = S.default.fromTimestamp(Date.now());
                h(t), await G(e, o, t);
            }
        }, [o, e, y]);
    r.useEffect(() => {
        b === N.Z.SUCCEEDED &&
            (l.h.dispatch({
                type: "CLEAR_INTERACTION_MODAL_STATE",
                customId: i,
            }),
            c.A.removeFiles(
                e.channelId,
                U(e.channelId, i).map((e) => e.id),
                E.C.InteractionModal,
            ),
            t()),
            b === N.Z.ERRORED && p(P.intl.string(P.t.uJgdEu));
    }, [_, b, t, i, e.channelId]);
    let { applicationIconURL: A, applicationName: v } = L(n);
    return {
        components: a,
        applicationIconURL: A,
        applicationName: v,
        submissionState: b,
        error: u,
        validators: y,
        validationErrors: m,
        setValidationErrors: g,
        onSubmit: O,
    };
}
function M(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: r, applicationName: i, applicationBaseUrl: s } = L(t),
        o = g.A.getChannel(e.channelId);
    a()(null != o, "channel should not be null");
    let l = {
        instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
        custom_id: n,
        channel_id: e.channelId,
    };
    null != o.guild_id && "" !== o.guild_id && (l.guild_id = o.guild_id);
    let c = new URL(null != s ? s : "");
    return (
        (c.pathname = e.iframePath),
        {
            applicationIconURL: r,
            applicationName: i,
            applicationBaseUrl: s,
            queryParams: l,
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
                let n = R.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case u.I5.FILE_UPLOAD: {
                var r;
                let i = R.A.getInteractionComponentState(e, t.id),
                    a = (null == i ? void 0 : i.type) === t.type ? i.uploadIds : null;
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
                let n = R.A.getInteractionComponentState(e, t.id);
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
                let n = R.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.selectedOptions.map((e) => e.value) : null,
                };
            }
            case u.I5.TEXT_DISPLAY:
                return { type: t.type };
            case u.I5.LABEL:
                return {
                    type: t.type,
                    component: k(e, [t.component], n)[0],
                };
            case u.I5.RADIO_GROUP: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case u.I5.CHECKBOX_GROUP: {
                let n = R.A.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null,
                };
            }
            case u.I5.CHECKBOX: {
                let n = R.A.getInteractionComponentState(e, t.id);
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
function U(e, t) {
    return O.A.getUploads(e, E.C.InteractionModal).filter((e) => {
        var n;
        return (null == (n = (0, C.j2)(e.id)) ? void 0 : n.containerId) === t;
    });
}
async function G(e, t, n) {
    let r = e.channelId,
        i = g.A.getChannel(r);
    a()(null != i, "expected channel");
    let s = U(r, e.customId),
        l = s.length > 0 ? (0, p.A)(s) : void 0;
    (0, h.tU)(n, {
        data: {
            interactionType: u.G4.MODAL_SUBMIT,
            applicationId: e.application.id,
        },
        preflight: l,
    }),
        await l;
    let c = s.map((e, t) => (0, I.OW)(e, t)),
        d = k(e.customId, e.components, { uploads: s }),
        f = () => {
            (null != t && t.aborted) ||
                o.Bo.post({
                    url: w.Rsh.INTERACTIONS,
                    body: {
                        type: u.G4.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: i.id,
                        guild_id: i.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: d,
                            attachments: c.length > 0 ? c : void 0,
                        },
                        session_id: m.default.getSessionId(),
                        nonce: n,
                    },
                    signal: t,
                    rejectWithError: !1,
                }).catch((e) => {
                    429 === e.status ? setTimeout(f, e.body.retry_after * v.A.Millis.SECOND) : (0, h.C1)(n);
                });
        };
    f();
}
