n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(844222),
    d = n(477782),
    c = n(460905),
    u = n(217306),
    g = n(822123),
    A = n(649963),
    h = n(815807),
    m = n(406704),
    f = n(253932),
    p = n(576705),
    E = n(486020),
    y = n(203982),
    v = n(690521),
    _ = n(652215),
    S = n(307731),
    I = n(985018),
    x = n(666833);
function b(e, t) {
    let { reducedMotion: n } = l.useContext(o.C),
        a = (0, m.Id)(t),
        r = (0, s.bG)([p.A], () => (t.isPrivate() || p.A.can(_.xBc.ADD_REACTIONS, t)) && a, [t, a]),
        E = (0, g.D6)(t.getGuildId());
    if (!f.jW.getSetting() || !r) return null;
    let x = E.filter(
        (e) => !v.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: S.EmojiIntention.REACTION }),
    )
        .slice(0, 12)
        .map((l, a) =>
            (0, i.jsx)(
                d.Dr,
                {
                    color: "default",
                    id: l.id ?? l.optionallyDiverseSequence ?? l.name,
                    label: `:${l.name}:`,
                    icon: (e) => (0, i.jsx)(T, { ...e, reducedMotionEnabled: n.enabled, emoji: l }),
                    leadingAccessory: {
                        type: "emoji",
                        emojiId: l.id,
                        src: null == l.id ? v.Ay.getURL(l.optionallyDiverseSequence ?? "") : void 0,
                        animated: l.animated,
                    },
                    action: () => {
                        (0, A.BB)(t.id, e.id, (0, h.jq)(l), A.qN.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                },
                a,
            ),
        );
    return (0, i.jsx)(d.Dr, {
        id: "add-reaction",
        label: I.intl.string(I.t.lfIHs4),
        leadingAccessory: { type: "icon", icon: c.n },
        action: () => {
            y._.dispatchKeyed(_.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: "default",
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                x,
                (0, i.jsx)(d.bX, {}),
                (0, i.jsx)(d.Dr, {
                    color: "default",
                    id: "other-reactions",
                    label: I.intl.string(I.t["OBCR+p"]),
                    icon: c.n,
                    leadingAccessory: { type: "icon", icon: u.S },
                    action: () => {
                        y._.dispatchKeyed(_.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    },
                }),
            ],
        }),
    });
}
function T(e) {
    let { emoji: t, reducedMotionEnabled: n, className: l = "", isFocused: a = !1 } = e;
    return (0, i.jsx)("img", {
        className: r()(l, x.Z),
        src:
            null != t.id
                ? E.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : v.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
