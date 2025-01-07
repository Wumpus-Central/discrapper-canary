n.d(t, {
    CJ: function () {
        return D;
    },
    Ee: function () {
        return b;
    },
    Il: function () {
        return M;
    }
}),
    n(47120),
    n(789020);
var l = n(200651),
    u = n(192379),
    i = n(512722),
    r = n.n(i),
    a = n(442837),
    o = n(570140),
    d = n(911969),
    c = n(493773),
    s = n(71619),
    E = n(282397),
    T = n(622449),
    I = n(188597),
    f = n(41776),
    p = n(665906),
    m = n(592125),
    S = n(271383),
    C = n(607744),
    _ = n(594174),
    g = n(280501),
    N = n(892902),
    h = n(359232);
let v = (e) => {
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
    O = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = g.gH.NORMAL;
        return null != e && e.state !== T.F.FAILED && (e.data.interactionType === d.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? (l = g.gH.LOADING) : v(t) && (l = g.gH.DISABLED)), n && (l = g.gH.DISABLED), l;
    },
    A = (e) => {
        let t = m.Z.getChannel(e),
            n = (0, a.e7)([C.Z], () => (null == t ? void 0 : t.guild_id) == null || C.Z.canChatInGuild(t.guild_id), [t]),
            l = (0, a.e7)([f.Z], () => (null == t ? void 0 : t.guild_id) != null && f.Z.isLurking(t.guild_id), [t]),
            u = (0, a.e7)([S.ZP, _.default], () => {
                var e, n;
                let l = _.default.getCurrentUser();
                return null !== (n = (null == t ? void 0 : t.guild_id) != null && null != l ? (null === (e = S.ZP.getMember(null == t ? void 0 : t.guild_id, l.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
            }),
            [, i] = (0, s.AB)(null == t ? void 0 : t.guild_id),
            r = (0, p.tc)(t);
        return !!(!n || l || u || (null == t ? void 0 : t.isLockedThread()) || ((null == t ? void 0 : t.isArchivedThread()) && !r)) || !!i || !1;
    };
function L(e, t) {
    let n = u.useContext(y),
        [l, i] = u.useState(null),
        r = u.useCallback(
            (t) => {
                let n = (0, h.Z)(e, t);
                return i(n), null == n;
            },
            [e]
        );
    return (
        u.useEffect(() => {
            var e;
            let l = () => r(t);
            return (
                null === (e = n.validators) || void 0 === e || e.add(l),
                () => {
                    var e;
                    null === (e = n.validators) || void 0 === e || e.delete(l);
                }
            );
        }, [n.validators, r, t]),
        {
            error: l,
            validate: r
        }
    );
}
function R(e, t, n) {
    var l;
    let i = (0, a.e7)([N.Z], () => N.Z.getInteractionComponentState(e.id, t.id)),
        r = (0, a.e7)([E.ZP], () => E.ZP.getInteraction(e), [e]),
        o = A(e.channel_id),
        { error: d, validate: c } = L(t, i),
        s = null !== (l = e.applicationId) && void 0 !== l ? l : e.author.id;
    return {
        state: i,
        executeStateUpdate: u.useCallback(
            (n) => {
                if (!c(n)) return !1;
                let l = m.Z.getChannel(e.channel_id);
                return (
                    null != l &&
                        null != t.customId &&
                        (0, I.tM)({
                            componentType: t.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: t.customId,
                            componentId: t.id,
                            applicationId: s,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: n
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, t.customId, t.type, t.id, s, c]
        ),
        isDisabled: o,
        visualState: O(r, t),
        error: d
    };
}
function Z(e, t, n) {
    let l = (0, a.e7)([N.Z], () => N.Z.getInteractionComponentState(e.customId, t.id)),
        { error: i, validate: r } = L(t, l),
        d = u.useCallback(
            (n) =>
                null == n ||
                (o.Z.dispatch({
                    type: 'SET_INTERACTION_COMPONENT_STATE',
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n
                }),
                !!r(n) || !1),
            [e.customId, t.id, r]
        );
    return (
        (0, c.Z)(() => {
            d(n);
        }),
        {
            state: l,
            executeStateUpdate: d,
            isDisabled: !1,
            visualState: g.gH.NORMAL,
            error: i
        }
    );
}
let y = u.createContext(null);
function M(e) {
    let { children: t, message: n, modal: i, validators: a } = e,
        o = u.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: R.bind(null, n),
                          channelId: n.channel_id,
                          message: n,
                          validators: a
                      }
                    : (r()(null != i, 'modal is present if message is not'),
                      {
                          useComponentState: Z.bind(null, i),
                          channelId: i.channelId,
                          modal: i,
                          validators: a
                      }),
            [n, i, a]
        );
    return (0, l.jsx)(y.Provider, {
        value: o,
        children: t
    });
}
function b(e, t) {
    return u.useContext(y).useComponentState(e, t);
}
function D() {
    return u.useContext(y);
}
