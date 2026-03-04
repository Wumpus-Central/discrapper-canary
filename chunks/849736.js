n.d(t, {
    J7: () => O,
    Nx: () => M,
    OE: () => y,
    SA: () => p,
    Tf: () => P,
    b3: () => h,
    b6: () => U,
    e7: () => m,
    gt: () => g,
    lL: () => D,
});
var i = n(284009),
    l = n.n(i),
    r = n(136722),
    a = n(562465),
    s = n(308528);
n(686956);
var o = n(155718),
    c = n(58149),
    _ = n(662502),
    E = n(309010),
    d = n(977997),
    u = n(488926),
    A = n(323443),
    T = n(110618),
    I = n(602146),
    N = n(105530),
    R = n(418208),
    S = n(652215),
    C = n(835002);
function O(e, t) {
    let n = e.getGuildId();
    return (
        l()(null != n, "This channel cannot be guildless."),
        t && (0, c.zV)(S.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, T.l7)(e) }),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n),
            body: { request_to_speak_timestamp: t ? new Date().toISOString() : null, channel_id: e.id },
            rejectWithError: !1,
        })
    );
}
function p(e, t) {
    let n = e.getGuildId();
    return (
        l()(null != n, "This channel cannot be guildless."),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n, t),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === S.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && _.A.showFailedToast(C.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.getGuildId();
    l()(null != i, "This channel cannot be guildless.");
    let r = d.A.getVoiceStateForChannel(e.id),
        s = (0, N.eY)(r);
    return !t && (0, R.Cf)()
        ? Promise.resolve()
        : (s !== N.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              t ||
              (0, c.zV)(S.HAw.PROMOTED_TO_SPEAKER, { ...(0, T.l7)(e) }),
          a.Bo.patch({
              url: S.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: t, request_to_speak_timestamp: null, channel_id: e.id, ...(n ? { silent: n } : {}) },
              rejectWithError: !1,
          }));
}
function P(e) {
    let t = e?.getGuildId();
    return (
        l()(null != t, "This channel cannot be guildless."),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(t),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function D(e, t, n) {
    let i = e.getGuildId();
    return (
        l()(null != i, "This channel cannot be guildless."),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(i, t),
            body: { suppress: n, channel_id: e.id },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === S.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && _.A.showFailedToast(C.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function g(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        l()(null != n, "This channel cannot be guildless."),
        D(t, e.id, !0),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n, e.id),
            body: { suppress: !0, channel_id: t.id, self_video: !1, self_stream: !1 },
            rejectWithError: !1,
        })
    );
}
function U(e, t, n) {
    let i = e.getGuildId();
    l()(null != i, "Channel cannot be guildless");
    let a = e.permissionOverwrites[i],
        c = { id: i, type: o.r2.ROLE, allow: u.x3, deny: u.x3, ...a };
    n
        ? ((c.allow = r.WQ(c.allow, t)), (c.deny = r.TF(c.deny, t)))
        : ((c.allow = r.TF(c.allow, t)), (c.deny = r.WQ(c.deny, t))),
        s.A.updatePermissionOverwrite(e.id, c);
}
async function M(e, t, n, i) {
    if ("" === t) return;
    E.A.getVoiceChannelId() !== e.id && (0, A.cy)(e);
    let l = await (0, I.yG)(e.id, t, n, i);
    return m(e, !1, !0), l;
}
async function h(e, t, n) {
    if ("" !== t) return await (0, I.RY)(e.id, t, n);
}
async function y(e) {
    await (0, I.RR)(e.id);
}
