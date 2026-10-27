n.d(e, {
    J7: () => p,
    Nx: () => m,
    OE: () => P,
    SA: () => O,
    Tf: () => I,
    b3: () => C,
    b6: () => b,
    e7: () => y,
    gt: () => w,
    lL: () => N,
});
var i = n(284009),
    l = n.n(i),
    r = n(136722),
    a = n(636537),
    s = n(308528);
n(66834);
var o = n(155718),
    d = n(666860),
    u = n(662502),
    c = n(309010),
    _ = n(977997),
    E = n(488926),
    T = n(747376),
    h = n(110618),
    A = n(602146),
    g = n(105530),
    f = n(418208),
    S = n(652215),
    R = n(835002);
function p(t, e) {
    let n = t.getGuildId();
    return (
        l()(null != n, "This channel cannot be guildless."),
        e && (0, d.zV)(S.HAw.REQUEST_TO_SPEAK_INITIATED, { ...(0, h.l7)(t) }),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n),
            body: { request_to_speak_timestamp: e ? new Date().toISOString() : null, channel_id: t.id },
            rejectWithError: (0, a.fT)(),
        })
    );
}
function O(t, e) {
    let n = t.getGuildId();
    return (
        l()(null != n, "This channel cannot be guildless."),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n, e),
            body: { suppress: !1, request_to_speak_timestamp: new Date().toISOString(), channel_id: t.id },
            rejectWithError: (0, a.fT)(),
        }).catch(
            (t) => (
                t.code === S.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(R.OB.GENERIC_ERROR),
                t
            ),
        )
    );
}
function y(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = t?.getGuildId();
    l()(null != i, "This channel cannot be guildless.");
    let r = _.A.getVoiceStateForChannel(t.id),
        s = (0, g.eY)(r);
    return !e && (0, f.Cf)()
        ? Promise.resolve()
        : (s !== g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              e ||
              (0, d.zV)(S.HAw.PROMOTED_TO_SPEAKER, { ...(0, h.l7)(t) }),
          a.Bo.patch({
              url: S.Rsh.UPDATE_VOICE_STATE(i),
              body: { suppress: e, request_to_speak_timestamp: null, channel_id: t.id, ...(n ? { silent: n } : {}) },
              rejectWithError: (0, a.fT)(),
          }));
}
function I(t) {
    let e = t?.getGuildId();
    return (
        l()(null != e, "This channel cannot be guildless."),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(e),
            body: { suppress: !0, channel_id: t.id, self_video: !1, self_stream: !1 },
            rejectWithError: (0, a.fT)(),
        })
    );
}
function N(t, e, n) {
    let i = t.getGuildId();
    return (
        l()(null != i, "This channel cannot be guildless."),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(i, e),
            body: { suppress: n, channel_id: t.id },
            rejectWithError: (0, a.fT)(),
        }).catch(
            (t) => (
                t.code === S.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(R.OB.GENERIC_ERROR),
                t
            ),
        )
    );
}
function w(t, e) {
    if (null == e || null == t) return;
    let n = e.getGuildId();
    return (
        l()(null != n, "This channel cannot be guildless."),
        N(e, t.id, !0),
        a.Bo.patch({
            url: S.Rsh.UPDATE_VOICE_STATE(n, t.id),
            body: { suppress: !0, channel_id: e.id, self_video: !1, self_stream: !1 },
            rejectWithError: (0, a.fT)(),
        })
    );
}
function b(t, e, n) {
    let i = t.getGuildId();
    l()(null != i, "Channel cannot be guildless");
    let a = t.permissionOverwrites[i],
        d = { id: i, type: o.r2.ROLE, allow: E.x3, deny: E.x3, ...a };
    (n
        ? ((d.allow = r.WQ(d.allow, e)), (d.deny = r.TF(d.deny, e)))
        : ((d.allow = r.TF(d.allow, e)), (d.deny = r.WQ(d.deny, e))),
        s.A.updatePermissionOverwrite(t.id, d));
}
async function m(t, e, n, i) {
    if ("" === e) return;
    c.Ay.getVoiceChannelId() !== t.id && (0, T.cy)(t);
    let l = await (0, A.yG)(t.id, e, n, i);
    return (y(t, !1, !0), l);
}
async function C(t, e, n) {
    if ("" !== e) return await (0, A.RY)(t.id, e, n);
}
async function P(t) {
    await (0, A.RR)(t.id);
}
