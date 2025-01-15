r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(907040),
    l = r(981631),
    u = r(185923);
let c = {
        section: l.jXE.MESSAGE_CONFETTI_EMOJI_PICKER_POPOUT,
        openPopoutType: 'message_confetti_emoji_picker'
    },
    d = u.Hz.MESSAGE_CONFETTI;
function f(e) {
    let { channel: n, setEmojiConfetti: r, shouldShow: l, onRequestClose: u, position: f, align: _, children: h } = e,
        p = a.useCallback(
            (e) => {
                r(e), u();
            },
            [u, r]
        );
    return (0, i.jsx)(s.Popout, {
        shouldShow: l,
        position: f,
        align: _,
        autoInvert: !1,
        onRequestClose: u,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(o.Z, {
                analyticsOverride: c,
                channel: n,
                closePopout: r,
                onSelectEmoji: p,
                pickerIntention: d,
                includeCreateEmojiButton: !1
            });
        },
        children: h
    });
}
