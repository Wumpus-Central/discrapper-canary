s.d(l, { Ay: () => R, Y9: () => B, u9: () => D }), s(321073);
var n = s(627968),
    t = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(735438),
    c = s.n(i),
    u = s(837381),
    d = s(17928),
    o = s(661531),
    h = s(834730),
    m = s(821609),
    j = s(408278),
    p = s(789645),
    g = s(289873),
    x = s(707554),
    C = s(689175),
    N = s(720149),
    A = s(928039),
    v = s(12351),
    f = s(976860),
    b = s(734057),
    P = s(232835),
    k = s(576705),
    _ = s(177141),
    E = s(531685),
    y = s(174459),
    S = s(625494),
    T = s(81437),
    L = s(636922),
    G = s(652215),
    w = s(375708),
    M = s(251066);
function O(e) {
    e.stopPropagation();
}
let B = (e) => {
        let { title: l, icon: s, children: t, className: r } = e;
        return (0, n.jsxs)("div", {
            className: a()(r, M.wx),
            children: [
                (0, n.jsxs)("div", {
                    className: M.gn,
                    children: [
                        null != s ? (0, n.jsx)(s, { color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null != l
                            ? (0, n.jsx)(h.E, {
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
    },
    D = (e) => {
        let { msg: l, image: s } = e;
        return (0, n.jsxs)("div", {
            className: M.zC,
            children: [
                (0, n.jsx)("div", { className: M.Sl, style: { backgroundImage: `url(${s})` } }),
                (0, n.jsx)("div", { className: M.rf, children: l }),
            ],
        });
    };
class I extends t.PureComponent {
    handleClickJump = (e) => {
        let { jumpTo: l, message: s } = this.props;
        l(s, e);
    };
    handleClickClose = (e) => {
        let { onCloseMessage: l, message: s } = this.props;
        null != l && l(s, e);
    };
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, n.jsx)("div", {
            className: M.UD,
            children: (0, n.jsx)(m.$, {
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
            canPinMessages: s,
            channel: t,
            closeAriaLabel: r,
        } = this.props;
        return null != e && (l || s || (null != t && t.isPrivate()))
            ? (0, n.jsx)("div", {
                  className: M.UD,
                  children: (0, n.jsx)(j.K, {
                      icon: p.P,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": r ?? w.intl.string(w.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, n.jsxs)("div", { className: M.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let U = d.Ay.connectStores([k.A], (e) => {
    let { channel: l } = e;
    return { canPinMessages: null != l && k.A.can(G.xBc.PIN_MESSAGES, l) };
})(I);
function H(e) {
    let {
            analyticsName: l,
            items: s,
            hasMore: r,
            loading: i,
            loadMore: o,
            renderHeader: h,
            renderEmptyState: j,
            renderItem: p,
            getProTip: N,
            scrollerClassName: f,
            className: b,
            listName: P,
        } = e,
        k = t.useRef(null),
        T = (0, A.A)(P, k),
        L = (0, d.bG)([_.Ay], () => _.Ay.hasNotice()),
        B = (0, d.bG)([E.A], () => E.A.windowSize());
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
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && r && !i && o?.();
        }, [r, o, i]),
        I = [],
        U = !0;
    null == s || (i && 0 === s.length)
        ? (I = [(0, n.jsx)("div", { className: a()(M.zC, M.k$), children: (0, n.jsx)(g.y, {}) }, "spinner")])
        : 0 === s.length
          ? I.push((0, n.jsx)(t.Fragment, { children: j() }, "empty-state"))
          : ((U = !1),
            (I = []),
            c().each(s, (e) => {
                I.push(...p(e));
            }));
    let H = null;
    null != s &&
        s.length > 0 &&
        null != o &&
        (H = i
            ? (0, n.jsx)("div", { className: M.sw, children: (0, n.jsx)(g.y, {}) }, "loading-more-after")
            : r
              ? (0, n.jsx)("div", {
                    className: M.u9,
                    children: (0, n.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: w.intl.string(w.t.XBlaiC),
                        onClick: o,
                    }),
                })
              : (0, n.jsx)("div", { className: M.lJ, children: j() }));
    let R = N?.(),
        z =
            U && null != R
                ? (0, n.jsx)("div", {
                      className: M.qr,
                      children: (0, n.jsx)(v.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: R,
                      }),
                  })
                : null,
        J = { maxHeight: B.height - 43 - 25 - 48 };
    L && (J.maxHeight -= 40);
    let W = null != o && r;
    return (0, n.jsx)("div", {
        className: a()(M.KQ, b ?? M.G6),
        style: J,
        onClick: O,
        onDoubleClick: O,
        "aria-label": e["aria-label"],
        children: (0, n.jsxs)(x.F, {
            component: h(),
            children: [
                (0, n.jsxs)(C.Ch, {
                    className: f ?? M.m4,
                    onScroll: W ? D : void 0,
                    ref: k,
                    children: [
                        (0, n.jsx)(u.hD, {
                            navigator: T,
                            children: (0, n.jsx)(u.PR, {
                                children: (e) => {
                                    let { ref: l, ...s } = e;
                                    return (0, n.jsx)("div", { ref: l, ...s, children: I });
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
            onFetch: s,
            channel: r,
            messages: a,
            hasMore: i,
            loading: c,
            loadMore: u,
            onJump: o,
            canCloseAllMessages: h = !1,
            renderHeader: m,
            renderEmptyState: j,
            renderMessage: p,
            getProTip: g,
            scrollerClassName: x,
            className: C,
            onCloseMessage: A,
            listName: v,
            closeAriaLabel: k,
        } = e,
        _ = (0, d.bG)([P.A], () => {
            let e = null != r ? P.A.getMessages(r.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function E(e, s) {
        let n = () => {
            let { id: n, channel_id: t } = e,
                r = b.A.getChannel(t);
            null != r && (N.A.trackJump(t, n, l), (0, f.pX)(G.BVt.CHANNEL(r.getGuildId(), t, n))), o?.(s);
        };
        (0, T.A)(e, n) && !_ && n();
    }
    t.useEffect(() => {
        s(r);
    }, [r, s]);
    let y = t.useMemo(() => a?.map((e) => ({ message: e, channel: r })), [a, r]);
    return (0, n.jsx)(H, {
        className: C,
        scrollerClassName: x,
        items: y,
        loading: c,
        analyticsName: l,
        renderEmptyState: j,
        renderHeader: m,
        hasMore: i,
        loadMore: u,
        getProTip: g,
        renderItem: function (e) {
            let { message: l, channel: s } = e;
            if (null == l) return [];
            if (null != p) return p(l, (e) => E(l, e));
            let t = [];
            return null == s
                ? []
                : (t.push(
                      (0, n.jsxs)(
                          "div",
                          {
                              className: M.Uc,
                              children: [
                                  (0, n.jsx)(L.A, { className: M.i0, message: l, channel: s }),
                                  (0, n.jsx)(U, {
                                      channel: r,
                                      message: l,
                                      jumping: _,
                                      canCloseAllMessages: h,
                                      jumpTo: E,
                                      onCloseMessage: A,
                                      closeAriaLabel: k,
                                  }),
                              ],
                          },
                          l.id,
                      ),
                  ),
                  t);
        },
        listName: v,
        "aria-label": e["aria-label"],
    });
}
