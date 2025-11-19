n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(797258),
    c = n(374129),
    u = n(639351),
    d = n(565473),
    p = n(927923),
    f = n(388032),
    h = n(981912);
function g(e) {
    let { platform: t } = e;
    return t === p.YE.XBOX
        ? (0, r.jsx)(u.Z, { className: h.icon })
        : t === p.YE.PLAYSTATION
          ? (0, r.jsx)(c.Z, { className: h.icon })
          : null;
}
function m(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        i = null != n ? (0, d.y)(n.type) : null,
        c = (0, a.e7)([o.Z], () => {
            var e, n;
            return null == (e = o.Z.getSessionById(null != (n = null == t ? void 0 : t.sessionId) ? n : ""))
                ? void 0
                : e.clientInfo.os;
        }),
        u = null != i ? i : c;
    if (null == u || !p.al.has(u)) return null;
    let m = null != n,
        _ = m
            ? u === p.YE.XBOX
                ? f.intl.string(f.t.UjA4HX)
                : f.intl.string(f.t.QCw1oW)
            : u === p.YE.XBOX
              ? f.intl.format(f.t["ynEs/Y"], {})
              : f.intl.format(f.t.TZ17Bg, {});
    return (0, r.jsxs)("div", {
        className: l()(h.root, m ? h.connecting : h.connected),
        children: [
            (0, r.jsx)(g, { platform: u }),
            (0, r.jsx)(s.Text, {
                color: m ? "header-primary" : "always-white",
                variant: "text-xs/medium",
                children: _,
            }),
        ],
    });
}
