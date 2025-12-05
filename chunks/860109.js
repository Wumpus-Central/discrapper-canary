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
var r = n(473749),
    i = n(123314),
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
        p = null != d ? d : u,
        _ = (0, i.useViewModel)(t);
    (0, i.useViewModelInstance)(_);
    let { theme: m, saturation: h } = (0, o.ZF)(),
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
                    if (null == t || null == t.viewModelInstance || null == p) return;
                    let r = s[null != n ? n : ""];
                    for (let n of Object.entries(p)) {
                        var i, a, o, l, c, u, d, f, _, O, v, S, I;
                        if (e.signal.aborted) return;
                        let s = n[0],
                            p = n[1],
                            T = null != p && "object" == typeof p && "type" in p,
                            A = T ? p.type : r[s],
                            C = T ? p.value : p;
                        switch (A) {
                            case "color":
                                if ("number" == typeof C) {
                                    let e = null == (i = t.viewModelInstance) ? void 0 : i.color(s);
                                    null != e && (e.value = C);
                                } else if ("object" == typeof C) {
                                    let e = C;
                                    if ("resolve" in e) {
                                        let [n, r, i, l] = e
                                            .resolve({
                                                theme: m,
                                                saturation: h,
                                                highContrastModeEnabled: g,
                                            })
                                            .rgba();
                                        null == (o = t.viewModelInstance) ||
                                            null == (a = o.color(s)) ||
                                            a.rgba(n, r, i, 255 * l);
                                    } else
                                        null == (c = t.viewModelInstance) ||
                                            null == (l = c.color(s)) ||
                                            l.rgba(e.r, e.g, e.b, null != (u = e.a) ? u : 255);
                                }
                                break;
                            case "number":
                                let N = null == (d = t.viewModelInstance) ? void 0 : d.number(s);
                                null != N && (N.value = C);
                                break;
                            case "boolean":
                                let P = null == (f = t.viewModelInstance) ? void 0 : f.boolean(s);
                                null != P && (P.value = C);
                                break;
                            case "trigger":
                                let R = null != C && ("boolean" == typeof C ? C : 0 !== C),
                                    w = y(E.current, s);
                                R &&
                                    w !== C &&
                                    (null == (O = t.viewModelInstance) || null == (_ = O.trigger(s)) || _.trigger());
                                break;
                            case "string":
                                let D = null == (v = t.viewModelInstance) ? void 0 : v.string(s);
                                null != D && (D.value = C);
                                break;
                            case "image":
                                if (null != C) {
                                    let n = await b(C, e.signal);
                                    if (e.signal.aborted) return;
                                    let r = null == (S = t.viewModelInstance) ? void 0 : S.image(s);
                                    null != r && (r.value = n);
                                }
                                break;
                            case "artboard":
                                let x = null == (I = t.viewModelInstance) ? void 0 : I.artboard(s),
                                    L = t.getBindableArtboard(C);
                                null != x && null != L && (x.value = L);
                                break;
                            default:
                                console.warn("Unknown property type: ".concat(A));
                        }
                    }
                })(),
                () => {
                    e.abort("New data binding applied - aborting previous image fetches."), (E.current = p);
                }
            );
        }, [y, p, t, n, s, m, null == t ? void 0 : t.viewModelInstance, h, g, b]);
}
function l() {
    let e = r.useRef({});
    return r.useCallback(async (t, n) => {
        if ("string" != typeof t) return Promise.resolve(t);
        {
            if (null != e.current[t]) return Promise.resolve(e.current[t]);
            let r = await fetch(t, { signal: n }).catch((e) => {
                if (null == n ? void 0 : n.aborted) return Promise.resolve(null);
                throw e;
            });
            if (null == r || (null == n ? void 0 : n.aborted)) return Promise.resolve(null);
            let a = await r.arrayBuffer(),
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
