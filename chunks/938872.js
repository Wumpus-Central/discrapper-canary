n.d(t, { default: () => w });
var i = n(477900),
    r = n(582128),
    l = n(189213),
    s = n(834730),
    o = n(103557),
    a = n(976860),
    u = n(948230),
    d = n(683180),
    c = n(18739),
    f = n(652215),
    h = n(746080),
    p = n(759967),
    g = n(375708);
function w(e) {
    let { transitionState: t, onClose: n } = e,
        [w, m] = r.useState(""),
        [_, v] = r.useState(null),
        [b, A] = r.useState(!1),
        I = r.useMemo(() => (0, d.$X)("VibegrationsCustomWidgetModal"), []),
        T = r.useCallback(() => {
            n().catch(() => void 0);
        }, [n]),
        y = r.useCallback((e) => {
            m(e), v(null);
        }, []),
        S = r.useCallback(async () => {
            let e = w.trim();
            if ("" === e) return void v(g.intl.string(p.default.Wo5sQv));
            if (null == I || b) return;
            A(!0), v(null);
            let t = null;
            try {
                (t = await (0, u.gA)({ guild_id: I, install_scope: "user" })),
                    (0, c.Hc)(t),
                    (0, c.dv)(
                        t,
                        [
                            "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
                            e,
                        ].join("\n"),
                    ),
                    (0, a.pX)(f.BVt.CHANNEL(I, h.VV.VIBEGRATIONS, t)),
                    T();
            } catch (e) {
                if (null != t) {
                    (0, a.pX)(f.BVt.CHANNEL(I, h.VV.VIBEGRATIONS, t)), T();
                    return;
                }
                v(e instanceof Error ? e.message : g.intl.string(p.default.KKkp5Y));
            } finally {
                A(!1);
            }
        }, [w, I, b, T]),
        E = r.useCallback(() => {
            S().catch(() => void 0);
        }, [S]);
    return null == I
        ? (0, i.jsx)(l.Modal, {
              transitionState: t,
              onClose: n,
              title: g.intl.string(p.default["33l33s"]),
              actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "secondary", onClick: T }],
              children: (0, i.jsx)(s.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: g.intl.string(p.default["8DyNx1"]),
              }),
          })
        : (0, i.jsx)(l.Modal, {
              transitionState: t,
              onClose: n,
              title: g.intl.string(p.default["27bu14"]),
              actions: [
                  { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: T, disabled: b },
                  {
                      text: g.intl.string(p.default["f/Jz/R"]),
                      variant: "primary",
                      onClick: E,
                      loading: b,
                      disabled: "" === w.trim(),
                  },
              ],
              children: (0, i.jsx)(o.f, {
                  label: g.intl.string(p.default.DAm99t),
                  description: g.intl.string(p.default.blSmfQ),
                  placeholder: g.intl.string(p.default.FYN9Rl),
                  value: w,
                  onChange: y,
                  maxLength: 2e3,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: _,
                  disabled: b,
              }),
          });
}
