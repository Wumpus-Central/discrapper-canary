var r = i(729937),
    e = i(981616),
    l = i(285933),
    a = i(227005);
i.d(
    n,
    {},
    {
        A: async function (t, n, i) {
            let { hasSpotifyAccount: u, activity: o, user: c } = t;
            (0, a.A)(u) && null != o && null != o.sync_id && (await (0, e.dM)(), r.ZH(o, c.id), (0, l.A)(n, c, o, i));
        },
    },
);
