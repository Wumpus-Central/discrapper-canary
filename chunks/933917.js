n.d(t, { D: () => S });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    c = n(397927),
    o = n(565645),
    d = n(964486),
    u = n(775602),
    m = n(21161),
    h = n(796774),
    f = n(209932),
    g = n(967198),
    x = n(954571),
    b = n(964901),
    p = n(652215),
    j = n(851110),
    v = n(980504),
    y = n(641131),
    A = n(985018),
    C = n(529349);
function O(e) {
    let { className: t, sound: n, playSound: a, isPlaying: s, text: d } = e,
        u = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        m = A.intl.formatToPlainString(A.t.tuMUJ2, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name,
        }),
        h = r.useCallback(() => {
            x.default.track(p.HAw.MODERATOR_QUEUE_ACTION, {
                guild_id: g.A.getGuildId(),
                action: "airhorn",
            }),
                null != a && a();
        }, [a]);
    return (0, l.jsxs)(c.DUT, {
        "aria-label": m,
        tag: "span",
        onClick: h,
        className: i()(C.Ls, C.oR, { [C.he]: !0 === s }, t),
        children: [
            u &&
                (0, l.jsx)(o.A, {
                    emojiId: null == n ? void 0 : n.emojiId,
                    emojiName: null == n ? void 0 : n.emojiName,
                    className: C.JS,
                }),
            (0, l.jsx)("span", { children: " ".concat(d, " ") }),
        ],
    });
}
function N(e) {
    let { containerRef: t, text: n } = e,
        a = r.useRef(null),
        i = (0, s.bG)([f.A], () => {
            var e;
            return null == (e = f.A.getSoundsForGuild(v.mV)) ? void 0 : e.find((e) => "airhorn" === e.name);
        }),
        { createMultipleConfettiAt: c } = r.useContext(m.x),
        o = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        { isPlaying: g, playSound: x } = (0, b.E)(i);
    (0, d.Ay)(() => {
        (0, h.E7)();
    });
    let p = r.useCallback(async () => {
        if (await x()) {
            var e;
            if ((null == (e = a.current) || e.addAnimation(), !o && (null == t ? void 0 : t.current) != null)) {
                let e = t.current.getBoundingClientRect(),
                    n = {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 3,
                    },
                    l = j.uI[Math.floor(Math.random() * j.uI.length)];
                c(
                    n.x,
                    n.y,
                    {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -500,
                                y: -500,
                            },
                            maxValue: {
                                x: 500,
                                y: -100,
                            },
                        },
                    },
                    40,
                    { sprite: l },
                );
            }
        }
    }, [x, c, o, t]);
    return void 0 === i
        ? null
        : (0, l.jsx)(O, {
              sound: i,
              playSound: p,
              isPlaying: g,
              text: n,
          });
}
function S() {
    let e = r.useRef(null);
    return (0, l.jsxs)(c.BJc, {
        className: C.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: {
            top: 24,
            bottom: 24,
        },
        ref: e,
        children: [
            (0, l.jsx)(c._vT, {
                size: "custom",
                width: 48,
                height: 48,
            }),
            (0, l.jsxs)(c.BJc, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(c.Heading, {
                        className: C.wx,
                        variant: "heading-md/medium",
                        children: A.intl.string(y.default.h6QNky),
                    }),
                    (0, l.jsx)(c.Text, {
                        className: C.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: A.intl.format(y.default["8N4c58"], {
                            airhornHook: (t) =>
                                (0, l.jsx)(N, {
                                    containerRef: e,
                                    text: t,
                                }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
