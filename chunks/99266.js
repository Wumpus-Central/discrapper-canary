var s = i(477900),
    a = i(582128),
    l = i(834730),
    r = i(991308),
    n = i(450078),
    c = i(858899),
    o = i(173936),
    d = i(138399),
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
    return (0, s.jsxs)("div", {
        className: b.sq,
        children: [
            (0, s.jsxs)("div", {
                className: b.kx,
                children: [
                    (0, s.jsx)(l.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.title,
                    }),
                    null != e.subtitle &&
                        (0, s.jsx)(l.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: e.subtitle,
                        }),
                ],
            }),
            (0, s.jsx)("div", {
                className: b.SZ,
                children: (0, s.jsx)(v.R, {
                    src: e.imageUrl,
                    isCircular: i,
                    FallbackIcon: i ? r.MusicArtistIcon : n.MusicAlbumIcon,
                }),
            }),
        ],
    });
}
i.d(
    e,
    {},
    {
        default: function (t) {
            let { target: e, onClose: i, ...l } = t,
                r = a.useCallback(
                    async (t, s, a) => {
                        let { withMessage: l, closeAfterSend: r } = s;
                        a(!0);
                        try {
                            let s = (await Promise.all(t.map(h.pk))).filter(k.Vq);
                            if (0 === s.length) return void a(!1);
                            r && i();
                            let n = `${e.shareUrl}

`;
                            for (let t of s) {
                                let e = x.A.getChannel(t);
                                null != e &&
                                    (await d.A.sendMessage(e.id, m.Ay.parse(e, n + (l ?? "")), !1, {
                                        location: f.Hx.GUILD_SPACE,
                                    }));
                            }
                            (0, c.P0)({ text: C.intl.string(C.t.kwmYkt), variant: "success" });
                        } catch (t) {
                            (0, c.P0)({ text: C.intl.string(C.t.iufib1), variant: "critical" });
                        } finally {
                            a(!1);
                        }
                    },
                    [i, e.shareUrl],
                ),
                n = a.useMemo(
                    () => [
                        {
                            variant: "secondary",
                            text: void 0,
                            onClick: () =>
                                (0, p.C)(e.shareUrl, () =>
                                    (0, c.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                                ),
                            icon: o.LinkIcon,
                        },
                    ],
                    [e.shareUrl],
                );
            return (0, s.jsx)(u.ForwardModal, {
                ...l,
                onClose: i,
                source: "guild-space-popular-music",
                customPreview: (0, s.jsx)(g, { target: e }),
                customSendHandler: r,
                additionalActions: n,
            });
        },
    },
);
