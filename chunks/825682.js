n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(468363),
    l = n(326255),
    a = n(956221),
    o = n(747017),
    s = n(51144),
    c = n(388032),
    u = n(768142);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: p, user: f, userIgnored: g } = e,
        { voiceActivityStatusEnabled: h } = (0, i.U)({ location: "StatusText" }),
        { voiceChannel: m } = (0, a.Z)({ userId: null == f ? void 0 : f.id }),
        b = h ? m : void 0;
    return g
        ? (0, r.jsx)("div", {
              className: u.text,
              children: c.intl.string(c.t.tFY5Zb),
          })
        : (0, l.Z)({
                activities: n,
                status: p,
                applicationStream: d,
                voiceChannel: b,
            })
          ? (0, r.jsx)(o.Z, {
                textClassName: u.statusText,
                activities: n,
                applicationStream: d,
                voiceChannel: b,
                animateEmoji: t,
                user: f,
                textSize: "sm",
            })
          : (0, r.jsx)("div", {
                className: u.text,
                children: (0, s.u5)(p),
            });
};
