let i, a, r;
n.d(t, {
    EL: () => N,
    JK: () => p,
    MX: () => g,
    PR: () => m,
    SB: () => R,
    TX: () => I,
    UC: () => O,
    aX: () => L,
    bG: () => f,
    m: () => C,
    pX: () => h,
    sY: () => D,
    uh: () => S,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var s = n(830845),
    l = n(626584),
    o = n(625494),
    d = n(824865),
    c = n(652215);
let _ = new l.A("Routing/Utils"),
    E = [c.dSh.DEVELOPER_PORTAL];
__OVERLAY__
    ? (i = (0, s.sC)())
    : (i = (0, s.zR)()).block((e, t) => {
          if ("POP" === t && !I()) return !1;
      });
let u = !1,
    A = i.listen((e, t) => {
        "REPLACE" !== t && ((u = !0), A());
    });
function I() {
    if (o._.hasSubscribers(c.jej.MODAL_CLOSE)) {
        let { doesTopModalAllowNavigation: e } = n(192308);
        if (!e()) return !1;
    }
    return n(712687).A.close(), !0;
}
function T(e, t) {
    return (
        !!("string" == typeof e && E.some((t) => e.startsWith(t))) &&
        (_.log(`${t} - route to external path ${e}`),
        window.dispatchEvent(new Event("beforeunload")),
        window.location[t](e),
        !0)
    );
}
function h(e, t) {
    if (T(e, "assign")) return;
    _.log(`transitionTo - Transitioning to ${e}`);
    let n = t?.source,
        s = t?.sourceLocationStack;
    if (null == t) i.push(e);
    else {
        let n = new URL(e, `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`);
        i.push({ pathname: n.pathname, search: n.search, hash: n.hash, ...t });
    }
    (a = n), (r = s);
}
function S(e, t, n, i) {
    _.log(`transitionToGuild - Transitioning to ${JSON.stringify({ guildId: e, channelId: t, messageId: n })}`),
        h(c.BVt.CHANNEL(e, t, n), i);
}
function N() {
    return null != a && d.n.has(a);
}
function f(e, t, n) {
    T(e, "replace") ||
        (_.log(`Replacing route with ${e}`), "string" == typeof e ? i.replace(e, t) : i.replace(e), (a = n));
}
function p() {
    return i;
}
function m() {
    return a;
}
function O() {
    return r;
}
function C(e) {
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
function g() {
    return u;
}
function L() {
    I() && ((a = null), i.goBack());
}
function D() {
    I() && ((a = null), i.goForward());
}
