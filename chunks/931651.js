n.d(t, {
    $: function () {
        return a;
    }
});
var r = n(200651);
n(192379);
var i = n(907040),
    l = n(185923);
function a(e) {
    let { channel: t, closePopout: n, analyticsOverride: a, onSelectEmoji: u, messageId: o } = e;
    return (0, r.jsx)(i.Z, {
        closePopout: n,
        channel: t,
        onSelectEmoji: u,
        pickerIntention: l.Hz.REACTION,
        analyticsOverride: a,
        messageId: o
    });
}
