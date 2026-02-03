n.d(t, {
    C: () => x,
}),
    n(896048);
var r,
    l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(92674),
    c = n(696292),
    u = n(397927),
    d = n(753845),
    p = n(849269),
    h = n(881343),
    g = n(697675),
    f = n(869003),
    m = n(652215),
    b = n(985018),
    A = n(279240);
let y = ["embedded_cover"],
    O = {
        tension: 800,
        friction: 24,
    };
var j =
    (((r = j || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (r[(r.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    r);

function x(e) {
    var t;
    let { context: n, activityItem: r, onClick: s, aspectRatio: j = 0, animatedDivClass: x, commandOrigin: _ } = e,
        {
            onActivityItemSelected: v,
            imageBackground: E,
            activityAction: C,
            labelType: S,
        } = (0, p.Ay)({
            context: n,
            activityItem: r,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: s,
            embeddedActivitiesManager: f.A,
            assetNames: y,
            commandOrigin: _,
        }),
        [I, N] = i.useState(!1),
        T = i.useCallback(() => {
            N(!0);
        }, [N]),
        P = i.useCallback(() => {
            N(!1);
        }, [N]),
        w = i.useMemo(
            () =>
                (0, l.jsx)("div", {
                    className: A.Gz,
                    children: (0, l.jsx)("div", {
                        className: A.fC,
                        children: (0, l.jsx)(g.A, {
                            labelType: S,
                        }),
                    }),
                }),
            [S],
        ),
        R = i.useMemo(() => {
            switch (C) {
                case p.o6.JOIN:
                    return (0, l.jsx)("div", {
                        className: A.m9,
                        children: (0, l.jsx)("div", {
                            className: A.aF,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: b.intl.string(b.t.VJlc0S),
                            }),
                        }),
                    });
                case p.o6.LEAVE:
                    return (0, l.jsx)("div", {
                        className: A.m9,
                        children: (0, l.jsx)("div", {
                            className: a()(A.aF, A.pS),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: b.intl.string(b.t["wH/wDO"]),
                            }),
                        }),
                    });
                case p.o6.START:
                default:
                    return null;
            }
        }, [C]);
    return (0, l.jsx)(u.DUT, {
        onClick: v,
        onFocus: T,
        onBlur: P,
        onMouseEnter: T,
        onMouseLeave: P,
        className: A.XA,
        children: (0, l.jsx)(u.c7X, {
            config: O,
            from: {
                value: 0,
            },
            to: {
                value: +!!I,
            },
            children: (e) => {
                let { value: t } = e;
                return (0, l.jsx)(u.NPJ, {
                    theme: m.NJ8.DARK,
                    children: (e) =>
                        (0, l.jsx)(d.A, {
                            applicationId: r.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (n) =>
                                (0, l.jsxs)(o.animated.div, {
                                    ref: n,
                                    className: a()(e, A.LM, x, {
                                        [A.$g]: 0 === j,
                                        [A.J3]: 1 === j,
                                    }),
                                    style: {
                                        transform: t.to([0, 1], [1, 1.05]).to((e) => "scale(".concat(e, ")")),
                                    },
                                    children: [
                                        (0, l.jsx)(h.A, {
                                            imageBackground: E,
                                            applicationName: r.application.name,
                                            imageClassName: A.jj,
                                            imageNotFoundClassName: A.v_,
                                        }),
                                        w,
                                        R,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
x.AspectRatio = j;
