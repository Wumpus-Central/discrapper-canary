n.d(t, {
    m: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    c = n(239091),
    u = n(605236),
    d = n(45966),
    h = n(31445),
    p = n(22082),
    f = n(703656),
    m = n(306680),
    g = n(709054),
    v = n(540126),
    C = n(434479),
    x = n(981631),
    I = n(176505),
    _ = n(490897),
    Z = n(388032),
    b = n(518360);
function S(e) {
    let { guild: t, selected: S } = e,
        N = (0, h.Z)(t),
        E = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        y = (0, r.Wu)([p.Z], () => Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))),
        j = (0, r.e7)([m.ZP], () => m.ZP.hasUnread(t.id, _.W.GUILD_ONBOARDING_QUESTION)),
        T = y.length > v.Cb,
        P = (0, r.e7)([d.Z, m.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = m.ZP.lastMessageId(t.id, _.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = g.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        A = l.useCallback(() => {
            (0, f.uL)(x.Z5c.CHANNEL(t.id, N ? I.oC.CUSTOMIZE_COMMUNITY : I.oC.CHANNEL_BROWSER));
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
        M = null;
    return (
        (!E || j || T) &&
            !S &&
            !P &&
            (M = (0, i.jsx)(s.TextBadge, {
                color: o.Z.colors.BADGE_BRAND_BG.css,
                text: Z.intl.string(Z.t.y2b7CA),
                className: b.newChannel
            })),
        (0, i.jsx)(C.m, {
            id: 'channels-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: N ? Z.intl.string(Z.t.h9mGOD) : Z.intl.string(Z.t.et6wam),
            selected: S,
            onClick: A,
            onContextMenu: w,
            trailing: M
        })
    );
}
