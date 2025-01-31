n.d(t, {
    Dw: () => f,
    I: () => a,
    UG: () => s,
    fv: () => d,
    jq: () => o
});
var i = n(814391),
    r = n(388032);
let a = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    },
    s = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    };
var o = (function (e) {
    return (e[(e.JOINED_AT = 0)] = 'JOINED_AT'), (e[(e.ACCOUNT_AGE = 1)] = 'ACCOUNT_AGE'), e;
})({});
let l = () => ({
        seconds: r.t.FsBhl5,
        minutes: r.t['4d1mgY'],
        hours: r.t['2wkczM'],
        days: r.t['ocdS+f'],
        months: r.t['az14+v'],
        years: r.t['5Gk1np']
    }),
    u = () => ({
        hours: r.t.JZP2Rk,
        days: r.t['3moSHR'],
        months: r.t['0Ddwr6'],
        years: r.t.cR7lcn
    });
function c(e) {
    return 0 === e ? l : 1 === e ? u : void 0;
}
let d = (e, t) => {
        let n = c(t);
        return (0, i.Z)(e, n, !1);
    },
    f = (e) => (null != e ? new Date(e) : new Date()).getTime();
