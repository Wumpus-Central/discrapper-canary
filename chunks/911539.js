s.d(e, { default: () => d });
var i = s(627968),
    a = s(64700),
    r = s(772707),
    c = s(954571),
    n = s(652215),
    p = s(985018),
    u = s(168622);
function d(t) {
    let { source: e, onClose: s, transitionState: d } = t;
    return (
        a.useEffect(() => {
            c.default.track(n.HAw.OPEN_MODAL, { type: n.JJy.CONTACT_SYNC_NC_MODAL, source: { location: e } });
        }, [e]),
        (0, i.jsx)(r.k, {
            transitionState: d,
            graphic: { src: u, type: "image" },
            title: p.intl.string(p.t.fdR8Hf),
            subtitle: p.intl.string(p.t["JXyNq+"]),
            onClose: s,
        })
    );
}
