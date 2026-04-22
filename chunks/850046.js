"use strict";
n.d(t, { A: () => f, M: () => p });
var i = n(64700),
    l = n(205338),
    s = n(87075),
    r = n(429913),
    a = n(201718),
    o = n(207803),
    c = n(403362),
    u = n(789069),
    d = n(385771);
let h = {
    [l.A.MARVEL_RIVALS]: (e) => {
        let t = e.data?.primary?.season,
            n = e.data?.primary?.rank_name,
            i = (0, u.a)(e.data?.primary?.rank_image),
            l = (0, u.a)(e.data?.primary?.featured_played_character_image);
        return null == t || null == n || null == l
            ? null
            : { previewText: `${t}: ${n}`, previewTextShort: n, previewIcon: i, previewImage: l };
    },
    [l.A.WUTHERING_WAVES]: (e, t) => {
        var n;
        let i,
            l = e.username,
            r =
                ((n = s.f.NUMBER),
                null == (i = e.data?.dynamic?.find((e) => "union_level" === e.name)) || i.type !== n ? null : i.value),
            a = (0, u.a)(e.data?.primary?.featured_played_character_image);
        return null == l || null == r || null == a
            ? null
            : {
                  previewText: `${l}: Level ${t.format(r)}`,
                  previewTextShort: `Level ${t.format(r)}`,
                  previewIcon: null,
                  previewImage: a,
              };
    },
};
function m(e, t, n, i) {
    let l = t.getIconURL(16);
    if (null == l) return null;
    let s = h[e.widgetTemplateId](n, i);
    return null == s ? null : { application: { id: t.id, name: t.name, icon: l }, ...s };
}
function p(e, t, n, i) {
    return m(e, t, n, i);
}
function f(e, t) {
    let n = (0, r.A)(t),
        { data: l } = (0, o.FY)(),
        { data: s } = (0, a.P)(e),
        u = (0, d.A)();
    return i.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = l?.find((t) => t.applicationId === e),
                            i = n.find((t) => t?.id === e),
                            r = s?.find((t) => t.application_id === e)?.profile;
                        if (null == t || null == i || null == r) return null;
                        let a = m(t, i, r, u);
                        return null == a ? null : [e, a];
                    })
                    .filter(c.Vq),
            ),
        [n, l, s, u, t],
    );
}
