n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(616075),
    c = n(816662),
    o = n(395504),
    u = n(543465),
    s = n(652215),
    d = n(985018);
function b(e) {
    let { isFavoritesPerk: t } = (0, a.l)("useChannelOptInItems"),
        n = (0, o.jN)(e.guild_id),
        b = (0, i.bG)([u.Ay], () => u.Ay.isChannelOptedIn(e.guild_id, e.id)),
        p = (0, i.bG)([u.Ay], () => null != e.parent_id && u.Ay.isChannelOptedIn(e.guild_id, e.parent_id)),
        O = (0, i.bG)([u.Ay], () => u.Ay.isFavorite(e.guild_id, e.id)),
        y = () => {
            (0, c.AC)(e.guild_id, e.id, !b, { section: s.JJy.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, r.jsx)(l.Drp, {
            id: "opt-into-category",
            label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
            action: () => y(),
        });
    let f = O ? d.intl.string(d.t.z7I3gd) : d.intl.string(d.t["N2c/Un"]),
        g = O ? d.intl.string(d.t.M5PWSf) : d.intl.string(d.t.RMpwZu);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Drp, {
                id: "opt-in-favorite-channel",
                label: t ? g : f,
                action: () => {
                    (0, c.jA)(e.guild_id, e.id, !O, { section: s.JJy.CONTEXT_MENU });
                },
            }),
            p
                ? (0, r.jsx)(l.Drp, {
                      id: "opt-out-category",
                      label: d.intl.string(d.t.jNphKT),
                      action: () =>
                          void (
                              null != e.parent_id &&
                              (0, c.AC)(e.guild_id, e.parent_id, !1, { section: s.JJy.CONTEXT_MENU })
                          ),
                  })
                : (0, r.jsx)(l.Drp, {
                      id: "opt-into-channel",
                      label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
                      action: () => y(),
                  }),
        ],
    });
}
