n.d(e, { default: () => p });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(732955),
    r = n(397927),
    c = n(47167),
    o = n(734057),
    u = n(181079),
    d = n(422258),
    x = n(985018),
    h = n(129115);
function p(t) {
    let { channelId: e, onClose: n, transitionState: p, heading: m, formTitle: f, allowReset: k = !1 } = t,
        v = (0, s.bG)([o.A], () => o.A.getChannel(e)),
        C = (0, c.Ay)(v),
        g = u.A.getNickname(e),
        [b, j] = i.useState(g ?? "");
    function y(t) {
        t.preventDefault(), (0, d.w6)(e, b), n();
    }
    return (0, a.jsx)("form", {
        onSubmit: y,
        children: (0, a.jsxs)(l.aFV, {
            title: m,
            actions: [
                { text: x.intl.string(x.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: m, onClick: y, variant: "primary", type: "submit" },
            ],
            onClose: n,
            transitionState: p,
            children: [
                (0, a.jsx)(r.ksK, {
                    label: f,
                    value: b,
                    onChange: j,
                    placeholder: C ?? void 0,
                    maxLength: 100,
                    autoFocus: !0,
                }),
                k && null != g
                    ? (0, a.jsx)("div", {
                          className: h.c,
                          children: (0, a.jsx)(r.QWc, {
                              text: x.intl.string(x.t.aE02Rz),
                              onClick: function () {
                                  (0, d.w6)(e, null), n();
                              },
                              textVariant: "text-sm/normal",
                          }),
                      })
                    : null,
                (0, a.jsx)(r.Text, {
                    className: h.h,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: x.intl.string(x.t["2vyz+N"]),
                }),
            ],
        }),
    });
}
