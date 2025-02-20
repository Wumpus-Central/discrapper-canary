n.d(t, {
    Z: () => T,
    z: () => S
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(642128),
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
    C = n(378233),
    v = n(419922),
    y = n(375954),
    x = n(699516),
    j = n(768581),
    O = n(70956),
    N = n(823379),
    E = n(981631),
    P = n(217702),
    I = n(238270);
let S = 10 * O.Z.Millis.SECOND;
function Z(e) {
    var t;
    let { message: n } = e,
        { isBlocked: l, isIgnored: a } = (0, c.cj)(
            [x.Z],
            () => ({
                isBlocked: x.Z.isBlockedForMessage(n),
                isIgnored: x.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        s = (0, b.Uj)(n),
        d = i.useContext(f.Z),
        [y, O] = i.useState(!1),
        N = (0, m.p)(),
        E = i.useCallback(
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
        S =
            null != n.content && '' !== n.content
                ? (0, g.ZP)(n, {
                      isInteracting: y,
                      shouldFilterKeywords: N
                  }).content
                : null,
        {
            contentPlaceholder: Z,
            renderedContent: T,
            trailingIcon: A,
            leadingIcon: w
        } = (0, _.f)(n, S, l, a, I.messageContent, {
            trailingIconClass: I.messageContentTrailingIcon,
            leadingIconClass: I.messageContentLeadingIcon,
            iconSize: P.WW
        }),
        R = (0, C.cv)(n),
        k =
            R.length > 0
                ? R.map((e) =>
                      (0, r.jsx)(
                          v.ZP,
                          {
                              className: I.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: y
                          },
                          e.id
                      )
                  )
                : null;
    return (0, r.jsxs)(u.P3F, {
        className: I.toast,
        onMouseEnter: () => {
            O(!0);
        },
        onMouseLeave: () => {
            O(!1);
        },
        onClick: E,
        children: [
            (0, r.jsxs)('div', {
                className: o()(I.messageContentWrapper, { [I.mentioned]: n.mentioned }),
                children: [null != k ? null : w, null !== (t = null != T ? T : k) && void 0 !== t ? t : (0, r.jsx)('span', { children: Z }), null != k ? null : A]
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
                className: I.avatar
            })
        ]
    });
}
function T(e) {
    let { channelId: t, className: n } = e,
        [l, p] = i.useState(!1),
        { toastsHidden: h, toastMessages: f } = (function (e) {
            var t;
            let { channelId: n, isFrozen: r, count: l, lingerMs: o } = e,
                [a, s] = i.useState([]),
                [u, p] = i.useState(!1),
                h = i.useRef(null),
                f = i.useRef(),
                m = i.useCallback(() => {
                    s([]), p(!0);
                }, []);
            i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: r, optimistic: i } = e;
                    t === n && r.type !== E.uaV.STAGE_START && r.type !== E.uaV.STAGE_END && r.type !== E.uaV.STAGE_TOPIC && r.type !== E.uaV.STAGE_SPEAKER && r.type !== E.uaV.STAGE_RAISE_HAND && !i && (clearTimeout(f.current), (f.current = setTimeout(m, o)), s((e) => [...e, r.id]));
                }
                return (
                    d.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        d.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, m, l, o]),
                i.useEffect(
                    () => () => {
                        clearTimeout(f.current);
                    },
                    []
                ),
                i.useEffect(() => {
                    a.length > 3 &&
                        s((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [a]),
                r && null == h.current ? (h.current = a) : r || null == h.current || (h.current = null);
            let g = null !== (t = h.current) && void 0 !== t ? t : a;
            return {
                toastsHidden: u,
                toastMessages: (0, c.Wu)([y.Z], () => g.map((e) => y.Z.getMessage(n, e)), [n, g]).filter(N.lm)
            };
        })({
            channelId: t,
            isFrozen: l,
            count: 3,
            lingerMs: S
        }),
        m = i.useRef({}),
        [g, b] = i.useState({}),
        _ = i.useCallback((e, t) => {
            null == t ? delete m.current[e] : (m.current[e] = t);
        }, []),
        C = i.useRef(g);
    i.useLayoutEffect(() => {
        C.current = g;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let r of f) {
                var n;
                let i = null !== (n = m.current[r.id]) && void 0 !== n ? n : 0;
                (e[r.id] = t), (t += i + 8);
            }
            (0, a.isEqual)(e, C.current) || b(e);
        }, [f]);
    let v = f.map((e) => ({
            message: e,
            height: m.current[e.id],
            y: g[e.id]
        })),
        x = (0, u.Yzy)(v, {
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
        theme: E.BRd.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                className: o()(n, e),
                onMouseEnter: () => {
                    p(!0);
                },
                onMouseLeave: () => {
                    p(!1);
                },
                children: x((e, t) =>
                    (0, r.jsx)(s.animated.div, {
                        ref: (e) => _(t.message.id, null != e ? e.offsetHeight : null),
                        className: I.toastWrapper,
                        style: e,
                        children: (0, r.jsx)(Z, { message: t.message })
                    })
                )
            })
    });
}
