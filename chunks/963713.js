n.d(t, {
    C: () => r,
    T: () => i,
});
var a = n(627968),
    l = n(64700);
let i = l.createContext({
        onCtxMenuClose: () => {},
        onCtxMenuOpen: () => {},
        onCtxMenuSelect: () => {},
        onGameSheetOpen: () => {},
        onGameSheetClose: () => {},
        collapsedHeight: 0,
        isExpanded: !1,
        isExpansionAnimationComplete: !1,
        quest: null,
        taskDetails: null,
    }),
    r = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: r,
                onCtxMenuClose: s,
                onCtxMenuOpen: o,
                onCtxMenuSelect: c,
                onGameSheetOpen: d,
                onGameSheetClose: u,
                collapsedHeight: m,
                quest: p,
                taskDetails: h,
            } = e,
            f = l.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: r,
                    onCtxMenuClose: s,
                    onCtxMenuOpen: o,
                    onCtxMenuSelect: c,
                    onGameSheetOpen: d,
                    onGameSheetClose: u,
                    collapsedHeight: m,
                    quest: p,
                    taskDetails: h,
                }),
                [n, r, s, o, c, d, u, m, p, h],
            );
        return (0, a.jsx)(i.Provider, {
            value: f,
            children: t,
        });
    };
