n.d(t, {
    D2: function () {
        return o;
    },
    SE: function () {
        return c;
    }
});
var i = n(442837),
    r = n(818083),
    l = n(496675),
    a = n(981631);
let s = (0, r.B)({
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
    return s.useExperiment(
        {
            guildId: e,
            location: 'dd4beb_1'
        },
        { autoTrackExposure: !0 }
    );
}
function c(e) {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.can(a.Plq.MANAGE_GUILD, e)),
        { enabled: r } = s.useExperiment(
            {
                guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : a.lds,
                location: 'dd4beb_3'
            },
            { autoTrackExposure: !0 }
        );
    if (null == e) return !1;
    let o = e.hasFeature(a.oNc.COMMUNITY);
    return n && o && r;
}
