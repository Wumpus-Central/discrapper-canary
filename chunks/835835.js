"use strict";
n.d(t, { Ay: () => z, Y9: () => L, u9: () => w }), n(321073);
var s = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    l = n(735438),
    o = n.n(l),
    c = n(837381),
    _ = n(17928),
    d = n(661531),
    u = n(834730),
    m = n(821609),
    g = n(408278),
    f = n(789645),
    p = n(289873),
    x = n(707554),
    h = n(689175),
    b = n(720149),
    A = n(928039),
    C = n(12351),
    v = n(976860),
    j = n(734057),
    E = n(232835),
    k = n(576705),
    T = n(519057),
    N = n(531685),
    S = n(954571),
    y = n(625494),
    I = n(81437),
    M = n(636922),
    D = n(652215),
    R = n(985018),
    P = n(251066);
function O(e) {
    e.stopPropagation();
}
let L = (e) => {
        let { title: t, icon: n, children: a, className: r } = e;
        return (0, s.jsxs)("div", {
            className: i()(r, P.wx),
            children: [
                (0, s.jsxs)("div", {
                    className: P.gn,
                    children: [
                        null != n ? (0, s.jsx)(n, { color: d.A.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null != t
                            ? (0, s.jsx)(u.E, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              })
                            : null,
                    ],
                }),
                a,
            ],
        });
    },
    w = (e) => {
        let { msg: t, image: n } = e;
        return (0, s.jsxs)("div", {
            className: P.zC,
            children: [
                (0, s.jsx)("div", { className: P.Sl, style: { backgroundImage: `url(${n})` } }),
                (0, s.jsx)("div", { className: P.rf, children: t }),
            ],
        });
    };
class G extends a.PureComponent {
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
        return (0, s.jsx)("div", {
            className: P.UD,
            children: (0, s.jsx)(m.$, {
                variant: "secondary",
                size: "sm",
                text: R.intl.string(R.t.k5WiPf),
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
            channel: a,
            closeAriaLabel: r,
        } = this.props;
        return null != e && (t || n || (null != a && a.isPrivate()))
            ? (0, s.jsx)("div", {
                  className: P.UD,
                  children: (0, s.jsx)(g.K, {
                      icon: f.P,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": r ?? R.intl.string(R.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, s.jsxs)("div", { className: P.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let B = _.Ay.connectStores([k.A], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && k.A.can(D.xBc.MANAGE_MESSAGES, t) };
})(G);
function U(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: r,
            loading: l,
            loadMore: d,
            renderHeader: u,
            renderEmptyState: g,
            renderItem: f,
            getProTip: b,
            scrollerClassName: v,
            className: j,
            listName: E,
        } = e,
        k = a.useRef(null),
        I = (0, A.A)(E, k),
        M = (0, _.bG)([T.Ay], () => T.Ay.hasNotice()),
        L = (0, _.bG)([N.A], () => N.A.windowSize());
    a.useEffect(() => {
        S.default.track(D.HAw.OPEN_POPOUT, { type: t });
    }, [t]),
        a.useEffect(() => {
            function e() {
                k.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                k.current?.scrollPageDown({ animate: !0 });
            }
            return (
                y._.subscribe(D.jej.SCROLL_PAGE_DOWN, t),
                y._.subscribe(D.jej.SCROLL_PAGE_UP, e),
                () => {
                    y._.unsubscribe(D.jej.SCROLL_PAGE_DOWN, t), y._.unsubscribe(D.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let w = a.useCallback(() => {
            let e = k.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && r && !l && d?.();
        }, [r, d, l]),
        G = [],
        B = !0;
    null == n || (l && 0 === n.length)
        ? (G = [(0, s.jsx)("div", { className: i()(P.zC, P.k$), children: (0, s.jsx)(p.y, {}) }, "spinner")])
        : 0 === n.length
          ? G.push((0, s.jsx)(a.Fragment, { children: g() }, "empty-state"))
          : ((B = !1),
            (G = []),
            o().each(n, (e) => {
                G.push(...f(e));
            }));
    let U = null;
    null != n &&
        n.length > 0 &&
        null != d &&
        (U = l
            ? (0, s.jsx)("div", { className: P.sw, children: (0, s.jsx)(p.y, {}) }, "loading-more-after")
            : r
              ? (0, s.jsx)("div", {
                    className: P.u9,
                    children: (0, s.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: R.intl.string(R.t.XBlaiC),
                        onClick: d,
                    }),
                })
              : (0, s.jsx)("div", { className: P.lJ, children: g() }));
    let z = b?.(),
        K =
            B && null != z
                ? (0, s.jsx)("div", {
                      className: P.qr,
                      children: (0, s.jsx)(C.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: z,
                      }),
                  })
                : null,
        F = { maxHeight: L.height - 43 - 25 - 48 };
    M && (F.maxHeight -= 40);
    let X = null != d && r;
    return (0, s.jsx)("div", {
        className: i()(P.KQ, j ?? P.G6),
        style: F,
        onClick: O,
        onDoubleClick: O,
        "aria-label": e["aria-label"],
        children: (0, s.jsxs)(x.F, {
            component: u(),
            children: [
                (0, s.jsxs)(h.Ch, {
                    className: v ?? P.m4,
                    onScroll: X ? w : void 0,
                    ref: k,
                    children: [
                        (0, s.jsx)(c.hD, {
                            navigator: I,
                            children: (0, s.jsx)(c.PR, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, s.jsx)("div", { ref: t, ...n, children: G });
                                },
                            }),
                        }),
                        U,
                    ],
                }),
                K,
            ],
        }),
    });
}
function z(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: r,
            messages: i,
            hasMore: l,
            loading: o,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: u = !1,
            renderHeader: m,
            renderEmptyState: g,
            renderMessage: f,
            getProTip: p,
            scrollerClassName: x,
            className: h,
            onCloseMessage: A,
            listName: C,
            closeAriaLabel: k,
        } = e,
        T = (0, _.bG)([E.A], () => {
            let e = null != r ? E.A.getMessages(r.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function N(e, n) {
        let s = () => {
            let { id: s, channel_id: a } = e,
                r = j.A.getChannel(a);
            null != r && (b.A.trackJump(a, s, t), (0, v.pX)(D.BVt.CHANNEL(r.getGuildId(), a, s))), d?.(n);
        };
        (0, I.A)(e, s) && !T && s();
    }
    a.useEffect(() => {
        n(r);
    }, [r, n]);
    let S = a.useMemo(() => i?.map((e) => ({ message: e, channel: r })), [i, r]);
    return (0, s.jsx)(U, {
        className: h,
        scrollerClassName: x,
        items: S,
        loading: o,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: m,
        hasMore: l,
        loadMore: c,
        getProTip: p,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != f) return f(t, (e) => N(t, e));
            let a = [];
            return null == n
                ? []
                : (a.push(
                      (0, s.jsxs)(
                          "div",
                          {
                              className: P.Uc,
                              children: [
                                  (0, s.jsx)(M.A, { className: P.i0, message: t, channel: n }),
                                  (0, s.jsx)(B, {
                                      channel: r,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: u,
                                      jumpTo: N,
                                      onCloseMessage: A,
                                      closeAriaLabel: k,
                                  }),
                              ],
                          },
                          t.id,
                      ),
                  ),
                  a);
        },
        listName: C,
        "aria-label": e["aria-label"],
    });
}
