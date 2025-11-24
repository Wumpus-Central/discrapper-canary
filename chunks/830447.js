n.d(t, {
    T: () => D,
    v: () => P,
}),
    n(361932),
    n(187205),
    n(539854),
    n(388685),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(348327),
    l = n.n(s),
    c = n(498405),
    u = n(793030),
    d = n(857595),
    f = n(607070),
    _ = n(720312),
    p = n(828214),
    h = n(670596),
    m = n(788314),
    g = n(939350),
    E = n(334405);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    return null == e
        ? []
        : i.Children.toArray(e).flatMap((e) => {
              var t;
              return null == e
                  ? []
                  : Array.isArray(e)
                    ? S(e)
                    : e.type === i.Fragment
                      ? null != (t = S(e.props.children))
                          ? t
                          : []
                      : [e];
          });
}
function A(e, t) {
    if (!t || !e.icon || e.iconLeft) return e;
    let { icon: n } = e;
    return v(y({}, I(e, ["icon"])), { iconLeft: n });
}
function C(e, t) {
    return S(e).reduce((e, n) => {
        var r, i;
        if (n.type === p.Cl)
            return (
                e.push({
                    type: "separator",
                    navigable: !1,
                }),
                e
            );
        if (n.type === p.kS) {
            let r = C(n.props.children, t);
            return (
                r.length > 0 &&
                    (e.push({
                        type: "groupstart",
                        length: r.length,
                        navigable: !1,
                        props: n.props,
                    }),
                    e.push(...r),
                    e.push({
                        type: "groupend",
                        length: r.length,
                        navigable: !1,
                        props: n.props,
                    })),
                e
            );
        }
        if (n.type === p.sN) {
            let r = A(n.props, t);
            return (
                e.push(
                    null != n.props.render
                        ? {
                              type: "customitem",
                              key: n.props.id,
                              navigable: null == n.props.navigable || n.props.navigable,
                              render: n.props.render,
                              props: r,
                          }
                        : {
                              type: "item",
                              key: n.props.id,
                              navigable: !0,
                              label: n.props.label,
                              children: n.props.children ? C(n.props.children, t) : void 0,
                              onChildrenScroll: n.props.onChildrenScroll,
                              props: r,
                              childRowHeight: n.props.childRowHeight,
                              listClassName: n.props.listClassName,
                              subMenuClassName: n.props.subMenuClassName,
                          },
                ),
                e
            );
        }
        if (n.type === p.S8)
            return (
                e.push({
                    type: "checkbox",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props,
                }),
                e
            );
        if (n.type === p.k5)
            return (
                e.push({
                    type: "radio",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props,
                }),
                e
            );
        else if (n.type === p.m7)
            return (
                e.push({
                    type: "switch",
                    key: n.props.id,
                    navigable: !0,
                    props: n.props,
                }),
                e
            );
        else if (n.type === p.II)
            return (
                e.push(
                    null != n.props.control
                        ? {
                              type: "control",
                              key: n.props.id,
                              navigable: !0,
                              props: n.props,
                          }
                        : {
                              type: "compositecontrol",
                              key: n.props.id,
                              navigable: !1 !== n.props.interactive,
                              children: n.props.children,
                              props: n.props,
                          },
                ),
                e
            );
        throw Error(
            "Menu API only allows Items and groups of Items as children. Received "
                .concat(null != (i = null != (r = null == n ? void 0 : n.type) ? r : n) ? i : typeof n, " (")
                .concat(typeof n, ") instead"),
        );
    }, []);
}
function N(e) {
    return e.reduce(
        (e, t) => (
            t.navigable &&
                e.push({
                    key: t.key,
                    children: "item" === t.type && null != t.children ? N(t.children) : void 0,
                }),
            e
        ),
        [],
    );
}
function R(e, t, n, i) {
    let a = 0,
        o = [];
    return e.reduce((e, s, l) => {
        let c = o.length > 0 ? o[o.length - 1] : e;
        switch (s.type) {
            case "separator":
                c.push((0, r.jsx)(m.Z0, {}, "separator-".concat(l))), (a = 0);
                break;
            case "groupstart":
                a > 0 && s.length > 0 && (c.push((0, r.jsx)(m.Z0, {}, "separator-".concat(l))), (a = 0)), o.push([]);
                break;
            case "groupend":
                o.length > 0 && e.push((0, r.jsx)(m.ZA, y({ contents: o.pop() }, s.props), "group-".concat(l)));
                break;
            case "item": {
                let { children: e, childRowHeight: o, onChildrenScroll: l, listClassName: u, subMenuClassName: d } = s,
                    f = null != e,
                    _ = [...n, s.key],
                    p = t.isFocused(_),
                    h = null != e ? { "aria-haspopup": !0 } : {},
                    g = (0, r.jsx)(
                        m.ck,
                        v(y({}, s.props), {
                            label: s.label,
                            hasSubmenu: null != e,
                            isFocused: p,
                            menuItemProps: y(
                                {},
                                t.getItemProps({
                                    path: _,
                                    hasSubmenu: f,
                                }),
                                h,
                            ),
                            onClose: i,
                        }),
                        s.key,
                    );
                f
                    ? null != o
                        ? c.push(
                              (0, r.jsx)(
                                  m.P2,
                                  v(y({}, s.props), {
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: _ }),
                                      rows: R(e, t, _, i),
                                      rowHeight: o,
                                      onScroll: l,
                                      listClassName: u,
                                  }),
                                  "".concat(s.key, "-submenu"),
                              ),
                          )
                        : c.push(
                              (0, r.jsx)(
                                  m.LY,
                                  v(y({}, s.props), {
                                      subMenuClassName: d,
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: _ }),
                                      renderSubmenu: () => R(e, t, _, i),
                                  }),
                                  "".concat(s.key, "-submenu"),
                              ),
                          )
                    : c.push(g),
                    a++;
                break;
            }
            case "customitem": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.kq,
                        v(y({}, s.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                navigable: s.navigable,
                            }),
                            onClose: i,
                            children: s.render,
                        }),
                        s.key,
                    ),
                ),
                    a++;
                break;
            }
            case "checkbox": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.oC,
                        v(y({}, s.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: "menuitemcheckbox",
                            }),
                        }),
                        s.key,
                    ),
                ),
                    a++;
                break;
            }
            case "radio": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.Rk,
                        v(y({}, s.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: "menuitemradio",
                            }),
                        }),
                        s.key,
                    ),
                ),
                    a++;
                break;
            }
            case "switch": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.TO,
                        v(y({}, s.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: "menuitemcheckbox",
                            }),
                        }),
                        s.key,
                    ),
                ),
                    a++;
                break;
            }
            case "control": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.lc,
                        v(y({}, s.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: i,
                        }),
                        s.key,
                    ),
                ),
                    a++;
                break;
            }
            case "compositecontrol": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.$I,
                        v(y({}, s.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: i,
                            children: s.children,
                        }),
                        s.key,
                    ),
                ),
                    a++;
            }
        }
        return e;
    }, []);
}
function P(e) {
    var t;
    let {
            navId: n,
            variant: a = "flexible",
            hideScroller: s = !1,
            className: p,
            children: b,
            onClose: O,
            onSelect: I,
            onInteraction: T,
            forceIconsLeft: S,
        } = e,
        A = C(b, S),
        P = N(A),
        D = i.useRef([]);
    l()(D.current, P) || (D.current = P);
    let L = (0, _.c)("Menu"),
        x = null == (t = A.find((e) => null != e.key)) ? void 0 : t.key,
        M = (0, c.Z)({
            navId: n,
            items: D.current,
            initialFocusPath: f.Z.keyboardModeEnabled && null != x ? [x] : [],
            closeMenu: O,
            defaultIsUsingKeyboardNavigation: f.Z.keyboardModeEnabled,
        });
    i.useEffect(() => {
        M.isUsingKeyboardNavigation ? f.Z.keyboardModeEnabled || (0, d.Qj)() : f.Z.keyboardModeEnabled && (0, d.rf)();
    }, [M.isUsingKeyboardNavigation]);
    let j = i.useRef(null);
    (0, u.Tbt)(j);
    let k = s ? u.u2D : u.zJl,
        U = i.useMemo(
            () => ({
                onSelect: I,
                onInteraction: T,
            }),
            [I, T],
        );
    return (0, r.jsx)(h.p.Provider, {
        value: U,
        children: (0, r.jsx)(
            "div",
            v(
                y(
                    {
                        className: o()(E.menu, E[a], p),
                        style: { "--custom-menu-viewport-padding": L ? "".concat(g.sb, "px") : "".concat(g.F3, "px") },
                    },
                    M.getContainerProps(),
                ),
                {
                    ref: j,
                    "aria-label": e["aria-label"],
                    children: (0, r.jsxs)(k, {
                        className: E.scroller,
                        children: [
                            0 === A.length &&
                                (0, r.jsx)(m.ck, {
                                    disabled: !0,
                                    label: () => (0, r.jsx)(w, {}),
                                    menuItemProps: M.getItemProps({ path: ["empty"] }),
                                    isFocused: !1,
                                    onFocus: () => {},
                                    onClose: O,
                                }),
                            A.length > 0 && R(A, M, [], O),
                        ],
                    }),
                },
            ),
        ),
    });
}
function D() {
    return (0, r.jsx)("div", {
        className: o()(E.menu, E.loader, E.flexible),
        children: (0, r.jsx)(u.$jN, {}),
    });
}
function w() {
    let e = "\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A",
        t = "\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A",
        [n, a] = i.useState(e);
    return (
        i.useEffect(() => {
            if (f.Z.useReducedMotion) return;
            let n = setInterval(() => {
                a((n) => (n === e ? t : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, r.jsx)("div", {
            style: {
                width: "100%",
                textAlign: "center",
            },
            children: n,
        })
    );
}
