"use strict";
n.d(t, { CC: () => d, JT: () => _, Kq: () => u, P_: () => l, SK: () => p, Sl: () => c, _E: () => f });
var r = n(533715),
    i = n(561514),
    a = n(803082),
    s = n(3388),
    o = n(64700);
let l = Symbol("default");
function u({ values: e, children: t }) {
    for (let [n, r] of e) t = o.createElement(n.Provider, { value: r }, t);
    return t;
}
function c(e) {
    let {
        className: t,
        style: n,
        children: r,
        defaultClassName: i,
        defaultChildren: a,
        defaultStyle: s,
        values: l,
    } = e;
    return (0, o.useMemo)(() => {
        let e, o, u;
        return (
            (e = "function" == typeof t ? t({ ...l, defaultClassName: i }) : t),
            (o = "function" == typeof n ? n({ ...l, defaultStyle: s || {} }) : n),
            (u = "function" == typeof r ? r({ ...l, defaultChildren: a }) : null == r ? a : r),
            {
                className: null != e ? e : i,
                style: o || s ? { ...s, ...o } : void 0,
                children: null != u ? u : a,
                "data-rac": "",
            }
        );
    }, [t, n, r, i, a, s, l]);
}
function d(e, t) {
    let n = (0, o.useContext)(e);
    if (null === t) return null;
    if (n && "object" == typeof n && "slots" in n && n.slots) {
        let e = t || l;
        if (!n.slots[e]) {
            let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)),
                r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
            throw Error(`${r} Valid slot names are ${e}.`);
        }
        return n.slots[e];
    }
    return n;
}
function _(e, t, n) {
    let { ref: s, ...l } = d(n, e.slot) || {},
        u = (0, r.U)((0, o.useMemo)(() => (0, i.P)(t, s), [t, s])),
        c = (0, a.v)(l, e);
    return (
        "style" in l &&
            l.style &&
            "style" in e &&
            e.style &&
            ("function" == typeof l.style || "function" == typeof e.style
                ? (c.style = (t) => {
                      let n = "function" == typeof l.style ? l.style(t) : l.style,
                          r = { ...t.defaultStyle, ...n },
                          i = "function" == typeof e.style ? e.style({ ...t, defaultStyle: r }) : e.style;
                      return { ...r, ...i };
                  })
                : (c.style = { ...l.style, ...e.style })),
        [c, u]
    );
}
function f(e = !0) {
    let [t, n] = (0, o.useState)(e),
        r = (0, o.useRef)(!1),
        i = (0, o.useCallback)((e) => {
            (r.current = !0), n(!!e);
        }, []);
    return (
        (0, s.N)(() => {
            r.current || n(!1);
        }, []),
        [i, t]
    );
}
function p(e) {
    let t = /^(data-.*)$/,
        n = {};
    for (let r in e) t.test(r) || (n[r] = e[r]);
    return n;
}
