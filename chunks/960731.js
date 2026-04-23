"use strict";
n.d(t, { V: () => a });
var r = n(124651),
    i = n(716115),
    s = n(82180);
function a(e, t = r.rO.STRING) {
    switch (e) {
        case r.LN.BOOL:
            return !1;
        case r.LN.UINT64:
        case r.LN.FIXED64:
            return (0, i.l)(s.e.ZERO, t);
        case r.LN.INT64:
        case r.LN.SFIXED64:
        case r.LN.SINT64:
            return (0, i.l)(s.h.ZERO, t);
        case r.LN.DOUBLE:
        case r.LN.FLOAT:
            return 0;
        case r.LN.BYTES:
            return new Uint8Array(0);
        case r.LN.STRING:
            return "";
        default:
            return 0;
    }
}
