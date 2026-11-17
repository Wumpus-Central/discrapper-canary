var i = n(855986),
    r = n(476931),
    a = n(909289);
n.d(
    t,
    {},
    {
        Kb: function (e, t) {
            return null;
        },
        Om: function (e) {
            return (
                null !=
                (function (e) {
                    var t;
                    if (null == e) return null;
                    let n =
                        ((t = e.customUserThemeSettings),
                        t?.colors == null ||
                        1 !== t.colors.length ||
                        (null != t.gradientColorStops && t.gradientColorStops.length > 0)
                            ? null
                            : { type: "custom", customUserThemeSettings: t });
                    if (null != n) return n;
                    let i = (0, r.Yt)(e.presetId);
                    return null != i ? { type: "preset", preset: i } : null;
                })(e)
            );
        },
        Q: function () {
            return null;
        },
        fX: function () {
            return null;
        },
        gM: function () {
            return (0, i.bG)([a.Ay], () => a.Ay.isActive);
        },
    },
);
