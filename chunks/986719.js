"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(884362),
    s = n(741918),
    a = n(267102),
    o = n(374803);
function l(e) {
    let { navId: t, scrollerRef: n, state: l, onFocus: u } = e,
        { renderWindow: c } = r.useContext(a.Ay),
        d = (e, t, r) => {
            if ((n.current?.scrollToTop(), e && null != l.query)) {
                let e = l.query.typeInfo.focusMode,
                    n = e !== o.e.MANUAL && (e !== o.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
                l.isVisible && (!0 !== t || !1 !== n) && !0 !== r
                    ? (f.setFocus("0"), u?.(0))
                    : (f.setFocus(null), u?.(null));
            }
        },
        _ = (e) => {
            if ((n.current?.scrollToBottom(), e && null != l.query && l.query.resultCount > 0)) {
                let e = l.query.resultCount - 1;
                f.setFocus(e.toString()), u?.(e);
            }
        },
        f = (0, i.Ay)({
            id: t,
            isEnabled: l.isVisible,
            orientation: s.Gl.VERTICAL,
            useVirtualFocus: !0,
            setFocus: (e, t) => {
                let r = c.document.querySelector(e);
                null != r && n.current?.scrollIntoViewNode({ node: r }), u?.(+t);
            },
            onNavigateNextAtEnd: () => d(!0),
            onNavigatePreviousAtStart: () => _(!0),
            scrollToStart: () => (d(!1, !1), Promise.resolve()),
            scrollToEnd: () => (_(!1), Promise.resolve()),
        }),
        p = r.useRef(d);
    return (
        r.useEffect(() => {
            p.current = d;
        }),
        r.useEffect(() => {
            p.current(!0, !0, l.isInitialAfterError);
        }, [l.query?.type, l.query?.queryText, l.query?.isLoading, l.isVisible, l.isInitialAfterError]),
        f
    );
}
