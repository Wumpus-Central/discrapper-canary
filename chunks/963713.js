n.d(t, { C: () => l, T: () => i });
var a = n(627968),
    s = n(64700);
let i = s.createContext({
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
    l = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: l,
                onCtxMenuClose: r,
                onCtxMenuOpen: o,
                onCtxMenuSelect: d,
                onGameSheetOpen: c,
                onGameSheetClose: u,
                collapsedHeight: m,
                quest: h,
                taskDetails: x,
            } = e,
            p = s.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: l,
                    onCtxMenuClose: r,
                    onCtxMenuOpen: o,
                    onCtxMenuSelect: d,
                    onGameSheetOpen: c,
                    onGameSheetClose: u,
                    collapsedHeight: m,
                    quest: h,
                    taskDetails: x,
                }),
                [n, l, r, o, d, c, u, m, h, x],
            );
        return (0, a.jsx)(i.Provider, { value: p, children: t });
    };
