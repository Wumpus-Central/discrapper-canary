n.d(t, { Z: () => s });
var r = n(592204),
    l = n(131681),
    i = n(695346),
    a = n(82554),
    o = n(388032);
let s = {
    getTitle: () => o.NW.string(o.t.DPVOLS),
    getDisabledTitle: () => o.NW.string(o.t['B/dag4']),
    getDescription: () => o.NW.string(o.t['+Esd3N']),
    eligibleReportSubtypes: [a.i5.SUB_GENERAL_HARASSMENT, a.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, a.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        i.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, r.pB)({ location: 'iar_settings_upsells' }) && !(0, l.U)()
};
