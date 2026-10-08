t.d(n, { C: () => T });
var l,
    i = t(477900),
    a = t(582128),
    s = t(503698),
    o = t.n(s),
    r = t(202091),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    h = t(43990),
    m = t(932413),
    C = t(849269),
    p = t(881343),
    x = t(697675),
    g = t(652215),
    f = t(660183),
    E = t(441386);
let I = ["embedded_cover"],
    v = { tension: 800, friction: 24 };
var j =
    (((l = j || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function T(e) {
    let { context: n, activityItem: t, onClick: l, aspectRatio: s = 0, animatedDivClass: j, commandOrigin: T } = e,
        {
            onActivityItemSelected: N,
            imageBackground: _,
            activityAction: O,
            labelType: b,
        } = (0, C.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            assetNames: I,
            commandOrigin: T,
        }),
        [y, S] = a.useState(!1),
        R = a.useCallback(() => {
            S(!0);
        }, [S]),
        D = a.useCallback(() => {
            S(!1);
        }, [S]),
        L = a.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: E.Gz,
                    children: (0, i.jsx)("div", { className: E.fC, children: (0, i.jsx)(x.A, { labelType: b }) }),
                }),
            [b],
        ),
        M = a.useMemo(() => {
            switch (O) {
                case C.o6.JOIN:
                    return (0, i.jsx)("div", {
                        className: E.m9,
                        children: (0, i.jsx)("div", {
                            className: E.aF,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: f.intl.string(f.t.VJlc0S),
                            }),
                        }),
                    });
                case C.o6.LEAVE:
                    return (0, i.jsx)("div", {
                        className: E.m9,
                        children: (0, i.jsx)("div", {
                            className: o()(E.aF, E.pS),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: f.intl.string(f.t["wH/wDO"]),
                            }),
                        }),
                    });
                case C.o6.START:
                default:
                    return null;
            }
        }, [O]);
    return (0, i.jsx)(d.D, {
        onClick: N,
        onFocus: R,
        onBlur: D,
        onMouseEnter: R,
        onMouseLeave: D,
        className: E.XA,
        children: (0, i.jsx)(A.c, {
            config: v,
            from: { value: 0 },
            to: { value: +!!y },
            children: (e) => {
                let { value: n } = e;
                return (0, i.jsx)(h.N, {
                    theme: g.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(m.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(r.animated.div, {
                                    ref: l,
                                    className: o()(e, E.LM, j, { [E.$g]: 0 === s, [E.J3]: 1 === s }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            imageBackground: _,
                                            applicationName: t.application.name,
                                            imageClassName: E.jj,
                                            imageNotFoundClassName: E.v_,
                                        }),
                                        L,
                                        M,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
T.AspectRatio = j;
