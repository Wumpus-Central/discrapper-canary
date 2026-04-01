n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(686956),
    d = n(847599),
    c = n(506164),
    u = n(985018),
    h = n(324025);
function A(e) {
    let { guild: t, channelId: n } = e,
        s = l.useCallback(() => {
            o.A.nsfwReturnToSafety(t?.id);
        }, [t]),
        a = l.useCallback(() => {
            o.A.spoilerAgree(n);
        }, [n]);
    return (0, i.jsx)(c.A, {
        onAgree: a,
        onDisagree: s,
        modalType: d.A5.SPOILER_CHANNEL,
        title: u.intl.string(u.t["q38/ae"]),
        description: u.intl.string(u.t["34D1HC"]),
        agreement: u.intl.string(u.t.p89ACt),
        disagreement: u.intl.string(u.t["/g10LC"]),
        guildId: t?.id,
        channelId: n,
    });
}
let _ = function (e) {
    let { guild: t, channelId: n, className: s } = e,
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            let { current: e } = o;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(r.T7Y, {
            ref: o,
            className: h.X,
            children: (0, i.jsx)("div", {
                className: a()(s, h.i),
                children: (0, i.jsx)(A, { guild: t, channelId: n }),
            }),
        })
    );
};
