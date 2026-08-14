l.d(t, { default: () => I });
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
    f = l(403362),
    k = l(97808),
    S = l(778712),
    v = l(834730),
    g = l(427262),
    A = l(19575),
    E = l(999291),
    w = l(718019),
    y = l(918709);
let j = A.Ay.getEnableHardwareAcceleration() ? k.Js : k.eu,
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
var U = l(652215),
    V = l(381941),
    _ = l(375708);
function I(e) {
    let { user: t, source: l, onClose: k, ...S } = e,
        v = `${location.protocol}//${location.host}${U.BVt.USERS(t.id)}`,
        g = a.useCallback(
            async (e, t, l) => {
                let { withMessage: i, transitionToDestination: a, closeAfterSend: c } = t;
                l(!0);
                try {
                    let t = (await Promise.all(e.map(h.pk))).filter(f.Vq);
                    if (0 === t.length) return void l(!1);
                    c && k();
                    let u =
                        null != i && "" !== i
                            ? `${v}

${i}`
                            : v;
                    for (let e of t) {
                        let t = p.A.getChannel(e);
                        null != t &&
                            (await d.A.sendMessage(t.id, m.Ay.parse(t, u), !1, { location: V.Hx.USER_PROFILE }));
                    }
                    (0, n.P0)((0, s.o)(_.intl.string(_.t.kwmYkt), o.Ck.SUCCESS)),
                        a &&
                            null != t[0] &&
                            ((0, C.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, r.closeAllModals)());
                } catch (e) {
                    (0, n.P0)((0, s.o)(_.intl.string(_.t.iufib1), o.Ck.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [k, v],
        ),
        A = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": _.intl.string(_.t.WqhZss),
                    onClick: () => {
                        (0, x.C)(v, () => (0, n.P0)((0, s.o)(_.intl.string(_.t["L/PwZf"]), o.Ck.SUCCESS)));
                    },
                    icon: c.q,
                },
            ],
            [v],
        );
    return (0, i.jsx)(u.ForwardModal, {
        ...S,
        onClose: k,
        source: l,
        customTitle: _.intl.string(_.t["sFN1/M"]),
        customPreview: (0, i.jsx)(b, { user: t }),
        customSendHandler: g,
        additionalActions: A,
    });
}
