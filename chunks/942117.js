n.d(t, { A: () => s });
var i = n(311750),
    l = n(985018);
let s = {
    getStatusErrorText: function (e) {
        switch (e) {
            case i.bp.CANCELED:
            case i.bp.DEFERRED:
                return l.intl.string(l.t["0SrNPx"]);
            case i.bp.DEFERRED_INTERNAL:
                return l.intl.string(l.t.OtZ5kz);
            case i.bp.ERROR:
                return l.intl.string(l.t.ninjcc);
            case i.bp.REJECTED:
                return l.intl.string(l.t.TSC803);
            case i.bp.RISK_REVIEW:
                return l.intl.string(l.t.rppxMj);
        }
    },
};
