"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    l = n(884362),
    s = n(741918),
    r = n(267102),
    a = n(374803);
function o(e) {
    let { navId: t, scrollerRef: n, state: o, onFocus: c } = e,
        { renderWindow: u } = i.useContext(r.Ay),
        d = (e, t, i) => {
            if ((n.current?.scrollToTop(), e && null != o.query)) {
                let e = o.query.typeInfo.focusMode,
                    n = e !== a.e.MANUAL && (e !== a.e.AUTO_WHEN_FILTERED || 0 !== o.query.queryText.length);
                o.isVisible && (!0 !== t || !1 !== n) && !0 !== i
                    ? (m.setFocus("0"), c?.(0))
                    : (m.setFocus(null), c?.(null));
            }
        },
        h = (e) => {
            if ((n.current?.scrollToBottom(), e && null != o.query && o.query.resultCount > 0)) {
                let e = o.query.resultCount - 1;
                m.setFocus(e.toString()), c?.(e);
            }
        },
        m = (0, l.Ay)({
            id: t,
            isEnabled: o.isVisible,
            orientation: s.Gl.VERTICAL,
            useVirtualFocus: !0,
            setFocus: (e, t) => {
                let i = u.document.querySelector(e);
                null != i && n.current?.scrollIntoViewNode({ node: i }), c?.(+t);
            },
            onNavigateNextAtEnd: () => d(!0),
            onNavigatePreviousAtStart: () => h(!0),
            scrollToStart: () => (d(!1, !1), Promise.resolve()),
            scrollToEnd: () => (h(!1), Promise.resolve()),
        }),
        p = i.useRef(d);
    return (
        i.useEffect(() => {
            p.current = d;
        }),
        i.useEffect(() => {
            p.current(!0, !0, o.isInitialAfterError);
        }, [o.query?.type, o.query?.queryText, o.query?.isLoading, o.isVisible, o.isInitialAfterError]),
        m
    );
}
