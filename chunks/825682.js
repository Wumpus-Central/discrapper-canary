n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(468363),
    r = n(297369),
    a = n(956221),
    s = n(771173),
    o = n(372276),
    d = n(565640),
    c = n(51144),
    u = n(388032),
    h = n(116324);
let m = function (e) {
    let { hovered: t, activities: n, applicationStream: m, status: p, user: g, userIgnored: _ } = e,
        f = (0, d.Z)(null == g ? void 0 : g.id, 'StatusText'),
        { voiceActivityStatusEnabled: E } = (0, l.U)({ location: 'StatusText' }),
        { voiceChannel: I } = (0, a.Z)({
            userId: null == g ? void 0 : g.id,
            surface: 'status-text'
        }),
        C = E ? I : void 0;
    return _
        ? (0, i.jsx)('div', {
              className: h.text,
              children: u.intl.string(u.t.tFY5ZW)
          })
        : (0, r.Z)({
                activities: n,
                status: p,
                applicationStream: m,
                voiceChannel: C
            })
          ? (0, i.jsx)(s.Z, {
                location: 'StatusText',
                textClassName: h.text,
                emojiClassName: h.customStatusEmoji,
                activities: n,
                applicationStream: m,
                voiceChannel: C,
                animate: t,
                user: g,
                textSize: 'sm'
            })
          : null != f
            ? (0, i.jsx)(o.Z, {
                  textClassName: h.text,
                  entry: f
              })
            : (0, i.jsx)('div', {
                  className: h.text,
                  children: (0, c.u5)(p)
              });
};
