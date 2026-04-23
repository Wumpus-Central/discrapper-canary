n.d(t, { $: () => m });
var i = n(391973),
    s = n(395011),
    l = n(897720),
    a = n(419954),
    r = n(555528),
    o = n(780964),
    d = n(525923),
    u = n(652215);
n(392164);
var c = n(985018);
function g() {
    let e = s.A.getWidgetByType(u.uss.VOICE_V3);
    if (null == e) return null;
    let t = r.A.getWidget(e.id);
    return null != t && (0, l.ZO)(t) ? t : null;
}
let m = (0, a.sN)(o.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => c.intl.string(c.t["X/Uyzc"]),
    minValue: d.G6 - 1,
    maxValue: d.PP,
    markers: d.DA,
    onMarkerRender: (e) => (e < d.G6 ? c.intl.string(c.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = g();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < d.G6 ? c.intl.string(c.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = g();
        null != t &&
            (e < d.G6
                ? (0, i.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, i.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
