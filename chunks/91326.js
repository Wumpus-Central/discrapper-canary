n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(471445),
    a = n(862099),
    s = n(938475),
    o = n(388032),
    c = n(644833);
let d = function (e) {
    let { name: t, channel: n } = e,
        d = (0, l.Wu)(
            [s.ZP],
            () =>
                s.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        u = (0, r.KS)(n);
    return (0, i.jsx)(a.gt, {
        heading: o.intl.string(o.t['X2K3//']),
        topic: t,
        location: o.intl.string(o.t.LZA6NT),
        locationIcon:
            null != u
                ? (0, i.jsx)(u, {
                      size: 'xs',
                      color: 'currentColor',
                      className: c.icon
                  })
                : null,
        children: (0, i.jsx)(a.Co, {
            channel: n,
            speakers: d,
            voiceType: a.bZ.STUDY_ROOM
        })
    });
};
