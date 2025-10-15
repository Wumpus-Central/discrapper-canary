n.d(t, {
    Dw: () => f,
    I: () => a,
    UG: () => o,
    fv: () => d,
    jq: () => s,
});
var r = n(814391),
    i = n(388032);
let a = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    },
    o = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    };
var s = (function (e) {
    return (e[(e.JOINED_AT = 0)] = "JOINED_AT"), (e[(e.ACCOUNT_AGE = 1)] = "ACCOUNT_AGE"), e;
})({});
let l = () => ({
        seconds: i.t["FsBhl/"],
        minutes: i.t["4d1mgT"],
        hours: i.t["2wkczD"],
        days: i.t["ocdS+f"],
        months: i.t["az14+h"],
        years: i.t["5Gk1ns"],
    }),
    c = () => ({
        hours: i.t.JZP2Rs,
        days: i.t["3moSHc"],
        months: i.t["0Ddwr1"],
        years: i.t.cR7lcs,
    });
function u(e) {
    return 0 === e ? l : 1 === e ? c : void 0;
}
let d = (e, t) => {
        let n = u(t);
        return (0, r.Z)(e, n, !1);
    },
    f = (e) => (null != e ? new Date(e) : new Date()).getTime();
