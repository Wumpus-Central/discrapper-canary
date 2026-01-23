n.d(t, {
    m: () => o,
}),
    n(896048);
var a = n(64700),
    l = n(341915),
    r = n(561844),
    i = n(590202),
    s = n(652215);

function o(e) {
    let {
            quest: t,
            isExpanded: n,
            setIsExpanded: o,
            expandQuestBar: c,
            isQuestCompleted: d,
            isQuestAccepted: u,
            prevIsQuestAccepted: m,
            impressionRef: p,
        } = e,
        h = a.useRef(-1),
        x = a.useRef(!1),
        [g, f] = a.useState(!1),
        [b, v] = a.useState(!1),
        j = a.useCallback(() => {
            f(!0);
        }, []),
        _ = a.useCallback(() => {
            f(!1), x.current || d || o(!1);
        }, [d, o]),
        y = a.useCallback(() => {
            f(!1), d || o(!1), (x.current = !1);
        }, [d, o]),
        A = a.useCallback(() => {
            v(!0);
        }, []),
        C = a.useCallback(() => {
            v(!1), o(!1);
        }, [o]),
        S = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n) return;
                let { withDelay: t = !1 } = e;
                t ? (h.current = window.setTimeout(c, 75)) : c();
            },
            [c, n],
        ),
        O = a.useCallback(() => {
            S();
        }, [S]),
        T = a.useCallback(() => {
            window.clearTimeout(h.current), g || b || x.current || o(!1);
        }, [g, b, o]),
        E = a.useCallback(() => {
            var e;
            (0, r.av)({
                questId: t.id,
                event: s.HAw.QUEST_HOVER,
                properties: {
                    content_id: l.uF.QUEST_BAR,
                    content_name: (0, i.jO)(l.uF.QUEST_BAR),
                    impression_id: null == (e = p.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: l.uF.QUEST_BAR_V2,
            }),
                (x.current = !0),
                S({
                    withDelay: !0,
                });
        }, [S, p, t.id]),
        N = a.useCallback(() => {
            var e;
            (0, r.av)({
                questId: t.id,
                event: s.HAw.QUEST_HOVER_OFF,
                properties: {
                    content_id: l.uF.QUEST_BAR,
                    content_name: (0, i.jO)(l.uF.QUEST_BAR),
                    impression_id: null == (e = p.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: l.uF.QUEST_BAR_V2,
            }),
                (x.current = !1),
                T();
        }, [T, p, t.id]);
    return (
        a.useEffect(() => {
            b && N();
        }, [b, N]),
        a.useLayoutEffect(() => {
            u && !m && x.current && c();
        }, [c, u, m]),
        a.useLayoutEffect(() => {
            d || !u || m || x.current || o(!1);
        }, [u, d, m, o]),
        {
            ctxMenuOpen: g,
            gameSheetOpen: b,
            handleCtxMenuOpened: j,
            handleCtxMenuClosed: _,
            handleCtxMenuSelection: y,
            handleGameSheetOpened: A,
            handleGameSheetClosed: C,
            handleFocus: S,
            handleFocusWithoutDelay: O,
            handleBlur: T,
            handleMouseEnter: E,
            handleMouseLeave: N,
        }
    );
}
