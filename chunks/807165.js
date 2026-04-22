n.d(t, { A: () => v, W: () => b });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(311907),
    o = n(36525),
    d = n(686956),
    c = n(964486),
    u = n(34457),
    m = n(498642),
    g = n(403362),
    h = n(997509),
    x = n(555337),
    _ = n(636042),
    p = n(396816),
    A = n(856644),
    E = n(206774),
    f = n(763582),
    j = n(966851),
    N = n(927573),
    I = n(652215);
function C(e) {
    h.A.selectRole(e);
}
let b = () => {
    let { guild: e } = (0, a.cf)([x.A], () => x.A.getProps()),
        t = (0, a.bG)([p.A], () => p.A.formState),
        n = (0, a.bG)([p.A], () => p.A.errorMessage);
    return (0, i.jsx)(o.A, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = p.A.editedRoleIds.map((e) => p.A.getRole(e)).filter(g.Vq),
                i = p.A.getSortDeltas(),
                l = null,
                s = null;
            p.A.hasRoleConfigurationChanges &&
                ((s = p.A.editedRoleIdsForConfigurations), (l = p.A.getEditedRoleConnectionConfigurationsMap())),
                (0, _.JY)(t, n, i, s, l);
        },
        submitting: t === I.XlH.SUBMITTING,
        onReset: _.Ts,
    });
};
function v(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: s } = (0, a.cf)([p.A], () => ({ guild: p.A.guild, roles: p.A.roles }), []);
    r()(null != n, "Guild cannot be null here");
    let o = l.useMemo(() => s.find((e) => (0, u.Oy)(e)), [s]);
    r()(null != o, "Guild must have an everyone role");
    let g = l.useMemo(() => s.filter((e) => !(0, u.Oy)(e)), [s]),
        h = (0, a.bG)([x.A], () => x.A.getSelectedRoleId()),
        [_, I] = l.useState(g.length > 0);
    l.useEffect(() => {
        I(_ || g.length > 0);
    }, [_, g.length]),
        (0, c.Ay)(() => {
            let e = m.A.getMemberCount(n.id);
            null != e && e <= A.gz && d.A.requestMembers(n.id, "", 0, !1);
        });
    let [b, v] = l.useState(N.T$.DISPLAY);
    return (l.useEffect(() => {
        null == h && v(N.T$.DISPLAY);
    }, [h]),
    null != h)
        ? (0, i.jsx)(E.A, { editRoleId: h, setEditRoleId: C, selectedSection: b, setSelectedSection: v })
        : _
          ? (0, i.jsx)(j.A, {
                setEditRoleId: C,
                guild: n,
                everyoneRole: o,
                otherRoles: g,
                setSelectedSection: v,
                refToScroller: t,
            })
          : (0, i.jsx)(f.A, { guild: n, everyoneRole: o, setEditRoleId: C });
}
