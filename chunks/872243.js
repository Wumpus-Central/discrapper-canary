n.d(e, { default: () => m }), n(896048), n(228524);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(732955),
    r = n(397927),
    c = n(47167),
    o = n(734057),
    u = n(181079),
    d = n(422258),
    x = n(985018),
    h = n(129115);
function m(t) {
    let { channelId: e, onClose: n, transitionState: m, heading: p, formTitle: f, allowReset: k = !1 } = t,
        v = (0, i.bG)([o.A], () => o.A.getChannel(e)),
        C = (0, c.Ay)(v),
        b = u.A.getNickname(e),
        [g, j] = l.useState(null != b ? b : "");
    function y(t) {
        t.preventDefault(), (0, d.w6)(e, g), n();
    }
    return (0, a.jsx)("form", {
        onSubmit: y,
        children: (0, a.jsxs)(s.aFV, {
            title: p,
            actions: [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: p,
                    onClick: y,
                    variant: "primary",
                    type: "submit",
                },
            ],
            onClose: n,
            transitionState: m,
            children: [
                (0, a.jsx)(r.ksK, {
                    label: f,
                    value: g,
                    onChange: j,
                    placeholder: null != C ? C : void 0,
                    maxLength: 100,
                    autoFocus: !0,
                }),
                k && null != b
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
