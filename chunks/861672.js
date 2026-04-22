"use strict";
n.d(t, { W: () => M, X: () => P }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(812729),
    l = n.n(o),
    u = n(970622),
    d = n(508382),
    c = n(315710),
    _ = n(573613),
    f = n(289873),
    E = n(955572),
    h = n(775602),
    p = n(298063),
    m = n(477782),
    g = n(900283),
    A = n(742714),
    I = n(216126),
    T = n(505202),
    S = n(592873),
    y = n(637389),
    N = n(128599),
    O = n(888457),
    R = n(663551),
    v = n(410142),
    C = n(413357),
    b = n(601485),
    D = n(52822),
    L = n(885621),
    w = n(32271);
function M(e) {
    let {
            navId: t,
            variant: n = "flexible",
            hideScroller: s = !1,
            className: o,
            children: f,
            onClose: M,
            onSelect: P,
            onInteraction: k,
        } = e,
        x = (function e(t) {
            return (function e(t) {
                return null == t
                    ? []
                    : i.Children.toArray(t).flatMap((t) =>
                          null == t
                              ? []
                              : Array.isArray(t)
                                ? e(t)
                                : t.type === i.Fragment
                                  ? (e(t.props.children) ?? [])
                                  : [t],
                      );
            })(t).reduce((t, n) => {
                if (n.type === m.bX) return t.push({ type: "separator", navigable: !1 }), t;
                if (n.type === m.rX) {
                    let r = e(n.props.children);
                    return (
                        r.length > 0 &&
                            (t.push({ type: "groupstart", length: r.length, navigable: !1, props: n.props }),
                            t.push(...r),
                            t.push({ type: "groupend", length: r.length, navigable: !1, props: n.props })),
                        t
                    );
                }
                if (n.type === m.Dr)
                    return (
                        t.push(
                            null != n.props.render
                                ? {
                                      type: "customitem",
                                      key: n.props.id,
                                      navigable: null == n.props.navigable || n.props.navigable,
                                      render: n.props.render,
                                      props: n.props,
                                  }
                                : {
                                      type: "item",
                                      key: n.props.id,
                                      navigable: !0,
                                      label: n.props.label,
                                      void_label: n.props.void_label,
                                      children: n.props.children ? e(n.props.children) : void 0,
                                      onChildrenScroll: n.props.onChildrenScroll,
                                      props: n.props,
                                      childRowHeight: n.props.childRowHeight,
                                      listClassName: n.props.listClassName,
                                      subMenuClassName: n.props.subMenuClassName,
                                  },
                        ),
                        t
                    );
                if (n.type === m.sL)
                    return t.push({ type: "checkbox", key: n.props.id, navigable: !0, props: n.props }), t;
                if (n.type === m.iD)
                    return t.push({ type: "radio", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === m.fP)
                    return t.push({ type: "switch", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === m.Yn)
                    return t.push({ type: "textinput", key: n.props.id, navigable: !0, props: n.props }), t;
                else if (n.type === m.aK)
                    return (
                        t.push(
                            null != n.props.control
                                ? { type: "control", key: n.props.id, navigable: !0, props: n.props }
                                : {
                                      type: "compositecontrol",
                                      key: n.props.id,
                                      navigable: !1 !== n.props.interactive,
                                      children: n.props.children,
                                      props: n.props,
                                  },
                        ),
                        t
                    );
                throw Error(
                    `Menu API only allows Items and groups of Items as children. Received ${n?.type ?? n ?? typeof n} (${typeof n}) instead`,
                );
            }, []);
        })(f),
        G = (function e(t) {
            return t.reduce(
                (t, n) => (
                    n.navigable &&
                        t.push({
                            key: n.key,
                            children: "item" === n.type && null != n.children ? e(n.children) : void 0,
                        }),
                    t
                ),
                [],
            );
        })(x),
        V = i.useRef([]);
    l()(V.current, G) || (V.current = G);
    let F = (0, p.Y)("Menu"),
        B = x.find((e) => null != e.key)?.key,
        H = (0, u.A)({
            navId: t,
            items: V.current,
            initialFocusPath: h.A.keyboardModeEnabled && null != B ? [B] : [],
            closeMenu: M,
            defaultIsUsingKeyboardNavigation: h.A.keyboardModeEnabled,
        });
    i.useEffect(() => {
        H.isUsingKeyboardNavigation ? h.A.keyboardModeEnabled || (0, E.uS)() : h.A.keyboardModeEnabled && (0, E.Bm)();
    }, [H.isUsingKeyboardNavigation]);
    let Y = i.useRef(null),
        W = i.useContext(d.jQ),
        j = "none" !== (W?.focus ?? "none");
    (0, c.t)(Y, { disable: j }),
        i.useEffect(() => {
            j && Y.current?.focus();
        }, [j]);
    let K = s ? _.d_ : _.Ip,
        $ = i.useMemo(() => ({ onSelect: P, onInteraction: k }), [P, k]);
    return (0, r.jsx)(g.x.Provider, {
        value: $,
        children: (0, r.jsx)("div", {
            className: a()(w.menu, w[n], o),
            style: {
                "--custom-menu-viewport-padding": F ? `${L.FD}px` : `${L.vx}px`,
                "--custom-menu-flexible-min-width": F ? "144px" : "188px",
            },
            ...H.getContainerProps(),
            ref: Y,
            "aria-label": e["aria-label"],
            children: (0, r.jsxs)(K, {
                className: w.scroller,
                children: [
                    0 === x.length &&
                        (0, r.jsx)(T.D, {
                            disabled: !0,
                            void_label: () => (0, r.jsx)(U, {}),
                            menuItemProps: H.getItemProps({ path: ["empty"] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: M,
                        }),
                    x.length > 0 &&
                        (function e(t, n, i, s) {
                            let a = 0,
                                o = [];
                            return t.reduce((t, l, u) => {
                                let d = o.length > 0 ? o[o.length - 1] : t;
                                switch (l.type) {
                                    case "separator":
                                        d.push((0, r.jsx)(A.b, {}, `separator-${u}`)), (a = 0);
                                        break;
                                    case "groupstart":
                                        a > 0 &&
                                            l.length > 0 &&
                                            (d.push((0, r.jsx)(A.b, {}, `separator-${u}`)), (a = 0)),
                                            o.push([]);
                                        break;
                                    case "groupend":
                                        o.length > 0 &&
                                            t.push((0, r.jsx)(I.r, { contents: o.pop(), ...l.props }, `group-${u}`));
                                        break;
                                    case "item": {
                                        let {
                                                children: t,
                                                childRowHeight: o,
                                                onChildrenScroll: u,
                                                listClassName: c,
                                                subMenuClassName: _,
                                            } = l,
                                            f = null != t,
                                            E = [...i, l.key],
                                            h = n.isFocused(E),
                                            p = (0, r.jsx)(
                                                T.D,
                                                {
                                                    ...l.props,
                                                    ...(null != l.label
                                                        ? { label: l.label }
                                                        : { void_label: l.void_label }),
                                                    hasSubmenu: null != t,
                                                    isFocused: h,
                                                    menuItemProps: {
                                                        ...n.getItemProps({ path: E, hasSubmenu: f }),
                                                        ...(null != t ? { "aria-haspopup": !0 } : {}),
                                                    },
                                                    onClose: s,
                                                },
                                                l.key,
                                            );
                                        f
                                            ? null != o
                                                ? d.push(
                                                      (0, r.jsx)(
                                                          S.c,
                                                          {
                                                              ...l.props,
                                                              parentItem: p,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: E }),
                                                              rows: e(t, n, E, s),
                                                              rowHeight: o,
                                                              onScroll: u,
                                                              listClassName: c,
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                                : d.push(
                                                      (0, r.jsx)(
                                                          y.u,
                                                          {
                                                              ...l.props,
                                                              subMenuClassName: _,
                                                              parentItem: p,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: E }),
                                                              renderSubmenu: () => e(t, n, E, s),
                                                          },
                                                          `${l.key}-submenu`,
                                                      ),
                                                  )
                                            : d.push(p),
                                            a++;
                                        break;
                                    }
                                    case "customitem": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                N.a,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, navigable: l.navigable }),
                                                    onClose: s,
                                                    children: l.render,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "checkbox": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                O.s,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "radio": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                R.i,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e, role: "menuitemradio" }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "switch": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                v.f,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: "menuitemcheckbox",
                                                    }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "textinput": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                C.Y,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "control": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                b.a,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                        break;
                                    }
                                    case "compositecontrol": {
                                        let e = [...i, l.key];
                                        d.push(
                                            (0, r.jsx)(
                                                D.d,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: s,
                                                    children: l.children,
                                                },
                                                l.key,
                                            ),
                                        ),
                                            a++;
                                    }
                                }
                                return t;
                            }, []);
                        })(x, H, [], M),
                ],
            }),
        }),
    });
}
function P() {
    return (0, r.jsx)("div", { className: a()(w.menu, w.loader, w.flexible), children: (0, r.jsx)(f.y, {}) });
}
function U() {
    let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
        [t, n] = i.useState(e);
    return (
        i.useEffect(() => {
            if (h.A.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? "♫ ⊂(｡◕‿‿◕｡⊂) ♪" : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)("div", { style: { width: "100%", textAlign: "center" }, children: t })
    );
}
