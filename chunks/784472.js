function l(e, t) {
    var n, l;
    let i = t.limit ?? 1 / 0,
        a = ((n = e), (l = t.filterPredicates ?? []), n.filter((e) => l.every((t) => t(e))));
    return (function (e, t, n) {
        let l = [];
        for (let i of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let l of t) {
                        let t = l(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(i, t);
            if ((l.push(...e), l.length >= n)) break;
        }
        return l;
    })(
        null != t.bucketPredicates && t.bucketPredicates.length > 0
            ? i >= a.length
                ? (function (e, t) {
                      let n = Array(t.length)
                          .fill(null)
                          .map(() => []);
                      for (let l of e)
                          for (let e = 0; e < t.length; e++)
                              if (t[e](l)) {
                                  n[e].push(l);
                                  break;
                              }
                      return n;
                  })(a, t.bucketPredicates ?? [])
                : (function (e, t, n) {
                      let l = [],
                          i = e;
                      for (let e of t) {
                          let t = [],
                              a = [];
                          for (let n of i) e(n) ? a.push(n) : t.push(n);
                          if ((l.push(a), (i = t), l.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return l;
                  })(a, t.bucketPredicates ?? [], i)
            : [a],
        t.sortComparers ?? [],
        i,
    ).slice(0, i);
}
n.d(t, { V: () => l }), n(321073);
