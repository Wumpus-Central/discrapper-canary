i.d(t, { $: () => A });
var n = i(391973),
    l = i(395011),
    s = i(897720),
    r = i(419954),
    a = i(555528),
    u = i(780964),
    o = i(790076),
    d = i(652215);
i(392164);
var _ = i(985018);
function T() {
    let e = l.A.getWidgetByType(d.uss.VOICE_V3);
    if (null == e) return null;
    let t = a.A.getWidget(e.id);
    return null != t && (0, s.ZO)(t) ? t : null;
}
let A = (0, r.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => _.intl.string(_.t["X/Uyzc"]),
    minValue: o.G6 - 1,
    maxValue: o.PP,
    markers: o.DA,
    onMarkerRender: (e) => (e < o.G6 ? _.intl.string(_.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = T();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < o.G6 ? _.intl.string(_.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = T();
        null != t &&
            (e < o.G6
                ? (0, n.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, n.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
