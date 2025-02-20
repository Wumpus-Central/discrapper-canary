t.d(a, { default: () => W });
var l = t(200651),
    s = t(192379),
    n = t(442837),
    i = t(481060),
    r = t(239091),
    d = t(13245),
    u = t(237997),
    c = t(981631),
    o = t(388032);
let v = () => [
        {
            value: c.ipw.LARGE,
            name: o.NW.string(o.t.YcOxtr)
        },
        {
            value: c.ipw.SMALL,
            name: o.NW.string(o.t.BKIKq6)
        }
    ],
    m = () => [
        {
            value: c.wC$.ALWAYS,
            name: o.NW.string(o.t.nBmDra)
        },
        {
            value: c.wC$.ONLY_WHILE_SPEAKING,
            name: o.NW.string(o.t['2OvIZW'])
        },
        {
            value: c.wC$.NEVER,
            name: o.NW.string(o.t.ekjlPD)
        }
    ],
    p = () => [
        {
            value: c.OYC.ALWAYS,
            name: o.NW.string(o.t.nBmDra)
        },
        {
            value: c.OYC.ONLY_WHILE_SPEAKING,
            name: o.NW.string(o.t['2OvIZW'])
        }
    ];
function W(e) {
    let { onSelect: a, onClose: t } = e,
        {
            avatarSizeMode: c,
            displayNameMode: W,
            displayUserMode: N
        } = (0, n.cj)([u.Z], () => ({
            avatarSizeMode: u.Z.getAvatarSizeMode(),
            displayNameMode: u.Z.getDisplayNameMode(),
            displayUserMode: u.Z.getDisplayUserMode()
        })),
        g = s.useRef(t);
    return (
        s.useEffect(() => {
            g.current = t;
        }),
        s.useEffect(() => () => g.current(), []),
        (0, l.jsxs)(i.v2r, {
            navId: 'overlay-voice-widget-context-menu',
            onClose: r.Zy,
            'aria-label': o.NW.string(o.t.tPfVWl),
            onSelect: a,
            children: [
                (0, l.jsx)(i.kSQ, {
                    label: o.NW.string(o.t.dnvZSk),
                    children: v().map((e) =>
                        (0, l.jsx)(
                            i.k5B,
                            {
                                label: e.name,
                                checked: c === e.value,
                                id: 'avatar-size-mode-'.concat(e.value),
                                group: 'avatar-size-mode',
                                action: () => d.Z.setAvatarSizeMode(e.value)
                            },
                            e.value
                        )
                    )
                }),
                (0, l.jsx)(i.kSQ, {
                    label: o.NW.string(o.t.J0dpcH),
                    children: m().map((e) =>
                        (0, l.jsx)(
                            i.k5B,
                            {
                                label: e.name,
                                checked: W === e.value,
                                id: 'display-name-mode-'.concat(e.value),
                                group: 'display-name-mode',
                                action: () => d.Z.setDisplayNameMode(e.value)
                            },
                            e.value
                        )
                    )
                }),
                (0, l.jsx)(i.kSQ, {
                    label: o.NW.string(o.t.swsWWF),
                    children: p().map((e) =>
                        (0, l.jsx)(
                            i.k5B,
                            {
                                label: e.name,
                                checked: N === e.value,
                                id: 'display-user-mode-'.concat(e.value),
                                group: 'display-user-mode',
                                action: () => d.Z.setDisplayUserMode(e.value)
                            },
                            e.value
                        )
                    )
                })
            ]
        })
    );
}
