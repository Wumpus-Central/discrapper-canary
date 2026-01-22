n.d(t, {
    Ay: () => Y,
    Y9: () => G,
    u9: () => V,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    f = n(843472),
    p = n(928039),
    _ = n(12351),
    h = n(976860),
    m = n(734057),
    g = n(320501),
    E = n(576705),
    b = n(519057),
    y = n(531685),
    O = n(954571),
    A = n(203982),
    v = n(81437),
    S = n(636922),
    I = n(652215),
    T = n(985018),
    C = n(726195);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = x(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let L = 43,
    j = 25,
    M = 40,
    k = 250;
function U(e) {
    e.stopPropagation();
}
let G = (e) => {
        let { title: t, icon: n, children: i, className: a } = e;
        return (0, r.jsxs)("div", {
            className: s()(a, C.wx),
            children: [
                (0, r.jsxs)("div", {
                    className: C.gn,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: d.LU0.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(d.Text, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              }),
                    ],
                }),
                i,
            ],
        });
    },
    V = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)("div", {
            className: C.zC,
            children: [
                (0, r.jsx)("div", {
                    className: C.Sl,
                    style: { backgroundImage: "url(".concat(n, ")") },
                }),
                (0, r.jsx)("div", {
                    className: C.rf,
                    children: t,
                }),
            ],
        });
    };
class F extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsx)("div", {
            className: C.UD,
            children: (0, r.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                text: T.intl.string(T.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e,
            }),
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: n,
            channel: i,
            closeAriaLabel: a,
        } = this.props;
        return null != e && (t || n || (null != i && i.isPrivate()))
            ? (0, r.jsx)("div", {
                  className: C.UD,
                  children: (0, r.jsx)(d.K0, {
                      icon: d.PGe,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": null != a ? a : T.intl.string(T.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, r.jsxs)("div", {
            className: C.uu,
            children: [this.renderJumpButton(), this.renderCloseButton()],
        });
    }
    constructor(...e) {
        super(...e),
            N(this, "handleClickJump", (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            N(this, "handleClickClose", (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let B = u.Ay.connectStores([E.A], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && E.A.can(I.xBc.MANAGE_MESSAGES, t) };
})(F);
function H(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: a,
            loading: o,
            loadMore: f,
            renderHeader: h,
            renderEmptyState: m,
            renderItem: g,
            getProTip: E,
            scrollerClassName: v,
            className: S,
            listName: N,
        } = e,
        w = i.useRef(null),
        x = (0, p.A)(N, w),
        G = (0, u.bG)([b.Ay], () => b.Ay.hasNotice()),
        V = (0, u.bG)([y.A], () => y.A.windowSize());
    i.useEffect(() => {
        O.default.track(I.HAw.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = w.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = w.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                A._.subscribe(I.jej.SCROLL_PAGE_DOWN, t),
                A._.subscribe(I.jej.SCROLL_PAGE_UP, e),
                () => {
                    A._.unsubscribe(I.jej.SCROLL_PAGE_DOWN, t), A._.unsubscribe(I.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let F = i.useCallback(() => {
            var e;
            let t = null == (e = w.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < k && a && !o && (null == f || f());
        }, [a, f, o]),
        B = [],
        H = !0;
    null == n || (o && 0 === n.length)
        ? (B = [
              (0, r.jsx)(
                  "div",
                  {
                      className: s()(C.zC, C.k$),
                      children: (0, r.jsx)(d.y$y, {}),
                  },
                  "spinner",
              ),
          ])
        : 0 === n.length
          ? B.push((0, r.jsx)(i.Fragment, { children: m() }, "empty-state"))
          : ((H = !1),
            (B = []),
            l().each(n, (e) => {
                B.push(...g(e));
            }));
    let Y = null;
    null != n &&
        n.length > 0 &&
        null != f &&
        (Y = o
            ? (0, r.jsx)(
                  "div",
                  {
                      className: C.sw,
                      children: (0, r.jsx)(d.y$y, {}),
                  },
                  "loading-more-after",
              )
            : a
              ? (0, r.jsx)("div", {
                    className: C.u9,
                    children: (0, r.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: T.intl.string(T.t.XBlaiC),
                        onClick: f,
                    }),
                })
              : (0, r.jsx)("div", {
                    className: C.lJ,
                    children: m(),
                }));
    let W = null == E ? void 0 : E(),
        K =
            H && null != W
                ? (0, r.jsx)("div", {
                      className: C.qr,
                      children: (0, r.jsx)(_.A, {
                          style: {
                              width: "100%",
                              paddingTop: 10,
                              paddingBottom: 10,
                          },
                          children: W,
                      }),
                  })
                : null,
        z = { maxHeight: V.height - L - j - 48 };
    G && (z.maxHeight -= M);
    let q = null != f && a;
    return (0, r.jsx)("div", {
        className: s()(S, C.KQ),
        style: z,
        onClick: U,
        onDoubleClick: U,
        "aria-label": e["aria-label"],
        children: (0, r.jsxs)(d.Fmo, {
            component: h(),
            children: [
                (0, r.jsxs)(d.T7Y, {
                    className: s()(C.m4, v),
                    onScroll: q ? F : void 0,
                    ref: w,
                    children: [
                        (0, r.jsx)(c.hD, {
                            navigator: x,
                            children: (0, r.jsx)(c.PR, {
                                children: (e) => {
                                    let { ref: t } = e,
                                        n = D(e, ["ref"]);
                                    return (0, r.jsx)("div", P(R({ ref: t }, n), { children: B }));
                                },
                            }),
                        }),
                        Y,
                    ],
                }),
                K,
            ],
        }),
    });
}
function Y(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: a,
            messages: s,
            hasMore: o,
            loading: l,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: p = !1,
            renderHeader: _,
            renderEmptyState: E,
            renderMessage: b,
            getProTip: y,
            scrollerClassName: O,
            className: A,
            onCloseMessage: T,
            listName: N,
            closeAriaLabel: R,
        } = e,
        w = (0, u.bG)([g.A], () => {
            let e = null != a ? g.A.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        let r = () => {
            let { id: r, channel_id: i } = e,
                a = m.A.getChannel(i);
            null != a && (f.A.trackJump(i, r, t), (0, h.pX)(I.BVt.CHANNEL(a.getGuildId(), i, r))), null == d || d(n);
        };
        (0, v.A)(e, r) && !w && r();
    }
    function D(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != b) return b(t, (e) => P(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, r.jsxs)(
                      "div",
                      {
                          className: C.Uc,
                          children: [
                              (0, r.jsx)(S.A, {
                                  className: C.i0,
                                  message: t,
                                  channel: n,
                              }),
                              (0, r.jsx)(B, {
                                  channel: a,
                                  message: t,
                                  jumping: w,
                                  canCloseAllMessages: p,
                                  jumpTo: P,
                                  onCloseMessage: T,
                                  closeAriaLabel: R,
                              }),
                          ],
                      },
                      t.id,
                  ),
              ),
              i);
    }
    i.useEffect(() => {
        n(a);
    }, [a, n]);
    let x = i.useMemo(
        () =>
            null == s
                ? void 0
                : s.map((e) => ({
                      message: e,
                      channel: a,
                  })),
        [s, a],
    );
    return (0, r.jsx)(H, {
        className: A,
        scrollerClassName: O,
        items: x,
        loading: l,
        analyticsName: t,
        renderEmptyState: E,
        renderHeader: _,
        hasMore: o,
        loadMore: c,
        getProTip: y,
        renderItem: D,
        listName: N,
        "aria-label": e["aria-label"],
    });
}
