n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(739566),
    o = n(834129),
    l = n(388032),
    s = n(931505);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        d = (0, a.ZP)(t),
        u = c(d),
        p = l.NW.format(l.t['zla/u7'], {
            username: d.nick,
            usernameHook: u,
            topic: t.content
        });
    return (0, r.jsx)(o.Z, {
        className: s.stageSystemMessage,
        iconNode: (0, r.jsx)(i.ewx, {
            size: 'md',
            color: 'currentColor'
        }),
        iconContainerClassName: s.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: p
    });
}
