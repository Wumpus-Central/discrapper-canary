i.d(e, { Z: () => o });
var n = i(524136),
    l = i(70730),
    s = i(419954),
    r = i(253932),
    a = i(780964),
    u = i(985018);
let o = (0, s.zD)(a.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
    useTitle: () => u.intl.string(u.t.NjOMvh),
    useBadge: () => "beta",
    useValue: r.oz.useSetting,
    setValue: n.O,
    useSearchTerms: () => [u.intl.string(u.t.hi4dSk)],
    usePredicate: () => {
        let { enabled: t, showDmPrompts: e } = l.u.getConfig({ location: "FriendAnniversaryNotifications" });
        return t && e;
    },
});
