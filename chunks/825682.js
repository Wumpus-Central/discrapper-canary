n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(468363),
    l = n(326255),
    a = n(956221),
    s = n(771173),
    o = n(51144),
    c = n(388032),
    u = n(599685);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: p, user: f, userIgnored: h } = e,
        { voiceActivityStatusEnabled: g } = (0, i.U)({ location: "StatusText" }),
        { voiceChannel: m } = (0, a.Z)({ userId: null == f ? void 0 : f.id }),
        _ = g ? m : void 0;
    return h
        ? (0, r.jsx)("div", {
              className: u.text,
              children: c.intl.string(c.t.tFY5Zb),
          })
        : (0, l.Z)({
                activities: n,
                status: p,
                applicationStream: d,
                voiceChannel: _,
            })
          ? (0, r.jsx)(s.Z, {
                location: "StatusText",
                textClassName: u.statusText,
                activities: n,
                applicationStream: d,
                voiceChannel: _,
                animateEmoji: t,
                user: f,
                textSize: "sm",
            })
          : (0, r.jsx)("div", {
                className: u.text,
                children: (0, o.u5)(p),
            });
};
