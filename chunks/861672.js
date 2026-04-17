"use strict";
n.d(t, { W: () => v, X: () => N }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(812729),
    l = n.n(o),
    u = n(970622),
    c = n(508382),
    d = n(158954),
    _ = n(955572),
    f = n(775602),
    p = n(298063),
    h = n(477782),
    m = n(900283),
    E = n(225012),
    g = n(885621),
    A = n(32271);
function I(e) {
    return null == e
        ? []
        : i.Children.toArray(e).flatMap((e) =>
              null == e ? [] : Array.isArray(e) ? I(e) : e.type === i.Fragment ? (I(e.props.children) ?? []) : [e],
          );
}
function T(e) {
    return I(e).reduce((e, t) => {
        if (t.type === h.bX) return e.push({ type: "separator", navigable: !1 }), e;
        if (t.type === h.rX) {
            let n = T(t.props.children);
            return (
                n.length > 0 &&
                    (e.push({ type: "groupstart", length: n.length, navigable: !1, props: t.props }),
                    e.push(...n),
                    e.push({ type: "groupend", length: n.length, navigable: !1, props: t.props })),
                e
            );
        }
        if (t.type === h.Dr)
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
                              children: t.props.children ? T(t.props.children) : void 0,
                              onChildrenScroll: t.props.onChildrenScroll,
                              props: t.props,
                              childRowHeight: t.props.childRowHeight,
                              listClassName: t.props.listClassName,
                              subMenuClassName: t.props.subMenuClassName,
                          },
                ),
                e
            );
        if (t.type === h.sL) return e.push({ type: "checkbox", key: t.props.id, navigable: !0, props: t.props }), e;
        if (t.type === h.iD) return e.push({ type: "radio", key: t.props.id, navigable: !0, props: t.props }), e;
        else if (t.type === h.fP) return e.push({ type: "switch", key: t.props.id, navigable: !0, props: t.props }), e;
        else if (t.type === h.Yn)
            return e.push({ type: "textinput", key: t.props.id, navigable: !0, props: t.props }), e;
        else if (t.type === h.aK)
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
function S(e) {
    return e.reduce(
        (e, t) => (
            t.navigable &&
                e.push({ key: t.key, children: "item" === t.type && null != t.children ? S(t.children) : void 0 }),
            e
        ),
        [],
    );
}
function y(e, t, n, i) {
    let s = 0,
        a = [];
    return e.reduce((e, o, l) => {
        let u = a.length > 0 ? a[a.length - 1] : e;
        switch (o.type) {
            case "separator":
                u.push((0, r.jsx)(E.wv, {}, `separator-${l}`)), (s = 0);
                break;
            case "groupstart":
                s > 0 && o.length > 0 && (u.push((0, r.jsx)(E.wv, {}, `separator-${l}`)), (s = 0)), a.push([]);
                break;
            case "groupend":
                a.length > 0 && e.push((0, r.jsx)(E.YJ, { contents: a.pop(), ...o.props }, `group-${l}`));
                break;
            case "item": {
                let { children: e, childRowHeight: a, onChildrenScroll: l, listClassName: c, subMenuClassName: d } = o,
                    _ = null != e,
                    f = [...n, o.key],
                    p = t.isFocused(f),
                    h = null != e ? { "aria-haspopup": !0 } : {},
                    m = (0, r.jsx)(
                        E.q7,
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
                                  E.t6,
                                  {
                                      ...o.props,
                                      parentItem: m,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: f }),
                                      rows: y(e, t, f, i),
                                      rowHeight: a,
                                      onScroll: l,
                                      listClassName: c,
                                  },
                                  `${o.key}-submenu`,
                              ),
                          )
                        : u.push(
                              (0, r.jsx)(
                                  E.hA,
                                  {
                                      ...o.props,
                                      subMenuClassName: d,
                                      parentItem: m,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: f }),
                                      renderSubmenu: () => y(e, t, f, i),
                                  },
                                  `${o.key}-submenu`,
                              ),
                          )
                    : u.push(m),
                    s++;
                break;
            }
            case "customitem": {
                let e = [...n, o.key];
                u.push(
                    (0, r.jsx)(
                        E.FC,
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
                        E.H_,
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
                        E.hN,
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
                        E.av,
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
                        E.rh,
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
                        E.TV,
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
                        E.O1,
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
function v(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: s = !1,
            className: o,
            children: h,
            onClose: I,
            onSelect: v,
            onInteraction: N,
        } = e,
        R = T(h),
        O = S(R),
        b = i.useRef([]);
    l()(b.current, O) || (b.current = O);
    let D = (0, p.Y)("Menu"),
        L = R.find((e) => null != e.key)?.key,
        w = (0, u.A)({
            navId: t,
            items: b.current,
            initialFocusPath: f.A.keyboardModeEnabled && null != L ? [L] : [],
            closeMenu: I,
            defaultIsUsingKeyboardNavigation: f.A.keyboardModeEnabled,
        });
    i.useEffect(() => {
        w.isUsingKeyboardNavigation ? f.A.keyboardModeEnabled || (0, _.uS)() : f.A.keyboardModeEnabled && (0, _.Bm)();
    }, [w.isUsingKeyboardNavigation]);
    let M = i.useRef(null),
        P = i.useContext(c.jQ),
        x = "none" !== (P?.focus ?? "none");
    (0, d.tjt)(M, { disable: x }),
        i.useEffect(() => {
            x && M.current?.focus();
        }, [x]);
    let k = s ? d.d_W : d.IpV,
        U = i.useMemo(() => ({ onSelect: v, onInteraction: N }), [v, N]);
    return (0, r.jsx)(m.x.Provider, {
        value: U,
        children: (0, r.jsx)("div", {
            className: a()(A.menu, A[n], o),
            style: {
                "--custom-menu-viewport-padding": D ? `${g.FD}px` : `${g.vx}px`,
                "--custom-menu-flexible-min-width": D ? "144px" : "188px",
            },
            ...w.getContainerProps(),
            ref: M,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(k, {
                className: A.scroller,
                children: [
                    0 === R.length &&
                        (0, r.jsx)(E.q7, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(C, {}),
                            menuItemProps: w.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: I,
                        }),
                    R.length > 0 && y(R, w, [], I),
                ],
            }),
        }),
    });
}
function N() {
    return (0, r.jsx)("div", { className: a()(A.menu, A.loader, A.flexible), children: (0, r.jsx)(d.y$y, {}) });
}
function C() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        t = "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
        [n, s] = i.useState(e);
    return (
        i.useEffect(() => {
            if (f.A.useReducedMotion) return;
            let n = setInterval(() => {
                s((n) => (n === e ? t : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: n })
    );
}
