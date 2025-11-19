n.d(t, { Q: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(536799),
    o = n(590154),
    s = n(179067),
    l = n(849726);
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
function _(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: c,
            selectionMode: d = "none",
            layout: _ = "default",
            items: p,
            onRemove: h,
            children: m,
        } = e,
        [g, E] = i.useState(() => new Set()),
        b = i.useContext(o.z);
    return (0, r.jsxs)(a.QS, {
        "aria-label": n,
        id: null == b ? void 0 : b.controlId,
        "aria-describedby": null == b ? void 0 : b.describedById,
        "data-layout": _,
        className: l.tagGroup,
        selectionMode: d,
        selectedKeys: g,
        onSelectionChange: E,
        disabledKeys: c,
        onRemove: h,
        children: [
            (0, r.jsx)(a.PS, {
                ref: t,
                className: l.tagList,
                children: p.map((e) =>
                    (0, i.createElement)(
                        s.V,
                        f(u({}, e), {
                            key: e.id,
                            layout: _,
                            accessibilityHint: e.accessibilityHint,
                        }),
                    ),
                ),
            }),
            m,
        ],
    });
}
