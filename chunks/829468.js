n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(442837),
    a = n(809206),
    o = n(594174),
    s = n(580130),
    l = n(515970),
    c = n(5888),
    u = n(639949),
    d = n(391876),
    f = n(638398),
    p = n(388032);
function _(e) {
    var t, n;
    let { className: _, textSize: m = 18 } = e,
        h = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        { avatarDecoration: g } = (0, i.e7)([c.Z], () => c.Z.getCheckpointData()),
        E = (0, i.Wu)([s.Z], () => {
            if ((null == g ? void 0 : g.skuId) == null) return [];
            let e = s.Z.getForSku(null == g ? void 0 : g.skuId);
            return null != e ? [...e] : [];
        }),
        b = null != (n = null == h || null == (t = h.avatarDecoration) ? void 0 : t.skuId) ? n : null,
        y = null != b && b === (null == g ? void 0 : g.skuId),
        O = null != E[0],
        v = () => {
            O || (0, l._Z)();
        },
        S = async () => {
            O && !y && (await (0, a.Mn)({ avatarDecoration: g }));
        };
    return (0, r.jsx)(u.Z, {
        disabled: y,
        onClick: O ? (y ? void 0 : S) : v,
        className: _,
        children: (0, r.jsx)(d.Z, {
            variant: "eyebrow",
            style: { fontSize: m },
            children: O
                ? y
                    ? p.intl.string(p.t["h+WsPb"])
                    : p.intl.string(p.t.MAS7uK)
                : p.intl.string(f.default.mDxM7m),
        }),
    });
}
