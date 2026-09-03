let i, r, a;
n.d(t, {
    EL: () => m,
    JK: () => S,
    MX: () => L,
    PR: () => N,
    SB: () => R,
    TX: () => h,
    UC: () => C,
    aX: () => y,
    bG: () => g,
    m: () => O,
    pX: () => p,
    sY: () => D,
    uh: () => T,
}),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var s = n(830845),
    l = n(626584),
    o = n(625494),
    d = n(824865),
    c = n(652215);
let u = new l.A("Routing/Utils"),
    _ = [c.dSh.DEVELOPER_PORTAL];
__OVERLAY__
    ? (i = (0, s.sC)())
    : (i = (0, s.zR)()).block((e, t) => {
          if ("POP" === t && !h()) return !1;
      });
let E = !1,
    A = i.listen((e, t) => {
        "REPLACE" !== t && ((E = !0), A());
    });
function h() {
    if (o._.hasSubscribers(c.jej.MODAL_CLOSE)) {
        let { doesTopModalAllowNavigation: e } = n(192308);
        if (!e()) return !1;
    }
    return n(712687).A.close(), !0;
}
function I(e, t) {
    return (
        !!("string" == typeof e && _.some((t) => e.startsWith(t))) &&
        (u.log(`${t} - route to external path ${e}`),
        window.dispatchEvent(new Event("beforeunload")),
        window.location[t](e),
        !0)
    );
}
function f(e, t) {
    return null == e || "" === e || e === t ? "" : e.startsWith(t) ? e : t + e;
}
function p(e, t) {
    let n;
    if (I(e, "assign")) return;
    let s = new URL(e, `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`),
        l = { pathname: s.pathname, search: s.search, hash: s.hash, ...t };
    u.log(`transitionTo - Transitioning to ${e}`);
    let o = t?.source,
        d = t?.sourceLocationStack;
    (n = i.location).pathname === l.pathname && n.search === f(l.search, "?") && n.hash === f(l.hash, "#")
        ? i.replace(l)
        : null == t
          ? i.push(e)
          : i.push(l),
        (r = o),
        (a = d);
}
function T(e, t, n, i) {
    u.log(`transitionToGuild - Transitioning to ${JSON.stringify({ guildId: e, channelId: t, messageId: n })}`),
        p(c.BVt.CHANNEL(e, t, n), i);
}
function m() {
    return null != r && d.n.has(r);
}
function g(e, t, n) {
    I(e, "replace") ||
        (u.log(`Replacing route with ${e}`), "string" == typeof e ? i.replace(e, t) : i.replace(e), (r = n));
}
function S() {
    return i;
}
function N() {
    return r;
}
function C() {
    return a;
}
function O(e) {
    return null == e && (e = i.location.pathname ?? ""), !e.startsWith(c.BVt.HANDOFF);
}
function R(e) {
    if ((null == e && (e = i.location.pathname ?? ""), e.startsWith(c.BVt.LOGIN))) return c.S3d.LOGIN;
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
function L() {
    return E;
}
function y() {
    h() && ((r = null), i.goBack());
}
function D() {
    h() && ((r = null), i.goForward());
}
