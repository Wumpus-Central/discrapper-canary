n.d(t, {
    A: () => _,
    W: () => N,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    c = n(36525),
    o = n(686956),
    d = n(964486),
    u = n(34457),
    f = n(498642),
    g = n(403362),
    b = n(997509),
    m = n(555337),
    p = n(636042),
    x = n(396816),
    h = n(856644),
    j = n(206774),
    O = n(763582),
    y = n(966851),
    v = n(927573),
    A = n(652215);

function E(e) {
    b.A.selectRole(e);
}
let N = () => {
    let { guild: e } = (0, a.cf)([m.A], () => m.A.getProps()),
        t = (0, a.bG)([x.A], () => x.A.formState),
        n = (0, a.bG)([x.A], () => x.A.errorMessage);
    return (0, r.jsx)(c.A, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = x.A.editedRoleIds.map((e) => x.A.getRole(e)).filter(g.Vq),
                r = x.A.getSortDeltas(),
                i = null,
                l = null;
            x.A.hasRoleConfigurationChanges &&
                ((l = x.A.editedRoleIdsForConfigurations), (i = x.A.getEditedRoleConnectionConfigurationsMap())),
                (0, p.JY)(t, n, r, l, i);
        },
        submitting: t === A.XlH.SUBMITTING,
        onReset: p.Ts,
    });
};

function _(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cf)(
            [x.A],
            () => ({
                guild: x.A.guild,
                roles: x.A.roles,
            }),
            [],
        );
    s()(null != n, "Guild cannot be null here");
    let c = i.useMemo(() => l.find((e) => (0, u.Oy)(e)), [l]);
    s()(null != c, "Guild must have an everyone role");
    let g = i.useMemo(() => l.filter((e) => !(0, u.Oy)(e)), [l]),
        b = (0, a.bG)([m.A], () => m.A.getSelectedRoleId()),
        [p, A] = i.useState(g.length > 0);
    i.useEffect(() => {
        A(p || g.length > 0);
    }, [p, g.length]),
        (0, d.Ay)(() => {
            let e = f.A.getMemberCount(n.id);
            null != e && e <= h.gz && o.A.requestMembers(n.id, "", 0, !1);
        });
    let [N, _] = i.useState(v.T$.DISPLAY);
    return (i.useEffect(() => {
        null == b && _(v.T$.DISPLAY);
    }, [b]),
    null != b)
        ? (0, r.jsx)(j.A, {
              editRoleId: b,
              setEditRoleId: E,
              selectedSection: N,
              setSelectedSection: _,
          })
        : p
          ? (0, r.jsx)(y.A, {
                setEditRoleId: E,
                guild: n,
                everyoneRole: c,
                otherRoles: g,
                setSelectedSection: _,
                refToScroller: t,
            })
          : (0, r.jsx)(O.A, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: E,
            });
}
