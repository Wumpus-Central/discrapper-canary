var a = i(477900),
    l = i(582128),
    s = i(834730),
    r = i(991308),
    n = i(450078),
    c = i(858899),
    d = i(173936),
    o = i(138399),
    u = i(92961),
    m = i(451909),
    h = i(223863),
    x = i(734057),
    p = i(957565),
    k = i(403362),
    v = i(148166),
    f = i(381941),
    C = i(792996),
    b = i(555414);
function g(t) {
    let { target: e } = t,
        i = "artist" === e.kind;
    return (0, a.jsxs)("div", {
        className: b.sq,
        children: [
            (0, a.jsxs)("div", {
                className: b.kx,
                children: [
                    (0, a.jsx)(s.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.title,
                    }),
                    null != e.subtitle &&
                        (0, a.jsx)(s.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: e.subtitle,
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: b.SZ,
                children: (0, a.jsx)(v.R, { src: e.imageUrl, isCircular: i, FallbackIcon: i ? r.I : n.u }),
            }),
        ],
    });
}
i.d(
    e,
    {},
    {
        default: function (t) {
            let { target: e, onClose: i, ...s } = t,
                r = l.useCallback(
                    async (t, a, l) => {
                        let { withMessage: s, closeAfterSend: r } = a;
                        l(!0);
                        try {
                            let a = (await Promise.all(t.map(h.pk))).filter(k.Vq);
                            if (0 === a.length) return void l(!1);
                            r && i();
                            let n = `${e.shareUrl}

`;
                            for (let t of a) {
                                let e = x.A.getChannel(t);
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
                customPreview: (0, a.jsx)(g, { target: e }),
                customSendHandler: r,
                additionalActions: n,
            });
        },
    },
);
