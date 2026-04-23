n.d(t, { Ay: () => V, Y9: () => w, u9: () => U }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(837381),
    d = n(17928),
    u = n(661531),
    h = n(834730),
    g = n(821609),
    m = n(408278),
    A = n(789645),
    p = n(289873),
    C = n(707554),
    E = n(689175),
    x = n(720149),
    N = n(928039),
    f = n(12351),
    _ = n(976860),
    T = n(734057),
    v = n(232835),
    I = n(576705),
    S = n(519057),
    j = n(531685),
    y = n(954571),
    R = n(625494),
    P = n(81437),
    O = n(636922),
    D = n(652215),
    b = n(985018),
    M = n(251066);
function L(e) {
    e.stopPropagation();
}
let w = (e) => {
        let { title: t, icon: n, children: i, className: s } = e;
        return (0, l.jsxs)("div", {
            className: a()(s, M.wx),
            children: [
                (0, l.jsxs)("div", {
                    className: M.gn,
                    children: [
                        null != n ? (0, l.jsx)(n, { color: u.A.colors.INTERACTIVE_TEXT_DEFAULT }) : null,
                        null != t
                            ? (0, l.jsx)(h.E, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              })
                            : null,
                    ],
                }),
                i,
            ],
        });
    },
    U = (e) => {
        let { msg: t, image: n } = e;
        return (0, l.jsxs)("div", {
            className: M.zC,
            children: [
                (0, l.jsx)("div", { className: M.Sl, style: { backgroundImage: `url(${n})` } }),
                (0, l.jsx)("div", { className: M.rf, children: t }),
            ],
        });
    };
class G extends i.PureComponent {
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
            className: M.UD,
            children: (0, l.jsx)(g.$, {
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
            channel: i,
            closeAriaLabel: s,
        } = this.props;
        return null != e && (t || n || (null != i && i.isPrivate()))
            ? (0, l.jsx)("div", {
                  className: M.UD,
                  children: (0, l.jsx)(m.K, {
                      icon: A.P,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": s ?? b.intl.string(b.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, l.jsxs)("div", { className: M.uu, children: [this.renderJumpButton(), this.renderCloseButton()] });
    }
}
let k = d.Ay.connectStores([I.A], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && I.A.can(D.xBc.MANAGE_MESSAGES, t) };
})(G);
function F(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: s,
            loading: r,
            loadMore: u,
            renderHeader: h,
            renderEmptyState: m,
            renderItem: A,
            getProTip: x,
            scrollerClassName: _,
            className: T,
            listName: v,
        } = e,
        I = i.useRef(null),
        P = (0, N.A)(v, I),
        O = (0, d.bG)([S.Ay], () => S.Ay.hasNotice()),
        w = (0, d.bG)([j.A], () => j.A.windowSize());
    i.useEffect(() => {
        y.default.track(D.HAw.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                I.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                I.current?.scrollPageDown({ animate: !0 });
            }
            return (
                R._.subscribe(D.jej.SCROLL_PAGE_DOWN, t),
                R._.subscribe(D.jej.SCROLL_PAGE_UP, e),
                () => {
                    R._.unsubscribe(D.jej.SCROLL_PAGE_DOWN, t), R._.unsubscribe(D.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let U = i.useCallback(() => {
            let e = I.current?.getScrollerState();
            null != e && e.scrollHeight - e.scrollTop - e.offsetHeight < 250 && s && !r && u?.();
        }, [s, u, r]),
        G = [],
        k = !0;
    null == n || (r && 0 === n.length)
        ? (G = [(0, l.jsx)("div", { className: a()(M.zC, M.k$), children: (0, l.jsx)(p.y, {}) }, "spinner")])
        : 0 === n.length
          ? G.push((0, l.jsx)(i.Fragment, { children: m() }, "empty-state"))
          : ((k = !1),
            (G = []),
            o().each(n, (e) => {
                G.push(...A(e));
            }));
    let F = null;
    null != n &&
        n.length > 0 &&
        null != u &&
        (F = r
            ? (0, l.jsx)("div", { className: M.sw, children: (0, l.jsx)(p.y, {}) }, "loading-more-after")
            : s
              ? (0, l.jsx)("div", {
                    className: M.u9,
                    children: (0, l.jsx)(g.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: b.intl.string(b.t.XBlaiC),
                        onClick: u,
                    }),
                })
              : (0, l.jsx)("div", { className: M.lJ, children: m() }));
    let V = x?.(),
        H =
            k && null != V
                ? (0, l.jsx)("div", {
                      className: M.qr,
                      children: (0, l.jsx)(f.A, {
                          style: { width: "100%", paddingTop: 10, paddingBottom: 10 },
                          children: V,
                      }),
                  })
                : null,
        B = { maxHeight: w.height - 43 - 25 - 48 };
    O && (B.maxHeight -= 40);
    let z = null != u && s;
    return (0, l.jsx)("div", {
        className: a()(M.KQ, T ?? M.G6),
        style: B,
        onClick: L,
        onDoubleClick: L,
        "aria-label": e["aria-label"],
        children: (0, l.jsxs)(C.F, {
            component: h(),
            children: [
                (0, l.jsxs)(E.Ch, {
                    className: _ ?? M.m4,
                    onScroll: z ? U : void 0,
                    ref: I,
                    children: [
                        (0, l.jsx)(c.hD, {
                            navigator: P,
                            children: (0, l.jsx)(c.PR, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, l.jsx)("div", { ref: t, ...n, children: G });
                                },
                            }),
                        }),
                        F,
                    ],
                }),
                H,
            ],
        }),
    });
}
function V(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: s,
            messages: a,
            hasMore: r,
            loading: o,
            loadMore: c,
            onJump: u,
            canCloseAllMessages: h = !1,
            renderHeader: g,
            renderEmptyState: m,
            renderMessage: A,
            getProTip: p,
            scrollerClassName: C,
            className: E,
            onCloseMessage: N,
            listName: f,
            closeAriaLabel: I,
        } = e,
        S = (0, d.bG)([v.A], () => {
            let e = null != s ? v.A.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function j(e, n) {
        let l = () => {
            let { id: l, channel_id: i } = e,
                s = T.A.getChannel(i);
            null != s && (x.A.trackJump(i, l, t), (0, _.pX)(D.BVt.CHANNEL(s.getGuildId(), i, l))), u?.(n);
        };
        (0, P.A)(e, l) && !S && l();
    }
    i.useEffect(() => {
        n(s);
    }, [s, n]);
    let y = i.useMemo(() => a?.map((e) => ({ message: e, channel: s })), [a, s]);
    return (0, l.jsx)(F, {
        className: E,
        scrollerClassName: C,
        items: y,
        loading: o,
        analyticsName: t,
        renderEmptyState: m,
        renderHeader: g,
        hasMore: r,
        loadMore: c,
        getProTip: p,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != A) return A(t, (e) => j(t, e));
            let i = [];
            return null == n
                ? []
                : (i.push(
                      (0, l.jsxs)(
                          "div",
                          {
                              className: M.Uc,
                              children: [
                                  (0, l.jsx)(O.A, { className: M.i0, message: t, channel: n }),
                                  (0, l.jsx)(k, {
                                      channel: s,
                                      message: t,
                                      jumping: S,
                                      canCloseAllMessages: h,
                                      jumpTo: j,
                                      onCloseMessage: N,
                                      closeAriaLabel: I,
                                  }),
                              ],
                          },
                          t.id,
                      ),
                  ),
                  i);
        },
        listName: f,
        "aria-label": e["aria-label"],
    });
}
