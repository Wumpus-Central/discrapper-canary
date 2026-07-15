n.d(s, { A: () => W }), n(134528), n(947204);
var t = n(627968),
    i = n(64700),
    l = n(837381),
    a = n(17928),
    r = n(462887),
    c = n(305866),
    d = n(707554),
    o = n(366605),
    u = n(661531),
    A = n(834730),
    h = n(689175),
    m = n(289873),
    g = n(821609),
    j = n(408278),
    x = n(789645),
    f = n(687709),
    p = n(493336),
    P = n(964486),
    N = n(928039),
    v = n(12351),
    b = n(202803),
    _ = n(81437),
    E = n(636922),
    C = n(145530),
    D = n(378570),
    k = n(363195),
    O = n(966833),
    y = n(734057),
    L = n(232835),
    S = n(576705),
    G = n(568548),
    R = n(174459),
    T = n(625494),
    U = n(652215),
    I = n(650583),
    M = n(375708),
    w = n(780255);
let H = "Channel Pins",
    K = [];
function W(e) {
    let { channel: s, onJump: n } = e,
        r = i.useRef(null),
        j = (0, N.A)("pins", r),
        { items: x, state: p } = (0, a.cf)([O.A], () => {
            let e = O.A.getPins(s.id);
            return { items: e?.items ?? K, state: e?.state ?? O.e.LOADING };
        }),
        _ = p !== O.e.LOADING && 0 === x.length,
        E = i.useMemo(() => x.map((e) => e.message), [x]),
        C = (0, a.bG)([G.Ay], () => G.Ay.hasUnreadPins(s.id));
    i.useEffect(() => {
        C && f.A.ackPins(s.id);
    }, [C, s.id]),
        (0, P.Ay)(() => {
            E.some(b.$r) && f.A.fetchPins(s.id, { reset: !0 });
        }),
        i.useEffect(() => {
            f.A.fetchPins(s.id);
        }, [s.id]),
        (0, P.Ay)(() => {
            R.default.track(U.HAw.OPEN_POPOUT, { type: H });
        }),
        (0, P.Ay)(() => {
            function e() {
                r.current?.scrollPageUp({ animate: !0 });
            }
            function s() {
                r.current?.scrollPageDown({ animate: !0 });
            }
            return (
                T._.subscribe(U.jej.SCROLL_PAGE_DOWN, s),
                T._.subscribe(U.jej.SCROLL_PAGE_UP, e),
                () => {
                    T._.unsubscribe(U.jej.SCROLL_PAGE_DOWN, s), T._.unsubscribe(U.jej.SCROLL_PAGE_UP, e);
                }
            );
        });
    let D = i.useCallback(() => {
        let e = r.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            p === O.e.LOADED_HAS_MORE &&
            f.A.fetchPins(s.id, { before: x.at(-1)?.pinnedAt });
    }, [p, s, x]);
    return (0, t.jsx)(c.l, {
        "aria-label": M.intl.string(M.t["mp1N/2"]),
        children: (0, t.jsx)("div", {
            className: w.KQ,
            onClick: (e) => e.stopPropagation(),
            onDoubleClick: (e) => e.stopPropagation(),
            "aria-label": M.intl.string(M.t["mp1N/2"]),
            children: (0, t.jsxs)(d.F, {
                component: (0, t.jsx)("div", {
                    className: w.wx,
                    children: (0, t.jsxs)("div", {
                        className: w.gn,
                        children: [
                            (0, t.jsx)(o.t, { color: u.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, t.jsx)(A.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: M.intl.string(M.t["mp1N/2"]),
                            }),
                        ],
                    }),
                }),
                children: [
                    (0, t.jsx)(l.hD, {
                        navigator: j,
                        children: (0, t.jsx)(l.PR, {
                            children: (e) => {
                                let { ref: i, ...l } = e;
                                return (0, t.jsxs)(h.Ch, {
                                    ref: (e) => {
                                        (r.current = e), (i.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: w.m4,
                                    onScroll: p === O.e.LOADED_HAS_MORE ? D : void 0,
                                    ...l,
                                    children: [
                                        E.map((e) => (0, t.jsx)($, { message: e, channel: s, onJump: n }, e.id)),
                                        p === O.e.LOADING
                                            ? (0, t.jsx)("div", {
                                                  className: 0 === E.length ? w.k$ : w.sw,
                                                  children: (0, t.jsx)(m.y, {}),
                                              })
                                            : 0 === E.length
                                              ? (0, t.jsx)(z, { channel: s })
                                              : p === O.e.LOADED_HAS_MORE
                                                ? (0, t.jsx)("div", {
                                                      className: w.u9,
                                                      children: (0, t.jsx)(g.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          fullWidth: !0,
                                                          text: M.intl.string(M.t.XBlaiC),
                                                          onClick: () =>
                                                              f.A.fetchPins(s.id, { before: x.at(-1)?.pinnedAt }),
                                                      }),
                                                  })
                                                : null,
                                    ],
                                });
                            },
                        }),
                    }),
                    _ &&
                        (0, t.jsx)("div", {
                            className: w.qr,
                            children: (0, t.jsx)(v.A, {
                                className: w.PP,
                                children: s.isPrivate() ? M.intl.string(M.t["3dLGAs"]) : M.intl.string(M.t.KTbRcg),
                            }),
                        }),
                ],
            }),
        }),
    });
}
function $(e) {
    let { message: s, channel: n, onJump: i } = e,
        l = (0, a.bG)([S.A], () => (null != n && n.isPrivate()) || S.A.can(U.xBc.PIN_MESSAGES, n)),
        r = (0, a.bG)([L.A], () => {
            let e = null != n ? L.A.getMessages(n.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    return (0, t.jsxs)("div", {
        className: w.Uc,
        children: [
            (0, t.jsx)(E.A, {
                className: w.i0,
                message: s,
                channel: n,
                onKeyDown: function (e) {
                    (e.key === I.dh.ENTER || e.key === I.dh.SPACE) &&
                        e.target === e.currentTarget &&
                        (e.preventDefault(), J(s, () => i(e)));
                },
            }),
            (0, t.jsxs)("div", {
                className: w.uu,
                children: [
                    (0, t.jsx)("div", {
                        className: w.UD,
                        children: (0, t.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            text: M.intl.string(M.t.k5WiPf),
                            onClick: (e) => J(s, () => i(e)),
                            loading: r,
                        }),
                    }),
                    l &&
                        (0, t.jsx)("div", {
                            className: w.UD,
                            children: (0, t.jsx)(j.K, {
                                icon: x.P,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": M.intl.string(M.t["Bse+F/"]),
                                onClick: (e) => {
                                    e.shiftKey ? f.A.unpinMessage(n, s.id) : C.A.confirmUnpin(n, s);
                                },
                            }),
                        }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { channel: s } = e,
        i = (0, a.bG)([k.A], () => (0, r.q)(k.A.theme));
    return (0, t.jsxs)("div", {
        className: w.zC,
        children: [
            (0, t.jsx)("div", { className: w.Sl, style: { backgroundImage: `url(${i ? n(395236) : n(90367)})` } }),
            (0, t.jsx)(A.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: w.rf,
                children: M.intl.string(s.isPrivate() ? M.t.rhqcbJ : M.t.fmyaWJ),
            }),
        ],
    });
}
function J(e, s) {
    function n() {
        let { id: n, channel_id: t } = e;
        null != y.A.getChannel(t) && (p.A.trackJump(t, n, H), (0, D.ci)(t, n)), s();
    }
    (0, _.A)(e, n) && n();
}
