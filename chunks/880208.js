n.d(t, { o: () => u });
var i = n(955572),
    s = n(775602),
    l = n(419954),
    a = n(253932),
    r = n(780964),
    o = n(381941),
    d = n(985018);
let c = (e) => `${e.toFixed(0)}px`,
    u = (0, l.sN)(r.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => d.intl.string(d.t.Q6lKkg),
        useSubtitle: () => d.intl.string(d.t.p7eUrb),
        markers: o.qh,
        stickToMarkers: !0,
        minValue: o.qh["0"],
        maxValue: o.qh[o.qh.length - 1],
        useDefaultValue: () => (a.hH.useSetting() ? o.y5 : o.ES),
        getInitialValue: () => {
            let e = s.A.messageGroupSpacing,
                t = a.hH.getSetting();
            return null != e ? e : t ? o.y5 : o.ES;
        },
        onValueRender: c,
        onMarkerRender: c,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, i.AC)(e);
            }
        },
    });
