n.d(t, { A: () => x }), n(134528), n(947204);
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(462887),
    r = n(305866),
    o = n(366605),
    c = n(687709),
    d = n(964486),
    u = n(202803),
    h = n(145530),
    g = n(835835),
    m = n(363195),
    A = n(966833),
    p = n(222823),
    C = n(985018);
let E = [];
function x(e) {
    let { channel: t, onJump: x } = e,
        { items: N, state: f } = (0, s.cf)([A.A], () => {
            let e = A.A.getPins(t.id);
            return { items: e?.items ?? E, state: e?.state ?? A.e.LOADING };
        }),
        _ = i.useMemo(() => N.map((e) => e.message), [N]),
        T = (0, s.bG)([p.Ay], () => p.Ay.hasUnreadPins(t.id));
    i.useEffect(() => {
        T && c.A.ackPins(t.id);
    }, [T, t.id]),
        (0, d.Ay)(() => {
            _.some(u.$r) && c.A.fetchPins(t.id, { reset: !0 });
        });
    let v = i.useCallback(() => {
            c.A.fetchPins(t.id);
        }, [t.id]),
        I = i.useCallback(() => {
            c.A.fetchPins(t.id, { before: N.at(-1)?.pinnedAt });
        }, [t.id, N]),
        S = (0, s.bG)([m.A], () => (0, a.q)(m.A.theme));
    return (0, l.jsx)(r.l, {
        "aria-label": C.intl.string(C.t["mp1N/2"]),
        children: (0, l.jsx)(g.Ay, {
            channel: t,
            onFetch: v,
            messages: _,
            loading: f === A.e.LOADING,
            hasMore: f === A.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (N.length > 0) return;
                let e = C.intl.string(t.isPrivate() ? C.t.rhqcbJ : C.t.fmyaWJ),
                    i = S ? n(395236) : n(90367);
                return (0, l.jsx)(g.u9, { msg: e, image: i }, "emptystate");
            },
            renderHeader: () => (0, l.jsx)(g.Y9, { icon: o.t, title: C.intl.string(C.t["mp1N/2"]) }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? c.A.unpinMessage(t, e.id) : h.A.confirmUnpin(t, e));
            },
            onJump: x,
            loadMore: I,
            getProTip: function () {
                return t.isPrivate() ? C.intl.string(C.t["3dLGAs"]) : C.intl.string(C.t.KTbRcg);
            },
            listName: "pins",
            closeAriaLabel: C.intl.string(C.t["Bse+F/"]),
        }),
    });
}
