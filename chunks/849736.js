n.d(t, {
    J7: () => v,
    Nx: () => w,
    OE: () => D,
    SA: () => S,
    Tf: () => T,
    b3: () => P,
    b6: () => R,
    e7: () => I,
    gt: () => N,
    lL: () => C,
});
var r = n(284009),
    i = n.n(r),
    a = n(136722),
    s = n(562465),
    o = n(308528);
n(686956);
var l = n(155718),
    c = n(58149),
    u = n(662502),
    d = n(309010),
    f = n(977997),
    p = n(488926),
    _ = n(323443),
    h = n(110618),
    m = n(602146),
    g = n(105530),
    E = n(418208),
    b = n(652215),
    y = n(835002);
function O(e, t, n) {
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
function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        t && (0, c.zV)(b.HAw.REQUEST_TO_SPEAK_INITIATED, A({}, (0, h.l7)(e))),
        s.Bo.patch({
            url: b.Rsh.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id,
            },
            rejectWithError: !1,
        })
    );
}
function S(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        s.Bo.patch({
            url: b.Rsh.UPDATE_VOICE_STATE(n, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id,
            },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === b.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(y.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == e ? void 0 : e.getGuildId();
    i()(null != r, "This channel cannot be guildless.");
    let a = f.A.getVoiceStateForChannel(e.id),
        o = (0, g.eY)(a);
    return !t && (0, E.Cf)()
        ? Promise.resolve()
        : (o !== g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              t ||
              (0, c.zV)(b.HAw.PROMOTED_TO_SPEAKER, A({}, (0, h.l7)(e))),
          s.Bo.patch({
              url: b.Rsh.UPDATE_VOICE_STATE(r),
              body: A(
                  {
                      suppress: t,
                      request_to_speak_timestamp: null,
                      channel_id: e.id,
                  },
                  n ? { silent: n } : {},
              ),
              rejectWithError: !1,
          }));
}
function T(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, "This channel cannot be guildless."),
        s.Bo.patch({
            url: b.Rsh.UPDATE_VOICE_STATE(t),
            body: {
                suppress: !0,
                channel_id: e.id,
                self_video: !1,
                self_stream: !1,
            },
            rejectWithError: !1,
        })
    );
}
function C(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, "This channel cannot be guildless."),
        s.Bo.patch({
            url: b.Rsh.UPDATE_VOICE_STATE(r, t),
            body: {
                suppress: n,
                channel_id: e.id,
            },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === b.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(y.OB.GENERIC_ERROR), e
            ),
        )
    );
}
function N(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        C(t, e.id, !0),
        s.Bo.patch({
            url: b.Rsh.UPDATE_VOICE_STATE(n, e.id),
            body: {
                suppress: !0,
                channel_id: t.id,
                self_video: !1,
                self_stream: !1,
            },
            rejectWithError: !1,
        })
    );
}
function R(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, "Channel cannot be guildless");
    let s = e.permissionOverwrites[r],
        c = A(
            {
                id: r,
                type: l.r2.ROLE,
                allow: p.x3,
                deny: p.x3,
            },
            s,
        );
    n
        ? ((c.allow = a.WQ(c.allow, t)), (c.deny = a.TF(c.deny, t)))
        : ((c.allow = a.TF(c.allow, t)), (c.deny = a.WQ(c.deny, t))),
        o.A.updatePermissionOverwrite(e.id, c);
}
async function w(e, t, n, r) {
    if ("" === t) return;
    d.A.getVoiceChannelId() !== e.id && (0, _.cy)(e);
    let i = await (0, m.yG)(e.id, t, n, r);
    return I(e, !1, !0), i;
}
async function P(e, t, n) {
    if ("" !== t) return await (0, m.RY)(e.id, t, n);
}
async function D(e) {
    await (0, m.RR)(e.id);
}
