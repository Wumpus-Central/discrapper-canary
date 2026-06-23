n.d(i, { default: () => e });
var r = n(627968);
n(64700);
var a = n(478437),
    s = n(189213),
    l = n(47167),
    o = n(375708);
let e = function (t) {
    let i,
        { channel: n, onClose: e, onConfirm: c, transitionState: p } = t,
        {
            title: d,
            body: u,
            confirm: h,
        } = ((i = (0, l.Ay)(n, !0)),
        n.type === a.r.GUILD_CATEGORY
            ? {
                  title: o.intl.string(o.t["4VpUw8"]),
                  body: o.intl.format(o.t.GuhMa5, { channelName: i }),
                  confirm: o.intl.string(o.t.xOscRh),
              }
            : {
                  title: o.intl.string(o.t["4VpUw8"]),
                  body: o.intl.format(o.t["2z/hBg"], { channelName: i }),
                  confirm: o.intl.string(o.t.gGs6TT),
              });
    return (0, r.jsx)(s.Modal, {
        title: d,
        subtitle: u,
        actions: [
            { text: o.intl.string(o.t["ETE/oC"]), onClick: e, variant: "secondary" },
            { text: h, onClick: c, variant: "critical-primary" },
        ],
        onClose: e,
        transitionState: p,
    });
};
