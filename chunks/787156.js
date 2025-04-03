n.d(t, { wQ: () => a });
var r = n(972841);
let i = new Date(Date.UTC(1990, 1, 1, 0, 0, 0)),
    l = new Date(Date.UTC(2030, 1, 1, 0, 0, 0)),
    a = (e) => {
        let { location: t } = e;
        if (!r.d.useExperiment({ location: t }).enabled) return !1;
        let n = new Date();
        return n >= i && n < l;
    };
