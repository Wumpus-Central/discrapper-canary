n.d(t, { Ay: () => S, Y9: () => R, u9: () => E }), n(321073);
var l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(735438),
    o = n.n(i),
    c = n(837381),
    d = n(311907),
    u = n(397927),
    h = n(843472),
    m = n(928039),
    x = n(12351),
    g = n(976860),
    p = n(734057),
    v = n(320501),
    j = n(576705),
    f = n(519057),
    N = n(531685),
    A = n(954571),
    C = n(203982),
    T = n(81437),
    y = n(636922),
    w = n(652215),
    b = n(985018),
    L = n(726195);
function O(e) {
    e.stopPropagation();
}
let R = (e) => {
        let { title: t, icon: n, children: s, className: a } = e;
        return (0, l.jsxs)("div", {
            className: r()(a, L.wx),
            children: [
                (0, l.jsxs)("div", {
                    className: L.gn,
                    children: [
                        null != n ? (0, l.jsx)(n, { color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null != t
                            ? (0, l.jsx)(u.Text, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              })
                            : null,
                    ],
                }),
                s,
            ],
        });
    },
    E = (e) => {
        let { msg: t, image: n } = e;
        return (0, l.jsxs)("div", {
            className: L.zC,
            children: [
                (0, l.jsx)("div", { className: L.Sl, style: { backgroundImage: `url(${n})` } }),
                (0, l.jsx)("div", { className: L.rf, children: t }),
            ],
        });
    };
class _ extends s.PureComponent {
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
        return (0, l.jsx)("div", {
            className: L.UD,
            children: (0, l.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(b.t.k5WiPf),
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
            channel: s,
            closeAriaLabel: a,
        } = this.props;
        return null != e && (t || n || (null != s && s.isPrivate()))
            ? (0, l.jsx)("div", {
                  className: L.UD,
                  children: (0, l.jsx)(u.K0, {
                      icon: u.PGe,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": a ?? b.intl.string(b.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, l.jsxs)("div", { className: L.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let I = d.Ay.connectStores([j.A], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && j.A.can(w.xBc.MANAGE_MESSAGES, t) };
})(_);
function P(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: a,
            loading: i,
            loadMore: h,
            renderHeader: g,
            renderEmptyState: p,
            renderItem: v,
            getProTip: j,
            scrollerClassName: T,
            className: y,
            listName: R,
        } = e,
        E = s.useRef(null),
        _ = (0, m.A)(R, E),
        I = (0, d.bG)([f.Ay], () => f.Ay.hasNotice()),
        P = (0, d.bG)([N.A], () => N.A.windowSize());
    s.useEffect(() => {
        A.default.track(w.HAw.OPEN_POPOUT, { type: t });
    }, [t]),
        s.useEffect(() => {
            function e() {
                E.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                E.current?.scrollPageDown({ animate: !0 });
            }
            return (
                C._.subscribe(w.jej.SCROLL_PAGE_DOWN, t),
                C._.subscribe(w.jej.SCROLL_PAGE_UP, e),
                () => {
                    C._.unsubscribe(w.jej.SCROLL_PAGE_DOWN, t), C._.unsubscribe(w.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let S = s.useCallback(() => {
            let e = E.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && a && !i && h?.();
        }, [a, h, i]),
        k = [],
        G = !0;
    null == n || (i && 0 === n.length)
        ? (k = [(0, l.jsx)("div", { className: r()(L.zC, L.k$), children: (0, l.jsx)(u.y$y, {}) }, "spinner")])
        : 0 === n.length
          ? k.push((0, l.jsx)(s.Fragment, { children: p() }, "empty-state"))
          : ((G = !1),
            (k = []),
            o().each(n, (e) => {
                k.push(...v(e));
            }));
    let M = null;
    null != n &&
        n.length > 0 &&
        null != h &&
        (M = i
            ? (0, l.jsx)("div", { className: L.sw, children: (0, l.jsx)(u.y$y, {}) }, "loading-more-after")
            : a
              ? (0, l.jsx)("div", {
                    className: L.u9,
                    children: (0, l.jsx)(u.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: b.intl.string(b.t.XBlaiC),
                        onClick: h,
                    }),
                })
              : (0, l.jsx)("div", { className: L.lJ, children: p() }));
    let W = j?.(),
        F =
            G && null != W
                ? (0, l.jsx)("div", {
                      className: L.qr,
                      children: (0, l.jsx)(x.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: W,
                      }),
                  })
                : null,
        H = { maxHeight: P.height - 43 - 25 - 48 };
    I && (H.maxHeight -= 40);
    let z = null != h && a;
    return (0, l.jsx)("div", {
        className: r()(L.KQ, y ?? L.G6),
        style: H,
        onClick: O,
        onDoubleClick: O,
        "aria-label": e["aria-label"],
        children: (0, l.jsxs)(u.Fmo, {
            component: g(),
            children: [
                (0, l.jsxs)(u.T7Y, {
                    className: T ?? L.m4,
                    onScroll: z ? S : void 0,
                    ref: E,
                    children: [
                        (0, l.jsx)(c.hD, {
                            navigator: _,
                            children: (0, l.jsx)(c.PR, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, l.jsx)("div", { ref: t, ...n, children: k });
                                },
                            }),
                        }),
                        M,
                    ],
                }),
                F,
            ],
        }),
    });
}
function S(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: a,
            messages: r,
            hasMore: i,
            loading: o,
            loadMore: c,
            onJump: u,
            canCloseAllMessages: m = !1,
            renderHeader: x,
            renderEmptyState: j,
            renderMessage: f,
            getProTip: N,
            scrollerClassName: A,
            className: C,
            onCloseMessage: b,
            listName: O,
            closeAriaLabel: R,
        } = e,
        E = (0, d.bG)([v.A], () => {
            let e = null != a ? v.A.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function _(e, n) {
        let l = () => {
            let { id: l, channel_id: s } = e,
                a = p.A.getChannel(s);
            null != a && (h.A.trackJump(s, l, t), (0, g.pX)(w.BVt.CHANNEL(a.getGuildId(), s, l))), u?.(n);
        };
        (0, T.A)(e, l) && !E && l();
    }
    s.useEffect(() => {
        n(a);
    }, [a, n]);
    let S = s.useMemo(() => r?.map((e) => ({ message: e, channel: a })), [r, a]);
    return (0, l.jsx)(P, {
        className: C,
        scrollerClassName: A,
        items: S,
        loading: o,
        analyticsName: t,
        renderEmptyState: j,
        renderHeader: x,
        hasMore: i,
        loadMore: c,
        getProTip: N,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != f) return f(t, (e) => _(t, e));
            let s = [];
            return null == n
                ? []
                : (s.push(
                      (0, l.jsxs)(
                          "div",
                          {
                              className: L.Uc,
                              children: [
                                  (0, l.jsx)(y.A, { className: L.i0, message: t, channel: n }),
                                  (0, l.jsx)(I, {
                                      channel: a,
                                      message: t,
                                      jumping: E,
                                      canCloseAllMessages: m,
                                      jumpTo: _,
                                      onCloseMessage: b,
                                      closeAriaLabel: R,
                                  }),
                              ],
                          },
                          t.id,
                      ),
                  ),
                  s);
        },
        listName: O,
        "aria-label": e["aria-label"],
    });
}
