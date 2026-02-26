"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(669170),
    s = n(741918),
    a = n(602034);
let o = "--";
function l(e) {
    switch (e.key) {
        case s.D$.ENTER:
        case s.D$.SPACE:
            return s.X2.SELECT_FOCUSED_ITEM;
        case s.D$.UP:
            return s.X2.NAVIGATE_UP;
        case s.D$.DOWN:
            return s.X2.NAVIGATE_DOWN;
        case s.D$.RIGHT:
            return s.X2.NAVIGATE_IN;
        case s.D$.LEFT:
            return s.X2.NAVIGATE_OUT;
    }
}
function u(e, t) {
    return null != t ? `${(0, a.M4)(e, t.join(o))}` : e;
}
function c(e, t) {
    return e.getElementById(t);
}
function d(e) {
    return e.tabIndex >= 0;
}
function _(e) {
    let t = e.tagName.toLowerCase();
    return (
        "textarea" === t ||
        ("input" === t ? ["text", "search", "email", "url", "tel", "password"].includes(e.type) : e.isContentEditable)
    );
}
function f(e) {
    let {
            navId: t,
            items: n,
            initialFocusPath: f,
            onSelect: p,
            enabled: h = !0,
            closeMenu: m,
            defaultIsUsingKeyboardNavigation: E = !1,
        } = e,
        g = r.useRef(h);
    r.useLayoutEffect(() => {
        g.current = h;
    }, [h]);
    let [A, I] = r.useReducer(i.A, { items: n, focusPath: f, focusIndex: -1 }),
        T = r.useMemo(() => (0, a.nF)(I, 30), [I]);
    r.useEffect(() => {
        I({ type: i.g.UPDATE_ITEMS, items: n });
    }, [n]);
    let { focusPath: S } = A,
        [y, v] = r.useState(!1),
        [N, C] = r.useState(E),
        [{ onItemFocusMemoizer: b, onItemMouseEnterMemoizer: R }] = r.useState(() => ({
            onItemFocusMemoizer: new a.Lp((e) => () => {
                v(!0), I({ type: i.g.SET_FOCUS_PATH, path: e.split(o) });
            }),
            onItemMouseEnterMemoizer: new a.Lp((e) => () => {
                C(!1), I({ type: i.g.SET_FOCUS_PATH, path: e.split(o) });
            }),
        })),
        O = r.useCallback(
            (e) => {
                if (!g.current) return;
                e.key === s.D$.ESCAPE && null != m && (e.stopPropagation(), e.preventDefault(), m());
                let n = l(e);
                switch (n) {
                    case s.X2.NAVIGATE_UP:
                    case s.X2.NAVIGATE_DOWN:
                    case s.X2.NAVIGATE_IN:
                    case s.X2.NAVIGATE_OUT:
                        if (_(e.target) && (n === s.X2.NAVIGATE_IN || n === s.X2.NAVIGATE_OUT)) return;
                        e.preventDefault(), e.stopPropagation(), C(!0), T({ type: n });
                        return;
                    case s.X2.SELECT_FOCUSED_ITEM:
                        if (e.repeat || d(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), C(!1), T({ type: n }), null != p))
                            return void p(S);
                        let r = c(e.target.ownerDocument ?? document, u(t, S));
                        r?.click();
                }
            },
            [T, t, S, p, m],
        ),
        D = r.useCallback(() => {
            y || v(!0);
        }, [y]),
        L = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && y && v(!1);
            },
            [y],
        ),
        w = r.useCallback(() => {
            I({ type: i.g.SET_FOCUS_PATH, path: [] }), v(!1);
        }, []),
        x = r.useCallback((e) => e.every((e, t) => S[t] === e), [S]),
        M = r.useCallback(
            () => ({
                role: "menu",
                id: t,
                tabIndex: -1,
                onKeyDown: O,
                onFocus: D,
                onBlur: L,
                onMouseLeave: w,
                "aria-activedescendant": S.length > 0 ? (0, a.M4)(t, S.join(o)) : void 0,
            }),
            [t, O, D, L, w, S],
        ),
        P = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: "menu",
                    tabIndex: -1,
                    "aria-activedescendant": x(n) ? (0, a.M4)(t, S.join(o)) : void 0,
                    focusIndex: A.focusIndex,
                    isUsingKeyboardNavigation: N,
                };
            },
            [t, S, x, A.focusIndex, N],
        ),
        k = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: s = "menuitem" } = e,
                    l = n.join(o);
                return {
                    ...(r ? { "aria-expanded": x(n), "aria-haspopup": !0 } : {}),
                    role: s,
                    id: (0, a.M4)(t, l),
                    tabIndex: -1,
                    onFocus: i ? b.get(l) : () => {},
                    onMouseEnter: i ? R.get(l) : () => {},
                };
            },
            [t, x, b, R],
        );
    return r.useMemo(
        () => ({
            dispatch: T,
            getContainerProps: M,
            getSubmenuProps: P,
            getItemProps: k,
            isFocused: x,
            isUsingKeyboardNavigation: N,
        }),
        [T, M, P, k, x, N],
    );
}
