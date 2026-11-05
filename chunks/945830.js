(n(134528), n(947204));
var t = n(477900),
    i = n(582128),
    l = n(837381),
    a = n(855986),
    r = n(462887),
    c = n(305866),
    d = n(707554),
    o = n(366605),
    u = n(646514),
    h = n(834730),
    m = n(516521),
    A = n(289873),
    g = n(821609),
    x = n(408278),
    f = n(789645),
    j = n(687709),
    p = n(964486),
    v = n(928039),
    N = n(12351),
    P = n(642213),
    b = n(679164),
    E = n(636922),
    k = n(145530),
    y = n(413599),
    D = n(966833),
    C = n(596344),
    S = n(576705),
    O = n(218461),
    T = n(129230),
    _ = n(652215),
    I = n(650583),
    G = n(792996),
    L = n(9570);
let M = "Channel Pins",
    R = [];
function K(e) {
    let { message: s, channel: n, onJump: i } = e,
        l = (0, a.bG)([S.A], () => (null != n && n.isPrivate()) || S.A.can(_.xBc.PIN_MESSAGES, n)),
        r = (0, a.bG)([C.A], () => {
            let e = null != n ? C.A.getMessages(n.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    return (0, t.jsxs)("div", {
        className: L.Uc,
        children: [
            (0, t.jsx)(E.A, {
                className: L.i0,
                message: s,
                channel: n,
                onKeyDown: function (e) {
                    (e.key === I.dh.ENTER || e.key === I.dh.SPACE) &&
                        e.target === e.currentTarget &&
                        (e.preventDefault(), (0, P.KW)(s, M, () => i(e)));
                },
            }),
            (0, t.jsxs)("div", {
                className: L.uu,
                children: [
                    (0, t.jsx)("div", {
                        className: L.UD,
                        children: (0, t.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            text: G.intl.string(G.t.k5WiPf),
                            onClick: (e) => (0, P.KW)(s, M, () => i(e)),
                            loading: r,
                        }),
                    }),
                    l &&
                        (0, t.jsx)("div", {
                            className: L.UD,
                            children: (0, t.jsx)(x.K, {
                                icon: f.XSmallIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": G.intl.string(G.t["Bse+F/"]),
                                onClick: (e) => {
                                    e.shiftKey ? j.A.unpinMessage(n, s.id) : k.A.confirmUnpin(n, s);
                                },
                            }),
                        }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { channel: s } = e,
        i = (0, a.bG)([y.A], () => (0, r.q)(y.A.theme));
    return (0, t.jsxs)("div", {
        className: L.zC,
        children: [
            (0, t.jsx)("div", { className: L.Sl, style: { backgroundImage: `url(${i ? n(395236) : n(90367)})` } }),
            (0, t.jsx)(h.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: L.rf,
                children: G.intl.string(s.isPrivate() ? G.t.rhqcbJ : G.t.fmyaWJ),
            }),
        ],
    });
}
n.d(
    s,
    {},
    {
        A: function (e) {
            let { channel: s, onJump: n } = e,
                r = i.useRef(null),
                x = (0, v.A)("pins", r);
            (0, P.xN)(r);
            let { items: f, state: E } = (0, a.cf)([D.A], () => {
                    let e = D.A.getPins(s.id);
                    return { items: e?.items ?? R, state: e?.state ?? D.e.LOADING };
                }),
                k = E !== D.e.LOADING && 0 === f.length,
                y = i.useMemo(() => f.map((e) => e.message), [f]),
                C = (0, a.bG)([O.Ay], () => O.Ay.hasUnreadPins(s.id));
            (i.useEffect(() => {
                C && j.A.ackPins(s.id);
            }, [C, s.id]),
                (0, p.Ay)(() => {
                    y.some(b.$r) && j.A.fetchPins(s.id, { reset: !0 });
                }),
                i.useEffect(() => {
                    j.A.fetchPins(s.id);
                }, [s.id]),
                (0, p.Ay)(() => {
                    T.default.track(_.HAw.OPEN_POPOUT, { type: M });
                }));
            let S = i.useCallback(() => {
                let e = r.current?.getScrollerState();
                null != e &&
                    e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
                    E === D.e.LOADED_HAS_MORE &&
                    j.A.fetchPins(s.id, { before: f.at(-1)?.pinnedAt });
            }, [E, s, f]);
            return (0, t.jsx)(c.l, {
                "aria-label": G.intl.string(G.t["mp1N/2"]),
                children: (0, t.jsx)("div", {
                    className: L.KQ,
                    onClick: (e) => e.stopPropagation(),
                    onDoubleClick: (e) => e.stopPropagation(),
                    "aria-label": G.intl.string(G.t["mp1N/2"]),
                    children: (0, t.jsxs)(d.F, {
                        component: (0, t.jsx)("div", {
                            className: L.wx,
                            children: (0, t.jsxs)("div", {
                                className: L.gn,
                                children: [
                                    (0, t.jsx)(o.PinIcon, { color: u.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, t.jsx)(h.E, {
                                        variant: "body-lg/semibold",
                                        color: "interactive-text-active",
                                        children: G.intl.string(G.t["mp1N/2"]),
                                    }),
                                ],
                            }),
                        }),
                        children: [
                            (0, t.jsx)(l.hD, {
                                navigator: x,
                                children: (0, t.jsx)(l.PR, {
                                    children: (e) => {
                                        let { ref: i, ...l } = e;
                                        return (0, t.jsxs)(m.Ch, {
                                            ref: (e) => {
                                                ((r.current = e), (i.current = e?.getScrollerNode() ?? null));
                                            },
                                            className: L.m4,
                                            onScroll: E === D.e.LOADED_HAS_MORE ? S : void 0,
                                            ...l,
                                            children: [
                                                y.map((e) =>
                                                    (0, t.jsx)(K, { message: e, channel: s, onJump: n }, e.id),
                                                ),
                                                E === D.e.LOADING
                                                    ? (0, t.jsx)("div", {
                                                          className: 0 === y.length ? L.k$ : L.sw,
                                                          children: (0, t.jsx)(A.y, {}),
                                                      })
                                                    : 0 === y.length
                                                      ? (0, t.jsx)(U, { channel: s })
                                                      : E === D.e.LOADED_HAS_MORE
                                                        ? (0, t.jsx)("div", {
                                                              className: L.u9,
                                                              children: (0, t.jsx)(g.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  text: G.intl.string(G.t.XBlaiC),
                                                                  onClick: () =>
                                                                      j.A.fetchPins(s.id, {
                                                                          before: f.at(-1)?.pinnedAt,
                                                                      }),
                                                              }),
                                                          })
                                                        : null,
                                            ],
                                        });
                                    },
                                }),
                            }),
                            k &&
                                (0, t.jsx)("div", {
                                    className: L.qr,
                                    children: (0, t.jsx)(N.A, {
                                        className: L.PP,
                                        children: s.isPrivate()
                                            ? G.intl.string(G.t["3dLGAs"])
                                            : G.intl.string(G.t.KTbRcg),
                                    }),
                                }),
                        ],
                    }),
                }),
            });
        },
    },
);
