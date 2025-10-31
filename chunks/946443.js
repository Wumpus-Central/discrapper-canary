n.d(t, {
    QP: () => N,
    ZP: () => S,
    h6: () => P,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(525654),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    p = n(570140),
    f = n(493773),
    h = n(607070),
    g = n(724757),
    m = n(626135),
    b = n(585483),
    _ = n(358085),
    O = n(143316),
    y = n(240126),
    v = n(147522),
    j = n(809780),
    C = n(981631),
    E = n(388032),
    x = n(915087);
function S(e) {
    var t, n, l, a, O, S, P;
    let { onJump: N, showTutorial: Z, setSeenTutorial: T, closePopout: w } = e,
        A = i.useRef(null),
        [R, D] = (0, j.ZP)(A),
        { loadState: L, channels: M } = R,
        { maybeLoadMore: k } = D,
        G = (0, u.e7)([h.Z], () => h.Z.messageGroupSpacing);
    (t = A),
        (n = R),
        (l = D),
        i.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: r } = n;
            l.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == r) return;
            let o = null == (e = i.getScrollerNode()) ? void 0 : e.children;
            if (null == o) return;
            let a = o[r];
            if (null == a) return;
            let { scrollTop: s, offsetHeight: c } = i.getScrollerState();
            (a.offsetTop < s || a.offsetTop > s + c) && i.scrollTo({ to: a.offsetTop });
        }),
        (a = R),
        (O = D),
        i.useEffect(() => {
            let e = () => {
                let e = a.channels.find((e) => !e.collapsed);
                null != e && O.markChannelRead(e);
            };
            return (
                b.S.subscribe(C.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    b.S.unsubscribe(C.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [O, a.channels]),
        (S = D),
        i.useEffect(() => {
            let e = (e) => {
                ((0, _.isMac)() || (0, _.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    S.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [S]),
        i.useEffect(() => {
            m.default.track(C.rMx.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        i.useEffect(
            () => (
                p.Z.subscribe("CONNECTION_OPEN", w),
                () => {
                    p.Z.unsubscribe("CONNECTION_OPEN", w);
                }
            ),
            [w],
        ),
        (0, f.ZP)(
            () => (
                b.S.subscribe(C.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead),
                () => {
                    b.S.unsubscribe(C.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead);
                }
            ),
        );
    let U = (0, g.Z)("unreads", A);
    if (0 === M.length) {
        return (0, r.jsx)(y.Z, {
            Icon: d.xx7,
            header: E.intl.string(E.t["6XMM+D"]),
            tip:
                (null == (P = s().os) ? void 0 : P.family) === "OS X"
                    ? E.intl.string(E.t.w9uDOW)
                    : E.intl.string(E.t.BiUJC6),
        });
    }
    return (0, r.jsx)(c.bG, {
        navigator: U,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var t,
                    n,
                    { ref: i } = e,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(e, ["ref"]);
                return (0, r.jsxs)(
                    d.h21,
                    ((t = (function (e) {
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
                            ref: (e) => {
                                var t;
                                (A.current = e),
                                    (i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                            },
                        },
                        l,
                    )),
                    (n = n =
                        {
                            onScroll: L === j.jd.Done ? void 0 : k,
                            className: o()(x.scroller, "group-spacing-".concat(G)),
                            children: [
                                Z ? (0, r.jsx)(I, { setSeenTutorial: T }) : null,
                                (0, v.Z)(M, D, N),
                                L === j.jd.Done ? null : (0, r.jsx)(d.$jN, { className: x.spinner }),
                            ],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
        }),
    });
}
function I(e) {
    let { setSeenTutorial: t } = e;
    return (0, r.jsxs)("div", {
        className: x.tutorial,
        children: [
            (0, r.jsx)("div", {
                className: x.tutorialIcon,
                children: (0, r.jsx)(d.xx7, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.Heading, {
                        className: x.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: E.intl.string(E.t.vZPktJ),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.vWkIII),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x.tutorialButton,
                        children: (0, r.jsx)(d.Button, {
                            variant: "primary",
                            size: "sm",
                            text: E.intl.string(E.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function P() {
    return (0, r.jsx)(y.Z, {
        Icon: d.xx7,
        disableStars: !0,
        header: E.intl.string(E.t["KG/ynf"]),
        tip: E.intl.string(E.t.cvcKzX),
    });
}
let N = () =>
    (0, r.jsx)(O.Z, {
        onClick: () => b.S.dispatch(C.CkL.INBOX_MARK_ALL_UNREADS_READ),
        type: "top-header",
    });
