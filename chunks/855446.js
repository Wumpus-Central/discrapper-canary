t.d(n, { C: () => N });
var i,
    l = t(477900),
    a = t(582128),
    s = t(503698),
    o = t.n(s),
    r = t(202091),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    m = t(43990),
    h = t(932413),
    C = t(849269),
    p = t(881343),
    x = t(697675),
    g = t(869003),
    f = t(652215),
    E = t(375708),
    I = t(441386);
let v = ["embedded_cover"],
    T = { tension: 800, friction: 24 };
var j =
    (((i = j || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (i[(i.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    i);
function N(e) {
    let { context: n, activityItem: t, onClick: i, aspectRatio: s = 0, animatedDivClass: j, commandOrigin: N } = e,
        {
            onActivityItemSelected: _,
            imageBackground: O,
            activityAction: b,
            labelType: y,
        } = (0, C.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: i,
            embeddedActivitiesManager: g.A,
            assetNames: v,
            commandOrigin: N,
        }),
        [S, R] = a.useState(!1),
        D = a.useCallback(() => {
            R(!0);
        }, [R]),
        L = a.useCallback(() => {
            R(!1);
        }, [R]),
        M = a.useMemo(
            () =>
                (0, l.jsx)("div", {
                    className: I.Gz,
                    children: (0, l.jsx)("div", { className: I.fC, children: (0, l.jsx)(x.A, { labelType: y }) }),
                }),
            [y],
        ),
        P = a.useMemo(() => {
            switch (b) {
                case C.o6.JOIN:
                    return (0, l.jsx)("div", {
                        className: I.m9,
                        children: (0, l.jsx)("div", {
                            className: I.aF,
                            children: (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: E.intl.string(E.t.VJlc0S),
                            }),
                        }),
                    });
                case C.o6.LEAVE:
                    return (0, l.jsx)("div", {
                        className: I.m9,
                        children: (0, l.jsx)("div", {
                            className: o()(I.aF, I.pS),
                            children: (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: E.intl.string(E.t["wH/wDO"]),
                            }),
                        }),
                    });
                case C.o6.START:
                default:
                    return null;
            }
        }, [b]);
    return (0, l.jsx)(d.D, {
        onClick: _,
        onFocus: D,
        onBlur: L,
        onMouseEnter: D,
        onMouseLeave: L,
        className: I.XA,
        children: (0, l.jsx)(A.c, {
            config: T,
            from: { value: 0 },
            to: { value: +!!S },
            children: (e) => {
                let { value: n } = e;
                return (0, l.jsx)(m.N, {
                    theme: f.NJ8.DARK,
                    children: (e) =>
                        (0, l.jsx)(h.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (i) =>
                                (0, l.jsxs)(r.animated.div, {
                                    ref: i,
                                    className: o()(e, I.LM, j, { [I.$g]: 0 === s, [I.J3]: 1 === s }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, l.jsx)(p.A, {
                                            imageBackground: O,
                                            applicationName: t.application.name,
                                            imageClassName: I.jj,
                                            imageNotFoundClassName: I.v_,
                                        }),
                                        M,
                                        P,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
N.AspectRatio = j;
