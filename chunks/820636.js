n.d(t, { y: () => _ });
var r = n(627968),
    s = n(64700),
    a = n(534514),
    l = n(939249),
    i = n(789645),
    u = n(187322),
    o = n(573613),
    c = n(289873),
    d = n(829219),
    E = n(405670),
    m = n(579473),
    f = n(834926);
function _(e) {
    let { quest: t, onClose: n } = e,
        _ = (0, E.Kr)((e) => e.transcript);
    s.useEffect(() => {
        let e = (0, m.tW)(t, m.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == _ ||
            _.questId !== t.id ||
            _.fetchStatus === E.Lx.NONE ||
            (_.fetchStatus === E.Lx.SUCCESS && e?.url !== _.url)) &&
            (0, d.qY)(t);
    }, [_, t]);
    let S = _?.questId === t.id && _?.fetchStatus === E.Lx.SUCCESS ? (_.text ?? "") : "",
        p = s.useMemo(
            () =>
                S.split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [S],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: f.Mm,
                children: [
                    (0, r.jsx)(a.D, { variant: "heading-md/semibold", color: "currentColor", children: "Transcript" }),
                    (0, r.jsx)(l.D, {
                        onClick: n,
                        className: f.GI,
                        children: (0, r.jsx)(i.P, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(u.vN, {
                children: (0, r.jsx)(o.Ar, {
                    className: f.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: f.FN,
                        children:
                            _?.fetchStatus === E.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: f.Cw,
                                      children: (0, r.jsx)(c.y, { type: c.y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(a.D, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: p.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
