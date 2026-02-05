"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(669170),
    a = n(741918),
    s = n(602034);
let o = "--";
function l(e) {
    switch (e.key) {
        case a.D$.ENTER:
        case a.D$.SPACE:
            return a.X2.SELECT_FOCUSED_ITEM;
        case a.D$.UP:
            return a.X2.NAVIGATE_UP;
        case a.D$.DOWN:
            return a.X2.NAVIGATE_DOWN;
        case a.D$.RIGHT:
            return a.X2.NAVIGATE_IN;
        case a.D$.LEFT:
            return a.X2.NAVIGATE_OUT;
    }
}
function u(e, t) {
    return null != t ? `${(0, s.M4)(e, t.join(o))}` : e;
}
function c(e, t) {
    return e.getElementById(t);
}
function d(e) {
    return e.tabIndex >= 0;
}
function _(e) {
    let {
            navId: t,
            items: n,
            initialFocusPath: _,
            onSelect: f,
            enabled: p = !0,
            closeMenu: h,
            defaultIsUsingKeyboardNavigation: m = !1,
        } = e,
        g = r.useRef(p);
    r.useLayoutEffect(() => {
        g.current = p;
    }, [p]);
    let [E, A] = r.useReducer(i.A, { items: n, focusPath: _, focusIndex: -1 }),
        I = r.useMemo(() => (0, s.nF)(A, 30), [A]);
    r.useEffect(() => {
        A({ type: i.g.UPDATE_ITEMS, items: n });
    }, [n]);
    let { focusPath: T } = E,
        [y, S] = r.useState(!1),
        [v, C] = r.useState(m),
        [{ onItemFocusMemoizer: b, onItemMouseEnterMemoizer: N }] = r.useState(() => ({
            onItemFocusMemoizer: new s.Lp((e) => () => {
                S(!0), A({ type: i.g.SET_FOCUS_PATH, path: e.split(o) });
            }),
            onItemMouseEnterMemoizer: new s.Lp((e) => () => {
                C(!1), A({ type: i.g.SET_FOCUS_PATH, path: e.split(o) });
            }),
        })),
        R = r.useCallback(
            (e) => {
                if (!g.current) return;
                e.key === a.D$.ESCAPE && null != h && (e.stopPropagation(), e.preventDefault(), h());
                let n = l(e);
                switch (n) {
                    case a.X2.NAVIGATE_UP:
                    case a.X2.NAVIGATE_DOWN:
                    case a.X2.NAVIGATE_IN:
                    case a.X2.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), C(!0), I({ type: n });
                        return;
                    case a.X2.SELECT_FOCUSED_ITEM:
                        if (e.repeat || d(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), C(!1), I({ type: n }), null != f))
                            return void f(T);
                        let r = c(e.target.ownerDocument ?? document, u(t, T));
                        r?.click();
                }
            },
            [I, t, T, f, h],
        ),
        O = r.useCallback(() => {
            y || S(!0);
        }, [y]),
        D = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && y && S(!1);
            },
            [y],
        ),
        L = r.useCallback(() => {
            A({ type: i.g.SET_FOCUS_PATH, path: [] }), S(!1);
        }, []),
        w = r.useCallback((e) => e.every((e, t) => T[t] === e), [T]),
        x = r.useCallback(
            () => ({
                role: "menu",
                id: t,
                tabIndex: -1,
                onKeyDown: R,
                onFocus: O,
                onBlur: D,
                onMouseLeave: L,
                "aria-activedescendant": T.length > 0 ? (0, s.M4)(t, T.join(o)) : void 0,
            }),
            [t, R, O, D, L, T],
        ),
        P = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: "menu",
                    tabIndex: -1,
                    "aria-activedescendant": w(n) ? (0, s.M4)(t, T.join(o)) : void 0,
                    focusIndex: E.focusIndex,
                    isUsingKeyboardNavigation: v,
                };
            },
            [t, T, w, E.focusIndex, v],
        ),
        M = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: a = "menuitem" } = e,
                    l = n.join(o);
                return {
                    ...(r ? { "aria-expanded": w(n), "aria-haspopup": !0 } : {}),
                    role: a,
                    id: (0, s.M4)(t, l),
                    tabIndex: -1,
                    onFocus: i ? b.get(l) : () => {},
                    onMouseEnter: i ? N.get(l) : () => {},
                };
            },
            [t, w, b, N],
        );
    return r.useMemo(
        () => ({
            dispatch: I,
            getContainerProps: x,
            getSubmenuProps: P,
            getItemProps: M,
            isFocused: w,
            isUsingKeyboardNavigation: v,
        }),
        [I, x, P, M, w, v],
    );
}
