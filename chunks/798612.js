n.d(e, { default: () => f });
var a = n(627968);
n(64700);
var i = n(31717),
    o = n(203982),
    s = n(453771),
    c = n(518960),
    r = n(87719),
    l = n(244975),
    d = n(788868),
    p = n(652215),
    u = n(985018),
    L = n(736975);
function f(t) {
    let { channel: e, onClose: n, content: f, ...E } = t;
    function b() {
        n(), (0, r.e)();
    }
    return (0, a.jsx)(l.A, {
        artURL: L.A,
        type: d.e.MESSAGE_LENGTH_UPSELL,
        title: u.intl.string(u.t.TZT3sJ),
        body: u.intl.format(u.t.QhcEAL, { maxLength: p.uvi, onLearnMore: b }),
        context: u.intl.formatToPlainString(u.t.Fc1uVe, { maxLength: p.uvi }),
        glowUp: u.intl.format(u.t.Mi8kt1, { onLearnMore: b }),
        analyticsSource: {
            page:
                e?.getGuildId() != null
                    ? p.liQ.GUILD_CHANNEL
                    : e?.isGroupDM() || e?.isPrivate()
                      ? p.liQ.DM_CHANNEL
                      : null,
        },
        analyticsLocation: { section: p.JJy.MESSAGE_LENGTH_UPSELL_MODAL, object: p.ZSU.BUTTON_CTA },
        onClose: n,
        secondaryCTA: u.intl.string(u.t.Fnsb1t),
        onSecondaryClick: function () {
            n();
            let t = new Blob([f], { type: "text/plain" });
            (0, c.R)([(0, s.VE)(t, "message.txt", "text/plain")], e, i.C.ChannelMessage, { requireConfirm: !0 }),
                o._.dispatchToLastSubscribed(p.jej.CLEAR_TEXT);
        },
        ...E,
    });
}
