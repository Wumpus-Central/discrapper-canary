n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(554146),
    u = n(342494),
    d = n(379848),
    p = n(58736),
    f = n(796104),
    h = n(719718),
    A = n(146104),
    g = n(861044),
    m = n(49999),
    b = n(622865),
    _ = n(985018),
    E = n(415449);

function O(e) {
    let { className: t } = e,
        [n, l] = (0, d.kn)([c.M.CHECKPOINT_2025_DESKTOP_UPSELL]),
        O = (0, o.bG)([h.A], () => h.A.hasOpenedCheckpointThisSession && !h.A.hasSeenRewatchPopover),
        y = i.useRef(null),
        I = n === c.M.CHECKPOINT_2025_DESKTOP_UPSELL,
        v = () => {
            (0, f._5)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.In, {
                ref: y,
                className: t,
                onClick: () => {
                    (0, A.A)("header_bar"), I && l(m.i.INDIRECT_ACTION);
                },
                icon: s.MZT,
                tooltip: _.intl.string(b.default["CdU/PF"]),
                foreground: a()(E.t, I ? E.m : null),
            }),
            !I &&
                O &&
                (0, r.jsx)(u.AM, {
                    targetElementRef: y,
                    title: _.intl.string(b.default.goiR2u),
                    body: _.intl.string(b.default.UYjWa5),
                    onRequestClose: v,
                    actions: [
                        {
                            text: _.intl.string(_.t["NX+WJN"]),
                            onClick: v,
                        },
                    ],
                }),
            I &&
                (0, r.jsx)(g.A, {
                    markAsDismissed: l,
                }),
        ],
    });
}
