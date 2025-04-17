n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(739566),
    l = n(834129),
    o = n(388032),
    s = n(40450);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, a.ZP)(t),
        d = c(u),
        p = o.NW.format(o.t['zla/u7'], {
            username: u.nick,
            usernameHook: d,
            topic: t.content
        });
    return (0, r.jsx)(l.Z, {
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
