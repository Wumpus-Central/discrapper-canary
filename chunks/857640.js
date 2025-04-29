n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(739566),
    a = n(834129),
    o = n(388032),
    s = n(40450);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, l.ZP)(t),
        d = c(u),
        p = o.intl.format(o.t['zla/u7'], {
            username: u.nick,
            usernameHook: d,
            topic: t.content
        });
    return (0, r.jsx)(a.Z, {
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
