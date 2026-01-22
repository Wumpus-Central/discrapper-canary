let r, i, a;
n.d(t, {
    EL: () => O,
    JK: () => v,
    MX: () => N,
    PR: () => S,
    SB: () => C,
    TX: () => g,
    UC: () => I,
    aX: () => R,
    bG: () => A,
    m: () => T,
    pX: () => b,
    sY: () => w,
    uh: () => y,
}),
    n(321073),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238),
    n(457529),
    n(812715);
var s = n(830845),
    o = n(626584),
    l = n(203982),
    c = n(824865),
    u = n(652215);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = new o.A("Routing/Utils"),
    _ = [u.dSh.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, s.sC)() : (0, s.zR)();
let h = !1,
    m = r.listen((e, t) => {
        "REPLACE" !== t && ((h = !0), m());
    });

function g() {
    if (l._.hasSubscribers(u.jej.MODAL_CLOSE)) {
        let { doesTopModalAllowNavigation: e } = n(192308);
        if (!e()) return !1;
    }
    return n(712687).A.close(), !0;
}

function E(e, t) {
    return (
        !!("string" == typeof e && _.some((t) => e.startsWith(t))) &&
        (p.log("".concat(t, " - route to external path ").concat(e)),
        window.dispatchEvent(new Event("beforeunload")),
        window.location[t](e),
        !0)
    );
}

function b(e, t) {
    if (E(e, "assign")) return;
    p.log("transitionTo - Transitioning to ".concat(e));
    let n = null == t ? void 0 : t.source;
    null == t || delete t.source;
    let s = null == t ? void 0 : t.sourceLocationStack;
    if ((null == t || delete t.sourceLocationStack, null == t)) r.push(e);
    else {
        let n = new URL(e, "https:".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT));
        r.push(
            f(
                {
                    pathname: n.pathname,
                    search: n.search,
                    hash: n.hash,
                },
                t,
            ),
        );
    }
    (i = n), (a = s);
}

function y(e, t, n, r) {
    p.log(
        "transitionToGuild - Transitioning to ".concat(
            JSON.stringify({
                guildId: e,
                channelId: t,
                messageId: n,
            }),
        ),
    ),
        b(u.BVt.CHANNEL(e, t, n), r);
}

function O() {
    return null != i && c.n.has(i);
}

function A(e, t, n) {
    E(e, "replace") ||
        (p.log("Replacing route with ".concat(e)), "string" == typeof e ? r.replace(e, t) : r.replace(e), (i = n));
}

function v() {
    return r;
}

function S() {
    return i;
}

function I() {
    return a;
}

function T(e) {
    if (null == e) {
        var t;
        e = null != (t = r.location.pathname) ? t : "";
    }
    return !e.startsWith(u.BVt.HANDOFF);
}

function C(e) {
    if (null == e) {
        var t;
        e = null != (t = r.location.pathname) ? t : "";
    }
    if (e.startsWith(u.BVt.LOGIN)) return u.S3d.LOGIN;
    if (e.startsWith(u.BVt.REGISTER)) return u.S3d.REGISTER;
    if (e.startsWith(u.BVt.INVITE(""))) return u.S3d.INVITE;
    if (e.startsWith(u.BVt.VERIFY)) return u.S3d.VERIFY;
    if (e.startsWith(u.BVt.DISABLE_EMAIL_NOTIFICATIONS)) return u.S3d.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(u.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS))
        return u.S3d.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(u.BVt.REJECT_IP)) return u.S3d.REJECT_IP;
    else if (e.startsWith(u.BVt.REJECT_MFA)) return u.S3d.REJECT_MFA;
    else if (e.startsWith(u.BVt.AUTHORIZE_IP)) return u.S3d.AUTHORIZE_IP;
    else if (e.startsWith(u.BVt.AUTHORIZE_PAYMENT)) return u.S3d.AUTHORIZE_PAYMENT;
    else if (e.startsWith(u.BVt.RESET)) return u.S3d.RESET;
    else if (e.startsWith(u.BVt.REPORT)) return u.S3d.REPORT;
    else if (e.startsWith(u.BVt.REPORT_SECOND_LOOK)) return u.S3d.REPORT_SECOND_LOOK;
    else if (e.startsWith(u.BVt.ACCOUNT_REVERT(""))) return u.S3d.ACCOUNT_REVERT;
    return e;
}

function N() {
    return h;
}

function R() {
    g() && ((i = null), r.goBack());
}

function w() {
    g() && ((i = null), r.goForward());
}
