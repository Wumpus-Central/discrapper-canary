l.d(n, { A: () => c });
var t = l(64700),
    i = l(198982),
    s = l(334086),
    a = l(315317);
let r = { onSuccess: () => {}, permissionOverwrites: [] };
function c() {
    let [e, n] = t.useState(!1),
        [l, c] = t.useState(null);
    return [
        async function (e, l) {
            let { onSuccess: t = r.onSuccess, permissionOverwrites: o = r.permissionOverwrites } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
            n(!0);
            try {
                await a.XV(e, o), await a.XG(e, l), await (0, s.$)(e, t), await (0, s.c)(e, t), n(!1);
            } catch (e) {
                c(new i.LG(e)), n(!1);
            }
            n(!1);
        },
        { loading: e, error: l },
    ];
}
