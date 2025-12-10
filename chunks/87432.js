n.d(t, { Z: () => l });
var r = n(28682);
function i(e, t, n) {
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
function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e, t, n) {
    var i, o, c, u, d, f, p, _;
    let m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, r.L)(e))
        return (
            n.register({
                node: e,
                parentPanelKey: null == (d = m.panel) ? void 0 : d.key,
                parentTabKey: null == (f = m.tab) ? void 0 : f.key,
                parentCategoryKey: null == (p = m.category) ? void 0 : p.key,
                parentAccordionKey: null == (_ = m.accordion) ? void 0 : _.key,
            }),
            e
        );
    let h = m;
    e.type === r.J.SIDEBAR_ITEM && (h = s(a({}, m), { panel: e.layout[0] })),
        e.type === r.J.PANEL && (h = s(a({}, m), { panel: e })),
        e.type === r.J.CATEGORY && (h = s(a({}, m), { category: e })),
        e.type === r.J.ACCORDION && (h = s(a({}, m), { accordion: e })),
        e.type === r.J.TAB_ITEM && (h = s(a({}, m), { tab: e }));
    let g = e.layout.map((e) => l(e, t, n, h)).filter((e) => null != e);
    if (
        0 === g.length &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === r.J.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let E = s(a({}, e), { layout: g });
    return (
        n.register({
            node: E,
            parentPanelKey: null == (i = h.panel) ? void 0 : i.key,
            parentTabKey: null == (o = h.tab) ? void 0 : o.key,
            parentCategoryKey: null == (c = h.category) ? void 0 : c.key,
            parentAccordionKey: null == (u = h.accordion) ? void 0 : u.key,
        }),
        E
    );
}
