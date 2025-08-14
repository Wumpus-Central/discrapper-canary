n.d(t, {
    CJ: () => k,
    Ee: () => j,
    Il: () => M,
    h4: () => U,
}),
    n(388685),
    n(997841);
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
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
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
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
    R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = O.gH.NORMAL;
        return (
            null != e &&
                e.state !== _.F.FAILED &&
                (e.data.interactionType === c.B8.MESSAGE_COMPONENT && e.data.componentId === t.id
                    ? (r = O.gH.LOADING)
                    : C(t) && (r = O.gH.DISABLED)),
            n && C(t) && (r = O.gH.DISABLED),
            r
        );
    },
    P = (e) => {
        let t = g.Z.getChannel(e),
            n = (0, s.e7)([b.Z], () => (null == t ? void 0 : t.guild_id) == null || b.Z.canChatInGuild(t.guild_id), [
                t,
            ]),
            r = (0, s.e7)([h.Z], () => (null == t ? void 0 : t.guild_id) != null && h.Z.isLurking(t.guild_id), [t]),
            i = (0, s.e7)([E.ZP, y.default], () => {
                var e, n;
                let r = y.default.getCurrentUser();
                return (
                    null !=
                        (n =
                            (null == t ? void 0 : t.guild_id) != null && null != r
                                ? null == (e = E.ZP.getMember(null == t ? void 0 : t.guild_id, r.id))
                                    ? void 0
                                    : e.isPending
                                : null) && n
                );
            }),
            [, o] = (0, d.AB)(null == t ? void 0 : t.guild_id),
            a = (0, m.tc)(t);
        return (
            !!(
                !n ||
                r ||
                i ||
                (null == t ? void 0 : t.isLockedThread()) ||
                ((null == t ? void 0 : t.isArchivedThread()) && !a)
            ) || !!o
        );
    };
function w(e, t) {
    var n, r;
    let o = i.useContext(x),
        a = i.useCallback(
            (t) => {
                var n;
                let r = (0, I.Z)(e, t, null != o.modal ? "modal" : "message");
                return null == (n = o.setValidationErrors) || n.call(o, (t) => N(S({}, t), { [e.id]: r })), null == r;
            },
            [e, o],
        );
    return (
        i.useEffect(() => {
            var e;
            let n = () => a(t);
            return (
                null == (e = o.validators) || e.add(n),
                () => {
                    var e;
                    null == (e = o.validators) || e.delete(n);
                }
            );
        }, [o.validators, a, t, e.id]),
        {
            error: null != (r = null == (n = o.validationErrors) ? void 0 : n[e.id]) ? r : null,
            validate: a,
        }
    );
}
function D(e, t, n, r) {
    var o;
    let a = (0, s.e7)([v.Z], () => v.Z.getInteractionComponentState(e.id, n.id)),
        l = (0, s.e7)([f.ZP], () => f.ZP.getInteraction(e), [e]),
        c = P(e.channel_id) || t,
        { error: u, validate: d } = w(n, a),
        _ = null != (o = e.applicationId) ? o : e.author.id;
    return {
        state: a,
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
                            localState: t,
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, d],
        ),
        isDisabled: c && C(n),
        visualState: R(l, n, c),
        error: u,
    };
}
function L(e, t, n) {
    let r = (0, s.e7)([v.Z], () => v.Z.getInteractionComponentState(e.customId, t.id)),
        { error: o, validate: a } = w(t, r),
        c = i.useCallback(
            (n) =>
                null == n ||
                (l.Z.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n,
                }),
                !!a(n)),
            [e.customId, t.id, a],
        );
    return (
        (0, u.ZP)(() => {
            c(n);
        }),
        {
            state: r,
            executeStateUpdate: c,
            isDisabled: !1,
            visualState: O.gH.NORMAL,
            error: o,
        }
    );
}
let x = i.createContext(null);
function M(e) {
    let {
            children: t,
            message: n,
            modal: o,
            validators: s,
            validationErrors: l,
            setValidationErrors: c,
            shouldDisableInteractiveComponents: u = !1,
        } = e,
        d = i.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: D.bind(null, n, u),
                          channelId: n.channel_id,
                          message: n,
                          validators: s,
                      }
                    : (a()(null != o, "modal is present if message is not"),
                      {
                          useComponentState: L.bind(null, o),
                          channelId: o.channelId,
                          modal: o,
                          validators: s,
                          validationErrors: l,
                          setValidationErrors: c,
                      }),
            [n, o, s, l, c, u],
        );
    return (0, r.jsx)(x.Provider, {
        value: d,
        children: t,
    });
}
function j(e, t) {
    return i.useContext(x).useComponentState(e, t);
}
function k() {
    return i.useContext(x);
}
function U(e) {
    var t, n;
    return null != (n = null == (t = i.useContext(x).validationErrors) ? void 0 : t[e.id]) ? n : null;
}
