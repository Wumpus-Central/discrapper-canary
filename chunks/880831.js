n.d(t, {
    Z: () => P,
    z: () => y
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(642128),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(475179),
    p = n(904245),
    m = n(372900),
    f = n(905405),
    g = n(937889),
    _ = n(739566),
    C = n(267128),
    x = n(378233),
    v = n(419922),
    E = n(375954),
    I = n(699516),
    b = n(768581),
    Z = n(70956),
    N = n(823379),
    T = n(981631),
    S = n(217702),
    j = n(644921);
let y = 10 * Z.Z.Millis.SECOND;
function A(e) {
    var t;
    let { message: n } = e,
        { isBlocked: a, isIgnored: s } = (0, c.cj)(
            [I.Z],
            () => ({
                isBlocked: I.Z.isBlockedForMessage(n),
                isIgnored: I.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        o = (0, _.Uj)(n),
        u = l.useContext(m.Z),
        [E, Z] = l.useState(!1),
        N = (0, f.p)(),
        T = l.useCallback(
            (e) => {
                'A' !== e.target.nodeName &&
                    (h.Z.updateChatOpen(n.channel_id, !0),
                    p.Z.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0
                    }));
            },
            [n.channel_id, n.id]
        ),
        y =
            null != n.content && '' !== n.content
                ? (0, g.ZP)(n, {
                      isInteracting: E,
                      shouldFilterKeywords: N
                  }).content
                : null,
        {
            contentPlaceholder: A,
            renderedContent: P,
            trailingIcon: R,
            leadingIcon: M
        } = (0, C.f)(n, y, a, s, j.messageContent, {
            trailingIconClass: j.messageContentTrailingIcon,
            leadingIconClass: j.messageContentLeadingIcon,
            iconSize: S.WW
        }),
        L = (0, x.cv)(n),
        k =
            L.length > 0
                ? L.map((e) =>
                      (0, i.jsx)(
                          v.ZP,
                          {
                              className: j.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: E
                          },
                          e.id
                      )
                  )
                : null;
    return (0, i.jsxs)(d.P3F, {
        className: j.toast,
        onMouseEnter: () => {
            Z(!0);
        },
        onMouseLeave: () => {
            Z(!1);
        },
        onClick: T,
        children: [
            (0, i.jsxs)('div', {
                className: r()(j.messageContentWrapper, { [j.mentioned]: n.mentioned }),
                children: [null != k ? null : M, null !== (t = null != P ? P : k) && void 0 !== t ? t : (0, i.jsx)('span', { children: A }), null != k ? null : R]
            }),
            (0, i.jsx)('img', {
                alt: '',
                src:
                    (null == o ? void 0 : o.guildMemberAvatar) != null && null != u
                        ? (0, b.JM)({
                              guildId: u,
                              userId: n.author.id,
                              avatar: o.guildMemberAvatar
                          })
                        : n.author.getAvatarURL(u, 32),
                className: j.avatar
            })
        ]
    });
}
function P(e) {
    let { channelId: t, className: n } = e,
        [a, h] = l.useState(!1),
        { toastsHidden: p, toastMessages: m } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: a, lingerMs: r } = e,
                [s, o] = l.useState([]),
                [d, h] = l.useState(!1),
                p = l.useRef(null),
                m = l.useRef(),
                f = l.useCallback(() => {
                    o([]), h(!0);
                }, []);
            l.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: i } = e;
                    t === n && i.type !== T.uaV.STAGE_START && i.type !== T.uaV.STAGE_END && i.type !== T.uaV.STAGE_TOPIC && i.type !== T.uaV.STAGE_SPEAKER && i.type !== T.uaV.STAGE_RAISE_HAND && (clearTimeout(m.current), (m.current = setTimeout(f, r)), o((e) => [...e, i.id]));
                }
                return (
                    u.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        u.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, f, a, r]),
                l.useEffect(
                    () => () => {
                        clearTimeout(m.current);
                    },
                    []
                ),
                l.useEffect(() => {
                    s.length > 3 &&
                        o((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [s]),
                i && null == p.current ? (p.current = s) : i || null == p.current || (p.current = null);
            let g = null !== (t = p.current) && void 0 !== t ? t : s;
            return {
                toastsHidden: d,
                toastMessages: (0, c.Wu)([E.Z], () => g.map((e) => E.Z.getMessage(n, e)), [n, g]).filter(N.lm)
            };
        })({
            channelId: t,
            isFrozen: a,
            count: 3,
            lingerMs: y
        }),
        f = l.useRef({}),
        [g, _] = l.useState({}),
        C = l.useCallback((e, t) => {
            null == t ? delete f.current[e] : (f.current[e] = t);
        }, []),
        x = l.useRef(g);
    l.useLayoutEffect(() => {
        x.current = g;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let i of m) {
                var n;
                let l = null !== (n = f.current[i.id]) && void 0 !== n ? n : 0;
                (e[i.id] = t), (t += l + 8);
            }
            (0, s.isEqual)(e, x.current) || _(e);
        }, [m]);
    let v = m.map((e) => ({
            message: e,
            height: f.current[e.id],
            y: g[e.id]
        })),
        I = (0, d.Yzy)(v, {
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
                    translateY: p ? n : -(null != t ? t : 0) - 8,
                    pointerEvents: 'none'
                };
            }
        });
    return (0, i.jsx)(d.f6W, {
        theme: T.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: r()(n, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: I((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => C(t.message.id, null != e ? e.offsetHeight : null),
                        className: j.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(A, { message: t.message })
                    })
                )
            })
    });
}
