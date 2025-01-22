r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(872810),
    s = r(493773),
    l = r(569545),
    u = r(592125),
    c = r(112560),
    d = r(388032);
let f = r(340109);
function p(e) {
    let { stream: n, width: r, noArt: p = !1, selected: h = !1 } = e,
        _ = (0, a.e7)([u.Z], () => u.Z.getChannel(n.channelId));
    return (
        (0, s.Z)(() => {
            (null == _ ? void 0 : _.isGuildStageVoice()) && (0, o.aP)((0, l.V9)(n), !1);
        }),
        (0, i.jsx)(c.Z, {
            artURL: f,
            noArt: p,
            selected: h,
            size: (0, c.L)(r),
            header: d.intl.formatToMarkdownString(d.t['1Ww0Hh'], {}),
            onCTAClick: () => (0, o.aP)((0, l.V9)(n)),
            callToAction: d.intl.string(d.t['4EGMWF'])
        })
    );
}
