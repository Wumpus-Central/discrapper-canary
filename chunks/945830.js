n.d(t, { A: () => A }), n(134528), n(947204);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(582754),
    s = n(397927),
    o = n(687709),
    c = n(964486),
    u = n(202803),
    d = n(145530),
    f = n(835835),
    p = n(544028),
    h = n(966833),
    b = n(222823),
    g = n(985018);
let m = [];
function A(e) {
    let { channel: t, onJump: A } = e,
        { items: y, state: O } = (0, i.cf)([h.A], () => {
            var e, n;
            let r = h.A.getPins(t.id);
            return {
                items: null != (e = null == r ? void 0 : r.items) ? e : m,
                state: null != (n = null == r ? void 0 : r.state) ? n : h.e.LOADING,
            };
        }),
        j = l.useMemo(() => y.map((e) => e.message), [y]),
        v = (0, i.bG)([b.Ay], () => b.Ay.hasUnreadPins(t.id));
    l.useEffect(() => {
        v && o.A.ackPins(t.id);
    }, [v, t.id]),
        (0, c.Ay)(() => {
            j.some(u.$r) && o.A.fetchPins(t.id, { reset: !0 });
        });
    let x = l.useCallback(() => {
            o.A.fetchPins(t.id);
        }, [t.id]),
        E = l.useCallback(() => {
            var e;
            o.A.fetchPins(t.id, { before: null == (e = y.at(-1)) ? void 0 : e.pinnedAt });
        }, [t.id, y]),
        _ = (0, i.bG)([p.A], () => (0, a.qB)(p.A.theme));
    return (0, r.jsx)(s.lGe, {
        "aria-label": g.intl.string(g.t["mp1N/2"]),
        children: (0, r.jsx)(f.Ay, {
            channel: t,
            onFetch: x,
            messages: j,
            loading: O === h.e.LOADING,
            hasMore: O === h.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (y.length > 0) return;
                let e = g.intl.string(t.isPrivate() ? g.t.rhqcbJ : g.t.fmyaWJ),
                    l = _ ? n(395236) : n(90367);
                return (0, r.jsx)(
                    f.u9,
                    {
                        msg: e,
                        image: l,
                    },
                    "emptystate",
                );
            },
            renderHeader: () =>
                (0, r.jsx)(f.Y9, {
                    icon: s.tsw,
                    title: g.intl.string(g.t["mp1N/2"]),
                }),
            onCloseMessage: function (e, n) {
                null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : d.A.confirmUnpin(t, e));
            },
            onJump: A,
            loadMore: E,
            getProTip: function () {
                return t.isPrivate() ? g.intl.string(g.t["3dLGAs"]) : g.intl.string(g.t.KTbRcg);
            },
            listName: "pins",
            closeAriaLabel: g.intl.string(g.t["Bse+F/"]),
        }),
    });
}
