n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(872810),
    a = n(493773),
    s = n(569545),
    l = n(592125),
    c = n(112560),
    u = n(388032);
let d = n(340109);
function f(e) {
    let { stream: t, width: n, noArt: f = !1, selected: p = !1 } = e,
        _ = (0, i.e7)([l.Z], () => l.Z.getChannel(t.channelId));
    return (
        (0, a.ZP)(() => {
            (null == _ ? void 0 : _.isGuildStageVoice()) && (0, o.aP)((0, s.V9)(t), !1);
        }),
        (0, r.jsx)(c.Z, {
            artURL: d,
            noArt: f,
            selected: p,
            size: (0, c.L)(n),
            header: u.NW.formatToMarkdownString(u.t['1Ww0Hh'], {}),
            onCTAClick: () => (0, o.aP)((0, s.V9)(t)),
            callToAction: u.NW.string(u.t['4EGMWF'])
        })
    );
}
