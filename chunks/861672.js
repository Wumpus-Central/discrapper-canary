"use strict";
n.d(t, { W: () => S, X: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(885621),
    E = n(658122);
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
function y(e, t, n, i) {
    let a = 0,
        s = [];
    return e.reduce((e, o, l) => {
        let u = s.length > 0 ? s[s.length - 1] : e;
        switch (o.type) {
            case "separator":
                u.push((0, r.jsx)(m.wv, {}, `separator-${l}`)), (a = 0);
                break;
            case "groupstart":
                a > 0 && o.length > 0 && (u.push((0, r.jsx)(m.wv, {}, `separator-${l}`)), (a = 0)), s.push([]);
                break;
            case "groupend":
                s.length > 0 && e.push((0, r.jsx)(m.YJ, { contents: s.pop(), ...o.props }, `group-${l}`));
                break;
            case "item": {
                let { children: e, childRowHeight: s, onChildrenScroll: l, listClassName: c, subMenuClassName: d } = o,
                    _ = null != e,
                    f = [...n, o.key],
                    p = t.isFocused(f),
                    h = null != e ? { "aria-haspopup": !0 } : {},
                    g = (0, r.jsx)(
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
                    ? null != s
                        ? u.push(
                              (0, r.jsx)(
                                  m.t6,
                                  {
                                      ...o.props,
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: f }),
                                      rows: y(e, t, f, i),
                                      rowHeight: s,
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
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: f }),
                                      renderSubmenu: () => y(e, t, f, i),
                                  },
                                  `${o.key}-submenu`,
                              ),
                          )
                    : u.push(g),
                    a++;
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
                    a++;
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
                    a++;
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
                    a++;
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
                    a++;
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
                    a++;
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
                    a++;
            }
        }
        return e;
    }, []);
}
function S(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: a = !1,
            className: o,
            children: p,
            onClose: A,
            onSelect: S,
            onInteraction: v,
        } = e,
        b = I(p),
        N = T(b),
        R = i.useRef([]);
    l()(R.current, N) || (R.current = N);
    let O = (0, f.Y)("Menu"),
        D = b.find((e) => null != e.key)?.key,
        L = (0, u.A)({
            navId: t,
            items: R.current,
            initialFocusPath: _.A.keyboardModeEnabled && null != D ? [D] : [],
            closeMenu: A,
            defaultIsUsingKeyboardNavigation: _.A.keyboardModeEnabled,
        });
    i.useEffect(() => {
        L.isUsingKeyboardNavigation ? _.A.keyboardModeEnabled || (0, d.uS)() : _.A.keyboardModeEnabled && (0, d.Bm)();
    }, [L.isUsingKeyboardNavigation]);
    let w = i.useRef(null);
    (0, c.tjt)(w);
    let x = a ? c.d_W : c.IpV,
        P = i.useMemo(() => ({ onSelect: S, onInteraction: v }), [S, v]);
    return (0, r.jsx)(h.x.Provider, {
        value: P,
        children: (0, r.jsx)("div", {
            className: s()(E.menu, E[n], o),
            style: {
                "--custom-menu-viewport-padding": O ? `${g.FD}px` : `${g.vx}px`,
                "--custom-menu-flexible-min-width": O ? "144px" : "188px",
            },
            ...L.getContainerProps(),
            ref: w,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(x, {
                className: E.scroller,
                children: [
                    0 === b.length &&
                        (0, r.jsx)(m.q7, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(C, {}),
                            menuItemProps: L.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: A,
                        }),
                    b.length > 0 && y(b, L, [], A),
                ],
            }),
        }),
    });
}
function v() {
    return (0, r.jsx)("div", { className: s()(E.menu, E.loader, E.flexible), children: (0, r.jsx)(c.y$y, {}) });
}
function C() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        t = "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
        [n, a] = i.useState(e);
    return (
        i.useEffect(() => {
            if (_.A.useReducedMotion) return;
            let n = setInterval(() => {
                a((n) => (n === e ? t : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: n })
    );
}
