n.d(t, {
    QP: () => N,
    ZP: () => x,
    h6: () => P,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(525654),
    a = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    h = n(570140),
    p = n(493773),
    f = n(607070),
    g = n(724757),
    m = n(626135),
    b = n(585483),
    O = n(358085),
    _ = n(143316),
    y = n(240126),
    C = n(147522),
    v = n(809780),
    j = n(981631),
    E = n(388032),
    S = n(153084);
function x(e) {
    var t, n, l, s, _, x, P;
    let { onJump: N, showTutorial: w, setSeenTutorial: Z, closePopout: T } = e,
        A = i.useRef(null),
        [R, D] = (0, v.ZP)(A),
        { loadState: L, channels: M } = R,
        { maybeLoadMore: k } = D,
        U = (0, u.e7)([f.Z], () => f.Z.messageGroupSpacing);
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
            let s = o[r];
            if (null == s) return;
            let { scrollTop: a, offsetHeight: c } = i.getScrollerState();
            (s.offsetTop < a || s.offsetTop > a + c) && i.scrollTo({ to: s.offsetTop });
        }),
        (s = R),
        (_ = D),
        i.useEffect(() => {
            let e = () => {
                let e = s.channels.find((e) => !e.collapsed);
                null != e && _.markChannelRead(e);
            };
            return (
                b.S.subscribe(j.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    b.S.unsubscribe(j.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [_, s.channels]),
        (x = D),
        i.useEffect(() => {
            let e = (e) => {
                ((0, O.isMac)() || (0, O.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    x.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [x]),
        i.useEffect(() => {
            m.default.track(j.rMx.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        i.useEffect(
            () => (
                h.Z.subscribe("CONNECTION_OPEN", T),
                () => {
                    h.Z.unsubscribe("CONNECTION_OPEN", T);
                }
            ),
            [T],
        ),
        (0, p.ZP)(
            () => (
                b.S.subscribe(j.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead),
                () => {
                    b.S.unsubscribe(j.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead);
                }
            ),
        );
    let G = (0, g.Z)("unreads", A);
    if (0 === M.length) {
        return (0, r.jsx)(y.Z, {
            Icon: d.xx7,
            header: E.intl.string(E.t["6XMM+P"]),
            tip:
                (null == (P = a().os) ? void 0 : P.family) === "OS X"
                    ? E.intl.string(E.t.w9uDOT)
                    : E.intl.string(E.t.BiUJCw),
        });
    }
    return (0, r.jsx)(c.bG, {
        navigator: G,
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
                            onScroll: L === v.jd.Done ? void 0 : k,
                            className: o()(S.scroller, "group-spacing-".concat(U)),
                            children: [
                                w ? (0, r.jsx)(I, { setSeenTutorial: Z }) : null,
                                (0, C.Z)(M, D, N),
                                L === v.jd.Done ? null : (0, r.jsx)(d.$jN, { className: S.spinner }),
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
        className: S.tutorial,
        children: [
            (0, r.jsx)("div", {
                className: S.tutorialIcon,
                children: (0, r.jsx)(d.xx7, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.X6q, {
                        className: S.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: E.intl.string(E.t.vZPktL),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.vWkIIC),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.tutorialButton,
                        children: (0, r.jsx)(d.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: E.intl.string(E.t["+IrDzM"]),
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
        header: E.intl.string(E.t["KG/ynZ"]),
        tip: E.intl.string(E.t.cvcKzc),
    });
}
let N = () =>
    (0, r.jsx)(_.Z, {
        onClick: () => b.S.dispatch(j.CkL.INBOX_MARK_ALL_UNREADS_READ),
        type: "top-header",
    });
