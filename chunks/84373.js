n.d(t, {
    o: () => c,
});
var r = n(311907),
    i = n(873298),
    a = n(287809),
    s = n(64313),
    o = n(253932),
    l = n(656402);

function c() {
    var e;
    let t = o.he.useSetting(),
        n = o.cj.useSetting(),
        c = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        u = (0, s.j)("use_derived_dm_spam_filter_setting");
    return t !== i.he.DEFAULT_UNSET
        ? t
        : (null == c ? void 0 : c.nsfwAllowed) === !1 && u
          ? i.he.FRIENDS_AND_NON_FRIENDS
          : null != (e = l.xY.get(n))
            ? e
            : i.he.NON_FRIENDS;
}
