n.d(t, {
    A: () => N,
});
var r = n(64700),
    l = n(843472),
    i = n(843626),
    s = n(294454),
    a = n(857071),
    o = n(517997),
    c = n(406704),
    u = n(747926),
    d = n(54570),
    h = n(8880),
    p = n(253932),
    g = n(961350),
    f = n(734057),
    m = n(580745),
    b = n(834942),
    A = n(320501),
    y = n(576705),
    O = n(957565),
    _ = n(203982),
    j = n(723702),
    x = n(661191),
    v = n(697470),
    E = n(492841),
    C = n(707985),
    S = n(519222),
    I = n(652215);
let N = function (e, t, n) {
    let N = r.useRef(n);
    return (
        (N.current = n),
        r.useCallback(
            (n) => {
                if (!N.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    T = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    P = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    D = A.A.getMessage(t, e),
                    L = f.A.getChannel(t);
                if (null == D || null == L) return;
                let M = g.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        r &&
                            (y.A.can(I.xBc.MANAGE_MESSAGES, L) || D.canDeleteOwnMessage(M)) &&
                            (n.preventDefault(), (0, S.RC)(L, D, n));
                        break;
                    case "c":
                        ((0, j.isMac)() ? w : P) && O.p5 && (n.preventDefault(), (0, O.C)(D.content));
                        break;
                    case "e":
                        r && !L.isSystemDM() && (0, v.A)(D, M) && (n.preventDefault(), (0, S.u_)(L, D));
                        break;
                    case "p":
                        (r || R) && (0, E.A)(D, L) && (n.preventDefault(), (0, S.rS)(L, D, n));
                        break;
                    case "+":
                        (r || R) &&
                            (function (e) {
                                let t = null == e.guild_id || b.A.canChatInGuild(e.guild_id),
                                    n = p.jW.getSetting(),
                                    { disableReactionCreates: r } = (0, C.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && y.A.can(I.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && a.A.isLurking(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.jr)(e),
                                    });
                                return !r && n;
                            })(L) &&
                            (n.preventDefault(),
                            _._.dispatchKeyed(I.zOV.TOGGLE_REACTION_POPOUT, D.id, {
                                emojiPicker: !0,
                            }));
                        break;
                    case "r":
                        (r || R) && (0, o.r)(L, D) && (n.preventDefault(), (0, S.$b)(L, D, n));
                        break;
                    case "f":
                        (r || R) &&
                            (0, i.p)(D) &&
                            (n.preventDefault(),
                            (0, s.fO)({
                                message: D,
                                source: "keyboard-shortcut",
                            }));
                        break;
                    case "s":
                        r &&
                            "" !== D.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            h.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(L, D));
                        break;
                    case "t":
                        if (r && (0, c.D1)(L, D)) n.preventDefault(), (0, u.Tv)(L, D, "Message Shortcut");
                        else if (D.hasFlag(I.pr7.HAS_THREAD)) {
                            let e = f.A.getChannel(x.default.castMessageIdAsChannelId(D.id));
                            null != e && (r || R) && (n.preventDefault(), (0, u.JA)(e, R));
                        }
                        break;
                    case "enter":
                        T && (n.preventDefault(), (0, S.cl)(L, D));
                        break;
                    case "escape":
                        m.A.isEditing(L.id, D.id) ? l.A.endEditMessage(L.id) : _._.dispatch(I.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
