n.d(t, { B: () => c, r: () => d });
var i = n(627968),
    l = n(64700),
    a = n(775602),
    r = n(818348);
let s = l.createContext(null),
    o = {
        registerItemRef: () => r.tE,
        registerDragHandleRef: () => r.tE,
        manageFocusOnReorder: r.tE,
        manageFocusOnDelete: r.tE,
    };
function d() {
    return l.useContext(s) ?? o;
}
function c(e) {
    let { children: t, emptyListFallbackRef: n } = e,
        r = l.useRef(new Map()),
        o = l.useRef(new Map()),
        d = l.useRef([]),
        c = l.useCallback(() => {
            d.current = Array.from(r.current.keys()).sort((e, t) => {
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
            a.A.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let t = o.current.get(e);
                    t?.focus();
                });
        }, []),
        x = l.useCallback(
            (e) => {
                if (!a.A.keyboardModeEnabled) return;
                c();
                let t = d.current,
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
            [n, c],
        ),
        f = l.useMemo(
            () => ({ registerDragHandleRef: u, registerItemRef: g, manageFocusOnReorder: m, manageFocusOnDelete: x }),
            [u, g, m, x],
        );
    return (0, i.jsx)(s.Provider, { value: f, children: t });
}
