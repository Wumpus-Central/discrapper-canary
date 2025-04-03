n.d(t, {
    CJ: () => P,
    Ee: () => b,
    Il: () => M
}),
    n(47120),
    n(789020);
var l = n(200651),
    i = n(192379),
    u = n(512722),
    a = n.n(u),
    r = n(442837),
    o = n(570140),
    d = n(911969),
    c = n(493773),
    s = n(71619),
    E = n(282397),
    T = n(622449),
    I = n(188597),
    p = n(41776),
    m = n(665906),
    S = n(592125),
    f = n(271383),
    C = n(607744),
    _ = n(594174),
    g = n(280501),
    N = n(892902),
    h = n(359232);
let O = (e) => {
        switch (e.type) {
            case d.re.BUTTON:
                return e.style !== d.ZJ.LINK;
            case d.re.STRING_SELECT:
            case d.re.USER_SELECT:
            case d.re.ROLE_SELECT:
            case d.re.MENTIONABLE_SELECT:
            case d.re.CHANNEL_SELECT:
                return !0;
            case d.re.ACTION_ROW:
            case d.re.TEXT_INPUT:
                return !1;
        }
    },
    A = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = g.gH.NORMAL;
        return null != e && e.state !== T.F.FAILED && (e.data.interactionType === d.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? (l = g.gH.LOADING) : O(t) && (l = g.gH.DISABLED)), n && (l = g.gH.DISABLED), l;
    },
    v = (e) => {
        let t = S.Z.getChannel(e),
            n = (0, r.e7)([C.Z], () => (null == t ? void 0 : t.guild_id) == null || C.Z.canChatInGuild(t.guild_id), [t]),
            l = (0, r.e7)([p.Z], () => (null == t ? void 0 : t.guild_id) != null && p.Z.isLurking(t.guild_id), [t]),
            i = (0, r.e7)([f.ZP, _.default], () => {
                var e, n;
                let l = _.default.getCurrentUser();
                return null != (n = (null == t ? void 0 : t.guild_id) != null && null != l ? (null == (e = f.ZP.getMember(null == t ? void 0 : t.guild_id, l.id)) ? void 0 : e.isPending) : null) && n;
            }),
            [, u] = (0, s.AB)(null == t ? void 0 : t.guild_id),
            a = (0, m.tc)(t);
        return !!(!n || l || i || (null == t ? void 0 : t.isLockedThread()) || ((null == t ? void 0 : t.isArchivedThread()) && !a)) || !!u;
    };
function L(e, t) {
    let n = i.useContext(y),
        [l, u] = i.useState(null),
        a = i.useCallback(
            (t) => {
                let n = (0, h.Z)(e, t);
                return u(n), null == n;
            },
            [e]
        );
    return (
        i.useEffect(() => {
            var e;
            let l = () => a(t);
            return (
                null == (e = n.validators) || e.add(l),
                () => {
                    var e;
                    null == (e = n.validators) || e.delete(l);
                }
            );
        }, [n.validators, a, t]),
        {
            error: l,
            validate: a
        }
    );
}
function R(e, t, n, l) {
    var u;
    let a = (0, r.e7)([N.Z], () => N.Z.getInteractionComponentState(e.id, n.id)),
        o = (0, r.e7)([E.ZP], () => E.ZP.getInteraction(e), [e]),
        d = v(e.channel_id) || t,
        { error: c, validate: s } = L(n, a),
        T = null != (u = e.applicationId) ? u : e.author.id;
    return {
        state: a,
        executeStateUpdate: i.useCallback(
            (t) => {
                if (!s(t)) return !1;
                let l = S.Z.getChannel(e.channel_id);
                return (
                    null != l &&
                        null != n.customId &&
                        (0, I.tM)({
                            componentType: n.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: T,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: t
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, T, s]
        ),
        isDisabled: d,
        visualState: A(o, n),
        error: c
    };
}
function Z(e, t, n) {
    let l = (0, r.e7)([N.Z], () => N.Z.getInteractionComponentState(e.customId, t.id)),
        { error: u, validate: a } = L(t, l),
        d = i.useCallback(
            (n) =>
                null == n ||
                (o.Z.dispatch({
                    type: 'SET_INTERACTION_COMPONENT_STATE',
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n
                }),
                !!a(n)),
            [e.customId, t.id, a]
        );
    return (
        (0, c.ZP)(() => {
            d(n);
        }),
        {
            state: l,
            executeStateUpdate: d,
            isDisabled: !1,
            visualState: g.gH.NORMAL,
            error: u
        }
    );
}
let y = i.createContext(null);
function M(e) {
    let { children: t, message: n, modal: u, validators: r, shouldDisableInteractiveComponents: o = !1 } = e,
        d = i.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: R.bind(null, n, o),
                          channelId: n.channel_id,
                          message: n,
                          validators: r
                      }
                    : (a()(null != u, 'modal is present if message is not'),
                      {
                          useComponentState: Z.bind(null, u),
                          channelId: u.channelId,
                          modal: u,
                          validators: r
                      }),
            [n, u, r, o]
        );
    return (0, l.jsx)(y.Provider, {
        value: d,
        children: t
    });
}
function b(e, t) {
    return i.useContext(y).useComponentState(e, t);
}
function P() {
    return i.useContext(y);
}
