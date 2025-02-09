n.d(t, { Z: () => o });
var l = n(592204),
    i = n(131681),
    r = n(695346),
    a = n(82554),
    s = n(388032);
let o = {
    getTitle: () => s.intl.string(s.t.DPVOLS),
    getDisabledTitle: () => s.intl.string(s.t['B/dag4']),
    getDescription: () => s.intl.string(s.t['+Esd3N']),
    eligibleReportSubtypes: [a.i5.SUB_GENERAL_HARASSMENT, a.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, a.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        r.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, l.pB)({ location: 'iar_settings_upsells' }) && !(0, i.U)()
};
