n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(468363),
    l = n(326255),
    a = n(956221),
    o = n(771173),
    s = n(51144),
    c = n(388032),
    u = n(599685);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: p, user: f, userIgnored: h } = e,
        { voiceActivityStatusEnabled: g } = (0, i.U)({ location: "StatusText" }),
        { voiceChannel: m } = (0, a.Z)({ userId: null == f ? void 0 : f.id }),
        b = g ? m : void 0;
    return h
        ? (0, r.jsx)("div", {
              className: u.text,
              children: c.intl.string(c.t.tFY5ZW),
          })
        : (0, l.Z)({
                activities: n,
                status: p,
                applicationStream: d,
                voiceChannel: b,
            })
          ? (0, r.jsx)(o.Z, {
                location: "StatusText",
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
