n.d(t, {
    U_: () => K,
    G8: () => z,
    I: () => k,
    H9: () => M,
    VL: () => G,
    T0: () => L,
    UY: () => H,
    yp: () => F,
    Yq: () => U,
    r4: () => w,
    Ck: () => J,
    Am: () => V,
    Jo: () => P,
    ri: () => B,
    m: () => R,
    Ge: () => D,
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
    u = n(609969),
    m = n(95561),
    h = n(387408),
    g = n(9842),
    A = n(652215),
    p = n(594061),
    x = n(734057),
    f = n(580745),
    E = n(232835),
    I = n(287809),
    C = n(174459),
    _ = n(625494),
    v = n(723702),
    N = n(427262),
    j = n(841549),
    T = n(439147),
    S = n(81437);
function y(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function b(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = I.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let s = `@${N.Ay.getUserTag(l, { decoration: "never" })}`,
                a = `<@${e}>`;
            _._.dispatchToLastSubscribed(A.jej.INSERT_TEXT, { plainText: s, rawText: a }), c.A.startTyping(t);
        },
        [e, t, n],
    );
}
function R(e, t, n, i) {
    let l = y("usernameProfile", n, i);
    return b(e.author.id, t.id, l);
}
function M(e, t, n, i) {
    let l = y("referencedUsernameProfile", n, i);
    return b(e?.author.id, t.id, l);
}
function L(e, t, n, i) {
    let l = y("interactionUsernameProfile", n, i);
    return b(e?.user.id, t.id, l);
}
function k(e, t, n, i) {
    let l = y("referencedUsernameProfile", n, i);
    return b(e, t.id, l);
}
function O(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function P(e, t) {
    return O(y("avatarProfile", e, t));
}
function D(e, t) {
    return O(y("referencedAvatarProfile", e, t));
}
function U(e, t) {
    return O(y("interactionAvatarProfile", e, t));
}
function G(e, t, s, o) {
    let { id: c } = t,
        { id: u, flags: m } = e,
        h = (0, a.Lt)(m, A.pr7.EPHEMERAL),
        g = (0, d.Us)();
    return l.useCallback(
        (e, t) => {
            if (h) return;
            if (!v.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            if (null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
            let l = x.A.getChannel(c),
                a = E.A.getMessage(c, u),
                d = f.A.isEditing(c, u);
            null == l ||
                null == a ||
                d ||
                (C.default.track(A.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: c,
                    location: "right_click",
                }),
                s({ contextMenu: !0 }),
                (0, r.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("59766"),
                            n.e("207322"),
                            n.e("622936"),
                            n.e("216947"),
                            n.e("301850"),
                            n.e("926787"),
                            n.e("571210"),
                            n.e("88342"),
                            n.e("311802"),
                            n.e("698965"),
                            n.e("235313"),
                            n.e("436564"),
                            n.e("603998"),
                            n.e("458273"),
                            n.e("820930"),
                            n.e("26001"),
                            n.e("414591"),
                            n.e("652111"),
                            n.e("457458"),
                            n.e("896804"),
                            n.e("295998"),
                            n.e("275133"),
                            n.e("480945"),
                            n.e("228850"),
                            n.e("78601"),
                            n.e("81189"),
                            n.e("200203"),
                            n.e("904774"),
                            n.e("249629"),
                            n.e("780407"),
                            n.e("678195"),
                            n.e("781949"),
                            n.e("321455"),
                            n.e("774021"),
                            n.e("944801"),
                            n.e("93907"),
                            n.e("720045"),
                            n.e("35846"),
                        ]).then(n.bind(n, 720882));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: a, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => s({ contextMenu: !1 }), context: g },
                ));
        },
        [h, c, u, s, g, o],
    );
}
function w(e, t) {
    return l.useCallback(
        (n) => {
            let i = I.default.getUser(e),
                l = x.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, j.wQ)(n, i, l));
        },
        [e, t],
    );
}
function H(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = I.default.getUser(e),
                s = x.A.getChannel(t);
            null != l &&
                null != s &&
                (i.stopPropagation(), (0, j.B8)(i, { user: l, channel: s, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function V(e, t) {
    return l.useCallback(
        (n) => {
            let i = I.default.getUser(e),
                l = x.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, j.pB)(n, i, l.guild_id));
        },
        [e, t],
    );
}
function B(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return l.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, T.A)(i, n));
        },
        [i, n],
    );
}
function F(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        s = n.author.id,
        a = `${t}:${s}`,
        r = l.useRef(i),
        [o, c] = l.useState(i);
    r.current = o || r.current;
    let d = l.useCallback(() => {
            (0, p.cE)(), o || (_._.dispatchKeyed(A.zOV.ANIMATE_CHAT_AVATAR, a, !0), c(!0));
        }, [o, a]),
        u = l.useCallback(() => {
            _._.dispatchKeyed(A.zOV.ANIMATE_CHAT_AVATAR, a, !1), c(!1);
        }, [a]);
    return { hasHovered: r.current, isHovered: o, handleMouseEnter: d, handleMouseLeave: u };
}
function z(e, t) {
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
function J(e, t, n) {
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
                              _._.dispatchKeyed(A.zOV.CLIP_SEEK_VIDEO, t.attachment_id, {
                                  timestampMs: (0, u.$)(t.timestamp),
                              });
                          }
                        : void 0,
            });
        }
        let a = e.messageReference?.message_id,
            r = null,
            c = null;
        if (t.state === g.a.LOADED) {
            let e = (0, h.A)(t.message);
            (r = e.attachments.length > 0 || e.embeds.length > 0 || e.stickerItems.length > 0 || e.stickers.length > 0),
                (c = e.content?.length ?? 0);
        }
        (0, m.zV)(A.HAw.REPLIED_MESSAGE_CLICKED, {
            guild_id: n.guild_id ?? void 0,
            channel_id: n.id,
            reply_message_id: e.id,
            replied_message_id: a,
            replied_message_is_loaded: t.state === g.a.LOADED,
            replied_message_has_media: r,
            replied_message_length: c,
        }),
            (null == l || (0, S.A)(l, s)) && s();
    }, [t, e, n]);
}
function K(e, t) {
    let n = y("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
