n.d(t, { C: () => a, T: () => l });
var i = n(627968),
    s = n(64700);
let l = s.createContext({
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
    a = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: a,
                onCtxMenuClose: r,
                onCtxMenuOpen: o,
                onCtxMenuSelect: d,
                onGameSheetOpen: c,
                onGameSheetClose: u,
                collapsedHeight: p,
                quest: h,
                taskDetails: m,
            } = e,
            _ = s.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: a,
                    onCtxMenuClose: r,
                    onCtxMenuOpen: o,
                    onCtxMenuSelect: d,
                    onGameSheetOpen: c,
                    onGameSheetClose: u,
                    collapsedHeight: p,
                    quest: h,
                    taskDetails: m,
                }),
                [n, a, r, o, d, c, u, p, h, m],
            );
        return (0, i.jsx)(l.Provider, { value: _, children: t });
    };
