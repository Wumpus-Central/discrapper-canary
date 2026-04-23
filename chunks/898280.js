n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(604121),
    r = n(534514),
    o = n(834730),
    c = n(775602),
    d = n(406704),
    u = n(961350),
    h = n(576705),
    m = n(652215),
    A = n(985018),
    g = n(238301);
let _ = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    p = l.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            l = (0, a.bG)([c.A], () => c.A.useReducedMotion),
            p = (0, a.bG)([h.A], () => h.A.can(m.xBc.SEND_MESSAGES_IN_THREADS, t)),
            f = (0, d.s5)(t),
            E = (0, a.bG)([u.default], () => u.default.getId());
        return n
            ? p && !f && t.ownerId !== E
                ? (0, i.jsxs)("div", {
                      className: g.aP,
                      children: [
                          (0, i.jsx)(s.a, { importData: _, shouldAnimate: !l, className: g.lY }),
                          (0, i.jsxs)("div", {
                              className: g.FS,
                              children: [
                                  (0, i.jsx)(r.D, {
                                      variant: "heading-md/semibold",
                                      children: A.intl.string(A.t.OmBThA),
                                  }),
                                  (0, i.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: A.intl.string(A.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, i.jsx)("div", { className: g.yF });
    });
