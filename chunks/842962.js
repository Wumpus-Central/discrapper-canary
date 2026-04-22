i.d(t, { A: () => a });
var n = i(643479),
    r = i(668459),
    o = i(643278);
let a = {
        read: function (e, t) {
            let i = (0, n.MS)(new Uint8Array(e).buffer),
                a = {},
                u = 0;
            for (; u < e.length; ) {
                let e = (0, n.hT)(i, u, l);
                u += l;
                let c = r.A.getShortAt(i, u),
                    { tagName: d, tagNameSize: f } = (function (e, t) {
                        let [i, r] = (0, n.z6)(e, t);
                        return { tagName: r, tagNameSize: 1 + i + +(i % 2 == 0) };
                    })(i, (u += 2));
                u += f;
                let p = r.A.getLongAt(i, u);
                if (((u += 4), e === s)) {
                    let e = (0, n.MS)(i.buffer, u, p),
                        r = { id: c, value: (0, n.hT)(e, 0, p) };
                    if (o.A[c]) {
                        try {
                            r.description = o.A[c].description(e);
                        } catch (e) {
                            r.description = "<no description formatter>";
                        }
                        a[d || o.A[c].name] = r;
                    } else t && (a[`undefined-${c}`] = r);
                }
                u += p + (p % 2);
            }
            return a;
        },
    },
    s = "8BIM",
    l = s.length;
