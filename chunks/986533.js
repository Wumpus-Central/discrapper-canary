n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(397927),
    s = n(709066),
    o = n(763754),
    d = n(643204),
    c = n(809115),
    u = n(888675),
    m = n(652215),
    _ = n(705751),
    h = n(985018),
    p = n(234054);
function g(e) {
    let { message: t, compact: n, usernameHook: l } = e,
        g = (0, o.Ay)(t),
        A = l(g),
        {
            avatarSrc: f,
            eventHandlers: { onMouseEnter: x, onMouseLeave: E },
        } = (0, c.a)(!0),
        C =
            "" !== t.content
                ? new Date(t.content).toLocaleString(h.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
    return (0, i.jsx)("div", {
        onMouseEnter: x,
        onMouseLeave: E,
        children: (0, i.jsx)(u.A, {
            className: a()(p.rs, { [p.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(c.l, { src: f }),
            iconContainerClassName: p.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(p.Qs, { [p.oE]: n }),
                children: [
                    (0, i.jsx)(d.ix, {
                        message: t,
                        messageClassname: p.he,
                        className: a()(p.QV, p.he, { [p.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: p.he,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: p.Xh,
                                    children: h.intl.string(h.t.hG1StD),
                                }),
                                (0, i.jsx)(s.A, { type: _.nu.SYSTEM_DM, className: p.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(p.__invalid_messageContent, { [p.oE]: n }),
                        children:
                            t.type === m.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? h.intl.format(h.t["+m8eD7"], { username: g.nick, usernameHook: A, time: C })
                                : h.intl.format(h.t["BHeke+"], { username: g.nick, usernameHook: A }),
                    }),
                ],
            }),
        }),
    });
}
