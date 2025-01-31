n.d(t, { q: () => l });
var i = n(200651);
n(192379);
var r = n(952265);
function l(e) {
    let { demonetized: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, r.ZD)(
        async () => {
            let { default: r } = await n.e('90220').then(n.bind(n, 418225));
            return (n) =>
                (0, i.jsx)(r, {
                    guildId: e,
                    demonetized: t,
                    ...n
                });
        },
        {
            onCloseRequest: () => {}
        }
    );
}
