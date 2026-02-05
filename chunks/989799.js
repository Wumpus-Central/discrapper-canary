"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    u = n(688810),
    c = n(151271),
    d = n(756349),
    _ = n(237248),
    f = n(338821),
    p = n(732611);
function h(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: h,
            onSelect: m,
            analyticsSource: g,
            suppressPlaySound: E,
            shouldValidateSelectedSound: A,
            shouldShowUpsell: I = !0,
            gridNotice: T,
            inExpressionPicker: y,
            soundButtonOverlay: S,
            listPadding: v,
            renderHeader: C,
            defaultSoundsOnly: b,
        } = e,
        { fetching: N, maybeFetchData: R } = (0, _.A)(),
        O = (0, d.A)({ location: "SoundboardSoundPicker" }),
        { analyticsLocations: D } = (0, u.Ay)(l.A.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            y || (0, c.Ri)("");
        }, [y]),
        (0, r.jsx)(u.f5, {
            value: D,
            children: (0, r.jsx)(o.lGe, {
                className: s()(p.Nz, { [p.Bg]: N, [p.yV]: y }),
                children: N
                    ? (0, r.jsx)(o.y$y, {})
                    : (0, r.jsx)(f.A, {
                          guildId: t,
                          channel: n,
                          onClose: h,
                          onSelect: m,
                          shouldValidateSelectedSound: A,
                          containerWidth: a,
                          suppressPlaySound: E,
                          shouldShowUpsell: I,
                          gridNotice: T,
                          soundButtonOverlay: S,
                          listPadding: v,
                          renderHeader: C,
                          defaultSoundsOnly: b,
                          inExpressionPicker: y,
                          analyticsSource: g,
                          enablePickerUpsellPremiumBrandRefresh: O,
                      }),
            }),
        })
    );
}
