n.d(t, { Z: () => s });
var r = n(592204),
    a = n(131681),
    i = n(695346),
    l = n(82554),
    o = n(388032);
let s = {
    getTitle: () => o.intl.string(o.t.DPVOLS),
    getDisabledTitle: () => o.intl.string(o.t['B/dag4']),
    getDescription: () => o.intl.string(o.t['+Esd3N']),
    eligibleReportSubtypes: [l.i5.SUB_GENERAL_HARASSMENT, l.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, l.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        i.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, r.pB)({ location: 'iar_settings_upsells' }) && !(0, a.U)()
};
