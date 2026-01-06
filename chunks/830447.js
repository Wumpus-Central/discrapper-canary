n.d(t, {
    T: () => N,
    v: () => A,
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
    p = n(720312),
    _ = n(828214),
    m = n(670596),
    h = n(788314),
    g = n(939350),
    E = n(564546);
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
function I(e) {
    return S(e).reduce((e, t) => {
        var n, r;
        if (t.type === _.Cl)
            return (
                e.push({
                    type: "separator",
                    navigable: !1,
                }),
                e
            );
        if (t.type === _.kS) {
            let n = I(t.props.children);
            return (
                n.length > 0 &&
                    (e.push({
                        type: "groupstart",
                        length: n.length,
                        navigable: !1,
                        props: t.props,
                    }),
                    e.push(...n),
                    e.push({
                        type: "groupend",
                        length: n.length,
                        navigable: !1,
                        props: t.props,
                    })),
                e
            );
        }
        if (t.type === _.sN)
            return (
                e.push(
                    null != t.props.render
                        ? {
                              type: "customitem",
                              key: t.props.id,
                              navigable: null == t.props.navigable || t.props.navigable,
                              render: t.props.render,
                              props: t.props,
                          }
                        : {
                              type: "item",
                              key: t.props.id,
                              navigable: !0,
                              label: t.props.label,
                              children: t.props.children ? I(t.props.children) : void 0,
                              onChildrenScroll: t.props.onChildrenScroll,
                              props: t.props,
                              childRowHeight: t.props.childRowHeight,
                              listClassName: t.props.listClassName,
                              subMenuClassName: t.props.subMenuClassName,
                          },
                ),
                e
            );
        if (t.type === _.S8)
            return (
                e.push({
                    type: "checkbox",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        if (t.type === _.k5)
            return (
                e.push({
                    type: "radio",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        else if (t.type === _.m7)
            return (
                e.push({
                    type: "switch",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        else if (t.type === _.II)
            return (
                e.push(
                    null != t.props.control
                        ? {
                              type: "control",
                              key: t.props.id,
                              navigable: !0,
                              props: t.props,
                          }
                        : {
                              type: "compositecontrol",
                              key: t.props.id,
                              navigable: !1 !== t.props.interactive,
                              children: t.props.children,
                              props: t.props,
                          },
                ),
                e
            );
        throw Error(
            "Menu API only allows Items and groups of Items as children. Received "
                .concat(null != (r = null != (n = null == t ? void 0 : t.type) ? n : t) ? r : typeof t, " (")
                .concat(typeof t, ") instead"),
        );
    }, []);
}
function T(e) {
    return e.reduce(
        (e, t) => (
            t.navigable &&
                e.push({
                    key: t.key,
                    children: "item" === t.type && null != t.children ? T(t.children) : void 0,
                }),
            e
        ),
        [],
    );
}
function C(e, t, n, i) {
    let a = 0,
        o = [];
    return e.reduce((e, s, l) => {
        let c = o.length > 0 ? o[o.length - 1] : e;
        switch (s.type) {
            case "separator":
                c.push((0, r.jsx)(h.Z0, {}, "separator-".concat(l))), (a = 0);
                break;
            case "groupstart":
                a > 0 && s.length > 0 && (c.push((0, r.jsx)(h.Z0, {}, "separator-".concat(l))), (a = 0)), o.push([]);
                break;
            case "groupend":
                o.length > 0 && e.push((0, r.jsx)(h.ZA, y({ contents: o.pop() }, s.props), "group-".concat(l)));
                break;
            case "item": {
                let { children: e, childRowHeight: o, onChildrenScroll: l, listClassName: u, subMenuClassName: d } = s,
                    f = null != e,
                    p = [...n, s.key],
                    _ = t.isFocused(p),
                    m = null != e ? { "aria-haspopup": !0 } : {},
                    g = (0, r.jsx)(
                        h.ck,
                        v(y({}, s.props), {
                            label: s.label,
                            hasSubmenu: null != e,
                            isFocused: _,
                            menuItemProps: y(
                                {},
                                t.getItemProps({
                                    path: p,
                                    hasSubmenu: f,
                                }),
                                m,
                            ),
                            onClose: i,
                        }),
                        s.key,
                    );
                f
                    ? null != o
                        ? c.push(
                              (0, r.jsx)(
                                  h.P2,
                                  v(y({}, s.props), {
                                      parentItem: g,
                                      isFocused: _,
                                      menuSubmenuProps: t.getSubmenuProps({ path: p }),
                                      rows: C(e, t, p, i),
                                      rowHeight: o,
                                      onScroll: l,
                                      listClassName: u,
                                  }),
                                  "".concat(s.key, "-submenu"),
                              ),
                          )
                        : c.push(
                              (0, r.jsx)(
                                  h.LY,
                                  v(y({}, s.props), {
                                      subMenuClassName: d,
                                      parentItem: g,
                                      isFocused: _,
                                      menuSubmenuProps: t.getSubmenuProps({ path: p }),
                                      renderSubmenu: () => C(e, t, p, i),
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
                        h.kq,
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
                        h.oC,
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
                        h.Rk,
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
                        h.TO,
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
                        h.lc,
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
                        h.$I,
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
function A(e) {
    var t;
    let {
            navId: n,
            variant: a = "flexible",
            hideScroller: s = !1,
            className: _,
            children: b,
            onClose: O,
            onSelect: S,
            onInteraction: A,
        } = e,
        N = I(b),
        R = T(N),
        w = i.useRef([]);
    l()(w.current, R) || (w.current = R);
    let D = (0, p.c)("Menu"),
        x = null == (t = N.find((e) => null != e.key)) ? void 0 : t.key,
        L = (0, c.Z)({
            navId: n,
            items: w.current,
            initialFocusPath: f.Z.keyboardModeEnabled && null != x ? [x] : [],
            closeMenu: O,
            defaultIsUsingKeyboardNavigation: f.Z.keyboardModeEnabled,
        });
    i.useEffect(() => {
        L.isUsingKeyboardNavigation ? f.Z.keyboardModeEnabled || (0, d.Qj)() : f.Z.keyboardModeEnabled && (0, d.rf)();
    }, [L.isUsingKeyboardNavigation]);
    let j = i.useRef(null);
    (0, u.Tbt)(j);
    let M = s ? u.u2D : u.zJl,
        k = i.useMemo(
            () => ({
                onSelect: S,
                onInteraction: A,
            }),
            [S, A],
        );
    return (0, r.jsx)(m.p.Provider, {
        value: k,
        children: (0, r.jsx)(
            "div",
            v(
                y(
                    {
                        className: o()(E.menu, E[a], _),
                        style: {
                            "--custom-menu-viewport-padding": D ? "".concat(g.sb, "px") : "".concat(g.F3, "px"),
                            "--custom-menu-flexible-min-width": D ? "144px" : "188px",
                        },
                    },
                    L.getContainerProps(),
                ),
                {
                    ref: j,
                    "aria-label": e["aria-label"],
                    children: (0, r.jsxs)(M, {
                        className: E.scroller,
                        children: [
                            0 === N.length &&
                                (0, r.jsx)(h.ck, {
                                    disabled: !0,
                                    label: () => (0, r.jsx)(P, {}),
                                    menuItemProps: L.getItemProps({ path: ["empty"] }),
                                    isFocused: !1,
                                    onFocus: () => {},
                                    onClose: O,
                                }),
                            N.length > 0 && C(N, L, [], O),
                        ],
                    }),
                },
            ),
        ),
    });
}
function N() {
    return (0, r.jsx)("div", {
        className: o()(E.menu, E.loader, E.flexible),
        children: (0, r.jsx)(u.$jN, {}),
    });
}
function P() {
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
