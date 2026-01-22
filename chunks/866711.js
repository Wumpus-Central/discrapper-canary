n.d(t, { C: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(868903),
    s = n(15626),
    o = n(778328),
    l = n(46751);
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
function p(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: c,
            selectionMode: d = "none",
            layout: p = "default",
            items: _,
            onRemove: h,
            children: m,
        } = e,
        [g, E] = i.useState(() => new Set()),
        b = i.useContext(s._);
    return (0, r.jsxs)(a.CR, {
        "aria-label": n,
        id: null == b ? void 0 : b.controlId,
        "aria-describedby": null == b ? void 0 : b.describedById,
        "data-layout": p,
        className: l.WD,
        selectionMode: d,
        selectedKeys: g,
        onSelectionChange: E,
        disabledKeys: c,
        onRemove: h,
        children: [
            (0, r.jsx)(a.LY, {
                ref: t,
                className: l.Tw,
                children: _.map((e) =>
                    (0, i.createElement)(
                        o.v,
                        f(u({}, e), {
                            key: e.id,
                            layout: p,
                            accessibilityHint: e.accessibilityHint,
                        }),
                    ),
                ),
            }),
            m,
        ],
    });
}
