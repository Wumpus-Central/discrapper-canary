n.d(t, {
    a: () => a,
});
var r = n(64700),
    i = n(954571),
    l = n(652215);

function a(e, t, n, a) {
    let s = r.useRef(null),
        o = r.useRef(t),
        c = r.useRef({
            positionInSection: n,
            analyticsLocations: a,
        });
    r.useEffect(() => {
        o.current = t;
    }, [t]);
    let u = r.useCallback(() => {
            let {
                    sessionId: t,
                    guildId: n,
                    pageIndex: r,
                    pageTitle: a,
                    pageSection: s,
                    pageSectionTitle: u,
                    isUserGuildMember: d,
                    pageHasLeaderboard: p,
                } = o.current,
                { positionInSection: m, analyticsLocations: f } = c.current;
            i.default.track(l.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                slayer_storefront_session_id: t,
                sku_id: e,
                guild_id: n,
                page_index: r,
                page_title: a,
                page_section: s,
                page_section_title: u,
                position_in_section: m,
                is_user_guild_member: d,
                page_has_leaderboard: p,
                location_stack: f,
            });
        }, [e]),
        d = r.useCallback(
            (e) => {
                e
                    ? null === s.current &&
                      (s.current = window.setTimeout(() => {
                          u(), (s.current = null);
                      }, 1e3))
                    : null !== s.current && (clearTimeout(s.current), (s.current = null));
            },
            [u],
        );
    return (
        r.useEffect(
            () => () => {
                null !== s.current && (clearTimeout(s.current), (s.current = null));
            },
            [],
        ),
        {
            handleCardVisibilityChange: d,
        }
    );
}
