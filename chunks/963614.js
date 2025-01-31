n.d(t, { h: () => r });
var i = n(701488);
function r(e) {
    var t, n;
    return !!i.Pc.has(e.id) || ('embeddedActivityConfig' in e ? (null === (t = e.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0 : 'embedded_activity_config' in e && (null === (n = e.embedded_activity_config) || void 0 === n ? void 0 : n.displays_advertisements) === !0);
}
