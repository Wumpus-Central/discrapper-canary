a.r(d);
var i = a(287809),
    t = a(129230),
    n = a(982240),
    r = a(652215);
function _(e) {
    let {
            actionName: d,
            badge: a,
            displayedUserId: _,
            isSociallyNavigated: l,
            hasUnreadIndicator: o,
            source: s,
            surface: g,
        } = e,
        u = i.default.getCurrentUser()?.id,
        c = null != a && null != u ? n.Ay.getBadgeById(a.badge_id, u) : void 0,
        b = null != a && null != u ? n.Ay.getRemainingToNextTier(a.badge_id, u) : void 0,
        p = null != _ ? n.Ay.getBadges(_).filter((e) => e.owned).length : void 0;
    t.default.track(r.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: d,
        badge_id: a?.badge_id,
        badge_tier: null != a ? ((a.owned ? a.current_tier : a.next_tier) ?? a.tiers?.[0]?.key) : void 0,
        badge_owner_id: _,
        is_owned: c?.owned ?? !1,
        progress_to_next_tier: b,
        is_earnable: a?.is_earnable ?? !1,
        is_socially_navigated: l,
        total_badges_owned: p,
        has_unread_indicator: o,
        surface: g,
        source: s,
    });
}
a.d(
    d,
    {},
    {
        default: _,
        trackOwnBadgeDirectoryOpened: function (e) {
            _({
                actionName: "badge_directory_opened",
                displayedUserId: i.default.getCurrentUser()?.id,
                isSociallyNavigated: !1,
                hasUnreadIndicator: !1,
                source: e,
            });
        },
    },
);
