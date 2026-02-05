t.d(n, { A: () => A });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(616075),
    d = t(816662),
    s = t(395504),
    u = t(543465),
    o = t(652215),
    c = t(985018);
function A(e) {
    let { isFavoritesPerk: n } = (0, a.l)("useChannelOptInItems"),
        t = (0, s.jN)(e.guild_id),
        A = (0, r.bG)([u.Ay], () => u.Ay.isChannelOptedIn(e.guild_id, e.id)),
        E = (0, r.bG)([u.Ay], () => null != e.parent_id && u.Ay.isChannelOptedIn(e.guild_id, e.parent_id)),
        g = (0, r.bG)([u.Ay], () => u.Ay.isFavorite(e.guild_id, e.id)),
        y = () => {
            (0, d.AC)(e.guild_id, e.id, !A, { section: o.JJy.CONTEXT_MENU });
        };
    if (!t || e.isThread()) return null;
    if (e.isCategory())
        return (0, i.jsx)(l.Drp, {
            id: "opt-into-category",
            label: A ? c.intl.string(c.t["3zySTA"]) : c.intl.string(c.t["9mysCh"]),
            action: () => y(),
        });
    let N = g ? c.intl.string(c.t.z7I3gd) : c.intl.string(c.t["N2c/Un"]),
        _ = g ? c.intl.string(c.t.M5PWSf) : c.intl.string(c.t.RMpwZu);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Drp, {
                id: "opt-in-favorite-channel",
                label: n ? _ : N,
                action: () => {
                    (0, d.jA)(e.guild_id, e.id, !g, { section: o.JJy.CONTEXT_MENU });
                },
            }),
            E
                ? (0, i.jsx)(l.Drp, {
                      id: "opt-out-category",
                      label: c.intl.string(c.t.jNphKT),
                      action: () =>
                          void (
                              null != e.parent_id &&
                              (0, d.AC)(e.guild_id, e.parent_id, !1, { section: o.JJy.CONTEXT_MENU })
                          ),
                  })
                : (0, i.jsx)(l.Drp, {
                      id: "opt-into-channel",
                      label: A ? c.intl.string(c.t["3zySTA"]) : c.intl.string(c.t["9mysCh"]),
                      action: () => y(),
                  }),
        ],
    });
}
