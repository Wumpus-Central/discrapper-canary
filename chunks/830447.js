n.d(t, {
    T: () => C,
    v: () => A,
}),
    n(361932),
    n(187205),
    n(539854),
    n(388685),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(348327),
    l = n.n(s),
    c = n(498405),
    u = n(793030),
    d = n(21340),
    f = n(857595),
    _ = n(607070),
    p = n(828214),
    h = n(670596),
    m = n(788314),
    g = n(334405);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
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
function I(e) {
    return v(e).reduce((e, t) => {
        var n, r;
        if (t.type === p.Cl)
            return (
                e.push({
                    type: "separator",
                    navigable: !1,
                }),
                e
            );
        if (t.type === p.kS) {
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
        if (t.type === p.sN)
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
        if (t.type === p.S8)
            return (
                e.push({
                    type: "checkbox",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        if (t.type === p.k5)
            return (
                e.push({
                    type: "radio",
                    key: t.props.id,
                    navigable: !0,
                    props: t.props,
                }),
                e
            );
        else if (t.type === p.II)
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
function S(e, t, n, i) {
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
                o.length > 0 && e.push((0, r.jsx)(m.ZA, b({ contents: o.pop() }, s.props), "group-".concat(l)));
                break;
            case "item": {
                let { children: e, childRowHeight: o, onChildrenScroll: l, listClassName: u, subMenuClassName: d } = s,
                    f = null != e,
                    _ = [...n, s.key],
                    p = t.isFocused(_),
                    h = null != e ? { "aria-haspopup": !0 } : {},
                    g = (0, r.jsx)(
                        m.ck,
                        O(b({}, s.props), {
                            label: s.label,
                            hasSubmenu: null != e,
                            isFocused: p,
                            menuItemProps: b(
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
                                  O(b({}, s.props), {
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: _ }),
                                      rows: S(e, t, _, i),
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
                                  O(b({}, s.props), {
                                      subMenuClassName: d,
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: _ }),
                                      renderSubmenu: () => S(e, t, _, i),
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
                        O(b({}, s.props), {
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
                        O(b({}, s.props), {
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
                        O(b({}, s.props), {
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
            case "control": {
                let e = [...n, s.key];
                c.push(
                    (0, r.jsx)(
                        m.lc,
                        O(b({}, s.props), {
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
                        O(b({}, s.props), {
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
            className: p,
            children: E,
            onClose: y,
            onSelect: v,
            onInteraction: A,
        } = e,
        C = I(E),
        R = T(C),
        P = i.useRef([]);
    l()(P.current, R) || (P.current = R);
    let w = null == (t = C.find((e) => null != e.key)) ? void 0 : t.key,
        D = (0, c.Z)({
            navId: n,
            items: P.current,
            initialFocusPath: _.Z.keyboardModeEnabled && null != w ? [w] : [],
            closeMenu: y,
            defaultIsUsingKeyboardNavigation: _.Z.keyboardModeEnabled,
        });
    i.useEffect(() => {
        D.isUsingKeyboardNavigation ? _.Z.keyboardModeEnabled || (0, f.Qj)() : _.Z.keyboardModeEnabled && (0, f.rf)();
    }, [D.isUsingKeyboardNavigation]);
    let x = i.useRef(null);
    (0, u.Tbt)(x);
    let L = s ? d.u2 : d.zJ,
        j = i.useMemo(
            () => ({
                onSelect: v,
                onInteraction: A,
            }),
            [v, A],
        );
    return (0, r.jsx)(h.p.Provider, {
        value: j,
        children: (0, r.jsx)(
            "div",
            O(b({ className: o()(g.menu, g[a], p) }, D.getContainerProps()), {
                ref: x,
                "aria-label": e["aria-label"],
                children: (0, r.jsxs)(L, {
                    className: g.scroller,
                    children: [
                        0 === C.length &&
                            (0, r.jsx)(m.ck, {
                                disabled: !0,
                                label: () => (0, r.jsx)(N, {}),
                                menuItemProps: D.getItemProps({ path: ["empty"] }),
                                isFocused: !1,
                                onFocus: () => {},
                                onClose: y,
                            }),
                        C.length > 0 && S(C, D, [], y),
                    ],
                }),
            }),
        ),
    });
}
function C() {
    return (0, r.jsx)("div", {
        className: o()(g.menu, g.loader, g.flexible),
        children: (0, r.jsx)(u.$jN, {}),
    });
}
function N() {
    let e = "\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A",
        t = "\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A",
        [n, a] = i.useState(e);
    return (
        i.useEffect(() => {
            if (_.Z.useReducedMotion) return;
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
