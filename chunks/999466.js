i.d(n, { default: () => p });
var l = i(200651);
i(192379);
var e = i(442837),
    a = i(481060),
    c = i(239091),
    o = i(547972),
    r = i(435064),
    s = i(621781),
    u = i(39604),
    d = i(332325),
    h = i(388032);
function p(t) {
    let { onSelect: n } = t,
        { clipsLength: i } = (0, e.cj)([r.Z], () => r.Z.getSettings()),
        p = (0, s.Z)();
    return (0, l.jsxs)(a.v2r, {
        navId: 'clips-context',
        'aria-label': h.intl.string(h.t.J1hsY2),
        onClose: c.Zy,
        onSelect: n,
        children: [
            (0, l.jsx)(a.kSQ, {
                children: (0, l.jsx)(a.sNh, {
                    id: 'clips-duration',
                    label: h.intl.string(h.t.OgfUio),
                    children: p.map((t) => {
                        let { value: n, label: e } = t;
                        return (0, l.jsx)(
                            a.k5B,
                            {
                                id: 'clips-duration-'.concat(n),
                                group: 'clips-duration',
                                label: e,
                                action: () => (0, u.eU)(n),
                                checked: n === i
                            },
                            n
                        );
                    })
                })
            }),
            (0, l.jsx)(a.kSQ, {
                children: (0, l.jsx)(a.sNh, {
                    id: 'clips-settings',
                    label: h.intl.string(h.t.J1hsY2),
                    action: () => (0, o.Z)(d.Z.CLIPS)
                })
            })
        ]
    });
}
