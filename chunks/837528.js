(n.d(t, {
    U_: () => K,
    G8: () => z,
    I: () => M,
    H9: () => R,
    VL: () => G,
    T0: () => L,
    UY: () => B,
    yp: () => F,
    Yq: () => U,
    r4: () => w,
    Ck: () => Y,
    Am: () => V,
    Jo: () => D,
    ri: () => H,
    m: () => k,
    Ge: () => O,
}),
    n(938796));
var i = n(477900),
    l = n(582128),
    s = n(621466),
    r = n(665260),
    a = n(442433),
    o = n(148494),
    d = n(414798),
    c = n(267102),
    u = n(609969),
    m = n(95561),
    h = n(387408),
    g = n(9842),
    p = n(652215),
    A = n(594061),
    x = n(734057),
    f = n(580745),
    I = n(232835),
    E = n(287809),
    v = n(174459),
    C = n(625494),
    _ = n(723702),
    j = n(427262),
    N = n(841549),
    y = n(439147),
    T = n(81437);
function S(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function b(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = E.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let s = `@${j.Ay.getUserTag(l, { decoration: "never" })}`,
                r = `<@${e}>`;
            (C._.dispatchToLastSubscribed(p.jej.INSERT_TEXT, { plainText: s, rawText: r }), d.A.startTyping(t));
        },
        [e, t, n],
    );
}
function k(e, t, n, i) {
    let l = S("usernameProfile", n, i);
    return b(e.author.id, t.id, l);
}
function R(e, t, n, i) {
    let l = S("referencedUsernameProfile", n, i);
    return b(e?.author.id, t.id, l);
}
function L(e, t, n, i) {
    let l = S("interactionUsernameProfile", n, i);
    return b(e?.user.id, t.id, l);
}
function M(e, t, n, i) {
    let l = S("referencedUsernameProfile", n, i);
    return b(e, t.id, l);
}
function P(e) {
    return l.useCallback(
        (t) => {
            (t.preventDefault(), t.stopPropagation(), e());
        },
        [e],
    );
}
function D(e, t) {
    return P(S("avatarProfile", e, t));
}
function O(e, t) {
    return P(S("referencedAvatarProfile", e, t));
}
function U(e, t) {
    return P(S("interactionAvatarProfile", e, t));
}
function G(e, t, s, o) {
    let { id: d } = t,
        { id: u, flags: m } = e,
        h = (0, r.Lt)(m, p.pr7.EPHEMERAL),
        g = (0, c.Us)();
    return l.useCallback(
        (e, t) => {
            if (h) return;
            if (!_.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            if (null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
            let l = x.A.getChannel(d),
                r = I.A.getMessage(d, u),
                c = f.A.isEditing(d, u);
            null == l ||
                null == r ||
                c ||
                (v.default.track(p.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                s({ contextMenu: !0 }),
                (0, a.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("403382"),
                            n.e("597981"),
                            n.e("622936"),
                            n.e("216947"),
                            n.e("301850"),
                            n.e("587308"),
                            n.e("903758"),
                            n.e("76283"),
                            n.e("517450"),
                            n.e("56886"),
                            n.e("417867"),
                            n.e("520689"),
                            n.e("825770"),
                            n.e("811198"),
                            n.e("870809"),
                            n.e("927532"),
                            n.e("792513"),
                            n.e("292699"),
                            n.e("926787"),
                            n.e("571210"),
                            n.e("88342"),
                            n.e("311802"),
                            n.e("698965"),
                            n.e("235313"),
                            n.e("436564"),
                            n.e("603998"),
                            n.e("96680"),
                            n.e("868214"),
                            n.e("661814"),
                            n.e("612287"),
                            n.e("588070"),
                            n.e("793438"),
                            n.e("691671"),
                            n.e("856753"),
                            n.e("305557"),
                            n.e("36227"),
                            n.e("322422"),
                            n.e("92295"),
                            n.e("458273"),
                            n.e("278045"),
                            n.e("26001"),
                            n.e("414591"),
                            n.e("652111"),
                            n.e("411353"),
                            n.e("242204"),
                            n.e("896804"),
                            n.e("295998"),
                            n.e("275133"),
                            n.e("480945"),
                            n.e("678195"),
                            n.e("228850"),
                            n.e("527687"),
                            n.e("904774"),
                            n.e("78601"),
                            n.e("81189"),
                            n.e("200203"),
                            n.e("249629"),
                            n.e("780407"),
                            n.e("781949"),
                            n.e("283300"),
                            n.e("774021"),
                            n.e("993616"),
                            n.e("886456"),
                            n.e("706809"),
                            n.e("707319"),
                            n.e("710014"),
                            n.e("944801"),
                            n.e("549333"),
                            n.e("146149"),
                            n.e("979783"),
                            n.e("549490"),
                            n.e("270632"),
                            n.e("470556"),
                            n.e("505340"),
                            n.e("911802"),
                            n.e("517192"),
                            n.e("759965"),
                            n.e("539735"),
                            n.e("159617"),
                            n.e("295841"),
                            n.e("553203"),
                            n.e("93907"),
                            n.e("660249"),
                            n.e("733416"),
                            n.e("436509"),
                            n.e("440142"),
                            n.e("697116"),
                            n.e("733314"),
                            n.e("948414"),
                            n.e("870272"),
                            n.e("569666"),
                            n.e("812663"),
                            n.e("35846"),
                        ]).then(n.bind(n, 674447));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: r, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => s({ contextMenu: !1 }), context: g },
                ));
        },
        [h, d, u, s, g, o],
    );
}
function w(e, t) {
    return l.useCallback(
        (n) => {
            let i = E.default.getUser(e),
                l = x.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, N.wQ)(n, i, l));
        },
        [e, t],
    );
}
function B(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = E.default.getUser(e),
                s = x.A.getChannel(t);
            null != l &&
                null != s &&
                (i.stopPropagation(), (0, N.B8)(i, { user: l, channel: s, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function V(e, t) {
    return l.useCallback(
        (n) => {
            let i = E.default.getUser(e),
                l = x.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, N.pB)(n, i, l.guild_id));
        },
        [e, t],
    );
}
function H(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return l.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, y.A)(i, n));
        },
        [i, n],
    );
}
function F(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        s = n.author.id,
        r = `${t}:${s}`,
        a = l.useRef(i),
        [o, d] = l.useState(i);
    a.current = o || a.current;
    let c = l.useCallback(() => {
            ((0, A.cE)(), o || (C._.dispatchKeyed(p.zOV.ANIMATE_CHAT_AVATAR, r, !0), d(!0)));
        }, [o, r]),
        u = l.useCallback(() => {
            (C._.dispatchKeyed(p.zOV.ANIMATE_CHAT_AVATAR, r, !1), d(!1));
        }, [r]);
    return { hasHovered: a.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: u };
}
function z(e, t) {
    let [n, i] = l.useState(!1),
        [r, a] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, s.BF)(t)?.activeElement ?? null;
                ((t.target === t.currentTarget || t.currentTarget.contains(n)) && (a(!0), i(!0)), null != e && e(t));
            },
            [e],
        ),
        handleBlur: l.useCallback(
            (e) => {
                let n = (0, s.BF)(e)?.activeElement ?? null;
                ((e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e));
            },
            [t],
        ),
        isFocused: n,
        hasFocused: r,
    };
}
function Y(e, t, n) {
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
                              C._.dispatchKeyed(p.zOV.CLIP_SEEK_VIDEO, t.attachment_id, {
                                  timestampMs: (0, u.$)(t.timestamp),
                              });
                          }
                        : void 0,
            });
        }
        let r = e.messageReference?.message_id,
            a = null,
            d = null;
        if (t.state === g.a.LOADED) {
            let e = (0, h.A)(t.message);
            ((a =
                e.attachments.length > 0 || e.embeds.length > 0 || e.stickerItems.length > 0 || e.stickers.length > 0),
                (d = e.content?.length ?? 0));
        }
        ((0, m.zV)(p.HAw.REPLIED_MESSAGE_CLICKED, {
            guild_id: n.guild_id ?? void 0,
            channel_id: n.id,
            reply_message_id: e.id,
            replied_message_id: r,
            replied_message_is_loaded: t.state === g.a.LOADED,
            replied_message_has_media: a,
            replied_message_length: d,
        }),
            (null == l || (0, T.A)(l, s)) && s());
    }, [t, e, n]);
}
function K(e, t) {
    let n = S("interactionData", e, t);
    return l.useCallback(
        (e) => {
            (e.preventDefault(), e.stopPropagation(), n());
        },
        [n],
    );
}
