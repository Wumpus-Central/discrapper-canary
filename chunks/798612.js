n.d(e, { default: () => b });
var i = n(627968);
n(64700);
var a = n(31717),
    o = n(203982),
    s = n(453771),
    c = n(518960),
    l = n(87719),
    r = n(414345),
    d = n(244975),
    L = n(788868),
    p = n(652215),
    u = n(985018),
    g = n(736975);
function b(t) {
    let { channel: e, onClose: n, content: b, ...f } = t;
    function h() {
        n(), (0, l.e)();
    }
    function A() {
        n();
        let t = new Blob([b], { type: "text/plain" });
        (0, c.R)([(0, s.VE)(t, "message.txt", "text/plain")], e, a.C.ChannelMessage, { requireConfirm: !0 }),
            o._.dispatchToLastSubscribed(p.jej.CLEAR_TEXT);
    }
    return (0, r.g1)({ location: "PremiumMessageLengthRoadblockUpsell" })
        ? (0, i.jsx)(d.F, {
              title: u.intl.string(u.t.TZT3sJ),
              subtitle: u.intl.format(u.t.QhcEAL, { maxLength: p.uvi, onLearnMore: h }),
              graphic: { src: g.A, type: "image" },
              onClose: n,
              secondaryCTA: u.intl.string(u.t.Fnsb1t),
              onSecondaryClick: A,
              ...f,
          })
        : (0, i.jsx)(d.A, {
              artURL: g.A,
              type: L.e.MESSAGE_LENGTH_UPSELL,
              title: u.intl.string(u.t.TZT3sJ),
              body: u.intl.format(u.t.QhcEAL, { maxLength: p.uvi, onLearnMore: h }),
              context: u.intl.formatToPlainString(u.t.Fc1uVe, { maxLength: p.uvi }),
              glowUp: u.intl.format(u.t.Mi8kt1, { onLearnMore: h }),
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
              onSecondaryClick: A,
              ...f,
          });
}
