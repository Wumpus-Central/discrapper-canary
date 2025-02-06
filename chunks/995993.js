n.d(t, { m: () => S });
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    c = n(239091),
    d = n(605236),
    u = n(45966),
    h = n(31445),
    p = n(22082),
    g = n(703656),
    m = n(306680),
    f = n(709054),
    _ = n(540126),
    v = n(434479),
    C = n(981631),
    x = n(176505),
    Z = n(490897),
    I = n(388032),
    b = n(518360);
function S(e) {
    let { guild: t, selected: S } = e,
        N = (0, h.Z)(t),
        E = (0, d.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        j = (0, r.Wu)([p.Z], () => Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))),
        y = (0, r.e7)([m.ZP], () => m.ZP.hasUnread(t.id, Z.W.GUILD_ONBOARDING_QUESTION)),
        A = j.length > _.Cb,
        P = (0, r.e7)([u.Z, m.ZP], () => {
            let e = u.Z.lastFetchedAt(t.id),
                n = m.ZP.lastMessageId(t.id, Z.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = f.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        T = l.useCallback(() => {
            (0, g.uL)(C.Z5c.CHANNEL(t.id, N ? x.oC.CUSTOMIZE_COMMUNITY : x.oC.CHANNEL_BROWSER));
        }, [t.id, N]),
        w = l.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('8926').then(n.bind(n, 156673));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            },
            [t]
        ),
        R = null;
    return (
        (E && !y && !A) ||
            S ||
            P ||
            (R = (0, i.jsx)(s.IGR, {
                color: o.Z.colors.BADGE_BRAND_BG.css,
                text: I.intl.string(I.t.y2b7CA),
                className: b.newChannel
            })),
        (0, i.jsx)(v.m, {
            id: 'channels-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(s.H$4, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: N ? I.intl.string(I.t.h9mGOD) : I.intl.string(I.t.et6wam),
            selected: S,
            onClick: T,
            onContextMenu: w,
            trailing: R
        })
    );
}
