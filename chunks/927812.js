var l = n(435558),
    r = n(288106);
n.d(
    t,
    {},
    {
        x: function (e, t, n) {
            if (null != e)
                switch (t) {
                    case r.GM.IN_PROGRESS: {
                        let t = e.inProgress?.progressSteps;
                        if (null == t || 0 === t.length) return;
                        return t[(0, l.clamp)(n, 0, t.length - 1)];
                    }
                    case r.GM.EARNED:
                        return e.earned;
                    case r.GM.CONSUMED:
                        return e.consumed;
                    default:
                        return;
                }
        },
    },
);
