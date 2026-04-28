r.d(t, { a: () => a });
var n = r(64700),
    u = r(954571),
    l = r(652215);
function a(e, t, r, a) {
    let i = n.useRef(null),
        s = n.useRef(t),
        o = n.useRef({ positionInSection: r, analyticsLocations: a });
    n.useEffect(() => {
        s.current = t;
    }, [t]);
    let c = n.useCallback(() => {
            let {
                    sessionId: t,
                    guildId: r,
                    pageIndex: n,
                    pageTitle: a,
                    pageSection: i,
                    pageSectionTitle: c,
                    isUserGuildMember: d,
                    pageHasLeaderboard: _,
                } = s.current,
                { positionInSection: f, analyticsLocations: g } = o.current;
            u.default.track(l.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                slayer_storefront_session_id: t,
                sku_id: e,
                guild_id: r,
                page_index: n,
                page_title: a,
                page_section: i,
                page_section_title: c,
                position_in_section: f,
                is_user_guild_member: d,
                page_has_leaderboard: _,
                location_stack: g,
            });
        }, [e]),
        d = n.useCallback(
            (e) => {
                e
                    ? null === i.current &&
                      (i.current = window.setTimeout(() => {
                          c(), (i.current = null);
                      }, 1e3))
                    : null !== i.current && (clearTimeout(i.current), (i.current = null));
            },
            [c],
        );
    return (
        n.useEffect(
            () => () => {
                null !== i.current && (clearTimeout(i.current), (i.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: d }
    );
}
