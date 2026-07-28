i.d(t, { B: () => c, r: () => d });
var n = i(477900),
    s = i(582128),
    l = i(775602),
    r = i(818348);
let a = s.createContext(null),
    o = {
        registerItemRef: () => r.tE,
        registerDragHandleRef: () => r.tE,
        manageFocusOnReorder: r.tE,
        manageFocusOnDelete: r.tE,
    };
function d() {
    return s.useContext(a) ?? o;
}
function c(e) {
    let { children: t, emptyListFallbackRef: i } = e,
        r = s.useRef(new Map()),
        o = s.useRef(new Map()),
        d = s.useRef([]),
        c = s.useCallback(() => {
            d.current = Array.from(r.current.keys()).sort((e, t) => {
                let i = r.current.get(e),
                    n = r.current.get(t);
                if (null == i || null == n) return 0;
                let s = i.compareDocumentPosition(n);
                return (s & Node.DOCUMENT_POSITION_FOLLOWING) != 0
                    ? -1
                    : +((s & Node.DOCUMENT_POSITION_PRECEDING) != 0);
            });
        }, []),
        u = s.useCallback(
            (e) => (t) => {
                null != t ? o.current.set(e, t) : o.current.delete(e);
            },
            [],
        ),
        g = s.useCallback(
            (e) => (t) => {
                null != t ? r.current.set(e, t) : r.current.delete(e);
            },
            [],
        ),
        m = s.useCallback((e) => {
            l.Ay.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let t = o.current.get(e);
                    t?.focus();
                });
        }, []),
        x = s.useCallback(
            (e) => {
                if (!l.Ay.keyboardModeEnabled) return;
                c();
                let t = d.current,
                    n = t.indexOf(e);
                if (-1 === n) return;
                let s = n + 1 < t.length ? n + 1 : n - 1;
                if (s >= 0) {
                    let e = t[s];
                    requestAnimationFrame(() => {
                        let t = r.current.get(e);
                        t?.focus();
                    });
                } else
                    requestAnimationFrame(() => {
                        i?.focus();
                    });
            },
            [i, c],
        ),
        f = s.useMemo(
            () => ({ registerDragHandleRef: u, registerItemRef: g, manageFocusOnReorder: m, manageFocusOnDelete: x }),
            [u, g, m, x],
        );
    return (0, n.jsx)(a.Provider, { value: f, children: t });
}
