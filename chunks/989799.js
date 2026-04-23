"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(305866),
    l = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    _ = n(237248),
    f = n(338821),
    p = n(367720);
function h(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: h,
            onSelect: E,
            analyticsSource: m,
            suppressPlaySound: g,
            shouldValidateSelectedSound: A,
            shouldShowLockedSounds: I = !0,
            gridNotice: T,
            inExpressionPicker: S,
            soundButtonOverlay: y,
            listPadding: N,
            renderHeader: v,
            defaultSoundsOnly: C,
        } = e,
        { fetching: O, maybeFetchData: R } = (0, _.A)(),
        { analyticsLocations: b } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            S || (0, d.Ri)("");
        }, [S]),
        (0, r.jsx)(c.f5, {
            value: b,
            children: (0, r.jsx)(o.l, {
                className: a()(p.Nz, { [p.Bg]: O, [p.yV]: S }),
                children: O
                    ? (0, r.jsx)(l.y, {})
                    : (0, r.jsx)(f.A, {
                          guildId: t,
                          channel: n,
                          onClose: h,
                          onSelect: E,
                          shouldValidateSelectedSound: A,
                          containerWidth: s,
                          suppressPlaySound: g,
                          shouldShowLockedSounds: I,
                          gridNotice: T,
                          soundButtonOverlay: y,
                          listPadding: N,
                          renderHeader: v,
                          defaultSoundsOnly: C,
                          inExpressionPicker: S,
                          analyticsSource: m,
                      }),
            }),
        })
    );
}
