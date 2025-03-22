n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(468363),
    l = n(326255),
    o = n(956221),
    a = n(747017),
    s = n(51144),
    c = n(388032),
    u = n(64064);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: p, user: h, userIgnored: f } = e,
        { voiceActivityStatusEnabled: g } = (0, i.U)({ location: 'StatusText' }),
        { voiceChannel: m } = (0, o.Z)({
            userId: null == h ? void 0 : h.id,
            surface: 'status-text'
        }),
        b = g ? m : void 0;
    return f
        ? (0, r.jsx)('div', {
              className: u.text,
              children: c.NW.string(c.t.tFY5ZW)
          })
        : (0, l.Z)({
                activities: n,
                status: p,
                applicationStream: d,
                voiceChannel: b
            })
          ? (0, r.jsx)(a.Z, {
                textClassName: u.text,
                emojiClassName: u.customStatusEmoji,
                activities: n,
                applicationStream: d,
                voiceChannel: b,
                animate: t,
                user: h,
                textSize: 'sm'
            })
          : (0, r.jsx)('div', {
                className: u.text,
                children: (0, s.u5)(p)
            });
};
