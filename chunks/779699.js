n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(457926),
    l = n(388032),
    c = n(606629);
let u = function (e) {
    let { iconType: t, children: n } = e,
        i = null;
    switch (t) {
        case 'voice':
            i = (0, r.jsx)(a.gj8, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.BVZqJi)
            });
            break;
        case 'voice-locked':
            i = (0, r.jsx)(a.mBM, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.aa0FYm)
            });
            break;
        case 'stage':
            i = (0, r.jsx)(a.ewx, {
                size: 'lg',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.EErMzM)
            });
            break;
        case 'stage-locked':
            i = (0, r.jsx)(a.mBM, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.pKZ4Iy)
            });
            break;
        case 'thread':
            i = (0, r.jsx)(a.or_, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t['7Xm5QE'])
            });
            break;
        case 'text':
            i = (0, r.jsx)(a.VL1, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.GK18KC)
            });
            break;
        case 'forum':
            i = (0, r.jsx)(a.Mmi, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.GbryDQ)
            });
            break;
        case 'post':
            i = (0, r.jsx)(a.kBi, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.Y4REmJ)
            });
            break;
        case 'home':
        case 'guide':
            i = (0, r.jsx)(a.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.VbpLyc)
            });
            break;
        case 'browse':
        case 'customize':
            i = (0, r.jsx)(a.H$4, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.et6wam)
            });
            break;
        case 'message':
            i = (0, r.jsx)(a.kBi, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.BAB0yM)
            });
            break;
        case 'locked':
            i = (0, r.jsx)(a.mBM, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t['/YzI6+'])
            });
            break;
        case 'media':
            i = (0, r.jsx)(a.XBm, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.seKITE)
            });
            break;
        case 'linked-roles':
            i = (0, r.jsx)(a.xPt, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': l.NW.string(l.t.ghtnsr)
            });
    }
    return (0, r.jsxs)('span', {
        className: o()('channelWithIcon', { [c.iconMentionText]: 'text' === t }),
        children: [
            (0, r.jsx)(s.Z, { children: i }),
            null != n && '' !== n
                ? (0, r.jsx)('span', {
                      className: c.name,
                      children: n
                  })
                : null
        ]
    });
};
