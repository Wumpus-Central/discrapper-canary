n.d(t, { Ay: () => H, Y9: () => w, u9: () => U }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(311907),
    u = n(827734),
    h = n(834730),
    m = n(821609),
    A = n(408278),
    g = n(789645),
    _ = n(289873),
    p = n(707554),
    f = n(599319),
    E = n(843472),
    C = n(928039),
    x = n(12351),
    S = n(976860),
    I = n(734057),
    v = n(320501),
    N = n(576705),
    T = n(519057),
    y = n(531685),
    b = n(954571),
    j = n(203982),
    R = n(81437),
    M = n(636922),
    L = n(652215),
    D = n(985018),
    P = n(251066);
function O(e) {
    e.stopPropagation();
}
let w = (e) => {
        let { title: t, icon: n, children: l, className: a } = e;
        return (0, i.jsxs)("div", {
            className: s()(a, P.wx),
            children: [
                (0, i.jsxs)("div", {
                    className: P.gn,
                    children: [
                        null != n ? (0, i.jsx)(n, { color: u.A.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null != t
                            ? (0, i.jsx)(h.E, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              })
                            : null,
                    ],
                }),
                l,
            ],
        });
    },
    U = (e) => {
        let { msg: t, image: n } = e;
        return (0, i.jsxs)("div", {
            className: P.zC,
            children: [
                (0, i.jsx)("div", { className: P.Sl, style: { backgroundImage: `url(${n})` } }),
                (0, i.jsx)("div", { className: P.rf, children: t }),
            ],
        });
    };
class k extends l.PureComponent {
    handleClickJump = (e) => {
        let { jumpTo: t, message: n } = this.props;
        t(n, e);
    };
    handleClickClose = (e) => {
        let { onCloseMessage: t, message: n } = this.props;
        null != t && t(n, e);
    };
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsx)("div", {
            className: P.UD,
            children: (0, i.jsx)(m.$, {
                variant: "secondary",
                size: "sm",
                text: D.intl.string(D.t.k5WiPf),
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
            channel: l,
            closeAriaLabel: a,
        } = this.props;
        return null != e && (t || n || (null != l && l.isPrivate()))
            ? (0, i.jsx)("div", {
                  className: P.UD,
                  children: (0, i.jsx)(A.K, {
                      icon: g.P,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": a ?? D.intl.string(D.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, i.jsxs)("div", { className: P.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let G = d.Ay.connectStores([N.A], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && N.A.can(L.xBc.MANAGE_MESSAGES, t) };
})(k);
function F(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: a,
            loading: r,
            loadMore: u,
            renderHeader: h,
            renderEmptyState: A,
            renderItem: g,
            getProTip: E,
            scrollerClassName: S,
            className: I,
            listName: v,
        } = e,
        N = l.useRef(null),
        R = (0, C.A)(v, N),
        M = (0, d.bG)([T.Ay], () => T.Ay.hasNotice()),
        w = (0, d.bG)([y.A], () => y.A.windowSize());
    l.useEffect(() => {
        b.default.track(L.HAw.OPEN_POPOUT, { type: t });
    }, [t]),
        l.useEffect(() => {
            function e() {
                N.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                N.current?.scrollPageDown({ animate: !0 });
            }
            return (
                j._.subscribe(L.jej.SCROLL_PAGE_DOWN, t),
                j._.subscribe(L.jej.SCROLL_PAGE_UP, e),
                () => {
                    j._.unsubscribe(L.jej.SCROLL_PAGE_DOWN, t), j._.unsubscribe(L.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let U = l.useCallback(() => {
            let e = N.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && a && !r && u?.();
        }, [a, u, r]),
        k = [],
        G = !0;
    null == n || (r && 0 === n.length)
        ? (k = [(0, i.jsx)("div", { className: s()(P.zC, P.k$), children: (0, i.jsx)(_.y, {}) }, "spinner")])
        : 0 === n.length
          ? k.push((0, i.jsx)(l.Fragment, { children: A() }, "empty-state"))
          : ((G = !1),
            (k = []),
            o().each(n, (e) => {
                k.push(...g(e));
            }));
    let F = null;
    null != n &&
        n.length > 0 &&
        null != u &&
        (F = r
            ? (0, i.jsx)("div", { className: P.sw, children: (0, i.jsx)(_.y, {}) }, "loading-more-after")
            : a
              ? (0, i.jsx)("div", {
                    className: P.u9,
                    children: (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: D.intl.string(D.t.XBlaiC),
                        onClick: u,
                    }),
                })
              : (0, i.jsx)("div", { className: P.lJ, children: A() }));
    let H = E?.(),
        B =
            G && null != H
                ? (0, i.jsx)("div", {
                      className: P.qr,
                      children: (0, i.jsx)(x.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: H,
                      }),
                  })
                : null,
        V = { maxHeight: w.height - 43 - 25 - 48 };
    M && (V.maxHeight -= 40);
    let W = null != u && a;
    return (0, i.jsx)("div", {
        className: s()(P.KQ, I ?? P.G6),
        style: V,
        onClick: O,
        onDoubleClick: O,
        "aria-label": e["aria-label"],
        children: (0, i.jsxs)(p.F, {
            component: h(),
            children: [
                (0, i.jsxs)(f.Ch, {
                    className: S ?? P.m4,
                    onScroll: W ? U : void 0,
                    ref: N,
                    children: [
                        (0, i.jsx)(c.hD, {
                            navigator: R,
                            children: (0, i.jsx)(c.PR, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, i.jsx)("div", { ref: t, ...n, children: k });
                                },
                            }),
                        }),
                        F,
                    ],
                }),
                B,
            ],
        }),
    });
}
function H(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: a,
            messages: s,
            hasMore: r,
            loading: o,
            loadMore: c,
            onJump: u,
            canCloseAllMessages: h = !1,
            renderHeader: m,
            renderEmptyState: A,
            renderMessage: g,
            getProTip: _,
            scrollerClassName: p,
            className: f,
            onCloseMessage: C,
            listName: x,
            closeAriaLabel: N,
        } = e,
        T = (0, d.bG)([v.A], () => {
            let e = null != a ? v.A.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function y(e, n) {
        let i = () => {
            let { id: i, channel_id: l } = e,
                a = I.A.getChannel(l);
            null != a && (E.A.trackJump(l, i, t), (0, S.pX)(L.BVt.CHANNEL(a.getGuildId(), l, i))), u?.(n);
        };
        (0, R.A)(e, i) && !T && i();
    }
    l.useEffect(() => {
        n(a);
    }, [a, n]);
    let b = l.useMemo(() => s?.map((e) => ({ message: e, channel: a })), [s, a]);
    return (0, i.jsx)(F, {
        className: f,
        scrollerClassName: p,
        items: b,
        loading: o,
        analyticsName: t,
        renderEmptyState: A,
        renderHeader: m,
        hasMore: r,
        loadMore: c,
        getProTip: _,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != g) return g(t, (e) => y(t, e));
            let l = [];
            return null == n
                ? []
                : (l.push(
                      (0, i.jsxs)(
                          "div",
                          {
                              className: P.Uc,
                              children: [
                                  (0, i.jsx)(M.A, { className: P.i0, message: t, channel: n }),
                                  (0, i.jsx)(G, {
                                      channel: a,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: h,
                                      jumpTo: y,
                                      onCloseMessage: C,
                                      closeAriaLabel: N,
                                  }),
                              ],
                          },
                          t.id,
                      ),
                  ),
                  l);
        },
        listName: x,
        "aria-label": e["aria-label"],
    });
}
