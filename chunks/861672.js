n.d(t, {
    W: () => C,
    X: () => N,
}),
    n(114821),
    n(339614),
    n(321073),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(812729),
    l = n.n(o),
    c = n(970622),
    u = n(158954),
    d = n(955572),
    f = n(775602),
    p = n(298063),
    _ = n(477782),
    h = n(900283),
    m = n(225012),
    g = n(885621),
    E = n(658122);

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

function A(e, t) {
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

function v(e) {
    return null == e
        ? []
        : i.Children.toArray(e).flatMap((e) => {
              var t;
              return null == e
                  ? []
                  : Array.isArray(e)
                    ? v(e)
                    : e.type === i.Fragment
                      ? null != (t = v(e.props.children))
                          ? t
                          : []
                      : [e];
          });
}

function S(e) {
    return v(e).reduce((e, t) => {
        var n, r;
        if (t.type === _.bX)
            return (
                e.push({
                    type: "separator",
                    navigable: !1,
                }),
                e
            );
        if (t.type === _.rX) {
            let n = S(t.props.children);
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
        if (t.type === _.Dr)
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
                              children: t.props.children ? S(t.props.children) : void 0,
                              onChildrenScroll: t.props.onChildrenScroll,
                              props: t.props,
                              childRowHeight: t.props.childRowHeight,
                              listClassName: t.props.listClassName,
                              subMenuClassName: t.props.subMenuClassName,
                          },
                ),
                e
            );
        if (t.type === _.sL)
            return (
                e.push({
                    type: "checkbox",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        if (t.type === _.iD)
            return (
                e.push({
                    type: "radio",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        else if (t.type === _.fP)
            return (
                e.push({
                    type: "switch",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        else if (t.type === _.aK)
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
                .concat(null != (n = null != (r = null == t ? void 0 : t.type) ? r : t) ? n : typeof t, " (")
                .concat(typeof t, ") instead"),
        );
    }, []);
}

function I(e) {
    return e.reduce(
        (e, t) => (
            t.navigable &&
                e.push({
                    key: t.key,
                    children: "item" === t.type && null != t.children ? I(t.children) : void 0,
                }),
            e
        ),
        [],
    );
}

function T(e, t, n, i) {
    let a = 0,
        s = [];
    return e.reduce((e, o, l) => {
        let c = s.length > 0 ? s[s.length - 1] : e;
        switch (o.type) {
            case "separator":
                c.push((0, r.jsx)(m.wv, {}, "separator-".concat(l))), (a = 0);
                break;
            case "groupstart":
                a > 0 && o.length > 0 && (c.push((0, r.jsx)(m.wv, {}, "separator-".concat(l))), (a = 0)), s.push([]);
                break;
            case "groupend":
                s.length > 0 &&
                    e.push(
                        (0, r.jsx)(
                            m.YJ,
                            y(
                                {
                                    contents: s.pop(),
                                },
                                o.props,
                            ),
                            "group-".concat(l),
                        ),
                    );
                break;
            case "item": {
                let { children: e, childRowHeight: s, onChildrenScroll: l, listClassName: u, subMenuClassName: d } = o,
                    f = null != e,
                    p = [...n, o.key],
                    _ = t.isFocused(p),
                    h =
                        null != e
                            ? {
                                  "aria-haspopup": !0,
                              }
                            : {},
                    g = (0, r.jsx)(
                        m.q7,
                        A(y({}, o.props), {
                            label: o.label,
                            hasSubmenu: null != e,
                            isFocused: _,
                            menuItemProps: y(
                                {},
                                t.getItemProps({
                                    path: p,
                                    hasSubmenu: f,
                                }),
                                h,
                            ),
                            onClose: i,
                        }),
                        o.key,
                    );
                f
                    ? null != s
                        ? c.push(
                              (0, r.jsx)(
                                  m.t6,
                                  A(y({}, o.props), {
                                      parentItem: g,
                                      isFocused: _,
                                      menuSubmenuProps: t.getSubmenuProps({
                                          path: p,
                                      }),
                                      rows: T(e, t, p, i),
                                      rowHeight: s,
                                      onScroll: l,
                                      listClassName: u,
                                  }),
                                  "".concat(o.key, "-submenu"),
                              ),
                          )
                        : c.push(
                              (0, r.jsx)(
                                  m.hA,
                                  A(y({}, o.props), {
                                      subMenuClassName: d,
                                      parentItem: g,
                                      isFocused: _,
                                      menuSubmenuProps: t.getSubmenuProps({
                                          path: p,
                                      }),
                                      renderSubmenu: () => T(e, t, p, i),
                                  }),
                                  "".concat(o.key, "-submenu"),
                              ),
                          )
                    : c.push(g),
                    a++;
                break;
            }
            case "customitem": {
                let e = [...n, o.key];
                c.push(
                    (0, r.jsx)(
                        m.FC,
                        A(y({}, o.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                navigable: o.navigable,
                            }),
                            onClose: i,
                            children: o.render,
                        }),
                        o.key,
                    ),
                ),
                    a++;
                break;
            }
            case "checkbox": {
                let e = [...n, o.key];
                c.push(
                    (0, r.jsx)(
                        m.H_,
                        A(y({}, o.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: "menuitemcheckbox",
                            }),
                        }),
                        o.key,
                    ),
                ),
                    a++;
                break;
            }
            case "radio": {
                let e = [...n, o.key];
                c.push(
                    (0, r.jsx)(
                        m.hN,
                        A(y({}, o.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: "menuitemradio",
                            }),
                        }),
                        o.key,
                    ),
                ),
                    a++;
                break;
            }
            case "switch": {
                let e = [...n, o.key];
                c.push(
                    (0, r.jsx)(
                        m.av,
                        A(y({}, o.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: "menuitemcheckbox",
                            }),
                        }),
                        o.key,
                    ),
                ),
                    a++;
                break;
            }
            case "control": {
                let e = [...n, o.key];
                c.push(
                    (0, r.jsx)(
                        m.TV,
                        A(y({}, o.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                            }),
                            onClose: i,
                        }),
                        o.key,
                    ),
                ),
                    a++;
                break;
            }
            case "compositecontrol": {
                let e = [...n, o.key];
                c.push(
                    (0, r.jsx)(
                        m.O1,
                        A(y({}, o.props), {
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                            }),
                            onClose: i,
                            children: o.children,
                        }),
                        o.key,
                    ),
                ),
                    a++;
            }
        }
        return e;
    }, []);
}

function C(e) {
    var t;
    let {
            navId: n,
            variant: a = "flexible",
            hideScroller: o = !1,
            className: _,
            children: b,
            onClose: O,
            onSelect: v,
            onInteraction: C,
        } = e,
        N = S(b),
        w = I(N),
        P = i.useRef([]);
    l()(P.current, w) || (P.current = w);
    let D = (0, p.Y)("Menu"),
        x = null == (t = N.find((e) => null != e.key)) ? void 0 : t.key,
        L = (0, c.A)({
            navId: n,
            items: P.current,
            initialFocusPath: f.A.keyboardModeEnabled && null != x ? [x] : [],
            closeMenu: O,
            defaultIsUsingKeyboardNavigation: f.A.keyboardModeEnabled,
        });
    i.useEffect(() => {
        L.isUsingKeyboardNavigation ? f.A.keyboardModeEnabled || (0, d.uS)() : f.A.keyboardModeEnabled && (0, d.Bm)();
    }, [L.isUsingKeyboardNavigation]);
    let j = i.useRef(null);
    (0, u.tjt)(j);
    let M = o ? u.d_W : u.IpV,
        k = i.useMemo(
            () => ({
                onSelect: v,
                onInteraction: C,
            }),
            [v, C],
        );
    return (0, r.jsx)(h.x.Provider, {
        value: k,
        children: (0, r.jsx)(
            "div",
            A(
                y(
                    {
                        className: s()(E.menu, E[a], _),
                        style: {
                            "--custom-menu-viewport-padding": D ? "".concat(g.FD, "px") : "".concat(g.vx, "px"),
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
                                (0, r.jsx)(m.q7, {
                                    disabled: !0,
                                    label: () => (0, r.jsx)(R, {}),
                                    menuItemProps: L.getItemProps({
                                        path: ["empty"],
                                    }),
                                    isFocused: !1,
                                    onFocus: () => {},
                                    onClose: O,
                                }),
                            N.length > 0 && T(N, L, [], O),
                        ],
                    }),
                },
            ),
        ),
    });
}

function N() {
    return (0, r.jsx)("div", {
        className: s()(E.menu, E.loader, E.flexible),
        children: (0, r.jsx)(u.y$y, {}),
    });
}

function R() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        t = "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
        [n, a] = i.useState(e);
    return (
        i.useEffect(() => {
            if (f.A.useReducedMotion) return;
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
