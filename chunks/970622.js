n.d(t, {
    A: () => m,
}),
    n(896048),
    n(747238);
var r = n(64700),
    i = n(669170),
    a = n(741918),
    s = n(602034);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = "--";

function f(e) {
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

function p(e, t) {
    return null != t ? "".concat((0, s.M4)(e, t.join(d))) : e;
}

function _(e, t) {
    return e.getElementById(t);
}

function h(e) {
    return e.tabIndex >= 0;
}

function m(e) {
    let {
            navId: t,
            items: n,
            initialFocusPath: o,
            onSelect: c,
            enabled: m = !0,
            closeMenu: g,
            defaultIsUsingKeyboardNavigation: E = !1,
        } = e,
        b = r.useRef(m);
    r.useLayoutEffect(() => {
        b.current = m;
    }, [m]);
    let [y, O] = r.useReducer(i.A, {
            items: n,
            focusPath: o,
            focusIndex: -1,
        }),
        A = r.useMemo(() => (0, s.nF)(O, 30), [O]);
    r.useEffect(() => {
        O({
            type: i.g.UPDATE_ITEMS,
            items: n,
        });
    }, [n]);
    let { focusPath: v } = y,
        [S, I] = r.useState(!1),
        [T, C] = r.useState(E),
        [{ onItemFocusMemoizer: N, onItemMouseEnterMemoizer: R }] = r.useState(() => ({
            onItemFocusMemoizer: new s.Lp((e) => () => {
                I(!0),
                    O({
                        type: i.g.SET_FOCUS_PATH,
                        path: e.split(d),
                    });
            }),
            onItemMouseEnterMemoizer: new s.Lp((e) => () => {
                C(!1),
                    O({
                        type: i.g.SET_FOCUS_PATH,
                        path: e.split(d),
                    });
            }),
        })),
        w = r.useCallback(
            (e) => {
                if (!b.current) return;
                e.key === a.D$.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
                let n = f(e);
                switch (n) {
                    case a.X2.NAVIGATE_UP:
                    case a.X2.NAVIGATE_DOWN:
                    case a.X2.NAVIGATE_IN:
                    case a.X2.NAVIGATE_OUT:
                        e.preventDefault(),
                            e.stopPropagation(),
                            C(!0),
                            A({
                                type: n,
                            });
                        return;
                    case a.X2.SELECT_FOCUSED_ITEM:
                        var r;
                        if (e.repeat || h(e.target)) return;
                        if (
                            (e.preventDefault(),
                            e.stopPropagation(),
                            C(!1),
                            A({
                                type: n,
                            }),
                            null != c)
                        )
                            return void c(v);
                        let i = _(null != (r = e.target.ownerDocument) ? r : document, p(t, v));
                        null == i || i.click();
                }
            },
            [A, t, v, c, g],
        ),
        P = r.useCallback(() => {
            S || I(!0);
        }, [S]),
        D = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && S && I(!1);
            },
            [S],
        ),
        x = r.useCallback(() => {
            O({
                type: i.g.SET_FOCUS_PATH,
                path: [],
            }),
                I(!1);
        }, []),
        L = r.useCallback((e) => e.every((e, t) => v[t] === e), [v]),
        j = r.useCallback(
            () => ({
                role: "menu",
                id: t,
                tabIndex: -1,
                onKeyDown: w,
                onFocus: P,
                onBlur: D,
                onMouseLeave: x,
                "aria-activedescendant": v.length > 0 ? (0, s.M4)(t, v.join(d)) : void 0,
            }),
            [t, w, P, D, x, v],
        ),
        M = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: "menu",
                    tabIndex: -1,
                    "aria-activedescendant": L(n) ? (0, s.M4)(t, v.join(d)) : void 0,
                    focusIndex: y.focusIndex,
                    isUsingKeyboardNavigation: T,
                };
            },
            [t, v, L, y.focusIndex, T],
        ),
        k = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: a = "menuitem" } = e,
                    o = n.join(d);
                return u(
                    l(
                        {},
                        r
                            ? {
                                  "aria-expanded": L(n),
                                  "aria-haspopup": !0,
                              }
                            : {},
                    ),
                    {
                        role: a,
                        id: (0, s.M4)(t, o),
                        tabIndex: -1,
                        onFocus: i ? N.get(o) : () => {},
                        onMouseEnter: i ? R.get(o) : () => {},
                    },
                );
            },
            [t, L, N, R],
        );
    return r.useMemo(
        () => ({
            dispatch: A,
            getContainerProps: j,
            getSubmenuProps: M,
            getItemProps: k,
            isFocused: L,
            isUsingKeyboardNavigation: T,
        }),
        [A, j, M, k, L, T],
    );
}
