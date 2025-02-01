n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(457926),
    l = n(388032),
    u = n(400357);
let c = function (e) {
    let { iconType: t, children: n } = e,
        r = null;
    switch (t) {
        case 'voice':
            r = (0, i.jsx)(s.gj8, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.BVZqJi)
            });
            break;
        case 'voice-locked':
            r = (0, i.jsx)(s.mBM, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.aa0FYm)
            });
            break;
        case 'stage':
            r = (0, i.jsx)(s.ewx, {
                size: 'lg',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.EErMzM)
            });
            break;
        case 'stage-locked':
            r = (0, i.jsx)(s.mBM, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.pKZ4Iy)
            });
            break;
        case 'thread':
            r = (0, i.jsx)(s.or_, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t['7Xm5QE'])
            });
            break;
        case 'text':
            r = (0, i.jsx)(s.VL1, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.GK18KC)
            });
            break;
        case 'forum':
            r = (0, i.jsx)(s.Mmi, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.GbryDQ)
            });
            break;
        case 'post':
            r = (0, i.jsx)(s.kBi, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.Y4REmJ)
            });
            break;
        case 'home':
        case 'guide':
            r = (0, i.jsx)(s.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.VbpLyc)
            });
            break;
        case 'browse':
        case 'customize':
            r = (0, i.jsx)(s.H$4, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.et6wam)
            });
            break;
        case 'message':
            r = (0, i.jsx)(s.kBi, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.BAB0yM)
            });
            break;
        case 'locked':
            r = (0, i.jsx)(s.mBM, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t['/YzI6+'])
            });
            break;
        case 'media':
            r = (0, i.jsx)(s.XBm, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.seKITE)
            });
            break;
        case 'linked-roles':
            r = (0, i.jsx)(s.xPt, {
                size: 'md',
                color: 'currentColor',
                className: u.icon,
                'aria-label': l.intl.string(l.t.ghtnsr)
            });
    }
    return (0, i.jsxs)('span', {
        className: a()('channelWithIcon', { [u.iconMentionText]: 'text' === t }),
        children: [
            (0, i.jsx)(o.Z, { children: r }),
            null != n && '' !== n
                ? (0, i.jsx)('span', {
                      className: u.name,
                      children: n
                  })
                : null
        ]
    });
};
