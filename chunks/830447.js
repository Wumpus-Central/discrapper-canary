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
var s = r(653041);
var o = r(47120);
var l = r(411104);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    _ = r(348327),
    h = r.n(_),
    p = r(498405),
    m = r(597442),
    g = r(21340),
    E = r(922770),
    v = r(857595),
    I = r(607070),
    T = r(828214),
    b = r(898560),
    y = r(788314),
    S = r(450793);
function A(e) {
    return null == e
        ? []
        : c.Children.toArray(e).flatMap((e) => {
              var n;
              return null == e ? [] : Array.isArray(e) ? A(e) : e.type === c.Fragment ? (null !== (n = A(e.props.children)) && void 0 !== n ? n : []) : [e];
          });
}
function N(e) {
    return A(e).reduce((e, n) => {
        var r, i;
        if (n.type === T.Cl)
            return (
                e.push({
                    type: 'separator',
                    navigable: !1
                }),
                e
            );
        if (n.type === T.kS) {
            let r = N(n.props.children);
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
        if (n.type === T.sN)
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
                              children: n.props.children ? N(n.props.children) : void 0,
                              onChildrenScroll: n.props.onChildrenScroll,
                              props: n.props,
                              childRowHeight: n.props.childRowHeight,
                              listClassName: n.props.listClassName,
                              subMenuClassName: n.props.subMenuClassName
                          }
                ),
                e
            );
        else if (n.type === T.S8)
            return (
                e.push({
                    type: 'checkbox',
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }),
                e
            );
        else if (n.type === T.k5)
            return (
                e.push({
                    type: 'radio',
                    key: n.props.id,
                    navigable: !0,
                    props: n.props
                }),
                e
            );
        else if (n.type === T.II)
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
function C(e) {
    return e.reduce(
        (e, n) =>
            n.navigable
                ? (e.push({
                      key: n.key,
                      children: 'item' === n.type && null != n.children ? C(n.children) : void 0
                  }),
                  e)
                : e,
        []
    );
}
function R(e, n, r, i) {
    let a = 0,
        s = [];
    return e.reduce((e, o, l) => {
        let c = s.length > 0 ? s[s.length - 1] : e;
        switch (o.type) {
            case 'separator':
                c.push((0, u.jsx)(y.Z0, {}, 'separator-'.concat(l))), (a = 0);
                break;
            case 'groupstart':
                a > 0 && o.length > 0 && (c.push((0, u.jsx)(y.Z0, {}, 'separator-'.concat(l))), (a = 0)), s.push([]);
                break;
            case 'groupend':
                s.length > 0 &&
                    e.push(
                        (0, u.jsx)(
                            y.ZA,
                            {
                                contents: s.pop(),
                                ...o.props
                            },
                            'group-'.concat(l)
                        )
                    );
                break;
            case 'item': {
                let { children: e, childRowHeight: s, onChildrenScroll: l, listClassName: d, subMenuClassName: f } = o,
                    _ = null != e,
                    h = [...r, o.key],
                    p = n.isFocused(h),
                    m = null != e ? { 'aria-haspopup': !0 } : {},
                    g = (0, u.jsx)(
                        y.ck,
                        {
                            ...o.props,
                            label: o.label,
                            hasSubmenu: null != e,
                            isFocused: p,
                            menuItemProps: {
                                ...n.getItemProps({
                                    path: h,
                                    hasSubmenu: _
                                }),
                                ...m
                            },
                            onClose: i
                        },
                        o.key
                    );
                _
                    ? null != s
                        ? c.push(
                              (0, u.jsx)(
                                  y.P2,
                                  {
                                      ...o.props,
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                      rows: R(e, n, h, i),
                                      rowHeight: s,
                                      onScroll: l,
                                      listClassName: d
                                  },
                                  ''.concat(o.key, '-submenu')
                              )
                          )
                        : c.push(
                              (0, u.jsx)(
                                  y.LY,
                                  {
                                      ...o.props,
                                      subMenuClassName: f,
                                      parentItem: g,
                                      isFocused: p,
                                      menuSubmenuProps: n.getSubmenuProps({ path: h }),
                                      renderSubmenu: () => R(e, n, h, i)
                                  },
                                  ''.concat(o.key, '-submenu')
                              )
                          )
                    : c.push(g),
                    a++;
                break;
            }
            case 'customitem': {
                let e = [...r, o.key];
                c.push(
                    (0, u.jsx)(
                        y.kq,
                        {
                            ...o.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({
                                path: e,
                                navigable: o.navigable
                            }),
                            onClose: i,
                            children: o.render
                        },
                        o.key
                    )
                ),
                    a++;
                break;
            }
            case 'checkbox': {
                let e = [...r, o.key];
                c.push(
                    (0, u.jsx)(
                        y.oC,
                        {
                            ...o.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({
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
                let e = [...r, o.key];
                c.push(
                    (0, u.jsx)(
                        y.Rk,
                        {
                            ...o.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({
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
                let e = [...r, o.key];
                c.push(
                    (0, u.jsx)(
                        y.lc,
                        {
                            ...o.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({ path: e }),
                            onClose: i
                        },
                        o.key
                    )
                ),
                    a++;
                break;
            }
            case 'compositecontrol': {
                let e = [...r, o.key];
                c.push(
                    (0, u.jsx)(
                        y.$I,
                        {
                            ...o.props,
                            isFocused: n.isFocused(e),
                            menuItemProps: n.getItemProps({ path: e }),
                            onClose: i,
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
function O(e) {
    var n;
    let { navId: r, variant: i = 'flexible', hideScroller: a = !1, className: s, children: o, onClose: l, onSelect: d } = e,
        _ = N(o),
        E = C(_),
        T = c.useRef([]);
    !h()(T.current, E) && (T.current = E);
    let A = null === (n = _.find((e) => null != e.key)) || void 0 === n ? void 0 : n.key,
        O = (0, p.ZP)({
            navId: r,
            items: T.current,
            initialFocusPath: I.Z.keyboardModeEnabled && null != A ? [A] : [],
            closeMenu: l
        });
    c.useEffect(() => {
        O.isUsingKeyboardNavigation ? !I.Z.keyboardModeEnabled && (0, v.Qj)() : I.Z.keyboardModeEnabled && (0, v.rf)();
    }, [O.isUsingKeyboardNavigation]);
    let D = c.useRef(null);
    (0, m.T)(D);
    let x = a ? g.u2 : g.zJ;
    return (0, u.jsx)(b.r.Provider, {
        value: d,
        children: (0, u.jsx)('div', {
            className: f()(S.menu, S[i], s),
            ...O.getContainerProps(),
            ref: D,
            'aria-label': e['aria-label'],
            children: (0, u.jsxs)(x, {
                className: S.scroller,
                children: [
                    0 === _.length &&
                        (0, u.jsx)(y.ck, {
                            disabled: !0,
                            label: () => (0, u.jsx)(L, {}),
                            menuItemProps: O.getItemProps({ path: ['empty'] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: l
                        }),
                    _.length > 0 && R(_, O, [], l)
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
function L() {
    let e = '\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A',
        n = '\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A',
        [r, i] = c.useState(e);
    return (
        c.useEffect(() => {
            if (I.Z.useReducedMotion) return;
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
