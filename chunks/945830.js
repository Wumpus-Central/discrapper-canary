n.d(t, { A: () => E }), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(462887),
    r = n(305866),
    o = n(366605),
    c = n(687709),
    d = n(964486),
    u = n(202803),
    h = n(145530),
    m = n(835835),
    A = n(544028),
    g = n(966833),
    p = n(222823),
    _ = n(985018);
let f = [];
function E(e) {
    let { channel: t, onJump: E } = e,
        { items: C, state: x } = (0, a.cf)([g.A], () => {
            let e = g.A.getPins(t.id);
            return { items: e?.items ?? f, state: e?.state ?? g.e.LOADING };
        }),
        S = l.useMemo(() => C.map((e) => e.message), [C]),
        I = (0, a.bG)([p.Ay], () => p.Ay.hasUnreadPins(t.id));
    l.useEffect(() => {
        I && c.A.ackPins(t.id);
    }, [I, t.id]),
        (0, d.Ay)(() => {
            S.some(u.$r) && c.A.fetchPins(t.id, { reset: !0 });
        });
    let N = l.useCallback(() => {
            c.A.fetchPins(t.id);
        }, [t.id]),
        v = l.useCallback(() => {
            c.A.fetchPins(t.id, { before: C.at(-1)?.pinnedAt });
        }, [t.id, C]),
        T = (0, a.bG)([A.A], () => (0, s.q)(A.A.theme));
    return (0, i.jsx)(r.l, {
        "aria-label": _.intl.string(_.t["mp1N/2"]),
        children: (0, i.jsx)(m.Ay, {
            channel: t,
            onFetch: N,
            messages: S,
            loading: x === g.e.LOADING,
            hasMore: x === g.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (C.length > 0) return;
                let e = _.intl.string(t.isPrivate() ? _.t.rhqcbJ : _.t.fmyaWJ),
                    l = T ? n(395236) : n(90367);
                return (0, i.jsx)(m.u9, { msg: e, image: l }, "emptystate");
            },
            renderHeader: () => (0, i.jsx)(m.Y9, { icon: o.t, title: _.intl.string(_.t["mp1N/2"]) }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? c.A.unpinMessage(t, e.id) : h.A.confirmUnpin(t, e));
            },
            onJump: E,
            loadMore: v,
            getProTip: function () {
                return t.isPrivate() ? _.intl.string(_.t["3dLGAs"]) : _.intl.string(_.t.KTbRcg);
            },
            listName: "pins",
            closeAriaLabel: _.intl.string(_.t["Bse+F/"]),
        }),
    });
}
