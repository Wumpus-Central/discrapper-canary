"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(884362),
    a = n(741918),
    s = n(267102),
    o = n(374803);
function l(e) {
    let { navId: t, scrollerRef: n, state: l, onFocus: u } = e,
        { renderWindow: c } = r.useContext(s.Ay),
        d = (e, t) => {
            let r = c.document.querySelector(e);
            null != r && n.current?.scrollIntoViewNode({ node: r }), u?.(+t);
        },
        _ = (e, t, r) => {
            if ((n.current?.scrollToTop(), e && null != l.query)) {
                let e = l.query.typeInfo.focusMode,
                    n = e !== o.e.MANUAL && (e !== o.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
                l.isVisible && (!0 !== t || !1 !== n) && !0 !== r
                    ? (p.setFocus("0"), u?.(0))
                    : (p.setFocus(null), u?.(null));
            }
        },
        f = (e) => {
            if ((n.current?.scrollToBottom(), e && null != l.query && l.query.resultCount > 0)) {
                let e = l.query.resultCount - 1;
                p.setFocus(e.toString()), u?.(e);
            }
        },
        p = (0, i.Ay)({
            id: t,
            isEnabled: l.isVisible,
            orientation: a.Gl.VERTICAL,
            useVirtualFocus: !0,
            setFocus: d,
            onNavigateNextAtEnd: () => _(!0),
            onNavigatePreviousAtStart: () => f(!0),
            scrollToStart: () => (_(!1, !1), Promise.resolve()),
            scrollToEnd: () => (f(!1), Promise.resolve()),
        }),
        h = r.useRef(_);
    return (
        r.useEffect(() => {
            h.current = _;
        }),
        r.useEffect(() => {
            h.current(!0, !0, l.isInitialAfterError);
        }, [l.query?.type, l.query?.queryText, l.query?.isLoading, l.isVisible, l.isInitialAfterError]),
        p
    );
}
