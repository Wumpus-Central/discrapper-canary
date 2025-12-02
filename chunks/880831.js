n.d(t, {
    Z: () => N,
    z: () => Z,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(205120),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(475179),
    h = n(904245),
    f = n(372900),
    m = n(905405),
    g = n(937889),
    b = n(739566),
    y = n(267128),
    C = n(378233),
    v = n(419922),
    _ = n(375954),
    O = n(699516),
    x = n(768581),
    E = n(70956),
    j = n(823379),
    S = n(981631),
    P = n(217702),
    I = n(89019);
let Z = 10 * E.Z.Millis.SECOND;
function T(e) {
    var t;
    let { message: n } = e,
        { isBlocked: l, isIgnored: o } = (0, c.cj)(
            [O.Z],
            () => ({
                isBlocked: O.Z.isBlockedForMessage(n),
                isIgnored: O.Z.isIgnoredForMessage(n),
            }),
            [n],
        ),
        s = (0, b.Uj)(n),
        d = r.useContext(f.Z),
        [_, E] = r.useState(!1),
        j = (0, m.p)(),
        S = r.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (p.Z.updateChatOpen(n.channel_id, !0),
                    h.Z.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0,
                    }));
            },
            [n.channel_id, n.id],
        ),
        Z =
            null != n.content && "" !== n.content
                ? (0, g.ZP)(n, {
                      isInteracting: _,
                      shouldFilterKeywords: j,
                  }).content
                : null,
        {
            contentPlaceholder: T,
            renderedContent: N,
            trailingIcon: A,
            leadingIcon: w,
        } = (0, y.f)(n, Z, l, o, I.messageContent, {
            trailingIconClass: I.messageContentTrailingIcon,
            leadingIconClass: I.messageContentLeadingIcon,
            iconSize: P.WW,
        }),
        M = (0, C.cv)(n),
        R =
            M.length > 0
                ? M.map((e) =>
                      (0, i.jsx)(
                          v.Z,
                          {
                              className: I.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: _,
                          },
                          e.id,
                      ),
                  )
                : null;
    return (0, i.jsxs)(u.P3F, {
        className: I.toast,
        onMouseEnter: () => {
            E(!0);
        },
        onMouseLeave: () => {
            E(!1);
        },
        onClick: S,
        children: [
            (0, i.jsxs)("div", {
                className: a()(I.messageContentWrapper, { [I.mentioned]: n.mentioned }),
                children: [
                    null != R ? null : w,
                    null != (t = null != N ? N : R) ? t : (0, i.jsx)("span", { children: T }),
                    null != R ? null : A,
                ],
            }),
            (0, i.jsx)("img", {
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
        [l, p] = r.useState(!1),
        { toastsHidden: h, toastMessages: f } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: l, lingerMs: a } = e,
                [o, s] = r.useState([]),
                [u, p] = r.useState(!1),
                h = r.useRef(null),
                f = r.useRef(void 0),
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
                        (clearTimeout(f.current), (f.current = setTimeout(m, a)), s((e) => [...e, i.id]));
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
                        clearTimeout(f.current);
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
                i && null == h.current ? (h.current = o) : i || null == h.current || (h.current = null);
            let g = null != (t = h.current) ? t : o;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([_.Z], () => g.map((e) => _.Z.getMessage(n, e)), [n, g]).filter(j.lm),
            };
        })({
            channelId: t,
            isFrozen: l,
            count: 3,
            lingerMs: Z,
        }),
        m = r.useRef({}),
        [g, b] = r.useState({}),
        y = r.useCallback((e, t) => {
            null == t ? delete m.current[e] : (m.current[e] = t);
        }, []),
        C = r.useRef(g);
    r.useLayoutEffect(() => {
        C.current = g;
    }),
        r.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let i of f) {
                var n;
                let r = null != (n = m.current[i.id]) ? n : 0;
                (e[i.id] = t), (t += r + 8);
            }
            (0, o.isEqual)(e, C.current) || b(e);
        }, [f]);
    let v = f.map((e) => ({
            message: e,
            height: m.current[e.id],
            y: g[e.id],
        })),
        O = (0, u.Yzy)(v, {
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
                    translateY: h ? n : -(null != t ? t : 0) - 8,
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
                        ref: (e) => y(t.message.id, null != e ? e.offsetHeight : null),
                        className: I.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(T, { message: t.message }),
                    }),
                ),
            }),
    });
}
