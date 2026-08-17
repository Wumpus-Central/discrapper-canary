l.d(t, { default: () => _ });
var i = l(477900),
    a = l(582128),
    n = l(691540),
    s = l(857250),
    o = l(97483),
    r = l(192308),
    c = l(173936),
    d = l(148494),
    u = l(953832),
    m = l(451909),
    C = l(378570),
    h = l(223863),
    p = l(734057),
    x = l(957565),
    k = l(403362),
    f = l(97808),
    S = l(778712),
    v = l(834730),
    g = l(427262),
    A = l(19575),
    E = l(999291),
    w = l(718019),
    y = l(918709);
let j = A.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    P = S._3.SIZE_40;
function b(e) {
    let { user: t } = e,
        l = (0, E._c)(t.id),
        { avatarProps: a, eventHandlers: n } = (0, w.V)({ user: t, displayProfile: l, avatarSize: P }),
        s = g.Ay.useName(t),
        o = g.Ay.useUserTag(t);
    return (0, i.jsxs)("div", {
        className: y.V,
        children: [
            (0, i.jsx)(j, { ...a, ...n }),
            (0, i.jsxs)("div", {
                className: y.D,
                children: [
                    (0, i.jsx)(v.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: s }),
                    (0, i.jsx)(v.E, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: o }),
                ],
            }),
        ],
    });
}
var I = l(652215),
    U = l(381941),
    V = l(375708);
function _(e) {
    let { user: t, source: l, onClose: f, ...S } = e,
        v = `${location.protocol}//${location.host}${I.BVt.USERS(t.id)}`,
        g = a.useCallback(
            async (e, t, l) => {
                let { withMessage: i, transitionToDestination: a, closeAfterSend: c } = t;
                l(!0);
                try {
                    let t = (await Promise.all(e.map(h.pk))).filter(k.Vq);
                    if (0 === t.length) return void l(!1);
                    c && f();
                    let u =
                        null != i && "" !== i
                            ? `${v}

${i}`
                            : v;
                    for (let e of t) {
                        let t = p.A.getChannel(e);
                        null != t &&
                            (await d.A.sendMessage(t.id, m.Ay.parse(t, u), !1, { location: U.Hx.USER_PROFILE }));
                    }
                    (0, n.P0)((0, s.o)(V.intl.string(V.t.kwmYkt), o.Ck.SUCCESS)),
                        a &&
                            null != t[0] &&
                            ((0, C.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, r.closeAllModals)());
                } catch (e) {
                    (0, n.P0)((0, s.o)(V.intl.string(V.t.iufib1), o.Ck.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [f, v],
        ),
        A = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": V.intl.string(V.t.WqhZss),
                    onClick: () => {
                        (0, x.C)(v, () => (0, n.P0)((0, s.o)(V.intl.string(V.t["L/PwZf"]), o.Ck.SUCCESS)));
                    },
                    icon: c.LinkIcon,
                },
            ],
            [v],
        );
    return (0, i.jsx)(u.ForwardModal, {
        ...S,
        onClose: f,
        source: l,
        customTitle: V.intl.string(V.t["sFN1/M"]),
        customPreview: (0, i.jsx)(b, { user: t }),
        customSendHandler: g,
        additionalActions: A,
    });
}
