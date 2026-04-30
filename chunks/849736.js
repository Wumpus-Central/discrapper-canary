r.d(e, {
    J7: () => R,
    Nx: () => M,
    OE: () => f,
    SA: () => g,
    Tf: () => d,
    b3: () => B,
    b6: () => N,
    e7: () => u,
    gt: () => C,
    lL: () => b,
});
var i = r(284009),
    n = r.n(i),
    E = r(136722),
    c = r(636537),
    l = r(308528);
r(686956);
var s = r(155718),
    _ = r(58149),
    A = r(381689),
    a = r(309010),
    S = r(977997),
    I = r(488926),
    G = r(790535),
    T = r(110618),
    D = r(602146),
    U = r(105530),
    o = r(418208),
    L = r(652215),
    O = r(835002);
function R(t, e) {
    let r = t.getGuildId();
    return (
        n()(null != r, "This channel cannot be guildless."),
        e && (0, _.zV)(L.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.l7)(t) }),
        c.Bo.patch({
            url: L.Rsh.UPDATE_VOICE_STATE(r),
            body: { request_to_speak_timestamp: e ? new Date().toISOString() : null, channel_id: t.id },
            rejectWithError: !1,
        })
    );
}
function g(t, e) {
    let r = t.getGuildId();
    return (
        n()(null != r, "This channel cannot be guildless."),
        c.Bo.patch({
            url: L.Rsh.UPDATE_VOICE_STATE(r, e),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: t.id },
            rejectWithError: !1,
        }).catch(
            (t) => (
                t.code === L.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && A.A.showFailedToast(O.OB.GENERIC_ERROR), t
            ),
        )
    );
}
function u(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t?.getGuildId();
    n()(null != i, "This channel cannot be guildless.");
    let E = S.A.getVoiceStateForChannel(t.id),
        l = (0, U.eY)(E);
    return !e && (0, o.Cf)()
        ? Promise.resolve()
        : (l !== U.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              e ||
              (0, _.zV)(L.HAw.PROMOTED_TO_SPEAKER, { ...(0, T.l7)(t) }),
          c.Bo.patch({
              url: L.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: e, request_to_speak_timestamp: null, channel_id: t.id, ...(r ? { silent: r } : {}) },
              rejectWithError: !1,
          }));
}
function d(t) {
    let e = t?.getGuildId();
    return (
        n()(null != e, "This channel cannot be guildless."),
        c.Bo.patch({
            url: L.Rsh.UPDATE_VOICE_STATE(e),
            body: { suppress: !0, channel_id: t.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function b(t, e, r) {
    let i = t.getGuildId();
    return (
        n()(null != i, "This channel cannot be guildless."),
        c.Bo.patch({
            url: L.Rsh.UPDATE_VOICE_STATE(i, e),
            body: { suppress: r, channel_id: t.id },
            rejectWithError: !1,
        }).catch(
            (t) => (
                t.code === L.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && A.A.showFailedToast(O.OB.GENERIC_ERROR), t
            ),
        )
    );
}
function C(t, e) {
    if (null == e || null == t) return;
    let r = e.getGuildId();
    return (
        n()(null != r, "This channel cannot be guildless."),
        b(e, t.id, !0),
        c.Bo.patch({
            url: L.Rsh.UPDATE_VOICE_STATE(r, t.id),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function N(t, e, r) {
    let i = t.getGuildId();
    n()(null != i, "Channel cannot be guildless");
    let c = t.permissionOverwrites[i],
        _ = { id: i, type: s.r2.ROLE, allow: I.x3, deny: I.x3, ...c };
    r
        ? ((_.allow = E.WQ(_.allow, e)), (_.deny = E.TF(_.deny, e)))
        : ((_.allow = E.TF(_.allow, e)), (_.deny = E.WQ(_.deny, e))),
        l.A.updatePermissionOverwrite(t.id, _);
}
async function M(t, e, r, i) {
    if ("" === e) return;
    a.A.getVoiceChannelId() !== t.id && (0, G.cy)(t);
    let n = await (0, D.yG)(t.id, e, r, i);
    return u(t, !1, !0), n;
}
async function B(t, e, r) {
    if ("" !== e) return await (0, D.RY)(t.id, e, r);
}
async function f(t) {
    await (0, D.RR)(t.id);
}
