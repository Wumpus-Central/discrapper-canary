(t(134528), t(947204));
var i = t(477900),
    n = t(582128),
    l = t(837381),
    a = t(855986),
    r = t(462887),
    c = t(305866),
    d = t(707554),
    o = t(366605),
    u = t(646514),
    h = t(834730),
    m = t(516521),
    A = t(289873),
    g = t(821609),
    x = t(408278),
    f = t(789645),
    j = t(687709),
    p = t(964486),
    v = t(928039),
    N = t(12351),
    P = t(642213),
    b = t(679164),
    E = t(636922),
    k = t(145530),
    y = t(413599),
    D = t(966833),
    C = t(596344),
    O = t(576705),
    S = t(218461),
    T = t(129230),
    _ = t(652215),
    G = t(650583),
    I = t(792996),
    L = t(9570);
let M = "Channel Pins",
    R = [];
function K(e) {
    let { message: s, channel: t, onJump: n } = e,
        l = (0, a.bG)([O.A], () => (null != t && t.isPrivate()) || O.A.can(_.xBc.PIN_MESSAGES, t)),
        r = (0, a.bG)([C.A], () => {
            let e = null != t ? C.A.getMessages(t.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    return (0, i.jsxs)("div", {
        className: L.Uc,
        children: [
            (0, i.jsx)(E.A, {
                className: L.i0,
                message: s,
                channel: t,
                onKeyDown: function (e) {
                    (e.key === G.dh.ENTER || e.key === G.dh.SPACE) &&
                        e.target === e.currentTarget &&
                        (e.preventDefault(), (0, P.KW)(s, M, () => n(e)));
                },
            }),
            (0, i.jsxs)("div", {
                className: L.uu,
                children: [
                    (0, i.jsx)("div", {
                        className: L.UD,
                        children: (0, i.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            text: I.intl.string(I.t.k5WiPf),
                            onClick: (e) => (0, P.KW)(s, M, () => n(e)),
                            loading: r,
                        }),
                    }),
                    l &&
                        (0, i.jsx)("div", {
                            className: L.UD,
                            children: (0, i.jsx)(x.K, {
                                icon: f.P,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": I.intl.string(I.t["Bse+F/"]),
                                onClick: (e) => {
                                    e.shiftKey ? j.A.unpinMessage(t, s.id) : k.A.confirmUnpin(t, s);
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
        n = (0, a.bG)([y.A], () => (0, r.q)(y.A.theme));
    return (0, i.jsxs)("div", {
        className: L.zC,
        children: [
            (0, i.jsx)("div", { className: L.Sl, style: { backgroundImage: `url(${n ? t(395236) : t(90367)})` } }),
            (0, i.jsx)(h.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: L.rf,
                children: I.intl.string(s.isPrivate() ? I.t.rhqcbJ : I.t.fmyaWJ),
            }),
        ],
    });
}
t.d(
    s,
    {},
    {
        A: function (e) {
            let { channel: s, onJump: t } = e,
                r = n.useRef(null),
                x = (0, v.A)("pins", r);
            (0, P.xN)(r);
            let { items: f, state: E } = (0, a.cf)([D.A], () => {
                    let e = D.A.getPins(s.id);
                    return { items: e?.items ?? R, state: e?.state ?? D.e.LOADING };
                }),
                k = E !== D.e.LOADING && 0 === f.length,
                y = n.useMemo(() => f.map((e) => e.message), [f]),
                C = (0, a.bG)([S.Ay], () => S.Ay.hasUnreadPins(s.id));
            (n.useEffect(() => {
                C && j.A.ackPins(s.id);
            }, [C, s.id]),
                (0, p.Ay)(() => {
                    y.some(b.$r) && j.A.fetchPins(s.id, { reset: !0 });
                }),
                n.useEffect(() => {
                    j.A.fetchPins(s.id);
                }, [s.id]),
                (0, p.Ay)(() => {
                    T.default.track(_.HAw.OPEN_POPOUT, { type: M });
                }));
            let O = n.useCallback(() => {
                let e = r.current?.getScrollerState();
                null != e &&
                    e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
                    E === D.e.LOADED_HAS_MORE &&
                    j.A.fetchPins(s.id, { before: f.at(-1)?.pinnedAt });
            }, [E, s, f]);
            return (0, i.jsx)(c.l, {
                "aria-label": I.intl.string(I.t["mp1N/2"]),
                children: (0, i.jsx)("div", {
                    className: L.KQ,
                    onClick: (e) => e.stopPropagation(),
                    onDoubleClick: (e) => e.stopPropagation(),
                    "aria-label": I.intl.string(I.t["mp1N/2"]),
                    children: (0, i.jsxs)(d.F, {
                        component: (0, i.jsx)("div", {
                            className: L.wx,
                            children: (0, i.jsxs)("div", {
                                className: L.gn,
                                children: [
                                    (0, i.jsx)(o.t, { color: u.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                    (0, i.jsx)(h.E, {
                                        variant: "body-lg/semibold",
                                        color: "interactive-text-active",
                                        children: I.intl.string(I.t["mp1N/2"]),
                                    }),
                                ],
                            }),
                        }),
                        children: [
                            (0, i.jsx)(l.hD, {
                                navigator: x,
                                children: (0, i.jsx)(l.PR, {
                                    children: (e) => {
                                        let { ref: n, ...l } = e;
                                        return (0, i.jsxs)(m.Ch, {
                                            ref: (e) => {
                                                ((r.current = e), (n.current = e?.getScrollerNode() ?? null));
                                            },
                                            className: L.m4,
                                            onScroll: E === D.e.LOADED_HAS_MORE ? O : void 0,
                                            ...l,
                                            children: [
                                                y.map((e) =>
                                                    (0, i.jsx)(K, { message: e, channel: s, onJump: t }, e.id),
                                                ),
                                                E === D.e.LOADING
                                                    ? (0, i.jsx)("div", {
                                                          className: 0 === y.length ? L.k$ : L.sw,
                                                          children: (0, i.jsx)(A.y, {}),
                                                      })
                                                    : 0 === y.length
                                                      ? (0, i.jsx)(U, { channel: s })
                                                      : E === D.e.LOADED_HAS_MORE
                                                        ? (0, i.jsx)("div", {
                                                              className: L.u9,
                                                              children: (0, i.jsx)(g.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  text: I.intl.string(I.t.XBlaiC),
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
                                (0, i.jsx)("div", {
                                    className: L.qr,
                                    children: (0, i.jsx)(N.A, {
                                        className: L.PP,
                                        children: s.isPrivate()
                                            ? I.intl.string(I.t["3dLGAs"])
                                            : I.intl.string(I.t.KTbRcg),
                                    }),
                                }),
                        ],
                    }),
                }),
            });
        },
    },
);
