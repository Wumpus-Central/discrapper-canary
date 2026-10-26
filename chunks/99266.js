i.d(e, { default: () => w });
var a = i(477900),
    l = i(582128),
    s = i(834730),
    r = i(991308),
    n = i(450078),
    c = i(858899),
    d = i(173936),
    o = i(148494),
    u = i(228427),
    m = i(451909),
    x = i(446244),
    h = i(734057),
    p = i(957565),
    k = i(403362),
    v = i(148166),
    f = i(381941),
    C = i(105292),
    g = i(555414);
function j(t) {
    let { target: e } = t,
        i = "artist" === e.kind;
    return (0, a.jsxs)("div", {
        className: g.sq,
        children: [
            (0, a.jsxs)("div", {
                className: g.kx,
                children: [
                    (0, a.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.title,
                    }),
                    null != e.subtitle &&
                        (0, a.jsx)(s.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: e.subtitle,
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: g.SZ,
                children: (0, a.jsx)(v.R, { src: e.imageUrl, isCircular: i, FallbackIcon: i ? r.I : n.u }),
            }),
        ],
    });
}
function w(t) {
    let { target: e, onClose: i, ...s } = t,
        r = l.useCallback(
            async (t, a, l) => {
                let { withMessage: s, closeAfterSend: r } = a;
                l(!0);
                try {
                    let a = (await Promise.all(t.map(x.pk))).filter(k.Vq);
                    if (0 === a.length) return void l(!1);
                    r && i();
                    let n = `${e.shareUrl}

`;
                    for (let t of a) {
                        let e = h.A.getChannel(t);
                        null != e &&
                            (await o.A.sendMessage(e.id, m.Ay.parse(e, n + (s ?? "")), !1, {
                                location: f.Hx.GUILD_SPACE,
                            }));
                    }
                    (0, c.P0)({ text: C.intl.string(C.t.kwmYkt), variant: "success" });
                } catch (t) {
                    (0, c.P0)({ text: C.intl.string(C.t.iufib1), variant: "critical" });
                } finally {
                    l(!1);
                }
            },
            [i, e.shareUrl],
        ),
        n = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () =>
                        (0, p.C)(e.shareUrl, () =>
                            (0, c.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                        ),
                    icon: d.LinkIcon,
                },
            ],
            [e.shareUrl],
        );
    return (0, a.jsx)(u.ForwardModal, {
        ...s,
        onClose: i,
        source: "guild-space-popular-music",
        customPreview: (0, a.jsx)(j, { target: e }),
        customSendHandler: r,
        additionalActions: n,
    });
}
