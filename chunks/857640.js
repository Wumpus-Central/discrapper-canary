n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(739566),
    o = n(834129),
    s = n(388032),
    l = n(519824);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, a.ZP)(t),
        d = c(u),
        f = s.intl.format(s.t["zla/ux"], {
            username: u.nick,
            usernameHook: d,
            topic: t.content,
        });
    return (0, r.jsx)(o.Z, {
        className: l.stageSystemMessage,
        iconNode: (0, r.jsx)(i.ewx, {
            size: "md",
            color: "currentColor",
        }),
        iconContainerClassName: l.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: f,
    });
}
