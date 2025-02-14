n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(812206),
    a = n(531826);
function s(e) {
    let { applicationId: t, channelId: s, mediaUrl: o } = e,
        d = r.Z.getApplication(t),
        c =
            null !=
            (0, a.ZP)({
                application: d,
                channelId: s
            })
                ? l.u1M
                : l.z1l;
    (0, l.ZDy)(
        async () => {
            let { default: e } = await n.e('4530').then(n.bind(n, 899201));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channelId: s,
                    mediaUrl: o,
                    ...n
                });
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: c
        }
    );
}
