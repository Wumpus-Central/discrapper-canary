"use strict";
n.d(t, { W: () => y, X: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(812729),
    l = n.n(o),
    u = n(970622),
    c = n(158954),
    d = n(955572),
    _ = n(775602),
    f = n(298063),
    p = n(477782),
    h = n(900283),
    m = n(225012),
    E = n(885621),
    g = n(32271);
function A(e) {
    return null == e
        ? []
        : i.Children.toArray(e).flatMap((e) =>
              null == e ? [] : Array.isArray(e) ? A(e) : e.type === i.Fragment ? (A(e.props.children) ?? []) : [e],
          );
}
function I(e) {
    return A(e).reduce((e, t) => {
        if (t.type === p.bX) return e.push({ type: "separator", navigable: !1 }), e;
        if (t.type === p.rX) {
            let n = I(t.props.children);
            return (
                n.length > 0 &&
                    (e.push({ type: "groupstart", length: n.length, navigable: !1, props: t.props }),
                    e.push(...n),
                    e.push({ type: "groupend", length: n.length, navigable: !1, props: t.props })),
                e
            );
        }
        if (t.type === p.Dr)
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
                              void_label: t.props.void_label,
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
        if (t.type === p.sL) return e.push({ type: "checkbox", key: t.props.id, navigable: !0, props: t.props }), e;
        if (t.type === p.iD) return e.push({ type: "radio", key: t.props.id, navigable: !0, props: t.props }), e;
        else if (t.type === p.fP) return e.push({ type: "switch", key: t.props.id, navigable: !0, props: t.props }), e;
        else if (t.type === p.Yn)
            return e.push({ type: "textinput", key: t.props.id, navigable: !0, props: t.props }), e;
        else if (t.type === p.aK)
            return (
                e.push(
                    null != t.props.control
                        ? { type: "control", key: t.props.id, navigable: !0, props: t.props }
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
            `Menu API only allows Items and groups of Items as children. Received ${t?.type ?? t ?? typeof t} (${typeof t}) instead`,
        );
    }, []);
}
function T(e) {
    return e.reduce(
        (e, t) => (
            t.navigable &&
                e.push({ key: t.key, children: "item" === t.type && null != t.children ? T(t.children) : void 0 }),
            e
        ),
        [],
    );
}
function S(e, t, n, i) {
    let s = 0,
        a = [];
    return e.reduce((e, o, l) => {
        let u = a.length > 0 ? a[a.length - 1] : e;
        switch (o.type) {
            case "separator":
                u.push((0, r.jsx)(m.wv, {}, `separator-${l}`)), (s = 0);
                break;
            case "groupstart":
                s > 0 && o.length > 0 && (u.push((0, r.jsx)(m.wv, {}, `separator-${l}`)), (s = 0)), a.push([]);
                break;
            case "groupend":
                a.length > 0 && e.push((0, r.jsx)(m.YJ, { contents: a.pop(), ...o.props }, `group-${l}`));
                break;
            case "item": {
                let { children: e, childRowHeight: a, onChildrenScroll: l, listClassName: c, subMenuClassName: d } = o,
                    _ = null != e,
                    f = [...n, o.key],
                    p = t.isFocused(f),
                    h = null != e ? { "aria-haspopup": !0 } : {},
                    E = (0, r.jsx)(
                        m.q7,
                        {
                            ...o.props,
                            ...(null != o.label ? { label: o.label } : { void_label: o.void_label }),
                            hasSubmenu: null != e,
                            isFocused: p,
                            menuItemProps: { ...t.getItemProps({ path: f, hasSubmenu: _ }), ...h },
                            onClose: i,
                        },
                        o.key,
                    );
                _
                    ? null != a
                        ? u.push(
                              (0, r.jsx)(
                                  m.t6,
                                  {
                                      ...o.props,
                                      parentItem: E,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: f }),
                                      rows: S(e, t, f, i),
                                      rowHeight: a,
                                      onScroll: l,
                                      listClassName: c,
                                  },
                                  `${o.key}-submenu`,
                              ),
                          )
                        : u.push(
                              (0, r.jsx)(
                                  m.hA,
                                  {
                                      ...o.props,
                                      subMenuClassName: d,
                                      parentItem: E,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: f }),
                                      renderSubmenu: () => S(e, t, f, i),
                                  },
                                  `${o.key}-submenu`,
                              ),
                          )
                    : u.push(E),
                    s++;
                break;
            }
            case "customitem": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.FC,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e, navigable: o.navigable }),
                            onClose: i,
                            children: o.render,
                        },
                        o.key,
                    ),
                ),
                    s++;
                break;
            }
            case "checkbox": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.H_,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e, role: "menuitemcheckbox" }),
                        },
                        o.key,
                    ),
                ),
                    s++;
                break;
            }
            case "radio": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.hN,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e, role: "menuitemradio" }),
                        },
                        o.key,
                    ),
                ),
                    s++;
                break;
            }
            case "switch": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.av,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e, role: "menuitemcheckbox" }),
                        },
                        o.key,
                    ),
                ),
                    s++;
                break;
            }
            case "textinput": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.rh,
                        { ...o.props, isFocused: t.isFocused(e), menuItemProps: t.getItemProps({ path: e }) },
                        o.key,
                    ),
                ),
                    s++;
                break;
            }
            case "control": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.TV,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: i,
                        },
                        o.key,
                    ),
                ),
                    s++;
                break;
            }
            case "compositecontrol": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        m.O1,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: i,
                            children: o.children,
                        },
                        o.key,
                    ),
                ),
                    s++;
            }
        }
        return e;
    }, []);
}
function y(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: s = !1,
            className: o,
            children: p,
            onClose: A,
            onSelect: y,
            onInteraction: v,
        } = e,
        C = I(p),
        R = T(C),
        O = i.useRef([]);
    l()(O.current, R) || (O.current = R);
    let b = (0, f.Y)("Menu"),
        D = C.find((e) => null != e.key)?.key,
        L = (0, u.A)({
            navId: t,
            items: O.current,
            initialFocusPath: _.A.keyboardModeEnabled && null != D ? [D] : [],
            closeMenu: A,
            defaultIsUsingKeyboardNavigation: _.A.keyboardModeEnabled,
        });
    i.useEffect(() => {
        L.isUsingKeyboardNavigation ? _.A.keyboardModeEnabled || (0, d.uS)() : _.A.keyboardModeEnabled && (0, d.Bm)();
    }, [L.isUsingKeyboardNavigation]);
    let w = i.useRef(null);
    (0, c.tjt)(w);
    let M = s ? c.d_W : c.IpV,
        P = i.useMemo(() => ({ onSelect: y, onInteraction: v }), [y, v]);
    return (0, r.jsx)(h.x.Provider, {
        value: P,
        children: (0, r.jsx)("div", {
            className: a()(g.menu, g[n], o),
            style: {
                "--custom-menu-viewport-padding": b ? `${E.FD}px` : `${E.vx}px`,
                "--custom-menu-flexible-min-width": b ? "144px" : "188px",
            },
            ...L.getContainerProps(),
            ref: w,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(M, {
                className: g.scroller,
                children: [
                    0 === C.length &&
                        (0, r.jsx)(m.q7, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(N, {}),
                            menuItemProps: L.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: A,
                        }),
                    C.length > 0 && S(C, L, [], A),
                ],
            }),
        }),
    });
}
function v() {
    return (0, r.jsx)("div", { className: a()(g.menu, g.loader, g.flexible), children: (0, r.jsx)(c.y$y, {}) });
}
function N() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        t = "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
        [n, s] = i.useState(e);
    return (
        i.useEffect(() => {
            if (_.A.useReducedMotion) return;
            let n = setInterval(() => {
                s((n) => (n === e ? t : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: n })
    );
}
