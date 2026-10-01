n.d(t, { B: () => c, r: () => d });
var i = n(477900),
    l = n(582128),
    s = n(775602),
    a = n(818348);
let r = l.createContext(null),
    o = {
        registerItemRef: () => a.tE,
        registerDragHandleRef: () => a.tE,
        manageFocusOnReorder: a.tE,
        manageFocusOnDelete: a.tE,
    };
function d() {
    return l.useContext(r) ?? o;
}
function c(e) {
    let { children: t, emptyListFallbackRef: n } = e,
        a = l.useRef(new Map()),
        o = l.useRef(new Map()),
        d = l.useRef([]),
        c = l.useCallback(() => {
            d.current = Array.from(a.current.keys()).sort((e, t) => {
                let n = a.current.get(e),
                    i = a.current.get(t);
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
                null != t ? a.current.set(e, t) : a.current.delete(e);
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
        f = l.useCallback(
            (e) => {
                if (!s.Ay.keyboardModeEnabled) return;
                c();
                let t = d.current,
                    i = t.indexOf(e);
                if (-1 === i) return;
                let l = i + 1 < t.length ? i + 1 : i - 1;
                if (l >= 0) {
                    let e = t[l];
                    requestAnimationFrame(() => {
                        let t = a.current.get(e);
                        t?.focus();
                    });
                } else
                    requestAnimationFrame(() => {
                        n?.focus();
                    });
            },
            [n, c],
        ),
        x = l.useMemo(
            () => ({ registerDragHandleRef: u, registerItemRef: g, manageFocusOnReorder: m, manageFocusOnDelete: f }),
            [u, g, m, f],
        );
    return (0, i.jsx)(r.Provider, { value: x, children: t });
}
