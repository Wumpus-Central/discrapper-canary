n.d(t, {
    T: () => S,
    v: () => b
}),
    n(390547),
    n(724458),
    n(653041),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(348327),
    l = n.n(o),
    u = n(498405),
    c = n(597442),
    d = n(21340),
    f = n(922770),
    _ = n(857595),
    p = n(607070),
    h = n(828214),
    m = n(898560),
    g = n(788314),
    E = n(335765);
function v(e) {
    return null == e
        ? []
        : r.Children.toArray(e).flatMap((e) => {
              var t;
              return null == e ? [] : Array.isArray(e) ? v(e) : e.type === r.Fragment ? (null !== (t = v(e.props.children)) && void 0 !== t ? t : []) : [e];
          });
}
function y(e) {
    return v(e).reduce((e, t) => {
        var n, i;
        if (t.type === h.Cl)
            return (
                e.push({
                    type: 'separator',
                    navigable: !1
                }),
                e
            );
        if (t.type === h.kS) {
            let n = y(t.props.children);
            return (
                n.length > 0 &&
                    (e.push({
                        type: 'groupstart',
                        length: n.length,
                        navigable: !1,
                        props: t.props
                    }),
                    e.push(...n),
                    e.push({
                        type: 'groupend',
                        length: n.length,
                        navigable: !1,
                        props: t.props
                    })),
                e
            );
        }
        if (t.type === h.sN)
            return (
                e.push(
                    null != t.props.render
                        ? {
                              type: 'customitem',
                              key: t.props.id,
                              navigable: null == t.props.navigable || t.props.navigable,
                              render: t.props.render,
                              props: t.props
                          }
                        : {
                              type: 'item',
                              key: t.props.id,
                              navigable: !0,
                              label: t.props.label,
                              children: t.props.children ? y(t.props.children) : void 0,
                              onChildrenScroll: t.props.onChildrenScroll,
                              props: t.props,
                              childRowHeight: t.props.childRowHeight,
                              listClassName: t.props.listClassName,
                              subMenuClassName: t.props.subMenuClassName
                          }
                ),
                e
            );
        if (t.type === h.S8)
            return (
                e.push({
                    type: 'checkbox',
                    key: t.props.id,
                    navigable: !0,
                    props: t.props
                }),
                e
            );
        if (t.type === h.k5)
            return (
                e.push({
                    type: 'radio',
                    key: t.props.id,
                    navigable: !0,
                    props: t.props
                }),
                e
            );
        else if (t.type === h.II)
            return (
                e.push(
                    null != t.props.control
                        ? {
                              type: 'control',
                              key: t.props.id,
                              navigable: !0,
                              props: t.props
                          }
                        : {
                              type: 'compositecontrol',
                              key: t.props.id,
                              navigable: !1 !== t.props.interactive,
                              children: t.props.children,
                              props: t.props
                          }
                ),
                e
            );
        throw Error('Menu API only allows Items and groups of Items as children. Received '.concat(null !== (i = null !== (n = null == t ? void 0 : t.type) && void 0 !== n ? n : t) && void 0 !== i ? i : typeof t, ' (').concat(typeof t, ') instead'));
    }, []);
}
function I(e) {
    return e.reduce(
        (e, t) => (
            t.navigable &&
                e.push({
                    key: t.key,
                    children: 'item' === t.type && null != t.children ? I(t.children) : void 0
                }),
            e
        ),
        []
    );
}
function T(e, t, n, r) {
    let a = 0,
        s = [];
    return e.reduce((e, o, l) => {
        let u = s.length > 0 ? s[s.length - 1] : e;
        switch (o.type) {
            case 'separator':
                u.push((0, i.jsx)(g.Z0, {}, 'separator-'.concat(l))), (a = 0);
                break;
            case 'groupstart':
                a > 0 && o.length > 0 && (u.push((0, i.jsx)(g.Z0, {}, 'separator-'.concat(l))), (a = 0)), s.push([]);
                break;
            case 'groupend':
                s.length > 0 &&
                    e.push(
                        (0, i.jsx)(
                            g.ZA,
                            {
                                contents: s.pop(),
                                ...o.props
                            },
                            'group-'.concat(l)
                        )
                    );
                break;
            case 'item': {
                let { children: e, childRowHeight: s, onChildrenScroll: l, listClassName: c, subMenuClassName: d } = o,
                    f = null != e,
                    _ = [...n, o.key],
                    p = t.isFocused(_),
                    h = null != e ? { 'aria-haspopup': !0 } : {},
                    m = (0, i.jsx)(
                        g.ck,
                        {
                            ...o.props,
                            label: o.label,
                            hasSubmenu: null != e,
                            isFocused: p,
                            menuItemProps: {
                                ...t.getItemProps({
                                    path: _,
                                    hasSubmenu: f
                                }),
                                ...h
                            },
                            onClose: r
                        },
                        o.key
                    );
                f
                    ? null != s
                        ? u.push(
                              (0, i.jsx)(
                                  g.P2,
                                  {
                                      ...o.props,
                                      parentItem: m,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: _ }),
                                      rows: T(e, t, _, r),
                                      rowHeight: s,
                                      onScroll: l,
                                      listClassName: c
                                  },
                                  ''.concat(o.key, '-submenu')
                              )
                          )
                        : u.push(
                              (0, i.jsx)(
                                  g.LY,
                                  {
                                      ...o.props,
                                      subMenuClassName: d,
                                      parentItem: m,
                                      isFocused: p,
                                      menuSubmenuProps: t.getSubmenuProps({ path: _ }),
                                      renderSubmenu: () => T(e, t, _, r)
                                  },
                                  ''.concat(o.key, '-submenu')
                              )
                          )
                    : u.push(m),
                    a++;
                break;
            }
            case 'customitem': {
                let e = [...n, o.key];
                u.push(
                    (0, i.jsx)(
                        g.kq,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                navigable: o.navigable
                            }),
                            onClose: r,
                            children: o.render
                        },
                        o.key
                    )
                ),
                    a++;
                break;
            }
            case 'checkbox': {
                let e = [...n, o.key];
                u.push(
                    (0, i.jsx)(
                        g.oC,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: 'menuitemcheckbox'
                            })
                        },
                        o.key
                    )
                ),
                    a++;
                break;
            }
            case 'radio': {
                let e = [...n, o.key];
                u.push(
                    (0, i.jsx)(
                        g.Rk,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: 'menuitemradio'
                            })
                        },
                        o.key
                    )
                ),
                    a++;
                break;
            }
            case 'control': {
                let e = [...n, o.key];
                u.push(
                    (0, i.jsx)(
                        g.lc,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: r
                        },
                        o.key
                    )
                ),
                    a++;
                break;
            }
            case 'compositecontrol': {
                let e = [...n, o.key];
                u.push(
                    (0, i.jsx)(
                        g.$I,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: r,
                            children: o.children
                        },
                        o.key
                    )
                ),
                    a++;
            }
        }
        return e;
    }, []);
}
function b(e) {
    var t;
    let { navId: n, variant: a = 'flexible', hideScroller: o = !1, className: f, children: h, onClose: v, onSelect: b } = e,
        S = y(h),
        N = I(S),
        C = r.useRef([]);
    l()(C.current, N) || (C.current = N);
    let R = null === (t = S.find((e) => null != e.key)) || void 0 === t ? void 0 : t.key,
        O = (0, u.ZP)({
            navId: n,
            items: C.current,
            initialFocusPath: p.Z.keyboardModeEnabled && null != R ? [R] : [],
            closeMenu: v
        });
    r.useEffect(() => {
        O.isUsingKeyboardNavigation ? p.Z.keyboardModeEnabled || (0, _.Qj)() : p.Z.keyboardModeEnabled && (0, _.rf)();
    }, [O.isUsingKeyboardNavigation]);
    let D = r.useRef(null);
    (0, c.T)(D);
    let L = o ? d.u2 : d.zJ;
    return (0, i.jsx)(m.r.Provider, {
        value: b,
        children: (0, i.jsx)('div', {
            className: s()(E.menu, E[a], f),
            ...O.getContainerProps(),
            ref: D,
            'aria-label': e['aria-label'],
            children: (0, i.jsxs)(L, {
                className: E.scroller,
                children: [
                    0 === S.length &&
                        (0, i.jsx)(g.ck, {
                            disabled: !0,
                            label: () => (0, i.jsx)(A, {}),
                            menuItemProps: O.getItemProps({ path: ['empty'] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: v
                        }),
                    S.length > 0 && T(S, O, [], v)
                ]
            })
        })
    });
}
function S() {
    return (0, i.jsx)('div', {
        className: s()(E.menu, E.loader, E.flexible),
        children: (0, i.jsx)(f.$, {})
    });
}
function A() {
    let e = '\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A',
        t = '\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A',
        [n, a] = r.useState(e);
    return (
        r.useEffect(() => {
            if (p.Z.useReducedMotion) return;
            let n = setInterval(() => {
                a((n) => (n === e ? t : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, i.jsx)('div', {
            style: {
                width: '100%',
                textAlign: 'center'
            },
            children: n
        })
    );
}
