n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(872810),
    s = n(493773),
    o = n(569545),
    l = n(592125),
    u = n(112560),
    c = n(388032);
let d = n(340109);
function f(e) {
    let { stream: t, width: n, noArt: f = !1, selected: _ = !1 } = e,
        p = (0, r.e7)([l.Z], () => l.Z.getChannel(t.channelId));
    return (
        (0, s.ZP)(() => {
            (null == p ? void 0 : p.isGuildStageVoice()) && (0, a.aP)((0, o.V9)(t), !1);
        }),
        (0, i.jsx)(u.Z, {
            artURL: d,
            noArt: f,
            selected: _,
            size: (0, u.L)(n),
            header: c.intl.formatToMarkdownString(c.t['1Ww0Hh'], {}),
            onCTAClick: () => (0, a.aP)((0, o.V9)(t)),
            callToAction: c.intl.string(c.t['4EGMWF'])
        })
    );
}
