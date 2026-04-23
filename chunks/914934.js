n.d(t, { L: () => u });
var i = n(753806),
    s = n(145331),
    l = n(419954),
    a = n(253932),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let u = (0, l.Qx)(r.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => d.intl.string(d.t.VkoLsy),
    useSearchTerms: () => [d.intl.string(d.t["t4+fbe"])],
    useOptions: function () {
        return [
            { name: d.intl.string(d.t.E9JM4J), value: 0 },
            { name: d.intl.string(d.t["Kr+lPi"]), value: 1 },
        ];
    },
    useValue: () => +!!a.Hu.useSetting(),
    setValue: (e) => {
        let t = 1 === e;
        t ? i.A.cleanUpPrivateChannelSearchState() : i.A.cleanUpSearchState({ type: o.I4_.DMS }),
            (0, s._k)({
                prevIsCrossDMSettingEnabled: a.Hu.getSetting(),
                isCrossDMSettingEnabled: t,
                location: s.vy.USER_SETTINGS,
            }),
            a.Hu.updateSetting(t);
    },
});
