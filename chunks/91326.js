n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(471445),
    a = n(862099),
    s = n(938475),
    o = n(388032),
    d = n(644833);
let c = function (e) {
    let { name: t, channel: n } = e,
        c = (0, l.Wu)(
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
                      className: d.icon
                  })
                : null,
        children: (0, i.jsx)(a.Co, {
            channel: n,
            speakers: c,
            voiceType: a.bZ.STUDY_ROOM
        })
    });
};
