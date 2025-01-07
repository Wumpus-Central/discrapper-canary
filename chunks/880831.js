n.d(t, {
    Z: function () {
        return P;
    },
    z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n(666912),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(475179),
    p = n(904245),
    m = n(372900),
    f = n(905405),
    g = n(937889),
    C = n(739566),
    x = n(267128),
    v = n(378233),
    _ = n(419922),
    I = n(375954),
    E = n(699516),
    b = n(768581),
    Z = n(70956),
    N = n(823379),
    S = n(981631),
    T = n(217702),
    j = n(644921);
let A = 10 * Z.Z.Millis.SECOND;
function y(e) {
    var t;
    let { message: n } = e,
        { isBlocked: r, isIgnored: s } = (0, c.cj)(
            [E.Z],
            () => ({
                isBlocked: E.Z.isBlockedForMessage(n),
                isIgnored: E.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        o = (0, C.Uj)(n),
        u = l.useContext(m.Z),
        [I, Z] = l.useState(!1),
        N = (0, f.p)(),
        S = l.useCallback(
            (e) => {
                if ('A' !== e.target.nodeName)
                    h.Z.updateChatOpen(n.channel_id, !0),
                        p.Z.jumpToMessage({
                            channelId: n.channel_id,
                            messageId: n.id,
                            flash: !0
                        });
            },
            [n.channel_id, n.id]
        ),
        A =
            null != n.content && '' !== n.content
                ? (0, g.ZP)(n, {
                      isInteracting: I,
                      shouldFilterKeywords: N
                  }).content
                : null,
        {
            contentPlaceholder: y,
            renderedContent: P,
            trailingIcon: M,
            leadingIcon: R
        } = (0, x.f)(n, A, r, s, j.messageContent, {
            trailingIconClass: j.messageContentTrailingIcon,
            leadingIconClass: j.messageContentLeadingIcon,
            iconSize: T.WW
        }),
        L = (0, v.cv)(n),
        k =
            L.length > 0
                ? L.map((e) =>
                      (0, i.jsx)(
                          _.ZP,
                          {
                              className: j.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: I
                          },
                          e.id
                      )
                  )
                : null;
    return (0, i.jsxs)(d.Clickable, {
        className: j.toast,
        onMouseEnter: () => {
            Z(!0);
        },
        onMouseLeave: () => {
            Z(!1);
        },
        onClick: S,
        children: [
            (0, i.jsxs)('div', {
                className: a()(j.messageContentWrapper, { [j.mentioned]: n.mentioned }),
                children: [null != k ? null : R, null !== (t = null != P ? P : k) && void 0 !== t ? t : (0, i.jsx)('span', { children: y }), null != k ? null : M]
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
        [r, h] = l.useState(!1),
        { toastsHidden: p, toastMessages: m } = (function (e) {
            var t;
            let { channelId: n, isFrozen: i, count: r, lingerMs: a } = e,
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
                    if (t === n && i.type !== S.uaV.STAGE_START && i.type !== S.uaV.STAGE_END && i.type !== S.uaV.STAGE_TOPIC && i.type !== S.uaV.STAGE_SPEAKER && i.type !== S.uaV.STAGE_RAISE_HAND) clearTimeout(m.current), (m.current = setTimeout(f, a)), o((e) => [...e, i.id]);
                }
                return (
                    u.Z.subscribe('MESSAGE_CREATE', e),
                    () => {
                        u.Z.unsubscribe('MESSAGE_CREATE', e);
                    }
                );
            }, [n, f, r, a]),
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
                i && null == p.current ? (p.current = s) : !i && null != p.current && (p.current = null);
            let g = null !== (t = p.current) && void 0 !== t ? t : s;
            return {
                toastsHidden: d,
                toastMessages: (0, c.Wu)([I.Z], () => g.map((e) => I.Z.getMessage(n, e)), [n, g]).filter(N.lm)
            };
        })({
            channelId: t,
            isFrozen: r,
            count: 3,
            lingerMs: A
        }),
        f = l.useRef({}),
        [g, C] = l.useState({}),
        x = l.useCallback((e, t) => {
            null == t ? delete f.current[e] : (f.current[e] = t);
        }, []),
        v = l.useRef(g);
    l.useLayoutEffect(() => {
        v.current = g;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let i of m) {
                var n;
                let l = null !== (n = f.current[i.id]) && void 0 !== n ? n : 0;
                (e[i.id] = t), (t += l + 8);
            }
            !(0, s.isEqual)(e, v.current) && C(e);
        }, [m]);
    let _ = m.map((e) => ({
            message: e,
            height: f.current[e.id],
            y: g[e.id]
        })),
        E = (0, d.useTransition)(_, {
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
    return (0, i.jsx)(d.ThemeProvider, {
        theme: S.BRd.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                className: a()(n, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: E((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => x(t.message.id, null != e ? e.offsetHeight : null),
                        className: j.toastWrapper,
                        style: e,
                        children: (0, i.jsx)(y, { message: t.message })
                    })
                )
            })
    });
}
