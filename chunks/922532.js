n.d(t, { m: () => o });
var i = n(64700),
    s = n(341915),
    l = n(561844),
    a = n(590202),
    r = n(652215);
function o(e) {
    let {
            quest: t,
            isExpanded: n,
            setIsExpanded: o,
            expandQuestBar: d,
            isQuestCompleted: c,
            isQuestAccepted: u,
            prevIsQuestAccepted: p,
            impressionRef: h,
        } = e,
        m = i.useRef(-1),
        _ = i.useRef(!1),
        [A, f] = i.useState(!1),
        [g, x] = i.useState(!1),
        E = i.useCallback(() => {
            f(!0);
        }, []),
        C = i.useCallback(() => {
            f(!1), _.current || c || o(!1);
        }, [c, o]),
        T = i.useCallback(() => {
            f(!1), c || o(!1), (_.current = !1);
        }, [c, o]),
        v = i.useCallback(() => {
            x(!0);
        }, []),
        S = i.useCallback(() => {
            x(!1), o(!1);
        }, [o]),
        b = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n) return;
                let { withDelay: t = !1 } = e;
                t ? (m.current = window.setTimeout(d, 75)) : d();
            },
            [d, n],
        ),
        j = i.useCallback(() => {
            b();
        }, [b]),
        I = i.useCallback(() => {
            window.clearTimeout(m.current), A || g || _.current || o(!1);
        }, [A, g, o]),
        R = i.useCallback(() => {
            (0, l.av)({
                questId: t.id,
                event: r.HAw.QUEST_HOVER,
                properties: {
                    content_id: s.uF.QUEST_BAR,
                    content_name: (0, a.jO)(s.uF.QUEST_BAR),
                    impression_id: h.current?.getId(),
                },
                shouldExtendSession: !0,
                sourceQuestContent: s.uF.QUEST_BAR_V2,
            }),
                (_.current = !0),
                b({ withDelay: !0 });
        }, [b, h, t.id]),
        N = i.useCallback(() => {
            (0, l.av)({
                questId: t.id,
                event: r.HAw.QUEST_HOVER_OFF,
                properties: {
                    content_id: s.uF.QUEST_BAR,
                    content_name: (0, a.jO)(s.uF.QUEST_BAR),
                    impression_id: h.current?.getId(),
                },
                sourceQuestContent: s.uF.QUEST_BAR_V2,
            }),
                (_.current = !1),
                I();
        }, [I, h, t.id]);
    return (
        i.useEffect(() => {
            g && N();
        }, [g, N]),
        i.useLayoutEffect(() => {
            u && !p && _.current && d();
        }, [d, u, p]),
        i.useLayoutEffect(() => {
            c || !u || p || _.current || o(!1);
        }, [u, c, p, o]),
        {
            ctxMenuOpen: A,
            gameSheetOpen: g,
            handleCtxMenuOpened: E,
            handleCtxMenuClosed: C,
            handleCtxMenuSelection: T,
            handleGameSheetOpened: v,
            handleGameSheetClosed: S,
            handleFocus: b,
            handleFocusWithoutDelay: j,
            handleBlur: I,
            handleMouseEnter: R,
            handleMouseLeave: N,
        }
    );
}
