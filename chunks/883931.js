t.d(n, { A: () => c }), t(896048);
var l = t(64700),
    i = t(198982),
    s = t(334086),
    r = t(315317);
let a = {
    onSuccess: () => {},
    permissionOverwrites: [],
};
function c() {
    let [e, n] = l.useState(!1),
        [t, c] = l.useState(null);
    return [
        async function (e, t) {
            let { onSuccess: l = a.onSuccess, permissionOverwrites: o = a.permissionOverwrites } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
            n(!0);
            try {
                await r.XV(e, o), await r.XG(e, t), await (0, s.$)(e, l), await (0, s.c)(e, l), n(!1);
            } catch (e) {
                c(new i.LG(e)), n(!1);
            }
            n(!1);
        },
        {
            loading: e,
            error: t,
        },
    ];
}
