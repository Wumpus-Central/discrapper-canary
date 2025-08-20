n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(739566),
    o = n(834129),
    a = n(388032),
    s = n(519824);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, l.ZP)(t),
        d = c(u),
        p = a.intl.format(a.t["zla/u7"], {
            username: u.nick,
            usernameHook: d,
            topic: t.content,
        });
    return (0, r.jsx)(o.Z, {
        className: s.stageSystemMessage,
        iconNode: (0, r.jsx)(i.ewx, {
            size: "md",
            color: "currentColor",
        }),
        iconContainerClassName: s.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: p,
    });
}
