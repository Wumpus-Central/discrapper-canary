n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(704215),
    u = n(907862),
    d = n(243778),
    p = n(665149),
    f = n(515970),
    g = n(5888),
    h = n(840767),
    m = n(45173),
    _ = n(921944),
    b = n(860076),
    E = n(388032),
    O = n(547971);
function v(e) {
    let { className: t } = e,
        [n, l] = (0, d.US)([c.z.CHECKPOINT_2025_DESKTOP_UPSELL]),
        v = (0, o.e7)([g.Z], () => g.Z.hasOpenedCheckpointThisSession && !g.Z.hasSeenRewatchPopover),
        y = i.useRef(null),
        I = n === c.z.CHECKPOINT_2025_DESKTOP_UPSELL,
        C = () => {
            (0, f.OL)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.JO, {
                ref: y,
                className: t,
                onClick: () => {
                    (0, h.Z)("header_bar"), I && l(_.L.INDIRECT_ACTION);
                },
                icon: s.d5i,
                tooltip: E.intl.string(b.default["CdU/PF"]),
                foreground: a()(O.iconForeground, I ? O.highlighted : null),
            }),
            !I &&
                v &&
                (0, r.jsx)(u.J2, {
                    targetElementRef: y,
                    title: E.intl.string(b.default.goiR2u),
                    body: E.intl.string(b.default.UYjWa5),
                    onRequestClose: C,
                    actions: [
                        {
                            text: E.intl.string(E.t["NX+WJN"]),
                            onClick: C,
                        },
                    ],
                }),
            I && (0, r.jsx)(m.Z, { markAsDismissed: l }),
        ],
    });
}
