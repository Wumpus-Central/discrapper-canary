s.d(t, { A: () => c });
var r = s(627968);
s(64700);
var n = s(854378),
    i = s(651539),
    l = s(799365),
    a = s(401755),
    d = s(521099);
let u = {
    [a.IZ.CLASSROOM]: s(749576),
    [a.IZ.LOCAL_COMMUNITIES]: s(409682),
    [a.IZ.CREATORS_HOBBIES]: s(785161),
    [a.IZ.GLOBAL_COMMUNITIES]: s(371376),
    [a.IZ.FRIENDS_FAMILY]: s(585589),
    [a.IZ.STUDY_GROUPS]: s(500697),
    [a.IZ.CREATE_FROM_SCRATCH]: s(881377),
    [a.IZ.CAMPUS_CLUBS]: s(573230),
    [a.IZ.LEAGUE_CLUBS]: s(629278),
    [a.IZ.GITHUB_HACKATHON]: s(263135),
};
function c(e) {
    let { headerId: t, guildTemplate: s } = e,
        c = s.code,
        o = u[c];
    if (null != o) {
        let { header: e, description: u, author: m } = (0, i.A)(c);
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("img", { className: d.Sl, src: o, alt: "" }),
                (0, r.jsx)(n.hE, { className: d.wx, id: t, children: e }),
                (0, r.jsx)(n.tK, { children: u }),
                s.state === a.QB.RESOLVED
                    ? (0, r.jsx)(l.F, { className: d.t5, count: s.usageCount ?? 0, verifiedName: m })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(l.A, { pillClassName: d.t5, guildTemplate: s, tall: !0 });
}
