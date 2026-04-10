"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(397927),
    a = n(709066),
    c = n(763754),
    o = n(643204),
    u = n(809115),
    d = n(888675),
    _ = n(652215),
    E = n(705751),
    A = n(985018),
    m = n(240775);
function I(e) {
    let { message: t, compact: n, usernameHook: r } = e,
        I = (0, c.Ay)(t),
        T = r(I),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: N, onMouseLeave: f },
        } = (0, u.a)(!0),
        p =
            "" !== t.content
                ? new Date(t.content).toLocaleString(A.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: f,
        children: (0, i.jsx)(d.A, {
            className: s()(m.rs, { [m.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(u.l, { src: g }),
            iconContainerClassName: m.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(m.Qs, { [m.oE]: n }),
                children: [
                    (0, i.jsx)(o.ix, {
                        message: t,
                        messageClassname: m.he,
                        className: s()(m.QV, m.he, { [m.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: m.he,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: m.Xh,
                                    children: A.intl.string(A.t.hG1StD),
                                }),
                                (0, i.jsx)(a.A, { type: E.nu.SYSTEM_DM, className: m.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: s()(m.__invalid_messageContent, { [m.oE]: n }),
                        children:
                            t.type === _.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? A.intl.format(A.t["+m8eD7"], { username: I.nick, usernameHook: T, time: p })
                                : A.intl.format(A.t["BHeke+"], { username: I.nick, usernameHook: T }),
                    }),
                ],
            }),
        }),
    });
}
