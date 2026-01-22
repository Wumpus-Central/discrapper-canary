n.d(t, {
    A: () => l,
});
var r = n(311750),
    i = n(985018);
let l = {
    getStatusErrorText: function (e) {
        switch (e) {
            case r.bp.CANCELED:
            case r.bp.DEFERRED:
                return i.intl.string(i.t["0SrNPx"]);
            case r.bp.DEFERRED_INTERNAL:
                return i.intl.string(i.t.OtZ5kz);
            case r.bp.ERROR:
                return i.intl.string(i.t.ninjcc);
            case r.bp.REJECTED:
                return i.intl.string(i.t.TSC803);
            case r.bp.RISK_REVIEW:
                return i.intl.string(i.t.rppxMj);
        }
    },
};
