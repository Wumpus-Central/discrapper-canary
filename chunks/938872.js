n.d(t, { default: () => m });
var l = n(477900),
    i = n(582128),
    r = n(189213),
    s = n(834730),
    o = n(103557),
    u = n(976860),
    a = n(948230),
    d = n(683180),
    c = n(18739),
    f = n(652215),
    p = n(746080),
    g = n(295813),
    h = n(375708);
function m(e) {
    let { transitionState: t, onClose: n } = e,
        [m, w] = i.useState(""),
        [_, A] = i.useState(null),
        [v, I] = i.useState(!1),
        T = i.useMemo(() => (0, d.$X)("VibegrationsCustomWidgetModal"), []),
        E = i.useCallback(() => {
            n().catch(() => void 0);
        }, [n]),
        S = i.useCallback((e) => {
            w(e), A(null);
        }, []),
        b = i.useCallback(async () => {
            let e = m.trim();
            if ("" === e) return void A(h.intl.string(g.default.Wo5sQv));
            if (null == T || v) return;
            I(!0), A(null);
            let t = null;
            try {
                (t = await (0, a.gA)({ guild_id: T, install_scope: "user" })),
                    (0, c.Hc)(t),
                    (0, c.dv)(
                        t,
                        [
                            "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
                            e,
                        ].join("\n"),
                    ),
                    (0, u.pX)(f.BVt.CHANNEL(T, p.VV.VIBEGRATIONS, t)),
                    E();
            } catch (e) {
                if (null != t) {
                    (0, u.pX)(f.BVt.CHANNEL(T, p.VV.VIBEGRATIONS, t)), E();
                    return;
                }
                A(e instanceof Error ? e.message : h.intl.string(g.default.KKkp5Y));
            } finally {
                I(!1);
            }
        }, [m, T, v, E]),
        y = i.useCallback(() => {
            b().catch(() => void 0);
        }, [b]);
    return null == T
        ? (0, l.jsx)(r.Modal, {
              transitionState: t,
              onClose: n,
              title: h.intl.string(g.default["33l33s"]),
              actions: [{ text: h.intl.string(h.t.cpT0Cq), variant: "secondary", onClick: E }],
              children: (0, l.jsx)(s.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: h.intl.string(g.default["8DyNx1"]),
              }),
          })
        : (0, l.jsx)(r.Modal, {
              transitionState: t,
              onClose: n,
              title: h.intl.string(g.default["27bu14"]),
              actions: [
                  { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: E, disabled: v },
                  {
                      text: h.intl.string(g.default["f/Jz/R"]),
                      variant: "primary",
                      onClick: y,
                      loading: v,
                      disabled: "" === m.trim(),
                  },
              ],
              children: (0, l.jsx)(o.f, {
                  label: h.intl.string(g.default.DAm99t),
                  description: h.intl.string(g.default.blSmfQ),
                  placeholder: h.intl.string(g.default.FYN9Rl),
                  value: m,
                  onChange: S,
                  maxLength: 2e3,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: _,
                  disabled: v,
              }),
          });
}
