n.d(e, { K: () => T });
var i = n(857595),
    l = n(607070),
    s = n(509613),
    u = n(695346),
    r = n(313789),
    a = n(959517),
    o = n(388032);
let S = (t) => "".concat(t.toFixed(0), "px"),
    T = (0, s.UO)(r.n.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => o.intl.string(o.t.Q6lKkg),
        useSubtitle: () => o.intl.string(o.t.p7eUrb),
        markers: a.fP,
        stickToMarkers: !0,
        minValue: a.fP["0"],
        maxValue: a.fP[a.fP.length - 1],
        getInitialValue: () => {
            let t = l.Z.messageGroupSpacing,
                e = u.jU.getSetting();
            return null != t ? t : e ? a.c8 : a.pq;
        },
        onValueRender: S,
        onMarkerRender: S,
        setValue: (t) => {
            switch (t) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, i.ZZ)(t);
            }
        },
    });
