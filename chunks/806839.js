"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(253018),
    s = n(770178),
    a = n(728458),
    o = n(711371);
let l = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function u(e) {
    try {
        return o.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), a.A.captureException(e), null;
    }
}
function c(e, t, n) {
    let a = r.useRef(null),
        o = r.useRef(null),
        c = r.useRef(null);
    r.useLayoutEffect(() => {
        (o.current = u(e)),
            null == o.current &&
                null == c.current &&
                (c.current = setTimeout(() => {
                    o.current = u(e);
                }, 100));
    }, [e]),
        r.useEffect(() => {
            let e = c.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []);
    let d = r.useCallback(() => {
        let e = o.current;
        if (null == e) return;
        let r = e.offsetHeight;
        a.current !== r && (null != t.current && (t.current.style.height = `${r}px`), (a.current = r), n?.(r));
    }, [t, n]);
    (0, s.g)(o, d, [d, e, n], l),
        r.useLayoutEffect(() => {
            let t = i.rL.findDocumentOrShadowRoot(e).defaultView;
            if (t?.ResizeObserver == null) return;
            let r = u(e);
            null != r && ((a.current = r.offsetHeight), n?.(a.current));
        }, [t, e, n]);
}
