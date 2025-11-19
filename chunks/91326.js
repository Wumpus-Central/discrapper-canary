n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(471445),
    a = n(862099),
    s = n(938475),
    o = n(388032),
    c = n(561223);
let u = function (e) {
    let { name: t, channel: n } = e,
        u = (0, i.Wu)(
            [s.ZP],
            () =>
                s.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        d = (0, l.KS)(n);
    return (0, r.jsx)(a.gt, {
        heading: o.intl.string(o.t["X2K3/4"]),
        topic: t,
        location: o.intl.string(o.t.LZA6Na),
        locationIcon:
            null != d
                ? (0, r.jsx)(d, {
                      size: "xs",
                      color: "currentColor",
                      className: c.icon,
                  })
                : null,
        children: (0, r.jsx)(a.Co, {
            channel: n,
            speakers: u,
            voiceType: a.bZ.STUDY_ROOM,
        }),
    });
};
