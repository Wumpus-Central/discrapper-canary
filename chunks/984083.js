var r = n(630449),
    i = n(272469),
    o = n(83220);
n.d(
    t,
    {},
    {
        Z: function (e, t) {
            let n = (0, r.KU)(),
                a = (0, r.rm)();
            if (!n) return;
            let { beforeBreadcrumb: s = null, maxBreadcrumbs: l = 100 } = n.getOptions();
            if (l <= 0) return;
            let c = { timestamp: (0, o.lu)(), ...e },
                u = s ? (0, i.pq)(() => s(c, t)) : c;
            null !== u && (n.emit && n.emit("beforeAddBreadcrumb", u, t), a.addBreadcrumb(u, l));
        },
    },
);
