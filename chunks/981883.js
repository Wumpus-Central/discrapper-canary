i.d(t, { V: () => a });
var n = i(426983),
    l = i(176128),
    r = i(985018);
function a(e, t) {
    let i =
        t === l.qo.PUBLIC
            ? r.intl.string(r.t.op2cJ6)
            : t === l.qo.APPLY_TO_JOIN
              ? r.intl.string(r.t.YwZfbt)
              : r.intl.string(r.t.TME4LJ);
    switch (e) {
        case n._.STAFF:
            return {
                tooltipTitle: r.intl.string(r.t.lMrv96),
                tooltipSubtitle: r.intl.string(r.t.lMrv96),
                tooltipDescription: r.intl.string(r.t.lMrv96),
            };
        case n._.VERIFIED:
            return {
                tooltipTitle: r.intl.string(r.t.K7iRig),
                tooltipSubtitle: r.intl.string(r.t.iCehw9),
                tooltipDescription: i,
            };
        case n._.PARTNERED:
            return {
                tooltipTitle: r.intl.string(r.t.K7iRig),
                tooltipSubtitle: r.intl.string(r.t.hfYfEE),
                tooltipDescription: i,
            };
        case n._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: r.intl.string(r.t.K7iRig),
                tooltipSubtitle: r.intl.string(r.t["TX+iFC"]),
                tooltipDescription: i,
            };
        case n._.COMMUNITY:
            return { tooltipTitle: r.intl.string(r.t.K7iRig), tooltipDescription: i };
        case n._.DISCOVERABLE:
            return { tooltipTitle: r.intl.string(r.t.K7iRig), tooltipDescription: r.intl.string(r.t.op2cJ6) };
        default:
            return { tooltipTitle: r.intl.string(r.t["iZRkC/"]) };
    }
}
