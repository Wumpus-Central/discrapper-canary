"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(305866),
    o = n(289873),
    c = n(793574),
    u = n(688810),
    d = n(151271),
    h = n(237248),
    m = n(338821),
    p = n(367720);
function f(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: f,
            onSelect: g,
            analyticsSource: _,
            suppressPlaySound: x,
            shouldValidateSelectedSound: A,
            shouldShowLockedSounds: C = !0,
            gridNotice: E,
            inExpressionPicker: I,
            soundButtonOverlay: v,
            listPadding: y,
            renderHeader: S,
            defaultSoundsOnly: b,
        } = e,
        { fetching: N, maybeFetchData: T } = (0, h.A)(),
        { analyticsLocations: j } = (0, u.Ay)(c.A.SOUNDBOARD_POPOUT);
    return (
        l.useEffect(() => {
            T();
        }, [T]),
        l.useEffect(() => {
            I || (0, d.Ri)("");
        }, [I]),
        (0, i.jsx)(u.f5, {
            value: j,
            children: (0, i.jsx)(a.l, {
                className: r()(p.Nz, { [p.Bg]: N, [p.yV]: I }),
                children: N
                    ? (0, i.jsx)(o.y, {})
                    : (0, i.jsx)(m.A, {
                          guildId: t,
                          channel: n,
                          onClose: f,
                          onSelect: g,
                          shouldValidateSelectedSound: A,
                          containerWidth: s,
                          suppressPlaySound: x,
                          shouldShowLockedSounds: C,
                          gridNotice: E,
                          soundButtonOverlay: v,
                          listPadding: y,
                          renderHeader: S,
                          defaultSoundsOnly: b,
                          inExpressionPicker: I,
                          analyticsSource: _,
                      }),
            }),
        })
    );
}
