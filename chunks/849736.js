"use strict";
n.d(t, {
    J7: () => T,
    Nx: () => R,
    OE: () => D,
    SA: () => S,
    Tf: () => y,
    b3: () => b,
    b6: () => O,
    e7: () => N,
    gt: () => v,
    lL: () => C,
});
var i = n(284009),
    r = n.n(i),
    s = n(136722),
    a = n(636537),
    o = n(308528);
n(66834);
var l = n(155718),
    u = n(95561),
    c = n(381689),
    d = n(309010),
    _ = n(977997),
    f = n(488926),
    h = n(790535),
    p = n(110618),
    E = n(602146),
    m = n(105530),
    g = n(418208),
    A = n(652215),
    I = n(835002);
function T(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        t && (0, u.zV)(A.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, p.l7)(e) }),
        a.Bo.patch({
            url: A.Rsh.UPDATE_VOICE_STATE(n),
            body: { request_to_speak_timestamp: t ? new Date().toISOString() : null, channel_id: e.id },
            rejectWithError: !1,
        })
    );
}
function S(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        a.Bo.patch({
            url: A.Rsh.UPDATE_VOICE_STATE(n, t),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === A.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(I.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    r()(null != i, "This channel cannot be guildless.");
    let s = _.A.getVoiceStateForChannel(e.id),
        o = (0, m.eY)(s);
    return !t && (0, g.Cf)()
        ? Promise.resolve()
        : (o !== m.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              t ||
              (0, u.zV)(A.HAw.PROMOTED_TO_SPEAKER, { ...(0, p.l7)(e) }),
          a.Bo.patch({
              url: A.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: t, request_to_speak_timestamp: null, channel_id: e.id, ...(n ? { silent: n } : {}) },
              rejectWithError: !1,
          }));
}
function y(e) {
    let t = e?.getGuildId();
    return (
        r()(null != t, "This channel cannot be guildless."),
        a.Bo.patch({
            url: A.Rsh.UPDATE_VOICE_STATE(t),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function C(e, t, n) {
    let i = e.getGuildId();
    return (
        r()(null != i, "This channel cannot be guildless."),
        a.Bo.patch({
            url: A.Rsh.UPDATE_VOICE_STATE(i, t),
            body: { suppress: n, channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === A.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(I.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function v(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        C(t, e.id, !0),
        a.Bo.patch({
            url: A.Rsh.UPDATE_VOICE_STATE(n, e.id),
            body: { suppress: !0, channel_id: t.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function O(e, t, n) {
    let i = e.getGuildId();
    r()(null != i, "Channel cannot be guildless");
    let a = e.permissionOverwrites[i],
        u = { id: i, type: l.r2.ROLE, allow: f.x3, deny: f.x3, ...a };
    n
        ? ((u.allow = s.WQ(u.allow, t)), (u.deny = s.TF(u.deny, t)))
        : ((u.allow = s.TF(u.allow, t)), (u.deny = s.WQ(u.deny, t))),
        o.A.updatePermissionOverwrite(e.id, u);
}
async function R(e, t, n, i) {
    if ("" === t) return;
    d.A.getVoiceChannelId() !== e.id && (0, h.cy)(e);
    let r = await (0, E.yG)(e.id, t, n, i);
    return N(e, !1, !0), r;
}
async function b(e, t, n) {
    if ("" !== t) return await (0, E.RY)(e.id, t, n);
}
async function D(e) {
    await (0, E.RR)(e.id);
}
