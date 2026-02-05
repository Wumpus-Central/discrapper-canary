i.d(e, { $: () => S });
var n = i(391973),
    l = i(395011),
    s = i(897720),
    r = i(419954),
    a = i(555528),
    u = i(780964),
    o = i(790076),
    d = i(652215);
i(392164);
var T = i(985018);
function A() {
    let t = l.A.getWidgetByType(d.uss.VOICE_V3);
    if (null == t) return null;
    let e = a.A.getWidget(t.id);
    return null != e && (0, s.ZO)(e) ? e : null;
}
let S = (0, r.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    fieldLayout: "horizontal",
    useTitle: () => T.intl.string(T.t["X/Uyzc"]),
    minValue: o.G6 - 1,
    maxValue: o.PP,
    markers: o.DA,
    onMarkerRender: (t) => (t < o.G6 ? T.intl.string(T.t.nrUzFL) : t),
    getInitialValue: () => {
        let t = A();
        return t?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (t) {
        return t < o.G6 ? T.intl.string(T.t.nrUzFL) : `${Math.floor(t)}`;
    },
    setValue: (t) => {
        let e = A();
        null != e &&
            (t < o.G6
                ? (0, n.cC)(e.id, { voiceStatesMaxShown: -1 })
                : (0, n.cC)(e.id, { voiceStatesMaxShown: Math.floor(t) }));
    },
});
