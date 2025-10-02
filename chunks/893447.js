n.d(t, { Q: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(375316),
    o = n(179067),
    s = n(571527);
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
function f(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: l,
            selectionMode: u = "none",
            layout: f = "default",
            items: _,
            onRemove: p,
            children: h,
        } = e,
        [m, g] = i.useState(() => new Set());
    return (0, r.jsxs)(a.QS, {
        "aria-label": n,
        "data-layout": f,
        className: s.tagGroup,
        selectionMode: u,
        selectedKeys: m,
        onSelectionChange: g,
        disabledKeys: l,
        onRemove: p,
        children: [
            (0, r.jsx)(a.PS, {
                ref: t,
                className: s.tagList,
                children: _.map((e) =>
                    (0, i.createElement)(
                        o.V,
                        d(c({}, e), {
                            key: e.id,
                            layout: f,
                            accessibilityHint: e.accessibilityHint,
                        }),
                    ),
                ),
            }),
            h,
        ],
    });
}
