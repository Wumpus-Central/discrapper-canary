a.d(e, { default: () => M });
var i = a(477900),
    l = a(582128),
    s = a(858899),
    n = a(192308),
    r = a(173936),
    c = a(148494),
    o = a(228427),
    d = a(451909),
    u = a(378570),
    m = a(223863),
    x = a(734057),
    v = a(957565),
    h = a(403362),
    p = a(640794),
    f = a(97808),
    k = a(778712),
    C = a(834730),
    g = a(427262),
    A = a(19575),
    w = a(999291),
    y = a(718019),
    j = a(887640);
let P = A.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    b = k._3.SIZE_40;
function E(t) {
    let { user: e } = t,
        a = (0, w._c)(e.id),
        { avatarProps: l, eventHandlers: s } = (0, y.V)({ user: e, displayProfile: a, avatarSize: b }),
        n = g.Ay.useName(e),
        r = g.Ay.useUserTag(e);
    return (0, i.jsxs)("div", {
        className: j.V,
        children: [
            (0, i.jsx)(P, { ...l, ...s, statusBackdropColor: void 0 }),
            (0, i.jsxs)("div", {
                className: j.D,
                children: [
                    (0, i.jsx)(C.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: n }),
                    (0, i.jsx)(C.E, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: r }),
                ],
            }),
        ],
    });
}
var _ = a(381941),
    I = a(105292);
function M(t) {
    let { user: e, source: a, onClose: f, ...k } = t,
        C = (0, p.A)(e.id),
        g = l.useCallback(
            async (t, e, a) => {
                let { withMessage: i, transitionToDestination: l, closeAfterSend: r } = e;
                a(!0);
                try {
                    let e = (await Promise.all(t.map(m.pk))).filter(h.Vq);
                    if (0 === e.length) return void a(!1);
                    r && f();
                    let o =
                        null != i && "" !== i
                            ? `${C}

${i}`
                            : C;
                    for (let t of e) {
                        let e = x.A.getChannel(t);
                        null != e &&
                            (await c.A.sendMessage(e.id, d.Ay.parse(e, o), !1, { location: _.Hx.USER_PROFILE }));
                    }
                    ((0, s.P0)({ text: I.intl.string(I.t.kwmYkt), variant: "success" }),
                        l &&
                            null != e[0] &&
                            ((0, u.iN)(e[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, n.closeAllModals)()));
                } catch (t) {
                    (0, s.P0)({ text: I.intl.string(I.t.iufib1), variant: "critical" });
                } finally {
                    a(!1);
                }
            },
            [f, C],
        ),
        A = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": I.intl.string(I.t.WqhZss),
                    onClick: () => {
                        (0, v.C)(C, () => (0, s.P0)({ text: I.intl.string(I.t["L/PwZf"]), variant: "success" }));
                    },
                    icon: r.LinkIcon,
                },
            ],
            [C],
        );
    return (0, i.jsx)(o.ForwardModal, {
        ...k,
        onClose: f,
        source: a,
        customTitle: I.intl.string(I.t["sFN1/M"]),
        customPreview: (0, i.jsx)(E, { user: e }),
        customSendHandler: g,
        additionalActions: A,
    });
}
