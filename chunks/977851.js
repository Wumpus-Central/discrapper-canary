n.d(t, {
    V: () => E,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(367513),
    u = n(688810),
    d = n(313961),
    f = n(384059),
    p = n(222823),
    h = n(309010),
    b = n(741961),
    g = n(234320),
    m = n(20465),
    A = n(108460),
    y = n(709562),
    O = n(652215),
    j = n(985018);

function v(e) {
    let t = (0, o.bG)([b.A], () => !(0, s.isEmpty)(b.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([h.A], () => h.A.getVoiceChannelId() === e, [e]),
        { unreadCount: r, mentionCount: l } = (0, o.cf)(
            [p.Ay],
            () => ({
                unreadCount: p.Ay.getUnreadCount(e),
                mentionCount: p.Ay.getMentionCount(e),
            }),
            [e],
        );
    return {
        unreadCount: r,
        mentionCount: l,
        voiceChannelIsSelected: n,
        isTyping: t,
    };
}

function x(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: i, isTyping: a, voiceChannelIsSelected: s } = v(n);
    return (0, r.jsx)(A.A, {
        className: t,
        unreadCount: l,
        mentionCount: i,
        isTyping: a,
        canBadge: s,
    });
}

function E(e) {
    let t,
        {
            channelId: n,
            className: i,
            showingClassName: s,
            onClick: p,
            inPopout: h,
            showRequestToSpeakSidebar: b,
            toggleRequestToSpeakSidebar: A,
        } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
            "channelId",
            "className",
            "showingClassName",
            "onClick",
            "inPopout",
            "showRequestToSpeakSidebar",
            "toggleRequestToSpeakSidebar",
        ]),
        { parentAnalyticsLocation: _ } = (0, u.Ay)(),
        { disabled: C } = E,
        S = l.useRef(null),
        I = (0, o.bG)([d.A], () => d.A.getChatOpen(n), [n]),
        {
            isShowing: N,
            unreadCount: T,
            mentionCount: P,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: r } = v(e),
                [i, a] = l.useState(!1);
            return (
                l.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, m.R);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                {
                    isShowing: i || n > 0 || r,
                    unreadCount: t,
                    mentionCount: n,
                }
            );
        })(n),
        w = l.useCallback(() => {
            (0, f.X)(_, f.O.CHAT, !I), null == p || p(), !I && b && (null == A || A()), c.A.updateChatOpen(n, !I);
        }, [n, I, p, b, A, _]),
        R = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, r.jsx)(x, {
                    className: t,
                    channelId: n,
                });
            },
            [n],
        ),
        D = l.useCallback(() => {
            var e;
            null == (e = S.current) || e.focus();
        }, []);
    (0, g.Vo)({
        event: O.jej.FOCUS_CHAT_BUTTON,
        handler: C ? null : D,
    });
    let [M, L] = l.useState(!1),
        G = l.useCallback(() => {
            h && L(!0);
        }, [h]);
    (0, g.Vo)({
        event: O.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: G,
    }),
        l.useEffect(() => {
            let e;
            return (
                M &&
                    (e = setTimeout(() => {
                        L(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [M]);
    let k = [(t = h && C ? j.intl.string(j.t.DPgc5h) : I ? j.intl.string(j.t.nthdxB) : j.intl.string(j.t["5KxXrK"]))];
    return (
        P > 0 &&
            k.push(
                j.intl.formatToPlainString(j.t["3l1GOx"], {
                    mentionCount: P,
                }),
            ),
        T > 0 && k.push(j.intl.string(j.t.x5zAGZ)),
        (0, r.jsx)(
            y.A,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    buttonRef: S,
                    onClick: w,
                    label: t,
                    "aria-label": k.join(", "),
                    iconComponent: R,
                    tooltipPosition: "bottom",
                    wrapperClassName: a()(
                        i,
                        null != s && {
                            [s]: N,
                        },
                    ),
                    forceTooltipOpen: M,
                },
                E,
            ),
        )
    );
}
