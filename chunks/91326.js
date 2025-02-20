n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(471445),
    o = n(862099),
    a = n(938475),
    s = n(388032),
    c = n(982175);
let u = function (e) {
    let { name: t, channel: n } = e,
        u = (0, i.Wu)(
            [a.ZP],
            () =>
                a.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        d = (0, l.KS)(n);
    return (0, r.jsx)(o.gt, {
        heading: s.NW.string(s.t['X2K3//']),
        topic: t,
        location: s.NW.string(s.t.LZA6NT),
        locationIcon:
            null != d
                ? (0, r.jsx)(d, {
                      size: 'xs',
                      color: 'currentColor',
                      className: c.icon
                  })
                : null,
        children: (0, r.jsx)(o.Co, {
            channel: n,
            speakers: u,
            voiceType: o.bZ.STUDY_ROOM
        })
    });
};
