n.d(e, { D: () => T });
var i = n(611004),
    l = n(315322),
    s = n(509613),
    u = n(695346),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let T = (0, s.J9)(r.n.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => o.intl.string(o.t["NxjN+q"]),
    useSearchTerms: () => [o.intl.string(o.t["t4+fbe"])],
    useOptions: () => [
        {
            name: o.intl.string(o.t["t+fGsk"]),
            value: 0,
        },
        {
            name: o.intl.string(o.t.MwlEGN),
            value: 1,
        },
    ],
    useValue: () => +!!u.rR.useSetting(),
    setValue: (t) => {
        let e = 1 === t;
        e ? i.Z.cleanUpPrivateChannelSearchState() : i.Z.cleanUpSearchState({ type: a.aib.DMS }),
            (0, l.yn)({
                prevIsCrossDMSettingEnabled: u.rR.getSetting(),
                isCrossDMSettingEnabled: e,
                location: l.Ix.USER_SETTINGS,
            }),
            u.rR.updateSetting(e);
    },
});
