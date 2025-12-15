n.d(e, { D: () => T });
var i = n(945577),
    l = n(611004),
    s = n(315322),
    u = n(509613),
    r = n(695346),
    a = n(313789),
    o = n(981631),
    c = n(388032);
let T = (0, u.J9)(a.n.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => c.intl.string(c.t["NxjN+q"]),
    useSearchTerms: () => [c.intl.string(c.t["t4+fbe"])],
    useOptions: () => [
        {
            name: c.intl.string(c.t["t+fGsk"]),
            value: 0,
        },
        {
            name: c.intl.string(c.t.MwlEGN),
            value: 1,
        },
    ],
    useValue: () => +!!r.rR.useSetting(),
    setValue: (t) => {
        let e = 1 === t;
        e ? l.Z.cleanUpPrivateChannelSearchState() : l.Z.cleanUpSearchState({ type: o.aib.DMS }),
            (0, s.yn)({
                prevIsCrossDMSettingEnabled: r.rR.getSetting(),
                isCrossDMSettingEnabled: e,
                location: s.Ix.USER_SETTINGS,
            }),
            r.rR.updateSetting(e);
    },
    usePredicate: () => (0, i.U)({ location: "DefaultDMSearchBehavior" }),
});
