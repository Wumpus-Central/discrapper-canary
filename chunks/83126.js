n.d(t, { Z: () => s });
var r = n(592204),
    a = n(131681),
    i = n(695346),
    o = n(82554),
    l = n(388032);
let s = {
    getTitle: () => l.intl.string(l.t.DPVOLS),
    getDisabledTitle: () => l.intl.string(l.t['B/dag4']),
    getDescription: () => l.intl.string(l.t['+Esd3N']),
    eligibleReportSubtypes: [o.i5.SUB_GENERAL_HARASSMENT, o.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, o.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        i.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, r.pB)({ location: 'iar_settings_upsells' }) && !(0, a.U)()
};
