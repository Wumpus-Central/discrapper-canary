i.d(e, { o: () => A });
var n = i(64700),
    l = i(171316),
    s = i(419954),
    r = i(115063),
    u = i(253932),
    a = i(780964),
    o = i(652215),
    T = i(985018);
let A = (0, s.zD)(a.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => T.intl.string(T.t["7x9dyE"]),
    useValue: () => {
        let t = u.FA.useSetting();
        return n.useMemo(() => (0, r.Lx)(t), [t]).all;
    },
    setValue: (t) => {
        u.FA.updateSetting(t ? o.yKI : o.yKI & ~o.dzt.NO_RELATION);
    },
    useDisabled: () => (0, l.uM)(),
});
