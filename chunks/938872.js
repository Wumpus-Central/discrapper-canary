n.d(t, { default: () => m });
var i = n(477900),
    r = n(582128),
    l = n(189213),
    s = n(834730),
    o = n(103557),
    a = n(976860),
    u = n(948230),
    d = n(936494),
    c = n(683180),
    f = n(277977),
    h = n(652215),
    p = n(746080),
    g = n(50617),
    w = n(375708);
function m(e) {
    let { transitionState: t, onClose: n } = e,
        [m, _] = r.useState(""),
        [v, b] = r.useState(null),
        [A, I] = r.useState(!1),
        T = r.useMemo(() => (0, c.$X)("VibegrationsCustomWidgetModal"), []),
        y = r.useCallback(() => {
            n().catch(() => void 0);
        }, [n]),
        S = r.useCallback((e) => {
            (_(e), b(null));
        }, []),
        E = r.useCallback(async () => {
            let e = m.trim();
            if ("" === e) return void b(w.intl.string(g.default.Wo5sQv));
            if (null == T || A) return;
            (I(!0), b(null));
            let t = null;
            try {
                ((t = await (0, u.gA)({ guild_id: T, install_scope: "user" })),
                    (0, f.Hc)(t),
                    (0, f.dv)(
                        t,
                        [
                            "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
                            e,
                        ].join("\n"),
                    ),
                    (0, a.pX)(h.BVt.CHANNEL(T, p.VV.VIBEGRATIONS, t)),
                    y());
            } catch (e) {
                if (null != t) {
                    ((0, a.pX)(h.BVt.CHANNEL(T, p.VV.VIBEGRATIONS, t)), y());
                    return;
                }
                b((0, d.Xd)(e));
            } finally {
                I(!1);
            }
        }, [m, T, A, y]),
        M = r.useCallback(() => {
            E().catch(() => void 0);
        }, [E]);
    return null == T
        ? (0, i.jsx)(l.Modal, {
              transitionState: t,
              onClose: n,
              title: w.intl.string(g.default["33l33s"]),
              actions: [{ text: w.intl.string(w.t.cpT0Cq), variant: "secondary", onClick: y }],
              children: (0, i.jsx)(s.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: w.intl.string(g.default["8DyNx1"]),
              }),
          })
        : (0, i.jsx)(l.Modal, {
              transitionState: t,
              onClose: n,
              title: w.intl.string(g.default["27bu14"]),
              actions: [
                  { text: w.intl.string(w.t["ETE/oC"]), variant: "secondary", onClick: y, disabled: A },
                  {
                      text: w.intl.string(g.default["f/Jz/R"]),
                      variant: "primary",
                      onClick: M,
                      loading: A,
                      disabled: "" === m.trim(),
                  },
              ],
              children: (0, i.jsx)(o.f, {
                  label: w.intl.string(g.default.DAm99t),
                  description: w.intl.string(g.default.blSmfQ),
                  placeholder: w.intl.string(g.default.FYN9Rl),
                  value: m,
                  onChange: S,
                  maxLength: 2e3,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: v,
                  disabled: A,
              }),
          });
}
