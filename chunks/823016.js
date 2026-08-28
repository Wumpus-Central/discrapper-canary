n.d(t, { B: () => d, r: () => c });
var i = n(477900),
    l = n(582128),
    s = n(775602),
    r = n(818348);
let a = l.createContext(null),
    o = {
        registerItemRef: () => r.tE,
        registerDragHandleRef: () => r.tE,
        manageFocusOnReorder: r.tE,
        manageFocusOnDelete: r.tE,
    };
function c() {
    return l.useContext(a) ?? o;
}
function d(e) {
    let { children: t, emptyListFallbackRef: n } = e,
        r = l.useRef(new Map()),
        o = l.useRef(new Map()),
        c = l.useRef([]),
        d = l.useCallback(() => {
            c.current = Array.from(r.current.keys()).sort((e, t) => {
                let n = r.current.get(e),
                    i = r.current.get(t);
                if (null == n || null == i) return 0;
                let l = n.compareDocumentPosition(i);
                return (l & Node.DOCUMENT_POSITION_FOLLOWING) != 0
                    ? -1
                    : +((l & Node.DOCUMENT_POSITION_PRECEDING) != 0);
            });
        }, []),
        u = l.useCallback(
            (e) => (t) => {
                null != t ? o.current.set(e, t) : o.current.delete(e);
            },
            [],
        ),
        g = l.useCallback(
            (e) => (t) => {
                null != t ? r.current.set(e, t) : r.current.delete(e);
            },
            [],
        ),
        m = l.useCallback((e) => {
            s.Ay.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let t = o.current.get(e);
                    t?.focus();
                });
        }, []),
        x = l.useCallback(
            (e) => {
                if (!s.Ay.keyboardModeEnabled) return;
                d();
                let t = c.current,
                    i = t.indexOf(e);
                if (-1 === i) return;
                let l = i + 1 < t.length ? i + 1 : i - 1;
                if (l >= 0) {
                    let e = t[l];
                    requestAnimationFrame(() => {
                        let t = r.current.get(e);
                        t?.focus();
                    });
                } else
                    requestAnimationFrame(() => {
                        n?.focus();
                    });
            },
            [n, d],
        ),
        f = l.useMemo(
            () => ({ registerDragHandleRef: u, registerItemRef: g, manageFocusOnReorder: m, manageFocusOnDelete: x }),
            [u, g, m, x],
        );
    return (0, i.jsx)(a.Provider, { value: f, children: t });
}
