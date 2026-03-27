n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(822123),
    c = n(649963),
    u = n(815807),
    g = n(406704),
    A = n(253932),
    m = n(576705),
    p = n(486020),
    f = n(203982),
    h = n(690521),
    y = n(652215),
    E = n(307731),
    _ = n(985018),
    S = n(36732);
function b(e, t) {
    let { reducedMotion: n } = l.useContext(o.CZY),
        a = (0, g.Id)(t),
        r = (0, s.bG)([m.A], () => (t.isPrivate() || m.A.can(y.xBc.ADD_REACTIONS, t)) && a, [t, a]),
        p = (0, d.D6)(t.getGuildId());
    if (!A.jW.getSetting() || !r) return null;
    let S = p
        .filter((e) => !h.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: E.b_.REACTION }))
        .slice(0, 12)
        .map((l, a) =>
            (0, i.jsx)(
                o.Drp,
                {
                    color: "default",
                    id: l.id ?? l.optionallyDiverseSequence ?? l.name,
                    label: `:${l.name}:`,
                    icon: (e) => (0, i.jsx)(v, { ...e, reducedMotionEnabled: n.enabled, emoji: l }),
                    leadingAccessory: {
                        type: "emoji",
                        emojiId: l.id,
                        src: null == l.id ? h.Ay.getURL(l.optionallyDiverseSequence ?? "") : void 0,
                        animated: l.animated,
                    },
                    action: () => {
                        (0, c.BB)(t.id, e.id, (0, u.jq)(l), c.qN.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                },
                a,
            ),
        );
    return (0, i.jsx)(o.Drp, {
        id: "add-reaction",
        label: _.intl.string(_.t.lfIHs4),
        leadingAccessory: { type: "icon", icon: o.nm2 },
        action: () => {
            f._.dispatchKeyed(y.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: "default",
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                S,
                (0, i.jsx)(o.bXX, {}),
                (0, i.jsx)(o.Drp, {
                    color: "default",
                    id: "other-reactions",
                    label: _.intl.string(_.t["OBCR+p"]),
                    icon: o.nm2,
                    leadingAccessory: { type: "icon", icon: o.ShF },
                    action: () => {
                        f._.dispatchKeyed(y.zOV.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    },
                }),
            ],
        }),
    });
}
function v(e) {
    let { emoji: t, reducedMotionEnabled: n, className: l = "", isFocused: a = !1 } = e;
    return (0, i.jsx)("img", {
        className: r()(l, S.Z),
        src:
            null != t.id
                ? p.Ay.getEmojiURL({ id: t.id, animated: t.animated && (!n || a), size: 18 })
                : h.Ay.getURL(t.optionallyDiverseSequence ?? ""),
        alt: "",
    });
}
