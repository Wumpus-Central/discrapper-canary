"use strict";
n.d(t, { V: () => a });
var r = n(426983),
    i = n(176128),
    s = n(985018);
function a(e, t) {
    let n =
        t === i.qo.PUBLIC
            ? s.intl.string(s.t.op2cJ6)
            : t === i.qo.APPLY_TO_JOIN
              ? s.intl.string(s.t.YwZfbt)
              : s.intl.string(s.t.TME4LJ);
    switch (e) {
        case r._.STAFF:
            return {
                tooltipTitle: s.intl.string(s.t.lMrv96),
                tooltipSubtitle: s.intl.string(s.t.lMrv96),
                tooltipDescription: s.intl.string(s.t.lMrv96),
            };
        case r._.VERIFIED:
            return {
                tooltipTitle: s.intl.string(s.t.K7iRig),
                tooltipSubtitle: s.intl.string(s.t.iCehw9),
                tooltipDescription: n,
            };
        case r._.PARTNERED:
            return {
                tooltipTitle: s.intl.string(s.t.K7iRig),
                tooltipSubtitle: s.intl.string(s.t.hfYfEE),
                tooltipDescription: n,
            };
        case r._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: s.intl.string(s.t.K7iRig),
                tooltipSubtitle: s.intl.string(s.t["TX+iFC"]),
                tooltipDescription: n,
            };
        case r._.COMMUNITY:
            return { tooltipTitle: s.intl.string(s.t.K7iRig), tooltipDescription: n };
        case r._.DISCOVERABLE:
            return { tooltipTitle: s.intl.string(s.t.K7iRig), tooltipDescription: s.intl.string(s.t.op2cJ6) };
        default:
            return { tooltipTitle: s.intl.string(s.t["iZRkC/"]) };
    }
}
