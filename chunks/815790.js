r.d(n, {
    Dw: function () {
        return p;
    },
    I: function () {
        return s;
    },
    UG: function () {
        return l;
    },
    fv: function () {
        return f;
    },
    jq: function () {
        return i;
    }
});
var i,
    a = r(814391),
    o = r(388032);
let s = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    },
    l = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    };
!(function (e) {
    (e[(e.JOINED_AT = 0)] = 'JOINED_AT'), (e[(e.ACCOUNT_AGE = 1)] = 'ACCOUNT_AGE');
})(i || (i = {}));
let u = () => ({
        seconds: o.t.FsBhl5,
        minutes: o.t['4d1mgY'],
        hours: o.t['2wkczM'],
        days: o.t['ocdS+f'],
        months: o.t['az14+v'],
        years: o.t['5Gk1np']
    }),
    c = () => ({
        hours: o.t.JZP2Rk,
        days: o.t['3moSHR'],
        months: o.t['0Ddwr6'],
        years: o.t.cR7lcn
    });
function d(e) {
    return 0 === e ? u : 1 === e ? c : void 0;
}
let f = (e, n) => {
        let r = d(n);
        return (0, a.Z)(e, r, !1);
    },
    p = (e) => (null != e ? new Date(e) : new Date()).getTime();
