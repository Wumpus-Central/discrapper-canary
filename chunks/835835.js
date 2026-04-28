s.d(l, { Ay: () => R, Y9: () => B, u9: () => D }), s(321073);
var n = s(627968),
    t = s(64700),
    a = s(503698),
    r = s.n(a),
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
    A = s(720149),
    N = s(928039),
    v = s(12351),
    f = s(976860),
    b = s(734057),
    k = s(232835),
    _ = s(576705),
    E = s(519057),
    P = s(531685),
    y = s(954571),
    S = s(625494),
    T = s(81437),
    G = s(636922),
    L = s(652215),
    M = s(985018),
    w = s(251066);
function O(e) {
    e.stopPropagation();
}
let B = (e) => {
        let { title: l, icon: s, children: t, className: a } = e;
        return (0, n.jsxs)("div", {
            className: r()(a, w.wx),
            children: [
                (0, n.jsxs)("div", {
                    className: w.gn,
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
            className: w.zC,
            children: [
                (0, n.jsx)("div", { className: w.Sl, style: { backgroundImage: `url(${s})` } }),
                (0, n.jsx)("div", { className: w.rf, children: l }),
            ],
        });
    };
class U extends t.PureComponent {
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
            className: w.UD,
            children: (0, n.jsx)(m.$, {
                variant: "secondary",
                size: "sm",
                text: M.intl.string(M.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e,
            }),
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: l,
            canManageMessages: s,
            channel: t,
            closeAriaLabel: a,
        } = this.props;
        return null != e && (l || s || (null != t && t.isPrivate()))
            ? (0, n.jsx)("div", {
                  className: w.UD,
                  children: (0, n.jsx)(j.K, {
                      icon: p.P,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": a ?? M.intl.string(M.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, n.jsxs)("div", { className: w.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let H = d.Ay.connectStores([_.A], (e) => {
    let { channel: l } = e;
    return { canManageMessages: null != l && _.A.can(L.xBc.MANAGE_MESSAGES, l) };
})(U);
function I(e) {
    let {
            analyticsName: l,
            items: s,
            hasMore: a,
            loading: i,
            loadMore: o,
            renderHeader: h,
            renderEmptyState: j,
            renderItem: p,
            getProTip: A,
            scrollerClassName: f,
            className: b,
            listName: k,
        } = e,
        _ = t.useRef(null),
        T = (0, N.A)(k, _),
        G = (0, d.bG)([E.Ay], () => E.Ay.hasNotice()),
        B = (0, d.bG)([P.A], () => P.A.windowSize());
    t.useEffect(() => {
        y.default.track(L.HAw.OPEN_POPOUT, { type: l });
    }, [l]),
        t.useEffect(() => {
            function e() {
                _.current?.scrollPageUp({ animate: !0 });
            }
            function l() {
                _.current?.scrollPageDown({ animate: !0 });
            }
            return (
                S._.subscribe(L.jej.SCROLL_PAGE_DOWN, l),
                S._.subscribe(L.jej.SCROLL_PAGE_UP, e),
                () => {
                    S._.unsubscribe(L.jej.SCROLL_PAGE_DOWN, l), S._.unsubscribe(L.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let D = t.useCallback(() => {
            let e = _.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && a && !i && o?.();
        }, [a, o, i]),
        U = [],
        H = !0;
    null == s || (i && 0 === s.length)
        ? (U = [(0, n.jsx)("div", { className: r()(w.zC, w.k$), children: (0, n.jsx)(g.y, {}) }, "spinner")])
        : 0 === s.length
          ? U.push((0, n.jsx)(t.Fragment, { children: j() }, "empty-state"))
          : ((H = !1),
            (U = []),
            c().each(s, (e) => {
                U.push(...p(e));
            }));
    let I = null;
    null != s &&
        s.length > 0 &&
        null != o &&
        (I = i
            ? (0, n.jsx)("div", { className: w.sw, children: (0, n.jsx)(g.y, {}) }, "loading-more-after")
            : a
              ? (0, n.jsx)("div", {
                    className: w.u9,
                    children: (0, n.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: M.intl.string(M.t.XBlaiC),
                        onClick: o,
                    }),
                })
              : (0, n.jsx)("div", { className: w.lJ, children: j() }));
    let R = A?.(),
        z =
            H && null != R
                ? (0, n.jsx)("div", {
                      className: w.qr,
                      children: (0, n.jsx)(v.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: R,
                      }),
                  })
                : null,
        J = { maxHeight: B.height - 43 - 25 - 48 };
    G && (J.maxHeight -= 40);
    let W = null != o && a;
    return (0, n.jsx)("div", {
        className: r()(w.KQ, b ?? w.G6),
        style: J,
        onClick: O,
        onDoubleClick: O,
        "aria-label": e["aria-label"],
        children: (0, n.jsxs)(x.F, {
            component: h(),
            children: [
                (0, n.jsxs)(C.Ch, {
                    className: f ?? w.m4,
                    onScroll: W ? D : void 0,
                    ref: _,
                    children: [
                        (0, n.jsx)(u.hD, {
                            navigator: T,
                            children: (0, n.jsx)(u.PR, {
                                children: (e) => {
                                    let { ref: l, ...s } = e;
                                    return (0, n.jsx)("div", { ref: l, ...s, children: U });
                                },
                            }),
                        }),
                        I,
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
            channel: a,
            messages: r,
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
            onCloseMessage: N,
            listName: v,
            closeAriaLabel: _,
        } = e,
        E = (0, d.bG)([k.A], () => {
            let e = null != a ? k.A.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, s) {
        let n = () => {
            let { id: n, channel_id: t } = e,
                a = b.A.getChannel(t);
            null != a && (A.A.trackJump(t, n, l), (0, f.pX)(L.BVt.CHANNEL(a.getGuildId(), t, n))), o?.(s);
        };
        (0, T.A)(e, n) && !E && n();
    }
    t.useEffect(() => {
        s(a);
    }, [a, s]);
    let y = t.useMemo(() => r?.map((e) => ({ message: e, channel: a })), [r, a]);
    return (0, n.jsx)(I, {
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
            if (null != p) return p(l, (e) => P(l, e));
            let t = [];
            return null == s
                ? []
                : (t.push(
                      (0, n.jsxs)(
                          "div",
                          {
                              className: w.Uc,
                              children: [
                                  (0, n.jsx)(G.A, { className: w.i0, message: l, channel: s }),
                                  (0, n.jsx)(H, {
                                      channel: a,
                                      message: l,
                                      jumping: E,
                                      canCloseAllMessages: h,
                                      jumpTo: P,
                                      onCloseMessage: N,
                                      closeAriaLabel: _,
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
