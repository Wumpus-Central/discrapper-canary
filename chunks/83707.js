n.d(t, {
    A: () => r,
});
class r {
    refine(e, t) {
        if (t.length < 2) return t;
        let n = [],
            r = t[0];
        for (let i = 1; i < t.length; i++) {
            let a = t[i];
            if (a.index >= r.index + r.text.length) {
                n.push(r), (r = a);
                continue;
            }
            let s = null,
                o = null;
            a.text.length > r.text.length ? ((s = a), (o = r)) : ((s = r), (o = a)),
                e.debug(() => {
                    console.log(`${this.constructor.name} remove ${o} by ${s}`);
                }),
                (r = s);
        }
        return null != r && n.push(r), n;
    }
}
