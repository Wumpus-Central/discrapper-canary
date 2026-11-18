var r = n(435558),
    l = n(288106);
n.d(
    e,
    {},
    {
        x: function (t, e, n) {
            if (null != t)
                switch (e) {
                    case l.GM.IN_PROGRESS: {
                        let e = t.inProgress?.progressSteps;
                        if (null == e || 0 === e.length) return;
                        return e[(0, r.clamp)(n, 0, e.length - 1)];
                    }
                    case l.GM.EARNED:
                        return t.earned;
                    case l.GM.CONSUMED:
                        return t.consumed;
                    default:
                        return;
                }
        },
    },
);
