l.d(n, { default: () => p }), l(47120);
var t = l(200651),
    a = l(192379),
    i = l(97613),
    r = l.n(i),
    o = l(410575),
    s = l(881052),
    u = l(246364),
    c = l(296991),
    d = l(915509),
    x = l(981631),
    g = l(388032);
let p = function (e) {
    let { field: n, onSave: l, onClose: i, guild: p } = e,
        [m, _] = a.useState(
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
        [h, C] = a.useState(null),
        b = async () => {
            null != h && C(null);
            let e = m.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) {
                C(g.intl.string(g.t.TCHkcX));
                return;
            }
            let n = {
                field_type: u.QJ.TERMS,
                label: g.intl.string(g.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                await l(n), i();
            } catch (e) {
                C(new s.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, t.jsx)(o.Z, {
        page: x.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, t.jsx)(d.Z, {
            ...e,
            errorText: h,
            title: g.intl.string(g.t['3pz9t7']),
            onCancel: i,
            onConfirm: b,
            children: (0, t.jsx)(c.k, {
                guild: p,
                rules: m,
                setRules: _
            })
        })
    });
};
