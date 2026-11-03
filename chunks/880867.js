a.d(t, { default: () => M });
var i = a(477900),
    l = a(582128),
    s = a(858899),
    n = a(192308),
    r = a(173936),
    o = a(148494),
    c = a(228427),
    d = a(451909),
    u = a(378570),
    m = a(223863),
    v = a(734057),
    x = a(957565),
    h = a(403362),
    p = a(640794),
    f = a(97808),
    k = a(778712),
    C = a(834730),
    g = a(427262),
    y = a(19575),
    A = a(999291),
    w = a(718019),
    b = a(887640);
let j = y.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    P = k._3.SIZE_40;
function E(e) {
    let { user: t } = e,
        a = (0, A._c)(t.id),
        { avatarProps: l, eventHandlers: s } = (0, w.V)({ user: t, displayProfile: a, avatarSize: P }),
        n = g.Ay.useName(t),
        r = g.Ay.useUserTag(t);
    return (0, i.jsxs)("div", {
        className: b.V,
        children: [
            (0, i.jsx)(j, { ...l, ...s, statusBackdropColor: void 0 }),
            (0, i.jsxs)("div", {
                className: b.D,
                children: [
                    (0, i.jsx)(C.E, { variant: "body-md/medium", color: "text-default", lineClamp: 1, children: n }),
                    (0, i.jsx)(C.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: r }),
                ],
            }),
        ],
    });
}
var _ = a(381941),
    I = a(105292);
function M(e) {
    let { user: t, source: a, onClose: f, ...k } = e,
        C = (0, p.A)(t.id),
        g = l.useCallback(
            async (e, t, a) => {
                let { withMessage: i, transitionToDestination: l, closeAfterSend: r } = t;
                a(!0);
                try {
                    let t = (await Promise.all(e.map(m.pk))).filter(h.Vq);
                    if (0 === t.length) return void a(!1);
                    r && f();
                    let c =
                        null != i && "" !== i
                            ? `${C}

${i}`
                            : C;
                    for (let e of t) {
                        let t = v.A.getChannel(e);
                        null != t &&
                            (await o.A.sendMessage(t.id, d.Ay.parse(t, c), !1, { location: _.Hx.USER_PROFILE }));
                    }
                    ((0, s.P0)({ text: I.intl.string(I.t.kwmYkt), variant: "success" }),
                        l &&
                            null != t[0] &&
                            ((0, u.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, n.closeAllModals)()));
                } catch (e) {
                    (0, s.P0)({ text: I.intl.string(I.t.iufib1), variant: "critical" });
                } finally {
                    a(!1);
                }
            },
            [f, C],
        ),
        y = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": I.intl.string(I.t.WqhZss),
                    onClick: () => {
                        (0, x.C)(C, () => (0, s.P0)({ text: I.intl.string(I.t["L/PwZf"]), variant: "success" }));
                    },
                    icon: r.LinkIcon,
                },
            ],
            [C],
        );
    return (0, i.jsx)(c.ForwardModal, {
        ...k,
        onClose: f,
        source: a,
        customTitle: I.intl.string(I.t["sFN1/M"]),
        customPreview: (0, i.jsx)(E, { user: t }),
        customSendHandler: g,
        additionalActions: y,
    });
}
