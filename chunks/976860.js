let i, r, a;
(n(323874), n(14289), n(35956), n(321073));
var s = n(830845),
    l = n(626584),
    o = n(188567),
    d = n(824865),
    c = n(652215);
let u = new l.A("Routing/Utils"),
    _ = [c.dSh.DEVELOPER_PORTAL],
    E = new Set();
__OVERLAY__
    ? (i = (0, s.sC)())
    : (i = (0, s.zR)()).block((e, t) => {
          if ("POP" === t && !h()) return !1;
          for (let t of E) if (t(e.pathname)) return !1;
      });
let A = !1,
    f = i.listen((e, t) => {
        "REPLACE" !== t && ((A = !0), f());
    });
function h() {
    if (o._.hasSubscribers(c.jej.MODAL_CLOSE)) {
        let { doesTopModalAllowNavigation: e } = n(192308);
        if (!e()) return !1;
    }
    return (n(712687).A.close(), !0);
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
function p(e, t) {
    return null == e || "" === e || e === t ? "" : e.startsWith(t) ? e : t + e;
}
function m(e, t) {
    let n;
    if (I(e, "assign")) return;
    let s = new URL(e, `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`),
        l = { pathname: s.pathname, search: s.search, hash: s.hash, ...t };
    u.log(`transitionTo - Transitioning to ${e}`);
    let o = t?.source,
        d = t?.sourceLocationStack;
    ((n = i.location).pathname === l.pathname && n.search === p(l.search, "?") && n.hash === p(l.hash, "#")
        ? i.replace(l)
        : null == t
          ? i.push(e)
          : i.push(l),
        (r = o),
        (a = d));
}
n.d(
    t,
    {},
    {
        EL: function () {
            return null != r && d.n.has(r);
        },
        JK: function () {
            return i;
        },
        MX: function () {
            return A;
        },
        PR: function () {
            return r;
        },
        SB: function (e) {
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
        },
        TX: h,
        UC: function () {
            return a;
        },
        aX: function () {
            h() && ((r = null), i.goBack());
        },
        bG: function (e, t, n) {
            I(e, "replace") ||
                (u.log(`Replacing route with ${e}`), "string" == typeof e ? i.replace(e, t) : i.replace(e), (r = n));
        },
        m: function (e) {
            return (null == e && (e = i.location.pathname ?? ""), !e.startsWith(c.BVt.HANDOFF));
        },
        mw: function (e) {
            return (
                E.add(e),
                () => {
                    E.delete(e);
                }
            );
        },
        pX: m,
        sY: function () {
            h() && ((r = null), i.goForward());
        },
        uh: function (e, t, n, i) {
            (u.log(
                `transitionToGuild - Transitioning to ${JSON.stringify({ guildId: e, channelId: t, messageId: n })}`,
            ),
                m(c.BVt.CHANNEL(e, t, n), i));
        },
    },
);
