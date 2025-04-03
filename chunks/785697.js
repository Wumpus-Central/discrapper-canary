s.d(t, {
    D2: () => o,
    SE: () => c
});
var i = s(442837),
    n = s(818083),
    l = s(496675),
    a = s(981631);
let r = (0, n.B)({
    kind: 'guild',
    id: '2022-11_default_disable_mass_mention',
    label: 'Disable mass mentions for communities by default',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    return r.useExperiment(
        {
            guildId: e,
            location: 'dd4beb_1'
        },
        { autoTrackExposure: !0 }
    );
}
function c(e) {
    var t;
    let s = (0, i.e7)([l.Z], () => l.Z.can(a.Plq.MANAGE_GUILD, e)),
        { enabled: n } = r.useExperiment(
            {
                guildId: null != (t = null == e ? void 0 : e.id) ? t : a.lds,
                location: 'dd4beb_3'
            },
            { autoTrackExposure: !0 }
        );
    if (null == e) return !1;
    let o = e.hasFeature(a.oNc.COMMUNITY);
    return s && o && n;
}
