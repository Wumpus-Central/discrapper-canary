n.d(t, { m: () => S });
var i = n(200651),
    l = n(192379),
    r = n(399606),
    o = n(704215),
    a = n(692547),
    s = n(481060),
    c = n(239091),
    d = n(605236),
    u = n(45966),
    h = n(31445),
    p = n(22082),
    m = n(703656),
    g = n(306680),
    f = n(709054),
    _ = n(540126),
    v = n(434479),
    C = n(981631),
    x = n(176505),
    I = n(490897),
    Z = n(388032),
    b = n(327262);
function S(e) {
    let { guild: t, selected: S } = e,
        N = (0, h.Z)(t),
        E = (0, d.wE)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        j = (0, r.Wu)([p.Z], () => Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))),
        y = (0, r.e7)([g.ZP], () => g.ZP.hasUnread(t.id, I.W.GUILD_ONBOARDING_QUESTION)),
        T = j.length > _.Cb,
        A = (0, r.e7)([u.Z, g.ZP], () => {
            let e = u.Z.lastFetchedAt(t.id),
                n = g.ZP.lastMessageId(t.id, I.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = f.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        P = l.useCallback(() => {
            (0, m.uL)(C.Z5c.CHANNEL(t.id, N ? x.oC.CUSTOMIZE_COMMUNITY : x.oC.CHANNEL_BROWSER));
        }, [t.id, N]),
        R = l.useCallback(
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
        w = null;
    return (
        (E && !y && !T) ||
            S ||
            A ||
            (w = (0, i.jsx)(s.IGR, {
                color: a.Z.colors.BADGE_BRAND_BG.css,
                text: Z.intl.string(Z.t.y2b7CA),
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
            text: N ? Z.intl.string(Z.t.h9mGOD) : Z.intl.string(Z.t.et6wam),
            selected: S,
            onClick: P,
            onContextMenu: R,
            trailing: w
        })
    );
}
