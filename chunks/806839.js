n.d(t, {
    A: () => u,
}),
    n(65821);
var r = n(64700),
    i = n(253018),
    a = n(770178),
    s = n(728458),
    o = n(711371);
let l = {
    enabled: !0,
    fireOnMount: !0,
    fireOnDepsChange: !0,
};

function c(e) {
    try {
        return o.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error("Unable to find Slate EditorDOMNode: ".concat(t.message));
        return (e.stack = t.stack), s.A.captureException(e), null;
    }
}

function u(e, t, n) {
    let s = r.useRef(null),
        o = r.useRef(null),
        u = r.useRef(null);
    r.useLayoutEffect(() => {
        (o.current = c(e)),
            null == o.current &&
                null == u.current &&
                (u.current = setTimeout(() => {
                    o.current = c(e);
                }, 100));
    }, [e]),
        r.useEffect(() => {
            let e = u.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []);
    let d = r.useCallback(() => {
        let e = o.current;
        if (null == e) return;
        let r = e.offsetHeight;
        s.current !== r &&
            (null != t.current && (t.current.style.height = "".concat(r, "px")), (s.current = r), null == n || n(r));
    }, [t, n]);
    (0, a.g)(o, d, [d, e, n], l),
        r.useLayoutEffect(() => {
            let t = i.rL.findDocumentOrShadowRoot(e).defaultView;
            if ((null == t ? void 0 : t.ResizeObserver) == null) return;
            let r = c(e);
            null != r && ((s.current = r.offsetHeight), null == n || n(s.current));
        }, [t, e, n]);
}
