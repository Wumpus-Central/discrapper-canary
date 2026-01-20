n.d(t, { t: () => s }), n(388685);
var a = n(473749),
    r = n(617136),
    i = n(49436),
    l = n(981631);
function s(e) {
    let {
            quest: t,
            isExpanded: n,
            setIsExpanded: s,
            expandQuestBar: o,
            isQuestCompleted: c,
            isQuestAccepted: d,
            prevIsQuestAccepted: u,
            impressionRef: m,
        } = e,
        p = a.useRef(-1),
        h = a.useRef(!1),
        [f, x] = a.useState(!1),
        [b, g] = a.useState(!1),
        v = a.useCallback(() => {
            x(!0);
        }, []),
        j = a.useCallback(() => {
            x(!1), h.current || c || s(!1);
        }, [c, s]),
        y = a.useCallback(() => {
            x(!1), c || s(!1), (h.current = !1);
        }, [c, s]),
        C = a.useCallback(() => {
            g(!0);
        }, []),
        _ = a.useCallback(() => {
            g(!1), s(!1);
        }, [s]),
        S = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n) return;
                let { withDelay: t = !1 } = e;
                t ? (p.current = window.setTimeout(o, 75)) : o();
            },
            [o, n],
        ),
        E = a.useCallback(() => {
            S();
        }, [S]),
        T = a.useCallback(() => {
            window.clearTimeout(p.current), f || b || h.current || s(!1);
        }, [f, b, s]),
        O = a.useCallback(() => {
            var e;
            (0, r.dA)({
                questId: t.id,
                event: l.rMx.QUEST_HOVER,
                properties: {
                    content_id: i.jn.QUEST_BAR,
                    content_name: (0, r._b)(i.jn.QUEST_BAR),
                    impression_id: null == (e = m.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: i.jn.QUEST_BAR_V2,
            }),
                (h.current = !0),
                S({ withDelay: !0 });
        }, [S, m, t.id]),
        N = a.useCallback(() => {
            var e;
            (0, r.dA)({
                questId: t.id,
                event: l.rMx.QUEST_HOVER_OFF,
                properties: {
                    content_id: i.jn.QUEST_BAR,
                    content_name: (0, r._b)(i.jn.QUEST_BAR),
                    impression_id: null == (e = m.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: i.jn.QUEST_BAR_V2,
            }),
                (h.current = !1),
                T();
        }, [T, m, t.id]);
    return (
        a.useEffect(() => {
            b && N();
        }, [b, N]),
        a.useLayoutEffect(() => {
            d && !u && h.current && o();
        }, [o, d, u]),
        a.useLayoutEffect(() => {
            c || !d || u || h.current || s(!1);
        }, [d, c, u, s]),
        {
            ctxMenuOpen: f,
            gameSheetOpen: b,
            handleCtxMenuOpened: v,
            handleCtxMenuClosed: j,
            handleCtxMenuSelection: y,
            handleGameSheetOpened: C,
            handleGameSheetClosed: _,
            handleFocus: S,
            handleFocusWithoutDelay: E,
            handleBlur: T,
            handleMouseEnter: O,
            handleMouseLeave: N,
        }
    );
}
