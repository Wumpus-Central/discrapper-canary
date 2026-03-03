e.d(t, { A: () => A });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(816662),
    c = e(395504),
    d = e(543465),
    s = e(652215),
    o = e(985018);
function A(n) {
    let t = (0, c.jN)(n.guild_id),
        e = (0, l.bG)([d.Ay], () => d.Ay.isChannelOptedIn(n.guild_id, n.id)),
        A = (0, l.bG)([d.Ay], () => null != n.parent_id && d.Ay.isChannelOptedIn(n.guild_id, n.parent_id)),
        u = (0, l.bG)([d.Ay], () => d.Ay.isFavorite(n.guild_id, n.id)),
        E = () => {
            (0, a.AC)(n.guild_id, n.id, !e, { section: s.JJy.CONTEXT_MENU });
        };
    if (!t || n.isThread()) return null;
    if (n.isCategory())
        return (0, i.jsx)(r.Drp, {
            id: "opt-into-category",
            label: e ? o.intl.string(o.t["3zySTA"]) : o.intl.string(o.t["9mysCh"]),
            action: () => E(),
        });
    let _ = u ? o.intl.string(o.t.M5PWSf) : o.intl.string(o.t.RMpwZu);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Drp, {
                id: "opt-in-favorite-channel",
                label: _,
                action: () => {
                    (0, a.jA)(n.guild_id, n.id, !u, { section: s.JJy.CONTEXT_MENU });
                },
            }),
            A
                ? (0, i.jsx)(r.Drp, {
                      id: "opt-out-category",
                      label: o.intl.string(o.t.jNphKT),
                      action: () =>
                          void (
                              null != n.parent_id &&
                              (0, a.AC)(n.guild_id, n.parent_id, !1, { section: s.JJy.CONTEXT_MENU })
                          ),
                  })
                : (0, i.jsx)(r.Drp, {
                      id: "opt-into-channel",
                      label: e ? o.intl.string(o.t["3zySTA"]) : o.intl.string(o.t["9mysCh"]),
                      action: () => E(),
                  }),
        ],
    });
}
