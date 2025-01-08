t.r(n), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(97613),
    r = t.n(i),
    o = t(410575),
    s = t(881052),
    u = t(246364),
    d = t(296991),
    c = t(915509),
    f = t(981631),
    g = t(388032);
n.default = function (e) {
    let { field: n, onSave: t, onClose: i, guild: p } = e,
        [x, m] = a.useState(
            (null == n ? void 0 : n.values) != null
                ? null == n
                    ? void 0
                    : n.values.map((e) => ({
                          id: r()(),
                          value: e
                      }))
                : [
                      {
                          id: r()(),
                          value: ''
                      }
                  ]
        ),
        [C, h] = a.useState(null),
        b = async () => {
            null != C && h(null);
            let e = x.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) {
                h(g.intl.string(g.t.TCHkcX));
                return;
            }
            let n = {
                field_type: u.QJ.TERMS,
                label: g.intl.string(g.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                await t(n), i();
            } catch (e) {
                h(new s.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, l.jsx)(o.Z, {
        page: f.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, l.jsx)(c.Z, {
            ...e,
            errorText: C,
            title: g.intl.string(g.t['3pz9t7']),
            onCancel: i,
            onConfirm: b,
            children: (0, l.jsx)(d.k, {
                guild: p,
                rules: x,
                setRules: m
            })
        })
    });
};
