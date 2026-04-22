"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(669170),
    s = n(741918),
    a = n(602034);
function o(e) {
    let {
            navId: t,
            items: n,
            initialFocusPath: o,
            onSelect: l,
            enabled: u = !0,
            closeMenu: d,
            defaultIsUsingKeyboardNavigation: c = !1,
        } = e,
        _ = r.useRef(u);
    r.useLayoutEffect(() => {
        _.current = u;
    }, [u]);
    let [f, E] = r.useReducer(i.A, { items: n, focusPath: o, focusIndex: -1 }),
        h = r.useMemo(() => (0, a.nF)(E, 30), [E]);
    r.useEffect(() => {
        E({ type: i.g.UPDATE_ITEMS, items: n });
    }, [n]);
    let { focusPath: p } = f,
        [m, g] = r.useState(!1),
        [A, I] = r.useState(c),
        [{ onItemFocusMemoizer: T, onItemMouseEnterMemoizer: S }] = r.useState(() => ({
            onItemFocusMemoizer: new a.Lp((e) => () => {
                g(!0), E({ type: i.g.SET_FOCUS_PATH, path: e.split("--") });
            }),
            onItemMouseEnterMemoizer: new a.Lp((e) => () => {
                I(!1), E({ type: i.g.SET_FOCUS_PATH, path: e.split("--") });
            }),
        })),
        y = r.useCallback(
            (e) => {
                var n, r, i;
                if (!_.current) return;
                e.key === s.D$.ESCAPE && null != d && (e.stopPropagation(), e.preventDefault(), d());
                let o = (function (e) {
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
                })(e);
                switch (o) {
                    case s.X2.NAVIGATE_UP:
                    case s.X2.NAVIGATE_DOWN:
                    case s.X2.NAVIGATE_IN:
                    case s.X2.NAVIGATE_OUT:
                        let u;
                        if (
                            ("textarea" === (u = (n = e.target).tagName.toLowerCase()) ||
                                ("input" === u
                                    ? ["text", "search", "email", "url", "tel", "password"].includes(n.type)
                                    : n.isContentEditable)) &&
                            (o === s.X2.NAVIGATE_IN || o === s.X2.NAVIGATE_OUT)
                        )
                            return;
                        e.preventDefault(), e.stopPropagation(), I(!0), h({ type: o });
                        return;
                    case s.X2.SELECT_FOCUSED_ITEM:
                        if (e.repeat || e.target.tabIndex >= 0) return;
                        if ((e.preventDefault(), e.stopPropagation(), I(!1), h({ type: o }), null != l))
                            return void l(p);
                        let c =
                            ((r = e.target.ownerDocument ?? document),
                            (i = null != p ? `${(0, a.M4)(t, p.join("--"))}` : t),
                            r.getElementById(i));
                        c?.click();
                }
            },
            [h, t, p, l, d],
        ),
        N = r.useCallback(() => {
            m || g(!0);
        }, [m]),
        O = r.useCallback(
            (e) => {
                e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && m && g(!1);
            },
            [m],
        ),
        R = r.useCallback(() => {
            E({ type: i.g.SET_FOCUS_PATH, path: [] }), g(!1);
        }, []),
        v = r.useCallback((e) => e.every((e, t) => p[t] === e), [p]),
        C = r.useCallback(
            () => ({
                role: "menu",
                id: t,
                tabIndex: -1,
                onKeyDown: y,
                onFocus: N,
                onBlur: O,
                onMouseLeave: R,
                "aria-activedescendant": p.length > 0 ? (0, a.M4)(t, p.join("--")) : void 0,
            }),
            [t, y, N, O, R, p],
        ),
        b = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: "menu",
                    tabIndex: -1,
                    "aria-activedescendant": v(n) ? (0, a.M4)(t, p.join("--")) : void 0,
                    focusIndex: f.focusIndex,
                    isUsingKeyboardNavigation: A,
                };
            },
            [t, p, v, f.focusIndex, A],
        ),
        D = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: s = "menuitem" } = e,
                    o = n.join("--");
                return {
                    ...(r ? { "aria-expanded": v(n), "aria-haspopup": !0 } : {}),
                    role: s,
                    id: (0, a.M4)(t, o),
                    tabIndex: -1,
                    onFocus: i ? T.get(o) : () => {},
                    onMouseEnter: i ? S.get(o) : () => {},
                };
            },
            [t, v, T, S],
        );
    return r.useMemo(
        () => ({
            dispatch: h,
            getContainerProps: C,
            getSubmenuProps: b,
            getItemProps: D,
            isFocused: v,
            isUsingKeyboardNavigation: A,
        }),
        [h, C, b, D, v, A],
    );
}
