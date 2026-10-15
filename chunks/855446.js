t.d(n, { C: () => N });
var i,
    l = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(308941),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    h = t(43990),
    m = t(932413),
    g = t(849269),
    x = t(881343),
    C = t(697675),
    f = t(652215),
    p = t(105292),
    E = t(441386);
let j = ["embedded_cover"],
    v = { tension: 800, friction: 24 };
var I =
    (((i = I || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (i[(i.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    i);
function N(e) {
    let { context: n, activityItem: t, onClick: i, aspectRatio: a = 0, animatedDivClass: I, commandOrigin: N } = e,
        {
            onActivityItemSelected: _,
            imageBackground: T,
            activityAction: b,
            labelType: S,
        } = (0, g.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: i,
            assetNames: j,
            commandOrigin: N,
        }),
        [y, O] = s.useState(!1),
        R = s.useCallback(() => {
            O(!0);
        }, [O]),
        L = s.useCallback(() => {
            O(!1);
        }, [O]),
        M = s.useMemo(
            () =>
                (0, l.jsx)("div", {
                    className: E.Gz,
                    children: (0, l.jsx)("div", { className: E.fC, children: (0, l.jsx)(C.A, { labelType: S }) }),
                }),
            [S],
        ),
        D = s.useMemo(() => {
            switch (b) {
                case g.o6.JOIN:
                    return (0, l.jsx)("div", {
                        className: E.m9,
                        children: (0, l.jsx)("div", {
                            className: E.aF,
                            children: (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: p.intl.string(p.t.VJlc0S),
                            }),
                        }),
                    });
                case g.o6.LEAVE:
                    return (0, l.jsx)("div", {
                        className: E.m9,
                        children: (0, l.jsx)("div", {
                            className: r()(E.aF, E.pS),
                            children: (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: p.intl.string(p.t["wH/wDO"]),
                            }),
                        }),
                    });
                case g.o6.START:
                default:
                    return null;
            }
        }, [b]);
    return (0, l.jsx)(d.D, {
        onClick: _,
        onFocus: R,
        onBlur: L,
        onMouseEnter: R,
        onMouseLeave: L,
        className: E.XA,
        children: (0, l.jsx)(A.c, {
            config: v,
            from: { value: 0 },
            to: { value: +!!y },
            children: (e) => {
                let { value: n } = e;
                return (0, l.jsx)(h.N, {
                    theme: f.NJ8.DARK,
                    children: (e) =>
                        (0, l.jsx)(m.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (i) =>
                                (0, l.jsxs)(o.animated.div, {
                                    ref: i,
                                    className: r()(e, E.LM, I, { [E.$g]: 0 === a, [E.J3]: 1 === a }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, l.jsx)(x.A, {
                                            imageBackground: T,
                                            applicationName: t.application.name,
                                            imageClassName: E.jj,
                                            imageNotFoundClassName: E.v_,
                                        }),
                                        M,
                                        D,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
N.AspectRatio = I;
