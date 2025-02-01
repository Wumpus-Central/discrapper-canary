n.d(t, { Z: () => l });
var i = n(592204),
    r = n(131681),
    a = n(695346),
    s = n(82554),
    o = n(388032);
let l = {
    getTitle: () => o.intl.string(o.t.DPVOLS),
    getDisabledTitle: () => o.intl.string(o.t['B/dag4']),
    getDescription: () => o.intl.string(o.t['+Esd3N']),
    eligibleReportSubtypes: [s.i5.SUB_GENERAL_HARASSMENT, s.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, s.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        a.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, i.pB)({ location: 'iar_settings_upsells' }) && !(0, r.U)()
};
