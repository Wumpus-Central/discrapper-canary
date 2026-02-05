t.d(n, { A: () => c });
var l = t(64700),
    i = t(198982),
    s = t(334086),
    a = t(315317);
let r = { onSuccess: () => {}, permissionOverwrites: [] };
function c() {
    let [e, n] = l.useState(!1),
        [t, c] = l.useState(null);
    return [
        async function (e, t) {
            let { onSuccess: l = r.onSuccess, permissionOverwrites: o = r.permissionOverwrites } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
            n(!0);
            try {
                await a.XV(e, o), await a.XG(e, t), await (0, s.$)(e, l), await (0, s.c)(e, l), n(!1);
            } catch (e) {
                c(new i.LG(e)), n(!1);
            }
            n(!1);
        },
        { loading: e, error: t },
    ];
}
