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
            onQuestBarFocus: x,
        } = e,
        p = a.useRef(-1),
        g = a.useRef(!1),
        [_, f] = a.useState(!1),
        [v, b] = a.useState(!1),
        j = a.useCallback(() => {
            f(!0);
        }, []),
        A = a.useCallback(() => {
            f(!1), g.current || c || o(!1);
        }, [c, o]),
        C = a.useCallback(() => {
            f(!1), c || o(!1), (g.current = !1);
        }, [c, o]),
        S = a.useCallback(() => {
            b(!0);
        }, []),
        T = a.useCallback(() => {
            b(!1), o(!1);
        }, [o]),
        y = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ((x(), n)) return;
                let { withDelay: t = !1 } = e;
                t ? (p.current = window.setTimeout(d, 75)) : d();
            },
            [d, n, x],
        ),
        N = a.useCallback(() => {
            y();
        }, [y]),
        E = a.useCallback(() => {
            window.clearTimeout(p.current), _ || v || g.current || o(!1);
        }, [_, v, o]),
        I = a.useCallback(() => {
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
                (g.current = !0),
                y({ withDelay: !0 });
        }, [y, h, t.id]),
        k = a.useCallback(() => {
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
                (g.current = !1),
                E();
        }, [E, h, t.id]);
    return (
        a.useEffect(() => {
            v && k();
        }, [v, k]),
        a.useLayoutEffect(() => {
            u && !m && g.current && d();
        }, [d, u, m]),
        a.useLayoutEffect(() => {
            c || !u || m || g.current || o(!1);
        }, [u, c, m, o]),
        {
            ctxMenuOpen: _,
            gameSheetOpen: v,
            handleCtxMenuOpened: j,
            handleCtxMenuClosed: A,
            handleCtxMenuSelection: C,
            handleGameSheetOpened: S,
            handleGameSheetClosed: T,
            handleFocus: y,
            handleFocusWithoutDelay: N,
            handleBlur: E,
            handleMouseEnter: I,
            handleMouseLeave: k,
        }
    );
}
