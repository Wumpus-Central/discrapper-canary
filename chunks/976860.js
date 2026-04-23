let i, r, a;
n.d(t, {
    EL: () => O,
    JK: () => f,
    MX: () => D,
    PR: () => C,
    SB: () => L,
    TX: () => A,
    UC: () => p,
    aX: () => h,
    bG: () => R,
    m: () => m,
    pX: () => S,
    sY: () => g,
    uh: () => N,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var s = n(313649),
    _ = n(626584),
    l = n(625494),
    o = n(824865),
    E = n(652215);
let d = new _.A("Routing/Utils"),
    c = [E.dSh.DEVELOPER_PORTAL];
__OVERLAY__
    ? (i = (0, s.sC)())
    : (i = (0, s.zR)()).block((e, t) => {
          if ("POP" === t && !A()) return !1;
      });
let u = !1,
    I = i.listen((e, t) => {
        "REPLACE" !== t && ((u = !0), I());
    });
function A() {
    if (l._.hasSubscribers(E.jej.MODAL_CLOSE)) {
        let { doesTopModalAllowNavigation: e } = n(192308);
        if (!e()) return !1;
    }
    return n(712687).A.close(), !0;
}
function T(e, t) {
    return (
        !!("string" == typeof e && c.some((t) => e.startsWith(t))) &&
        (d.log(`${t} - route to external path ${e}`),
        window.dispatchEvent(new Event("beforeunload")),
        window.location[t](e),
        !0)
    );
}
function S(e, t) {
    if (T(e, "assign")) return;
    d.log(`transitionTo - Transitioning to ${e}`);
    let n = t?.source,
        s = t?.sourceLocationStack;
    if (null == t) i.push(e);
    else {
        let n = new URL(e, `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`);
        i.push({ pathname: n.pathname, search: n.search, hash: n.hash, ...t });
    }
    (r = n), (a = s);
}
function N(e, t, n, i) {
    d.log(`transitionToGuild - Transitioning to ${JSON.stringify({ guildId: e, channelId: t, messageId: n })}`),
        S(E.BVt.CHANNEL(e, t, n), i);
}
function O() {
    return null != r && o.n.has(r);
}
function R(e, t, n) {
    T(e, "replace") ||
        (d.log(`Replacing route with ${e}`), "string" == typeof e ? i.replace(e, t) : i.replace(e), (r = n));
}
function f() {
    return i;
}
function C() {
    return r;
}
function p() {
    return a;
}
function m(e) {
    return null == e && (e = i.location.pathname ?? ""), !e.startsWith(E.BVt.HANDOFF);
}
function L(e) {
    if ((null == e && (e = i.location.pathname ?? ""), e.startsWith(E.BVt.LOGIN))) return E.S3d.LOGIN;
    if (e.startsWith(E.BVt.REGISTER)) return E.S3d.REGISTER;
    if (e.startsWith(E.BVt.INVITE(""))) return E.S3d.INVITE;
    if (e.startsWith(E.BVt.VERIFY)) return E.S3d.VERIFY;
    if (e.startsWith(E.BVt.DISABLE_EMAIL_NOTIFICATIONS)) return E.S3d.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(E.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS))
        return E.S3d.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(E.BVt.REJECT_IP)) return E.S3d.REJECT_IP;
    else if (e.startsWith(E.BVt.REJECT_MFA)) return E.S3d.REJECT_MFA;
    else if (e.startsWith(E.BVt.AUTHORIZE_IP)) return E.S3d.AUTHORIZE_IP;
    else if (e.startsWith(E.BVt.AUTHORIZE_PAYMENT)) return E.S3d.AUTHORIZE_PAYMENT;
    else if (e.startsWith(E.BVt.RESET)) return E.S3d.RESET;
    else if (e.startsWith(E.BVt.REPORT)) return E.S3d.REPORT;
    else if (e.startsWith(E.BVt.REPORT_SECOND_LOOK)) return E.S3d.REPORT_SECOND_LOOK;
    else if (e.startsWith(E.BVt.ACCOUNT_REVERT(""))) return E.S3d.ACCOUNT_REVERT;
    return e;
}
function D() {
    return u;
}
function h() {
    A() && ((r = null), i.goBack());
}
function g() {
    A() && ((r = null), i.goForward());
}
