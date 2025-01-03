t.d(n, {
    U: function () {
        return s;
    }
});
var a = t(192379),
    i = t(49898),
    r = t(406014);
let l = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    o = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function s(e) {
    let { isSearchBarVisible: n, isSearchBarEmpty: t, searchBarState: s, setSearchBarState: c } = e,
        d = a.useCallback(
            (e) => {
                if (!n) return;
                let a = Math.round(e);
                switch (s) {
                    case i.GlobalDiscoverySearchBarState.DEFAULT:
                        a < 20 && c(t ? i.GlobalDiscoverySearchBarState.COLLAPSED : i.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case i.GlobalDiscoverySearchBarState.COLLAPSED:
                        a > l && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case i.GlobalDiscoverySearchBarState.FLOATING:
                        a > o && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [t, n, s, c]
        ),
        u = a.useCallback(() => {
            c(i.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        m = a.useCallback(() => {
            s === i.GlobalDiscoverySearchBarState.FLOATING && t && c(i.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [t, s, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: s === i.GlobalDiscoverySearchBarState.FLOATING ? r.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: m
    };
}
