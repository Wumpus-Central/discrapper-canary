n.d(t, {
    Z: () => _,
});
var r = n(627968),
    i = n(978617),
    a = n(158954),
    o = n(389723),
    s = n(594597);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
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
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function _(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: l = 5 } = e,
        u = f(e, ["hideTags", "wrapTags", "maxOptionsVisible"]),
        { fieldProps: p } = (0, a.ndh)(u),
        {
            disabled: _,
            required: h,
            onQueryChange: m,
            onKeyDown: g,
            onFocus: E,
            onBlur: y,
            placeholder: b,
            closeOnSelect: O,
            selectionMode: v,
        } = u,
        {
            isOpen: A,
            setIsOpen: I,
            refs: S,
            floatingStyles: T,
            getFloatingProps: C,
            getReferenceProps: N,
            transitionStyles: w,
        } = (0, i.GY)();
    return (0, r.jsxs)(
        o.iS,
        d(c({}, u), {
            isCollapsible: !0,
            isOpen: A,
            setIsOpen: I,
            closeOnSelect: null != O ? O : "single" === v,
            children: [
                (0, r.jsx)(
                    o.a3,
                    d(
                        c(
                            {
                                hideTags: t,
                                required: h,
                                disabled: _,
                                wrapTags: n,
                                showChevronButton: !0,
                                ref: S.setReference,
                                placeholder: b,
                            },
                            p,
                            N(),
                        ),
                        {
                            onKeyDown: g,
                            onBlur: y,
                            onQueryChange: m,
                            onFocus: E,
                        },
                    ),
                ),
                A &&
                    (0, r.jsx)(
                        "div",
                        d(
                            c(
                                {
                                    ref: S.setFloating,
                                    className: s.S_,
                                    style: c({}, T, w),
                                },
                                C(),
                            ),
                            {
                                children: (0, r.jsx)(o.X2, {
                                    renderListItem: (e) => (0, r.jsx)(i.c$, c({}, e)),
                                    maxVisibleItems: l,
                                }),
                            },
                        ),
                    ),
            ],
        }),
    );
}
