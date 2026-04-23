"use strict";
let r, i, s;
n.d(t, {
    EL: () => A,
    JK: () => T,
    MX: () => C,
    PR: () => S,
    SB: () => v,
    TX: () => h,
    UC: () => y,
    aX: () => O,
    bG: () => I,
    m: () => N,
    pX: () => m,
    sY: () => R,
    uh: () => g,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var a = n(830845),
    o = n(626584),
    l = n(203982),
    u = n(824865),
    c = n(652215);
let d = new o.A("Routing/Utils"),
    _ = [c.dSh.DEVELOPER_PORTAL];
__OVERLAY__
    ? (r = (0, a.sC)())
    : (r = (0, a.zR)()).block((e, t) => {
          if ("POP" === t && !h()) return !1;
      });
let f = !1,
    p = r.listen((e, t) => {
        "REPLACE" !== t && ((f = !0), p());
    });
function h() {
    if (l._.hasSubscribers(c.jej.MODAL_CLOSE)) {
        let { doesTopModalAllowNavigation: e } = n(192308);
        if (!e()) return !1;
    }
    return n(712687).A.close(), !0;
}
function E(e, t) {
    return (
        !!("string" == typeof e && _.some((t) => e.startsWith(t))) &&
        (d.log(`${t} - route to external path ${e}`),
        window.dispatchEvent(new Event("beforeunload")),
        window.location[t](e),
        !0)
    );
}
function m(e, t) {
    if (E(e, "assign")) return;
    d.log(`transitionTo - Transitioning to ${e}`);
    let n = t?.source,
        a = t?.sourceLocationStack;
    if (null == t) r.push(e);
    else {
        let n = new URL(e, `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`);
        r.push({ pathname: n.pathname, search: n.search, hash: n.hash, ...t });
    }
    (i = n), (s = a);
}
function g(e, t, n, r) {
    d.log(`transitionToGuild - Transitioning to ${JSON.stringify({ guildId: e, channelId: t, messageId: n })}`),
        m(c.BVt.CHANNEL(e, t, n), r);
}
function A() {
    return null != i && u.n.has(i);
}
function I(e, t, n) {
    E(e, "replace") ||
        (d.log(`Replacing route with ${e}`), "string" == typeof e ? r.replace(e, t) : r.replace(e), (i = n));
}
function T() {
    return r;
}
function S() {
    return i;
}
function y() {
    return s;
}
function N(e) {
    return null == e && (e = r.location.pathname ?? ""), !e.startsWith(c.BVt.HANDOFF);
}
function v(e) {
    if ((null == e && (e = r.location.pathname ?? ""), e.startsWith(c.BVt.LOGIN))) return c.S3d.LOGIN;
    if (e.startsWith(c.BVt.REGISTER)) return c.S3d.REGISTER;
    if (e.startsWith(c.BVt.INVITE(""))) return c.S3d.INVITE;
    if (e.startsWith(c.BVt.VERIFY)) return c.S3d.VERIFY;
    if (e.startsWith(c.BVt.DISABLE_EMAIL_NOTIFICATIONS)) return c.S3d.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(c.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS))
        return c.S3d.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(c.BVt.REJECT_IP)) return c.S3d.REJECT_IP;
    else if (e.startsWith(c.BVt.REJECT_MFA)) return c.S3d.REJECT_MFA;
    else if (e.startsWith(c.BVt.AUTHORIZE_IP)) return c.S3d.AUTHORIZE_IP;
    else if (e.startsWith(c.BVt.AUTHORIZE_PAYMENT)) return c.S3d.AUTHORIZE_PAYMENT;
    else if (e.startsWith(c.BVt.RESET)) return c.S3d.RESET;
    else if (e.startsWith(c.BVt.REPORT)) return c.S3d.REPORT;
    else if (e.startsWith(c.BVt.REPORT_SECOND_LOOK)) return c.S3d.REPORT_SECOND_LOOK;
    else if (e.startsWith(c.BVt.ACCOUNT_REVERT(""))) return c.S3d.ACCOUNT_REVERT;
    return e;
}
function C() {
    return f;
}
function O() {
    h() && ((i = null), r.goBack());
}
function R() {
    h() && ((i = null), r.goForward());
}
