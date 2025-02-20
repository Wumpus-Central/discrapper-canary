n.d(t, {
    Dw: () => f,
    I: () => o,
    UG: () => a,
    fv: () => d,
    jq: () => s
});
var r = n(814391),
    i = n(388032);
let o = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    },
    a = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    };
var s = (function (e) {
    return (e[(e.JOINED_AT = 0)] = 'JOINED_AT'), (e[(e.ACCOUNT_AGE = 1)] = 'ACCOUNT_AGE'), e;
})({});
let l = () => ({
        seconds: i.t.FsBhl5,
        minutes: i.t['4d1mgY'],
        hours: i.t['2wkczM'],
        days: i.t['ocdS+f'],
        months: i.t['az14+v'],
        years: i.t['5Gk1np']
    }),
    c = () => ({
        hours: i.t.JZP2Rk,
        days: i.t['3moSHR'],
        months: i.t['0Ddwr6'],
        years: i.t.cR7lcn
    });
function u(e) {
    return 0 === e ? l : 1 === e ? c : void 0;
}
let d = (e, t) => {
        let n = u(t);
        return (0, r.Z)(e, n, !1);
    },
    f = (e) => (null != e ? new Date(e) : new Date()).getTime();
