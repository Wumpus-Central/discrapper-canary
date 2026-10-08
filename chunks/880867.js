i.d(t, { default: () => _ });
var l = i(477900),
    a = i(582128),
    n = i(376357),
    s = i(192308),
    r = i(173936),
    o = i(148494),
    c = i(914718),
    d = i(451909),
    u = i(378570),
    m = i(446244),
    C = i(734057),
    x = i(957565),
    h = i(403362),
    k = i(640794),
    p = i(97808),
    f = i(778712),
    v = i(834730),
    A = i(427262),
    g = i(19575),
    S = i(999291),
    w = i(718019),
    E = i(887640);
let y = g.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu,
    j = f._3.SIZE_40;
function P(e) {
    let { user: t } = e,
        i = (0, S._c)(t.id),
        { avatarProps: a, eventHandlers: n } = (0, w.V)({ user: t, displayProfile: i, avatarSize: j }),
        s = A.Ay.useName(t),
        r = A.Ay.useUserTag(t);
    return (0, l.jsxs)("div", {
        className: E.V,
        children: [
            (0, l.jsx)(y, { ...a, ...n, statusBackdropColor: void 0 }),
            (0, l.jsxs)("div", {
                className: E.D,
                children: [
                    (0, l.jsx)(v.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: s }),
                    (0, l.jsx)(v.E, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: r }),
                ],
            }),
        ],
    });
}
var b = i(381941),
    I = i(660183);
function _(e) {
    let { user: t, source: i, onClose: p, ...f } = e,
        v = (0, k.A)(t.id),
        A = a.useCallback(
            async (e, t, i) => {
                let { withMessage: l, transitionToDestination: a, closeAfterSend: r } = t;
                i(!0);
                try {
                    let t = (await Promise.all(e.map(m.pk))).filter(h.Vq);
                    if (0 === t.length) return void i(!1);
                    r && p();
                    let c =
                        null != l && "" !== l
                            ? `${v}

${l}`
                            : v;
                    for (let e of t) {
                        let t = C.A.getChannel(e);
                        null != t &&
                            (await o.A.sendMessage(t.id, d.Ay.parse(t, c), !1, { location: b.Hx.USER_PROFILE }));
                    }
                    ((0, n.P0)((0, n.ox)(I.intl.string(I.t.kwmYkt), n.Ck.SUCCESS)),
                        a &&
                            null != t[0] &&
                            ((0, u.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, s.closeAllModals)()));
                } catch (e) {
                    (0, n.P0)((0, n.ox)(I.intl.string(I.t.iufib1), n.Ck.FAILURE));
                } finally {
                    i(!1);
                }
            },
            [p, v],
        ),
        g = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    "aria-label": I.intl.string(I.t.WqhZss),
                    onClick: () => {
                        (0, x.C)(v, () => (0, n.P0)((0, n.ox)(I.intl.string(I.t["L/PwZf"]), n.Ck.SUCCESS)));
                    },
                    icon: r.LinkIcon,
                },
            ],
            [v],
        );
    return (0, l.jsx)(c.ForwardModal, {
        ...f,
        onClose: p,
        source: i,
        customTitle: I.intl.string(I.t["sFN1/M"]),
        customPreview: (0, l.jsx)(P, { user: t }),
        customSendHandler: A,
        additionalActions: g,
    });
}
