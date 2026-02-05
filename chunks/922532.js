n.d(t, { m: () => o });
var a = n(64700),
    s = n(341915),
    i = n(561844),
    l = n(590202),
    r = n(652215);
function o(e) {
    let {
            quest: t,
            isExpanded: n,
            setIsExpanded: o,
            expandQuestBar: d,
            isQuestCompleted: c,
            isQuestAccepted: u,
            prevIsQuestAccepted: m,
            impressionRef: h,
        } = e,
        x = a.useRef(-1),
        p = a.useRef(!1),
        [g, _] = a.useState(!1),
        [f, v] = a.useState(!1),
        b = a.useCallback(() => {
            _(!0);
        }, []),
        j = a.useCallback(() => {
            _(!1), p.current || c || o(!1);
        }, [c, o]),
        A = a.useCallback(() => {
            _(!1), c || o(!1), (p.current = !1);
        }, [c, o]),
        C = a.useCallback(() => {
            v(!0);
        }, []),
        S = a.useCallback(() => {
            v(!1), o(!1);
        }, [o]),
        T = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n) return;
                let { withDelay: t = !1 } = e;
                t ? (x.current = window.setTimeout(d, 75)) : d();
            },
            [d, n],
        ),
        y = a.useCallback(() => {
            T();
        }, [T]),
        N = a.useCallback(() => {
            window.clearTimeout(x.current), g || f || p.current || o(!1);
        }, [g, f, o]),
        E = a.useCallback(() => {
            (0, i.av)({
                questId: t.id,
                event: r.HAw.QUEST_HOVER,
                properties: {
                    content_id: s.uF.QUEST_BAR,
                    content_name: (0, l.jO)(s.uF.QUEST_BAR),
                    impression_id: h.current?.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: s.uF.QUEST_BAR_V2,
            }),
                (p.current = !0),
                T({ withDelay: !0 });
        }, [T, h, t.id]),
        I = a.useCallback(() => {
            (0, i.av)({
                questId: t.id,
                event: r.HAw.QUEST_HOVER_OFF,
                properties: {
                    content_id: s.uF.QUEST_BAR,
                    content_name: (0, l.jO)(s.uF.QUEST_BAR),
                    impression_id: h.current?.getId(),
                },
                sourceQuestContent: s.uF.QUEST_BAR_V2,
            }),
                (p.current = !1),
                N();
        }, [N, h, t.id]);
    return (
        a.useEffect(() => {
            f && I();
        }, [f, I]),
        a.useLayoutEffect(() => {
            u && !m && p.current && d();
        }, [d, u, m]),
        a.useLayoutEffect(() => {
            c || !u || m || p.current || o(!1);
        }, [u, c, m, o]),
        {
            ctxMenuOpen: g,
            gameSheetOpen: f,
            handleCtxMenuOpened: b,
            handleCtxMenuClosed: j,
            handleCtxMenuSelection: A,
            handleGameSheetOpened: C,
            handleGameSheetClosed: S,
            handleFocus: T,
            handleFocusWithoutDelay: y,
            handleBlur: N,
            handleMouseEnter: E,
            handleMouseLeave: I,
        }
    );
}
