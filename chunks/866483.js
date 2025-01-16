var i = n(200651);
n(192379);
var r = n(399606),
    l = n(607070),
    a = n(70097),
    s = n(970731),
    o = n(19199),
    c = n(921944),
    d = n(388032),
    u = n(183387);
t.Z = (e) => {
    let { markAsDismissed: t } = e,
        n = (0, r.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, o.D)()
        ? (0, i.jsx)(s.ZP, {
              asset: (0, i.jsx)(a.Z, {
                  className: u.video,
                  src: 'https://cdn.discordapp.com/attachments/1067194967979733053/1067195117439557712/Safety_BLOCK_Coachmark.mp4',
                  loop: !0,
                  autoPlay: !n,
                  width: '100%'
              }),
              header: d.intl.string(d.t['61GrDA']),
              content: d.intl.string(d.t['1zzTSk']),
              buttonCTA: d.intl.string(d.t['NX+WJC']),
              className: u.__invalid_coachmark,
              onClick: (e) => {
                  e.stopPropagation(), t(c.L.UNKNOWN);
              },
              markAsDismissed: t,
              caretPosition: s.DF.BOTTOM_CENTER,
              headerClassName: u.header
          })
        : null;
};
