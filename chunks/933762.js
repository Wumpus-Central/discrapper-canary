"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(47167),
    a = n(734057),
    c = n(763754),
    o = n(888675),
    u = n(985018),
    d = n(449105);
function _(e) {
    let {
            message: t,
            compact: n,
            usernameHook: _,
            onClickThread: E,
            onClickViewThreads: A,
            onContextMenuThread: m,
        } = e,
        I = (0, c.Ay)(t),
        T = _(I),
        g = (0, r.bG)([a.A], () => a.A.getChannel(t.messageReference?.channel_id)),
        N = (0, l.Ay)(g),
        f = u.intl.format(u.t.cZ9Uf2, {
            actorName: I.nick,
            actorHook: T,
            threadName: N ?? t.content,
            threadOnClick: { onClick: E, onContextMenu: m },
            viewThreadsOnClick: A,
        });
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(s.ysw, { size: "md", color: "currentColor", className: d.K }),
        timestamp: t.timestamp,
        compact: n,
        children: f,
    });
}
