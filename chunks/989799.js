"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(793574),
    u = n(688810),
    c = n(151271),
    d = n(237248),
    _ = n(338821),
    f = n(843288);
function p(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: p,
            onSelect: h,
            analyticsSource: m,
            suppressPlaySound: E,
            shouldValidateSelectedSound: g,
            shouldShowLockedSounds: A = !0,
            gridNotice: I,
            inExpressionPicker: T,
            soundButtonOverlay: S,
            listPadding: y,
            renderHeader: v,
            defaultSoundsOnly: N,
        } = e,
        { fetching: C, maybeFetchData: R } = (0, d.A)(),
        { analyticsLocations: O } = (0, u.Ay)(l.A.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            T || (0, c.Ri)("");
        }, [T]),
        (0, r.jsx)(u.f5, {
            value: O,
            children: (0, r.jsx)(o.lGe, {
                className: a()(f.Nz, { [f.Bg]: C, [f.yV]: T }),
                children: C
                    ? (0, r.jsx)(o.y$y, {})
                    : (0, r.jsx)(_.A, {
                          guildId: t,
                          channel: n,
                          onClose: p,
                          onSelect: h,
                          shouldValidateSelectedSound: g,
                          containerWidth: s,
                          suppressPlaySound: E,
                          shouldShowLockedSounds: A,
                          gridNotice: I,
                          soundButtonOverlay: S,
                          listPadding: y,
                          renderHeader: v,
                          defaultSoundsOnly: N,
                          inExpressionPicker: T,
                          analyticsSource: m,
                      }),
            }),
        })
    );
}
