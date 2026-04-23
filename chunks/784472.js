function i(e, t) {
    var n, i;
    let l = t.limit ?? 1 / 0,
        a = ((n = e), (i = t.filterPredicates ?? []), n.filter((e) => i.every((t) => t(e))));
    return (function (e, t, n) {
        let i = [];
        for (let l of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let i of t) {
                        let t = i(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(l, t);
            if ((i.push(...e), i.length >= n)) break;
        }
        return i;
    })(
        null != t.bucketPredicates && t.bucketPredicates.length > 0
            ? l >= a.length
                ? (function (e, t) {
                      let n = Array(t.length)
                          .fill(null)
                          .map(() => []);
                      for (let i of e)
                          for (let e = 0; e < t.length; e++)
                              if (t[e](i)) {
                                  n[e].push(i);
                                  break;
                              }
                      return n;
                  })(a, t.bucketPredicates ?? [])
                : (function (e, t, n) {
                      let i = [],
                          l = e;
                      for (let e of t) {
                          let t = [],
                              a = [];
                          for (let n of l) e(n) ? a.push(n) : t.push(n);
                          if ((i.push(a), (l = t), i.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return i;
                  })(a, t.bucketPredicates ?? [], l)
            : [a],
        t.sortComparers ?? [],
        l,
    ).slice(0, l);
}
n.d(t, { V: () => i }), n(321073);
