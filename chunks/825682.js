n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(468363),
    l = n(297369),
    o = n(956221),
    a = n(771173),
    s = n(372276),
    c = n(565640),
    u = n(51144),
    d = n(388032),
    p = n(321036);
let h = function (e) {
    let { hovered: t, activities: n, applicationStream: h, status: f, user: g, userIgnored: m } = e,
        b = (0, c.Z)(null == g ? void 0 : g.id, 'StatusText'),
        { voiceActivityStatusEnabled: _ } = (0, i.U)({ location: 'StatusText' }),
        { voiceChannel: E } = (0, o.Z)({
            userId: null == g ? void 0 : g.id,
            surface: 'status-text'
        }),
        O = _ ? E : void 0;
    return m
        ? (0, r.jsx)('div', {
              className: p.text,
              children: d.NW.string(d.t.tFY5ZW)
          })
        : (0, l.Z)({
                activities: n,
                status: f,
                applicationStream: h,
                voiceChannel: O
            })
          ? (0, r.jsx)(a.Z, {
                location: 'StatusText',
                textClassName: p.text,
                emojiClassName: p.customStatusEmoji,
                activities: n,
                applicationStream: h,
                voiceChannel: O,
                animate: t,
                user: g,
                textSize: 'sm'
            })
          : null != b
            ? (0, r.jsx)(s.Z, {
                  textClassName: p.text,
                  entry: b
              })
            : (0, r.jsx)('div', {
                  className: p.text,
                  children: (0, u.u5)(f)
              });
};
