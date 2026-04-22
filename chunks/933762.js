"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(163328),
    s = n(47167),
    a = n(734057),
    o = n(763754),
    c = n(888675),
    u = n(985018),
    d = n(871073);
function _(e) {
    let {
            message: t,
            compact: n,
            usernameHook: _,
            onClickThread: E,
            onClickViewThreads: A,
            onContextMenuThread: m,
        } = e,
        I = (0, o.Ay)(t),
        T = _(I),
        N = (0, r.bG)([a.A], () => a.A.getChannel(t.messageReference?.channel_id)),
        g = (0, s.Ay)(N),
        p = u.intl.format(u.t.cZ9Uf2, {
            actorName: I.nick,
            actorHook: T,
            threadName: g ?? t.content,
            threadOnClick: { onClick: E, onContextMenu: m },
            viewThreadsOnClick: A,
        });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(l.y, { size: "md", color: "currentColor", className: d.K }),
        timestamp: t.timestamp,
        compact: n,
        children: p,
    });
}
