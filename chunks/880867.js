i.d(t, { default: () => N });
var l = i(477900),
    a = i(582128),
    n = i(691540),
    s = i(857250),
    r = i(97483),
    o = i(192308),
    c = i(173936),
    d = i(148494),
    u = i(953832),
    m = i(451909),
    C = i(378570),
    h = i(223863),
    x = i(734057),
    k = i(957565),
    p = i(403362),
    f = i(640794),
    v = i(97808),
    A = i(778712),
    g = i(834730),
    S = i(427262),
    w = i(19575),
    E = i(999291),
    y = i(718019),
    j = i(887640);
let P = w.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    b = A._3.SIZE_40;
function I(e) {
    let { user: t } = e,
        i = (0, E._c)(t.id),
        { avatarProps: a, eventHandlers: n } = (0, y.V)({ user: t, displayProfile: i, avatarSize: b }),
        s = S.Ay.useName(t),
        r = S.Ay.useUserTag(t);
    return (0, l.jsxs)("div", {
        className: j.V,
        children: [
            (0, l.jsx)(P, { ...a, ...n }),
            (0, l.jsxs)("div", {
                className: j.D,
                children: [
                    (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: s }),
                    (0, l.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: r }),
                ],
            }),
        ],
    });
}
var _ = i(381941),
    M = i(375708);
function N(e) {
    let { user: t, source: i, onClose: v, ...A } = e,
        g = (0, f.A)(t.id),
        S = a.useCallback(
            async (e, t, i) => {
                let { withMessage: l, transitionToDestination: a, closeAfterSend: c } = t;
                i(!0);
                try {
                    let t = (await Promise.all(e.map(h.pk))).filter(p.Vq);
                    if (0 === t.length) return void i(!1);
                    c && v();
                    let u =
                        null != l && "" !== l
                            ? `${g}

${l}`
                            : g;
                    for (let e of t) {
                        let t = x.A.getChannel(e);
                        null != t &&
                            (await d.A.sendMessage(t.id, m.Ay.parse(t, u), !1, { location: _.Hx.USER_PROFILE }));
                    }
                    (0, n.P0)((0, s.o)(M.intl.string(M.t.kwmYkt), r.Ck.SUCCESS)),
                        a &&
                            null != t[0] &&
                            ((0, C.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, o.closeAllModals)());
                } catch (e) {
                    (0, n.P0)((0, s.o)(M.intl.string(M.t.iufib1), r.Ck.FAILURE));
                } finally {
                    i(!1);
                }
            },
            [v, g],
        ),
        w = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": M.intl.string(M.t.WqhZss),
                    onClick: () => {
                        (0, k.C)(g, () => (0, n.P0)((0, s.o)(M.intl.string(M.t["L/PwZf"]), r.Ck.SUCCESS)));
                    },
                    icon: c.LinkIcon,
                },
            ],
            [g],
        );
    return (0, l.jsx)(u.ForwardModal, {
        ...A,
        onClose: v,
        source: i,
        customTitle: M.intl.string(M.t["sFN1/M"]),
        customPreview: (0, l.jsx)(I, { user: t }),
        customSendHandler: S,
        additionalActions: w,
    });
}
