n.d(t, { A: () => _ }), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(582754),
    r = n(397927),
    o = n(687709),
    c = n(964486),
    d = n(202803),
    u = n(145530),
    h = n(835835),
    m = n(544028),
    A = n(966833),
    p = n(222823),
    g = n(985018);
let f = [];
function _(e) {
    let { channel: t, onJump: _ } = e,
        { items: E, state: C } = (0, a.cf)([A.A], () => {
            let e = A.A.getPins(t.id);
            return { items: e?.items ?? f, state: e?.state ?? A.e.LOADING };
        }),
        x = l.useMemo(() => E.map((e) => e.message), [E]),
        S = (0, a.bG)([p.Ay], () => p.Ay.hasUnreadPins(t.id));
    l.useEffect(() => {
        S && o.A.ackPins(t.id);
    }, [S, t.id]),
        (0, c.Ay)(() => {
            x.some(d.$r) && o.A.fetchPins(t.id, { reset: !0 });
        });
    let T = l.useCallback(() => {
            o.A.fetchPins(t.id);
        }, [t.id]),
        I = l.useCallback(() => {
            o.A.fetchPins(t.id, { before: E.at(-1)?.pinnedAt });
        }, [t.id, E]),
        N = (0, a.bG)([m.A], () => (0, s.qB)(m.A.theme));
    return (0, i.jsx)(r.lGe, {
        "aria-label": g.intl.string(g.t["mp1N/2"]),
        children: (0, i.jsx)(h.Ay, {
            channel: t,
            onFetch: T,
            messages: x,
            loading: C === A.e.LOADING,
            hasMore: C === A.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (E.length > 0) return;
                let e = g.intl.string(t.isPrivate() ? g.t.rhqcbJ : g.t.fmyaWJ),
                    l = N ? n(395236) : n(90367);
                return (0, i.jsx)(h.u9, { msg: e, image: l }, "emptystate");
            },
            renderHeader: () => (0, i.jsx)(h.Y9, { icon: r.tsw, title: g.intl.string(g.t["mp1N/2"]) }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : u.A.confirmUnpin(t, e));
            },
            onJump: _,
            loadMore: I,
            getProTip: function () {
                return t.isPrivate() ? g.intl.string(g.t["3dLGAs"]) : g.intl.string(g.t.KTbRcg);
            },
            listName: "pins",
            closeAriaLabel: g.intl.string(g.t["Bse+F/"]),
        }),
    });
}
