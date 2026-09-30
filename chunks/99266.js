i.d(t, { default: () => w });
var l = i(477900),
    a = i(582128),
    s = i(834730),
    r = i(831544),
    n = i(432017),
    c = i(691540),
    o = i(857250),
    d = i(97483),
    u = i(173936),
    m = i(148494),
    h = i(914718),
    C = i(451909),
    k = i(446244),
    p = i(734057),
    x = i(957565),
    f = i(403362),
    v = i(148166),
    g = i(381941),
    S = i(375708),
    U = i(555414);
function j(e) {
    let { target: t } = e,
        i = "artist" === t.kind;
    return (0, l.jsxs)("div", {
        className: U.sq,
        children: [
            (0, l.jsxs)("div", {
                className: U.kx,
                children: [
                    (0, l.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: t.title,
                    }),
                    null != t.subtitle &&
                        (0, l.jsx)(s.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: t.subtitle,
                        }),
                ],
            }),
            (0, l.jsx)("div", {
                className: U.SZ,
                children: (0, l.jsx)(v.R, { src: t.imageUrl, isCircular: i, FallbackIcon: i ? r.MicrophoneIcon : n.T }),
            }),
        ],
    });
}
function w(e) {
    let { target: t, onClose: i, ...s } = e,
        r = a.useCallback(
            async (e, l, a) => {
                let { withMessage: s, closeAfterSend: r } = l;
                a(!0);
                try {
                    let l = (await Promise.all(e.map(k.pk))).filter(f.Vq);
                    if (0 === l.length) return void a(!1);
                    r && i();
                    let n = `${t.shareUrl}

`;
                    for (let e of l) {
                        let t = p.A.getChannel(e);
                        null != t &&
                            (await m.A.sendMessage(t.id, C.Ay.parse(t, n + (s ?? "")), !1, {
                                location: g.Hx.GUILD_SPACE,
                            }));
                    }
                    (0, c.P0)((0, o.o)(S.intl.string(S.t.kwmYkt), d.Ck.SUCCESS));
                } catch (e) {
                    (0, c.P0)((0, o.o)(S.intl.string(S.t.iufib1), d.Ck.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [i, t.shareUrl],
        ),
        n = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () =>
                        (0, x.C)(t.shareUrl, () => (0, c.P0)((0, o.o)(S.intl.string(S.t["L/PwZf"]), d.Ck.SUCCESS))),
                    icon: u.LinkIcon,
                },
            ],
            [t.shareUrl],
        );
    return (0, l.jsx)(h.ForwardModal, {
        ...s,
        onClose: i,
        source: "guild-space-popular-music",
        customPreview: (0, l.jsx)(j, { target: t }),
        customSendHandler: r,
        additionalActions: n,
    });
}
