n.d(t, { Z: () => h });
var r = n(627968),
    i = n(158954),
    a = n(389723),
    s = n(332661),
    o = n(700713),
    l = n(526008);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function h(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: c = 5 } = e,
        d = p(e, ["hideTags", "wrapTags", "maxOptionsVisible"]),
        { fieldProps: _ } = (0, i.ndh)(d),
        {
            disabled: h,
            required: m,
            onQueryChange: g,
            onKeyDown: E,
            onFocus: b,
            onBlur: y,
            placeholder: O,
            closeOnSelect: A,
            selectionMode: v,
        } = d,
        {
            isOpen: S,
            setIsOpen: I,
            refs: T,
            floatingStyles: C,
            getFloatingProps: N,
            getReferenceProps: R,
            transitionStyles: w,
        } = (0, o.G)();
    return (0, r.jsxs)(
        a.iS,
        f(u({}, d), {
            isCollapsible: !0,
            isOpen: S,
            setIsOpen: I,
            closeOnSelect: null != A ? A : "single" === v,
            children: [
                (0, r.jsx)(
                    a.a3,
                    f(
                        u(
                            {
                                hideTags: t,
                                required: m,
                                disabled: h,
                                wrapTags: n,
                                showChevronButton: !0,
                                ref: T.setReference,
                                placeholder: O,
                            },
                            _,
                            R(),
                        ),
                        {
                            onKeyDown: E,
                            onBlur: y,
                            onQueryChange: g,
                            onFocus: b,
                        },
                    ),
                ),
                S &&
                    (0, r.jsx)(
                        "div",
                        f(
                            u(
                                {
                                    ref: T.setFloating,
                                    className: l.S_,
                                    style: u({}, C, w),
                                },
                                N(),
                            ),
                            {
                                children: (0, r.jsx)(a.X2, {
                                    renderListItem: (e) => (0, r.jsx)(s.c, u({}, e)),
                                    maxVisibleItems: c,
                                }),
                            },
                        ),
                    ),
            ],
        }),
    );
}
