i.d(t, { default: () => U });
var l = i(477900),
    a = i(582128),
    s = i(834730),
    r = i(831544),
    n = i(432017),
    c = i(376357),
    o = i(173936),
    d = i(148494),
    u = i(914718),
    m = i(451909),
    h = i(446244),
    x = i(734057),
    C = i(957565),
    k = i(403362),
    p = i(148166),
    f = i(381941),
    v = i(660183),
    g = i(555414);
function S(e) {
    let { target: t } = e,
        i = "artist" === t.kind;
    return (0, l.jsxs)("div", {
        className: g.sq,
        children: [
            (0, l.jsxs)("div", {
                className: g.kx,
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
                className: g.SZ,
                children: (0, l.jsx)(p.R, { src: t.imageUrl, isCircular: i, FallbackIcon: i ? r.MicrophoneIcon : n.T }),
            }),
        ],
    });
}
function U(e) {
    let { target: t, onClose: i, ...s } = e,
        r = a.useCallback(
            async (e, l, a) => {
                let { withMessage: s, closeAfterSend: r } = l;
                a(!0);
                try {
                    let l = (await Promise.all(e.map(h.pk))).filter(k.Vq);
                    if (0 === l.length) return void a(!1);
                    r && i();
                    let n = `${t.shareUrl}

`;
                    for (let e of l) {
                        let t = x.A.getChannel(e);
                        null != t &&
                            (await d.A.sendMessage(t.id, m.Ay.parse(t, n + (s ?? "")), !1, {
                                location: f.Hx.GUILD_SPACE,
                            }));
                    }
                    (0, c.P0)((0, c.ox)(v.intl.string(v.t.kwmYkt), c.Ck.SUCCESS));
                } catch (e) {
                    (0, c.P0)((0, c.ox)(v.intl.string(v.t.iufib1), c.Ck.FAILURE));
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
                        (0, C.C)(t.shareUrl, () => (0, c.P0)((0, c.ox)(v.intl.string(v.t["L/PwZf"]), c.Ck.SUCCESS))),
                    icon: o.LinkIcon,
                },
            ],
            [t.shareUrl],
        );
    return (0, l.jsx)(u.ForwardModal, {
        ...s,
        onClose: i,
        source: "guild-space-popular-music",
        customPreview: (0, l.jsx)(S, { target: t }),
        customSendHandler: r,
        additionalActions: n,
    });
}
