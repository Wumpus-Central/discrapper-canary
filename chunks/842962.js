"use strict";
n.d(t, { A: () => s });
var r = n(643479),
    i = n(668459),
    a = n(420897);
let s = { read: d },
    o = "8BIM",
    l = 2,
    u = 4,
    c = o.length;
function d(e, t) {
    let n = (0, r.MS)(new Uint8Array(e).buffer),
        s = {},
        d = 0;
    for (; d < e.length; ) {
        let e = (0, r.hT)(n, d, c);
        d += c;
        let f = i.A.getShortAt(n, d),
            { tagName: p, tagNameSize: h } = _(n, (d += l));
        d += h;
        let m = i.A.getLongAt(n, d);
        if (((d += u), e === o)) {
            let e = (0, r.MS)(n.buffer, d, m),
                i = { id: f, value: (0, r.hT)(e, 0, m) };
            if (a.A[f]) {
                try {
                    i.description = a.A[f].description(e);
                } catch (e) {
                    i.description = "<no description formatter>";
                }
                s[p || a.A[f].name] = i;
            } else t && (s[`undefined-${f}`] = i);
        }
        d += m + (m % 2);
    }
    return s;
}
function _(e, t) {
    let [n, i] = (0, r.z6)(e, t);
    return { tagName: i, tagNameSize: 1 + n + +(n % 2 == 0) };
}
