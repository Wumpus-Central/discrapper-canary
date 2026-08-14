l.d(t, { default: () => I });
var a = l(477900),
    i = l(582128),
    s = l(691540),
    n = l(857250),
    r = l(97483),
    o = l(192308),
    c = l(148494),
    d = l(953832),
    u = l(451909),
    m = l(378570),
    h = l(223863),
    p = l(734057),
    x = l(403362),
    C = l(97808),
    f = l(778712),
    k = l(834730),
    v = l(427262),
    A = l(19575),
    E = l(999291),
    S = l(718019),
    g = l(918709);
let w = A.Ay.getEnableHardwareAcceleration() ? C.Js : C.eu,
    j = f._3.SIZE_40;
function y(e) {
    let { user: t } = e,
        l = (0, E._c)(t.id),
        { avatarProps: i, eventHandlers: s } = (0, S.V)({ user: t, displayProfile: l, avatarSize: j }),
        n = v.Ay.useName(t),
        r = v.Ay.useUserTag(t);
    return (0, a.jsxs)("div", {
        className: g.V,
        children: [
            (0, a.jsx)(w, { ...i, ...s }),
            (0, a.jsxs)("div", {
                className: g.D,
                children: [
                    (0, a.jsx)(k.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: n }),
                    (0, a.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: r }),
                ],
            }),
        ],
    });
}
var V = l(652215),
    _ = l(381941),
    b = l(375708);
function I(e) {
    let { user: t, source: l, onClose: C, ...f } = e,
        k = `${location.protocol}//${location.host}${V.BVt.USERS(t.id)}`,
        v = i.useCallback(
            async (e, t, l) => {
                let { withMessage: a, transitionToDestination: i, closeAfterSend: d } = t;
                l(!0);
                try {
                    let t = (await Promise.all(e.map(h.pk))).filter(x.Vq);
                    if (0 === t.length) return void l(!1);
                    d && C();
                    let f =
                        null != a && "" !== a
                            ? `${k}

${a}`
                            : k;
                    for (let e of t) {
                        let t = p.A.getChannel(e);
                        null != t &&
                            (await c.A.sendMessage(t.id, u.Ay.parse(t, f), !1, { location: _.Hx.USER_PROFILE }));
                    }
                    (0, s.P0)((0, n.o)(b.intl.string(b.t.kwmYkt), r.Ck.SUCCESS)),
                        i &&
                            null != t[0] &&
                            ((0, m.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }), (0, o.closeAllModals)());
                } catch (e) {
                    (0, s.P0)((0, n.o)(b.intl.string(b.t.iufib1), r.Ck.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [C, k],
        );
    return (0, a.jsx)(d.ForwardModal, {
        ...f,
        onClose: C,
        source: l,
        customTitle: b.intl.string(b.t["sFN1/M"]),
        customPreview: (0, a.jsx)(y, { user: t }),
        customSendHandler: v,
    });
}
