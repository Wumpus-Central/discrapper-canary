r.d(t, { A: () => u }), r(228524);
var s = r(627968);
r(64700);
var l = r(854378),
    n = r(651539),
    i = r(768397),
    a = r(401755),
    d = r(125986);
let c = {
    [a.IZ.CLASSROOM]: r(749576),
    [a.IZ.LOCAL_COMMUNITIES]: r(409682),
    [a.IZ.CREATORS_HOBBIES]: r(785161),
    [a.IZ.GLOBAL_COMMUNITIES]: r(371376),
    [a.IZ.FRIENDS_FAMILY]: r(585589),
    [a.IZ.STUDY_GROUPS]: r(500697),
    [a.IZ.CREATE_FROM_SCRATCH]: r(881377),
    [a.IZ.CAMPUS_CLUBS]: r(573230),
    [a.IZ.LEAGUE_CLUBS]: r(629278),
    [a.IZ.GITHUB_HACKATHON]: r(263135),
};
function u(e) {
    let { headerId: t, guildTemplate: r } = e,
        u = r.code,
        o = c[u];
    if (null != o) {
        var C;
        let { header: e, description: c, author: m } = (0, n.A)(u);
        return (0, s.jsxs)("div", {
            children: [
                (0, s.jsx)("img", {
                    className: d.Sl,
                    src: o,
                    alt: "",
                }),
                (0, s.jsx)(l.hE, {
                    className: d.wx,
                    id: t,
                    children: e,
                }),
                (0, s.jsx)(l.tK, { children: c }),
                r.state === a.QB.RESOLVED
                    ? (0, s.jsx)(i.F, {
                          className: d.t5,
                          count: null != (C = r.usageCount) ? C : 0,
                          verifiedName: m,
                      })
                    : null,
            ],
        });
    }
    return (0, s.jsx)(i.A, {
        pillClassName: d.t5,
        guildTemplate: r,
        tall: !0,
    });
}
