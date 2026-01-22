n.d(t, {
    A: () => T,
});
var r = n(64700),
    l = n(843472),
    i = n(843626),
    a = n(294454),
    s = n(857071),
    o = n(517997),
    c = n(406704),
    u = n(747926),
    d = n(54570),
    f = n(8880),
    p = n(253932),
    h = n(961350),
    b = n(734057),
    g = n(580745),
    m = n(696451),
    A = n(834942),
    y = n(320501),
    O = n(576705),
    j = n(957565),
    v = n(203982),
    x = n(723702),
    E = n(661191),
    _ = n(697470),
    C = n(492841),
    S = n(707985),
    I = n(519222),
    N = n(652215);
let T = function (e, t, n) {
    let T = r.useRef(n);
    return (
        (T.current = n),
        r.useCallback(
            (n) => {
                if (!T.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    w = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    R = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    D = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    M = y.A.getMessage(t, e),
                    L = b.A.getChannel(t);
                if (null == M || null == L) return;
                let G = h.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        r &&
                            (O.A.can(N.xBc.MANAGE_MESSAGES, L) || M.canDeleteOwnMessage(G)) &&
                            (n.preventDefault(), (0, I.RC)(L, M, n));
                        break;
                    case "c":
                        ((0, x.isMac)() ? R : w) && j.p5 && (n.preventDefault(), (0, j.C)(M.content));
                        break;
                    case "e":
                        r && !L.isSystemDM() && (0, _.A)(M, G) && (n.preventDefault(), (0, I.u_)(L, M));
                        break;
                    case "p":
                        (r || D) && (0, C.A)(M, L) && (n.preventDefault(), (0, I.rS)(L, M, n));
                        break;
                    case "+":
                        (r || D) &&
                            (function (e) {
                                let t = null == e.guild_id || A.A.canChatInGuild(e.guild_id),
                                    n = p.jW.getSetting(),
                                    { disableReactionCreates: r } = (0, S.A)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && O.A.can(N.xBc.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && s.A.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.Ay.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.jr)(e),
                                    });
                                return !r && n;
                            })(L) &&
                            (n.preventDefault(),
                            v._.dispatchKeyed(N.zOV.TOGGLE_REACTION_POPOUT, M.id, {
                                emojiPicker: !0,
                            }));
                        break;
                    case "r":
                        (r || D) && (0, o.r)(L, M) && (n.preventDefault(), (0, I.$b)(L, M, n));
                        break;
                    case "f":
                        (r || D) &&
                            (0, i.p)(M) &&
                            (n.preventDefault(),
                            (0, a.fO)({
                                message: M,
                                source: "keyboard-shortcut",
                            }));
                        break;
                    case "s":
                        r &&
                            "" !== M.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            f.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(L, M));
                        break;
                    case "t":
                        if (r && (0, c.D1)(L, M)) n.preventDefault(), (0, u.Tv)(L, M, "Message Shortcut");
                        else if (M.hasFlag(N.pr7.HAS_THREAD)) {
                            let e = b.A.getChannel(E.default.castMessageIdAsChannelId(M.id));
                            null != e && (r || D) && (n.preventDefault(), (0, u.JA)(e, D));
                        }
                        break;
                    case "enter":
                        P && (n.preventDefault(), (0, I.cl)(L, M));
                        break;
                    case "escape":
                        g.A.isEditing(L.id, M.id) ? l.A.endEditMessage(L.id) : v._.dispatch(N.jej.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
