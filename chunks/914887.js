"use strict";
n.d(t, { a: () => r });
var a = n(64700),
    i = n(954571),
    l = n(652215);
function r(e, t, n, r) {
    let s = a.useRef(null),
        c = a.useRef(t),
        o = a.useRef({ positionInSection: n, analyticsLocations: r });
    a.useEffect(() => {
        c.current = t;
    }, [t]);
    let d = a.useCallback(() => {
            let {
                    sessionId: t,
                    guildId: n,
                    pageIndex: a,
                    pageTitle: r,
                    pageSection: s,
                    pageSectionTitle: d,
                    isUserGuildMember: u,
                    pageHasLeaderboard: m,
                } = c.current,
                { positionInSection: f, analyticsLocations: h } = o.current;
            i.default.track(l.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                slayer_storefront_session_id: t,
                sku_id: e,
                guild_id: n,
                page_index: a,
                page_title: r,
                page_section: s,
                page_section_title: d,
                position_in_section: f,
                is_user_guild_member: u,
                page_has_leaderboard: m,
                location_stack: h,
            });
        }, [e]),
        u = a.useCallback(
            (e) => {
                e
                    ? null === s.current &&
                      (s.current = window.setTimeout(() => {
                          d(), (s.current = null);
                      }, 1e3))
                    : null !== s.current && (clearTimeout(s.current), (s.current = null));
            },
            [d],
        );
    return (
        a.useEffect(
            () => () => {
                null !== s.current && (clearTimeout(s.current), (s.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: u }
    );
}
