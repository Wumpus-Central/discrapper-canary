n.d(t, { A: () => s });
var r = n(643479),
    i = n(668459),
    a = n(420897);
let s = { read: d },
    o = "8BIM",
    l = 2,
    c = 4,
    u = o.length;
function d(e, t) {
    let n = (0, r.MS)(new Uint8Array(e).buffer),
        s = {},
        d = 0;
    for (; d < e.length; ) {
        let e = (0, r.hT)(n, d, u);
        d += u;
        let p = i.A.getShortAt(n, d),
            { tagName: _, tagNameSize: h } = f(n, (d += l));
        d += h;
        let m = i.A.getLongAt(n, d);
        if (((d += c), e === o)) {
            let e = (0, r.MS)(n.buffer, d, m),
                i = {
                    id: p,
                    value: (0, r.hT)(e, 0, m),
                };
            if (a.A[p]) {
                try {
                    i.description = a.A[p].description(e);
                } catch (e) {
                    i.description = "<no description formatter>";
                }
                s[_ || a.A[p].name] = i;
            } else t && (s[`undefined-${p}`] = i);
        }
        d += m + (m % 2);
    }
    return s;
}
function f(e, t) {
    let [n, i] = (0, r.z6)(e, t);
    return {
        tagName: i,
        tagNameSize: 1 + n + +(n % 2 == 0),
    };
}
