s.d(t, { A: () => u });
var r = s(477900);
s(582128);
var n = s(854378),
    i = s(651539),
    a = s(799365),
    l = s(401755),
    d = s(894192);
let c = {
    [l.IZ.CLASSROOM]: s(749576),
    [l.IZ.LOCAL_COMMUNITIES]: s(409682),
    [l.IZ.CREATORS_HOBBIES]: s(785161),
    [l.IZ.GLOBAL_COMMUNITIES]: s(371376),
    [l.IZ.FRIENDS_FAMILY]: s(585589),
    [l.IZ.STUDY_GROUPS]: s(500697),
    [l.IZ.CREATE_FROM_SCRATCH]: s(881377),
    [l.IZ.CAMPUS_CLUBS]: s(573230),
    [l.IZ.LEAGUE_CLUBS]: s(629278),
    [l.IZ.GITHUB_HACKATHON]: s(263135),
};
function u(e) {
    let { headerId: t, guildTemplate: s } = e,
        u = s.code,
        o = c[u];
    if (null != o) {
        let { header: e, description: c, author: m } = (0, i.A)(u);
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("img", { className: d.Sl, src: o, alt: "" }),
                (0, r.jsx)(n.hE, { className: d.wx, id: t, children: e }),
                (0, r.jsx)(n.tK, { children: c }),
                s.state === l.QB.RESOLVED
                    ? (0, r.jsx)(a.F, { className: d.t5, count: s.usageCount ?? 0, verifiedName: m })
                    : null,
            ],
        });
    }
    return (0, r.jsx)(a.A, { pillClassName: d.t5, guildTemplate: s, tall: !0 });
}
