n.d(t, { Z: () => f }), n(388685);
var r = n(647438),
    i = n(399606),
    a = n(313789),
    o = n(947889),
    s = n(663389),
    l = n(981631),
    c = n(526761);
let u = new Set(Object.values(c.NB)),
    d = (e) => null != e && u.has(e),
    f = () => {
        let e = (0, i.e7)([s.Z], () => {
                let e = s.Z.getSubsection();
                return d(e) ? e : c.NB.USER_PROFILE;
            }),
            t = (0, o.Z)(),
            n = r.useCallback(
                (n) => {
                    e !== n &&
                        t(a.n.PROFILE_PANEL, {
                            section: l.oAB.PROFILE_CUSTOMIZATION,
                            subsection: n,
                        });
                },
                [e, t],
            );
        return {
            subsection: e,
            setSubsection: n,
        };
    };
