n.d(t, {
    V: () => x,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(311907),
    c = n(367513),
    u = n(688810),
    d = n(313961),
    p = n(384059),
    h = n(222823),
    f = n(309010),
    g = n(741961),
    m = n(234320),
    b = n(20465),
    A = n(108460),
    y = n(709562),
    _ = n(652215),
    O = n(985018);

function j(e) {
    let t = (0, o.bG)([g.A], () => !(0, a.isEmpty)(g.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([f.A], () => f.A.getVoiceChannelId() === e, [e]),
        { unreadCount: r, mentionCount: l } = (0, o.cf)(
            [h.Ay],
            () => ({
                unreadCount: h.Ay.getUnreadCount(e),
                mentionCount: h.Ay.getMentionCount(e),
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

function v(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: i, isTyping: s, voiceChannelIsSelected: a } = j(n);
    return (0, r.jsx)(A.A, {
        className: t,
        unreadCount: l,
        mentionCount: i,
        isTyping: s,
        canBadge: a,
    });
}

function x(e) {
    let t,
        {
            channelId: n,
            className: i,
            showingClassName: a,
            onClick: h,
            inPopout: f,
            showRequestToSpeakSidebar: g,
            toggleRequestToSpeakSidebar: A,
        } = e,
        x = (function (e, t) {
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
        { parentAnalyticsLocation: E } = (0, u.Ay)(),
        { disabled: C } = x,
        S = l.useRef(null),
        I = (0, o.bG)([d.A], () => d.A.getChatOpen(n), [n]),
        {
            isShowing: N,
            unreadCount: T,
            mentionCount: P,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: r } = j(e),
                [i, s] = l.useState(!1);
            return (
                l.useEffect(() => {
                    s(t > 0);
                    let e = setTimeout(() => {
                        s(!1);
                    }, b.R);
                    return () => {
                        clearTimeout(e), s(!1);
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
            (0, p.X)(E, p.O.CHAT, !I),
                null == h || h(),
                !I && g && (null == A || A()),
                c.A.updateChatOpen(n, !I, "toggle chat button");
        }, [n, I, h, g, A, E]),
        R = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, r.jsx)(v, {
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
    (0, m.Vo)({
        event: _.jej.FOCUS_CHAT_BUTTON,
        handler: C ? null : D,
    });
    let [M, L] = l.useState(!1),
        k = l.useCallback(() => {
            f && L(!0);
        }, [f]);
    (0, m.Vo)({
        event: _.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: k,
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
    let G = [(t = f && C ? O.intl.string(O.t.DPgc5h) : I ? O.intl.string(O.t.nthdxB) : O.intl.string(O.t["5KxXrK"]))];
    return (
        P > 0 &&
            G.push(
                O.intl.formatToPlainString(O.t["3l1GOx"], {
                    mentionCount: P,
                }),
            ),
        T > 0 && G.push(O.intl.string(O.t.x5zAGZ)),
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
                    "aria-label": G.join(", "),
                    iconComponent: R,
                    tooltipPosition: "bottom",
                    wrapperClassName: s()(
                        i,
                        null != a && {
                            [a]: N,
                        },
                    ),
                    forceTooltipOpen: M,
                },
                x,
            ),
        )
    );
}
