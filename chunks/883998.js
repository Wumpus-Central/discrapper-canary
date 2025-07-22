n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(907040),
    s = n(981631),
    l = n(185923);
let c = {
        section: s.jXE.MESSAGE_CONFETTI_EMOJI_PICKER_POPOUT,
        openPopoutType: 'message_confetti_emoji_picker'
    },
    u = l.Hz.MESSAGE_CONFETTI;
function d(e) {
    let { channel: t, setEmojiConfetti: n, shouldShow: s, onRequestClose: l, position: d, align: _, positionRef: f, children: p } = e,
        h = i.useCallback(
            (e) => {
                let { emoji: t } = e;
                null != t && (n(t), l());
            },
            [l, n]
        );
    return (0, r.jsx)(a.yRy, {
        shouldShow: s,
        position: d,
        targetElementRef: f,
        align: _,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(o.Z, {
                analyticsOverride: c,
                channel: t,
                closePopout: n,
                onSelectEmoji: h,
                pickerIntention: u,
                includeCreateEmojiButton: !1
            });
        },
        children: p
    });
}
