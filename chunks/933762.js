n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(734057),
    s = n(763754),
    o = n(888675),
    d = n(985018),
    c = n(324208);
function u(e) {
    let {
            message: t,
            compact: n,
            usernameHook: u,
            onClickThread: m,
            onClickViewThreads: _,
            onContextMenuThread: h,
        } = e,
        p = (0, s.Ay)(t),
        g = u(p),
        A = (0, l.bG)([r.A], () => r.A.getChannel(t.messageReference?.channel_id)),
        f = d.intl.format(d.t.cZ9Uf2, {
            actorName: p.nick,
            actorHook: g,
            threadName: A?.name ?? t.content,
            threadOnClick: { onClick: m, onContextMenu: h },
            viewThreadsOnClick: _,
        });
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(a.ysw, { size: "md", color: "currentColor", className: c.K }),
        timestamp: t.timestamp,
        compact: n,
        children: f,
    });
}
