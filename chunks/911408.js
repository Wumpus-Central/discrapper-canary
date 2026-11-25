(n.d(e, { f5: () => w, bO: () => X, At: () => x, jc: () => H, k8: () => b, iP: () => k }), n(938796));
var l = n(477900),
    i = n(582128),
    a = n(127258),
    u = n(855986),
    o = n(73153),
    r = n(155718),
    c = n(964486),
    s = n(870136),
    d = n(436283),
    p = n(337591),
    I = n(964363),
    E = n(857071),
    m = n(406704),
    C = n(734057),
    A = n(696451),
    T = n(834942),
    S = n(287809),
    _ = n(489414),
    g = n(257249),
    f = n(935548),
    h = n(284009),
    y = n.n(h),
    O = n(792996);
function L(t) {
    switch (t.type) {
        case r.I5.BUTTON:
            return t.style !== r.in.LINK;
        case r.I5.MENU_ACTION_ITEM:
            return t.style !== r.Ge.LINK;
        case r.I5.STRING_SELECT:
        case r.I5.USER_SELECT:
        case r.I5.ROLE_SELECT:
        case r.I5.MENTIONABLE_SELECT:
        case r.I5.CHANNEL_SELECT:
            return !0;
        case r.I5.TEXT_INPUT:
        case r.I5.FILE_UPLOAD:
        case r.I5.RADIO_GROUP:
        case r.I5.CHECKBOX_GROUP:
        case r.I5.CHECKBOX:
        default:
            return !1;
    }
}
function N(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = _.BB.NORMAL;
    return (
        null != t &&
            t.state !== p.m.FAILED &&
            (t.data.interactionType === a.G.MESSAGE_COMPONENT && t.data.componentId === e.id
                ? (l = _.BB.LOADING)
                : L(e) && (l = _.BB.DISABLED)),
        n && L(e) && (l = _.BB.DISABLED),
        l
    );
}
function v(t) {
    let e = C.A.getChannel(t),
        n = (0, u.bG)([T.A], () => e?.guild_id == null || T.A.canChatInGuild(e.guild_id), [e]),
        l = (0, u.bG)([E.A], () => e?.guild_id != null && E.A.isLurking(e.guild_id), [e]),
        i = (0, u.bG)([A.Ay, S.default], () => {
            let t = S.default.getCurrentUser();
            return (e?.guild_id != null && null != t ? A.Ay.getMember(e?.guild_id, t.id)?.isPending : null) ?? !1;
        }),
        [, a] = (0, s.c)(e?.guild_id),
        o = (0, m.H_)(e),
        r = (0, m.lK)(e);
    return !!(!n || l || i || (e?.isLockedThread() && !o) || (e?.isArchivedThread() && !r)) || !!a;
}
function R(t, e) {
    let n = (0, u.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]),
        l = v(t.channel_id) || e;
    return i.useCallback((t) => N(n, t, l), [n, l]);
}
function U() {
    return _.BB.NORMAL;
}
function b() {
    let { message: t } = i.useContext(B);
    return i.useCallback(
        (e, n) => {
            if (null == t || null == e.customId) return;
            let l = C.A.getChannel(t.channel_id);
            null != l &&
                (0, I.Gv)({
                    componentType: e.type,
                    messageId: t.id,
                    messageFlags: t.flags,
                    customId: e.customId,
                    componentId: e.id,
                    applicationId: t.applicationId ?? t.author.id,
                    channelId: l.id,
                    guildId: l.guild_id,
                    localState: n,
                });
        },
        [t],
    );
}
function G(t, e) {
    let n = i.useContext(B),
        l = i.useCallback(
            (e) => {
                let l = (function (t, e, n) {
                    switch ((null != e && y()(e.type === t.type, "component type matches state"), t.type)) {
                        case r.I5.BUTTON:
                        case r.I5.MENU_ACTION_ITEM:
                            return null;
                        case r.I5.STRING_SELECT:
                        case r.I5.USER_SELECT:
                        case r.I5.ROLE_SELECT:
                        case r.I5.MENTIONABLE_SELECT:
                        case r.I5.CHANNEL_SELECT:
                            return (function (t, e, n) {
                                let { minValues: l, maxValues: i, required: a } = t,
                                    u =
                                        null == e
                                            ? 0
                                            : e.type === r.I5.STRING_SELECT
                                              ? e.values.length
                                              : e.selectedOptions.length;
                                return 0 === u
                                    ? (0, g.Lr)({ minValues: l, required: a }, n)
                                        ? null
                                        : O.intl.string(O.t.eJEUvD)
                                    : u < l
                                      ? O.intl.formatToPlainString(O.t.Jmwzdx, { count: l })
                                      : u > i
                                        ? O.intl.formatToPlainString(O.t.LDvfRP, { count: i })
                                        : null;
                            })(t, e, n);
                        case r.I5.TEXT_INPUT:
                            return (function (t, e) {
                                let { minLength: n, maxLength: l, required: i } = t;
                                return null == e || 0 === e.value.length
                                    ? i
                                        ? O.intl.string(O.t.eJEUvD)
                                        : null
                                    : e.value.length < n || e.value.length > l
                                      ? O.intl.formatToPlainString(O.t.ONSqYd, { min: n, max: l })
                                      : null;
                            })(t, e);
                        case r.I5.FILE_UPLOAD:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    a = e?.uploadIds.length ?? 0;
                                return 0 === a
                                    ? i
                                        ? O.intl.string(O.t.eJEUvD)
                                        : null
                                    : a < n
                                      ? O.intl.formatToPlainString(O.t.pmAt62, { minValues: n })
                                      : a > l
                                        ? O.intl.formatToPlainString(O.t.dy6viJ, { maxValues: l })
                                        : null;
                            })(t, e);
                        case r.I5.RADIO_GROUP:
                            return (function (t, e) {
                                let { required: n } = t;
                                return null == e || null == e.value ? (n ? O.intl.string(O.t.eJEUvD) : null) : null;
                            })(t, e);
                        case r.I5.CHECKBOX_GROUP:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    a = e?.values.length ?? 0;
                                return 0 === a
                                    ? i
                                        ? O.intl.string(O.t.eJEUvD)
                                        : null
                                    : a < n
                                      ? O.intl.formatToPlainString(O.t.Jmwzdx, { count: n })
                                      : a > l
                                        ? O.intl.formatToPlainString(O.t.LDvfRP, { count: l })
                                        : null;
                            })(t, e);
                        case r.I5.CHECKBOX:
                            return null;
                        default:
                            y()(!1, "missing validator for this component");
                    }
                })(t, e, null != n.modal ? "modal" : "message");
                return (n.setValidationErrors?.((e) => ({ ...e, [t.id]: l })), null == l);
            },
            [t, n],
        );
    return (
        i.useEffect(() => {
            function t() {
                return l(e);
            }
            return (
                n.validators?.add(t),
                () => {
                    n.validators?.delete(t);
                }
            );
        }, [n.validators, l, e, t.id]),
        { error: n.validationErrors?.[t.id] ?? null, validate: l }
    );
}
function P(t, e, n, l) {
    let a = (0, u.bG)([f.A], () => f.A.getInteractionComponentState(t.id, n.id)),
        o = (0, u.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]),
        r = v(t.channel_id) || e,
        c = b(),
        { error: s, validate: p } = G(n, a);
    return {
        state: a,
        executeStateUpdate: i.useCallback((t) => !!p(t) && (c(n, t), !0), [n, c, p]),
        isDisabled: r && L(n),
        visualState: N(o, n, r),
        error: s,
    };
}
function D(t, e, n) {
    let l = (0, u.bG)([f.A], () => f.A.getInteractionComponentState(t.customId, e.id)),
        [a] = i.useState(n),
        { error: r, validate: s } = G(e, l),
        d = i.useCallback(
            (n) =>
                null == n ||
                (o.h.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: t.customId,
                    componentId: e.id,
                    state: n,
                }),
                !!s(n)),
            [t.customId, e.id, s],
        );
    return (
        (0, c.Ay)(() => {
            null == l && d(n);
        }),
        { state: l ?? a ?? null, executeStateUpdate: d, isDisabled: !1, visualState: _.BB.NORMAL, error: r }
    );
}
function M(t) {
    return () => {
        throw Error(`${t} does not support state`);
    };
}
let B = i.createContext(null);
function w(t) {
    let {
            children: e,
            message: n,
            modal: a,
            applicationWidget: u,
            validators: o,
            validationErrors: r,
            setValidationErrors: c,
            shouldDisableInteractiveComponents: s = !1,
        } = t,
        d = i.useMemo(() => {
            if (null != n)
                return {
                    useComponentState: P.bind(null, n, s),
                    useGetActionComponentState: R.bind(null, n, s),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: o,
                    getParents: (t) => (0, g.wT)(n.components, t),
                };
            if (null != a)
                return {
                    useComponentState: D.bind(null, a),
                    useGetActionComponentState: () => U,
                    channelId: a.channelId,
                    containerId: a.customId,
                    modal: a,
                    validators: o,
                    validationErrors: r,
                    setValidationErrors: c,
                    getParents: (t) => (0, g.wT)(a.components, t),
                };
            if (null != u)
                return {
                    useComponentState: M("ApplicationWidget"),
                    useGetActionComponentState: M("ApplicationWidget"),
                    containerId: `app-widget-${u.applicationId}`,
                    applicationWidget: u,
                    validators: o,
                    validationErrors: r,
                    setValidationErrors: c,
                    getParents: () => {
                        throw Error("ApplicationWidget does not support parents");
                    },
                };
            throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
        }, [n, a, u, s, o, r, c]);
    return (0, l.jsx)(B.Provider, { value: d, children: e });
}
function x(t, e) {
    return i.useContext(B).useComponentState(t, e);
}
function k() {
    return i.useContext(B).useGetActionComponentState();
}
function H() {
    return i.useContext(B);
}
function X(t) {
    let e = i.useContext(B);
    return e.validationErrors?.[t.id] ?? null;
}
