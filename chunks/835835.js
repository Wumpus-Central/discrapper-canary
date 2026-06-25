n.d(l, { Ay: () => R, Y9: () => B, u9: () => D }), n(321073);
var s = n(627968),
    t = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(735438),
    c = n.n(r),
    u = n(837381),
    o = n(17928),
    d = n(661531),
    h = n(834730),
    m = n(821609),
    j = n(408278),
    p = n(789645),
    x = n(289873),
    g = n(707554),
    C = n(689175),
    f = n(493336),
    N = n(928039),
    A = n(12351),
    v = n(976860),
    b = n(734057),
    P = n(232835),
    k = n(576705),
    _ = n(177141),
    E = n(531685),
    y = n(174459),
    S = n(625494),
    T = n(81437),
    L = n(636922),
    G = n(652215),
    w = n(375708),
    M = n(357050);
function O(e) {
    e.stopPropagation();
}
function B(e) {
    let { title: l, icon: n, children: t, className: i } = e;
    return (0, s.jsxs)("div", {
        className: a()(i, M.wx),
        children: [
            (0, s.jsxs)("div", {
                className: M.gn,
                children: [
                    null != n ? (0, s.jsx)(n, { color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                    null != l
                        ? (0, s.jsx)(h.E, {
                              variant: "text-lg/semibold",
                              color: "interactive-text-active",
                              children: l,
                          })
                        : null,
                ],
            }),
            t,
        ],
    });
}
function D(e) {
    let { msg: l, image: n } = e;
    return (0, s.jsxs)("div", {
        className: M.zC,
        children: [
            (0, s.jsx)("div", { className: M.Sl, style: { backgroundImage: `url(${n})` } }),
            (0, s.jsx)(h.E, { variant: "text-md/medium", color: "text-default", className: M.rf, children: l }),
        ],
    });
}
class I extends t.PureComponent {
    handleClickJump = (e) => {
        let { jumpTo: l, message: n } = this.props;
        l(n, e);
    };
    handleClickClose = (e) => {
        let { onCloseMessage: l, message: n } = this.props;
        null != l && l(n, e);
    };
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, s.jsx)("div", {
            className: M.UD,
            children: (0, s.jsx)(m.$, {
                variant: "secondary",
                size: "sm",
                text: w.intl.string(w.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e,
            }),
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: l,
            canPinMessages: n,
            channel: t,
            closeAriaLabel: i,
        } = this.props;
        return null != e && (l || n || (null != t && t.isPrivate()))
            ? (0, s.jsx)("div", {
                  className: M.UD,
                  children: (0, s.jsx)(j.K, {
                      icon: p.P,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": i ?? w.intl.string(w.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, s.jsxs)("div", { className: M.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let U = o.Ay.connectStores([k.A], (e) => {
    let { channel: l } = e;
    return { canPinMessages: null != l && k.A.can(G.xBc.PIN_MESSAGES, l) };
})(I);
function H(e) {
    let {
            analyticsName: l,
            items: n,
            hasMore: i,
            loading: r,
            loadMore: d,
            renderHeader: h,
            renderEmptyState: j,
            renderItem: p,
            getProTip: f,
            scrollerClassName: v,
            className: b,
            listName: P,
        } = e,
        k = t.useRef(null),
        T = (0, N.A)(P, k),
        L = (0, o.bG)([_.Ay], () => _.Ay.hasNotice()),
        B = (0, o.bG)([E.A], () => E.A.windowSize());
    t.useEffect(() => {
        y.default.track(G.HAw.OPEN_POPOUT, { type: l });
    }, [l]),
        t.useEffect(() => {
            function e() {
                k.current?.scrollPageUp({ animate: !0 });
            }
            function l() {
                k.current?.scrollPageDown({ animate: !0 });
            }
            return (
                S._.subscribe(G.jej.SCROLL_PAGE_DOWN, l),
                S._.subscribe(G.jej.SCROLL_PAGE_UP, e),
                () => {
                    S._.unsubscribe(G.jej.SCROLL_PAGE_DOWN, l), S._.unsubscribe(G.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let D = t.useCallback(() => {
            let e = k.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && i && !r && d?.();
        }, [i, d, r]),
        I = [],
        U = !0;
    null == n || (r && 0 === n.length)
        ? (I = [(0, s.jsx)("div", { className: a()(M.zC, M.k$), children: (0, s.jsx)(x.y, {}) }, "spinner")])
        : 0 === n.length
          ? I.push((0, s.jsx)(t.Fragment, { children: j() }, "empty-state"))
          : ((U = !1),
            (I = []),
            c().each(n, (e) => {
                I.push(...p(e));
            }));
    let H = null;
    null != n &&
        n.length > 0 &&
        null != d &&
        (H = r
            ? (0, s.jsx)("div", { className: M.sw, children: (0, s.jsx)(x.y, {}) }, "loading-more-after")
            : i
              ? (0, s.jsx)("div", {
                    className: M.u9,
                    children: (0, s.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: w.intl.string(w.t.XBlaiC),
                        onClick: d,
                    }),
                })
              : (0, s.jsx)("div", { className: M.lJ, children: j() }));
    let R = f?.(),
        z =
            U && null != R
                ? (0, s.jsx)("div", {
                      className: M.qr,
                      children: (0, s.jsx)(A.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: R,
                      }),
                  })
                : null,
        J = { maxHeight: B.height - 43 - 25 - 48 };
    L && (J.maxHeight -= 40);
    let W = null != d && i;
    return (0, s.jsx)("div", {
        className: a()(M.KQ, b ?? M.G6),
        style: J,
        onClick: O,
        onDoubleClick: O,
        "aria-label": e["aria-label"],
        children: (0, s.jsxs)(g.F, {
            component: h(),
            children: [
                (0, s.jsxs)(C.Ch, {
                    className: v ?? M.m4,
                    onScroll: W ? D : void 0,
                    ref: k,
                    children: [
                        (0, s.jsx)(u.hD, {
                            navigator: T,
                            children: (0, s.jsx)(u.PR, {
                                children: (e) => {
                                    let { ref: l, ...n } = e;
                                    return (0, s.jsx)("div", { ref: l, ...n, children: I });
                                },
                            }),
                        }),
                        H,
                    ],
                }),
                z,
            ],
        }),
    });
}
function R(e) {
    let {
            analyticsName: l,
            onFetch: n,
            channel: i,
            messages: a,
            hasMore: r,
            loading: c,
            loadMore: u,
            onJump: d,
            canCloseAllMessages: h = !1,
            renderHeader: m,
            renderEmptyState: j,
            renderMessage: p,
            getProTip: x,
            scrollerClassName: g,
            className: C,
            onCloseMessage: N,
            listName: A,
            closeAriaLabel: k,
        } = e,
        _ = (0, o.bG)([P.A], () => {
            let e = null != i ? P.A.getMessages(i.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function E(e, n) {
        function s() {
            let { id: s, channel_id: t } = e,
                i = b.A.getChannel(t);
            null != i && (f.A.trackJump(t, s, l), (0, v.pX)(G.BVt.CHANNEL(i.getGuildId(), t, s))), d?.(n);
        }
        (0, T.A)(e, s) && !_ && s();
    }
    t.useEffect(() => {
        n(i);
    }, [i, n]);
    let y = t.useMemo(() => a?.map((e) => ({ message: e, channel: i })), [a, i]);
    return (0, s.jsx)(H, {
        className: C,
        scrollerClassName: g,
        items: y,
        loading: c,
        analyticsName: l,
        renderEmptyState: j,
        renderHeader: m,
        hasMore: r,
        loadMore: u,
        getProTip: x,
        renderItem: function (e) {
            let { message: l, channel: n } = e;
            if (null == l) return [];
            if (null != p) return p(l, (e) => E(l, e));
            let t = [];
            return null == n
                ? []
                : (t.push(
                      (0, s.jsxs)(
                          "div",
                          {
                              className: M.Uc,
                              children: [
                                  (0, s.jsx)(L.A, { className: M.i0, message: l, channel: n }),
                                  (0, s.jsx)(U, {
                                      channel: i,
                                      message: l,
                                      jumping: _,
                                      canCloseAllMessages: h,
                                      jumpTo: E,
                                      onCloseMessage: N,
                                      closeAriaLabel: k,
                                  }),
                              ],
                          },
                          l.id,
                      ),
                  ),
                  t);
        },
        listName: A,
        "aria-label": e["aria-label"],
    });
}
