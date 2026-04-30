e.d(i, { V: () => n });
var l = e(426983),
    r = e(176128),
    o = e(985018);
function n(t, i) {
    let e =
        i === r.qo.PUBLIC
            ? o.intl.string(o.t.op2cJ6)
            : i === r.qo.APPLY_TO_JOIN
              ? o.intl.string(o.t.YwZfbt)
              : o.intl.string(o.t.TME4LJ);
    switch (t) {
        case l._.STAFF:
            return {
                tooltipTitle: o.intl.string(o.t.lMrv96),
                tooltipSubtitle: o.intl.string(o.t.lMrv96),
                tooltipDescription: o.intl.string(o.t.lMrv96),
            };
        case l._.VERIFIED:
            return {
                tooltipTitle: o.intl.string(o.t.K7iRig),
                tooltipSubtitle: o.intl.string(o.t.iCehw9),
                tooltipDescription: e,
            };
        case l._.PARTNERED:
            return {
                tooltipTitle: o.intl.string(o.t.K7iRig),
                tooltipSubtitle: o.intl.string(o.t.hfYfEE),
                tooltipDescription: e,
            };
        case l._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: o.intl.string(o.t.K7iRig),
                tooltipSubtitle: o.intl.string(o.t["TX+iFC"]),
                tooltipDescription: e,
            };
        case l._.COMMUNITY:
            return { tooltipTitle: o.intl.string(o.t.K7iRig), tooltipDescription: e };
        case l._.DISCOVERABLE:
            return { tooltipTitle: o.intl.string(o.t.K7iRig), tooltipDescription: o.intl.string(o.t.op2cJ6) };
        default:
            return { tooltipTitle: o.intl.string(o.t["iZRkC/"]) };
    }
}
