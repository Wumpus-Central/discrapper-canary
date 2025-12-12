n.d(t, {
    QP: () => N,
    ZP: () => I,
    h6: () => P,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    f = n(570140),
    h = n(493773),
    p = n(607070),
    g = n(724757),
    b = n(626135),
    m = n(585483),
    y = n(358085),
    O = n(143316),
    v = n(240126),
    j = n(147522),
    C = n(809780),
    x = n(981631),
    E = n(388032),
    S = n(97916);
function I(e) {
    var t, n, l, o, O, I, P;
    let { onJump: N, showTutorial: Z, setSeenTutorial: w, closePopout: T } = e,
        A = i.useRef(null),
        [R, D] = (0, C.ZP)(A),
        { loadState: M, channels: L } = R,
        { maybeLoadMore: k } = D,
        G = (0, u.e7)([p.Z], () => p.Z.messageGroupSpacing);
    (t = A),
        (n = R),
        (l = D),
        i.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: r } = n;
            l.clearScrollToChannelIndex();
            let { current: i } = t;
            if (null == i || null == r) return;
            let a = null == (e = i.getScrollerNode()) ? void 0 : e.children;
            if (null == a) return;
            let o = a[r];
            if (null == o) return;
            let { scrollTop: s, offsetHeight: c } = i.getScrollerState();
            (o.offsetTop < s || o.offsetTop > s + c) && i.scrollTo({ to: o.offsetTop });
        }),
        (o = R),
        (O = D),
        i.useEffect(() => {
            let e = () => {
                let e = o.channels.find((e) => !e.collapsed);
                null != e && O.markChannelRead(e);
            };
            return (
                m.S.subscribe(x.CkL.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    m.S.unsubscribe(x.CkL.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [O, o.channels]),
        (I = D),
        i.useEffect(() => {
            let e = (e) => {
                ((0, y.isMac)() || (0, y.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    I.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [I]),
        i.useEffect(() => {
            b.default.track(x.rMx.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        i.useEffect(
            () => (
                f.Z.subscribe("CONNECTION_OPEN", T),
                () => {
                    f.Z.unsubscribe("CONNECTION_OPEN", T);
                }
            ),
            [T],
        ),
        (0, h.ZP)(
            () => (
                m.S.subscribe(x.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead),
                () => {
                    m.S.unsubscribe(x.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead);
                }
            ),
        );
    let U = (0, g.Z)("unreads", A);
    if (0 === L.length) {
        return (0, r.jsx)(v.Z, {
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
                            onScroll: M === C.jd.Done ? void 0 : k,
                            className: a()(S.scroller, "group-spacing-".concat(G)),
                            children: [
                                Z ? (0, r.jsx)(_, { setSeenTutorial: w }) : null,
                                (0, j.Z)(L, D, N),
                                M === C.jd.Done ? null : (0, r.jsx)(d.$jN, { className: S.spinner }),
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
function _(e) {
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
                    (0, r.jsx)(d.Heading, {
                        className: S.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: E.intl.string(E.t.vZPktJ),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.vWkIII),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.tutorialButton,
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
    return (0, r.jsx)(v.Z, {
        Icon: d.xx7,
        disableStars: !0,
        header: E.intl.string(E.t["KG/ynf"]),
        tip: E.intl.string(E.t.cvcKzX),
    });
}
let N = () => (0, r.jsx)(O.Z, { onClick: () => m.S.dispatch(x.CkL.INBOX_MARK_ALL_UNREADS_READ) });
