n.d(t, {
    U: function () {
        return s;
    }
});
var i = n(192379),
    a = n(49898),
    r = n(406014);
let l = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    o = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function s(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: s, setSearchBarState: c } = e,
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (s) {
                    case a.GlobalDiscoverySearchBarState.DEFAULT:
                        i < 20 && c(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case a.GlobalDiscoverySearchBarState.COLLAPSED:
                        i > l && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case a.GlobalDiscoverySearchBarState.FLOATING:
                        i > o && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, s, c]
        ),
        u = i.useCallback(() => {
            c(a.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        m = i.useCallback(() => {
            s === a.GlobalDiscoverySearchBarState.FLOATING && n && c(a.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, s, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: s === a.GlobalDiscoverySearchBarState.FLOATING ? r.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: m
    };
}
