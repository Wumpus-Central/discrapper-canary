s.d(t, { A: () => P }), s(134528), s(947204);
var i = s(627968),
    n = s(64700),
    a = s(17928),
    r = s(462887),
    l = s(305866),
    c = s(366605),
    d = s(687709),
    o = s(964486),
    A = s(202803),
    u = s(145530),
    p = s(835835),
    g = s(363195),
    m = s(966833),
    h = s(222823),
    f = s(375708);
let b = [];
function P(e) {
    let { channel: t, onJump: P } = e,
        { items: y, state: k } = (0, a.cf)([m.A], () => {
            let e = m.A.getPins(t.id);
            return { items: e?.items ?? b, state: e?.state ?? m.e.LOADING };
        }),
        x = n.useMemo(() => y.map((e) => e.message), [y]),
        C = (0, a.bG)([h.Ay], () => h.Ay.hasUnreadPins(t.id));
    n.useEffect(() => {
        C && d.A.ackPins(t.id);
    }, [C, t.id]),
        (0, o.Ay)(() => {
            x.some(A.$r) && d.A.fetchPins(t.id, { reset: !0 });
        });
    let M = n.useCallback(() => {
            d.A.fetchPins(t.id);
        }, [t.id]),
        N = n.useCallback(() => {
            d.A.fetchPins(t.id, { before: y.at(-1)?.pinnedAt });
        }, [t.id, y]),
        v = (0, a.bG)([g.A], () => (0, r.q)(g.A.theme));
    return (0, i.jsx)(l.l, {
        "aria-label": f.intl.string(f.t["mp1N/2"]),
        children: (0, i.jsx)(p.Ay, {
            channel: t,
            onFetch: M,
            messages: x,
            loading: k === m.e.LOADING,
            hasMore: k === m.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function () {
                if (y.length > 0) return;
                let e = f.intl.string(t.isPrivate() ? f.t.rhqcbJ : f.t.fmyaWJ),
                    n = v ? s(395236) : s(90367);
                return (0, i.jsx)(p.u9, { msg: e, image: n }, "emptystate");
            },
            renderHeader: () => (0, i.jsx)(p.Y9, { icon: c.t, title: f.intl.string(f.t["mp1N/2"]) }),
            onCloseMessage: function (e, s) {
                null != e && (s.shiftKey ? d.A.unpinMessage(t, e.id) : u.A.confirmUnpin(t, e));
            },
            onJump: P,
            loadMore: N,
            getProTip: function () {
                return t.isPrivate() ? f.intl.string(f.t["3dLGAs"]) : f.intl.string(f.t.KTbRcg);
            },
            listName: "pins",
            closeAriaLabel: f.intl.string(f.t["Bse+F/"]),
        }),
    });
}
