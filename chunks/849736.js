"use strict";
n.d(t, {
    J7: () => C,
    Nx: () => m,
    OE: () => y,
    SA: () => p,
    Tf: () => D,
    b3: () => h,
    b6: () => U,
    e7: () => P,
    gt: () => g,
    lL: () => M,
});
var i = n(284009),
    r = n.n(i),
    l = n(136722),
    s = n(562465),
    a = n(308528);
n(686956);
var o = n(155718),
    E = n(58149),
    c = n(662502),
    _ = n(309010),
    d = n(977997),
    A = n(488926),
    u = n(323443),
    T = n(110618),
    I = n(602146),
    N = n(105530),
    R = n(418208),
    S = n(652215),
    O = n(835002);
function C(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        t && (0, E.zV)(S.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.l7)(e) }),
        s.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n),
            body: { request_to_speak_timestamp: t ? new Date().toISOString() : null, channel_id: e.id },
            rejectWithError: !1,
        })
    );
}
function p(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        s.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n, t),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === S.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(O.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    r()(null != i, "This channel cannot be guildless.");
    let l = d.A.getVoiceStateForChannel(e.id),
        a = (0, N.eY)(l);
    return !t && (0, R.Cf)()
        ? Promise.resolve()
        : (a !== N.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              t ||
              (0, E.zV)(S.HAw.PROMOTED_TO_SPEAKER, { ...(0, T.l7)(e) }),
          s.Bo.patch({
              url: S.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: t, request_to_speak_timestamp: null, channel_id: e.id, ...(n ? { silent: n } : {}) },
              rejectWithError: !1,
          }));
}
function D(e) {
    let t = e?.getGuildId();
    return (
        r()(null != t, "This channel cannot be guildless."),
        s.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(t),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function M(e, t, n) {
    let i = e.getGuildId();
    return (
        r()(null != i, "This channel cannot be guildless."),
        s.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(i, t),
            body: { suppress: n, channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === S.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && c.A.showFailedToast(O.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function g(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        r()(null != n, "This channel cannot be guildless."),
        M(t, e.id, !0),
        s.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n, e.id),
            body: { suppress: !0, channel_id: t.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function U(e, t, n) {
    let i = e.getGuildId();
    r()(null != i, "Channel cannot be guildless");
    let s = e.permissionOverwrites[i],
        E = { id: i, type: o.r2.ROLE, allow: A.x3, deny: A.x3, ...s };
    n
        ? ((E.allow = l.WQ(E.allow, t)), (E.deny = l.TF(E.deny, t)))
        : ((E.allow = l.TF(E.allow, t)), (E.deny = l.WQ(E.deny, t))),
        a.A.updatePermissionOverwrite(e.id, E);
}
async function m(e, t, n, i) {
    if ("" === t) return;
    _.A.getVoiceChannelId() !== e.id && (0, u.cy)(e);
    let r = await (0, I.yG)(e.id, t, n, i);
    return P(e, !1, !0), r;
}
async function h(e, t, n) {
    if ("" !== t) return await (0, I.RY)(e.id, t, n);
}
async function y(e) {
    await (0, I.RR)(e.id);
}
