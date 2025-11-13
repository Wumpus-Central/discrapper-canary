n.d(t, {
    CJ: () => G,
    Ee: () => U,
    Il: () => k,
    h4: () => B,
}),
    n(388685),
    n(997841),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(570140),
    s = n(911969),
    l = n(493773),
    c = n(71619),
    u = n(282397),
    d = n(622449),
    f = n(188597),
    _ = n(41776),
    p = n(665906),
    h = n(592125),
    m = n(271383),
    g = n(607744),
    E = n(594174),
    b = n(280501),
    y = n(292419),
    O = n(892902),
    v = n(359232);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
        switch (e.type) {
            case s.re.BUTTON:
                return e.style !== s.ZJ.LINK;
            case s.re.STRING_SELECT:
            case s.re.USER_SELECT:
            case s.re.ROLE_SELECT:
            case s.re.MENTIONABLE_SELECT:
            case s.re.CHANNEL_SELECT:
                return !0;
            case s.re.ACTION_ROW:
            case s.re.TEXT_INPUT:
            default:
                return !1;
        }
    },
    N = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = b.gH.NORMAL;
        return (
            null != e &&
                e.state !== d.F.FAILED &&
                (e.data.interactionType === s.B8.MESSAGE_COMPONENT && e.data.componentId === t.id
                    ? (r = b.gH.LOADING)
                    : C(t) && (r = b.gH.DISABLED)),
            n && C(t) && (r = b.gH.DISABLED),
            r
        );
    };
function R(e) {
    return "app-widget-".concat(e.applicationId);
}
let P = (e) => {
    let t = h.Z.getChannel(e),
        n = (0, a.e7)([g.Z], () => (null == t ? void 0 : t.guild_id) == null || g.Z.canChatInGuild(t.guild_id), [t]),
        r = (0, a.e7)([_.Z], () => (null == t ? void 0 : t.guild_id) != null && _.Z.isLurking(t.guild_id), [t]),
        i = (0, a.e7)([m.ZP, E.default], () => {
            var e, n;
            let r = E.default.getCurrentUser();
            return (
                null !=
                    (n =
                        (null == t ? void 0 : t.guild_id) != null && null != r
                            ? null == (e = m.ZP.getMember(null == t ? void 0 : t.guild_id, r.id))
                                ? void 0
                                : e.isPending
                            : null) && n
            );
        }),
        [, o] = (0, c.AB)(null == t ? void 0 : t.guild_id),
        s = (0, p.tc)(t);
    return (
        !!(
            !n ||
            r ||
            i ||
            (null == t ? void 0 : t.isLockedThread()) ||
            ((null == t ? void 0 : t.isArchivedThread()) && !s)
        ) || !!o
    );
};
function D(e, t) {
    var n, r;
    let a = i.useContext(j),
        o = i.useCallback(
            (t) => {
                var n;
                let r = (0, v.Z)(e, t, null != a.modal ? "modal" : "message");
                return null == (n = a.setValidationErrors) || n.call(a, (t) => A(T({}, t), { [e.id]: r })), null == r;
            },
            [e, a],
        );
    return (
        i.useEffect(() => {
            var e;
            let n = () => o(t);
            return (
                null == (e = a.validators) || e.add(n),
                () => {
                    var e;
                    null == (e = a.validators) || e.delete(n);
                }
            );
        }, [a.validators, o, t, e.id]),
        {
            error: null != (r = null == (n = a.validationErrors) ? void 0 : n[e.id]) ? r : null,
            validate: o,
        }
    );
}
function w(e, t, n, r) {
    var o;
    let s = (0, a.e7)([O.Z], () => O.Z.getInteractionComponentState(e.id, n.id)),
        l = (0, a.e7)([u.ZP], () => u.ZP.getInteraction(e), [e]),
        c = P(e.channel_id) || t,
        { error: d, validate: _ } = D(n, s),
        p = null != (o = e.applicationId) ? o : e.author.id;
    return {
        state: s,
        executeStateUpdate: i.useCallback(
            (t) => {
                if (!_(t)) return !1;
                let r = h.Z.getChannel(e.channel_id);
                return (
                    null != r &&
                        null != n.customId &&
                        (0, f.tM)({
                            componentType: n.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: p,
                            channelId: r.id,
                            guildId: r.guild_id,
                            localState: t,
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, p, _],
        ),
        isDisabled: c && C(n),
        visualState: N(l, n, c),
        error: d,
    };
}
function x(e, t, n) {
    let r = (0, a.e7)([O.Z], () => O.Z.getInteractionComponentState(e.customId, t.id)),
        { error: s, validate: c } = D(t, r),
        u = i.useCallback(
            (n) =>
                null == n ||
                (o.Z.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n,
                }),
                !!c(n)),
            [e.customId, t.id, c],
        );
    return (
        (0, l.ZP)(() => {
            u(n);
        }),
        {
            state: r,
            executeStateUpdate: u,
            isDisabled: !1,
            visualState: b.gH.NORMAL,
            error: s,
        }
    );
}
function L(e) {
    return () => {
        throw Error("".concat(e, " does not support state"));
    };
}
function M(e) {
    return () => {
        throw Error("".concat(e, " does not support parents"));
    };
}
let j = i.createContext(null);
function k(e) {
    let {
            children: t,
            message: n,
            modal: a,
            applicationWidget: o,
            validators: s,
            validationErrors: l,
            setValidationErrors: c,
            shouldDisableInteractiveComponents: u = !1,
        } = e,
        d = i.useMemo(() => {
            if (null != n)
                return {
                    useComponentState: w.bind(null, n, u),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: s,
                    getParents: (e) => (0, y.cd)(n.components, e),
                };
            if (null != a)
                return {
                    useComponentState: x.bind(null, a),
                    channelId: a.channelId,
                    containerId: a.customId,
                    modal: a,
                    validators: s,
                    validationErrors: l,
                    setValidationErrors: c,
                    getParents: (e) => (0, y.cd)(a.components, e),
                };
            if (null != o)
                return {
                    useComponentState: L("ApplicationWidget"),
                    containerId: R(o),
                    applicationWidget: o,
                    validators: s,
                    validationErrors: l,
                    setValidationErrors: c,
                    getParents: M("ApplicationWidget"),
                };
            throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
        }, [n, a, o, u, s, l, c]);
    return (0, r.jsx)(j.Provider, {
        value: d,
        children: t,
    });
}
function U(e, t) {
    return i.useContext(j).useComponentState(e, t);
}
function G() {
    return i.useContext(j);
}
function B(e) {
    var t, n;
    return null != (n = null == (t = i.useContext(j).validationErrors) ? void 0 : t[e.id]) ? n : null;
}
