n.d(e, { D: () => S });
var i = n(945577),
    l = n(611004),
    s = n(315322),
    u = n(509613),
    r = n(695346),
    a = n(313789),
    o = n(981631),
    T = n(388032);
let S = (0, u.J9)(a.n.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => T.intl.string(T.t["NxjN+q"]),
    useSearchTerms: () => [T.intl.string(T.t["t4+fbe"])],
    useOptions: () => [
        {
            name: T.intl.string(T.t["t+fGsk"]),
            value: 0,
        },
        {
            name: T.intl.string(T.t.MwlEGN),
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
