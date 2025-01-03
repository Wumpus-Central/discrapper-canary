n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(812206),
    a = n(531826);
function s(e) {
    let { applicationId: t, channelId: s, mediaUrl: o } = e,
        c = l.Z.getApplication(t),
        d =
            null !=
            (0, a.ZP)({
                application: c,
                channelId: s
            })
                ? r.POPOUT_MODAL_CONTEXT
                : r.DEFAULT_MODAL_CONTEXT;
    (0, r.openModalLazy)(
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
            contextKey: d
        }
    );
}
