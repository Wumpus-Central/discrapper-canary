n.d(t, { m: () => s }), n(896048);
var a = n(64700),
    l = n(216456),
    i = n(341915),
    r = n(652215);
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
        _ = a.useCallback(() => {
            g(!0);
        }, []),
        A = a.useCallback(() => {
            g(!1), s(!1);
        }, [s]),
        C = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n) return;
                let { withDelay: t = !1 } = e;
                t ? (p.current = window.setTimeout(o, 75)) : o();
            },
            [o, n],
        ),
        S = a.useCallback(() => {
            C();
        }, [C]),
        O = a.useCallback(() => {
            window.clearTimeout(p.current), f || b || h.current || s(!1);
        }, [f, b, s]),
        E = a.useCallback(() => {
            var e;
            (0, l.av)({
                questId: t.id,
                event: r.HAw.QUEST_HOVER,
                properties: {
                    content_id: i.uF.QUEST_BAR,
                    content_name: (0, l.jO)(i.uF.QUEST_BAR),
                    impression_id: null == (e = m.current) ? void 0 : e.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: i.uF.QUEST_BAR_V2,
            }),
                (h.current = !0),
                C({ withDelay: !0 });
        }, [C, m, t.id]),
        N = a.useCallback(() => {
            var e;
            (0, l.av)({
                questId: t.id,
                event: r.HAw.QUEST_HOVER_OFF,
                properties: {
                    content_id: i.uF.QUEST_BAR,
                    content_name: (0, l.jO)(i.uF.QUEST_BAR),
                    impression_id: null == (e = m.current) ? void 0 : e.getId(),
                },
                sourceQuestContent: i.uF.QUEST_BAR_V2,
            }),
                (h.current = !1),
                O();
        }, [O, m, t.id]);
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
            handleGameSheetOpened: _,
            handleGameSheetClosed: A,
            handleFocus: C,
            handleFocusWithoutDelay: S,
            handleBlur: O,
            handleMouseEnter: E,
            handleMouseLeave: N,
        }
    );
}
