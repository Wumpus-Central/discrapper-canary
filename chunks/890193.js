n.d(t, { E: () => u }), n(35282), n(781311);
var r = n(54381),
    o = n(473749),
    l = n(481060),
    i = n(22095),
    a = n(184299),
    s = n(475595),
    c = n(209668);
function u(e) {
    var t;
    let { quest: n, onClose: u } = e,
        d = (0, a.km)((e) => e.transcript);
    o.useEffect(() => {
        let e = (0, s.fh)(n, s.eC.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == d ||
            d.questId !== n.id ||
            d.fetchStatus === a.iF.NONE ||
            (d.fetchStatus === a.iF.SUCCESS && (null == e ? void 0 : e.url) !== d.url)) &&
            (0, i.lL)(n);
    }, [d, n]);
    let m =
            (null == d ? void 0 : d.questId) === n.id &&
            (null == d ? void 0 : d.fetchStatus) === a.iF.SUCCESS &&
            null != (t = d.text)
                ? t
                : "",
        f = o.useMemo(
            () =>
                m
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [m],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: c.transcriptHeader,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(l.P3F, {
                        onClick: u,
                        className: c.transcriptBackBtn,
                        children: (0, r.jsx)(l.Dio, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(l.tEY, {
                children: (0, r.jsx)(l.w0Z, {
                    className: c.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: c.transcriptBody,
                        children:
                            (null == d ? void 0 : d.fetchStatus) === a.iF.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: c.transcriptBodySpinner,
                                      children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(l.Heading, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: f.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
