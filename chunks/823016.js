i.d(t, { B: () => c, r: () => d });
var n = i(477900),
    l = i(582128),
    s = i(775602),
    r = i(818348);
let a = l.createContext(null),
    o = {
        registerItemRef: () => r.tE,
        registerDragHandleRef: () => r.tE,
        manageFocusOnReorder: r.tE,
        manageFocusOnDelete: r.tE,
    };
function d() {
    return l.useContext(a) ?? o;
}
function c(e) {
    let { children: t, emptyListFallbackRef: i } = e,
        r = l.useRef(new Map()),
        o = l.useRef(new Map()),
        d = l.useRef([]),
        c = l.useCallback(() => {
            d.current = Array.from(r.current.keys()).sort((e, t) => {
                let i = r.current.get(e),
                    n = r.current.get(t);
                if (null == i || null == n) return 0;
                let l = i.compareDocumentPosition(n);
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
                c();
                let t = d.current,
                    n = t.indexOf(e);
                if (-1 === n) return;
                let l = n + 1 < t.length ? n + 1 : n - 1;
                if (l >= 0) {
                    let e = t[l];
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
        f = l.useMemo(
            () => ({ registerDragHandleRef: u, registerItemRef: g, manageFocusOnReorder: m, manageFocusOnDelete: x }),
            [u, g, m, x],
        );
    return (0, n.jsx)(a.Provider, { value: f, children: t });
}
