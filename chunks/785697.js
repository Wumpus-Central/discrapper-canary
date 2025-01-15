i.d(t, {
    D2: function () {
        return o;
    },
    SE: function () {
        return c;
    }
});
var s = i(442837),
    l = i(818083),
    n = i(496675),
    a = i(981631);
let r = (0, l.B)({
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
    let i = (0, s.e7)([n.Z], () => n.Z.can(a.Plq.MANAGE_GUILD, e)),
        { enabled: l } = r.useExperiment(
            {
                guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : a.lds,
                location: 'dd4beb_3'
            },
            { autoTrackExposure: !0 }
        );
    if (null == e) return !1;
    let o = e.hasFeature(a.oNc.COMMUNITY);
    return i && o && l;
}
