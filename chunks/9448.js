var i = n(734057),
    r = n(988794);
function a(e, t) {
    let n = null;
    return (e === r.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n);
}
n.d(
    t,
    {},
    {
        WN: function (e) {
            let t,
                { entity_type: n, channel_id: a } = e;
            return (n in r.om && null != a && (t = i.A.getChannel(e.channel_id) ?? void 0), t);
        },
        dy: function (e) {
            return e === r.Ps.VOICE || e === r.Ps.STAGE_INSTANCE ? r.om[e] : void 0;
        },
        k5: function (e) {
            let { entityType: t, entityMetadata: n } = e;
            return a(t, n);
        },
        oF: function (e) {
            let { entity_type: t, entity_metadata: n } = e;
            return a(t, n);
        },
    },
);
