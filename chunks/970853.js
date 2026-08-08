a.d(e, { A: () => _ });
var d = a(582128),
    i = a(5180),
    r = a(17839),
    s = a(652215),
    u = a(449817),
    l = a(375708);
function _(t) {
    let e = d.useCallback(() => {
        (0, r.A)({ parentId: t.id, source: "favorites_add_to_category" });
    }, [t.id]);
    return __OVERLAY__ || !(0, i.ai)(t.getGuildId()) || t.type !== s.rbe.GUILD_CATEGORY
        ? null
        : { label: l.intl.string(u.default["1QJmIL"]), perform: e };
}
