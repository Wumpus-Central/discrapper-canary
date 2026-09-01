Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = class {
        refine(e, t) {
            if (t.length < 2) return t;
            let r = [],
                n = t[0];
            for (let a = 1; a < t.length; a++) {
                let i = t[a];
                if (i.index >= n.index + n.text.length) {
                    r.push(n), (n = i);
                    continue;
                }
                let s = null,
                    o = null;
                i.text.length > n.text.length ? ((s = i), (o = n)) : ((s = n), (o = i)),
                    e.debug(() => {
                        console.log(`${this.constructor.name} remove ${o} by ${s}`);
                    }),
                    (n = s);
            }
            return null != n && r.push(n), r;
        }
    });
