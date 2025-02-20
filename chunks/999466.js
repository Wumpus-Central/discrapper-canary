e.d(n, { default: () => p });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    c = e(239091),
    o = e(547972),
    r = e(435064),
    s = e(621781),
    u = e(39604),
    d = e(332325),
    h = e(388032);
function p(t) {
    let { onSelect: n } = t,
        { clipsLength: e } = (0, l.cj)([r.Z], () => r.Z.getSettings()),
        p = (0, s.Z)();
    return (0, i.jsxs)(a.v2r, {
        navId: 'clips-context',
        'aria-label': h.NW.string(h.t.J1hsY2),
        onClose: c.Zy,
        onSelect: n,
        children: [
            (0, i.jsx)(a.kSQ, {
                children: (0, i.jsx)(a.sNh, {
                    id: 'clips-duration',
                    label: h.NW.string(h.t.OgfUio),
                    children: p.map((t) => {
                        let { value: n, label: l } = t;
                        return (0, i.jsx)(
                            a.k5B,
                            {
                                id: 'clips-duration-'.concat(n),
                                group: 'clips-duration',
                                label: l,
                                action: () => (0, u.eU)(n),
                                checked: n === e
                            },
                            n
                        );
                    })
                })
            }),
            (0, i.jsx)(a.kSQ, {
                children: (0, i.jsx)(a.sNh, {
                    id: 'clips-settings',
                    label: h.NW.string(h.t.J1hsY2),
                    action: () => (0, o.Z)(d.Z.CLIPS)
                })
            })
        ]
    });
}
