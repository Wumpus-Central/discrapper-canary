n.d(t, {
    CJ: () => M,
    Ee: () => R,
    Il: () => Z,
    h4: () => P,
}),
    n(388685),
    n(997841);
var l = n(951288),
    i = n(647438),
    r = n(512722),
    u = n.n(r),
    a = n(442837),
    o = n(570140),
    c = n(911969),
    d = n(493773),
    s = n(71619),
    E = n(282397),
    p = n(622449),
    I = n(188597),
    T = n(41776),
    f = n(665906),
    m = n(592125),
    S = n(271383),
    g = n(607744),
    C = n(594174),
    _ = n(280501),
    O = n(892902),
    h = n(359232);
let N = (e) => {
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
    v = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = _.gH.NORMAL;
        return (
            null != e &&
                e.state !== p.F.FAILED &&
                (e.data.interactionType === c.B8.MESSAGE_COMPONENT && e.data.componentId === t.id
                    ? (l = _.gH.LOADING)
                    : N(t) && (l = _.gH.DISABLED)),
            n && N(t) && (l = _.gH.DISABLED),
            l
        );
    };
function b(e, t) {
    var n, l;
    let r = i.useContext(L),
        u = i.useCallback(
            (t) => {
                var n;
                let l = (0, h.Z)(e, t, null != r.modal ? "modal" : "message");
                return (
                    null == (n = r.setValidationErrors) ||
                        n.call(r, (t) => {
                            var n, i;
                            return (
                                (n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (i = i = { [e.id]: l }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n
                            );
                        }),
                    null == l
                );
            },
            [e, r],
        );
    return (
        i.useEffect(() => {
            var e;
            let n = () => u(t);
            return (
                null == (e = r.validators) || e.add(n),
                () => {
                    var e;
                    null == (e = r.validators) || e.delete(n);
                }
            );
        }, [r.validators, u, t, e.id]),
        {
            error: null != (l = null == (n = r.validationErrors) ? void 0 : n[e.id]) ? l : null,
            validate: u,
        }
    );
}
function y(e, t, n, l) {
    var r;
    let u = (0, a.e7)([O.Z], () => O.Z.getInteractionComponentState(e.id, n.id)),
        o = (0, a.e7)([E.ZP], () => E.ZP.getInteraction(e), [e]),
        c =
            ((e) => {
                let t = m.Z.getChannel(e),
                    n = (0, a.e7)(
                        [g.Z],
                        () => (null == t ? void 0 : t.guild_id) == null || g.Z.canChatInGuild(t.guild_id),
                        [t],
                    ),
                    l = (0, a.e7)([T.Z], () => (null == t ? void 0 : t.guild_id) != null && T.Z.isLurking(t.guild_id), [
                        t,
                    ]),
                    i = (0, a.e7)([S.ZP, C.default], () => {
                        var e, n;
                        let l = C.default.getCurrentUser();
                        return (
                            null !=
                                (n =
                                    (null == t ? void 0 : t.guild_id) != null && null != l
                                        ? null == (e = S.ZP.getMember(null == t ? void 0 : t.guild_id, l.id))
                                            ? void 0
                                            : e.isPending
                                        : null) && n
                        );
                    }),
                    [, r] = (0, s.AB)(null == t ? void 0 : t.guild_id),
                    u = (0, f.tc)(t);
                return (
                    !!(
                        !n ||
                        l ||
                        i ||
                        (null == t ? void 0 : t.isLockedThread()) ||
                        ((null == t ? void 0 : t.isArchivedThread()) && !u)
                    ) || !!r
                );
            })(e.channel_id) || t,
        { error: d, validate: p } = b(n, u),
        _ = null != (r = e.applicationId) ? r : e.author.id;
    return {
        state: u,
        executeStateUpdate: i.useCallback(
            (t) => {
                if (!p(t)) return !1;
                let l = m.Z.getChannel(e.channel_id);
                return (
                    null != l &&
                        null != n.customId &&
                        (0, I.tM)({
                            componentType: n.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: _,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: t,
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, p],
        ),
        isDisabled: c && N(n),
        visualState: v(o, n, c),
        error: d,
    };
}
function A(e, t, n) {
    let l = (0, a.e7)([O.Z], () => O.Z.getInteractionComponentState(e.customId, t.id)),
        { error: r, validate: u } = b(t, l),
        c = i.useCallback(
            (n) =>
                null == n ||
                (o.Z.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n,
                }),
                !!u(n)),
            [e.customId, t.id, u],
        );
    return (
        (0, d.ZP)(() => {
            c(n);
        }),
        {
            state: l,
            executeStateUpdate: c,
            isDisabled: !1,
            visualState: _.gH.NORMAL,
            error: r,
        }
    );
}
let L = i.createContext(null);
function Z(e) {
    let {
            children: t,
            message: n,
            modal: r,
            validators: a,
            validationErrors: o,
            setValidationErrors: c,
            shouldDisableInteractiveComponents: d = !1,
        } = e,
        s = i.useMemo(
            () =>
                null != n
                    ? {
                          useComponentState: y.bind(null, n, d),
                          channelId: n.channel_id,
                          message: n,
                          validators: a,
                      }
                    : (u()(null != r, "modal is present if message is not"),
                      {
                          useComponentState: A.bind(null, r),
                          channelId: r.channelId,
                          modal: r,
                          validators: a,
                          validationErrors: o,
                          setValidationErrors: c,
                      }),
            [n, r, a, o, c, d],
        );
    return (0, l.jsx)(L.Provider, {
        value: s,
        children: t,
    });
}
function R(e, t) {
    return i.useContext(L).useComponentState(e, t);
}
function M() {
    return i.useContext(L);
}
function P(e) {
    var t, n;
    return null != (n = null == (t = i.useContext(L).validationErrors) ? void 0 : t[e.id]) ? n : null;
}
