r.d(t, { A: () => n });
class n {
    refine(e, t) {
        if (t.length < 2) return t;
        let r = [],
            n = t[0];
        for (let s = 1; s < t.length; s++) {
            let a = t[s];
            if (a.index >= n.index + n.text.length) {
                r.push(n), (n = a);
                continue;
            }
            let i = null,
                o = null;
            a.text.length > n.text.length ? ((i = a), (o = n)) : ((i = n), (o = a)),
                e.debug(() => {
                    console.log(`${this.constructor.name} remove ${o} by ${i}`);
                }),
                (n = i);
        }
        return null != n && r.push(n), r;
    }
}
