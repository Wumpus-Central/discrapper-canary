n.d(t, { o: () => d });
var i = n(923457),
    s = n(311907),
    a = n(873298),
    l = n(207560),
    r = n(287809),
    o = n(253932),
    c = n(656402);
function d() {
    let e = o.he.useSetting(),
        t = o.cj.useSetting(),
        n = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        d = (0, l.yv)(i.p.SPAM_FILTERS);
    return e !== a.he.DEFAULT_UNSET
        ? e
        : n?.nsfwAllowed === !1 && d
          ? a.he.FRIENDS_AND_NON_FRIENDS
          : (c.xY.get(t) ?? a.he.NON_FRIENDS);
}
