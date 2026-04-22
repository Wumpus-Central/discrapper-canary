n.d(i, { default: () => o });
var r = n(627968);
n(64700);
var a = n(478437),
    s = n(189213),
    l = n(47167),
    e = n(985018);
let o = (t) => {
    let i,
        { channel: n, onClose: o, onConfirm: c, transitionState: p } = t,
        {
            title: d,
            body: h,
            confirm: u,
        } = ((i = (0, l.Ay)(n, !0)),
        n.type === a.r.GUILD_CATEGORY
            ? {
                  title: e.intl.string(e.t["4VpUw8"]),
                  body: e.intl.format(e.t.GuhMa5, { channelName: i }),
                  confirm: e.intl.string(e.t.xOscRh),
              }
            : {
                  title: e.intl.string(e.t["4VpUw8"]),
                  body: e.intl.format(e.t["2z/hBg"], { channelName: i }),
                  confirm: e.intl.string(e.t.gGs6TT),
              });
    return (0, r.jsx)(s.Modal, {
        title: d,
        subtitle: h,
        actions: [
            { text: e.intl.string(e.t["ETE/oC"]), onClick: o, variant: "secondary" },
            { text: u, onClick: c, variant: "critical-primary" },
        ],
        onClose: o,
        transitionState: p,
    });
};
