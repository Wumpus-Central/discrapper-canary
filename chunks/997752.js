"use strict";
n.d(t, { A: () => F });
var r = n(812729),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(430363),
    l = n(659416),
    u = n(4149),
    c = n(652215);
let d = null,
    _ = null,
    f = "⁣";
function p(e) {
    let t = null != e.state ? `${f}${e.state}` : "";
    return {
        type: c.$pd.CUSTOM_STATUS,
        name: e.name ?? "Custom Status",
        state: t,
        ...(null != e.details ? { details: e.details } : {}),
        ...(null != e.partyId ? { party: { id: e.partyId } } : {}),
    };
}
function h(e) {
    return G() ? C(R(e.voiceDare)) : b();
}
function m(e) {
    if (!G()) return b();
    let t = Date.now();
    return C(O(e.voiceDare, l.Ob.RUNNING, t));
}
function g(e) {
    return G() ? C(O(e.voiceDare, l.Ob.CANCELLED)) : b();
}
function E(e) {
    return G() ? C(D(e.voiceDare, l.Ob.COMPLETED)) : b();
}
function A(e) {
    return G() ? C(D(e.voiceDare, l.Ob.FAILED)) : b();
}
function I(e) {
    return G() ? C(L(e.voiceDare, l.Cy.COMPLETE_REQUESTED)) : b();
}
function T(e) {
    return G() ? C(L(e.voiceDare, l.Cy.CANCEL_REQUESTED)) : b();
}
function y(e) {
    return null != d && d.messageKind === l.cn.OFFER && (null == e.dareId || d.dareId === e.dareId) && b();
}
function S(e) {
    return b();
}
function v() {
    return b();
}
function C(e) {
    let t = null == e ? null : (0, u.PF)(e),
        n = i()(d, e),
        r = i()(_, t);
    return (!n || !r) && ((d = e), (_ = t), !0);
}
function b() {
    return C(null);
}
function N() {
    let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        t = "";
    for (let n = 0; n < 8; n++) t += e.charAt(Math.floor(Math.random() * e.length));
    return t;
}
function R(e) {
    let t = x(e.durationSec),
        n = P(e.failAfterHours),
        r = M(e.spiciness);
    return {
        dareId: N(),
        guildId: e.guildId,
        channelId: e.channelId,
        senderId: e.senderId,
        targetId: e.targetId,
        messageKind: l.cn.OFFER,
        kind: e.kind,
        prompt: w(e.prompt),
        durationSec: t,
        failAfterHours: n,
        spiciness: r,
    };
}
function O(e, t, n) {
    return D(e, t, n);
}
function D(e, t, n) {
    return { ...e, messageKind: l.cn.STATE, phase: t, startedAtMs: n };
}
function L(e, t) {
    return { ...e, messageKind: l.cn.COMMAND, commandType: t };
}
function w(e) {
    let t = e.trim();
    return t.length <= 140 ? t : t.slice(0, 140);
}
function x(e) {
    let t = 60,
        n = 3600,
        r = 300;
    return Number.isFinite(e) ? Math.max(t, Math.min(n, Math.floor(e))) : r;
}
function P(e) {
    return Number.isFinite(e) ? Math.max(1, Math.min(24, Math.floor(e))) : 1;
}
function M(e) {
    let t = l.sb.UNHINGED;
    return 0 >= k(e, t) ? e : t;
}
function k(e, t) {
    return U(e) - U(t);
}
function U(e) {
    switch (e) {
        case l.sb.MILD:
            return 0;
        case l.sb.SPICY:
            return 1;
        case l.sb.UNHINGED:
            return 2;
    }
}
function G() {
    return (0, o.PA)("VoiceDaresLocalStateStore").enabled;
}
class V extends a.Ay.Store {
    static displayName = "VoiceDaresLocalStateStore";
    getLocalVoiceDare() {
        return d;
    }
    getFieldDistribution() {
        return _;
    }
    getVoiceDareCustomStatusActivity() {
        return null == _ ? null : p(_);
    }
}
let F = new V(s.h, {
    VOICE_DARES_LOCAL_OFFERED: h,
    VOICE_DARES_LOCAL_ACCEPT_OFFER: m,
    VOICE_DARES_LOCAL_DECLINE_OFFER: g,
    VOICE_DARES_LOCAL_COMPLETE: E,
    VOICE_DARES_LOCAL_CHICKEN_OUT: A,
    VOICE_DARES_LOCAL_REQUEST_COMPLETE: I,
    VOICE_DARES_LOCAL_REQUEST_CANCEL: T,
    VOICE_DARES_LOCAL_CANCEL_OFFER: y,
    VOICE_DARES_LOCAL_CLEARED: S,
    LOGOUT: v,
});
