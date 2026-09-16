t.d(n, { C: () => N });
var l,
    i = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(128954),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    m = t(43990),
    h = t(932413),
    C = t(849269),
    p = t(881343),
    g = t(697675),
    E = t(869003),
    f = t(652215),
    x = t(375708),
    v = t(441386);
let I = ["embedded_cover"],
    T = { tension: 800, friction: 24 };
var j =
    (((l = j || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function N(e) {
    let { context: n, activityItem: t, onClick: l, aspectRatio: a = 0, animatedDivClass: j, commandOrigin: N } = e,
        {
            onActivityItemSelected: _,
            imageBackground: b,
            activityAction: O,
            labelType: S,
        } = (0, C.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: E.A,
            assetNames: I,
            commandOrigin: N,
        }),
        [y, R] = s.useState(!1),
        M = s.useCallback(() => {
            R(!0);
        }, [R]),
        L = s.useCallback(() => {
            R(!1);
        }, [R]),
        D = s.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: v.Gz,
                    children: (0, i.jsx)("div", { className: v.fC, children: (0, i.jsx)(g.A, { labelType: S }) }),
                }),
            [S],
        ),
        P = s.useMemo(() => {
            switch (O) {
                case C.o6.JOIN:
                    return (0, i.jsx)("div", {
                        className: v.m9,
                        children: (0, i.jsx)("div", {
                            className: v.aF,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: x.intl.string(x.t.VJlc0S),
                            }),
                        }),
                    });
                case C.o6.LEAVE:
                    return (0, i.jsx)("div", {
                        className: v.m9,
                        children: (0, i.jsx)("div", {
                            className: r()(v.aF, v.pS),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: x.intl.string(x.t["wH/wDO"]),
                            }),
                        }),
                    });
                case C.o6.START:
                default:
                    return null;
            }
        }, [O]);
    return (0, i.jsx)(d.D, {
        onClick: _,
        onFocus: M,
        onBlur: L,
        onMouseEnter: M,
        onMouseLeave: L,
        className: v.XA,
        children: (0, i.jsx)(A.c, {
            config: T,
            from: { value: 0 },
            to: { value: +!!y },
            children: (e) => {
                let { value: n } = e;
                return (0, i.jsx)(m.N, {
                    theme: f.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(h.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(o.animated.div, {
                                    ref: l,
                                    className: r()(e, v.LM, j, { [v.$g]: 0 === a, [v.J3]: 1 === a }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            imageBackground: b,
                                            applicationName: t.application.name,
                                            imageClassName: v.jj,
                                            imageNotFoundClassName: v.v_,
                                        }),
                                        D,
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
