n.d(t, { A: () => A, M: () => I });
var i = n(64700),
    r = n(205338),
    a = n(87075),
    s = n(429913),
    _ = n(201718),
    l = n(207803),
    o = n(403362),
    E = n(789069),
    d = n(385771);
let c = {
    [r.A.MARVEL_RIVALS]: (e) => {
        let t = e.data?.primary?.season,
            n = e.data?.primary?.rank_name,
            i = (0, E.a)(e.data?.primary?.rank_image),
            r = (0, E.a)(e.data?.primary?.featured_played_character_image);
        return null == t || null == n || null == r
            ? null
            : { previewText: `${t}: ${n}`, previewTextShort: n, previewIcon: i, previewImage: r };
    },
    [r.A.WUTHERING_WAVES]: (e, t) => {
        var n;
        let i,
            r = e.username,
            s =
                ((n = a.f.NUMBER),
                null == (i = e.data?.dynamic?.find((e) => "union_level" === e.name)) || i.type !== n ? null : i.value),
            _ = (0, E.a)(e.data?.primary?.featured_played_character_image);
        return null == r || null == s || null == _
            ? null
            : {
                  previewText: `${r}: Level ${t.format(s)}`,
                  previewTextShort: `Level ${t.format(s)}`,
                  previewIcon: null,
                  previewImage: _,
              };
    },
};
function u(e, t, n, i) {
    let r = t.getIconURL(16);
    if (null == r) return null;
    let a = c[e.widgetTemplateId](n, i);
    return null == a ? null : { application: { id: t.id, name: t.name, icon: r }, ...a };
}
function I(e, t, n, i) {
    return u(e, t, n, i);
}
function A(e, t) {
    let n = (0, s.A)(t),
        { data: r } = (0, l.FY)(),
        { data: a } = (0, _.P)(e),
        E = (0, d.A)();
    return i.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = r?.find((t) => t.applicationId === e),
                            i = n.find((t) => t?.id === e),
                            s = a?.find((t) => t.application_id === e)?.profile;
                        if (null == t || null == i || null == s) return null;
                        let _ = u(t, i, s, E);
                        return null == _ ? null : [e, _];
                    })
                    .filter(o.Vq),
            ),
        [n, r, a, E, t],
    );
}
