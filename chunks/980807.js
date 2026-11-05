var n = r(652664),
    i = r(161596),
    o = r(582128),
    a = r(811390),
    s = r(808529);
let l = Symbol("default");
function u(e, t) {
    let r = (0, o.useContext)(e);
    if (null === t) return null;
    if (r && "object" == typeof r && "slots" in r && r.slots) {
        let e = t || l;
        if (!r.slots[e]) {
            let e = new Intl.ListFormat().format(Object.keys(r.slots).map((e) => `"${e}"`)),
                n = t ? `Invalid slot "${t}".` : "A slot prop is required.";
            throw Error(`${n} Valid slot names are ${e}.`);
        }
        return r.slots[e];
    }
    return r;
}
function c(e, t, r) {
    let { render: n, ...s } = t,
        l = (0, o.useRef)(null),
        u = (0, o.useMemo)(() => (0, i.P)(r, l), [r, l]);
    (0, a.N)(() => {}, [e, n]);
    let c = { ...s, ref: u };
    return n ? n(c, void 0) : o.createElement(e, c);
}
let f = {},
    d = new Proxy(
        {},
        {
            get(e, t) {
                if ("string" != typeof t) return;
                let r = f[t];
                return (r || ((r = (0, o.forwardRef)(c.bind(null, t))), (f[t] = r)), r);
            },
        },
    );
r.d(
    t,
    {},
    {
        CC: u,
        JT: function (e, t, r) {
            let { ref: a, ...l } = u(r, e.slot) || {},
                c = (0, s.U)((0, o.useMemo)(() => (0, i.P)(t, a), [t, a])),
                f = (0, n.v)(l, e);
            return (
                "style" in l &&
                    l.style &&
                    "style" in e &&
                    e.style &&
                    ("function" == typeof l.style || "function" == typeof e.style
                        ? (f.style = (t) => {
                              let r = "function" == typeof l.style ? l.style(t) : l.style,
                                  n = { ...t.defaultStyle, ...r },
                                  i = "function" == typeof e.style ? e.style({ ...t, defaultStyle: n }) : e.style;
                              return { ...n, ...i };
                          })
                        : (f.style = { ...l.style, ...e.style })),
                [f, c]
            );
        },
        Kq: function (e) {
            let { values: t, children: r } = e;
            for (let [e, n] of t) r = o.createElement(e.Provider, { value: n }, r);
            return r;
        },
        P_: l,
        SK: function (e) {
            let t = /^(data-.*)$/,
                r = {};
            for (let n in e) t.test(n) || (r[n] = e[n]);
            return r;
        },
        Sl: function (e) {
            let {
                className: t,
                style: r,
                children: n,
                defaultClassName: i,
                defaultChildren: a,
                defaultStyle: s,
                values: l,
                render: u,
            } = e;
            return (0, o.useMemo)(() => {
                let e, o, c;
                return (
                    (e = "function" == typeof t ? t({ ...l, defaultClassName: i }) : t),
                    (o = "function" == typeof r ? r({ ...l, defaultStyle: s || {} }) : r),
                    (c = "function" == typeof n ? n({ ...l, defaultChildren: a }) : null == n ? a : n),
                    {
                        className: e ?? i,
                        style: o || s ? { ...s, ...o } : void 0,
                        children: c ?? a,
                        "data-rac": "",
                        render: u ? (e) => u(e, l) : void 0,
                    }
                );
            }, [t, r, n, i, a, s, l, u]);
        },
        _E: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                [t, r] = (0, o.useState)(e),
                n = (0, o.useRef)(!1),
                i = (0, o.useCallback)((e) => {
                    ((n.current = !0), r(!!e));
                }, []);
            return (
                (0, a.N)(() => {
                    n.current || r(!1);
                }, []),
                [i, t]
            );
        },
        tT: d,
    },
);
