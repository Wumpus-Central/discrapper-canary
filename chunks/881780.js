var i = n(855986),
    r = n(652896),
    l = n(287809),
    s = n(562153),
    a = n(775456),
    o = n(712766);
(n(652215),
    n.d(
        t,
        {},
        {
            A: function (e) {
                let { enabled: t } = a.A.useConfig({
                        guildId: e?.guildId ?? "",
                        location: "usePassTheControllerHolderName",
                    }),
                    n = (0, i.bG)(
                        [o.A, l.default],
                        () => {
                            if (null == e) return null;
                            let t = o.A.getControllerHolderId((0, r._z)(e));
                            return null != t ? l.default.getUser(t) : null;
                        },
                        [e],
                    ),
                    u = s.Ay.useName(e?.guildId, e?.channelId, n);
                return t && null != n ? u : null;
            },
        },
    ));
