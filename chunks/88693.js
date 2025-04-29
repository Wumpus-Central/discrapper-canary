n.d(t, { U: () => o });
var r = n(73800),
    i = n(49898),
    a = n(794916);
let l = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    s = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: o, setSearchBarState: c } = e,
        d = r.useCallback(
            (e) => {
                if (!t) return;
                let r = Math.round(e);
                switch (o) {
                    case i.GlobalDiscoverySearchBarState.DEFAULT:
                        r < 20 && c(n ? i.GlobalDiscoverySearchBarState.COLLAPSED : i.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case i.GlobalDiscoverySearchBarState.COLLAPSED:
                        r > l && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case i.GlobalDiscoverySearchBarState.FLOATING:
                        r > s && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, o, c]
        ),
        u = r.useCallback(() => {
            c(i.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        p = r.useCallback(() => {
            o === i.GlobalDiscoverySearchBarState.FLOATING && n && c(i.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === i.GlobalDiscoverySearchBarState.FLOATING ? a.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: p
    };
}
