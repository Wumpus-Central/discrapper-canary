n.d(t, { $: () => g });
var i = n(391973),
    s = n(395011),
    l = n(897720),
    a = n(419954),
    r = n(555528),
    o = n(780964),
    d = n(525923),
    c = n(652215);
n(392164);
var u = n(985018);
function m() {
    let e = s.A.getWidgetByType(c.uss.VOICE_V3);
    if (null == e) return null;
    let t = r.A.getWidget(e.id);
    return null != t && (0, l.ZO)(t) ? t : null;
}
let g = (0, a.sN)(o.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => u.intl.string(u.t["X/Uyzc"]),
    minValue: d.G6 - 1,
    maxValue: d.PP,
    markers: d.DA,
    onMarkerRender: (e) => (e < d.G6 ? u.intl.string(u.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = m();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < d.G6 ? u.intl.string(u.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = m();
        null != t &&
            (e < d.G6
                ? (0, i.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, i.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
