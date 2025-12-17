n.d(t, {
    Z: () => T,
    z: () => I,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(236726),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(475179),
    f = n(904245),
    h = n(372900),
    m = n(937889),
    g = n(739566),
    b = n(267128),
    C = n(378233),
    y = n(419922),
    v = n(375954),
    x = n(699516),
    O = n(768581),
    E = n(70956),
    j = n(823379),
    S = n(981631),
    _ = n(217702),
    P = n(445303);
let I = 10 * E.Z.Millis.SECOND;
function Z(e) {
    var t;
    let { message: n } = e,
        { isBlocked: l, isIgnored: o } = (0, c.cj)(
            [x.Z],
            () => ({
                isBlocked: x.Z.isBlockedForMessage(n),
                isIgnored: x.Z.isIgnoredForMessage(n),
            }),
            [n],
        ),
        s = (0, g.Uj)(n),
        d = r.useContext(h.Z),
        [v, E] = r.useState(!1),
        j = r.useCallback(
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
        S = null != n.content && "" !== n.content ? (0, m.ZP)(n, { isInteracting: v }).content : null,
        {
            contentPlaceholder: I,
            renderedContent: Z,
            trailingIcon: T,
            leadingIcon: N,
        } = (0, b.f)(n, S, l, o, P.messageContent, {
            trailingIconClass: P.messageContentTrailingIcon,
            leadingIconClass: P.messageContentLeadingIcon,
            iconSize: _.WW,
        }),
        A = (0, C.cv)(n),
        w =
            A.length > 0
                ? A.map((e) =>
                      (0, i.jsx)(
                          y.Z,
                          {
                              className: P.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: v,
                          },
                          e.id,
                      ),
                  )
                : null;
    return (0, i.jsxs)(u.P3F, {
        className: P.toast,
        onMouseEnter: () => {
            E(!0);
        },
        onMouseLeave: () => {
            E(!1);
        },
        onClick: j,
        children: [
            (0, i.jsxs)("div", {
                className: a()(P.messageContentWrapper, { [P.mentioned]: n.mentioned }),
                children: [
                    null != w ? null : N,
                    null != (t = null != Z ? Z : w) ? t : (0, i.jsx)("span", { children: I }),
                    null != w ? null : T,
                ],
            }),
            (0, i.jsx)("img", {
                alt: "",
                src:
                    (null == s ? void 0 : s.guildMemberAvatar) != null && null != d
                        ? (0, O.JM)({
                              guildId: d,
                              userId: n.author.id,
                              avatar: s.guildMemberAvatar,
                          })
                        : n.author.getAvatarURL(d, 32),
                className: P.avatar,
            }),
        ],
    });
}
function T(e) {
    let { channelId: t, className: n } = e,
        [l, p] = r.useState(!1),
        { toastsHidden: f, toastMessages: h } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: l, lingerMs: a } = e,
                [o, s] = r.useState([]),
                [u, p] = r.useState(!1),
                f = r.useRef(null),
                h = r.useRef(void 0),
                m = r.useCallback(() => {
                    s([]), p(!0);
                }, []);
            r.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: i, optimistic: r } = e;
                    t !== n ||
                        i.type === S.uaV.STAGE_START ||
                        i.type === S.uaV.STAGE_END ||
                        i.type === S.uaV.STAGE_TOPIC ||
                        i.type === S.uaV.STAGE_SPEAKER ||
                        i.type === S.uaV.STAGE_RAISE_HAND ||
                        r ||
                        (clearTimeout(h.current), (h.current = setTimeout(m, a)), s((e) => [...e, i.id]));
                }
                return (
                    d.Z.subscribe("MESSAGE_CREATE", e),
                    () => {
                        d.Z.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, m, l, a]),
                r.useEffect(
                    () => () => {
                        clearTimeout(h.current);
                    },
                    [],
                ),
                r.useEffect(() => {
                    o.length > 3 &&
                        s((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [o]),
                i && null == f.current ? (f.current = o) : i || null == f.current || (f.current = null);
            let g = null != (t = f.current) ? t : o;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([v.Z], () => g.map((e) => v.Z.getMessage(n, e)), [n, g]).filter(j.lm),
            };
        })({
            channelId: t,
            isFrozen: l,
            count: 3,
            lingerMs: I,
        }),
        m = r.useRef({}),
        [g, b] = r.useState({}),
        C = r.useCallback((e, t) => {
            null == t ? delete m.current[e] : (m.current[e] = t);
        }, []),
        y = r.useRef(g);
    r.useLayoutEffect(() => {
        y.current = g;
    }),
        r.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let i of h) {
                var n;
                let r = null != (n = m.current[i.id]) ? n : 0;
                (e[i.id] = t), (t += r + 8);
            }
            (0, o.isEqual)(e, y.current) || b(e);
        }, [h]);
    let x = h.map((e) => ({
            message: e,
            height: m.current[e.id],
            y: g[e.id],
        })),
        O = (0, u.Yzy)(x, {
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
    return (0, i.jsx)(u.f6W, {
        theme: S.BRd.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: a()(n, e),
                onMouseEnter: () => {
                    p(!0);
                },
                onMouseLeave: () => {
                    p(!1);
                },
                children: O((e, t) =>
                    (0, i.jsx)(s.animated.div, {
                        ref: (e) => C(t.message.id, null != e ? e.offsetHeight : null),
                        className: P.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(Z, { message: t.message }),
                    }),
                ),
            }),
    });
}
