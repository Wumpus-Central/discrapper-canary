n.d(t, { C: () => I });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(40153),
    d = n(696292),
    c = n(397927),
    u = n(753845),
    h = n(849269),
    A = n(881343),
    m = n(697675),
    p = n(869003),
    g = n(652215),
    _ = n(985018),
    f = n(279240);
let x = ["embedded_cover"],
    C = { tension: 800, friction: 24 };
var E =
    (((i = E || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (i[(i.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    i);
function I(e) {
    let { context: t, activityItem: n, onClick: i, aspectRatio: a = 0, animatedDivClass: E, commandOrigin: I } = e,
        {
            onActivityItemSelected: b,
            imageBackground: N,
            activityAction: S,
            labelType: T,
        } = (0, h.Ay)({
            context: t,
            activityItem: n,
            guildId: t.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: i,
            embeddedActivitiesManager: p.A,
            assetNames: x,
            commandOrigin: I,
        }),
        [v, y] = s.useState(!1),
        j = s.useCallback(() => {
            y(!0);
        }, [y]),
        R = s.useCallback(() => {
            y(!1);
        }, [y]),
        O = s.useMemo(
            () =>
                (0, l.jsx)("div", {
                    className: f.Gz,
                    children: (0, l.jsx)("div", { className: f.fC, children: (0, l.jsx)(m.A, { labelType: T }) }),
                }),
            [T],
        ),
        L = s.useMemo(() => {
            switch (S) {
                case h.o6.JOIN:
                    return (0, l.jsx)("div", {
                        className: f.m9,
                        children: (0, l.jsx)("div", {
                            className: f.aF,
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: _.intl.string(_.t.VJlc0S),
                            }),
                        }),
                    });
                case h.o6.LEAVE:
                    return (0, l.jsx)("div", {
                        className: f.m9,
                        children: (0, l.jsx)("div", {
                            className: r()(f.aF, f.pS),
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
        }, [S]);
    return (0, l.jsx)(c.DUT, {
        onClick: b,
        onFocus: j,
        onBlur: R,
        onMouseEnter: j,
        onMouseLeave: R,
        className: f.XA,
        children: (0, l.jsx)(c.c7X, {
            config: C,
            from: { value: 0 },
            to: { value: +!!v },
            children: (e) => {
                let { value: t } = e;
                return (0, l.jsx)(c.NPJ, {
                    theme: g.NJ8.DARK,
                    children: (e) =>
                        (0, l.jsx)(u.A, {
                            applicationId: n.application.id,
                            questContent: d.u.ACTIVITY_SUGGESTION,
                            children: (i) =>
                                (0, l.jsxs)(o.animated.div, {
                                    ref: i,
                                    className: r()(e, f.LM, E, { [f.$g]: 0 === a, [f.J3]: 1 === a }),
                                    style: { transform: t.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, l.jsx)(A.A, {
                                            imageBackground: N,
                                            applicationName: n.application.name,
                                            imageClassName: f.jj,
                                            imageNotFoundClassName: f.v_,
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
I.AspectRatio = E;
