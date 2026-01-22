n.d(t, {
    A: () => y,
});
var r = n(627968),
    l = n(311907),
    i = n(397927),
    o = n(822123),
    a = n(649963),
    c = n(815807),
    s = n(406704),
    d = n(253932),
    u = n(576705),
    f = n(203982),
    g = n(690521),
    p = n(652215),
    b = n(307731),
    m = n(985018);

function y(e, t) {
    let n = (0, s.Id)(t),
        y = (0, l.bG)([u.A], () => (t.isPrivate() || u.A.can(p.xBc.ADD_REACTIONS, t)) && n, [t, n]),
        O = (0, o.D6)(t.getGuildId());
    if (!d.jW.getSetting() || !y) return null;
    let A = O.filter(
        (e) =>
            !g.Ay.isEmojiFilteredOrLocked({
                emoji: e,
                channel: t,
                intention: b.b_.REACTION,
            }),
    )
        .slice(0, 12)
        .map((n, l) => {
            var o, s, d;
            return (0, r.jsx)(
                i.Drp,
                {
                    color: "default",
                    id: null != (o = null != (s = n.id) ? s : n.optionallyDiverseSequence) ? o : n.name,
                    label: ":".concat(n.name, ":"),
                    leadingAccessory: {
                        type: "emoji",
                        emojiId: n.id,
                        src: null == n.id ? g.Ay.getURL(null != (d = n.optionallyDiverseSequence) ? d : "") : void 0,
                        animated: n.animated,
                    },
                    action: () => {
                        (0, a.BB)(t.id, e.id, (0, c.jq)(n), a.qN.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                },
                l,
            );
        });
    return (0, r.jsx)(i.Drp, {
        id: "add-reaction",
        label: m.intl.string(m.t.lfIHs4),
        action: () => {
            f._.dispatchKeyed(p.zOV.TOGGLE_REACTION_POPOUT, e.id, {
                emojiPicker: !0,
            });
        },
        color: "default",
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                A,
                (0, r.jsx)(i.bXX, {}),
                (0, r.jsx)(i.Drp, {
                    color: "default",
                    id: "other-reactions",
                    label: m.intl.string(m.t["OBCR+p"]),
                    icon: i.nm2,
                    action: () => {
                        f._.dispatchKeyed(p.zOV.TOGGLE_REACTION_POPOUT, e.id, {
                            emojiPicker: !0,
                        });
                    },
                }),
            ],
        }),
    });
}
