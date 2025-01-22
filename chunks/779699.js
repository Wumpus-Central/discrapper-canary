var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(457926),
    u = r(388032),
    c = r(400357);
function d(e) {
    let { iconType: n, children: r } = e,
        a = null;
    switch (n) {
        case 'voice':
            a = (0, i.jsx)(s.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.BVZqJi)
            });
            break;
        case 'voice-locked':
            a = (0, i.jsx)(s.LockIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.aa0FYm)
            });
            break;
        case 'stage':
            a = (0, i.jsx)(s.StageIcon, {
                size: 'lg',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.EErMzM)
            });
            break;
        case 'stage-locked':
            a = (0, i.jsx)(s.LockIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.pKZ4Iy)
            });
            break;
        case 'thread':
            a = (0, i.jsx)(s.ThreadIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t['7Xm5QE'])
            });
            break;
        case 'text':
            a = (0, i.jsx)(s.TextIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.GK18KC)
            });
            break;
        case 'forum':
            a = (0, i.jsx)(s.ForumIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.GbryDQ)
            });
            break;
        case 'post':
            a = (0, i.jsx)(s.ChatIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.Y4REmJ)
            });
            break;
        case 'home':
        case 'guide':
            a = (0, i.jsx)(s.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.VbpLyc)
            });
            break;
        case 'browse':
        case 'customize':
            a = (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.et6wam)
            });
            break;
        case 'message':
            a = (0, i.jsx)(s.ChatIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.BAB0yM)
            });
            break;
        case 'locked':
            a = (0, i.jsx)(s.LockIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t['/YzI6+'])
            });
            break;
        case 'media':
            a = (0, i.jsx)(s.ImageIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.seKITE)
            });
            break;
        case 'linked-roles':
            a = (0, i.jsx)(s.LinkIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon,
                'aria-label': u.intl.string(u.t.ghtnsr)
            });
    }
    return (0, i.jsxs)('span', {
        className: o()('channelWithIcon', { [c.iconMentionText]: 'text' === n }),
        children: [
            (0, i.jsx)(l.Z, { children: a }),
            null != r && '' !== r
                ? (0, i.jsx)('span', {
                      className: c.name,
                      children: r
                  })
                : null
        ]
    });
}
n.Z = d;
