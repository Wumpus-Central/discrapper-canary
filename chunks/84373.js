n.d(t, { o: () => u });
var i = n(923457),
    s = n(311907),
    l = n(873298),
    a = n(207560),
    r = n(287809),
    o = n(253932),
    d = n(656402);
function u() {
    let e = o.he.useSetting(),
        t = o.cj.useSetting(),
        n = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        u = (0, a.yv)(i.p.SPAM_FILTERS);
    return e !== l.he.DEFAULT_UNSET
        ? e
        : n?.nsfwAllowed === !1 && u
          ? l.he.FRIENDS_AND_NON_FRIENDS
          : (d.xY.get(t) ?? l.he.NON_FRIENDS);
}
