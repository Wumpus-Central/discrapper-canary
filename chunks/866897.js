n.d(t, { A: () => R });
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
    p = n(734057),
    g = n(580745),
    f = n(834942),
    _ = n(320501),
    E = n(576705),
    C = n(957565),
    x = n(203982),
    S = n(723702),
    T = n(661191),
    I = n(697470),
    N = n(492841),
    v = n(707985),
    y = n(519222),
    b = n(652215);
let R = function (e, t, n) {
    let R = i.useRef(n);
    return (
        (R.current = n),
        i.useCallback(
            (n) => {
                if (!R.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    j = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    M = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    D = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    O = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    L = _.A.getMessage(t, e),
                    P = p.A.getChannel(t);
                if (null == L || null == P) return;
                let w = A.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (E.A.can(b.xBc.MANAGE_MESSAGES, P) || L.canDeleteOwnMessage(w)) &&
                            (n.preventDefault(), (0, y.RC)(P, L, n));
                        break;
                    case "c":
                        ((0, S.isMac)() ? D : M) && C.p5 && (n.preventDefault(), (0, C.C)(L.content));
                        break;
                    case "e":
                        i && !P.isSystemDM() && (0, I.A)(L, w) && (n.preventDefault(), (0, y.u_)(P, L));
                        break;
                    case "p":
                        (i || O) && (0, N.A)(L, P) && (n.preventDefault(), (0, y.rS)(P, L, n));
                        break;
                    case "+":
                        (i || O) &&
                            (function (e) {
                                let t = null == e.guild_id || f.A.canChatInGuild(e.guild_id),
                                    n = m.jW.getSetting(),
                                    { disableReactionCreates: i } = (0, v.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && E.A.can(b.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && r.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.jr)(e),
                                    });
                                return !i && n;
                            })(P) &&
                            (n.preventDefault(),
                            x._.dispatchKeyed(b.zOV.TOGGLE_REACTION_POPOUT, L.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || O) && (0, o.r)(P, L) && (n.preventDefault(), (0, y.$b)(P, L, n));
                        break;
                    case "f":
                        (i || O) &&
                            (0, a.p)(L) &&
                            (n.preventDefault(), (0, s.fO)({ message: L, source: "keyboard-shortcut" }));
                        break;
                    case "s":
                        i &&
                            "" !== L.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            h.A.isSpeakingMessage(t, e) ? (0, u.pr)() : (0, u.kP)(P, L));
                        break;
                    case "t":
                        if (i && (0, c.D1)(P, L)) n.preventDefault(), (0, d.Tv)(P, L, "Message Shortcut");
                        else if (L.hasFlag(b.pr7.HAS_THREAD)) {
                            let e = p.A.getChannel(T.default.castMessageIdAsChannelId(L.id));
                            null != e && (i || O) && (n.preventDefault(), (0, d.JA)(e, O));
                        }
                        break;
                    case "enter":
                        j && (n.preventDefault(), (0, y.cl)(P, L));
                        break;
                    case "escape":
                        g.A.isEditing(P.id, L.id) ? l.A.endEditMessage(P.id) : x._.dispatch(b.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
