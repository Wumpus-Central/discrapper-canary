n.d(t, { A: () => f, M: () => m });
var i = n(64700),
    l = n(205338),
    r = n(87075),
    s = n(429913),
    a = n(201718),
    o = n(207803),
    u = n(403362),
    d = n(789069),
    c = n(385771);
let h = {
    [l.A.MARVEL_RIVALS]: (e) => {
        let t = e.data?.primary?.season,
            n = e.data?.primary?.rank_name,
            i = (0, d.a)(e.data?.primary?.rank_image),
            l = (0, d.a)(e.data?.primary?.featured_played_character_image);
        return null == t || null == n || null == l
            ? null
            : { previewText: `${t}: ${n}`, previewTextShort: n, previewIcon: i, previewImage: l };
    },
    [l.A.WUTHERING_WAVES]: (e, t) => {
        var n;
        let i,
            l = e.username,
            s =
                ((n = r.f.NUMBER),
                null == (i = e.data?.dynamic?.find((e) => "union_level" === e.name)) || i.type !== n ? null : i.value),
            a = (0, d.a)(e.data?.primary?.featured_played_character_image);
        return null == l || null == s || null == a
            ? null
            : {
                  previewText: `${l}: Level ${t.format(s)}`,
                  previewTextShort: `Level ${t.format(s)}`,
                  previewIcon: null,
                  previewImage: a,
              };
    },
};
function p(e, t, n, i) {
    let l = t.getIconURL(16);
    if (null == l) return null;
    let r = h[e.widgetTemplateId](n, i);
    return null == r ? null : { application: { id: t.id, name: t.name, icon: l }, ...r };
}
function m(e, t, n, i) {
    return p(e, t, n, i);
}
function f(e, t) {
    let n = (0, s.A)(t),
        { data: l } = (0, o.FY)(),
        { data: r } = (0, a.P)(e),
        d = (0, c.A)();
    return i.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = l?.find((t) => t.applicationId === e),
                            i = n.find((t) => t?.id === e),
                            s = r?.find((t) => t.application_id === e)?.profile;
                        if (null == t || null == i || null == s) return null;
                        let a = p(t, i, s, d);
                        return null == a ? null : [e, a];
                    })
                    .filter(u.Vq),
            ),
        [n, l, r, d, t],
    );
}
