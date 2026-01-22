n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(734057),
    o = n(763754),
    l = n(888675),
    c = n(985018),
    u = n(324208);

function d(e) {
    var t;
    let {
            message: n,
            compact: d,
            usernameHook: f,
            onClickThread: p,
            onClickViewThreads: _,
            onContextMenuThread: h,
        } = e,
        m = (0, o.Ay)(n),
        g = f(m),
        E = (0, i.bG)([s.A], () => {
            var e;
            return s.A.getChannel(null == (e = n.messageReference) ? void 0 : e.channel_id);
        }),
        b = c.intl.format(c.t.cZ9Uf2, {
            actorName: m.nick,
            actorHook: g,
            threadName: null != (t = null == E ? void 0 : E.name) ? t : n.content,
            threadOnClick: {
                onClick: p,
                onContextMenu: h,
            },
            viewThreadsOnClick: _,
        });
    return (0, r.jsx)(l.A, {
        iconNode: (0, r.jsx)(a.ysw, {
            size: "md",
            color: "currentColor",
            className: u.K,
        }),
        timestamp: n.timestamp,
        compact: d,
        children: b,
    });
}
