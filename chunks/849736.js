"use strict";
n.d(t, {
    J7: () => g,
    Nx: () => D,
    OE: () => v,
    SA: () => S,
    Tf: () => C,
    b3: () => y,
    b6: () => L,
    e7: () => N,
    gt: () => R,
    lL: () => O,
});
var i = n(284009),
    r = n.n(i),
    a = n(136722),
    s = n(636537),
    l = n(308528);
n(66834);
var o = n(155718),
    d = n(95561),
    c = n(381689),
    u = n(309010),
    _ = n(977997),
    E = n(488926),
    A = n(790535),
    h = n(110618),
    I = n(602146),
    f = n(105530),
    p = n(418208),
    T = n(652215),
    m = n(835002);
function g(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        t && (0, d.zV)(T.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, h.l7)(e) }),
        s.Bo.patch({
            url: T.Rsh.UPDATE_VOICE_STATE(n),
            body: { request_to_speak_timestamp: t ? new Date().toISOString() : null, channel_id: e.id },
            rejectWithError: !1,
        })
    );
}
function S(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        s.Bo.patch({
            url: T.Rsh.UPDATE_VOICE_STATE(n, t),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === T.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(m.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    r()(null != i, "This channel cannot be guildless.");
    let a = _.A.getVoiceStateForChannel(e.id),
        l = (0, f.eY)(a);
    return !t && (0, p.Cf)()
        ? Promise.resolve()
        : (l !== f.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              t ||
              (0, d.zV)(T.HAw.PROMOTED_TO_SPEAKER, { ...(0, h.l7)(e) }),
          s.Bo.patch({
              url: T.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: t, request_to_speak_timestamp: null, channel_id: e.id, ...(n ? { silent: n } : {}) },
              rejectWithError: !1,
          }));
}
function C(e) {
    let t = e?.getGuildId();
    return (
        r()(null != t, "This channel cannot be guildless."),
        s.Bo.patch({
            url: T.Rsh.UPDATE_VOICE_STATE(t),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function O(e, t, n) {
    let i = e.getGuildId();
    return (
        r()(null != i, "This channel cannot be guildless."),
        s.Bo.patch({
            url: T.Rsh.UPDATE_VOICE_STATE(i, t),
            body: { suppress: n, channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === T.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(m.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function R(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        O(t, e.id, !0),
        s.Bo.patch({
            url: T.Rsh.UPDATE_VOICE_STATE(n, e.id),
            body: { suppress: !0, channel_id: t.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function L(e, t, n) {
    let i = e.getGuildId();
    r()(null != i, "Channel cannot be guildless");
    let s = e.permissionOverwrites[i],
        d = { id: i, type: o.r2.ROLE, allow: E.x3, deny: E.x3, ...s };
    n
        ? ((d.allow = a.WQ(d.allow, t)), (d.deny = a.TF(d.deny, t)))
        : ((d.allow = a.TF(d.allow, t)), (d.deny = a.WQ(d.deny, t))),
        l.A.updatePermissionOverwrite(e.id, d);
}
async function D(e, t, n, i) {
    if ("" === t) return;
    u.A.getVoiceChannelId() !== e.id && (0, A.cy)(e);
    let r = await (0, I.yG)(e.id, t, n, i);
    return N(e, !1, !0), r;
}
async function y(e, t, n) {
    if ("" !== t) return await (0, I.RY)(e.id, t, n);
}
async function v(e) {
    await (0, I.RR)(e.id);
}
