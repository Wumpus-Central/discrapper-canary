"use strict";
n.d(t, { A: () => p, M: () => h });
var i = n(64700),
    r = n(205338),
    s = n(87075),
    a = n(429913),
    o = n(201718),
    l = n(207803),
    u = n(403362),
    c = n(789069),
    d = n(385771);
let _ = {
    [r.A.MARVEL_RIVALS]: (e) => {
        let t = e.data?.primary?.season,
            n = e.data?.primary?.rank_name,
            i = (0, c.a)(e.data?.primary?.rank_image),
            r = (0, c.a)(e.data?.primary?.featured_played_character_image);
        return null == t || null == n || null == r
            ? null
            : { previewText: `${t}: ${n}`, previewTextShort: n, previewIcon: i, previewImage: r };
    },
    [r.A.WUTHERING_WAVES]: (e, t) => {
        var n;
        let i,
            r = e.username,
            a =
                ((n = s.f.NUMBER),
                null == (i = e.data?.dynamic?.find((e) => "union_level" === e.name)) || i.type !== n ? null : i.value),
            o = (0, c.a)(e.data?.primary?.featured_played_character_image);
        return null == r || null == a || null == o
            ? null
            : {
                  previewText: `${r}: Level ${t.format(a)}`,
                  previewTextShort: `Level ${t.format(a)}`,
                  previewIcon: null,
                  previewImage: o,
              };
    },
};
function f(e, t, n, i) {
    let r = t.getIconURL(16);
    if (null == r) return null;
    let s = _[e.widgetTemplateId](n, i);
    return null == s ? null : { application: { id: t.id, name: t.name, icon: r }, ...s };
}
function h(e, t, n, i) {
    return f(e, t, n, i);
}
function p(e, t) {
    let n = (0, a.A)(t),
        { data: r } = (0, l.FY)(),
        { data: s } = (0, o.P)(e),
        c = (0, d.A)();
    return i.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = r?.find((t) => t.applicationId === e),
                            i = n.find((t) => t?.id === e),
                            a = s?.find((t) => t.application_id === e)?.profile;
                        if (null == t || null == i || null == a) return null;
                        let o = f(t, i, a, c);
                        return null == o ? null : [e, o];
                    })
                    .filter(u.Vq),
            ),
        [n, r, s, c, t],
    );
}
