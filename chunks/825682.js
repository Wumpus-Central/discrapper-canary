n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(771173),
    r = n(372276),
    a = n(565640),
    s = n(51144),
    o = n(388032),
    c = n(542745);
let d = function (e) {
    let { hovered: t, activities: n, applicationStream: d, status: u, user: h, userIgnored: m } = e,
        p = (0, a.Z)(null == h ? void 0 : h.id, 'StatusText');
    return m
        ? (0, i.jsx)('div', {
              className: c.text,
              children: o.intl.string(o.t.tFY5ZW)
          })
        : n.length > 0
          ? (0, i.jsx)(l.Z, {
                location: 'StatusText',
                textClassName: c.text,
                emojiClassName: c.customStatusEmoji,
                activities: n,
                applicationStream: d,
                animate: t,
                user: h,
                fullWidth: !0
            })
          : null != p
            ? (0, i.jsx)(r.Z, {
                  textClassName: c.text,
                  entry: p
              })
            : (0, i.jsx)('div', {
                  className: c.text,
                  children: (0, s.u5)(u)
              });
};
