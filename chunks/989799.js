"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
            containerWidth: s,
            onClose: h,
            onSelect: m,
            analyticsSource: E,
            suppressPlaySound: g,
            shouldValidateSelectedSound: A,
            shouldShowLockedSounds: I = !0,
            gridNotice: T,
            inExpressionPicker: S,
            soundButtonOverlay: y,
            listPadding: v,
            renderHeader: N,
            defaultSoundsOnly: C,
        } = e,
        { fetching: R, maybeFetchData: O } = (0, _.A)(),
        b = (0, d.A)({ location: "SoundboardSoundPicker" }),
        { analyticsLocations: D } = (0, u.Ay)(l.A.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            O();
        }, [O]),
        i.useEffect(() => {
            S || (0, c.Ri)("");
        }, [S]),
        (0, r.jsx)(u.f5, {
            value: D,
            children: (0, r.jsx)(o.lGe, {
                className: a()(p.Nz, { [p.Bg]: R, [p.yV]: S }),
                children: R
                    ? (0, r.jsx)(o.y$y, {})
                    : (0, r.jsx)(f.A, {
                          guildId: t,
                          channel: n,
                          onClose: h,
                          onSelect: m,
                          shouldValidateSelectedSound: A,
                          containerWidth: s,
                          suppressPlaySound: g,
                          shouldShowLockedSounds: I,
                          gridNotice: T,
                          soundButtonOverlay: y,
                          listPadding: v,
                          renderHeader: N,
                          defaultSoundsOnly: C,
                          inExpressionPicker: S,
                          analyticsSource: E,
                          enablePickerUpsellPremiumBrandRefresh: b,
                      }),
            }),
        })
    );
}
