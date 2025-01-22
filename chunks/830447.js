r.d(n, {
    T: function () {
        return D;
    },
    v: function () {
        return O;
    }
});
var i = r(390547);
var a = r(724458);
var o = r(653041);
var s = r(47120);
var l = r(411104);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    p = r(348327),
    h = r.n(p),
    _ = r(498405),
    m = r(597442),
    g = r(21340),
    E = r(922770),
    v = r(857595),
    y = r(607070),
    b = r(828214),
    I = r(898560),
    T = r(788314),
    S = r(450793);
function A(e) {
    return null == e
        ? []
        : c.Children.toArray(e).flatMap((e) => {
              var n;
              return null == e ? [] : Array.isArray(e) ? A(e) : e.type === c.Fragment ? (null !== (n = A(e.props.children)) && void 0 !== n ? n : []) : [e];
          });
}
function C(e) {
    return A(e).reduce((e, n) => {
        var r, i;
        if (n.type === b.Cl)
            return (
                e.push({
                    type: 'separator',
                    navigable: !1
                }),
                e
            );
        if (n.type === b.kS) {
            let r = C(n.props.children);
            return (
                r.length > 0 &&
                    (e.push({
                        type: 'groupstart',
                        length: r.length,
                        navigable: !1,
                        props: n.props
                    }),
                    e.push(...r),
                    e.push({
                        type: 'groupend',
                        length: r.length,
                        navigable: !1,
                        props: n.props
                    })),
                e
            );
        }
        if (n.type === b.sN)
            return (
                e.push(
                    null != n.props.render
                        ? {
                              type: 'customitem',
                              key: n.props.id,
                              navigable: null == n.props.navigable || n.props.navigable,
                              render: n.props.render,
                              props: n.props
                          }
                        : {
                              type: 'item',
                              key: n.props.id,
                              navigable: !0,
                              label: n.props.label,
                              children: n.props.children ? C(n.props.children) : void 0,
                              onChildrenScroll: n.props.onChildrenScroll,
                              props: n.props,
                              childRowHeight: n.props.childRowHeight,
                              listClassName: n.props.listClassName,
                              subMenuClassName: n.props.subMenuClassName
                          }
                ),
                e
            );
        else if (n.type === b.S8)
            return (
                e.push({
                    type: 'checkbox',
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }),
                e
            );
        else if (n.type === b.k5)
            return (
                e.push({
                    type: 'radio',
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }),
                e
            );
        else if (n.type === b.II)
            return (
                e.push(
                    null != n.props.control
                        ? {
                              type: 'control',
                              key: n.props.id,
                              navigable: !0,
                              props: n.props
                          }
                        : {
                              type: 'compositecontrol',
                              key: n.props.id,
                              navigable: !1 !== n.props.interactive,
                              children: n.props.children,
                              props: n.props
                          }
                ),
                e
            );
        throw Error('Menu API only allows Items and groups of Items as children. Received '.concat(null !== (i = null !== (r = null == n ? void 0 : n.type) && void 0 !== r ? r : n) && void 0 !== i ? i : typeof n, ' (').concat(typeof n, ') instead'));
    }, []);
}
function N(e) {
    return e.reduce(
        (e, n) =>
            n.navigable
                ? (e.push({
                      key: n.key,
                      children: 'item' === n.type && null != n.children ? N(n.children) : void 0
                  }),
                  e)
                : e,
        []
    );
}
function R(e, n, r, i) {
    let a = 0,
        o = [];
    return e.reduce((e, s, l) => {
        let c = o.length > 0 ? o[o.length - 1] : e;
        switch (s.type) {
            case 'separator':
                c.push((0, u.jsx)(T.Z0, {}, 'separator-'.concat(l))), (a = 0);
                break;
            case 'groupstart':
                a > 0 && s.length > 0 && (c.push((0, u.jsx)(T.Z0, {}, 'separator-'.concat(l))), (a = 0)), o.push([]);
                break;
            case 'groupend':
                o.length > 0 &&
                    e.push(
                        (0, u.jsx)(
                            T.ZA,
                            {
                                contents: o.pop(),
                                ...s.props
                            },
                            'group-'.concat(l)
                        )
                    );
                break;
            case 'item': {
                let { children: e, childRowHeight: o, onChildrenScroll: l, listClassName: d, subMenuClassName: f } = s,
                    p = null != e,
                    h = [...r, s.key],
                    _ = n.isFocused(h),
                    m = null != e ? { 'aria-haspopup': !0 } : {},
                    g = (0, u.jsx)(
                        T.ck,
                        {
                            ...s.props,
                            label: s.label,
                            hasSubmenu: null != e,
                            isFocused: _,
                            menuItemProps: {
                                ...n.getItemProps({
                                    path: h,
                                    hasSubmenu: p
                                }),
                                ...m
                            },
                            onClose: i
                        },
                        s.key
                    );
                p
                    ? null != o
                        ? c.push(
                              (0, u.jsx)(
                                  T.P2,
                                  {
                                      ...s.props,
                                      parentItem: g,
                                      isFocused: _,
                                      menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                      rows: R(e, n, h, i),
                                      rowHeight: o,
                                      onScroll: l,
                                      listClassName: d
                                  },
                                  ''.concat(s.key, '-submenu')
                              )
                          )
                        : c.push(
                              (0, u.jsx)(
                                  T.LY,
                                  {
                                      ...s.props,
                                      subMenuClassName: f,
                                      parentItem: g,
                                      isFocused: _,
                                      menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                      renderSubmenu: () => R(e, n, h, i)
                                  },
                                  ''.concat(s.key, '-submenu')
                              )
                          )
                    : c.push(g),
                    a++;
                break;
            }
            case 'customitem': {
                let e = [...r, s.key];
                c.push(
                    (0, u.jsx)(
                        T.kq,
                        {
                            ...s.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({
                                path: e,
                                navigable: s.navigable
                            }),
                            onClose: i,
                            children: s.render
                        },
                        s.key
                    )
                ),
                    a++;
                break;
            }
            case 'checkbox': {
                let e = [...r, s.key];
                c.push(
                    (0, u.jsx)(
                        T.oC,
                        {
                            ...s.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({
                                path: e,
                                role: 'menuitemcheckbox'
                            })
                        },
                        s.key
                    )
                ),
                    a++;
                break;
            }
            case 'radio': {
                let e = [...r, s.key];
                c.push(
                    (0, u.jsx)(
                        T.Rk,
                        {
                            ...s.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({
                                path: e,
                                role: 'menuitemradio'
                            })
                        },
                        s.key
                    )
                ),
                    a++;
                break;
            }
            case 'control': {
                let e = [...r, s.key];
                c.push(
                    (0, u.jsx)(
                        T.lc,
                        {
                            ...s.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({ path: e }),
                            onClose: i
                        },
                        s.key
                    )
                ),
                    a++;
                break;
            }
            case 'compositecontrol': {
                let e = [...r, s.key];
                c.push(
                    (0, u.jsx)(
                        T.$I,
                        {
                            ...s.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({ path: e }),
                            onClose: i,
                            children: s.children
                        },
                        s.key
                    )
                ),
                    a++;
            }
        }
        return e;
    }, []);
}
function O(e) {
    var n;
    let { navId: r, variant: i = 'flexible', hideScroller: a = !1, className: o, children: s, onClose: l, onSelect: d } = e,
        p = C(s),
        E = N(p),
        b = c.useRef([]);
    !h()(b.current, E) && (b.current = E);
    let A = null === (n = p.find((e) => null != e.key)) || void 0 === n ? void 0 : n.key,
        O = (0, _.ZP)({
            navId: r,
            items: b.current,
            initialFocusPath: y.Z.keyboardModeEnabled && null != A ? [A] : [],
            closeMenu: l
        });
    c.useEffect(() => {
        O.isUsingKeyboardNavigation ? !y.Z.keyboardModeEnabled && (0, v.Qj)() : y.Z.keyboardModeEnabled && (0, v.rf)();
    }, [O.isUsingKeyboardNavigation]);
    let D = c.useRef(null);
    (0, m.T)(D);
    let L = a ? g.u2 : g.zJ;
    return (0, u.jsx)(I.r.Provider, {
        value: d,
        children: (0, u.jsx)('div', {
            className: f()(S.menu, S[i], o),
            ...O.getContainerProps(),
            ref: D,
            'aria-label': e['aria-label'],
            children: (0, u.jsxs)(L, {
                className: S.scroller,
                children: [
                    0 === p.length &&
                        (0, u.jsx)(T.ck, {
                            disabled: !0,
                            label: () => (0, u.jsx)(x, {}),
                            menuItemProps: O.getItemProps({ path: ['empty'] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: l
                        }),
                    p.length > 0 && R(p, O, [], l)
                ]
            })
        })
    });
}
function D() {
    return (0, u.jsx)('div', {
        className: f()(S.menu, S.loader, S.flexible),
        children: (0, u.jsx)(E.$, {})
    });
}
function x() {
    let e = '\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A',
        n = '\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A',
        [r, i] = c.useState(e);
    return (
        c.useEffect(() => {
            if (y.Z.useReducedMotion) return;
            let r = setInterval(() => {
                i((r) => (r === e ? n : e));
            }, 700);
            return () => clearInterval(r);
        }, []),
        (0, u.jsx)('div', {
            style: {
                width: '100%',
                textAlign: 'center'
            },
            children: r
        })
    );
}
