"use strict";
n.d(t, { A: () => h, M: () => p });
var r = n(64700),
    i = n(205338),
    s = n(87075),
    a = n(429913),
    o = n(201718),
    l = n(207803),
    u = n(403362),
    c = n(789069),
    d = n(385771);
let _ = {
    [i.A.MARVEL_RIVALS]: (e) => {
        let t = e.data?.primary?.season,
            n = e.data?.primary?.rank_name,
            r = (0, c.a)(e.data?.primary?.rank_image),
            i = (0, c.a)(e.data?.primary?.featured_played_character_image);
        return null == t || null == n || null == i
            ? null
            : { previewText: `${t}: ${n}`, previewTextShort: n, previewIcon: r, previewImage: i };
    },
    [i.A.WUTHERING_WAVES]: (e, t) => {
        var n;
        let r,
            i = e.username,
            a =
                ((n = s.f.NUMBER),
                null == (r = e.data?.dynamic?.find((e) => "union_level" === e.name)) || r.type !== n ? null : r.value),
            o = (0, c.a)(e.data?.primary?.featured_played_character_image);
        return null == i || null == a || null == o
            ? null
            : {
                  previewText: `${i}: Level ${t.format(a)}`,
                  previewTextShort: `Level ${t.format(a)}`,
                  previewIcon: null,
                  previewImage: o,
              };
    },
};
function f(e, t, n, r) {
    let i = t.getIconURL(16);
    if (null == i) return null;
    let s = _[e.widgetTemplateId](n, r);
    return null == s ? null : { application: { id: t.id, name: t.name, icon: i }, ...s };
}
function p(e, t, n, r) {
    return f(e, t, n, r);
}
function h(e, t) {
    let n = (0, a.A)(t),
        { data: i } = (0, l.FY)(),
        { data: s } = (0, o.P)(e),
        c = (0, d.A)();
    return r.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = i?.find((t) => t.applicationId === e),
                            r = n.find((t) => t?.id === e),
                            a = s?.find((t) => t.application_id === e)?.profile;
                        if (null == t || null == r || null == a) return null;
                        let o = f(t, r, a, c);
                        return null == o ? null : [e, o];
                    })
                    .filter(u.Vq),
            ),
        [n, i, s, c, t],
    );
}
