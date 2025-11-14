n.d(t, { P: () => s }),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(539854);
var r = n(647438),
    i = n(948890),
    a = n(213305),
    o = n(402453);
function s(e) {
    let {
            rive: t,
            artboard: n,
            artboardProperties: s,
            dataBinding: u,
            dynamicDataBinding: d,
            onDataBindingChange: f,
        } = e,
        _ = null != d ? d : u,
        p = (0, i.useViewModel)(t);
    (0, i.useViewModelInstance)(p);
    let { theme: h, saturation: m } = (0, o.ZF)(),
        { highContrastModeEnabled: g } = r.useContext(a.S),
        E = r.useRef(null),
        b = l(),
        y = r.useCallback((e, t) => {
            let n = null == e ? void 0 : e[t];
            return null == n ? null : "object" == typeof n && "value" in n ? n.value : n;
        }, []);
    c({
        rive: t,
        artboard: n,
        artboardProperties: s,
        dynamicDataBinding: d,
        dataBinding: u,
        onDataBindingChange: f,
    }),
        r.useEffect(() => {
            let e = new AbortController();
            return (
                (async function () {
                    if (null == t || null == t.viewModelInstance || null == _) return;
                    let r = s[null != n ? n : ""];
                    for (let n of Object.entries(_)) {
                        var i, a, o, l, c, u, d, f, p;
                        if (e.signal.aborted) return;
                        let s = n[0],
                            _ = n[1],
                            O = null != _ && "object" == typeof _ && "type" in _,
                            v = O ? _.type : r[s],
                            I = O ? _.value : _;
                        switch (v) {
                            case "color":
                                if ("number" == typeof I) {
                                    let e = null == (i = t.viewModelInstance) ? void 0 : i.color(s);
                                    null != e && (e.value = I);
                                } else {
                                    let [e, n, r, i] = I.resolve({
                                        theme: h,
                                        saturation: m,
                                        highContrastModeEnabled: g,
                                    }).rgba();
                                    null == (o = t.viewModelInstance) ||
                                        null == (a = o.color(s)) ||
                                        a.rgba(e, n, r, 255 * i);
                                }
                                break;
                            case "number":
                                let T = null == (l = t.viewModelInstance) ? void 0 : l.number(s);
                                null != T && (T.value = I);
                                break;
                            case "boolean":
                                let S = null == (c = t.viewModelInstance) ? void 0 : c.boolean(s);
                                null != S && (S.value = I);
                                break;
                            case "trigger":
                                let A = null != I && ("boolean" == typeof I ? I : 0 !== I),
                                    C = y(E.current, s);
                                A &&
                                    C !== I &&
                                    (null == (d = t.viewModelInstance) || null == (u = d.trigger(s)) || u.trigger());
                                break;
                            case "string":
                                let N = null == (f = t.viewModelInstance) ? void 0 : f.string(s);
                                null != N && (N.value = I);
                                break;
                            case "image":
                                if (null != I) {
                                    let n = await b(I, e.signal);
                                    if (e.signal.aborted) return;
                                    let r = null == (p = t.viewModelInstance) ? void 0 : p.image(s);
                                    null != r && (r.value = n);
                                }
                                break;
                            default:
                                console.warn("Unknown property type: ".concat(v));
                        }
                    }
                })(),
                () => {
                    e.abort(), (E.current = _);
                }
            );
        }, [y, _, t, n, s, h, null == t ? void 0 : t.viewModelInstance, m, g, b]);
}
function l() {
    let e = r.useRef({});
    return r.useCallback(async (t, n) => {
        if ("string" != typeof t) return Promise.resolve(t);
        {
            if (null != e.current[t]) return Promise.resolve(e.current[t]);
            let r = await fetch(t, { signal: n }),
                a = await r.arrayBuffer(),
                o = await (0, i.decodeImage)(new Uint8Array(a));
            return (e.current[t] = o), o;
        }
    }, []);
}
function c(e) {
    let { rive: t, artboard: n, artboardProperties: i, dynamicDataBinding: a, onDataBindingChange: o } = e,
        s = null != a,
        l = r.useCallback(
            (e) => {
                var t;
                return s ? (null == a || null == (t = a[e]) ? void 0 : t.type) : i[null != n ? n : ""][e];
            },
            [s, a, i, n],
        );
    r.useEffect(() => {
        if (null == t || null == o) return;
        let e = [];
        return (
            Object.entries(o).forEach((n) => {
                var r, i;
                let [a, o] = n,
                    s = l(a);
                if (null == s || null == o) return;
                let c = null == (i = t.viewModelInstance) || null == (r = i[s]) ? void 0 : r.call(i, a);
                null != c && (c.on(o), e.push([o, c]));
            }),
            () => {
                e.forEach((e) => {
                    let [t, n] = e;
                    null != n && n.off(t);
                });
            }
        );
    }, [t, o, l]);
}
