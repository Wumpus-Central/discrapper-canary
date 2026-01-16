n.d(t, {
    Z: () => N,
    z: () => P,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(81239),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(475179),
    f = n(904245),
    h = n(372900),
    g = n(937889),
    m = n(739566),
    b = n(267128),
    y = n(378233),
    v = n(419922),
    O = n(375954),
    j = n(699516),
    x = n(768581),
    C = n(70956),
    E = n(823379),
    S = n(981631),
    _ = n(217702),
    I = n(445303);
let P = 10 * C.Z.Millis.SECOND;
function Z(e) {
    var t;
    let { message: n } = e,
        { isBlocked: l, isIgnored: o } = (0, c.cj)(
            [j.Z],
            () => ({
                isBlocked: j.Z.isBlockedForMessage(n),
                isIgnored: j.Z.isIgnoredForMessage(n),
            }),
            [n],
        ),
        s = (0, m.Uj)(n),
        d = i.useContext(h.Z),
        [O, C] = i.useState(!1),
        E = i.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (p.Z.updateChatOpen(n.channel_id, !0),
                    f.Z.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0,
                    }));
            },
            [n.channel_id, n.id],
        ),
        S = null != n.content && "" !== n.content ? (0, g.ZP)(n, { isInteracting: O }).content : null,
        {
            contentPlaceholder: P,
            renderedContent: Z,
            trailingIcon: N,
            leadingIcon: T,
        } = (0, b.f)(n, S, l, o, I.messageContent, {
            trailingIconClass: I.messageContentTrailingIcon,
            leadingIconClass: I.messageContentLeadingIcon,
            iconSize: _.WW,
        }),
        A = (0, y.cv)(n),
        w =
            A.length > 0
                ? A.map((e) =>
                      (0, r.jsx)(
                          v.Z,
                          {
                              className: I.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: O,
                          },
                          e.id,
                      ),
                  )
                : null;
    return (0, r.jsxs)(u.P3F, {
        className: I.toast,
        onMouseEnter: () => {
            C(!0);
        },
        onMouseLeave: () => {
            C(!1);
        },
        onClick: E,
        children: [
            (0, r.jsxs)("div", {
                className: a()(I.messageContentWrapper, { [I.mentioned]: n.mentioned }),
                children: [
                    null != w ? null : T,
                    null != (t = null != Z ? Z : w) ? t : (0, r.jsx)("span", { children: P }),
                    null != w ? null : N,
                ],
            }),
            (0, r.jsx)("img", {
                alt: "",
                src:
                    (null == s ? void 0 : s.guildMemberAvatar) != null && null != d
                        ? (0, x.JM)({
                              guildId: d,
                              userId: n.author.id,
                              avatar: s.guildMemberAvatar,
                          })
                        : n.author.getAvatarURL(d, 32),
                className: I.avatar,
            }),
        ],
    });
}
function N(e) {
    let { channelId: t, className: n } = e,
        [l, p] = i.useState(!1),
        { toastsHidden: f, toastMessages: h } = (function (e) {
            var t;
            let { channelId: n, isFrozen: r, count: l, lingerMs: a } = e,
                [o, s] = i.useState([]),
                [u, p] = i.useState(!1),
                f = i.useRef(null),
                h = i.useRef(void 0),
                g = i.useCallback(() => {
                    s([]), p(!0);
                }, []);
            i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: r, optimistic: i } = e;
                    t !== n ||
                        r.type === S.uaV.STAGE_START ||
                        r.type === S.uaV.STAGE_END ||
                        r.type === S.uaV.STAGE_TOPIC ||
                        r.type === S.uaV.STAGE_SPEAKER ||
                        r.type === S.uaV.STAGE_RAISE_HAND ||
                        i ||
                        (clearTimeout(h.current), (h.current = setTimeout(g, a)), s((e) => [...e, r.id]));
                }
                return (
                    d.Z.subscribe("MESSAGE_CREATE", e),
                    () => {
                        d.Z.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, g, l, a]),
                i.useEffect(
                    () => () => {
                        clearTimeout(h.current);
                    },
                    [],
                ),
                i.useEffect(() => {
                    o.length > 3 &&
                        s((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [o]),
                r && null == f.current ? (f.current = o) : r || null == f.current || (f.current = null);
            let m = null != (t = f.current) ? t : o;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([O.Z], () => m.map((e) => O.Z.getMessage(n, e)), [n, m]).filter(E.lm),
            };
        })({
            channelId: t,
            isFrozen: l,
            count: 3,
            lingerMs: P,
        }),
        g = i.useRef({}),
        [m, b] = i.useState({}),
        y = i.useCallback((e, t) => {
            null == t ? delete g.current[e] : (g.current[e] = t);
        }, []),
        v = i.useRef(m);
    i.useLayoutEffect(() => {
        v.current = m;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let r of h) {
                var n;
                let i = null != (n = g.current[r.id]) ? n : 0;
                (e[r.id] = t), (t += i + 8);
            }
            (0, o.isEqual)(e, v.current) || b(e);
        }, [h]);
    let j = h.map((e) => ({
            message: e,
            height: g.current[e.id],
            y: m[e.id],
        })),
        x = (0, u.Yzy)(j, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: t } = e;
                return {
                    opacity: 1,
                    translateY: t,
                };
            },
            update: (e) => {
                let { y: t } = e;
                return { translateY: t };
            },
            leave: (e) => {
                let { height: t, y: n } = e;
                return {
                    opacity: 0,
                    translateY: f ? n : -(null != t ? t : 0) - 8,
                    pointerEvents: "none",
                };
            },
        });
    return (0, r.jsx)(u.f6W, {
        theme: S.BRd.DARK,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(n, e),
                onMouseEnter: () => {
                    p(!0);
                },
                onMouseLeave: () => {
                    p(!1);
                },
                children: x((e, t) =>
                    (0, r.jsx)(s.animated.div, {
                        ref: (e) => y(t.message.id, null != e ? e.offsetHeight : null),
                        className: I.toastWrapper,
                        style: e,
                        children: (0, r.jsx)(Z, { message: t.message }),
                    }),
                ),
            }),
    });
}
