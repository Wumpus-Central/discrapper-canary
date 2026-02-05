n.d(t, { C: () => I });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(563495),
    d = n(696292),
    c = n(397927),
    u = n(753845),
    h = n(849269),
    A = n(881343),
    g = n(697675),
    m = n(869003),
    p = n(652215),
    _ = n(985018),
    x = n(279240);
let f = ["embedded_cover"],
    E = { tension: 800, friction: 24 };
var C =
    (((i = C || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (i[(i.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    i);
function I(e) {
    let { context: t, activityItem: n, onClick: i, aspectRatio: a = 0, animatedDivClass: C, commandOrigin: I } = e,
        {
            onActivityItemSelected: S,
            imageBackground: b,
            activityAction: N,
            labelType: T,
        } = (0, h.Ay)({
            context: t,
            activityItem: n,
            guildId: t.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: i,
            embeddedActivitiesManager: m.A,
            assetNames: f,
            commandOrigin: I,
        }),
        [j, v] = s.useState(!1),
        y = s.useCallback(() => {
            v(!0);
        }, [v]),
        R = s.useCallback(() => {
            v(!1);
        }, [v]),
        O = s.useMemo(
            () =>
                (0, l.jsx)("div", {
                    className: x.Gz,
                    children: (0, l.jsx)("div", { className: x.fC, children: (0, l.jsx)(g.A, { labelType: T }) }),
                }),
            [T],
        ),
        L = s.useMemo(() => {
            switch (N) {
                case h.o6.JOIN:
                    return (0, l.jsx)("div", {
                        className: x.m9,
                        children: (0, l.jsx)("div", {
                            className: x.aF,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: _.intl.string(_.t.VJlc0S),
                            }),
                        }),
                    });
                case h.o6.LEAVE:
                    return (0, l.jsx)("div", {
                        className: x.m9,
                        children: (0, l.jsx)("div", {
                            className: r()(x.aF, x.pS),
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: _.intl.string(_.t["wH/wDO"]),
                            }),
                        }),
                    });
                case h.o6.START:
                default:
                    return null;
            }
        }, [N]);
    return (0, l.jsx)(c.DUT, {
        onClick: S,
        onFocus: y,
        onBlur: R,
        onMouseEnter: y,
        onMouseLeave: R,
        className: x.XA,
        children: (0, l.jsx)(c.c7X, {
            config: E,
            from: { value: 0 },
            to: { value: +!!j },
            children: (e) => {
                let { value: t } = e;
                return (0, l.jsx)(c.NPJ, {
                    theme: p.NJ8.DARK,
                    children: (e) =>
                        (0, l.jsx)(u.A, {
                            applicationId: n.application.id,
                            questContent: d.u.ACTIVITY_SUGGESTION,
                            children: (i) =>
                                (0, l.jsxs)(o.animated.div, {
                                    ref: i,
                                    className: r()(e, x.LM, C, { [x.$g]: 0 === a, [x.J3]: 1 === a }),
                                    style: { transform: t.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, l.jsx)(A.A, {
                                            imageBackground: b,
                                            applicationName: n.application.name,
                                            imageClassName: x.jj,
                                            imageNotFoundClassName: x.v_,
                                        }),
                                        O,
                                        L,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
I.AspectRatio = C;
