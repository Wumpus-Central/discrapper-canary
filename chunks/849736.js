n.d(t, {
    J7: () => P,
    Nx: () => h,
    OE: () => b,
    SA: () => y,
    Tf: () => C,
    b3: () => U,
    b6: () => g,
    e7: () => f,
    gt: () => m,
    lL: () => D,
});
var r = n(284009),
    i = n.n(r),
    l = n(136722),
    o = n(562465),
    a = n(308528);
n(686956);
var s = n(155718),
    c = n(58149),
    u = n(662502),
    E = n(309010),
    d = n(977997),
    _ = n(488926),
    T = n(323443),
    A = n(110618),
    I = n(602146),
    O = n(105530),
    N = n(418208),
    p = n(652215),
    R = n(835002);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function P(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        t && (0, c.zV)(p.HAw.REQUEST_TO_SPEAK_INITIATED, S({}, (0, A.l7)(e))),
        o.Bo.patch({
            url: p.Rsh.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id,
            },
            rejectWithError: !1,
        })
    );
}

function y(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        o.Bo.patch({
            url: p.Rsh.UPDATE_VOICE_STATE(n, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id,
            },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === p.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(R.OB.GENERIC_ERROR), e
            ),
        )
    );
}

function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == e ? void 0 : e.getGuildId();
    i()(null != r, "This channel cannot be guildless.");
    let l = d.A.getVoiceStateForChannel(e.id),
        a = (0, O.eY)(l);
    return !t && (0, N.Cf)()
        ? Promise.resolve()
        : (a !== O.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
              t ||
              (0, c.zV)(p.HAw.PROMOTED_TO_SPEAKER, S({}, (0, A.l7)(e))),
          o.Bo.patch({
              url: p.Rsh.UPDATE_VOICE_STATE(r),
              body: S(
                  {
                      suppress: t,
                      request_to_speak_timestamp: null,
                      channel_id: e.id,
                  },
                  n
                      ? {
                            silent: n,
                        }
                      : {},
              ),
              rejectWithError: !1,
          }));
}

function C(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, "This channel cannot be guildless."),
        o.Bo.patch({
            url: p.Rsh.UPDATE_VOICE_STATE(t),
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

function D(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, "This channel cannot be guildless."),
        o.Bo.patch({
            url: p.Rsh.UPDATE_VOICE_STATE(r, t),
            body: {
                suppress: n,
                channel_id: e.id,
            },
            rejectWithError: !1,
        }).catch(
            (e) => (
                e.code === p.t02.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.A.showFailedToast(R.OB.GENERIC_ERROR), e
            ),
        )
    );
}

function m(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        D(t, e.id, !0),
        o.Bo.patch({
            url: p.Rsh.UPDATE_VOICE_STATE(n, e.id),
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

function g(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, "Channel cannot be guildless");
    let o = e.permissionOverwrites[r],
        c = S(
            {
                id: r,
                type: s.r2.ROLE,
                allow: _.x3,
                deny: _.x3,
            },
            o,
        );
    n
        ? ((c.allow = l.WQ(c.allow, t)), (c.deny = l.TF(c.deny, t)))
        : ((c.allow = l.TF(c.allow, t)), (c.deny = l.WQ(c.deny, t))),
        a.A.updatePermissionOverwrite(e.id, c);
}
async function h(e, t, n, r) {
    if ("" === t) return;
    E.A.getVoiceChannelId() !== e.id && (0, T.cy)(e);
    let i = await (0, I.yG)(e.id, t, n, r);
    return f(e, !1, !0), i;
}
async function U(e, t, n) {
    if ("" !== t) return await (0, I.RY)(e.id, t, n);
}
async function b(e) {
    await (0, I.RR)(e.id);
}
