i.d(e, {
    $: () => E,
});
var n = i(391973),
    l = i(395011),
    s = i(897720),
    r = i(419954),
    u = i(555528),
    a = i(780964),
    o = i(790076),
    T = i(652215);
i(392164);
var A = i(985018);

function S() {
    let t = l.A.getWidgetByType(T.uss.VOICE_V3);
    if (null == t) return null;
    let e = u.A.getWidget(t.id);
    return null != e && (0, s.ZO)(e) ? e : null;
}
let E = (0, r.sN)(a.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    fieldLayout: "horizontal",
    useTitle: () => A.intl.string(A.t["X/Uyzc"]),
    minValue: o.G6 - 1,
    maxValue: o.PP,
    markers: o.DA,
    onMarkerRender: (t) => (t < o.G6 ? A.intl.string(A.t.nrUzFL) : t),
    getInitialValue: () => {
        var t;
        let e = S();
        return null != (t = null == e ? void 0 : e.meta.voiceStatesMaxShown) ? t : 8;
    },
    onValueRender: function (t) {
        return t < o.G6 ? A.intl.string(A.t.nrUzFL) : "".concat(Math.floor(t));
    },
    setValue: (t) => {
        let e = S();
        null != e &&
            (t < o.G6
                ? (0, n.cC)(e.id, {
                      voiceStatesMaxShown: -1,
                  })
                : (0, n.cC)(e.id, {
                      voiceStatesMaxShown: Math.floor(t),
                  }));
    },
});
