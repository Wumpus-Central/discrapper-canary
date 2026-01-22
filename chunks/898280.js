n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(406704),
    c = n(961350),
    u = n(576705),
    d = n(652215),
    f = n(985018),
    p = n(990014);
let h = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    b = l.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            l = (0, i.bG)([s.A], () => s.A.useReducedMotion),
            b = (0, i.bG)([u.A], () => u.A.can(d.xBc.SEND_MESSAGES_IN_THREADS, t)),
            g = (0, o.s5)(t),
            m = (0, i.bG)([c.default], () => c.default.getId());
        return n
            ? b && !g && t.ownerId !== m
                ? (0, r.jsxs)("div", {
                      className: p.aP,
                      children: [
                          (0, r.jsx)(a.akl, {
                              importData: h,
                              shouldAnimate: !l,
                              className: p.lY,
                          }),
                          (0, r.jsxs)("div", {
                              className: p.FS,
                              children: [
                                  (0, r.jsx)(a.Heading, {
                                      variant: "heading-md/semibold",
                                      children: f.intl.string(f.t.OmBThA),
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: f.intl.string(f.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, r.jsx)("div", {
                  className: p.yF,
              });
    });
