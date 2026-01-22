n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(709066),
    l = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    f = n(652215),
    p = n(705751),
    _ = n(985018),
    h = n(234054);
function m(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        m = (0, l.Ay)(t),
        g = i(m),
        {
            avatarSrc: E,
            eventHandlers: { onMouseEnter: b, onMouseLeave: y },
        } = (0, u.a)(!0),
        O =
            "" !== t.content
                ? new Date(t.content).toLocaleString(_.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
    return (0, r.jsx)("div", {
        onMouseEnter: b,
        onMouseLeave: y,
        children: (0, r.jsx)(d.A, {
            className: a()(h.rs, { [h.oE]: n }),
            iconNode: n ? null : (0, r.jsx)(u.l, { src: E }),
            iconContainerClassName: h.zc,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(h.Qs, { [h.oE]: n }),
                children: [
                    (0, r.jsx)(c.ix, {
                        message: t,
                        messageClassname: h.he,
                        className: a()(h.QV, h.he, { [h.oE]: n }),
                        username: (0, r.jsxs)("div", {
                            className: h.he,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: h.Xh,
                                    children: _.intl.string(_.t.hG1StD),
                                }),
                                (0, r.jsx)(o.A, {
                                    type: p.nu.SYSTEM_DM,
                                    className: h.Al,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(h.__invalid_messageContent, { [h.oE]: n }),
                        children:
                            t.type === f.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? _.intl.format(_.t["+m8eD7"], {
                                      username: m.nick,
                                      usernameHook: g,
                                      time: O,
                                  })
                                : _.intl.format(_.t["BHeke+"], {
                                      username: m.nick,
                                      usernameHook: g,
                                  }),
                    }),
                ],
            }),
        }),
    });
}
