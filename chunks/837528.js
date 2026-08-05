n.d(t, {
    U_: () => J,
    G8: () => F,
    I: () => M,
    H9: () => R,
    VL: () => U,
    T0: () => L,
    UY: () => w,
    yp: () => B,
    Yq: () => D,
    r4: () => G,
    Ck: () => z,
    Am: () => H,
    Jo: () => O,
    ri: () => V,
    m: () => b,
    Ge: () => P,
}),
    n(938796);
var i = n(477900),
    l = n(582128),
    s = n(621466),
    a = n(665260),
    r = n(442433),
    o = n(148494),
    c = n(414798),
    d = n(267102),
    u = n(95561),
    m = n(387408),
    h = n(9842),
    g = n(652215),
    p = n(594061),
    A = n(734057),
    x = n(580745),
    f = n(232835),
    E = n(287809),
    _ = n(174459),
    C = n(625494),
    I = n(723702),
    v = n(427262),
    N = n(841549),
    j = n(439147),
    T = n(81437);
function S(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function y(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = E.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let s = `@${v.Ay.getUserTag(l, { decoration: "never" })}`,
                a = `<@${e}>`;
            C._.dispatchToLastSubscribed(g.jej.INSERT_TEXT, { plainText: s, rawText: a }), c.A.startTyping(t);
        },
        [e, t, n],
    );
}
function b(e, t, n, i) {
    let l = S("usernameProfile", n, i);
    return y(e.author.id, t.id, l);
}
function R(e, t, n, i) {
    let l = S("referencedUsernameProfile", n, i);
    return y(e?.author.id, t.id, l);
}
function L(e, t, n, i) {
    let l = S("interactionUsernameProfile", n, i);
    return y(e?.user.id, t.id, l);
}
function M(e, t, n, i) {
    let l = S("referencedUsernameProfile", n, i);
    return y(e, t.id, l);
}
function k(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function O(e, t) {
    return k(S("avatarProfile", e, t));
}
function P(e, t) {
    return k(S("referencedAvatarProfile", e, t));
}
function D(e, t) {
    return k(S("interactionAvatarProfile", e, t));
}
function U(e, t, s, o) {
    let { id: c } = t,
        { id: u, flags: m } = e,
        h = (0, a.Lt)(m, g.pr7.EPHEMERAL),
        p = (0, d.Us)();
    return l.useCallback(
        (e, t) => {
            if (h) return;
            if (!I.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            if (null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
            let l = A.A.getChannel(c),
                a = f.A.getMessage(c, u),
                d = x.A.isEditing(c, u);
            null == l ||
                null == a ||
                d ||
                (_.default.track(g.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: c,
                    location: "right_click",
                }),
                s({ contextMenu: !0 }),
                (0, r.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("41295"),
                            n.e("40351"),
                            n.e("76279"),
                            n.e("45309"),
                            n.e("14767"),
                            n.e("34552"),
                            n.e("71210"),
                            n.e("88342"),
                            n.e("89421"),
                            n.e("98965"),
                            n.e("35313"),
                            n.e("36564"),
                            n.e("3998"),
                            n.e("95340"),
                            n.e("58273"),
                            n.e("20930"),
                            n.e("26001"),
                            n.e("14591"),
                            n.e("52111"),
                            n.e("57458"),
                            n.e("96804"),
                            n.e("75133"),
                            n.e("80945"),
                            n.e("28850"),
                            n.e("95998"),
                            n.e("78195"),
                            n.e("81189"),
                            n.e("203"),
                            n.e("4774"),
                            n.e("49629"),
                            n.e("78601"),
                            n.e("80407"),
                            n.e("81949"),
                            n.e("21455"),
                            n.e("74021"),
                            n.e("44801"),
                            n.e("93907"),
                            n.e("20045"),
                            n.e("35846"),
                        ]).then(n.bind(n, 720882));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: a, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => s({ contextMenu: !1 }), context: p },
                ));
        },
        [h, c, u, s, p, o],
    );
}
function G(e, t) {
    return l.useCallback(
        (n) => {
            let i = E.default.getUser(e),
                l = A.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, N.wQ)(n, i, l));
        },
        [e, t],
    );
}
function w(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = E.default.getUser(e),
                s = A.A.getChannel(t);
            null != l &&
                null != s &&
                (i.stopPropagation(), (0, N.B8)(i, { user: l, channel: s, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function H(e, t) {
    return l.useCallback(
        (n) => {
            let i = E.default.getUser(e),
                l = A.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, N.pB)(n, i, l.guild_id));
        },
        [e, t],
    );
}
function V(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return l.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, j.A)(i, n));
        },
        [i, n],
    );
}
function B(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        s = n.author.id,
        a = `${t}:${s}`,
        r = l.useRef(i),
        [o, c] = l.useState(i);
    r.current = o || r.current;
    let d = l.useCallback(() => {
            (0, p.cE)(), o || (C._.dispatchKeyed(g.zOV.ANIMATE_CHAT_AVATAR, a, !0), c(!0));
        }, [o, a]),
        u = l.useCallback(() => {
            C._.dispatchKeyed(g.zOV.ANIMATE_CHAT_AVATAR, a, !1), c(!1);
        }, [a]);
    return { hasHovered: r.current, isHovered: o, handleMouseEnter: d, handleMouseLeave: u };
}
function F(e, t) {
    let [n, i] = l.useState(!1),
        [a, r] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, s.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (r(!0), i(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: l.useCallback(
            (e) => {
                let n = (0, s.BF)(e)?.activeElement ?? null;
                (e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: a,
    };
}
function z(e, t, n) {
    return l.useCallback(() => {
        let { messageReference: i } = e,
            l = t.message;
        function s() {
            let t = e.mediaMention;
            o.A.jumpToMessage({
                channelId: i.channel_id,
                messageId: i.message_id,
                flash: !0,
                returnMessageId: e.id,
                onJumpComplete:
                    null != t
                        ? () => {
                              C._.dispatchKeyed(g.zOV.CLIP_SEEK_VIDEO, t.attachment_id, { timestampMs: t.timestamp });
                          }
                        : void 0,
            });
        }
        let a = e.messageReference?.message_id,
            r = null,
            c = null;
        if (t.state === h.a.LOADED) {
            let e = (0, m.A)(t.message);
            (r = e.attachments.length > 0 || e.embeds.length > 0 || e.stickerItems.length > 0 || e.stickers.length > 0),
                (c = e.content?.length ?? 0);
        }
        (0, u.zV)(g.HAw.REPLIED_MESSAGE_CLICKED, {
            guild_id: n.guild_id ?? void 0,
            channel_id: n.id,
            reply_message_id: e.id,
            replied_message_id: a,
            replied_message_is_loaded: t.state === h.a.LOADED,
            replied_message_has_media: r,
            replied_message_length: c,
        }),
            (null == l || (0, T.A)(l, s)) && s();
    }, [t, e, n]);
}
function J(e, t) {
    let n = S("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
