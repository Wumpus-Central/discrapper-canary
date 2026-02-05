"use strict";
n.d(t, { V: () => s });
var r = n(426983),
    i = n(176128),
    a = n(985018);
function s(e, t) {
    let n =
        t === i.qo.PUBLIC
            ? a.intl.string(a.t.op2cJ6)
            : t === i.qo.APPLY_TO_JOIN
              ? a.intl.string(a.t.YwZfbt)
              : a.intl.string(a.t.TME4LJ);
    switch (e) {
        case r._.STAFF:
            return {
                tooltipTitle: a.intl.string(a.t.lMrv96),
                tooltipSubtitle: a.intl.string(a.t.lMrv96),
                tooltipDescription: a.intl.string(a.t.lMrv96),
            };
        case r._.VERIFIED:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipSubtitle: a.intl.string(a.t.iCehw9),
                tooltipDescription: n,
            };
        case r._.PARTNERED:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipSubtitle: a.intl.string(a.t.hfYfEE),
                tooltipDescription: n,
            };
        case r._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: a.intl.string(a.t.K7iRig),
                tooltipSubtitle: a.intl.string(a.t["TX+iFC"]),
                tooltipDescription: n,
            };
        case r._.COMMUNITY:
            return { tooltipTitle: a.intl.string(a.t.K7iRig), tooltipDescription: n };
        case r._.DISCOVERABLE:
            return { tooltipTitle: a.intl.string(a.t.K7iRig), tooltipDescription: a.intl.string(a.t.op2cJ6) };
        default:
            return { tooltipTitle: a.intl.string(a.t["iZRkC/"]) };
    }
}
