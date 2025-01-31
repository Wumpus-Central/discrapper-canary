n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(430824);
function r(e) {
    let { onCloseCallback: t, analyticsLocations: r, ...s } = e;
    (0, l.ZDy)(
        async () => {
            let { default: e } = await n.e('11166').then(n.bind(n, 971949));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...s,
                    analyticsLocations: r,
                    guildCount: a.Z.getGuildCount(),
                    'aria-labelledby': 'nitro-guild-cap-upsell'
                });
        },
        { onCloseCallback: t }
    );
}
