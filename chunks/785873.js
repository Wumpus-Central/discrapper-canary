n.d(t, { X: () => s });
var r = n(473749),
    i = n(626135),
    a = n(981631);
let o = 1000;
function s(e, t, n, s) {
    let l = r.useRef(null),
        c = r.useRef(t),
        u = r.useRef({
            positionInSection: n,
            analyticsLocations: s,
        });
    r.useEffect(() => {
        c.current = t;
    }, [t]);
    let d = r.useCallback(() => {
            let {
                    sessionId: t,
                    guildId: n,
                    pageIndex: r,
                    pageTitle: o,
                    section: s,
                    sectionTitle: l,
                    isUserGuildMember: d,
                } = c.current,
                { positionInSection: f, analyticsLocations: _ } = u.current;
            i.default.track(a.rMx.SLAYER_SHOP_CARD_IMPRESSION, {
                slayer_shop_session_id: t,
                sku_id: e,
                guild_id: n,
                page_index: r,
                page_title: o,
                section: s,
                section_title: l,
                position_in_section: f,
                is_user_guild_member: d,
                location_stack: _,
            });
        }, [e]),
        f = r.useCallback(
            (e) => {
                e
                    ? null === l.current &&
                      (l.current = window.setTimeout(() => {
                          d(), (l.current = null);
                      }, o))
                    : null !== l.current && (clearTimeout(l.current), (l.current = null));
            },
            [d],
        );
    return (
        r.useEffect(
            () => () => {
                null !== l.current && (clearTimeout(l.current), (l.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: f }
    );
}
