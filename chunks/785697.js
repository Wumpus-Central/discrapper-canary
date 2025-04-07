n.d(t, {
    D2: () => s,
    SE: () => c
});
var r = n(442837),
    i = n(818083),
    l = n(496675),
    a = n(981631);
let o = (0, i.B)({
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
function s(e) {
    return o.useExperiment(
        {
            guildId: e,
            location: 'dd4beb_1'
        },
        { autoTrackExposure: !0 }
    );
}
function c(e) {
    var t;
    let n = (0, r.e7)([l.Z], () => l.Z.can(a.Plq.MANAGE_GUILD, e)),
        { enabled: i } = o.useExperiment(
            {
                guildId: null != (t = null == e ? void 0 : e.id) ? t : a.lds,
                location: 'dd4beb_3'
            },
            { autoTrackExposure: !0 }
        );
    if (null == e) return !1;
    let s = e.hasFeature(a.oNc.COMMUNITY);
    return n && s && i;
}
