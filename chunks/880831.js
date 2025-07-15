(n.d(t, {
    Z: () => T,
    z: () => Z
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(108542),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(475179),
    h = n(904245),
    f = n(372900),
    m = n(905405),
    g = n(937889),
    b = n(739566),
    _ = n(267128),
    y = n(378233),
    C = n(419922),
    x = n(375954),
    v = n(699516),
    j = n(768581),
    O = n(70956),
    E = n(823379),
    S = n(981631),
    I = n(217702),
    P = n(955525);
let Z = 10 * O.Z.Millis.SECOND;
function N(e) {
    var t;
    let { message: n } = e,
        { isBlocked: l, isIgnored: o } = (0, c.cj)(
            [v.Z],
            () => ({
                isBlocked: v.Z.isBlockedForMessage(n),
                isIgnored: v.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        s = (0, b.Uj)(n),
        d = i.useContext(f.Z),
        [x, O] = i.useState(!1),
        E = (0, m.p)(),
        S = i.useCallback(
            (e) => {
                'A' !== e.target.nodeName &&
                    (p.Z.updateChatOpen(n.channel_id, !0),
                    h.Z.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0
                    }));
            },
            [n.channel_id, n.id]
        ),
        Z =
            null != n.content && '' !== n.content
                ? (0, g.ZP)(n, {
                      isInteracting: x,
                      shouldFilterKeywords: E
                  }).content
                : null,
        {
            contentPlaceholder: N,
            renderedContent: T,
            trailingIcon: A,
            leadingIcon: w
        } = (0, _.f)(n, Z, l, o, P.messageContent, {
            trailingIconClass: P.messageContentTrailingIcon,
            leadingIconClass: P.messageContentLeadingIcon,
            iconSize: I.WW
        }),
        R = (0, y.cv)(n),
        M =
            R.length > 0
                ? R.map((e) =>
                      (0, r.jsx)(
                          C.Z,
                          {
                              className: P.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: x
                          },
                          e.id
                      )
                  )
                : null;
    return (0, r.jsxs)(u.P3F, {
        className: P.toast,
        onMouseEnter: () => {
            O(!0);
        },
        onMouseLeave: () => {
            O(!1);
        },
        onClick: S,
        children: [
            (0, r.jsxs)('div', {
                className: a()(P.messageContentWrapper, { [P.mentioned]: n.mentioned }),
                children: [null != M ? null : w, null != (t = null != T ? T : M) ? t : (0, r.jsx)('span', { children: N }), null != M ? null : A]
            }),
            (0, r.jsx)('img', {
                alt: '',
                src:
                    (null == s ? void 0 : s.guildMemberAvatar) != null && null != d
                        ? (0, j.JM)({
                              guildId: d,
                              userId: n.author.id,
                              avatar: s.guildMemberAvatar
                          })
                        : n.author.getAvatarURL(d, 32),
                className: P.avatar
            })
        ]
    });
}
function T(e) {
    let { channelId: t, className: n } = e,
        [l, p] = i.useState(!1),
        { toastsHidden: h, toastMessages: f } = (function (e) {
            var t;
            let { channelId: n, isFrozen: r, count: l, lingerMs: a } = e,
                [o, s] = i.useState([]),
                [u, p] = i.useState(!1),
                h = i.useRef(null),
                f = i.useRef(void 0),
                m = i.useCallback(() => {
                    (s([]), p(!0));
                }, []);
            (i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: r, optimistic: i } = e;
                    t !== n || r.type === S.uaV.STAGE_START || r.type === S.uaV.STAGE_END || r.type === S.uaV.STAGE_TOPIC || r.type === S.uaV.STAGE_SPEAKER || r.type === S.uaV.STAGE_RAISE_HAND || i || (clearTimeout(f.current), (f.current = setTimeout(m, a)), s((e) => [...e, r.id]));
                }
                return (
                    d.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        d.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, m, l, a]),
                i.useEffect(
                    () => () => {
                        clearTimeout(f.current);
                    },
                    []
                ),
                i.useEffect(() => {
                    o.length > 3 &&
                        s((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [o]),
                r && null == h.current ? (h.current = o) : r || null == h.current || (h.current = null));
            let g = null != (t = h.current) ? t : o;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([x.Z], () => g.map((e) => x.Z.getMessage(n, e)), [n, g]).filter(E.lm)
            };
        })({
            channelId: t,
            isFrozen: l,
            count: 3,
            lingerMs: Z
        }),
        m = i.useRef({}),
        [g, b] = i.useState({}),
        _ = i.useCallback((e, t) => {
            null == t ? delete m.current[e] : (m.current[e] = t);
        }, []),
        y = i.useRef(g);
    (i.useLayoutEffect(() => {
        y.current = g;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let r of f) {
                var n;
                let i = null != (n = m.current[r.id]) ? n : 0;
                ((e[r.id] = t), (t += i + 8));
            }
            (0, o.isEqual)(e, y.current) || b(e);
        }, [f]));
    let C = f.map((e) => ({
            message: e,
            height: m.current[e.id],
            y: g[e.id]
        })),
        v = (0, u.Yzy)(C, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: t } = e;
                return {
                    opacity: 1,
                    translateY: t
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
                    pointerEvents: 'none'
                };
            }
        });
    return (0, r.jsx)(u.f6W, {
        theme: S.BRd.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(n, e),
                onMouseEnter: () => {
                    p(!0);
                },
                onMouseLeave: () => {
                    p(!1);
                },
                children: v((e, t) =>
                    (0, r.jsx)(s.animated.div, {
                        ref: (e) => _(t.message.id, null != e ? e.offsetHeight : null),
                        className: P.toastWrapper,
                        style: e,
                        children: (0, r.jsx)(N, { message: t.message })
                    })
                )
            })
    });
}
