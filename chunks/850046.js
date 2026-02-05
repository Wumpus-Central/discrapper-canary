"use strict";
n.d(t, { A: () => m, M: () => h });
var r = n(64700),
    i = n(205338),
    a = n(87075),
    s = n(429913),
    o = n(201718),
    l = n(207803),
    u = n(403362),
    c = n(789069),
    d = n(385771);
function _(e, t, n) {
    let r = e.data?.dynamic?.find((e) => e.name === t);
    return null == r || r.type !== n ? null : r.value;
}
let f = {
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
        let n = e.username,
            r = _(e, "union_level", a.f.NUMBER),
            i = (0, c.a)(e.data?.primary?.featured_played_character_image);
        return null == n || null == r || null == i
            ? null
            : {
                  previewText: `${n}: Level ${t.format(r)}`,
                  previewTextShort: `Level ${t.format(r)}`,
                  previewIcon: null,
                  previewImage: i,
              };
    },
};
function p(e, t, n, r) {
    let i = t.getIconURL(16);
    if (null == i) return null;
    let a = f[e.widgetTemplateId](n, r);
    return null == a ? null : { application: { id: t.id, name: t.name, icon: i }, ...a };
}
function h(e, t, n, r) {
    return p(e, t, n, r);
}
function m(e, t) {
    let n = (0, s.A)(t),
        { data: i } = (0, l.FY)(),
        { data: a } = (0, o.P)(e),
        c = (0, d.A)();
    return r.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = i?.find((t) => t.applicationId === e),
                            r = n.find((t) => t?.id === e),
                            s = a?.find((t) => t.application_id === e)?.profile;
                        if (null == t || null == r || null == s) return null;
                        let o = p(t, r, s, c);
                        return null == o ? null : [e, o];
                    })
                    .filter(u.Vq),
            ),
        [n, i, a, c, t],
    );
}
