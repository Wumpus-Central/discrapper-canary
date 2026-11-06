var i = n(723702);
n.d(
    t,
    {},
    {
        A: async function (e, t) {
            let { default: r } = await Promise.resolve().then(n.bind(n, 564508)),
                a = r(e, { skipExtensionCheck: t, analyticsLocations: [] });
            if (null != a) a(null);
            else if (i.isPlatformEmbedded) window.open(e);
            else {
                let t = document.createElement("a");
                ((t.href = e), (t.target = "_blank"), (t.rel = "noreferrer noopener"), t.click());
            }
        },
    },
);
