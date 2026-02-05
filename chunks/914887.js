n.d(t, { a: () => r });
var i = n(64700),
    l = n(954571),
    a = n(652215);
function r(e, t, n, r) {
    let s = i.useRef(null),
        o = i.useRef(t),
        d = i.useRef({ positionInSection: n, analyticsLocations: r });
    i.useEffect(() => {
        o.current = t;
    }, [t]);
    let c = i.useCallback(() => {
            let {
                    sessionId: t,
                    guildId: n,
                    pageIndex: i,
                    pageTitle: r,
                    pageSection: s,
                    pageSectionTitle: c,
                    isUserGuildMember: u,
                    pageHasLeaderboard: m,
                } = o.current,
                { positionInSection: _, analyticsLocations: h } = d.current;
            l.default.track(a.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                slayer_storefront_session_id: t,
                sku_id: e,
                guild_id: n,
                page_index: i,
                page_title: r,
                page_section: s,
                page_section_title: c,
                position_in_section: _,
                is_user_guild_member: u,
                page_has_leaderboard: m,
                location_stack: h,
            });
        }, [e]),
        u = i.useCallback(
            (e) => {
                e
                    ? null === s.current &&
                      (s.current = window.setTimeout(() => {
                          c(), (s.current = null);
                      }, 1e3))
                    : null !== s.current && (clearTimeout(s.current), (s.current = null));
            },
            [c],
        );
    return (
        i.useEffect(
            () => () => {
                null !== s.current && (clearTimeout(s.current), (s.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: u }
    );
}
