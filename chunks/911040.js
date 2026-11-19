var r = t(855986),
    u = t(91242),
    a = t(64656),
    l = t(652215),
    i = t(165610),
    d = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = (0, r.bG)(
                    [u.A],
                    () => {
                        let n = e.type === l.rbe.GUILD_APP ? (0, i.HD)(e) : null;
                        return (null != n ? u.A.getFramesForSurface(n)[0]?.id : void 0) ?? null;
                    },
                    [e],
                ),
                t = (0, a.A)(n),
                { audible: s, userMuted: c } = (0, r.cf)(
                    [u.A],
                    () => {
                        let e = (0, i.ny)(u.A.getFrame(n))?.data;
                        return { audible: e?.audible === !0, userMuted: e?.userMuted === !0 };
                    },
                    [n],
                );
            return { frameId: n, runningLabel: t ? d.intl.string(d.t["1yCkJY"]) : null, audible: s, userMuted: c };
        },
    },
);
