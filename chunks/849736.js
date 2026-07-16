r.d(e, {
    J7: () => R,
    Nx: () => M,
    OE: () => f,
    SA: () => O,
    Tf: () => d,
    b3: () => B,
    b6: () => N,
    e7: () => L,
    gt: () => C,
    lL: () => b,
});
var i = r(284009),
    n = r.n(i),
    E = r(136722),
    c = r(636537),
    l = r(308528);
r(66834);
var s = r(155718),
    a = r(95561),
    _ = r(381689),
    A = r(309010),
    S = r(977997),
    I = r(488926),
    T = r(790535),
    G = r(110618),
    o = r(602146),
    D = r(105530),
    u = r(418208),
    g = r(652215),
    U = r(835002);
function R(t, e) {
    let r = t.getGuildId();
    return (
        n()(null != r, "This channel cannot be guildless."),
        e && (0, a.zV)(g.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, G.l7)(t) }),
        c.Bo.patch({
            url: g.Rsh.UPDATE_VOICE_STATE(r),
            body: { request_to_speak_timestamp: e ? new Date().toISOString() : null, channel_id: t.id },
            rejectWithError: !1,
        })
    );
}
function O(t, e) {
    let r = t.getGuildId();
    return (
        n()(null != r, "This channel cannot be guildless."),
        c.Bo.patch({
            url: g.Rsh.UPDATE_VOICE_STATE(r, e),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: t.id },
            rejectWithError: !1,
        }).catch(
            (t) => (
                t.code === g.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && _.A.showFailedToast(U.OB.GENERIC_ERROR), t
            ),
        )
    );
}
function L(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t?.getGuildId();
    n()(null != i, "This channel cannot be guildless.");
    let E = S.A.getVoiceStateForChannel(t.id),
        l = (0, D.eY)(E);
    return !e && (0, u.Cf)()
        ? Promise.resolve()
        : (l !== D.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              e ||
              (0, a.zV)(g.HAw.PROMOTED_TO_SPEAKER, { ...(0, G.l7)(t) }),
          c.Bo.patch({
              url: g.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: e, request_to_speak_timestamp: null, channel_id: t.id, ...(r ? { silent: r } : {}) },
              rejectWithError: !1,
          }));
}
function d(t) {
    let e = t?.getGuildId();
    return (
        n()(null != e, "This channel cannot be guildless."),
        c.Bo.patch({
            url: g.Rsh.UPDATE_VOICE_STATE(e),
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
            url: g.Rsh.UPDATE_VOICE_STATE(i, e),
            body: { suppress: r, channel_id: t.id },
            rejectWithError: !1,
        }).catch(
            (t) => (
                t.code === g.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && _.A.showFailedToast(U.OB.GENERIC_ERROR), t
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
            url: g.Rsh.UPDATE_VOICE_STATE(r, t.id),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function N(t, e, r) {
    let i = t.getGuildId();
    n()(null != i, "Channel cannot be guildless");
    let c = t.permissionOverwrites[i],
        a = { id: i, type: s.r2.ROLE, allow: I.x3, deny: I.x3, ...c };
    r
        ? ((a.allow = E.WQ(a.allow, e)), (a.deny = E.TF(a.deny, e)))
        : ((a.allow = E.TF(a.allow, e)), (a.deny = E.WQ(a.deny, e))),
        l.A.updatePermissionOverwrite(t.id, a);
}
async function M(t, e, r, i) {
    if ("" === e) return;
    A.Ay.getVoiceChannelId() !== t.id && (0, T.cy)(t);
    let n = await (0, o.yG)(t.id, e, r, i);
    return L(t, !1, !0), n;
}
async function B(t, e, r) {
    if ("" !== e) return await (0, o.RY)(t.id, e, r);
}
async function f(t) {
    await (0, o.RR)(t.id);
}
