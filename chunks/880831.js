(n.d(t, {
    Z: () => x,
    z: () => P
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(66546),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    f = n(475179),
    _ = n(904245),
    p = n(372900),
    h = n(905405),
    m = n(937889),
    g = n(739566),
    E = n(267128),
    b = n(378233),
    y = n(419922),
    O = n(375954),
    v = n(699516),
    I = n(768581),
    T = n(70956),
    S = n(823379),
    A = n(981631),
    N = n(217702),
    C = n(955525);
let R = 3,
    P = 10 * T.Z.Millis.SECOND,
    w = 8;
function D(e) {
    var t;
    let { channelId: n, isFrozen: r, count: o, lingerMs: a } = e,
        [s, l] = i.useState([]),
        [u, f] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useRef(void 0),
        h = i.useCallback(() => {
            (l([]), f(!0));
        }, []);
    (i.useEffect(() => {
        function e(e) {
            let { channelId: t, message: r, optimistic: i } = e;
            t !== n || r.type === A.uaV.STAGE_START || r.type === A.uaV.STAGE_END || r.type === A.uaV.STAGE_TOPIC || r.type === A.uaV.STAGE_SPEAKER || r.type === A.uaV.STAGE_RAISE_HAND || i || (clearTimeout(p.current), (p.current = setTimeout(h, a)), l((e) => [...e, r.id]));
        }
        return (
            d.Z.subscribe('MESSAGE_CREATE', e),
            () => {
                d.Z.unsubscribe('MESSAGE_CREATE', e);
            }
        );
    }, [n, h, o, a]),
        i.useEffect(
            () => () => {
                clearTimeout(p.current);
            },
            []
        ),
        i.useEffect(() => {
            s.length > R &&
                l((e) => {
                    let t = e.length - R;
                    return [...e.slice(t)];
                });
        }, [s]),
        r && null == _.current ? (_.current = s) : r || null == _.current || (_.current = null));
    let m = null != (t = _.current) ? t : s;
    return {
        toastsHidden: u,
        toastMessages: (0, c.Wu)([O.Z], () => m.map((e) => O.Z.getMessage(n, e)), [n, m]).filter(S.lm)
    };
}
function L(e) {
    var t;
    let { message: n } = e,
        { isBlocked: o, isIgnored: s } = (0, c.cj)(
            [v.Z],
            () => ({
                isBlocked: v.Z.isBlockedForMessage(n),
                isIgnored: v.Z.isIgnoredForMessage(n)
            }),
            [n]
        ),
        l = (0, g.Uj)(n),
        d = i.useContext(p.Z),
        [O, T] = i.useState(!1),
        S = (0, h.p)(),
        A = i.useCallback(
            (e) => {
                'A' !== e.target.nodeName &&
                    (f.Z.updateChatOpen(n.channel_id, !0),
                    _.Z.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0
                    }));
            },
            [n.channel_id, n.id]
        ),
        R =
            null != n.content && '' !== n.content
                ? (0, m.ZP)(n, {
                      isInteracting: O,
                      shouldFilterKeywords: S
                  }).content
                : null,
        {
            contentPlaceholder: P,
            renderedContent: w,
            trailingIcon: D,
            leadingIcon: L
        } = (0, E.f)(n, R, o, s, C.messageContent, {
            trailingIconClass: C.messageContentTrailingIcon,
            leadingIconClass: C.messageContentLeadingIcon,
            iconSize: N.WW
        }),
        x = (0, b.cv)(n),
        M =
            x.length > 0
                ? x.map((e) =>
                      (0, r.jsx)(
                          y.Z,
                          {
                              className: C.sticker,
                              size: 128,
                              sticker: e,
                              isInteracting: O
                          },
                          e.id
                      )
                  )
                : null;
    return (0, r.jsxs)(u.P3F, {
        className: C.toast,
        onMouseEnter: () => {
            T(!0);
        },
        onMouseLeave: () => {
            T(!1);
        },
        onClick: A,
        children: [
            (0, r.jsxs)('div', {
                className: a()(C.messageContentWrapper, { [C.mentioned]: n.mentioned }),
                children: [null != M ? null : L, null != (t = null != w ? w : M) ? t : (0, r.jsx)('span', { children: P }), null != M ? null : D]
            }),
            (0, r.jsx)('img', {
                alt: '',
                src:
                    (null == l ? void 0 : l.guildMemberAvatar) != null && null != d
                        ? (0, I.JM)({
                              guildId: d,
                              userId: n.author.id,
                              avatar: l.guildMemberAvatar
                          })
                        : n.author.getAvatarURL(d, 32),
                className: C.avatar
            })
        ]
    });
}
function x(e) {
    let { channelId: t, className: n } = e,
        [o, c] = i.useState(!1),
        { toastsHidden: d, toastMessages: f } = D({
            channelId: t,
            isFrozen: o,
            count: R,
            lingerMs: P
        }),
        _ = i.useRef({}),
        [p, h] = i.useState({}),
        m = i.useCallback((e, t) => {
            null == t ? delete _.current[e] : (_.current[e] = t);
        }, []),
        g = i.useRef(p);
    (i.useLayoutEffect(() => {
        g.current = p;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let r of f) {
                var n;
                let i = null != (n = _.current[r.id]) ? n : 0;
                ((e[r.id] = t), (t += i + w));
            }
            (0, s.isEqual)(e, g.current) || h(e);
        }, [f]));
    let E = f.map((e) => ({
            message: e,
            height: _.current[e.id],
            y: p[e.id]
        })),
        b = (0, u.Yzy)(E, {
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
                    translateY: d ? n : -(null != t ? t : 0) - w,
                    pointerEvents: 'none'
                };
            }
        });
    return (0, r.jsx)(u.f6W, {
        theme: A.BRd.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(n, e),
                onMouseEnter: () => {
                    c(!0);
                },
                onMouseLeave: () => {
                    c(!1);
                },
                children: b((e, t) =>
                    (0, r.jsx)(l.animated.div, {
                        ref: (e) => m(t.message.id, null != e ? e.offsetHeight : null),
                        className: C.toastWrapper,
                        style: e,
                        children: (0, r.jsx)(L, { message: t.message })
                    })
                )
            })
    });
}
