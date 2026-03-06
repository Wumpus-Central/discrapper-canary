n.d(e, { default: () => f });
var a = n(627968);
n(64700);
var i = n(31717),
    s = n(203982),
    o = n(453771),
    c = n(518960),
    l = n(87719),
    r = n(414345),
    d = n(244975),
    p = n(788868),
    L = n(652215),
    u = n(985018),
    b = n(736975),
    g = n(101280);
function f(t) {
    let { channel: e, onClose: n, content: f, ...h } = t;
    function A() {
        n(), (0, l.e)();
    }
    function C() {
        n();
        let t = new Blob([f], { type: "text/plain" });
        (0, c.R)([(0, o.VE)(t, "message.txt", "text/plain")], e, i.C.ChannelMessage, { requireConfirm: !0 }),
            s._.dispatchToLastSubscribed(L.jej.CLEAR_TEXT);
    }
    return (0, r.g1)({ location: "PremiumMessageLengthRoadblockUpsell" })
        ? (0, a.jsx)(d.F, {
              title: u.intl.string(u.t.TZT3sJ),
              subtitle: u.intl.format(u.t.QhcEAL, { maxLength: L.uvi, onLearnMore: A }),
              graphic: { src: g.A, type: "image" },
              onClose: n,
              secondaryCTA: u.intl.string(u.t.Fnsb1t),
              onSecondaryClick: C,
              ...h,
          })
        : (0, a.jsx)(d.A, {
              artURL: b.A,
              type: p.e.MESSAGE_LENGTH_UPSELL,
              title: u.intl.string(u.t.TZT3sJ),
              body: u.intl.format(u.t.QhcEAL, { maxLength: L.uvi, onLearnMore: A }),
              context: u.intl.formatToPlainString(u.t.Fc1uVe, { maxLength: L.uvi }),
              glowUp: u.intl.format(u.t.Mi8kt1, { onLearnMore: A }),
              analyticsSource: {
                  page:
                      e?.getGuildId() != null
                          ? L.liQ.GUILD_CHANNEL
                          : e?.isGroupDM() || e?.isPrivate()
                            ? L.liQ.DM_CHANNEL
                            : null,
              },
              analyticsLocation: { section: L.JJy.MESSAGE_LENGTH_UPSELL_MODAL, object: L.ZSU.BUTTON_CTA },
              onClose: n,
              secondaryCTA: u.intl.string(u.t.Fnsb1t),
              onSecondaryClick: C,
              ...h,
          });
}
