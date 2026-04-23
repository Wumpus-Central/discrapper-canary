n.d(t, { o: () => c });
var i = n(64700),
    s = n(171316),
    l = n(419954),
    a = n(115063),
    r = n(253932),
    o = n(780964),
    d = n(652215),
    u = n(985018);
let c = (0, l.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => u.intl.string(u.t["7x9dyE"]),
    useValue: () => {
        let e = r.FA.useSetting();
        return i.useMemo(() => (0, a.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        r.FA.updateSetting(e ? d.yKI : d.yKI & ~d.dzt.NO_RELATION);
    },
    useDisabled: () => (0, s.uM)(),
});
