(n.d(t, {
    CJ: () => x,
    Ee: () => L,
    Il: () => D
}),
    n(388685),
    n(997841));
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    c = n(911969),
    u = n(493773),
    d = n(71619),
    f = n(282397),
    _ = n(622449),
    p = n(188597),
    h = n(41776),
    m = n(665906),
    g = n(592125),
    E = n(271383),
    b = n(607744),
    y = n(594174),
    O = n(280501),
    v = n(892902),
    I = n(359232);
let T = (e) => {
        switch (e.type) {
            case c.re.BUTTON:
                return e.style !== c.ZJ.LINK;
            case c.re.STRING_SELECT:
            case c.re.USER_SELECT:
            case c.re.ROLE_SELECT:
            case c.re.MENTIONABLE_SELECT:
            case c.re.CHANNEL_SELECT:
                return !0;
            case c.re.ACTION_ROW:
            case c.re.TEXT_INPUT:
            default:
                return !1;
        }
    },
    S = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = O.gH.NORMAL;
        return (null != e && e.state !== _.F.FAILED && (e.data.interactionType === c.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? (r = O.gH.LOADING) : T(t) && (r = O.gH.DISABLED)), n && T(t) && (r = O.gH.DISABLED), r);
    },
    A = (e) => {
        let t = g.Z.getChannel(e),
            n = (0, s.e7)([b.Z], () => (null == t ? void 0 : t.guild_id) == null || b.Z.canChatInGuild(t.guild_id), [t]),
            r = (0, s.e7)([h.Z], () => (null == t ? void 0 : t.guild_id) != null && h.Z.isLurking(t.guild_id), [t]),
            i = (0, s.e7)([E.ZP, y.default], () => {
                var e, n;
                let r = y.default.getCurrentUser();
                return null != (n = (null == t ? void 0 : t.guild_id) != null && null != r ? (null == (e = E.ZP.getMember(null == t ? void 0 : t.guild_id, r.id)) ? void 0 : e.isPending) : null) && n;
            }),
            [, a] = (0, d.AB)(null == t ? void 0 : t.guild_id),
            o = (0, m.tc)(t);
        return !!(!n || r || i || (null == t ? void 0 : t.isLockedThread()) || ((null == t ? void 0 : t.isArchivedThread()) && !o)) || !!a;
    };
function N(e, t) {
    let n = i.useContext(P),
        [r, a] = i.useState(null),
        o = i.useCallback(
            (t) => {
                let n = (0, I.Z)(e, t);
                return (a(n), null == n);
            },
            [e]
        );
    return (
        i.useEffect(() => {
            var e;
            let r = () => o(t);
            return (
                null == (e = n.validators) || e.add(r),
                () => {
                    var e;
                    null == (e = n.validators) || e.delete(r);
                }
            );
        }, [n.validators, o, t]),
        {
            error: r,
            validate: o
        }
    );
}
function C(e, t, n, r) {
    var a;
    let o = (0, s.e7)([v.Z], () => v.Z.getInteractionComponentState(e.id, n.id)),
        l = (0, s.e7)([f.ZP], () => f.ZP.getInteraction(e), [e]),
        c = A(e.channel_id) || t,
        { error: u, validate: d } = N(n, o),
        _ = null != (a = e.applicationId) ? a : e.author.id;
    return {
        state: o,
        executeStateUpdate: i.useCallback(
            (t) => {
                if (!d(t)) return !1;
                let r = g.Z.getChannel(e.channel_id);
                return (
                    null != r &&
                        null != n.customId &&
                        (0, p.tM)({
                            componentType: n.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: _,
                            channelId: r.id,
                            guildId: r.guild_id,
                            localState: t
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, d]
        ),
        isDisabled: c && T(n),
        visualState: S(l, n, c),
        error: u
    };
}
function w(e, t, n) {
    l.Z.dispatch({
        type: 'SET_INTERACTION_COMPONENT_STATE',
        rootContainerId: e,
        componentId: t,
        state: n
    });
}
function R(e, t, n) {
    let r = (0, s.e7)([v.Z], () => v.Z.getInteractionComponentState(e.customId, t.id)),
        { error: a, validate: o } = N(t, r),
        l = i.useCallback((n) => null == n || (w(e.customId, t.id, n), !!o(n)), [e.customId, t.id, o]);
    return (
        (0, u.ZP)(() => {
            l(n);
        }),
        {
            state: r,
            executeStateUpdate: l,
            isDisabled: !1,
            visualState: O.gH.NORMAL,
            error: a
        }
    );
}
let P = i.createContext(null);
function D(e) {
    let { children: t, message: n, modal: a, validators: s, shouldDisableInteractiveComponents: l = !1 } = e,
        c = i.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: C.bind(null, n, l),
                          channelId: n.channel_id,
                          message: n,
                          validators: s
                      }
                    : (o()(null != a, 'modal is present if message is not'),
                      {
                          useComponentState: R.bind(null, a),
                          channelId: a.channelId,
                          modal: a,
                          validators: s
                      }),
            [n, a, s, l]
        );
    return (0, r.jsx)(P.Provider, {
        value: c,
        children: t
    });
}
function L(e, t) {
    return i.useContext(P).useComponentState(e, t);
}
function x() {
    return i.useContext(P);
}
