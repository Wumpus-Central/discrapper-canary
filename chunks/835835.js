l.d(t, { Ay: () => D, Y9: () => j, u9: () => y }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(735438),
    A = l.n(r),
    c = l(837381),
    u = l(311907),
    d = l(397927),
    o = l(843472),
    h = l(928039),
    _ = l(12351),
    I = l(976860),
    E = l(734057),
    L = l(320501),
    N = l(576705),
    C = l(519057),
    g = l(531685),
    m = l(954571),
    p = l(203982),
    T = l(81437),
    f = l(636922),
    P = l(652215),
    x = l(985018),
    O = l(726195);
function G(e) {
    e.stopPropagation();
}
let j = (e) => {
        let { title: t, icon: l, children: n, className: s } = e;
        return (0, a.jsxs)("div", {
            className: i()(s, O.wx),
            children: [
                (0, a.jsxs)("div", {
                    className: O.gn,
                    children: [
                        null != l ? (0, a.jsx)(l, { color: d.LU0.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null == t
                            ? null
                            : (0, a.jsx)(d.Text, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              }),
                    ],
                }),
                n,
            ],
        });
    },
    y = (e) => {
        let { msg: t, image: l } = e;
        return (0, a.jsxs)("div", {
            className: O.zC,
            children: [
                (0, a.jsx)("div", { className: O.Sl, style: { backgroundImage: `url(${l})` } }),
                (0, a.jsx)("div", { className: O.rf, children: t }),
            ],
        });
    };
class b extends n.PureComponent {
    handleClickJump = (e) => {
        let { jumpTo: t, message: l } = this.props;
        t(l, e);
    };
    handleClickClose = (e) => {
        let { onCloseMessage: t, message: l } = this.props;
        null != t && t(l, e);
    };
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, a.jsx)("div", {
            className: O.UD,
            children: (0, a.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(x.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e,
            }),
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: l,
            channel: n,
            closeAriaLabel: s,
        } = this.props;
        return null != e && (t || l || (null != n && n.isPrivate()))
            ? (0, a.jsx)("div", {
                  className: O.UD,
                  children: (0, a.jsx)(d.K0, {
                      icon: d.PGe,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": s ?? x.intl.string(x.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, a.jsxs)("div", { className: O.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let v = u.Ay.connectStores([N.A], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && N.A.can(P.xBc.MANAGE_MESSAGES, t) };
})(b);
function S(e) {
    let {
            analyticsName: t,
            items: l,
            hasMore: s,
            loading: r,
            loadMore: o,
            renderHeader: I,
            renderEmptyState: E,
            renderItem: L,
            getProTip: N,
            scrollerClassName: T,
            className: f,
            listName: j,
        } = e,
        y = n.useRef(null),
        b = (0, h.A)(j, y),
        v = (0, u.bG)([C.Ay], () => C.Ay.hasNotice()),
        S = (0, u.bG)([g.A], () => g.A.windowSize());
    n.useEffect(() => {
        m.default.track(P.HAw.OPEN_POPOUT, { type: t });
    }, [t]),
        n.useEffect(() => {
            function e() {
                y.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                y.current?.scrollPageDown({ animate: !0 });
            }
            return (
                p._.subscribe(P.jej.SCROLL_PAGE_DOWN, t),
                p._.subscribe(P.jej.SCROLL_PAGE_UP, e),
                () => {
                    p._.unsubscribe(P.jej.SCROLL_PAGE_DOWN, t), p._.unsubscribe(P.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let D = n.useCallback(() => {
            let e = y.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && s && !r && o?.();
        }, [s, o, r]),
        W = [],
        F = !0;
    null == l || (r && 0 === l.length)
        ? (W = [(0, a.jsx)("div", { className: i()(O.zC, O.k$), children: (0, a.jsx)(d.y$y, {}) }, "spinner")])
        : 0 === l.length
          ? W.push((0, a.jsx)(n.Fragment, { children: E() }, "empty-state"))
          : ((F = !1),
            (W = []),
            A().each(l, (e) => {
                W.push(...L(e));
            }));
    let k = null;
    null != l &&
        l.length > 0 &&
        null != o &&
        (k = r
            ? (0, a.jsx)("div", { className: O.sw, children: (0, a.jsx)(d.y$y, {}) }, "loading-more-after")
            : s
              ? (0, a.jsx)("div", {
                    className: O.u9,
                    children: (0, a.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: x.intl.string(x.t.XBlaiC),
                        onClick: o,
                    }),
                })
              : (0, a.jsx)("div", { className: O.lJ, children: E() }));
    let R = N?.(),
        w =
            F && null != R
                ? (0, a.jsx)("div", {
                      className: O.qr,
                      children: (0, a.jsx)(_.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: R,
                      }),
                  })
                : null,
        U = { maxHeight: S.height - 43 - 25 - 48 };
    v && (U.maxHeight -= 40);
    let B = null != o && s;
    return (0, a.jsx)("div", {
        className: i()(f, O.KQ),
        style: U,
        onClick: G,
        onDoubleClick: G,
        "aria-label": e["aria-label"],
        children: (0, a.jsxs)(d.Fmo, {
            component: I(),
            children: [
                (0, a.jsxs)(d.T7Y, {
                    className: i()(O.m4, T),
                    onScroll: B ? D : void 0,
                    ref: y,
                    children: [
                        (0, a.jsx)(c.hD, {
                            navigator: b,
                            children: (0, a.jsx)(c.PR, {
                                children: (e) => {
                                    let { ref: t, ...l } = e;
                                    return (0, a.jsx)("div", { ref: t, ...l, children: W });
                                },
                            }),
                        }),
                        k,
                    ],
                }),
                w,
            ],
        }),
    });
}
function D(e) {
    let {
            analyticsName: t,
            onFetch: l,
            channel: s,
            messages: i,
            hasMore: r,
            loading: A,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: h = !1,
            renderHeader: _,
            renderEmptyState: N,
            renderMessage: C,
            getProTip: g,
            scrollerClassName: m,
            className: p,
            onCloseMessage: x,
            listName: G,
            closeAriaLabel: j,
        } = e,
        y = (0, u.bG)([L.A], () => {
            let e = null != s ? L.A.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function b(e, l) {
        let a = () => {
            let { id: a, channel_id: n } = e,
                s = E.A.getChannel(n);
            null != s && (o.A.trackJump(n, a, t), (0, I.pX)(P.BVt.CHANNEL(s.getGuildId(), n, a))), d?.(l);
        };
        (0, T.A)(e, a) && !y && a();
    }
    n.useEffect(() => {
        l(s);
    }, [s, l]);
    let D = n.useMemo(() => i?.map((e) => ({ message: e, channel: s })), [i, s]);
    return (0, a.jsx)(S, {
        className: p,
        scrollerClassName: m,
        items: D,
        loading: A,
        analyticsName: t,
        renderEmptyState: N,
        renderHeader: _,
        hasMore: r,
        loadMore: c,
        getProTip: g,
        renderItem: function (e) {
            let { message: t, channel: l } = e;
            if (null == t) return [];
            if (null != C) return C(t, (e) => b(t, e));
            let n = [];
            return null == l
                ? []
                : (n.push(
                      (0, a.jsxs)(
                          "div",
                          {
                              className: O.Uc,
                              children: [
                                  (0, a.jsx)(f.A, { className: O.i0, message: t, channel: l }),
                                  (0, a.jsx)(v, {
                                      channel: s,
                                      message: t,
                                      jumping: y,
                                      canCloseAllMessages: h,
                                      jumpTo: b,
                                      onCloseMessage: x,
                                      closeAriaLabel: j,
                                  }),
                              ],
                          },
                          t.id,
                      ),
                  ),
                  n);
        },
        listName: G,
        "aria-label": e["aria-label"],
    });
}
