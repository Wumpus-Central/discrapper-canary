n.d(t, { q: () => d });
var i = n(873298),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(907005),
    o = n(985018);
let d = (0, s.Qx)(a.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
    useTitle: () => o.intl.string(o.t["ms+Tme"]),
    useSubtitle: () => o.intl.string(o.t["4NN4+/"]),
    useOptions: () => [
        { name: o.intl.string(o.t.JIFnN9), value: i.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { name: o.intl.string(o.t.rRdsk1), value: i.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { name: o.intl.string(o.t.AolKwN), value: i.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ],
    useValue: () => {
        let e = l.TA.useSetting();
        return e === i.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? i.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
    },
    setValue: (e) => l.TA.updateSetting(e),
    usePredicate: r.K,
});
