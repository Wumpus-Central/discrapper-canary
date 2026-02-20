i.d(e, { z: () => T });
var n = i(311907),
    l = i(955572),
    s = i(775602),
    r = i(419954),
    a = i(975571),
    u = i(780964),
    o = i(358776),
    d = i(652215),
    A = i(985018);
let T = (0, r.zD)(u.X.REDUCED_MOTION, {
    useTitle: () => A.intl.string(A.t.b3XBzg),
    useSubtitle: (0, o.Ci)("Motion")
        ? () => A.intl.format(A.t.XqvxJc, { helpdeskArticle: a.A.getArticleURL(d.MVz.REDUCED_MOTION) })
        : void 0,
    useValue: () => (0, n.bG)([s.A], () => s.A.useReducedMotion),
    setValue: (t) => (0, l.qz)(t ? "reduce" : "no-preference"),
});
