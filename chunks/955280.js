t.d(a, { default: () => g });
var l = t(200651),
    n = t(192379),
    i = t(442837),
    s = t(481060),
    r = t(239091),
    d = t(13245),
    u = t(237997),
    c = t(981631),
    o = t(388032);
let v = () => [
        {
            value: c.ipw.LARGE,
            name: o.intl.string(o.t.YcOxtr)
        },
        {
            value: c.ipw.SMALL,
            name: o.intl.string(o.t.BKIKq6)
        }
    ],
    m = () => [
        {
            value: c.wC$.ALWAYS,
            name: o.intl.string(o.t.nBmDra)
        },
        {
            value: c.wC$.ONLY_WHILE_SPEAKING,
            name: o.intl.string(o.t['2OvIZW'])
        },
        {
            value: c.wC$.NEVER,
            name: o.intl.string(o.t.ekjlPD)
        }
    ],
    p = () => [
        {
            value: c.OYC.ALWAYS,
            name: o.intl.string(o.t.nBmDra)
        },
        {
            value: c.OYC.ONLY_WHILE_SPEAKING,
            name: o.intl.string(o.t['2OvIZW'])
        }
    ];
function g(e) {
    let { onSelect: a, onClose: t } = e,
        {
            avatarSizeMode: c,
            displayNameMode: g,
            displayUserMode: k
        } = (0, i.cj)([u.Z], () => ({
            avatarSizeMode: u.Z.getAvatarSizeMode(),
            displayNameMode: u.Z.getDisplayNameMode(),
            displayUserMode: u.Z.getDisplayUserMode()
        })),
        S = n.useRef(t);
    return (
        n.useEffect(() => {
            S.current = t;
        }),
        n.useEffect(() => () => S.current(), []),
        (0, l.jsxs)(s.v2r, {
            navId: 'overlay-voice-widget-context-menu',
            onClose: r.Zy,
            'aria-label': o.intl.string(o.t.tPfVWl),
            onSelect: a,
            children: [
                (0, l.jsx)(s.kSQ, {
                    label: o.intl.string(o.t.dnvZSk),
                    children: v().map((e) =>
                        (0, l.jsx)(
                            s.k5B,
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
                (0, l.jsx)(s.kSQ, {
                    label: o.intl.string(o.t.J0dpcH),
                    children: m().map((e) =>
                        (0, l.jsx)(
                            s.k5B,
                            {
                                label: e.name,
                                checked: g === e.value,
                                id: 'display-name-mode-'.concat(e.value),
                                group: 'display-name-mode',
                                action: () => d.Z.setDisplayNameMode(e.value)
                            },
                            e.value
                        )
                    )
                }),
                (0, l.jsx)(s.kSQ, {
                    label: o.intl.string(o.t.swsWWF),
                    children: p().map((e) =>
                        (0, l.jsx)(
                            s.k5B,
                            {
                                label: e.name,
                                checked: k === e.value,
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
