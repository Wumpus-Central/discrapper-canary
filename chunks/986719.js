n.d(t, { A: () => l });
var r = n(64700),
    i = n(884362),
    a = n(741918),
    s = n(267102),
    o = n(374803);
function l(e) {
    var t, n, l;
    let { navId: c, scrollerRef: u, state: d, onFocus: f } = e,
        { renderWindow: p } = r.useContext(s.Ay),
        _ = (e, t) => {
            let n = p.document.querySelector(e);
            if (null != n) {
                var r;
                null == (r = u.current) || r.scrollIntoViewNode({ node: n });
            }
            null == f || f(+t);
        },
        h = (e, t, n) => {
            var r;
            if ((null == (r = u.current) || r.scrollToTop(), e && null != d.query)) {
                let e = d.query.typeInfo.focusMode,
                    r = e !== o.e.MANUAL && (e !== o.e.AUTO_WHEN_FILTERED || 0 !== d.query.queryText.length);
                d.isVisible && (!0 !== t || !1 !== r) && !0 !== n
                    ? (g.setFocus("0"), null == f || f(0))
                    : (g.setFocus(null), null == f || f(null));
            }
        },
        m = (e) => {
            var t;
            if ((null == (t = u.current) || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0)) {
                let e = d.query.resultCount - 1;
                g.setFocus(e.toString()), null == f || f(e);
            }
        },
        g = (0, i.Ay)({
            id: c,
            isEnabled: d.isVisible,
            orientation: a.Gl.VERTICAL,
            useVirtualFocus: !0,
            setFocus: _,
            onNavigateNextAtEnd: () => h(!0),
            onNavigatePreviousAtStart: () => m(!0),
            scrollToStart: () => (h(!1, !1), Promise.resolve()),
            scrollToEnd: () => (m(!1), Promise.resolve()),
        }),
        E = r.useRef(h);
    return (
        r.useEffect(() => {
            E.current = h;
        }),
        r.useEffect(() => {
            E.current(!0, !0, d.isInitialAfterError);
        }, [
            null == (t = d.query) ? void 0 : t.type,
            null == (n = d.query) ? void 0 : n.queryText,
            null == (l = d.query) ? void 0 : l.isLoading,
            d.isVisible,
            d.isInitialAfterError,
        ]),
        g
    );
}
