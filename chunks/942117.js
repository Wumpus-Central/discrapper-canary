"use strict";
n.d(t, { A: () => l });
var i = n(311750),
    s = n(985018);
let l = {
    getStatusErrorText: function (e) {
        switch (e) {
            case i.bp.CANCELED:
            case i.bp.DEFERRED:
                return s.intl.string(s.t["0SrNPx"]);
            case i.bp.DEFERRED_INTERNAL:
                return s.intl.string(s.t.OtZ5kz);
            case i.bp.ERROR:
                return s.intl.string(s.t.ninjcc);
            case i.bp.REJECTED:
                return s.intl.string(s.t.TSC803);
            case i.bp.RISK_REVIEW:
                return s.intl.string(s.t.rppxMj);
        }
    },
};
