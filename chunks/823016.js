var l = n(477900),
    i = n(582128),
    a = n(775602),
    s = n(818348);
let r = i.createContext(null),
    d = {
        registerItemRef: () => s.tE,
        registerDragHandleRef: () => s.tE,
        manageFocusOnReorder: s.tE,
        manageFocusOnDelete: s.tE,
    };
n.d(
    t,
    {},
    {
        B: function (e) {
            let { children: t, emptyListFallbackRef: n } = e,
                s = i.useRef(new Map()),
                d = i.useRef(new Map()),
                o = i.useRef([]),
                c = i.useCallback(() => {
                    o.current = Array.from(s.current.keys()).sort((e, t) => {
                        let n = s.current.get(e),
                            l = s.current.get(t);
                        if (null == n || null == l) return 0;
                        let i = n.compareDocumentPosition(l);
                        return (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0
                            ? -1
                            : +((i & Node.DOCUMENT_POSITION_PRECEDING) != 0);
                    });
                }, []),
                u = i.useCallback(
                    (e) => (t) => {
                        null != t ? d.current.set(e, t) : d.current.delete(e);
                    },
                    [],
                ),
                g = i.useCallback(
                    (e) => (t) => {
                        null != t ? s.current.set(e, t) : s.current.delete(e);
                    },
                    [],
                ),
                m = i.useCallback((e) => {
                    a.Ay.keyboardModeEnabled &&
                        requestAnimationFrame(() => {
                            let t = d.current.get(e);
                            t?.focus();
                        });
                }, []),
                x = i.useCallback(
                    (e) => {
                        if (!a.Ay.keyboardModeEnabled) return;
                        c();
                        let t = o.current,
                            l = t.indexOf(e);
                        if (-1 === l) return;
                        let i = l + 1 < t.length ? l + 1 : l - 1;
                        if (i >= 0) {
                            let e = t[i];
                            requestAnimationFrame(() => {
                                let t = s.current.get(e);
                                t?.focus();
                            });
                        } else
                            requestAnimationFrame(() => {
                                n?.focus();
                            });
                    },
                    [n, c],
                ),
                f = i.useMemo(
                    () => ({
                        registerDragHandleRef: u,
                        registerItemRef: g,
                        manageFocusOnReorder: m,
                        manageFocusOnDelete: x,
                    }),
                    [u, g, m, x],
                );
            return (0, l.jsx)(r.Provider, { value: f, children: t });
        },
        r: function () {
            return i.useContext(r) ?? d;
        },
    },
);
