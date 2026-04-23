n.d(t, { A: () => j });
var i = n(64700),
    l = n(843472),
    a = n(843626),
    s = n(294454),
    r = n(857071),
    o = n(517997),
    c = n(406704),
    d = n(747926),
    u = n(54570),
    h = n(8880),
    m = n(253932),
    A = n(961350),
    g = n(734057),
    _ = n(580745),
    p = n(834942),
    f = n(320501),
    E = n(576705),
    C = n(957565),
    x = n(203982),
    S = n(723702),
    I = n(661191),
    v = n(697470),
    N = n(492841),
    T = n(707985),
    y = n(519222),
    b = n(652215);
let j = function (e, t, n) {
    let j = i.useRef(n);
    return (
        (j.current = n),
        i.useCallback(
            (n) => {
                if (!j.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    R = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    M = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    L = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    D = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    P = f.A.getMessage(t, e),
                    O = g.A.getChannel(t);
                if (null == P || null == O) return;
                let w = A.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (E.A.can(b.xBc.MANAGE_MESSAGES, O) || P.canDeleteOwnMessage(w)) &&
                            (n.preventDefault(), (0, y.RC)(O, P, n));
                        break;
                    case "c":
                        ((0, S.isMac)() ? L : M) && C.p5 && (n.preventDefault(), (0, C.C)(P.content));
                        break;
                    case "e":
                        i && !O.isSystemDM() && (0, v.A)(P, w) && (n.preventDefault(), (0, y.u_)(O, P));
                        break;
                    case "p":
                        (i || D) && (0, N.A)(P, O) && (n.preventDefault(), (0, y.rS)(O, P, n));
                        break;
                    case "+":
                        (i || D) &&
                            (function (e) {
                                let t = null == e.guild_id || p.A.canChatInGuild(e.guild_id),
                                    n = m.jW.getSetting(),
                                    { disableReactionCreates: i } = (0, T.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && E.A.can(b.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && r.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.jr)(e),
                                    });
                                return !i && n;
                            })(O) &&
                            (n.preventDefault(),
                            x._.dispatchKeyed(b.zOV.TOGGLE_REACTION_POPOUT, P.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || D) && (0, o.r)(O, P) && (n.preventDefault(), (0, y.$b)(O, P, n));
                        break;
                    case "f":
                        (i || D) &&
                            (0, a.p)(P) &&
                            (n.preventDefault(), (0, s.fO)({ message: P, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== P.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            h.A.isSpeakingMessage(t, e) ? (0, u.pr)() : (0, u.kP)(O, P));
                        break;
                    case "t":
                        if (i && (0, c.D1)(O, P)) n.preventDefault(), (0, d.Tv)(O, P, "Message Shortcut");
                        else if (P.hasFlag(b.pr7.HAS_THREAD)) {
                            let e = g.A.getChannel(I.default.castMessageIdAsChannelId(P.id));
                            null != e && (i || D) && (n.preventDefault(), (0, d.JA)(e, D));
                        }
                        break;
                    case "enter":
                        R && (n.preventDefault(), (0, y.cl)(O, P));
                        break;
                    case "escape":
                        _.A.isEditing(O.id, P.id) ? l.A.endEditMessage(O.id) : x._.dispatch(b.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
