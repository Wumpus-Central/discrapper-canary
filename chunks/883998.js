n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(907040),
    o = n(981631),
    l = n(185923);
let u = {
        section: o.jXE.MESSAGE_CONFETTI_EMOJI_PICKER_POPOUT,
        openPopoutType: 'message_confetti_emoji_picker'
    },
    c = l.Hz.MESSAGE_CONFETTI;
function d(e) {
    let { channel: t, setEmojiConfetti: n, shouldShow: o, onRequestClose: l, position: d, align: f, children: _ } = e,
        p = r.useCallback(
            (e) => {
                null != e && (n(e), l());
            },
            [l, n]
        );
    return (0, i.jsx)(a.yRy, {
        shouldShow: o,
        position: d,
        align: f,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Z, {
                analyticsOverride: u,
                channel: t,
                closePopout: n,
                onSelectEmoji: p,
                pickerIntention: c,
                includeCreateEmojiButton: !1
            });
        },
        children: _
    });
}
